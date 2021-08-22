var ProVal=JSON.parse(localStorage["arrayA"]);
var ProImg=JSON.parse(localStorage["arrayB"]);
var ProductPrice=JSON.parse(localStorage["arrayC"]);
var ProductName=JSON.parse(localStorage["arrayD"]);
var MyItem=JSON.parse(localStorage["array"]);


for(var i=0; i<MyItem.length; i++){

    MyItem[i]=$("#first").clone();
    MyItem[i].css("visibility","visible");
    MyItem[i].css("position","static");
    MyItem[i].appendTo("table");
    MyItem[i].find(".Rimg").attr("src",ProImg[i]);
    MyItem[i].find(".Rinp").attr("value",ProVal[i]);
    MyItem[i].find(".Rpr").text(ProductPrice[i]);
    MyItem[i].find(".Rname").text(ProductName[i]);
    MyItem[i].find(".Rr").attr('id', ProductName[i]);
}

//Remove
$(".Rr").click(function(){
  var x=this.id;
  var k=ProductName.indexOf(x);
  MyItem[k].remove();

  function deleteItem(index) {
    const existingEntries1 = JSON.parse(localStorage.getItem("arrayA"));
    existingEntries1.splice(index, 1);
    localStorage.setItem("arrayA", JSON.stringify(existingEntries1));

    const existingEntries2 = JSON.parse(localStorage.getItem("arrayB"));
    existingEntries2.splice(index, 1);
    localStorage.setItem("arrayB", JSON.stringify(existingEntries2));

    const existingEntries3 = JSON.parse(localStorage.getItem("arrayC"));
    existingEntries3.splice(index, 1);
    localStorage.setItem("arrayC", JSON.stringify(existingEntries3));

    const existingEntries4 = JSON.parse(localStorage.getItem("arrayD"));
    existingEntries4.splice(index, 1);
    localStorage.setItem("arrayD", JSON.stringify(existingEntries4));

    const existingEntries5 = JSON.parse(localStorage.getItem("array"));
    existingEntries5.splice(index, 1);
    localStorage.setItem("array", JSON.stringify(existingEntries5));
  }

  deleteItem(k);
});


    