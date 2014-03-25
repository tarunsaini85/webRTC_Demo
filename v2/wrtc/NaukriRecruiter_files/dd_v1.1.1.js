var DD = function(obj,prevObj,sts,key){
	var X = this,inpVal,srchCntr=0,defWth_fx=30,defWth=30,fl=0,Tagfocus=[],brw = $n.browser(),dependentIdKey=[],onTagClk = [],onClickLi = [],onTagCrt =[];
	X.idKey=[];
	X.idLen=0;
	X.clrId = obj.clearTagId;
	X.depend = obj.dependent;
	X.srchBx = obj.searchBox;
	X.tagsSorting = obj.tagsSorting;
	X.MrgPrfAryOrdr = obj.maintianMergePrefillArrayOrder || false;
	X.Ary={};
	X.onClearTag=[]; // call back function for click on clearTag/clearAllTsg
	for(X.idKey[X.idKey.length] in obj.id);// calculate the no of dropdown id's
	X.idLen=X.idKey.length; // set no of id's in a single call
	if(obj.tags==true){
		throw new Error('"tags" parameter only accept "false" value')				
	}else if(obj.tags==false){
		if(obj.tagInSepContainer){
			throw new Error('No need to specify this parameter, because you specify tag:false')
		}	
	}

	for(i=0; i<X.idLen; i++){		//calculate the length of data associated with each dropdown id
		var idname  = X.idKey[i];		
		Tagfocus[idname] = 0;   // contain
		DD.tag[idname] = obj.tags;
		DD.TagCnt[idname] = 0;
		DD.plcHold[idname] = obj.placeHolderText||'';
		DD.TagSpCnt[idname] = obj.tagInSepContainer||'';
		DD.openLayer[idname]=obj.openDDLayer||false;
		DD.preTxt[idname]= obj.preText||'You have selected';
		DD.Allflg[idname]= '';
		DD.postTxt[idname]= obj.postText||'item(s)';
		DD.Chkbox[idname] = obj.checkBox||false;
		!DD.NLi[idname]?DD.NLi[idname]=[]:'';
		if(obj.resetPrefillValues){// to reset(empty checkBox Container) values to avoid prefill case... used in SM
			DD.ChkBoxContr[idname] = {}
		}else{
			!DD.ChkBoxContr[idname]?DD.ChkBoxContr[idname]={}:''			
		}		
		if(obj.onClickReq){
			onClickLi[idname] = obj.onClickReq;	
		}else{
			var gid = DD.G
			onClickLi[idname] = function(gid){};
		}	
		onTagClk[idname]=obj.onTagClick?obj.onTagClick:function(){}; //Call back function on tag click		
		onTagCrt[idname]=obj.onTagCreate?obj.onTagCreate:function(){}; //call when tag create
		
		if(!key){
			X.Ary[idname]={}
			X.Ary[idname]['A']= obj.id[idname][0];	
		}else{
 			if(!DD.Chkbox[idname]){
            	DD.Ary[idname]={}; 
            }
			!DD.Ary[idname]?DD.Ary[idname]={}:'';
			DD.Ary[idname][key] = obj.id[idname][0];	
			X.Ary[idname]=DD.Ary[idname]
		}
		
	}
	for(x in obj.clearTagId){
		for(y in obj.clearTagId[x]){
			X.onClearTag[x]= obj.clearTagId[x][y]
		}
	}
	X.sugHgt = obj.maxHeight?obj.maxHeight:300
	
	function findparentId(node, ID) {//checked			// this function find the parent element having the specified ID and return the parent ID
		if(node){
			if(node.id != ID && node.id!=null){
				return findparentId(node.parentNode, ID);					
			}else if(node.id !=null){
				return node.id;
			}
		}
	}
	function handleDocumentClick(e){
		var t,targ;
		if (!e) e = window.event;
		targ = e.srcElement || e.target ;
		t = findparentId(targ.parentNode, DD.G[0])
		if(DD.G[1] != t && DD.G[3]==1 && !DD.openLayer[DD.G[1]]){
			if(DD.G[3]==1){
				hideDD(DD.G[1]);
				DD.G[1] = DD.G[0];
			}
		}		
	}
	/*Gloabla Array that contain the id of currently open Dropdowns*/
	if(brw.name=="msie" && brw.version < 9){
		document.attachEvent('onclick',handleDocumentClick)
	}else{
		document.addEventListener('click',handleDocumentClick)	
	}
	
	X.Fn = {		
			preserveEventafterClone : function(selector,Id,id,bool){
				$n('#'+selector).addEvent('click',function(e){ //remove tags by click on tag cross button
					$n.stopPropagation(e);
					removeTags(Id,id,$n(this).parent().html().replace('<span></span>','').replace('<a href="javascript:void(0)"></a>',''),bool)
					bool?onTagClk[id](obj,DD.TagCnt[id]):''
					SetInputText(id)  // for decrement count value when user click on tag cross sign
				})
			},			
			keyUpEv: function (e){//must be put code at key_up event 			
				var id = $n(this).attr('id'), iD= id.split('_')[1], kCd = e.keyCode || e.which;					
				var ddTxtVal = $n('#'+id).val().replace(/\b/g,'');								
				if(kCd==13 && DD.curActElm.length>0){// create tag on enter
					if(DD.curActElm.hasClass('active')){
						var anchorTxt =	DD.curActElm.childrens('a')	
						if(DD.Chkbox[iD]){
							var tagid = anchorTxt.attr('id')+'_'+Escp(DD.curActElm.attr('bindto'));						
							if(anchorTxt.hasClass('chkd')){
								removeTags('tg_'+tagid,iD,anchorTxt.html(),true)
							}else{
								CreateTags(anchorTxt.html(),tagid,iD);
								anchorTxt.addClass('chkd')
							}			
						}else{
							SingleSelection(anchorTxt.html(),anchorTxt.attr('id').split('_'));
						}	
					}
				}	
				if(kCd!=13 && kCd!=32 && kCd!=37 && kCd!=38 && kCd!=39 && kCd!=40){					
					X.Fn.initSearch(ddTxtVal,id);
					if($n('#dp_'+iD).currObj().style.display=="none"){
						$n('#dp_'+iD).show()
						DD.G[1]=iD;
						DD.G[3]=1;
					}
				}			
			},
			initSearch: function(sTxtValue,id){
							var html='';
							srchCntr=0;
							id = id.split('_')[1]
							var Ary = X.Ary[id];			
							if(sTxtValue){
								sTxtValue = sTxtValue.replace(/&amp;/gi, '&').replace(/[\s]+/g," ").replace(/^\s/,"");				
								for(K in Ary){						
									for(Q in Ary[K]){
										if(typeof Ary[K][Q] === 'object'){// for optgroup case			
											var Li='',dObj;						
											dObj= Ary[K][Q];
											for(m in dObj){							
												Li +=searchData(dObj[m],sTxtValue,id,id+'_'+m+'_'+Q,K)
											}
											if(Li){
												html +='<li class="optgroup">'+Q+'</li>'+Li;
												srchCntr++;		
											}	
										}else{// for single case
											$n('#Crx_'+id).show()
											html +=searchData(Ary[K][Q],sTxtValue,id,id+'_'+Q,K)											
										}		
									}										
								}
							}else{	
								$n('#Crx_'+id).hide()
								html = appendData(id,'')[0]
								srchCntr=DD.liCntrFx[id]
							}
							if(!html){
								var txt = obj.noDataTxt?obj.noDataTxt:"No data found in search"
								html='<li class="noData">'+txt+'</li>'	
								srchCntr++;					
							}			
							$n('#dp_'+id+' ul').html(html);
							DD.liCntr[id] = srchCntr;
							max_height(id);
							firstHeighlight(id);
							PickValuesFromDD(id);
							liMousehover(id);

						}
						
				
	}

	
	function toggleArrow(id){
		if($n('#dp_'+id).currObj().style.display!="block"){
			hideDD(id);
			$n('#Arw_'+id).toggleClass('DDarwUp','DDarwDwn');
		}
	}
	function init(e){					
		fillData();	// to append data dynamically at run time in Dropdown					
		for(i=0; i< X.idLen; i++){
			var ID = X.idKey[i]
			liMousehover(ID)
			if(DD.Chkbox[ID] && !DD.TagSpCnt[ID]){
				$n('#'+ID+' ul.DDsearch').addEvent('click',function(){
					var id = $n(this).parent().parent().attr('id')
					if(id){
						$n('#inp_'+id).setFocus()	
					}
				})	
			}
			
		}
		if(X.clrId){  // clear all tags and data on html tag fire event					
			for(var x in X.clrId){
				$n('#'+x).addEvent('click',function(e){												
					var clrid = $n(this).attr('id');		
					brw.name=="msie"?clrid = clrid?clrid:$n(this).parent().attr('id'):''
					var param = X.clrId[clrid];
					if(param['id']){
						var Ides = param['id'];
						for(y in Ides){
							var ID = Ides[y];
							$n('#hid_'+ID).attr('value','');
							DD.Chkbox[ID]?removeAllTags(ID):''						
							DD.Allflg[ID]=''
							hideDD(ID)
							obj.dependent?onClickLi[ID](obj,''):''
						}	
					}						
					if(param['clrCalbackfun']){
						X.onClearTag[clrid](obj,0,$n(this))
					}						
				})	
			}
		}									
	}	
	function clickEv(e){
		var id =$n(this).attr('id').split('_')[1];
		if($n('#dp_'+id).currObj().style.display=="none"){
			showDD(id);
		}	
	}
	function blurEv(e){
		var id =DD.G[0]
		!DD.TagSpCnt[id] && DD.Chkbox[id]?$n('#'+id+' .tagit:last').removeClass('TagSelected'):''
		if(!DD.Chkbox[id]){
			var txt,hd= $n('#hid_'+id),inp=$n('#inp_'+id), rr = uEscp(hd.attr('opt')),val=hd.attr('value'),
			dataAry = obj.id[id][0];			
			txt = rr?dataAry[rr][val]:dataAry?dataAry[val]:''
			if(!inp.val()){
				hd.val('')					
				if(DD.plcHold[id]){
					inp.val(DD.plcHold[id]).css({'color':'#999'})	
				}
			}else if(txt){
				inp.val(txt).css({'color':'#444'})	
			}
		}
	}
	function focusEv(e){//It fires when focus comes in dropdown text box			
		var id = $n(this).attr('id'), iD = id.split('_')[1], dropDisp = $n(this).getStyle($n('#'+iD +' .drop').currObj(),'display')	// it check the display status(block,hide) of drop div
		toggleArrow(iD)
		for(i=0;i< X.idLen; i++){	
			if(iD == X.idKey[i] && !DD.openLayer[iD]){
				if(DD.G[1] != iD || dropDisp!="block"){
					DD.G[0] = iD;
					DD.G[1] && DD.G[1]!=iD && !DD.openLayer[DD.G[1]] ? hideDD(DD.G[1]):''
					if($n('#ul_'+iD+' li').length < DD.NLi[iD][1]){
						var html = appendData(iD,'')
						$n('#dp_'+iD+' ul').html(html[0])
						DD.liCntr[iD]=DD.liCntrFx[iD]
						PickValuesFromDD(iD)
						liMousehover(iD)
					}
					showDD(iD);
				}
			}
		}
		$n('#'+id).css({'color':'#444'})		
		if(DD.Chkbox[iD]){
			$n(this).val('')
		}else{
			if(DD.plcHold[iD]!= '' && $n('#'+id).val() === DD.plcHold[iD]){
				$n('#'+id).val('')
			}
		}
		
	}
	function keyDownEv(e){		
		var wth,td = $n(this).attr('id'),
		id = td.split('_')[1],
		kCd = e.keyCode || e.which,
		maxWth = $n('#'+id).width()-15,
		ddTxtVal = $n('#'+td).val().replace(/\b/g,'');
		if(kCd==13 || kCd==38){//for multiple select
			$n.preventDefault(e);		
		}
		if(kCd==13 && DD.G[3]==0 && !DD.Chkbox[id]){// for single select	
			$n('#dFrom').currObj().submit()
		}
		
		(kCd==9 || kCd==27)?hideDD(id):''	// check why it is not work no keyUp								
		dropDisp = $n(this).getStyle($n('#dp_'+id).currObj(),'display')
		if(kCd == 8){
			if(DD.Chkbox[id] && !DD.TagSpCnt[id] && ddTxtVal && DD.tag[id]!=false){
				wth = DecreaseTxtBoxWth(maxWth);
				$n('#inp_'+id).css({width:wth+'px'})					
			}
		}else if((kCd >= 97 && kCd<=122) || (kCd >= 65 && kCd<=90) || (kCd >= 48 && kCd<=57)){
			if(!DD.TagSpCnt[id] && DD.Chkbox[id] && DD.tag[id]!=false){
				wth= IncreaseTxtBoxWth(maxWth);	
				$n('#inp_'+id).css({width:wth+'px'})
			}
		}

		if(!ddTxtVal && DD.Chkbox[id]){//must be put code at keyDown event			
			var lastTag=$n('#'+id+' .tagit:last'); 
			var tagId = lastTag.attr('id')	
			if(DD.TagCnt[id] > 0 && e.keyCode==8 && !DD.TagSpCnt[id] && tagId.length>0){					
				if(!Tagfocus[id]){					
					$n('#'+tagId).addClass('TagSelected')
					Tagfocus[id]=1						
				}else{
					removeTags(tagId,id,true)
					Tagfocus[id]=0
				}						
			}else if(tagId.length>0){
				$n('#'+tagId).removeClass('TagSelected')
				Tagfocus[id]=0
			}
		}
		if(kCd==40){// down arrow key
			if(dropDisp == "none"){
				hideDD(DD.G[1])			
				showDD(id)		
			}else{			
				var node,nodeRef =DD.curActElm.next()					
				if(nodeRef.length>0 && !nodeRef.hasClass('noData')){
					node= nodeRef.hasClass('optgroup')?nodeRef.next():nodeRef
					DD.curActElm.removeClass('active')	
					node.addClass('active')	
					DD.curActElm=node
					scrollHandler(id)
				}
			}												
		}else if(kCd==38){// up arrow key
			var node,nodeRef =DD.curActElm.prev()
			if(nodeRef.length>0){		
				node=nodeRef.hasClass('optgroup')?nodeRef.prev():nodeRef 			
				if(node){
					DD.curActElm.removeClass('active')					
					node.addClass('active')				
					DD.curActElm=node
					scrollHandler(id)	
				}
			}				
		}
	}
	function SetInputText(id){
		var midVal;			
		if(DD.Allflg[id]=="all"){
			midVal = "all"
		}else{
			midVal = DD.TagCnt[id]	
		}
		if(DD.TagCnt[id]){				
			 DD.TagSpCnt[id] || DD.tag[id]==false?$n('#inp_'+id).val(DD.preTxt[id]+' '+midVal+' '+DD.postTxt[id]):''						
		}else if(!$n('#hid_'+id).val()){
/*			var addCls=''
			if(DD.Chkbox[id]){
				addCls = !DD.TagSpCnt[id]?"setWidth":''
			}
*/			$n('#Crx_'+id).hide()
			//DD.plcHold[id]?$n('#inp_'+id).val(DD.plcHold[id]).css({color:'#999'}).addClass(addCls):''
			$n('#'+id+' li.frst').attr('style','float:none')
			DD.plcHold[id]?$n('#inp_'+id).val(DD.plcHold[id]).css({color:'#999',width:''}):''
		}
	}
	function createLi(id,txt,bnd,chkd){
		bnd = bnd?'bindTo="'+bnd+'"':''
		chkd= chkd?'class="'+chkd+'"':''
		return '<li class="pickVal" '+bnd+'><a href="javascript:void(0)" '+chkd+' id='+id+ '>'+txt+'</a></li>'
	}
	function selChkBox(Lid,id){			
		var mtch=0				
		for(x in DD.ChkBoxContr[id]){
			if(Lid == DD.ChkBoxContr[id][x]){
				mtch=1	 	
			}
		}
		if(mtch){return true}else{return false}
	}
	function selCheckBox(id,KY,M,n){ // n is only avail in CASE of optGroup
		var flg =0;			
		for(x in DD.ChkBoxContr[id]){
			flg=1;
			break;	
		}
		if(flg){
			if(n){
				return selChkBox(id+'_'+n+'_'+KY+'_'+M,id)?'chkd':''	
			}else{
				return selChkBox(id+'_'+KY+'_'+M,id)?'chkd':''
			}
		}
	}
	
	function appendData(id,jSonAry,njson){
		var html='',
		Tagcontainer=[],
		inpTxt='',
		cntr=0,q=0;/*mustbe Defined null*/
		for(var M in X.Ary[id]){		
			for(var key in X.Ary[id][M]){
			  var KYtxt = Escp(key),
			  KY = KYtxt.replace(/\//gi,'xSlashX').replace(/\-/gi,'HxF');
				if(typeof X.Ary[id][M][key] === 'object'){//optgroup case					
					html += '<li class="optgroup" id='+'opt_'+ KY +' bindTo='+M+'>'+key+'</li>';					
					cntr++
					for(m in X.Ary[id][M][key]){						
						var n = Escp(m)
						if(jSonAry[id]){						
							if(jSonAry[id][m]){
								var prfKey;
								jSonAry[id][m]? prfKey=m:''
								if(prfKey === m){
									inpVal = m;
									inpTxt = X.Ary[id][M][key][m]	
									var t = M?id+'_'+n+'_'+KY+'_'+M : id+'_'+n+'_'+KY,
									TagData1=[inpTxt,t,id,n];
									Tagcontainer[q++]=TagData1;
									cntr++									
									html += createLi(id+'_'+n+'_'+KY,X.Ary[id][M][key][m],M)
									}
							}else{
								if(njson === m){
									inpVal = m;
									inpTxt = X.Ary[id][M][key][m]		
								}
								cntr++	
								var chkd = selCheckBox(id,KY,M,n)
								html += createLi(id+'_'+n+'_'+KY,X.Ary[id][M][key][m],M,chkd)
							}			
						}else{	
							if(njson === m){
								inpVal = m;
								inpTxt = X.Ary[id][M][key][m]		
							}
							var chkd = selCheckBox(id,KY,M,n)
							html += createLi(id+'_'+n+'_' +KY,X.Ary[id][M][key][m],M,chkd)
							cntr++	
						}
					}
				}else{// without optgroup case case
					if(DD.Chkbox[id]){  //checkBox Case
						var prfKey='';
						if(jSonAry){
							jSonAry[id][key]? prfKey=key:''
						}
						if(prfKey==key){
							var TagData1=[X.Ary[id][M][key],id+'_'+KY+'_'+M,id,key];
							Tagcontainer[q++]=TagData1															
							html += createLi(id+'_' +KY,X.Ary[id][M][key],M,'chkd')
							cntr++							
						}else{								
							var chkd = selCheckBox(id,KY,M,n)
							html += createLi(id+'_' +KY,X.Ary[id][M][key],M,chkd)
							cntr++		
						}
					}else{//single Select without optgroup and without checkbox
						if(obj.id[id][1]==key){
							html += createLi(id+'_' +KY,X.Ary[id][M][key])
							inpVal = key;
							inpTxt = X.Ary[id][M][key]
							cntr++
							SingleSelection(X.Ary[id][M][key],[id,key])// for single select dependent case with prefill
						}else{
							html += createLi(id+'_' +KY,X.Ary[id][M][key])
							cntr++								
						}
					}
				}
			}
		}
		if(DD.Chkbox[id] && X.tagsSorting==false){
			var newAry = [],i=0;
			for(var x in njson){					
				for(var y in Tagcontainer){
					if(Tagcontainer[y][3]==x){
						newAry[i++]=Tagcontainer[y]
					}		
				}					
			}
			Tagcontainer=newAry;
		}			
		return [html,cntr,Tagcontainer,inpTxt];
	}
	
	function fillData(){			//Append Dynamically data to dropdown							
		var jSonAry=[];			
		for(var i=0;i<X.idLen;i++){				
			var Id=X.idKey[i];
			if(DD.Chkbox[Id]){
				var njson={};
				if(obj.id[Id][1]){				
					for(ky in obj.id[Id][1]){												
						njson[obj.id[Id][1][ky]]='1';
					}
				}
			}else{
				njson=obj.id[Id][1]
			}				
			jSonAry[Id] = njson,inpVal='';			
			var j=optBinding = 0;
			if(obj.dependTo){
				for(x in prevObj.id){
					dependentIdKey[i]=x
				}
				if(sts=='Checked'){								
					if($n('#dp_'+Id).length!=0){
						DD.NLi[Id] = appendData(Id,jSonAry,njson)
						$n('#dp_'+Id+' ul').html(DD.NLi[Id][0])
						PickValuesFromDD(Id)
					}else{
						DD.NLi[Id] = appendData(Id,jSonAry,njson)
						fillDatainDropdwonLayer(Id ,DD.NLi[Id][0],i,DD.NLi[Id][3]);	
					}
					//DD.NLi[Id][1] = DD.liCntr[Id]?DD.liCntr[Id]+DD.NLi[Id][1]:DD.NLi[Id][1]						
				}else{
					if($n('#dp_'+dependentIdKey[i]+' ul li a.chkd').length==0){
						$n('#'+Id+' ul').removeClass('brBotN')
						$n('#dp_'+Id).remove()
						$n('#hid_'+Id).val('') // can't remove because of name attribute missing
						$n('#ifrm_'+Id).remove()							
						var clone= $n('#inp_'+Id).val('').clone();
						$n('#inp_'+Id).remove()																										
						setTimeout(function(){
							$n('#'+Id+ ' div ul li.frst').append(clone)
						},10)
						X.srchBx==false?$n('#'+Id+' div.DDwrap').css({'display':'block'}):''
						removeAllTags(Id)							
						DD.NLi[Id]=[]	
						X.Ary[Id]={}
						DD.Ary[Id]={}
					}else{
						var cntr=0
						$n('#dp_'+Id+' ul li').each(function(){
							if($n(this).attr('bindTo')==key){
								var anch = $n(this).childrens('a')
								if(anch.length>0){
									var id = anch.attr('id');
									if(anch.hasClass('chkd')){
										delete DD.ChkBoxContr[Id][uEscp(id.split('_')[1])]											
										removeTags('tg_'+id+'_'+Escp(key),Id,anch.html(),true)
									}	
								}
								cntr++;
								$n(this).remove()	
							}
						})
						delete X.Ary[Id][key]
						DD.NLi[Id][1]=DD.NLi[Id][1]-cntr
					}
				}
			}else{
				if($n('#hid_'+Id).val().length>0){	// when user call dd form at trigger(eg:onClick) many times , then to solve the prefill duplicate problem
					$n('#hid_'+Id).val('')
					removeAllTags(Id)
					DD.ChkBoxContr[Id]={}  //(Lightbox case) in nonDependent case remove checked element and also remove all values from hidden fields	
				}
				DD.NLi[Id] = appendData(Id,jSonAry,njson)					
				fillDatainDropdwonLayer(Id ,DD.NLi[Id][0],i,DD.NLi[Id][3]);											
			}
			DD.liCntrFx[Id]=DD.liCntr[Id]=DD.NLi[Id][1]
			max_height(Id)
			if(sts!="Unchecked"){
				if(DD.Chkbox[Id] && DD.NLi[Id][2]){ // create tag on prefill basis
					for(var k=0;k<DD.NLi[Id][2].length;k++){				
						for(var z in obj.id[Id][1]){
							if(obj.id[Id][1][z]==DD.NLi[Id][2][k][3]){ 
								break;	
							}
						}
						CreateTags(DD.NLi[Id][2][k][0],DD.NLi[Id][2][k][1],DD.NLi[Id][2][k][2],z);
					}
				}
			}

			SetInputText(Id)					
		}// end of for X.idLen loop
	}
	function fillDatainDropdwonLayer(id,html,i,inpTxt){
		var clrAll='',ifr='',srchTxt=$n('#'+id+' ul li input.srchTxt'), movToLi = $n('#'+id+' ul.DDsearch li'), checkbox=DD.Chkbox[id]?'class="ChkboxEnb"':'',
		nm = srchTxt.attr('name');	
		if(obj.clearAllInside){
			var text = 'Clear All';
			for(x in obj.clearAllInside){text = obj.clearAllInside[x]}
			clrAll= '<div class="DDclearAll" id="clrAll_'+id+'">'+text+'</div>'
		}	
				
		if($n('#dp_'+id).length==0){
			srchTxt.attr({'id':'inp_'+id,'name':''})
			if($n('#hid_'+id).length==0){
				movToLi.append('<input id="hid_'+id+'" type="hidden" name="'+nm+'">')
			}				
			ifr = '<iframe id=ifrm_'+ id+' class="backlayer" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>'
			$n('#'+id).append('<div class="drop" id="dp_'+ id+'">'+clrAll+'<ul id="ul_'+id+'" '+checkbox+'></ul></div>'+ifr);	
			
			/*attach event on dropdown up and down arrow*/
			$n('#Arw_'+id).addEvent('click',function(e){	
				var id = $n(this).attr('id').split('_')[1]
				if($n('#dp_'+id).currObj().style.display=="block"){
					hideDD(id);
				}else{
					$n('#inp_'+id).setFocus()	
				}
			})			
		}			
		var sRtx=$n('#inp_'+id)		
		sRtx.val('');			
		$n('#hid_'+id).attr({'value':''})
		if(!DD.Chkbox[id]  && inpVal){
			$n('#hid_'+id).attr({'value':inpVal})
			sRtx.val(inpTxt).css({'color':'#444'})
		}
		if(X.srchBx==false){
			$n('#'+id+' div.DDwrap').css({'display':'none'})
			$n('#'+id+' div.drop').css({'position':'static'})
		}else{
			$n('#'+id+' div.drop').css({'borderTop':0})
		}			
		//Add events in dropDown
		if($n('#ul_'+id+ ' li').length==0){
			sRtx.addEvent('focus',focusEv).addEvent('keydown',keyDownEv).addEvent('keyup',X.Fn.keyUpEv).addEvent('blur',blurEv).addEvent('click',clickEv)				
		}
		$n('#ul_'+id).html(html);
		html = '';
		DD.openLayer[id]?showDD(id):''			
		PickValuesFromDD(id)			
	}
	function liMousehover(id){
		$n('#dp_'+id+ ' ul li.pickVal').addEvent('mouseover',function(){
			!DD.curActElm?firstHeighlight(id):''
			DD.curActElm.removeClass('active')
			brw.name=="msie" ? $n(this).parent().addClass('active'):$n(this).addClass('active')							
			DD.curActElm=$n(this)
		}).addEvent('mouseout',function(){	
			brw.name=="msie" ? $n(this).parent().removeClass('active'):$n(this).removeClass('active')	
		})				
	}
	function showDD(id){// show dropdown 
		$n('#'+id+' .DDsearch').addClass('brBotN');
		$n('#'+id+' .drop').show()
		$n('#ul_'+id).currObj().scrollTop=0;	
		var wth= $n('#'+id).width()-2+'px'
		$n('#ifrm_'+id).css({width:wth});	
		$n('#dp_'+id).css({'width':wth});
		firstHeighlight(id)				
		!obj.openDDLayer?max_height(id):'';
		DD.G[1]=id;
		DD.G[3]=1;
	}
	function hideDD(id){
		$n('#dp_'+id).hide();
		$n('#ifrm_'+id).css({height:0});
		$n('#'+id+' .DDsearch').removeClass('brBotN');	
		$n('#'+id+' .backlayer').css({'visibility':'hidden'});
		DD.curActElm?DD.curActElm.removeClass('active'):'';
		DD.Chkbox[id]?$n('#inp_'+id).val(''):'';
		$n('#Arw_'+id).replaceClass('DDarwUp','DDarwDwn')	
		SetInputText(id)
		DD.G[3]=0;
	}			
	function firstHeighlight(id){			
		DD.curActElm = $n('#dp_'+id+' li.pickVal:first');
		DD.curActElm.addClass('active')						
		var key = Escp($n('#hid_'+id).attr('value')),flg=0;				
		if(key && !DD.Chkbox[id]){
			DD.curActElm.removeClass('active')
			$n('#dp_'+id+' ul li').each(function(){
				var t,l,aid = $n(this).childrens('a').attr('id')
				if(aid.length){
					t = aid.split('_')
					if(uEscp(t[1])== uEscp(key)){
						if(!$n(this).hasClass('active')){
							flg=1;
							$n(this).addClass('active')
							DD.curActElm = $n(this)
						}
					}
				}
			})
			if(flg==0){
				DD.curActElm.addClass('active')
			}	
		}
	}
	function max_height(id){		 // set max heigh of dropdown according to the user specified if user not specified the set default maximum height						
		var k=$n('#ul_'+id),ifL = $n('#ifr_'+id),liHgt=0,i=0, li= $n('#dp_'+id+' ul li:first');
		while(i<DD.liCntr[id] && X.sugHgt >= liHgt && li){
			liHgt += li.height();
			li=li.next();
			i++;
		}
		//liHgt=liHgt+2;
		if(X.sugHgt < liHgt){
			k.css({height:X.sugHgt+'px',overflowY:'scroll'})
			ifL.css({height:X.sugHgt+'px'})
		}
		else{		
			k.css({height:liHgt+'px',overflowY:'auto','width':'100%'})
			ifL.css({height:liHgt+'px'})
		}	
	}	
	function PickValuesFromDD(td){          // On selection it select the data from the dropdown and throw to specific(on the basic of ID) text field or or any HTML tag eg. Div, span, textarea 			
		var q, t='';			// must be initialize here
		$n('#dp_'+td+' .pickVal a').addEvent('mousedown',function(e){				
			if(DD.Chkbox[td]){				
				var z=0,aTag;
				aTag = $n(this);			
				aId = aTag.attr('id')			
				if($n('#'+aId).hasClass('chkd')){
					z=1;
				}			
				q = aTag.html();
				if(aTag.hasClass('chkd')){
					aTag.removeClass('chkd')	
				}else{
					aTag.addClass('chkd')
				}
				if(z==1){
					var tgId = aId						
					if($n(this).parent().attr('bindto')){
						tgId = aId+'_'+ Escp($n(this).parent().attr('bindto'))
					}
					removeTags('tg_'+tgId,aId.split('_')[0],q,true)
				}else{
					var bnd = $n(this).parent().attr('bindto')
					bnd?aId=aId+'_'+Escp(bnd):''
					CreateTags(q,aId,td);
				}
			}else{
				if(DD.G[3]==1){
					SingleSelection($n(this).html(),$n(this).attr("id").split('_'))
				}
			}
			DD.Chkbox[td]?setTimeout(function(){$n('#inp_'+td).setFocus();},100):''
		});
	}
	function SingleSelection(txt,key){// when dropdown having a single select functionality	

		var id =key[0],
		opt= key[2]?key[2]:''
		txt = txt.replace(/(<([^>]+)>)/ig,"").replace(/&amp;/gi, '&')	
		$n('#inp_'+id).val(txt);
		$n('#Crx_'+id).show()
		$n('#hid_'+id).attr({'value': uEscp(key[1]),'opt':opt})	
		hideDD(id);
		onClickLi[id](obj, uEscp(key[1]))
	}
	function scrollHandler(id){//checked  // handle the dropdown scroll functionality
		var scrollContr ='#dp_'+id+ ' ul#ul_'+id,
			maxHeight=$n(scrollContr).height(),
			visible_top=$n(scrollContr).currObj().scrollTop,
			visible_bottom=maxHeight + visible_top,
			high_top=(DD.curActElm.position().top-$n(scrollContr).position().top) + $n(scrollContr+ ' li').currObj().scrollTop,
			high_bottom=high_top + DD.curActElm.height();
		if (high_bottom >= visible_bottom){
		  $n(scrollContr).currObj().scrollTop =(high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0;
		} else if (high_top < visible_top) {
		  $n(scrollContr).currObj().scrollTop = high_top;
		}
	}
	function emptyHidField(key,id,txt){    //checked
		txt?txt.toLowerCase()=="all"?DD.Allflg[id]='':'':'';						
		var txtVal = $n('#hid_'+id).attr('value');
		key = '"'+ uEscp(key)+'"'
		if(txtVal.split(",").length > 1){
			key = txtVal.replace(new RegExp('(\\,'+key+')|('+key+'\\,)'), '');
		}else{
			$n('#clrAll_'+id).hide()
	//		DD.TagSpCnt[id]?$n('#'+DD.TagSpCnt[id]).show():''
			key = '';
			$n('#inp_'+id).css({'width':''})
			$n('#'+id+' li.frst').attr('style','float:none')
		}
		$n('#hid_'+id).val(key)
	}
	function removeTags(tagId,id,txt,bool){//checked
		var rep = tagId.replace('tg_',''), tgId = rep.split('_'), tmp = tgId.length==4?tgId[0]+'_'+tgId[1]+'_'+tgId[2]:tgId[0]+'_'+tgId[1] // tgId.length=4 for optgroup case
		$n('#'+tmp).removeClass('chkd');
		$n('#'+tagId).remove();
		emptyHidField(rep.split('_')[1],id,txt);
		DD.TagCnt[id]--;			
		for(x in DD.ChkBoxContr[id]){
			if(DD.ChkBoxContr[id][x]==rep){
				delete DD.ChkBoxContr[id][x]
			}
		}
		bool?onClickLi[id](obj,uEscp(tgId[1]),'Unchecked','',DD.TagCnt[id]):''
	}
	function removeAllTags(id){//checked			
		for(x in DD.ChkBoxContr[id]){
			var Id = DD.ChkBoxContr[id][x], dep_Id = Id.split('_'),newId;
			if(dep_Id.length==3){
				newId = dep_Id[0]+'_'+dep_Id[1];
			}else if(dep_Id.length==4){
				newId = dep_Id[0]+'_'+dep_Id[1]+'_'+dep_Id[2];
			}
			$n('#'+newId).removeClass('chkd');
			$n('#tg_'+Id).remove();
		}
		//DD.TagSpCnt[id] && $n('#'+DD.TagSpCnt[id]+ ' li').length==0?$n('#'+DD.TagSpCnt[id]).hide():''
		$n('#clrAll_'+id).hide();	
		DD.ChkBoxContr[id]={};
		DD.TagCnt[id]=0;			
	}	
	function CreateTags(q,t,id,prfAryindex){//checked
		var spl = uEscp(t).split('_'),lianchorTemp = t.split('_'),
		Lianchor=lianchorTemp.length==3?lianchorTemp[0]+'_'+lianchorTemp[1]: lianchorTemp[0]+'_'+lianchorTemp[1]+'_'+lianchorTemp[2];
		DD.TagCnt[id]++;
		if(!X.depend){								
			q = q.replace(/(<([^>]+)>)/ig,"").replace(/&amp;/gi, '&');
			obj.tagwithOptGroup?q='<b>'+spl[2].replace('xSlashX','/').replace(/SxP/gi,' ')+'</b>'+'('+q+')':''
			var optgrpName,selector,Id,li = $n('<li>').append('<span class="tagTxt">'+q+'</span>')
			Id = 'tg_'+t;
			var spContId = DD.TagSpCnt[id];
			if(spContId || DD.tag[id] == false){
				var newTag = li.append($n('<a>').addClass('dCross').attr({'href':'javascript:void(0)'})).addClass('tagit').attr({'id':Id}),
				extCont = $n('#'+spContId).currObj();
				if(X.MrgPrfAryOrdr){
					var refNode = extCont.children[prfAryindex];
					if(refNode){
						refNode.parentNode.insertBefore(newTag.currObj(),refNode);	
					}else{
						$n('#'+spContId).append(newTag)
					}
				}else{
					DD.tag[id]==false?'':extCont.insertBefore(newTag.currObj(),extCont.firstChild)
				}
				$n('#inp_'+id).css({color:'#444'});
				selector = Id +' a.dCross';
			}else{
				$n('#'+id + ' ul.DDsearch').prepend(li.append($n('<span>').addClass('dCross')).addClass('tagit').attr({id:Id}));
				$n('#inp_'+id).css({width:'30px'});
				selector = Id +' span.dCross';
			}
			$n('#'+Lianchor).addClass('chkd')
			X.Fn.preserveEventafterClone(selector,Id,id,true)
		}
		setValueInHiddenField(spl[1],id,q)
		DD.ChkBoxContr[id][spl[1]]=t
		onClickLi[id](obj, uEscp(spl[1]),'Checked',$n('#tg_'+t),DD.TagCnt[id])
	}		
	function searchData(innerHTML,sTxtValue,id,key,bindTo){
		var html='';			
		getPos=(innerHTML.toLowerCase()).indexOf(sTxtValue.toLowerCase());
		strLower = innerHTML.toLowerCase();
		sTxtValueLower = sTxtValue.toLowerCase();
		spaceVal = ((strLower.indexOf(' '+sTxtValueLower)) < 0) ? false : strLower.indexOf(' '+sTxtValueLower);
		bracketVal = ((strLower.indexOf('('+sTxtValueLower)) < 0) ? false : strLower.indexOf('('+sTxtValueLower) ;
		slashVal = ((strLower.indexOf('/'+sTxtValueLower)) < 0) ? false : strLower.indexOf('/'+sTxtValueLower) ;				
		if(getPos>=0 && ((spaceVal || bracketVal || slashVal)) || getPos==0){
			if(getPos){
				if(spaceVal){
					getPos = spaceVal+1
				} else if(bracketVal){
					getPos = bracketVal+1
				} else if(slashVal){
					getPos = slashVal+1
				}
			}
			new1 = innerHTML.substr(0, getPos);		
			e = '<b>'+innerHTML.substr(getPos, sTxtValue.length)+'</b>';
			new2 = innerHTML.substr(getPos+sTxtValue.length, innerHTML.length);				
			KY = Escp(key);
			if(selChkBox(KY+'_'+bindTo,id)){					
				html = createLi(KY,new1+e+new2,bindTo,'chkd')	
			}else{
				html = createLi(KY,new1+e+new2,bindTo)
			}
			srchCntr++;
		}	//end of getPos if	
		return html;
	}
	
	function Escp(key){// encode key
		return escape(key.replace(/&/gi,'AxMpS').replace(/\./gi,'dot').replace(/\s/g, 'SxP').replace(/\(/gi, 'opBrcX').replace(/\)/gi, 'clBrcX').replace(/\#/gi, 'xHaXsHx').replace(/\-/gi,'HxF').replace(/\@/gi,'RxR8AT8RxR'))
	}
	function uEscp(key){ // decode key
		return unescape(key.replace(/AxMpS/gi,'&').replace(/dot/gi,'.').replace(/SxP/gi,' ').replace(/opBrcX/gi,'(').replace(/clBrcX/gi,')').replace(/xSlashX/gi,'/')).replace(/HxF/gi,'-').replace(/xHaXsHx/gi,'#').replace(/RxR8AT8RxR/gi,'@')
	}
	function IncreaseTxtBoxWth(mx){	   // increase texbox width while entering the character accordingly
		if(mx > defWth){
			return defWth +=5;
		}else{
			defWth +=1;
		}
	}
	function DecreaseTxtBoxWth(mx){     //Decrease texbox width while removing or deleting the charecter
		if($n('#'+DD.G[0]).val() != "" && defWth > defWth_fx){
			if(mx > defWth){
				return defWth -=5;
			}else{
				defWth -=1;
			}
		}
	}	
	function setValueInHiddenField(key,id,txt){
		if(txt.toLowerCase()=="all"){
			DD.Allflg[id]='all';
		}
		key = '"'+ uEscp(key)+'"';
		var hdVal = $n('#hid_'+id).val()
		if(!hdVal){
			$n('#hid_'+id).val('['+key+']')
			$n('#clrAll_'+id).show()
			DD.TagSpCnt[id]?$n('#'+DD.TagSpCnt[id]).show():!X.depend?$n('#'+id+' li.frst').attr('style','float:left'):''
		}else{
			$n('#hid_'+id).val(hdVal.replace(']','')+','+key+']')
		}
		onTagCrt[id]();
	}
	init();
	
}
DD.G = [], DD.plcHold = [], DD.TagCnt=[], DD.TagSpCnt=[], DD.openLayer=[],DD.ChkBoxContr=[], DD.preTxt=[],DD.postTxt=[],DD.liCntr=[],DD.liCntrFx=[],DD.NLi=[],DD.Ary={},DD.curActElm,DD.Chkbox=[],DD.tag=[],DD.Allflg=[];;
