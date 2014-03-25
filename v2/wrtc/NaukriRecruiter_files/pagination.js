function pagination(a){
	var obj=this;
	obj.id=$n('#'+a.id);
	obj.recordPerPage=a.record;
	obj.currentPage=1;
	obj.pages=0;
	obj.inited=false;
	//console.log('obj.id='+obj.id+'obj.recordPerPage='+obj.recordPerPage)
	obj.showRecords=function(from,to){
		var items=obj.id.childrens(a.type);
		for(var i=0;i<items.length;i++){
			if(i<from || i>to)items.eq(i).hide()
			else items.eq(i).show();
			}
		}
	obj.showPage=function(pageN){
		if(!obj.inited){alert('Please call init function');return;}		
		var oldPageAnch=$n('#pg'+obj.currentPage).removeClass('active');
		obj.currentPage=pageN;
		var newPageAnch=$n('#pg'+obj.currentPage).addClass('active');
		
		(obj.currentPage>1)?($n('.prv').css({ visibility:"visible"})):($n('.prv').css({visibility:"hidden"}));
		(obj.currentPage==obj.pages)?($n('.nxt').css({ visibility:"hidden"})):($n('.nxt').css({visibility:"visible"}));
		
		var from=(pageN-1)*obj.recordPerPage;
		var to=from+obj.recordPerPage-1;
		obj.showRecords(from,to)
		}
	obj.prev=function(){if(obj.currentPage>1){obj.showPage(obj.currentPage-1);}}//prev
	obj.next=function(){if(obj.currentPage<obj.pages){obj.showPage(obj.currentPage+1)}}
	obj.init=function(){
		var itms=obj.id.childrens(a.type),rec=(itms.length);
		obj.pages=Math.ceil(rec/obj.recordPerPage);
		obj.inited=true;
		
	
		}
	obj.showPageNav=function(pagerName,positionId){
		if(!obj.inited){alert('Please call init function');return;}
		var element=$n('#'+positionId);
		var pagerHtml = '<a href="javascript:;" onclick="' + pagerName + '.prev();window.scrollTo(0,0)" class="prv" style="visibility:hidden"> &#171 Prev </a> ';
        for (var page = 1; page <= this.pages; page++) 
            pagerHtml += '<a href="javascript:;" id="pg' + page + '" onclick="' + pagerName + '.showPage(' + page + ');window.scrollTo(0,0)">' + page + '</a>  ';
        pagerHtml += '<a href="javascript:;" onclick="'+pagerName+'.next();window.scrollTo(0,0)" class="nxt"> Next &#187;</a>';
		  element.html(pagerHtml);
		
		}	
}