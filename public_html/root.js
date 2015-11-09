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
       
       var content = document.getElementById("Content");
    while (content.firstChild) {
    content.removeChild(content.firstChild);
    }   
    var selector = obj.Pages[x];
    
    
    var header = document.createElement("h1");
       header.innerHTML= selector.title;
       content.appendChild(header);  
    
    var i;   
   for(i =0 ; i<selector.data.length ; i++){
   if(selector.data[i].type === "p"){
        var p = document.createElement("p");
        p.innerHTML = selector.data[i].text;
        content.appendChild(p);    
   }
   else if (selector.data[i].type === "ul"){
       var ul = document.createElement("ul"); 
       var j;
       
       for(j = 0 ; j < selector.data[i].list.length ; j++){
            var li = document.createElement("li");
            li.innerHTML = selector.data[i].list[j].li;
            ul.appendChild(li);
            content.appendChild(ul);
        }
        
   }
   else if (selector.data[i].type === "a"){
       
   }
   else if (selector.data[i].type === "image"){
      var img = document.createElement("img");
      img.src = selector.data[i].src;
      img.width = selector.data[i].width;
      img.height =selector.data[i].height;
      content.appendChild(img); 
   }
   else if (selector.data[i].type === "video"){
       var video = document.createElement("iframe");
       video.src = selector.data[i].src;
      video.width = selector.data[i].width;
      video.height =selector.data[i].height;
      content.appendChild(video); 
   }
   else{
       
   }
   } 
   }
    
    
    });
    
