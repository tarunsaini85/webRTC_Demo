/*header*/
var ddn = function(b) {
  var a = this;
  a.ev = b.ev;
  a.cl = b.cl;
  a.oldcl = b.oldcl;
  a.id = b.id;
  a.idObj = $n(a.id);
  a.c='';
  $n("#iframeId").length || (a.idObj.append($n("<iframe>").attr({id:"iframeId"})), a.frameObj = $n("#iframeId"), a.frameObj.addClass("iframeBox"));
  a.child = $n(a.id+" a[rel]");
  a.b = "";
  a.brw=$n.brewser().name;
  a.child.addEvent('mouseover', function() {
	  	if(a.brw=='mozilla' && a.timer){
			clearTimeout(a.timer)
        a.b.replaceClass(a.cl, a.oldcl);
        a.c.hide();
        a.frameObj.hide()
		}
    a.b = $n(this);
    var b = a.b.position(), d = a.b.attr("rel");
    if(d) {
      a.b.replaceClass(a.oldcl, a.cl);
      a.c = $n("#" + d);
      a.frameObj || (a.frameObj = $n("#iframeId"));
      a.frameObj.css({top:b.top + a.b.height() - 1 + "px", left:b.left + "px", width:a.c.width() + "px", height:a.c.height() + "px"}).show();
      a.c.css({top:b.top + a.b.height() - 1 + "px", left:b.left + "px"}).show().addEvent("mouseover", a.divMouseover).addEvent("mouseout", a.divMouseOut)
    }
  }).addEvent("mouseout", function() {
	  if(a.b.attr("rel")){
    $n("#" + a.b.attr("rel")).hide();
    a.frameObj.hide();
    a.b.replaceClass(a.cl, a.oldcl)
	  }
  })
  a.timer='';
  a.divMouseOut=function(e) {
	if(a.brw=='mozilla'){
	  	a.timer=setTimeout(function(){
        a.b.replaceClass(a.cl, a.oldcl);
        a.c.hide();
        a.frameObj.hide()
		}, 10)
  }
  else{
        a.b.replaceClass(a.cl, a.oldcl);
        a.c.hide();
        a.frameObj.hide()
  }
   }
   a.divMouseover=function(e){
	if(a.brw=='mozilla')
	   clearTimeout(a.timer)
        a.c.show();
        a.frameObj.show();
        a.b.replaceClass(a.oldcl, a.cl)
   }
};
$n(document).ready(function(){
	/*Navigation*/
	var topDD=new ddn({'cl':'selul', 'oldcl':'dropD', 'id':'#mainNav', 'ev':'mouseover'});
});
/*header*/