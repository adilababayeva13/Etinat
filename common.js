

//DOM
var span1=$("#span1");
var span2=$("#span2");
var span3=$("#span3");
var span4=$("#span4");




//sehifenin cevrilmmesi 

span1.click(function(){

    $("#img1").attr("src", "./common/1.1.jpg");
    $("#img2").attr("src", "./common/1.2.jpg");
    $("#img3").attr("src", "./common/1.3.jpg");
    $("#img4").attr("src", "./common/1.4.jpg");
    $("#img5").attr("src", "./common/1.5.jpg");
    $("#img6").attr("src", "./common/1.6.jpg");
    $("#img7").attr("src", "./common/1.7.jpg");
    $("#img8").attr("src", "./common/1.8.png");
    $("#img9").attr("src", "./common/1.9.png");
    $("#img10").attr("src", "./common/1.10.png");
 $("#name1").html("Sah Tea");
 $("#name2").html("Saffron Tea");
 $("#name3").html("Quince Tea");
 $("#name4").html("Thyme Tea");
 $("#name5").html("Milk Tea");
 $("#name6").html("Tea&Tabacco");
 $("#name7").html("Saeh Tea");
 $("#name8").html("Baikhow");
 $("#name9").html("Copakobana");
 $("#name10").html("9TH");
 $("#img11").attr("src", "");
 $("#img12").attr("src", "");
 $("#name11").html("");
 $("#name12").html("");
  }); 

  span2.click(function(){
    
    $("#img1").attr("src", "./common/2.1.png");
    $("#img2").attr("src", "./common/2.2.png");
    $("#img3").attr("src", "./common/2.3.png");
    $("#img4").attr("src", "./common/2.4.png");
    $("#img5").attr("src", "./common/2.5.png");
    $("#img6").attr("src", "./common/2.6.png");
    $("#img7").attr("src", "./common/2.7.png");
    $("#img8").attr("src", "./common/2.8.png");
    $("#img9").attr("src", "./common/2.9.png");
    $("#img10").attr("src", "./common/2.10.png");
    $("#name1").html("Early Gray");
    $("#name2").html("Ivan-Chai");
    $("#name3").html("Fruity");
    $("#name4").html("Carcade");
    $("#name5").html("BAYH");
    $("#name6").html("Sokr.East");
    $("#name7").html("The Queen of BALA");
    $("#name8").html("Soluble");
    $("#name9").html("Ground");
    $("#name10").html("Cream");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");
    $("#name11").html("");
    $("#name12").html("");
  

  }); 

  span3.click(function(){
     
    $("#img1").attr("src", "./common/3.1.png");
    $("#img2").attr("src", "./common/3.2.png");
    $("#img3").attr("src", "./common/3.3.png");
    $("#img4").attr("src", "./common/3.4.png");
    $("#img5").attr("src", "./common/3.5.png");
    $("#img6").attr("src", "./common/3.6.png");
    $("#img7").attr("src", "./common/3.7.png");
    $("#img8").attr("src", "./common/3.8.png");
    $("#img9").attr("src", "./common/3.9.png");
    $("#img10").attr("src", "./common/3.10.png");
    $("#name1").html("Vanilla");
    $("#name2").html("Amaretto");
    $("#name3").html("OREKH");
    $("#name4").html("Caramel");
    $("#name5").html("Soluble");
    $("#name6").html("Chicken");
    $("#name7").html("Vegetable");
    $("#name8").html("BEEF");
    $("#name9").html("Mushroom");
    $("#name10").html("Chicken");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");
    $("#name11").html("");
    $("#name12").html("");

  }); 

  span4.click(function(){
     
    $("#img1").attr("src", "./common/4.1.png");
    $("#img2").attr("src", "./common/4.2.png");
    $("#img3").attr("src", "./common/4.3.png");
    $("#img4").attr("src", "./common/4.4.png");
    $("#img5").attr("src", "./common/4.5.png");
    $("#img6").attr("src", "./common/4.6.png");
    $("#img7").attr("src", "./common/4.7.png");
    $("#img8").attr("src", "./common/4.8.png");
    $("#img9").attr("src", "./common/4.9.png");
    $("#img10").attr("src", "./common/4.10.png");
    $("#name1").html("Cheesy");
    $("#name2").html("Spinach");
    $("#name3").html("Strawberry");
    $("#name4").html("Vanilla");
    $("#name5").html("Banana");
    $("#name6").html("Babl Gam");
    $("#name7").html("Babl Gam");
    $("#name8").html("Blackcurrant");
    $("#name9").html("Glintwein");
    $("#name10").html("The HIP");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");
    $("#name11").html("");
    $("#name12").html("");

  }); 

  // category ayrilma 
  
  $("#category").change(function(){
    var x = document.getElementById("category").value;

   if(x =="1"){
     $(".page-btn").css("opacity","1");
     $(".page-btn").css("pointer-events","all");
     $("#img1").attr("src", "./common/1.1.jpg");
     $("#img2").attr("src", "./common/1.2.jpg");
     $("#img3").attr("src", "./common/1.3.jpg");
     $("#img4").attr("src", "./common/1.4.jpg");
     $("#img5").attr("src", "./common/1.5.jpg");
     $("#img6").attr("src", "./common/1.6.jpg");
     $("#img7").attr("src", "./common/1.7.jpg");
     $("#img8").attr("src", "./common/1.8.png");
     $("#img9").attr("src", "./common/1.9.png");
     $("#img10").attr("src", "./common/1.10.png");
     $("#img11").attr("src", "");
     $("#img12").attr("src", "");
     //...........
  $("#name1").html("Sah Tea");
  $("#name2").html("Saffron Tea");
  $("#name3").html("Quince Tea");
  $("#name4").html("Thyme Tea");
  $("#name5").html("Milk Tea");
  $("#name6").html("Tea&Tabacco");
  $("#name7").html("Saeh Tea");
  $("#name8").html("Baikhow");
  $("#name9").html("Copakobana");
  $("#name10").html("9TH");
  $("#name11").html("");
  $("#name12").html("");
//..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("price");
$("#pr6").html("price");
$("#pr7").html("price");
$("#pr8").html("price");
$("#pr9").html("price");
$("#pr10").html("price");
$("#pr11").html("");
$("#pr12").html("");

   }

   if(x =="2"){
    $(".page-btn").css("opacity","0");
    $(".page-btn").css("pointer-events","none");
    $("#img1").attr("src", "./common/1.1.jpg");
    $("#img2").attr("src", "./common/1.2.jpg");
    $("#img3").attr("src", "./common/1.3.jpg");
    $("#img4").attr("src", "./common/1.4.jpg");
    $("#img5").attr("src", "./common/1.5.jpg");
    $("#img6").attr("src", "./common/1.6.jpg");
    $("#img7").attr("src", "./common/1.7.jpg");
    $("#img8").attr("src", "./common/1.8.png");
    $("#img9").attr("src", "./common/1.9.png");
    $("#img10").attr("src", "./common/1.10.png");
    $("#img11").attr("src", "./common/2.1.png");
    $("#img12").attr("src", "./common/2.2.png");
 $("#name1").html("Sah Tea");
 $("#name2").html("Saffron Tea");
 $("#name3").html("Quince Tea");
 $("#name4").html("Thyme Tea");
 $("#name5").html("Milk Tea");
 $("#name6").html("Tea&Tabacco");
 $("#name7").html("Saeh Tea");
 $("#name8").html("Baikhow");
 $("#name9").html("Copakobana");
 $("#name10").html("9TH");
 $("#name11").html("Early Gray");
 $("#name12").html("Ivan-Chai");
 //..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("price");
$("#pr6").html("price");
$("#pr7").html("price");
$("#pr8").html("price");
$("#pr9").html("price");
$("#pr10").html("price");
$("#pr11").html("price");
$("#pr12").html("price");
  }

  if(x =="3"){
    $(".page-btn").css("opacity","0");
    $(".page-btn").css("pointer-events","none");

    $("#img1").attr("src", "./common/2.8.png");
    $("#img2").attr("src", "./common/2.9.png");
    $("#img3").attr("src", "./common/2.10.png");
    $("#img4").attr("src", "./common/3.1.png");
    $("#img5").attr("src", "./common/3.2.png");
    $("#img6").attr("src", "./common/3.3.png");
    $("#img7").attr("src", "./common/3.4.png");
    $("#img8").attr("src", "./common/3.5.png");
    $("#img9").attr("src", "");
    $("#img10").attr("src", "");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");
    $("#name1").html("Soluble");
    $("#name2").html("Ground");
    $("#name3").html("Cream");
    $("#name4").html("Vanilla");
    $("#name5").html("Amaretto");
    $("#name6").html("OREKH");
    $("#name7").html("Caramel");
    $("#name8").html("Soluble");
    $("#name9").html("");
    $("#name10").html("");
    $("#name11").html("");
    $("#name12").html("");
    //..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("price");
$("#pr6").html("price");
$("#pr7").html("price");
$("#pr8").html("price");
$("#pr9").html("");
$("#pr10").html("");
$("#pr11").html("");
$("#pr12").html("");
  }

  if(x =="4"){
    $(".page-btn").css("opacity","0");
    $(".page-btn").css("pointer-events","none");
   
   
    $("#img1").attr("src", "./common/3.6.png");
    $("#img2").attr("src", "./common/3.7.png");
    $("#img3").attr("src", "./common/3.8.png");
    $("#img4").attr("src", "./common/3.9.png");
    $("#img5").attr("src", "./common/3.10.png");
    $("#img6").attr("src", "./common/4.1.png");
    $("#img7").attr("src", "./common/4.2.png");
    $("#img8").attr("src", "");
    $("#img9").attr("src", "");
    $("#img10").attr("src", "");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");

    $("#name1").html("Chicken");
    $("#name2").html("Vegetable");
    $("#name3").html("BEEF");
    $("#name4").html("Mushroom");
    $("#name5").html("Chicken");
    $("#name6").html("Cheesy");
    $("#name7").html("Spinach");
    $("#name11").html("");
    $("#name12").html("");
    $("#name8").html("");
    $("#name9").html("");
    $("#name10").html("");
    //..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("price");
$("#pr6").html("price");
$("#pr7").html("price");
$("#pr8").html("");
$("#pr9").html("");
$("#pr10").html("");
$("#pr11").html("");
$("#pr12").html("");
  }

  if(x =="5"){
    $(".page-btn").css("opacity","0");
    $(".page-btn").css("pointer-events","none");
  

    $("#img1").attr("src", "./common/4.3.png");
    $("#img2").attr("src", "./common/4.4.png");
    $("#img3").attr("src", "./common/4.5.png");
    $("#img4").attr("src", "./common/4.6.png");
    $("#img5").attr("src", "");
    $("#img6").attr("src", "");
    $("#img7").attr("src", "");
    $("#img8").attr("src", "");
    $("#img9").attr("src", "");
    $("#img10").attr("src", "");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");

    $("#name1").html("Strawberry");
    $("#name2").html("Vanilla");
    $("#name3").html("Banana");
    $("#name4").html("Babl Gam");
    $("#name5").html("");
    $("#name6").html("");
    $("#name7").html("");
    $("#name8").html("");
    $("#name9").html("");
    $("#name10").html("");
 $("#name11").html("");
    $("#name12").html("");
//..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("");
$("#pr6").html("");
$("#pr7").html("");
$("#pr8").html("");
$("#pr9").html("");
$("#pr10").html("");
$("#pr11").html("");
$("#pr12").html("");
  
  }

  if(x =="6"){
    $(".page-btn").css("opacity","0");
    $(".page-btn").css("pointer-events","none");
  

    $("#img1").attr("src", "./common/4.7.png");
    $("#img2").attr("src", "./common/4.8.png");
    $("#img3").attr("src", "./common/4.9.png");
    $("#img4").attr("src", "./common/4.10.png");
    $("#img5").attr("src", "");
    $("#img6").attr("src", "");
    $("#img7").attr("src", "");
    $("#img8").attr("src", "");
    $("#img9").attr("src", "");
    $("#img10").attr("src", "");
    $("#img11").attr("src", "");
    $("#img12").attr("src", "");

    $("#name1").html("BABL GAM");
    $("#name2").html("Blackcurrant");
    $("#name3").html("Glintwein");
    $("#name4").html("The Hip");
     $("#name5").html("");
    $("#name6").html("");
    $("#name7").html("");
    $("#name8").html("");
    $("#name9").html("");
    $("#name10").html("");
     $("#name11").html("");
    $("#name12").html("");
//..............
$("#pr1").html("price");
$("#pr2").html("price");
$("#pr3").html("price");
$("#pr4").html("price");
$("#pr5").html("");
$("#pr6").html("");
$("#pr7").html("");
$("#pr8").html("");
$("#pr9").html("");
$("#pr10").html("");
$("#pr11").html("");
$("#pr12").html("");
  
  
  }
  }); 
  //sending image
  //localStorage.clear();
  console.log(localStorage);
  $(".selectedimg").click(function(){
var source=this.src;
console.log(source);
localStorage.setItem("src",source);

var text = this.nextElementSibling.innerHTML; 
console.log(text);
localStorage.setItem("text",text);
console.log(localStorage);

var value = document.getElementById("category").value;
console.log(value);
localStorage.setItem("value",value);
console.log(localStorage);

document.getElementById("category").value="1";
  });