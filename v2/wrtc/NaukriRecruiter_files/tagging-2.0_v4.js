/*
	Author Tarunjeet Saini
*/

var tag2 = {
	createdTags : {},
	
	init : function(params){
		var id = params.id,
			pH = params.placeholder || null,
			pF = params.prefill || null,
			tL = params.tagLimits,
			wPT = params.wordsPerTag,
			cPW = params.charactersPerWord,
			rV = params.validate || null,
			oC = params.onCreate || null,
			oD = params.onDelete || null,
			sN = params.initSugg || 'SKILLS';
			
			if(tL){
				tL.min=tL.min || [null];
				tL.max=tL.max || [null];
			}
			else{tL = {min:[null], max:[null]}}
			
			if(wPT){
				wPT.min=wPT.min || [null];
				wPT.max=wPT.max || [null];
			}
			else{wPT = {min:[null], max:[null]}}
			
			if(cPW){
				cPW.min=cPW.min || [null];
				cPW.max=cPW.max || [null];
			}
			else{cPW = {min:[null], max:[null]}}
			
			
			
			
		
		if(id.constructor === Array){
			for(var x=0;x<id.length;x++){
				this.createMain(id[x],pF,tL,wPT,cPW,rV,oC,oD,sN,pH)
			}
		}
		else{this.createMain(id,pF,tL,wPT,cPW,rV,oC,oD,sN,pH)}
	},
	
	createMain : function(id,pF,tL,wPT,cPW,rV,oC,oD,sN,pH){
		var inpElm,ul,li,errCnt,cTEArr,hInp,evt,x,f,inpVal,inpValArr,y,tags=[],trmdTags=[],z,wordArr=[],words=[],w,i,rel=$n('#'+id).attr('rel');
		ul = $n('<ul>');
		li = $n('<li>');
		li.addClass('tag2TxtBx');
		inpElm = $n('<input>');
		inpElm.attr({'type':'text','id':id+'_inp','autocomplete':'off'});
		if(pH){inpElm.attr({placeholder:pH})}
		if(rel && rel!=''){
			var errElm = $n('#'+id+'_err');
			inpElm.attr('rel',rel);
			errElm.removeAttr('id');
			errElm.attr('id',id+'_inp_err');
		};
		this.attachSuggester(inpElm,sN);
		this.attachEvents(id,inpElm,tL,wPT,cPW,rV,oC,oD);
		errCnt = $n('<span>');
		errCnt.attr({'id':id+'_err'});
		hInp = $n('<input>');
		hInp.attr({'name':id,'id':id+'_hdn','type':'hidden','class':'tag2ErLbl'});
		li.append(inpElm);
		ul.append(li);
		$n('#'+id).append(ul).append(errCnt).append(hInp);
		if(pF){
			this.prefillTags(id,pF,oC,oD);
		}
	},
	
	prefillTags : function(id,pF,oC,oD){
		var li,retLis=[];
		if(pF[id] && pF[id].length>0){
			this.createTags(pF[id],id,oC,oD,false);
			this.setHiddenVal(id);
		}
	},
	
	attachSuggester : function(inpElm,sN){
		inpElm.addEvent('focus',function(){
				(tag2.checkFile('commonSuggestor_v6.js')?'':tag2.injectFile("http://static.naukimg.com/rstatic/s/1/0/j/commonSuggestor_v6.js"));
				(tag2.checkFile("initSugg_v1.js")?'':tag2.injectFile("http://static.naukimg.com/rstatic/s/1/0/j/initSugg_v1.js"));
				if(!$n(this).attr('rel1') || $n(this).attr('rel1')!=1){
					$n(this).attr('rel1','1');
					var setS=setInterval(function(){
						try{
							if(initSuggest){
								clearInterval(setS);
								initSuggest(inpElm,sN);
							}
						}catch(e){}
					},100);
				}
			});
	},
	
	attachEvents : function(id,inpElm,tL,wPT,cPW,rV,oC,oD){
		var x,inpEvents=['blur','keydown','keyup'],liSel,shiftFlg=false,keyCode;
		//$n('#'+id).addEvent('click',function(){inpElm.setFocus()});
		for(x=0;x<inpEvents.length;x++){
			(function(evt,id,inpElm,tL,wPT,cPW,rV,oC,oD){
				inpElm.addEvent(evt,function(event){
					keyCode = event.keyCode;
					if(keyCode==16){
						if(evt=='keydown'){shiftFlg = true}
						else if(evt=='keyup'){shiftFlg = false}
					}
					liSel = $n('#'+id+' ul').childrens('.sel');
					if(evt=='keydown' && keyCode!=37 && keyCode!=38 && keyCode!=39 && keyCode!=40 && keyCode!=13 && keyCode!=8 && keyCode!=46){
						liSel.removeClass('sel');
					}
					if((evt=='blur') || (evt=='keydown' && (keyCode==13 || keyCode==188 || keyCode==8 || keyCode==46))){
						if(evt=='keydown'){
							if(keyCode==8 && liSel.length>0){
								inpElm.val('');
								tag2.deleteTags(event,id,"prev",oD);
							}
							else if(keyCode==46){
								if(liSel.length>0){
									//inpElm.val('');
									tag2.deleteTags(event,id,"next",oD);
								}
								else {
									elms = $n('#'+id).childrens('li');
									if((inpElm.val()=='' || tag2.getCursorPosition(inpElm.currObj())==inpElm.val().length) && elms.length>1){
										tag2.navigate(id,'next');
										//tag2.deleteTags(event,id,"next",oD);
									}
								}
								
							}
							else if(liSel.length>0){
								tag2.deleteTags(event,id,false,oD);
								$n.preventDefault(event);
							}
							else if(evt=='keydown' && liSel.length<=0 && keyCode!=8 && keyCode!=46 & !shiftFlg){
								if($n('#'+id+'_inp').val()!=''){$n.preventDefault(event)}
								tag2.processTags(id,inpElm,tL,wPT,cPW,rV,oC,oD);
							}
						}
						if(evt=='blur'){tag2.processTags(id,inpElm,tL,wPT,cPW,rV,oC,oD)}
					}
					if(evt=='keydown' && (keyCode==37 || keyCode==39)){
						if(keyCode==37){
								tag2.navigate(id,'prev');
						}
						else if(keyCode==39){
								tag2.navigate(id,'next');
						}
					}
				});
			})(inpEvents[x],id,inpElm,tL,wPT,cPW,rV,oC,oD)
		}		
	},
	
	processTags : function(id,inpElm,tL,wPT,cPW,rV,oC,oD){
		var inpTags = this.getTagsArray(inpElm.val());
		this.initTagCreate(inpTags,id,tL,wPT,cPW,rV,oC,oD);
	},
	
	getTagsArray : function(val){
		var inpVal = val.split(','),ret;
		ret = this.sanitize(inpVal);
		return ret;
	},
	
	initTagCreate : function(inpTags,id,tL,wPT,cPW,rV,oC,oD){
		var cLmts = this.checkLimits(inpTags,wPT,cPW),
			tTmts = this.checkTagLimits(inpTags,id,tL),
			rVald = this.checkRegEx(inpTags,id,rV);
		if(tTmts){
			//console.warn(tTmts);
			this.handleErrors(id,'show',tTmts);			
		}
		else if(cLmts){
			//console.warn(cLmts);
			this.handleErrors(id,'show',cLmts);
		}
		else if(rVald){
			//console.warn(rVald);
			this.handleErrors(id,'show',rVald);
		}
		else{
			this.handleErrors(id,'hide');
			this.createTags(inpTags,id,oC,oD,true);
			this.setHiddenVal(id);
		}
	},
	
	checkLimits : function(inpTags,wPT,cPW){
		var x,y,tLn=inpTags.length,wrds,chars,err=false;
		if(tLn>0){
			for(x=0;x<tLn;x++){
				wrds=inpTags[x].split(' ');
				if(wPT.min[0] && wrds.length<wPT.min[0]){
					err = wPT.min[1];
				}
				else if(wPT.max[0] && wrds.length>wPT.max[0]){
					err = wPT.max[1];
				}
				else{
					for(y=0;y<wrds.length;y++){
						chars = wrds[y];
						if(cPW.min[0] && chars.length<cPW.min[0]){
							err = cPW.min[1];
						}
						else if(cPW.max[0] && chars.length>cPW.max[0]){
							err = cPW.max[1];
						}
					}
				}
			}
		}
		return err;
	},
	
	checkTagLimits : function(inpTags,id,tL){
		var iTLn=inpTags.length,cTLn=(tag2.createdTags[id])?tag2.createdTags[id].length:0,err=false;
		if(tL.min[0] && (+iTLn+cTLn)<tL.min[0]){
			err = tL.min[1];
		}
		else if(tL.max[0] && (+iTLn+cTLn)>tL.max[0]){
			err = tL.max[1];
		}
		return err;
	},
	
	checkRegEx : function(inpTags,id,rV){
		var x,y,tLn=inpTags.length,wrds,chars,regX,err=false;
		if(rV && tLn>0){		
			if(rV.custom){
				var fnRet = rV.custom();
				if(fnRet){
					err = fnRet
				}
			}
			if(rV.regEx){
				regX=new RegExp(rV.regEx)
				for(x=0;x<tLn;x++){
					wrds=inpTags[x].split(' ');				
					for(y=0;y<wrds.length;y++){
						chars = wrds[y];
						if(!regX.test(chars)){
							err = rV.msg;
						}
					}
				}
			}
		}
		return err;
	},
	
	createTags : function(inpTags,id,oC,oD,focs){
		var x,tLn=inpTags.length, inpTxtBox = $n('#'+id+'_inp');
		if(!tag2.createdTags[id] || tag2.createdTags[id]=='undefined' || tag2.createdTags[id].length<1){tag2.createdTags[id]=[];this.removeAllTags(id)}
//			console.log(inpTags,id,oC,oD,focs,tLn)
		for(x=0;x<tLn;x++){

			if($n.trim(inpTags[x]).length>0/* && inpTxtBox.attr('placeholder').toLowerCase() != inpTxtBox.val().toLowerCase()*/){
				if(this.checkExisting(inpTags[x],tag2.createdTags[id])){
					
					$n('#'+id+'_inp').val('');
				}
				else{
				//	console.log('creteTag')
					tag2.createdTags[id].push(inpTags[x].replace(/'/g, "&rsquo;").replace(/"/g,'&quot;'));
					var li,span,em;
					li=$n('<li>');
					p=$n('<div>');
					inSpan=$n('<span>');
					inSpan.html(inpTags[x].replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g,'&nbsp;'));
					a=$n('<a>');
					a.html("X");
					a.attr('href','javascript:void(0)');
					a.addEvent('click',function(event){tag2.deleteTags(event,id,false,oD)});
					p.append(inSpan);
					p.append(a);
					li.append(p);
					$n('#'+id+' ul').append(li);
					setTimeout(function(){$n('#'+id+'_inp').val('')},100);
					if(focs){$n('#'+id+'_inp').setFocus()};
					if(oC){oC()}
				}
			}
		}
	},
	
	removeAllTags : function(id){
		var x,lis = $n('#'+id+" ul").childrens('li');
		if(lis.length>1){
			for(x=1;x<lis.length;x++){
				lis.eq(x).remove();
			}
		}
	},
	
	deleteTags : function(evt,id,flg,oD){
		var targ = evt.target || evt.srcElement,li,elm;
		if(targ.nodeName.toLowerCase()=='a'){
			li = $n(targ).parent().parent();
			elm = $n(targ);
		}
		else if(targ.nodeName.toLowerCase()=='input'){
			li = $n(targ).parent().parent().childrens('.sel').eq(0);
			elm = li.childrens('a').eq(0);
		}
		if(flg=='prev'){
			var prevLi=li.prev();
			if(prevLi.childrens('p').length>0){
				prevLi.addClass('sel');
			}
		}
		if(flg=='next'){
			var nextLi=li.next();
			if(nextLi && nextLi.childrens('p').length>0){
				nextLi.addClass('sel');
			}
		}
		delVal=elm.prev().html();
		this.deleteFromList(id,delVal);
		elm.parent().parent().remove();
		this.handleErrors(id,'hide');
		$n('#'+id+'_inp').setFocus();
		this.setHiddenVal(id);
		if(oD){oD()};
	},
	
	deleteFromList : function(id,delVal){
		var x,tagS=tag2.createdTags[id];
		delVal=delVal.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/'/g,'&rsquo;').replace(/"/g,'&quot;').replace(/&nbsp;/g,' ');
		for(x=0;x<tagS.length;x++){
			if($n.trim(delVal)==$n.trim(tagS[x])){
				tagS.splice(x,1);
			}
		}
		tag2.createdTags[id]=tagS;
	},
	
	trimVal : function(val){var val=val.replace(new RegExp("^[\\s]+", "g"), "");val=val.replace(new RegExp("[\\s]+$", "g"), "");val=val.replace(/\s+/g, ' ');return val},
	
	checkExisting : function(val,tagsArr){
		if(tagsArr.length>0){
			for(var x=0;x<tagsArr.length;x++){
				if($n.trim(val)==$n.trim(tagsArr[x])){
					return true;
				}
			}
		}
		else{return false}
	},
	
	sanitize : function (arr){
		var x,i,temp1=[],temp2={},ret=[];
		for(x=0;x<arr.length;x++){
			if(arr[x]!=''){
				temp1.push(this.trimVal(arr[x]));
			}
		}
	  	for (i=0;i<temp1.length;i++)
	  	temp2[temp1[i].toLowerCase()] = temp1[i];
	  	for(var k in temp2){
			if(temp2[k]!=''){
	  			ret.push(temp2[k]);
			}
	  	}
	  	return ret;
	},
	
	handleErrors : function(id,act,msg){
		var inpObj=$n('#'+id+'_inp'),erLb=$n('#'+id+'_err');
		if(act=='show'){
			erLb.html(msg);
			erLb.removeClass('tag2Ok');inpObj.removeClass('ok');
			(erLb.hasClass('tag2Err')=='tag2Err')?'':erLb.addClass('tag2Err');
			(inpObj.hasClass('err')=='err')?'':inpObj.addClass('err');
		}
		if(act=='hide'){
			erLb.removeClass('tag2Err');inpObj.removeClass('err');
			(erLb.hasClass('tag2Ok')=='tag2Ok')?'':erLb.addClass('tag2Ok');
			(inpObj.hasClass('ok')=='ok')?'':inpObj.addClass('ok');
			
		}
	},
	
	navigate : function(id,dir){	
		var inp = $n('#'+id+'_inp'),
			elms = $n('#'+id).childrens('li'),
			curPos = this.getCursorPosition(inp.currObj()) || 0,
			liSel = $n('#'+id+' ul').childrens('.sel');
			if(dir=='next'){
				if(liSel.length>0){
					if(liSel.eq(0).next()){
						liSel.eq(0).removeClass('sel');
						liSel.eq(0).next().addClass('sel');
					}
				}
				else if((inp.val().length==0 ||curPos==inp.val().length) && elms.length>1){
					inp.parent().next().addClass('sel');
				}
			}
			else if(dir=='prev'){
				if(liSel.length>0 && liSel.eq(0).prev().childrens('p').length>0){
					if(liSel.eq(0).prev()){
						liSel.eq(0).removeClass('sel');
						liSel.eq(0).prev().addClass('sel');
						setTimeout(function(){tag2.moveCursorToEnd(inp.currObj()),100});
					}
					
				}
				else if(liSel.length>0 && liSel.eq(0).prev().childrens('input').length>0){
					liSel.eq(0).removeClass('sel');
				}
			}
	},	
	
	getCursorPosition : function doGetCaretPosition (oField) {

		  // Initialize
		  var iCaretPos = 0;
		
		  // IE Support
		  if (document.selection) {
		
			// Set focus on the element
			oField.focus ();
		
			// To get cursor position, get empty selection range
			var oSel = document.selection.createRange ();
		
			// Move selection start to 0 position
			oSel.moveStart ('character', -oField.value.length);
		
			// The caret position is selection length
			iCaretPos = oSel.text.length;
		  }
		
		  // Firefox support
		  else if (oField.selectionStart || oField.selectionStart == '0')
			iCaretPos = oField.selectionStart;
		
		  // Return results
		  return (iCaretPos);
	},
	
	moveCursorToEnd : function (el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	},
	
	setHiddenVal : function(id){
		var hElm = $n('#'+id+'_hdn'), val = tag2.createdTags[id];
		hElm.val(val.join(',').replace(/'/g,'&rsquo;').replace(/"/g,'&quot;'));
	},
	
	injectFile : function(filePath){
		var fileType = filePath.substring(filePath.lastIndexOf('.')+1);
		switch (fileType){
			case 'js' : {
				var fileref=$n('<script>');
			 	fileref.attr('type',"text/javascript");
			  	fileref.attr('src',filePath);
			  	break;
			}
			case 'css' : {
			  	var fileref=$n('<link>');
			  	fileref.attr('rel',"stylesheet");
			  	fileref.attr('type',"text/css");
			  	fileref.attr('href',filePath);
			  	break;
			}
		}
		(typeof fileref!="undefined")?$n('head').append(fileref):'';
	},
	
	checkFile : function(file){
		var fileType = file.substring(file.lastIndexOf('.')+1);
		var ret=false;
		switch(fileType){
			case 'js' : {
				var scripts=$n('script');
				for(var x=0;x<scripts.length;x++){
					var src=scripts.eq(x).currObj().getAttribute('src');
					(src && src.indexOf(file)>=0)?ret=true:'';
				}
				break;
			}
			case 'css' : {
				var scripts=$n('link');
				for(var x=0;x<scripts.length;x++){
					var href=scripts.eq(x).currObj().getAttribute('href');
					(href && href.indexOf(file)>=0)?ret=true:'';
				}
				break;
			}
		}
		return ret;
	}
		
}
