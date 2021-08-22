
        
// getting img

var src = localStorage.getItem("src");
console.log(src);
var newImg=document.getElementById("came");
newImg.src=src;
//getting the name of it
var text = localStorage.getItem("text");
console.log(text);
var newText=document.getElementById("text");
newText.innerHTML=text;
var help=document.getElementById("help");
help.innerHTML=text;
//category related products
var category = localStorage.getItem("value");
console.log(category);

if(category== "1"){
    $("#detImg1").attr("src", "./common/1.7.jpg");
    $("#detImg2").attr("src", "./common/1.8.png");
    $("#detImg3").attr("src", "./common/1.9.png");
    $("#detImg4").attr("src", "./common/1.10.png");
    $("#detName1").html("Saeh Tea");
    $("#detName2").html("Baikhow");
    $("#detName3").html("Copakobana");
    $("#detName4").html("9TH");
}
if(category== "2"){
    $("#detImg1").attr("src", "./common/1.6.jpg");
    $("#detImg2").attr("src", "./common/1.7.jpg");
    $("#detImg3").attr("src", "./common/1.8.png");
    $("#detImg4").attr("src", "./common/1.9.png");
    $("#detName1").html("Tea&Tabacco");
    $("#detName2").html("Saeh Tea");
    $("#detName3").html("Baikhow");
    $("#detName4").html("Copakobana");
}
if(category== "3"){
    $("#detImg1").attr("src", "./common/3.2.png");
    $("#detImg2").attr("src", "./common/3.3.png");
    $("#detImg3").attr("src", "./common/3.4.png");
    $("#detImg4").attr("src", "./common/3.5.png");
    $("#detName1").html("Amaretto");
    $("#detName2").html("OREKH");
    $("#detName3").html("Caramel");
    $("#detName4").html("Soluble");
}
if(category== "4"){
    $("#detImg1").attr("src", "./common/3.9.png");
    $("#detImg2").attr("src", "./common/3.10.png");
    $("#detImg3").attr("src", "./common/4.1.png");
    $("#detImg4").attr("src", "./common/4.2.png");
    $("#detName1").html("Mushroom");
    $("#detName2").html("Chicken");
    $("#detName3").html("Cheesy");
    $("#detName4").html("Spinach");
}
if(category== "5"){
    $("#detImg1").attr("src", "./common/4.3.png");
    $("#detImg2").attr("src", "./common/4.4.png");
    $("#detImg3").attr("src", "./common/4.5.png");
    $("#detImg4").attr("src", "./common/4.6.png");
    $("#detName1").html("Strawberry");
    $("#detName2").html("Vanilla");
    $("#detName3").html("Banana");
    $("#detName4").html("Babl Gam");
}
if(category== "6"){
    $("#detImg1").attr("src", "./common/4.7.png");
    $("#detImg2").attr("src", "./common/4.8.png");
    $("#detImg3").attr("src", "./common/4.9.png");
    $("#detImg4").attr("src", "./common/4.10.png");
    $("#detName1").html("BABL GAM");
    $("#detName2").html("Blackcurrant");
    $("#detName3").html("Glintwein");
    $("#detName4").html("The Hip");
}



//...........................................//
console.log(localStorage);

//....related lerin selected'i tax'dindan etmesi ...a few minutes later :(
    var temp="";
    var tempName="";
    $("#detImg1").click(function(){
       temp= document.getElementById("came").src;
       document.getElementById("came").src=this.src;
       this.src=temp;
       document.getElementById("help").innerHTML=$("#detName1").text();
       tempName=document.getElementById("text").textContent;
       document.getElementById("text").innerHTML=$("#detName1").text();
       document.getElementById("detName1").innerHTML=tempName;

       
    
    });
    $("#detImg2").click(function(){
        temp= document.getElementById("came").src;
        document.getElementById("came").src=this.src;
        this.src=temp;
        document.getElementById("help").innerHTML=$("#detName2").text();
       tempName=document.getElementById("text").textContent;
       document.getElementById("text").innerHTML=$("#detName2").text();
       document.getElementById("detName2").innerHTML=tempName;

       
     
     });
     $("#detImg3").click(function(){
        temp= document.getElementById("came").src;
        document.getElementById("came").src=this.src;
        this.src=temp;
        document.getElementById("help").innerHTML=$("#detName3").text();
        tempName=document.getElementById("text").textContent;
        document.getElementById("text").innerHTML=$("#detName3").text();
        document.getElementById("detName3").innerHTML=tempName;
        
        
       
     });
     $("#detImg4").click(function(){
        temp= document.getElementById("came").src;
        document.getElementById("came").src=this.src;
        this.src=temp;
        document.getElementById("help").innerHTML=$("#detName4").text();
        tempName=document.getElementById("text").textContent;
        document.getElementById("text").innerHTML=$("#detName4").text();
        document.getElementById("detName4").innerHTML=tempName;

       
        
     });

     var array = JSON.parse(localStorage.getItem('array'));
     //...........................................//
     if(!array){
      var array = []; 
     }

     
     var arrayA = JSON.parse(localStorage.getItem('arrayA'));
     //...........................................//
     if(!arrayA){
      var arrayA = []; 
     }
     
     var arrayB = JSON.parse(localStorage.getItem('arrayB'));
     //...........................................//
     if(!arrayB){
      var arrayB = []; 
     }
     
     var arrayC = JSON.parse(localStorage.getItem('arrayC'));
     //...........................................//
     if(!arrayC){
      var arrayC = []; 
     }
     
     var arrayD = JSON.parse(localStorage.getItem('arrayD'));
     //...........................................//
     if(!arrayD){
      var arrayD = []; 
     }

   

     //Add to cart
     $("#add").click(function(){
   
        
var a=$("#proVal").val();
var b=document.getElementById("came").src;
var c=$("#price").text();
var d=$("#text").text();
var e=$("#help").text();
arrayA.push(a);
arrayB.push(b);
arrayC.push(c);
arrayD.push(d);
array.push(e);


localStorage.setItem("arrayA",JSON.stringify(arrayA));
localStorage.setItem("arrayB",JSON.stringify(arrayB));
localStorage.setItem("arrayC",JSON.stringify(arrayC));
localStorage.setItem("arrayD",JSON.stringify(arrayD));
localStorage.setItem("array",JSON.stringify(array));


     });

     