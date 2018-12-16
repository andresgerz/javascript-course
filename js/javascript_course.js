// var name = prompt("Introduce your name: ");
// var surname = prompt("Introduce your surname: ");

//document.write("Welcome " + name + " " + surname + "<br/>"+ "program 2018");



// document.write("</p>");

// document.write("Hallo Welt");

//===========================================================================================
//Arrays

//var articles=["shoe","shirt","T-shirt","jean","hat"];


// document.write("<p> The first element <strong>");

// document.write(articles[0] + "</strong> </p>");

// document.write("<p>the last element is : <strong>");

// document.write(articles[articles.length-1]+ "</strong></p>");

// articles.unshift("ball");

// document.write("<p> Added this element the begin: <strong>");

// document.write(articles[0] + "</strong></p>");  

// document.write("<p>Add another element in last position: <strong>");

// articles.push(prompt("Introduce the article in last position: "));

// document.write(articles[articles.length-1] + "</strong></p>");

// alert(articles.length);

// document.write("<p> "+ articles [0] + "<br/>");
// document.write( articles [1] + "<br/>");
// document.write( articles [2] + "<br/>");
// document.write( articles [3] + "<br/>");
// document.write( articles [4] + "<br/>");
// document.write( articles [5] + "<br/>");
// document.write( articles [6] + "<br/></p>");

// alert("Erase the first and last element");

// articles.shift();
// articles.pop();

// document.write("<p> "+ articles [0] + "<br/>");
// document.write( articles [1] + "<br/>");
// document.write( articles [2] + "<br/>");
// document.write( articles [3] + "<br/>");
// document.write( articles [4] + "<br/>");
// document.write( articles [5] + "<br/></p>");


//===========================================================================================
//POO I

// var mybutton = document.getElementById("button1");    //identification of id in HTML
// var mybutton2 = document.getElementById("button2");
// var text = document.getElementById("mytext");

// mybutton.style.width = "500px";
// mybutton.style.height = "400px";
// mybutton.style.backgroundColor = "orange";

// mybutton2.style.width = "500px";
// mybutton2.style.height = "400px";
// mybutton2.style.backgroundColor = "gray";

// text.style.backgroundColor = "violet";
// text.value = "Write here";
// text.style.height = "4em";

// mybutton2.focus();

//===========================================================================================
//Conditionals

// var pricecar = 500000;
// var savingsmoney = prompt("How much money do you savings: ");
// var age = prompt("How old are you");
// var bingo = prompt("Do you win the bingo?");

// if (savingsmoney >= pricecar && age >= 18 || bingo == "si"){
//   alert("You can to but the car");
// }else{ alert("You don't buy the car, because you don't have money or don't have 18 years old")
// }
// alert("Continue the programm")

// var body = document.getElementById("body");

// var colorweb = prompt("Introduce the color of the website: blue/red/green").toLowerCase();

// if (colorweb != "red" && colorweb != "green" && colorweb != "blue"){
//   alert("This color don't defined")
// }else if (colorweb=="blue"){
//   body.style.backgroundColor="blue"
// }else if (colorweb=="red"){
//   body.style.backgroundColor="red"
// }else{
//   body.style.backgroundColor="green"
// }



// if (colorweb=="blue"){
//   body.style.backgroundColor="blue"
// } else if (colorweb=="red"){
//   body.style.backgroundColor="red"
// }else if (colorweb=="green"){
//   body.style.backgroundColor="green"
// }else{
//   alert("This color did't defined")
// }

//===========================================================================================
//Bucles

// var months = ["January" ,"Febreue","March", "April", "May", "Juni","July","August","September","October","November","Dizember"];
// var count = 0;

// while (count < months.length){
//   document.write( months[count] + "<br/><br/>");
  
//   count ++;
// }
//===========================================================================================
//Bucles while and do while

// var name, age, population;

  
// do{
//   name=prompt("Introduce an name valide: ");
// }while(!isNaN(name);

// age = prompt("Introduce your age","(Age)");

// do{
//   age=prompt("Introduce an age valide: ");
// }while(age<=0 || age>105 || isNaN(age))

// population = prompt("Introduce the population", "(population)");
  
// do{
//   population=prompt("Introduce an population valide: ");
// }while(population<=0 || population>8000000000 || isNaN(population));

//====================================================================================================================
//Bucles: bug!?

// var random = Math.round(Math.random(0)*100);
// var mynro, attempts;

// mynro = 0;
// attempts = 0;

// var message = document.getElementById("message");

// var attempts_consuming = document.getElementById("attempts");

// do{ mynro = prompt("Introduce a number between 0 and 100: ");

//   if(random>mynro){
//    // document.write("taller"+"<br/>");
//    message.value = "taller";

//    message.style.fontSize = "18px";
//   }
//   if(random<mynro){
//     //document.write("lower"+"<br/>");
//     message.value = "lower";

//     message.style.fontSize = "18px";
//   }
//   attempts++;

//   attempts_consuming.value = attempts;

//   attempts_consuming.style = "18px";

//   attempts_consuming.style = "red";

//   attempts_consuming.style.textAlign = "center";

// }while(random != mynro);

// //document.write("Right number! Right at the attempt Nº: " + attempts);

// message.value = "Right!";

// message.style.color = "red";

//====================================================================================================================
// Bucle for
// var months = ["January" ,"Febreue","March", "April", "May", "Juni","July","August","September","October","November","Dizember"];

// for(var i=0;i<months.length;i++/*i=+2 */){

  
//   document.write(months[i] + "<br/>");

//   //document.write(i+"<br/>");

//   //alert("Hallo " + i);

// }

//====================================================================================================================
// Buble for II
// var person="";
// var worker = [];
// var count = 0;

// while(person!="out"){
//   person = prompt("Introduce the worker (write out to exit): ");

//   worker[count] = person;

//   count++ ;
// }

// worker.pop();

// for(var i=0 ; i<worker.length ; i++){

//   document.write(worker[i] + "<br/>");

// }

//====================================================================================================================
// Functions

// function today(){

//   var today = new Date();

//   document.write(today.toDateString());  

// }

//====================================================================================================================
//Function with parameters

// function name_website(name){
//   document.write(name);
// }

// var myname = prompt("Introduce your name: ");

//====================================================================================================================
//Function Calculater

// var repeat="yes";


// function addition(n1,n2){
//   alert("The addition is: "+ (n1+n2));
// }

// function substract(n1,n2){
//   alert("The substraction is: "+ (n1-n2));
// }

// function multiply(n1,n2){
//   alert("The multiply is: "+(n1*n2));
// }

// function division(n1,n2){
//   alert("The division is: "+(n1/n2));
// }
// do{
//   var operation = prompt("Which operation want do you do: ");
//   var n1 = parseInt(prompt("Introduce the number 1: "));
//   var n2 = parseInt(prompt("Introduce the number 2: "));

//   if(operation=="addition"){
//     addition(n1,n2);
//   }else if(operation=="substract"){
//     substract(n1,n2);
//   }else if(operation=="multiply"){
//     multiply(n1,n2);
//   }else if(operation=="division"){
//     division(n1,n2);
//   }else{
//     alert("This operation isn't defined");
//   }

//   repeat=prompt("Do you want to repeat:  "); 
// }while(repeat==("yes"));

//====================================================================================================================
// //Event

// function notice(){
//   alert("The information");
// }

//====================================================================================================================
//Calculator conditionals 

// var nro1 = prompt("Introduce the first number: ");
// var nro2 = prompt("Introduce another number: ");
// // alert(typeof(nro1));
// // alert(typeof(nro2));
// if ((!isNaN(nro1) && !isNaN(nro2)) == true){

// var operation = prompt("Which operation would do you do? Addition, subtraction, division, multiplication, potence or raiz?").toLowerCase();

//   if (operation=="addition"){
//     alert(parseInt(nro1)+parseInt(nro2));
//   }
//   else if(operation=="subtraction"){
//     alert(parseInt(nro1)-parseInt(nro2));

//   }else if(operation=="division"){
//     alert(parseInt(nro1)/parseInt(nro2));

//   }else if(operation=="multiplication"){
//     alert(parseInt(nro1)*parseInt(nro2));
//   }else{
//     alert("This operation didn't define")
//   }

// }else{

//   if (typeof(nro1)=="string" || typeof(nro2)=="string"){
//     alert("You wrote values numerics")
//   }else{
//     alert("Exit an error")
//   }
// alert("You have to write 2 numbers")
// }

//====================================================================================================================
// JS vs Jquery        

// var images=document.querySelectorAll(".galery img");

//   for (var i=0;i<images.length;i++){
//     images[i].style.visibility="hidden";
//   }

// $(document).ready(function(){
//   $(".galery img").hide();
// })

//====================================================================================================================
// JS vs Jquery

// var commercial=document.getElementById("commercial");
//   commercial.style.width="500px";
//   commercial.style.height="500px";
//   commercial.innerHTML="Sell!";

// $ (document).ready(function(){
//   $("#commercial").width(500)
//   .height(500)
//   .text("Sell!")
//   .hide()
//   .fadeIn(5000); 
// });

//====================================================================================================================
// JS vs Jquery

// $(document).ready(function(){
// //  alert($("#errors h2").html());

//  // $("#errors").html("<p>There are errors in the form</p>");
//  // $("#errors").append("<p>There are errors in the form</p>");
// //$("#errors").prepend("<p>There are errors in the form</p>");
// //$("#errors").after("<p>There are errors in the form</p>");
// //$("#errors").before("<p>There are errors in the form</p>");
//   $("#errors h2").text("There are errors in the form");

// });

//====================================================================================================================
// JS vs Jquery

// function validation(){
//   var n_user = document.getElementById("user").value;

//     if(n_user==""){
      
//       $("#user").after("Fill this field");
      
//     }
// }

//====================================================================================================================
// JS vs Jquery solucionar

// $(document).ready(function(){
//   document.getElementById("img").addEventListener("click", cart,false);
// });

// var imgs = document.querySelectorAll("#paints img")

// for (var i=0;imgs.length;i++){
//   imgs[i].addEventListener("click",paints,false);
// }

// function cart(n){
  
//   if (n.target==image1){
//     $("#image1").replaceWith("<div id='image1'>add to cart</div>");
//   }
  
//   if(n.target==image2){
//     $("#image2").replaceWith("<div id='image2'>add to cart</div>");    
//   }
//   if(n.target==image3){
//     $("#image3").replaceWith("<div id='image3'>add to cart</div>");    
//   }
  
// }

//====================================================================================================================
// JS vs Jquery

// $(document).ready(function(){
//   $('#paragraph_one').css("background-color","red");
//   $('.paragraph_two').css("border","0.5vh dotted blue")
// });

//====================================================================================================================
// JS vs Jquery

// $(document).ready(function(){
//   document.getElementById("image1").addEventListener("mouseover", toChange, false);
//   document.getElementById("image1").addEventListener("mouseout", original, false);
// })

// function toChange(){
//   $("#image1").attr("src","images/Plympton2.jpg");
// }

// function original(){
//   $("#image1").attr("src","images/Plympton1.gif");
// }

//====================================================================================================================
// JS vs Jquery

$(document).ready(function(){
  var element=document.querySelectorAll("img");

  for(var i=0;i<element.length;i++){
    element[i].addEventListener("mouseover",toChange, false);
    element[i].addEventListener("mouseout", original, false);
  }

  });

function toChange(e){

  if(e.target==image1){
    $("#image1").css("opacity","1");

  }else if(e.target==image2){
    $("#image2").css("opacity","1");
  
  }else if(e.target==image3){
    $("#image3").css("opacity","1");
  }  

}

function original(e){

  if(e.target==image1){
    $("#image1").css("opacity","0.5"); 
  
  }else if(e.target==image2){
    $("#image2").css("opacity","0.5");

  }else if(e.target==image3){
    $("#image3").css("opacity","0.5");
  }
}






























