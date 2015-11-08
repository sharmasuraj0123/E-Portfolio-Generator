/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "Suraj Sharma";
var url = "./data.json";
var img = "http://www.stonybrook.edu/sb/images/titles/directions.jpg";

window.onload = function(){
document.getElementById("Banner_image").src = img;
document.getElementById("Student_Name").innerHTML = name;
}

var obj;


$.getJSON(url, function(data) {
    
    obj = data;
      
  document.getElementById("Page1").innerHTML = obj.Page1[0].title;
  document.getElementById("Page2").innerHTML = obj.Page2[0].title;
  document.getElementById("Page3").innerHTML = obj.Page3[0].title;
  document.getElementById("Page4").innerHTML = obj.Page4[0].title;
  document.getElementById("Page5").innerHTML = obj.Page5[0].title;
  
   function selectPage(){
       
   }
    
    
    });
    
