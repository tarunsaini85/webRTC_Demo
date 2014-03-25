/************************************************************************************************************
  (C) www.dhtmlgoodies.com, April 2006

  Update log:
  August, 9th, 2006: Added a fix to the preserve aspect ratio feature ( Thanks to Urko Benito)
  August, 11th, 2006: If fixed ratio is set, resize crop area initially

  This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

  Terms of use:
  You are free to use this script as long as the copyright message is kept intact. However, you may not
  redistribute, sell or repost it without our permission.

  Thank you!

  www.dhtmlgoodies.com
  Alf Magne Kalleland

 ************************************************************************************************************/	
function ImageCropper(){

//global configurabe variables default value
var crop_imageWidth = 0;
var crop_imageHeight = 0;
var crop_originalImageWidth = 0;
var crop_originalImageHeight = 0;

arrGlobalConfigParams = {'cropToolBorderWidth':1, 'smallSquareWidth':7, 'crop_minimumWidthHeight':15, 'updateFormValuesAsYouDrag':false, 'crop_script_alwaysPreserveAspectRatio':true, 'crop_script_fixedRatio':3, 'percentageIntitialCrop':6};
/* ended */

var crop_script_browserIsOpera = navigator.userAgent.indexOf('Opera')>=0?true:false;
var cropDiv_left = false;
var cropDiv_top = false;
var cropDiv_right = false;
var cropDiv_bottom = false;  
var cropDiv_dotted = false;

var crop_currentResizeType = false;

var cropEvent_eventX;
var cropEvent_eventY;
var crop_resizeCounter = -1;
var crop_moveCounter = -1;

var crop_imageDiv = false;
var imageDiv_currentWidth = false;
var imageDiv_currentHeight = false;
var imageDiv_currentLeft = false;
var imageDiv_currentTop = false;

var smallSquare_tl;
var smallSquare_tc;
var smallSquare_tr;
var smallSquare_lc;
var smallSquare_rc;
var smallSquare_bl;
var smallSquare_bc;
var smallSquare_br;

var offsetSmallSquares = Math.floor(arrGlobalConfigParams.smallSquareWidth/2);
var preserveAspectRatio = false;
var cropWidthRatio = false;	// width of cropping area relative to height

var x1, x2, y1, y2, width, height;  
var initialCrop = 0;
var imageContainer;
var smallSquareImage;
var crop_createDivElements = function()
{
	crop_imageDiv= imageContainer;
	cropDiv_left = document.createElement('DIV');
	cropDivAlignment(cropDiv_left, 'crop_transparentDiv', 'visible', '0px', '0px', crop_imageHeight + 'px', initialCrop + 'px', '<span></span>');
	crop_imageDiv.appendChild(cropDiv_left);

	cropDiv_top = document.createElement('DIV');
	cropDivAlignment(cropDiv_top, 'crop_transparentDiv', 'visible', '0px', '0px', initialCrop + 'px', crop_imageWidth + 'px', '<span></span>');
	crop_imageDiv.appendChild(cropDiv_top);

	cropDiv_right = document.createElement('DIV');
	cropDivAlignment(cropDiv_right, 'crop_transparentDiv', 'visible', (crop_imageWidth - initialCrop) + 'px', '0px', crop_imageHeight + 'px', initialCrop + 'px', '<span></span>');
	crop_imageDiv.appendChild(cropDiv_right); 

	cropDiv_bottom = document.createElement('DIV');
	cropDivAlignment(cropDiv_bottom, 'crop_transparentDiv', 'visible', '0px', (crop_imageHeight-initialCrop) + 'px', initialCrop + 'px', crop_imageWidth + 'px', '<span></span>');
	crop_imageDiv.appendChild(cropDiv_bottom); 

	cropDiv_dotted = document.createElement('DIV');
	cropDivAlignment(cropDiv_dotted, 'crop_dottedDiv','', initialCrop + 'px', initialCrop + 'px', (crop_imageWidth-(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', (crop_imageHeight-(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', '<div></div>');
	cropDiv_dotted.style.cursor = 'move';
	if(crop_script_browserIsOpera){
		var div = cropDiv_dotted.getElementsByTagName('DIV')[0];
		div.style.backgroundColor='transparent';
		cropDiv_bottom.style.backgroundColor='transparent';
		cropDiv_right.style.backgroundColor='transparent';
		cropDiv_top.style.backgroundColor='transparent';
		cropDiv_left.style.backgroundColor='transparent';

	}
	cropDiv_dotted.onmousedown = cropScript_initMove;

	smallSquare_tl = document.createElement('IMG');
	smallSquareAlignment(smallSquare_tl, smallSquareImage, 'absolute', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', 'nw-resize', 'nw-resize');
	smallSquare_tl.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_tl);
	smallSquare_tr = document.createElement('IMG');
	smallSquareAlignment(smallSquare_tr, smallSquareImage, 'absolute', (crop_imageWidth - offsetSmallSquares - (arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', 'ne-resize', 'ne-resize');
	smallSquare_tr.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_tr);

	smallSquare_bl = document.createElement('IMG');
	smallSquareAlignment(smallSquare_bl, smallSquareImage, 'absolute', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', (crop_imageHeight - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', 'sw-resize', 'sw-resize');
	smallSquare_bl.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_bl);

	smallSquare_br = document.createElement('IMG');
	smallSquareAlignment(smallSquare_br, smallSquareImage, 'absolute', (crop_imageWidth - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', (crop_imageHeight - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', 'se-resize', 'se-resize');
	smallSquare_br.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_br);

	smallSquare_tc = document.createElement('IMG');
	smallSquareAlignment(smallSquare_tc, smallSquareImage, 'absolute', (Math.floor(crop_imageWidth/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - initialCrop) + 'px', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', 's-resize', 'n-resize');
	smallSquare_tc.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_tc);

	smallSquare_bc = document.createElement('IMG');
	smallSquareAlignment(smallSquare_bc, smallSquareImage, 'absolute', (Math.floor(crop_imageWidth/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - initialCrop) + 'px', (crop_imageHeight - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', 's-resize', 's-resize');
	smallSquare_bc.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_bc);

	smallSquare_lc = document.createElement('IMG');
	smallSquareAlignment(smallSquare_lc, smallSquareImage, 'absolute', (-offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px', (Math.floor(crop_imageHeight/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - initialCrop) + 'px', 'e-resize', 'w-resize');
	smallSquare_lc.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_lc);	

	smallSquare_rc = document.createElement('IMG');
	smallSquareAlignment(smallSquare_rc, smallSquareImage, 'absolute', (crop_imageWidth - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - (2*initialCrop)) + 'px', (Math.floor(crop_imageHeight/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2) - initialCrop) + 'px', 'e-resize', 'e-resize');
	smallSquare_rc.onmousedown = cropScript_initResize;
	cropDiv_dotted.appendChild(smallSquare_rc);		

	crop_imageDiv.appendChild(cropDiv_dotted); 
}

var cropDivAlignment = function(element,className, visibility, left, top, height, width, innerHTML){
        element.className = className;
        element.style.visibility = visibility;
        element.style.left = left;
        element.style.top = top;
        element.style.height = height;
        element.style.width = width;
        element.innerHTML = innerHTML;
}

var smallSquareAlignment = function(element , src, position, left, top, cursor, id){
        element.src = src;
        element.style.position = position;
        element.style.left = left;
        element.style.top = top;
        element.style.cursor = cursor;
        element.id = id;
}

var cropScript_initMove = function(e)
{
	if(document.all)e=event;

	if (e.target) source = e.target;
	else if (e.srcElement) source = e.srcElement;
	if (source.nodeType == 3) // defeat Safari bug
		source = source.parentNode;

	if(source.id && source.id.indexOf('resize')>=0)return;	

	imageDiv_currentLeft = cropDiv_dotted.style.left.replace('px','')/1;
	imageDiv_currentTop = cropDiv_dotted.style.top.replace('px','')/1;
	imageDiv_currentWidth = cropDiv_dotted.style.width.replace('px','')/1;
	imageDiv_currentHeight = cropDiv_dotted.style.height.replace('px','')/1;		
	cropEvent_eventX = e.clientX;
	cropEvent_eventY = e.clientY;		

	crop_moveCounter = 0;
	cropScript_timerMove();
	return false;
}

var cropScript_timerMove = function()
{
	if(crop_moveCounter>=0 && crop_moveCounter<10){
		crop_moveCounter++;
		cropScript_timerMove();
		return;
	}		
}

var cropScript_initResize = function(e)
{
	if(document.all)e = event;

	cropDiv_dotted.style.cursor = 'default';
	crop_currentResizeType = this.id;

	cropEvent_eventX = e.clientX;
	cropEvent_eventY = e.clientY;
	crop_resizeCounter = 0;
	imageDiv_currentWidth = cropDiv_dotted.style.width.replace('px','')/1;
	imageDiv_currentHeight = cropDiv_dotted.style.height.replace('px','')/1;
	imageDiv_currentLeft = cropDiv_dotted.style.left.replace('px','')/1;
	imageDiv_currentTop = cropDiv_dotted.style.top.replace('px','')/1;


	cropWidthRatio = cropDiv_dotted.offsetWidth / cropDiv_dotted.offsetHeight;
	if(arrGlobalConfigParams.crop_script_fixedRatio)cropWidthRatio = arrGlobalConfigParams.crop_script_fixedRatio;

	if(document.all){
		var div = cropDiv_dotted.getElementsByTagName('DIV')[0];
		div.style.display='none';
	}

	cropScript_timerResize();
	return false;
}

var cropScript_timerResize = function()
{
	if(crop_resizeCounter>=0 && crop_resizeCounter<10){
		crop_resizeCounter = crop_resizeCounter + 1;
		cropScript_timerResize();
		return;
	}
}

var crop_cancelEvent = function(e)
{
	if(document.all)e = event;
	if (e.target) source = e.target;
	else if (e.srcElement) source = e.srcElement;
	if (source.nodeType == 3) // defeat Safari bug
		source = source.parentNode;

	if(source.tagName && source.tagName.toLowerCase()=='input')return true;
	return false;
}

var mouseMoveEventInProgress = false;
var getAdjustedCoordinates = function(coordinates,currentCoordinates,aspectRatio,currentResize) {
	currentResize = currentResize.replace('-resize','');

	var minWidth = aspectRatio?arrGlobalConfigParams.crop_minimumWidthHeight*aspectRatio:arrGlobalConfigParams.crop_minimumWidthHeight;
	var minHeight = aspectRatio?arrGlobalConfigParams.crop_minimumWidthHeight/aspectRatio:arrGlobalConfigParams.crop_minimumWidthHeight;

	if(coordinates.left + coordinates.width + 2 > crop_imageWidth) {
		coordinates.width = crop_imageWidth - coordinates.left - 2;
	}
	if(coordinates.top + coordinates.height + 2 > crop_imageHeight) {
		coordinates.height = crop_imageHeight - coordinates.top - 2;
	}

	if(coordinates.height < minHeight){			
		coordinates.height = currentCoordinates.height;			
		coordinates.top = currentCoordinates.top;
	}	

	if(coordinates.width < minWidth){			
		coordinates.width = currentCoordinates.width;			
		coordinates.left = currentCoordinates.left;
	}

	if(aspectRatio) {
		var currentRatio = coordinates.width / coordinates.height;
		switch(currentResize) {
			case 'n':
				// Height is being resized - set new left coordinate
				var newWidth = Math.round(coordinates.height  * aspectRatio);							
				coordinates.left += (coordinates.width - newWidth);
				coordinates.width = newWidth;					
				break;
			case 'w':
			case 'nw':
			case 'ne':
				// Width is being resized - Set new top coordinate
				var newHeight = Math.round(coordinates.width  / aspectRatio);
				coordinates.top += (coordinates.height - newHeight);
				coordinates.height = newHeight;
				break;
			case 'e':
			case 'sw':
			case 'se':
				coordinates.height = Math.round(coordinates.width / aspectRatio);				
				break;	
			case 's':
				coordinates.width = Math.round(coordinates.height * aspectRatio);				
				break;				
			default:					
		}

		if(coordinates.left < 0) {		

			coordinates.width += coordinates.left;
			coordinates.height = coordinates.width / aspectRatio;
			coordinates.left = 0;				
		}
		if(coordinates.top < 0) {
			var origWidth = coordinates.width;
			coordinates.height += coordinates.top;
			coordinates.width = coordinates.height * aspectRatio;				
			coordinates.top = 0;	
			if(currentResize=='nw') {
				coordinates.left+=(origWidth-coordinates.width);
			}		
		}
		if(coordinates.width < minWidth) {					
			coordinates.width = minWidth;
			coordinates.height = coordinates.width / aspectRatio;
		}
		if(coordinates.height < minHeight) {					
			coordinates.height = minHeight;
			coordinates.width = coordinates.height * aspectRatio;
		}
		if(coordinates.left + coordinates.width + 2 > crop_imageWidth) {
			coordinates.width = crop_imageWidth - coordinates.left - 2;
			coordinates.height = Math.round(coordinates.width / aspectRatio) 
		}
		if(coordinates.top + coordinates.height + 2 > crop_imageHeight) {
			coordinates.height = crop_imageHeight - coordinates.top - 2;
			coordinates.width = Math.round(coordinates.height * aspectRatio)
		}				
	}
	if(coordinates.height < minHeight){			
		coordinates.height = currentCoordinates.height;			
		coordinates.top = currentCoordinates.top;
	}	
	if(coordinates.width < minWidth){			
		coordinates.width = currentCoordinates.width;			
		coordinates.left = currentCoordinates.left;
	}		
	return coordinates;
}

var cropScript_mouseMove = function(e)
{
	if(crop_moveCounter<10 && crop_resizeCounter<10)return;
	if(mouseMoveEventInProgress)return;		
	if(document.all)mouseMoveEventInProgress = true;
	if(document.all)e = event;

	if(crop_resizeCounter==10){
		var cropStyleObj = cropDiv_dotted.style;			
		if(e.ctrlKey || arrGlobalConfigParams.crop_script_alwaysPreserveAspectRatio)preserveAspectRatio=true; else preserveAspectRatio = false;

		var currentCoordinates =  {
		left:  		cropStyleObj.left.replace('px','')/1,
		top:	 	cropStyleObj.top.replace('px','')/1,
		width:		cropDiv_dotted.clientWidth,
		height:		cropDiv_dotted.clientHeight
		}
		var newCoordinates = {};
		newCoordinates.left = currentCoordinates.left;
		newCoordinates.top = currentCoordinates.top;
		newCoordinates.width = currentCoordinates.width;
		newCoordinates.height = currentCoordinates.height;

		if(crop_currentResizeType=='e-resize' || crop_currentResizeType=='ne-resize' || crop_currentResizeType == 'se-resize'){	/* East resize */				
			newCoordinates.width = Math.max(arrGlobalConfigParams.crop_minimumWidthHeight,(imageDiv_currentWidth + e.clientX - cropEvent_eventX));		
		}
		if(crop_currentResizeType=='s-resize' || crop_currentResizeType=='sw-resize' || crop_currentResizeType == 'se-resize'){
			newCoordinates.height = Math.max(arrGlobalConfigParams.crop_minimumWidthHeight,(imageDiv_currentHeight + e.clientY - cropEvent_eventY));
		}			
		if(crop_currentResizeType=='n-resize' || crop_currentResizeType=='nw-resize' || crop_currentResizeType=='ne-resize'){	
			var newTop = Math.max(0,(imageDiv_currentTop + e.clientY - cropEvent_eventY));				
			newCoordinates.height+=(currentCoordinates.top-newTop);
			newCoordinates.top = newTop;
		}
		if(crop_currentResizeType=='w-resize' || crop_currentResizeType=='sw-resize' || crop_currentResizeType=='nw-resize'){
			var newLeft = Math.max(0,(imageDiv_currentLeft + e.clientX - cropEvent_eventX));				
			newCoordinates.width+=(currentCoordinates.left-newLeft);
			newCoordinates.left = newLeft;
		}
		if(newCoordinates && (newCoordinates.left || newCoordinates.top || newCoordinates.width || newCoordinates.height)) {
			newCoordinates = getAdjustedCoordinates(newCoordinates,currentCoordinates,preserveAspectRatio?cropWidthRatio:false,crop_currentResizeType);
		}
		if(newCoordinates) {
			cropStyleObj.left = newCoordinates.left + 'px';
			cropStyleObj.top = newCoordinates.top + 'px';
			cropStyleObj.width = newCoordinates.width + 'px';
			cropStyleObj.height = newCoordinates.height + 'px';
		}
		if(!arrGlobalConfigParams.crop_script_fixedRatio && !e.ctrlKey)cropWidthRatio = cropDiv_dotted.offsetWidth / cropDiv_dotted.offsetHeight;	
	}

	if(crop_moveCounter==10){
		var tmpLeft = imageDiv_currentLeft + e.clientX - cropEvent_eventX;
		if(tmpLeft<0)tmpLeft=0;
		if((tmpLeft + imageDiv_currentWidth + (arrGlobalConfigParams.cropToolBorderWidth*2))>crop_imageWidth)tmpLeft = crop_imageWidth - imageDiv_currentWidth - (arrGlobalConfigParams.cropToolBorderWidth*2);
		cropDiv_dotted.style.left = tmpLeft + 'px';
		var tmpTop = imageDiv_currentTop + e.clientY - cropEvent_eventY;
		if(tmpTop<0)tmpTop=0;
		if((tmpTop + imageDiv_currentHeight + (arrGlobalConfigParams.cropToolBorderWidth*2))>crop_imageHeight)tmpTop = crop_imageHeight - imageDiv_currentHeight - (arrGlobalConfigParams.cropToolBorderWidth*2);
		cropDiv_dotted.style.top = tmpTop + 'px';
	}

	repositionSmallSquares();		
	resizeTransparentSquares();
	if(arrGlobalConfigParams.updateFormValuesAsYouDrag)cropScript_updateFormValues();
	mouseMoveEventInProgress = false;
}

var repositionSmallSquares = function()
{
	smallSquare_tc.style.left = (Math.floor((cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) /2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_bc.style.left = (Math.floor((cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) /2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_tr.style.left = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_rc.style.left = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_br.style.left = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';

	smallSquare_br.style.top = (cropDiv_dotted.style.height.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_bc.style.top = (cropDiv_dotted.style.height.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_bl.style.top = (cropDiv_dotted.style.height.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_lc.style.top = (Math.floor((cropDiv_dotted.style.height.replace('px','')/1 + arrGlobalConfigParams.cropToolBorderWidth)/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';
	smallSquare_rc.style.top = (Math.floor((cropDiv_dotted.style.height.replace('px','')/1 + arrGlobalConfigParams.cropToolBorderWidth)/2) - offsetSmallSquares -(arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px';

}

var resizeTransparentSquares = function()
{
	cropDiv_left.style.width = cropDiv_dotted.style.left;
	cropDiv_right.style.width = Math.max(0,crop_imageWidth - (arrGlobalConfigParams.cropToolBorderWidth*2) - (cropDiv_dotted.style.width.replace('px','')/1 + cropDiv_dotted.style.left.replace('px','')/1)) + 'px';
	cropDiv_right.style.left = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) + cropDiv_dotted.style.left.replace('px','')/1) + 'px';
	cropDiv_bottom.style.height = Math.max(0,crop_imageHeight - (arrGlobalConfigParams.cropToolBorderWidth*2) - (cropDiv_dotted.style.height.replace('px','')/1 + cropDiv_dotted.style.top.replace('px','')/1)) + 'px';
	cropDiv_bottom.style.top = (cropDiv_dotted.style.height.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2) + cropDiv_dotted.style.top.replace('px','')/1) + 'px';

	cropDiv_top.style.height = cropDiv_dotted.style.top;

	cropDiv_bottom.style.left = cropDiv_dotted.style.left;
	cropDiv_bottom.style.width = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px' ;
	cropDiv_top.style.left = cropDiv_dotted.style.left;
	cropDiv_top.style.width = (cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) + 'px' ;

	if(cropDiv_left.style.width=='0px')cropDiv_left.style.visibility='hidden';else cropDiv_left.style.visibility='visible';
	if(cropDiv_right.style.width=='0px')cropDiv_right.style.visibility='hidden';else cropDiv_right.style.visibility='visible';
	if(cropDiv_bottom.style.width=='0px')cropDiv_bottom.style.visibility='hidden';else cropDiv_bottom.style.visibility='visible';
}

var cropScript_updateFormValues = function()
{
	x1 = Math.round(cropDiv_dotted.style.left.replace('px','')/1 * (crop_originalImageWidth/crop_imageWidth));
	y1 = Math.round(cropDiv_dotted.style.top.replace('px','')/1 * (crop_originalImageHeight/crop_imageHeight));
	width = Math.round((cropDiv_dotted.style.width.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) * (crop_originalImageWidth/crop_imageWidth));
	height = Math.round((cropDiv_dotted.style.height.replace('px','')/1 + (arrGlobalConfigParams.cropToolBorderWidth*2)) * (crop_originalImageHeight/crop_imageHeight));
	x2 = x1 + width;
	y2 = y1 + height;
}

var cropScript_stopResizeMove = function()
{
	crop_resizeCounter = -1;
	crop_moveCounter = -1;
	cropDiv_dotted.style.cursor = 'move';
	cropScript_updateFormValues();
	if(document.all){
		var div = cropDiv_dotted.getElementsByTagName('DIV')[0];
		div.style.display='block';
	}
}

var cropScript_setCropSizeByInput = function()
{
	if(!arrGlobalConfigParams.crop_script_fixedRatio) arrGlobalConfigParams.crop_script_fixedRatio = 1;
	var  initial_crop_script_fixedRatio = 1;
	if(arrGlobalConfigParams.crop_script_fixedRatio < 1 && arrGlobalConfigParams.crop_script_fixedRatio != 0){
		initial_crop_script_fixedRatio = 1 / arrGlobalConfigParams.crop_script_fixedRatio;
	}
	else{ 
		initial_crop_script_fixedRatio = arrGlobalConfigParams.crop_script_fixedRatio;
	}
	var widthMargin = crop_imageWidth * arrGlobalConfigParams.percentageIntitialCrop / 100 ;
	var heightMargin = crop_imageHeight * arrGlobalConfigParams.percentageIntitialCrop / 100 ;
	cropDiv_dotted.style.left = widthMargin + 'px';
	cropDiv_dotted.style.top = heightMargin +'px';

	var heightFlag = widthFlag = false;

	/*if(crop_imageWidth > crop_imageHeight ){
		widthFlag = true;
	}else if (crop_imageWidth < crop_imageHeight){
		heightFlag = true;*/
	if(arrGlobalConfigParams.crop_script_fixedRatio && arrGlobalConfigParams.crop_script_fixedRatio >= 1){
		widthFlag = true;
	}else if(arrGlobalConfigParams.crop_script_fixedRatio && arrGlobalConfigParams.crop_script_fixedRatio < 1){
		heightFlag = true;
	}
	
	if(widthFlag)
	{
		var initialHeight =  (crop_imageHeight - (2 * heightMargin));
		var maxHeight = (crop_imageWidth  - ( 2 * widthMargin)) / initial_crop_script_fixedRatio;
		if(initialHeight > maxHeight) initialHeight = maxHeight;
		cropDiv_dotted.style.height = initialHeight + 'px';
		cropDiv_dotted.style.width = initialHeight * initial_crop_script_fixedRatio + 'px';
	}
	else if(heightFlag){
		var initialWidth  = (crop_imageWidth  - ( 2 * widthMargin));
                var maxWidth = (crop_imageHeight  - ( 2 * heightMargin)) / initial_crop_script_fixedRatio;
		if(initialWidth > maxWidth) initialWidth = maxWidth;
		cropDiv_dotted.style.width = initialWidth + 'px';
		cropDiv_dotted.style.height = initialWidth * initial_crop_script_fixedRatio + 'px';
	}
	repositionSmallSquares();		
	resizeTransparentSquares();
}

var cropScript_setBasicEvents = function()
{
	document.documentElement.ondragstart = crop_cancelEvent;
	document.documentElement.onselectstart = crop_cancelEvent;
	document.documentElement.onmousemove = cropScript_mouseMove;		
	document.documentElement.onmouseup = cropScript_stopResizeMove;	
}

var crop_initFixedRatio = function()
{
	cropScript_setCropSizeByInput();
}

var configureGlobalParameters = function(arrayConfig)
{
	for (x in arrayConfig)
	{
		arrGlobalConfigParams[x] = arrayConfig[x];	
	}
}

this.init_imageCrop = function(imageId, imgContainer, func1, func2, OkButton, cancelButton, smallSquareImg, arrayConfig)
{
	smallSquareImage = smallSquareImg;
	arrayConfig = arrayConfig || {};
	imageContainer = imgContainer;
	configureGlobalParameters(arrayConfig);
	crop_imageWidth = parseInt(imageId.style.width);
	crop_imageHeight = parseInt(imageId.style.height);
	if(arrGlobalConfigParams.percentageIntitialCrop > 0){
		if(crop_imageHeight > crop_imageWidth)
			initialCrop = Math.round(crop_imageHeight / arrGlobalConfigParams.percentageIntitialCrop);
		else
			initialCrop = Math.round(crop_imageWidth / arrGlobalConfigParams.percentageIntitialCrop);
	}
	if(imageId.naturalWidth && imageId.naturalHeight){
		crop_originalImageWidth = imageId.naturalWidth;
		crop_originalImageHeight = imageId.naturalHeight;
	}
	else{
		var tmpImage = new Image();
		tmpImage.src = imageId.src;
		crop_originalImageWidth = tmpImage.width;
		crop_originalImageHeight = tmpImage.height;
	}
	cropScript_setBasicEvents();
	crop_createDivElements();
	cropScript_updateFormValues();
	crop_initFixedRatio();
/*	if(arrGlobalConfigParams.crop_script_fixedRatio && arrGlobalConfigParams.crop_script_alwaysPreserveAspectRatio){
		crop_initFixedRatio();
	}*/
	var okButtonId = document.getElementById(OkButton);
	if (okButtonId.attachEvent) {
		okButtonId.attachEvent("onclick", callbackOk);
	} else {
		okButtonId.addEventListener("click", callbackOk, false);
	}
	function callbackOk(){
		func1.call(window, x1, y1, x2, y2);
		return true;
	}

	var cancelButtonId = document.getElementById(cancelButton);
	if (cancelButtonId.attachEvent) {
		cancelButtonId.attachEvent("onclick", callbackCancel);
	} else {
		cancelButtonId.addEventListener("click", callbackCancel, false);
	}
	function callbackCancel(){
		func2.call(window);
		return true;
	}
}
}
