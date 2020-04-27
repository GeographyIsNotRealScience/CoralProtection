var imgbox=document.getElementById("imgbox");
var li=document.getElementsByTagName("li");



// li[0].style.background="lime";
li[0].onclick=function(){
    // this.style.background="lime";
    imgbox.style.left="0";
    li[1].style.background="";
    li[2].style.background="";
}
li[1].onclick=function(){
    // this.style.background="lime";
    imgbox.style.left="-700px";
    li[0].style.background="";
    li[2].style.background="";
}
li[2].onclick=function(){

    // this.style.background="lime";
    imgbox.style.left="-1400px";
    li[1].style.background="";
    li[0].style.background="";
}


var up=document.getElementById("img-1");
var down=document.getElementById("img-2");

up.onclick=function(){
    var y=imgbox.offsetLeft;
    if(y>-700)
    {
        y=-2100;
    }
    var x=y+700;
    imgbox.style.left=x+"px";
    if(x==0)
    {
        // li[0].style.background="lime";
        li[1].style.background="";
        li[2].style.background="";
    }
    if(x==-700)
    {
        li[0].style.background="";
        // li[1].style.background="lime";
        li[2].style.background="";
    }
    if(x==-1400)
    {
        li[0].style.background="";
        li[1].style.background="";
        // li[2].style.background="lime";
    }
}
down.onclick=function(){
    var y=imgbox.offsetLeft;
    if(y<-700)
    {
        y=700;
    }
    var x=y-700;
    imgbox.style.left=x+"px";
    switch (x)
    {
        case 0:
            // li[0].style.background="lime";
            li[1].style.background="";
            li[2].style.background="";
            break;
        case -700:
            li[0].style.background="";
            // li[1].style.background="lime";
            li[2].style.background="";
            break;
        case -1400:
            li[0].style.background="";
            li[1].style.background="";
            // li[2].style.background="lime";
            break;
    }

}
