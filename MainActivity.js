let sizing =[];
let permis =3;
let no=0;
let dataCaller=document.getElementsByClassName("fetch");
let order =document.getElementsByClassName("number");
let more ="<button class='fetch'onclick='call()'>more</button>";
let search =document.getElementById("search");
let id =document.getElementById("dataFrame");
  window.onload =function(){
    var searchBox=document.getElementById("DataSearch");
      loadPost();
  }
  function loadPost(){
      permis+=1;
      for (var i = 0; i <permis; i++) {
          sizing[i] =postDATA[i];
      }
      let loading =sizing.map(function(c){
          return "<div class='pa'>"+"<div class='partA'>"+"<span class='number'></span>"+"<p id='title'>"+c.title+"</p>"+"<p id='desc'>"+c.descrip+"</p>"+"</div>"+"<embed src='"+c.photo+"'/>"+"</div><hr/>"+more;
      });
      id.innerHTML=loading.join("");
      setTimeout(function() {
          for (var i = 1; i <sizing.length; i++) {
         dataCaller[i-1].style.display="none";
      }
      }, 10);
     for (var o = 0; o <order.length; o++) {
         order[o].innerText=o+1;
     }
  }
  function call(){
      permis +=1;
      loadPost();
     
  }
   function find(){
       open("search.html")
   }