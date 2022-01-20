var productlist = [];

productlist.push()

var xmlRequest = new XMLHttpRequest();
xmlRequest.onload = function() {
    // console.log(this.response);
    let mainproduct = JSON.parse(this.response);

    buildData(mainproduct);
}

xmlRequest.open("GET" , "http://192.168.5.200:5500/Project/JSON/main.json");
xmlRequest.send();

var section1 = document.getElementById("section1");
var container1 = document.getElementById("container1");
container1.setAttribute("class" , "container");
var row1 = document.getElementById("row1");
row1.setAttribute("class" , "row");


function buildData(mainproduct){
    // console.log(mainproduct);
    productlist = mainproduct;
    for(var product of productlist){
    
        
        var vegitem = document.getElementById("vegitem");
        vegitem.setAttribute("class" , "col-md-3 pb-4 ");
        // vegitem.setAttribute("onmouseenter" , "itemboxhover()");

        var innerw_100 = document.createElement("div");
        innerw_100.setAttribute("class" , "w-100 itemboxhover pb-2");
        vegitem.appendChild(innerw_100);

        var imageElement = document.createElement("img");
        imageElement.setAttribute("src" , product.image);
        imageElement.setAttribute("alt" , product.imageAlt);
        imageElement.setAttribute("title" , product.imageAlt);
        imageElement.setAttribute("class" , "img-fluid");
        innerw_100.appendChild(imageElement);
    
        var itemname = document.createElement("p");
        itemname.setAttribute("class" , "text-center mb-0 py-2");
        itemname.innerText = product.name;
        innerw_100.appendChild(itemname);
    
    
        var itemprice = document.createElement("span");
        itemprice.setAttribute("class" , "d-block text-center fw-bold text-main fs-5 pb-2");
        itemprice.innerText = product.price;
        innerw_100.appendChild(itemprice)
    
        var itembtn = document.createElement("button");
        itembtn.setAttribute("class" , "itembtn d-block mx-auto position-relative ps-5 pe-4");
        itembtn.setAttribute("onclick" , "addtocart("+ JSON.stringify(product) +")");
        itembtn.innerText = "ADD TO CART";
        innerw_100.appendChild(itembtn);

        var fonticon = document.createElement("i");
        fonticon.setAttribute("class" , "fas fa-shopping-cart position-absolute start1 top1");
        itembtn.appendChild(fonticon);
    
        row1.appendChild(vegitem);
        container1.appendChild(row1);
        section1.appendChild(container1);
    }
}

// var section2 = document.getElementById("section2");
// var container2 = document.getElementById("container2");
// var row2 = document.getElementById("row2");
// row2.setAttribute("class" , "row");

var storedata = [];

function addtocart(product){

    // console.log(product);
    console.log("Name: " + product.name , "Price: " + product.price);

    var storedata = JSON.parse(localStorage.getItem("datamain"));
    
    if(storedata == null){
        storedata = [];
    }
    storedata.push(product);

    localStorage.setItem("datamain",JSON.stringify(storedata));
    
    // console.log("Storedata : " , storedata );
    // console.log("product : " , product );

    // console.log('product' , product);
    // console.log("storedata" , storedata);

    // localStorage.setItem("storedata" , JSON.stringify(storedata));

    // var demo = document.getElementById("demo");

    // demo.innerText = "Name: " + product.name;

    // var vegitem2 = document.getElementById("vegitem2");
    // vegitem2.setAttribute("class" , "col-md-3");

    // var w_1002 = document.createElement("div");

    var myTable = document.getElementById("myTable");
    
    var tr = document.createElement("tr");

    var nameTd = document.createElement("td");
    nameTd.innerText = product.name;
    console.log(product.name);
    tr.appendChild(nameTd);

    var priceTd = document.createElement("td");
    priceTd.innerText = product.price;
    console.log(product.price);

    tr.appendChild(priceTd);

    myTable.lastElementChild.appendChild(tr);
}   


console.log("data" , localStorageData);
var mytable = document.getElementById("myTable");
var localStorageData = JSON.parse(localStorage.getItem("datamain"));

if(localStorageData){
    var myTable = document.getElementById("myTable");
    storedata = localStorageData;
    // console.log("data" , localStorageData);

    for (let value of localStorageData) {

        let tr = document.createElement("tr");
    
        let nameTd = document.createElement("td");
        nameTd.innerText = value.name;
        tr.appendChild(nameTd);
    
        let priceTd = document.createElement("td");
        priceTd.innerText = value.price;
        tr.appendChild(priceTd);
    
        let deleteActionTd = document.createElement("td")
    
        deleteActionTd.setAttribute("class", "far fa-trash-alt")
        deleteActionTd.setAttribute("onclick", "deleteUser()")
        tr.appendChild(deleteActionTd)
    
        mytable.lastElementChild.appendChild(tr);
    
      }
}

