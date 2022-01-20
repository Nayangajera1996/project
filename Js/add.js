
// var xmlRequest = new XMLHttpRequest();
// xmlRequest.onload = function() {
//     // console.log(this.response);
//     let mainproduct = JSON.parse(this.response);
//     console.log(mainproduct);
//     // addtocart(product);
//     add(mainproduct);
// }

// xmlRequest.open("GET" , "http://192.168.5.200:5500/Project/JSON/main.json");
// xmlRequest.send();
let mainproduct = JSON.parse(localStorage.getItem('datamain'));
add(mainproduct);
console.log(mainproduct);
// console.log(myTable)

function add(mainproduct){
    var myTable = document.getElementById("myTable");
    for(var x in mainproduct){
        console.log(mainproduct[x].name)
        
        var tr = document.createElement("tr");

        var nameTd = document.createElement("td");
        nameTd.innerText = mainproduct[x].name;
        // console.log(product.name);
        tr.appendChild(nameTd);

        var priceTd = document.createElement("td");
        priceTd.innerText = mainproduct[x].price;
        // console.log(product.price);

        tr.appendChild(priceTd);
        console.log(myTable)
        myTable.lastElementChild.appendChild(tr);
        
    }
    
}

var storedata = [];
// console.log(mytable.lastElementChild);  

function addtocart(product){

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