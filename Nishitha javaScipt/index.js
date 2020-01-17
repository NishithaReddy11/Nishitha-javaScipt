// function add()
// {
//     var a=parseInt(document.getElementById("t1").value);
//     var b=parseInt(document.getElementById("t2").value);
//     var sum=a+b;
//     var res=document.getElementById("sumpos");
//     res.innerHTML+=sum;
//     res.style.backgroundColor="pink";
// }
var img=document.getElementById("image");
var imgs=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var counter=0;

setInterval(()=>next(),2000);
function next()
{
    if(counter==imgs.length-1)
    {
        counter=-1;
    }
    counter++;
    document.getElementById("image").src=imgs[counter];
}
function previous()
{
    if(counter==0)
    {
        counter=imgs.length;
    }
    counter--;
    document.getElementById("image").src=imgs[counter];
}

