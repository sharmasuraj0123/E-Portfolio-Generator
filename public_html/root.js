/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "Suraj Sharma";
var url = "./data.json";
var img = "http://www.stonybrook.edu/sb/images/titles/directions.jpg";
var obj;

window.onload = function(){
document.getElementById("Banner_image").src = img;
document.getElementById("Student_Name").innerHTML = name;
}



$.getJSON(url, function(data) {
    
    obj = data;
       
  document.getElementById("Page1").innerHTML = obj.Pages[0].title;
  document.getElementById("Page2").innerHTML = obj.Pages[1].title;
  document.getElementById("Page3").innerHTML = obj.Pages[2].title;
  document.getElementById("Page4").innerHTML = obj.Pages[3].title;
  document.getElementById("Page5").innerHTML = obj.Pages[4].title;
  
  
  document.getElementById("Page1").addEventListener("click", function(){
    selectPage(0);
});

 document.getElementById("Page2").addEventListener("click", function(){
    selectPage(1);
});

 document.getElementById("Page3").addEventListener("click", function(){
    selectPage(2);
});

 document.getElementById("Page4").addEventListener("click", function(){
    selectPage(3);
});

 document.getElementById("Page5").addEventListener("click", function(){
    selectPage(4);
});
 
   function selectPage(x){
    var selector = obj.Pages[x];  
    document.getElementById("PageHeader").innerHTML = selector.title; 
    var content = document.getElementById("Content");
    var i;
       
   for(i =0 ; i<selector.data.length ; i++){
   if(selector.data[i].type === "p"){
        var p = document.createElement("p");
        var node = document.createTextNode(selector.data[i].text);
        p.appendChild(node);
        content.appendChild(p);    
   }
   } 
   }
    
    
    });
    
