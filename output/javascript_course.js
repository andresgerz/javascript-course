"use strict";

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
// Javascrip: Exceptions
// const n1=12;
// const n2=0;
// try {
//   if(n2==0){
//     throw "The denominator can't be the number zero";
//   }
//   let division = n1/n2;
//   console.log(division);
// } catch (err) {
//   console.error(err);
// }finally{
//   console.log("Division finished");
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
// $(document).ready(function(){
//   var element=document.querySelectorAll("img");
//   for(var i=0;i<element.length;i++){
//     element[i].addEventListener("mouseover",toChange, false);
//     element[i].addEventListener("mouseout", original, false);
//   }
//   });
// function toChange(e){
//   if(e.target==image1){
//     $("#image1").css("opacity","1");
//   }else if(e.target==image2){
//     $("#image2").css("opacity","1");
//   }else if(e.target==image3){
//     $("#image3").css("opacity","1");
//   }  
// }
// function original(e){
//   if(e.target==image1){
//     $("#image1").css("opacity","0.5"); 
//   }else if(e.target==image2){
//     $("#image2").css("opacity","0.5");
//   }else if(e.target==image3){
//     $("#image3").css("opacity","0.5");
//   }
// }
//====================================================================================================================
// JS vs Jquery
// $(document).ready(function(){
//   var element=document.querySelectorAll("li");
//   for (var i=0;i<element.length;i++){
//     element[i].addEventListener("mouseover", change_image , false);
//     element[i].addEventListener("mouseout", eliminate_image, false);
//   }
// })
// function change_image(e){
//   if (e.target==element1){
//     $("#element1").addClass("emphasise");
//     $("img").attr("src","images/Plympton1.gif");
//   }else if(e.target==element2){
//     $("#element2").addClass("emphasise");
//     $("img").attr("src","images/Plympton2.jpg");
//   }else if(e.target==element3){
//     $("#element3").addClass("emphasise");
//     $("img").attr("src","images/Plympton3.jpg");
//   }
// }
// function eliminate_image(e){
//   if(e.target==element1){
//     $("#element1").removeClass("emphasise");
//     $("img").removeAttr("src");
//   }else if(e.target==element2){
//     $("#element2").removeClass("emphasise");
//     $("img").removeAttr("src");
//   }else if(e.target==element3){
//     $("#element3").removeClass("emphasise");
//     $("img").removeAttr("src");
//   }
// }
//====================================================================================================================
// JS vs Jquery
// $(document).ready(function () {
//   document.getElementById("mybutton").addEventListener("click", toChange, false);
// });
// function toChange(){
//   // $("img").fadeOut(1000).fadeIn(1000).width("310"); 
//   $("img").each(function () {
//     $(this).fadeOut(1000).fadeIn(1000).width("310");
//   });
// }
//====================================================================================================================
// Jquery: Events
// $(document).ready(function () {
//   $("html").dblclick(function(){
//     alert("Hallo!");
//   }); 
//   $("a").mouseover(function () {
//     var massege="<p>Passing the mouseover!</p>";
//     $("#main").append(massege);
//   });
//   $("#a_button").click(function () { 
//     $(this).val("Stop to click!!");
//   });
//   $("#the_field").focus(function () { 
//     $(this).val("Now you go to write");
//   });
// });
//====================================================================================================================
// // Jquery: Events
// $(document).ready(function () {
//   $("#text").hide();
//   $("#image1").hover(function(){
//     $("#text").show();  }, function(){
//       $("#text").hide(); 
//     });
// });
// function message_on(){
//    $("#text").show();
//  }
//  function message_off(){
//    $("#text").hide();
//  }
//====================================================================================================================
// Jquery: Events
// $(document).ready(function () {
//     $("#sbm").hide();
//         $("#file").click(function(){
//             $("#sbm").toggle();
//         });
//     }); 
// This lines of code don't function
// $("#sbm").toggle(function () { 
//     $("#sbm").show()},
//     function (){$("#sbm").hide() } );
//     $("choice1").click(function () {
//         alert("This is the choice 1");
//       });
//     $("choice2").click(function () {
//     alert("This is the choice 2");
//     });
//     $("choice3").click(function () {
//     alert("This is the choice 3");
//     });
//   });
// function show_menu(){
//     $("#sbm").show();
// }
// function hide_menu(){
//     $("#sbm").hide();
// }
//====================================================================================================================
// Jquery: Events
// // canvas
// function begin(){
//     var element = document.getElementById("picture");
//     picture = element.getContext("2d");
//     // picture.fillStyle = "blue";
//     // picture.fillRect(50,50,50,50);
//     picture.moveTo(50,50);
//     picture.lineTo(0,50);
//     picture.stroke();
// }
// window.addEventListener("load", begin, false);
// //Jquery
// $(document).ready(function () {
//     $(".answer").hide(); 
//     $("#main h3").click(function () {
//         $(this).next(".answer").fadeToggle();
//     });
//   });
// //====================================================================================================================
// // Jquery: Events
// // $(document).click(example);
// //   function example(e){
// //       alert(e.clientX);
// //   }
// $(document).ready(function () {
//     $("#big-image").hide();
//     $("#beakman").on("click", open_image); 
//     $("#big-image, p, br").on("click", close_image);
//     // $("div").not("#big-image, #beakman").on("click", close_image);
//     console.log("1");
// });
// function open_image(e) {
//     var imag = $("#beakman").attr("src");
//     $("#big-image").fadeIn(1000);
//     $("#replacement-image").replaceWith("<img src='" + imag + "' width='560' height='420' >");
//     console.log("2");
// }
// function close_image(e) {
//     $("#big-image").fadeOut(1000);
//     console.log("3");
// }
// //====================================================================================================================
// // Jquery: animations
// $(document).ready(function(){
//     $("#open-login").click(function(){
//         $("#login form").slideToggle(600);
//         $(this).toggleClass("close");
//     });
// });
// //====================================================================================================================
// // Jquery: animate() function
// $(document).ready(function () {
//     $("#image-animate").click( function () {
//         $(this).animate(
//         {
//             marginLeft:"+=200px"
//         },1000);
//       });    
// });
// //====================================================================================================================
// // Jquery: animate() functions nesting
// $(document).ready(function () {
//     $("#image-animate2").width(182).height(77).click(function () { 
//         $(this).animate({
//             marginLeft:"+=400px",
//             width:"546px",
//             height:"194px"
//         },3000,function () {
//             $("#description").fadeOut(1000);
//           }).delay(3000);
//           $(this).animate({
//             marginLeft:"+=400px",
//             width:"182px",
//             height:"77px"
//         },3000);
//             $(this).animate(
//                 {
//                     marginLeft:"-=800px"
//                 },3000);
//      });
// });
// //====================================================================================================================
// // Jquery: preloader
// $(document).ready(function () {
//     var image_hover=["images/Plympton1.gif","images/Plympton2.jpg","images/Plympton3.jpg"];
//     var images=[];
//     for(var i=0; i<image_hover.length; i++){
//         images[i] = new Image();
//         images[i].src = image_hover[i];
//     }
//   $("img").each(function () { 
//        $(this).hover(toChange, toRestore);
//   });
//   function toChange(e){
//       if (e.target==img1){
//           $("#Plympton1").attr("src",images[0].src);
//     }else if(e.target=img2){
//         $("#Plympton2").attr("src", images[1].src);
//     }else if(e.target=img3){
//         $("#Plympton3").attr("src", images[2].src);
//     }
//   }
//   function toRestore(e){
//     if (e.target==img1){
//         $("#Plympton1").attr("src", "images/Plympton1");
//   }else if(e.target=img2){
//       $("#Plympton2").attr("src", "images/Plympton2");
//   }else if(e.target=img3){
//       $("#Plympton3").attr("src", "images/Plympton3");
//   }
//   }
// });
//====================================================================================================================
// Jquery: fancybox 
// $("#gallery-fancybox").fancybox({
//     overlayColor: "#111111",
//     overlayOpacity: 0.5,
//     transitionIn:"elastic",
//     transitionOut:"elastic",
//     easingIn: "easyInSine",
//     titlePosition:"Outside",
//     cyclic: true,
//     speedIn: 4000
// });
//====================================================================================================================
// emergent windows don't function
// $(document).ready(function (e) {
//     $("#my-form").hide();
//     $("#my-link").click(function(e){
//         $("#my-form").faceIn(1000);
//         e.preventDefault();
//         // return false;
//         console.log("tester");
//     })
// });
//====================================================================================================================
// emergent windows: make a bucle
// $(document).ready(function (e) {
//     var propVent="width=400, height=400, left=0, top=0";
//     var myWindow=open("https://twitter.com/SMN_Argentina","Meteorology", propVent);  
//     $("#button-close").click(function (e) {
//         e.preventDefault();
//         myWindow.close();
//      });
// });
//====================================================================================================================
// Iframe
// $(document).ready(function () {
//     ("#pulse").click(function(e){
//         e.preventDefault();
//         $("#extern").attr("src","http://portalweb.cammesa.com/default.aspx"); 
//     })    
// });
//====================================================================================================================
// Iframe
// $(document).ready(function () {
//     $(".iframe").fancybox({
//         width:"90%",
//         height:"90%",
//         titlePosition: "Outside"
//     });    
// });
// console.log("Horaaaa!!10");
// $(document).ready(function () {
//     var zeit = new Date();
//     document.write(zeit);
//     var hour = zeit.getHours();
//     var minute = zeit.getMinutes();
//     var second = zeit.getSeconds();
//     var dayOfWeek = zeit.getDay();
//     console.log("The day is: " + dayOfWeek);
//     var date = zeit.getDate();
//     var month = zeit.getMonth();
//     var year = zeit.getFullYear();
//     function clock(){
//         document.write(dayOfWeek + " " + date + " de " + month + " del " + year + "    " + hour +":"+ minute +":"+ second + ";");
//     }
// });
//====================================================================================================================
// AJAX
//  $(document).ready(function () {
//     $("#webs-ajax a").click(function(){
//         $("#extern-container").load("C:/Users/mellisos/Desktop/Programming/HTML_CSS_JS/meteorology.html");
//         return false;
//     })
//  });
//====================================================================================================================
// AJAX JQuery: get() and post()
// $(document).ready(function () {
//     $("#login-form").submit(function () { 
//         // var data_form = {
//         //     user:$("#user").val(),
//         //     password:$("#password").val()}
//         var data_form = $(this).serialize();
//         $.get("login.php", data_form, dataProcess).error(errorProcess);
//         return false;
//     });
//     function dataProcess(){
//         if(dataProcess==""){
//             $("#extern-contain").html("<p> User right. Welcome to way </p>");
//         }else{
//             $("#extern-contain").html("<p> User don't authorized. Welcome to way </p>");
//         }
//     }
//     function errorProcess(){
//         var messageError = "There is an error";
//         $("#extern-contain").html("<p>" + messageError + "</p>");
//     };
// });
//===============================================================================================================================================
//===============================================================================================================================================
//===============================================================================================================================================
//===============================================================================================================================================
//ECMASCRIPT6 ES6: to define variables
// var name = 'beakman';
// var name = 'bill';
// console.log('Hello ' + name);
// let variable = 'car';
// let variable = 'bike';
// console.log('this is a ' + variable);
// const colour = 'blue';
// const colour = 'red';
// console.log('this is ' + colour)
//===============================================================================================================================================
//ECMASCRIPT6 ES6: 
// var age = 18;
// if(age >= 18){
//   var isAdult = true;
// };
// console.log(isAdult);
// const years = 18;
// if(years >= 18){
//   const heIsAdult = true;
//   console.log(heIsAdult);
// }
// console.log(heIsAdult);
//===============================================================================================================================================
//ECMASCRIPT6 ES6: const vs let
// let brand = "Ford";
// brand = "Audi";
// console.log(brand);
// const brand2 = "BMW";
// brand2 = "Peugeot";
// console.log(brand2);
// const arrayMobil = ["cars","trucks"];
// arrayMobil.push("bikes");
// console.log(arrayMobil);
document.getElementById("var").innerHTML = "var --> DON'T USE!";
document.getElementById("let").innerHTML = "let --> THIS USE IF I WANT TO CHANGE THE VALUE AFTER";
document.getElementById("const").innerHTML = "const --> IF I WAN'T TO CHANGE THE VALUE NEVER"; //===============================================================================================================================================
//ECMASCRIPT6 ES6: const vs let
// const name = "Georgina";
// const age = 24;
// const country = "Uruguay";
// console.log("The person is " + name + ", has " + age + " years old and she's from " + country);  //Javascript
// console.log(`The person is ${name}, hat ${age} years old and she's from ${country}`);     // ES6
//===============================================================================================================================================
//ECMASCRIPT6 ES6: arrow functions
// const names = ['Edgar', 'Katalina', 'Sandra', 'Sicilio'];
// //Conventional fuction
// const numberCharacthers = names.map(function(names){
//   console.log(`${names} has ${names.length} numbers of characters`);
// });
// //arrow functions
// (parameter) => {
//   return //code to ejecute
// }
// //only an argument
// const numberCharacthers = names.map( names => `${names} has ${names.length} numbers of characters`);
// console.log(numberCharacthers);
//===============================================================================================================================================
//ECMASCRIPT6 ES6: arrow functions
// function signUser(name, country = 'dont specify', mail, telephone = 'Dont specify'){
//   return `Name: ${name}, Country: ${country}, Mail: ${mail}, Telephone: ${telephone}`;
// } 
// console.log(signUser('Gardel', undefined, 'gardel@tango.com.ar', ));
//===============================================================================================================================================
//ECMASCRIPT6 ES6: to restructure arrays
// const person = ['Argentina', 42, 'Deutsch', 'Viktor'];
// const [country, age = 'No specify', language, name] = person;
// const showInfo = ([country, , ,name] = person) => console.log(country, name);
// showInfo(person);
//===============================================================================================================================================
//ECMASCRIPT6 ES6: to restructure objects
// const user = {
//   name: 'Juan Carlos Pistarini',
//   mail: 'fulano@fulano.com',
//   age: 30,
//   country: 'Argentina',
//   profession: 'engineer'
// }
// const {name, mail, address = 'No specify'} = user; 
// const showData = ({name, profession}) => console.log(`${name} is ${profession} with address ${address}`);
// showData(user);
//===============================================================================================================================================
//ECMASCRIPT6 ES6: Class and inheritance
// class User{
//   constructor(name, age, email){
//     this.name = name,   
//     this.age = age,    
//     this.email = email
//   }
//   showGreeting(message){
//     return message;
//   }
//   showInfo(){
//     return `
//         <b>Name:</b> ${this.name} <br />
//         <b>Age:</b> ${this.age} <br />
//         <b>Email:</b> ${this.email} <br />
//         <hr />
//     `;
//   }
// }
// const Edward = new User("Edward", 28, "edward1112@correo.com");
// document.write(Edward.showInfo());
// class Student extends User{
//   constructor(name, age, email, degree){
//     super(name, age, email);
//     this.degree = degree;
//   }
//   showInfo(){
//     return `
//         <b>Name:</b> ${this.name} <br />
//         <b>Age:</b> ${this.age} <br />
//         <b>Email:</b> ${this.email} <br />
//         <b>Degree:</b> ${this.degree} <br />
//         <hr />
//     `;
//   }
// }
// const Alexander = new Student("Alexander", 25, "alexarg25@correo.com", "Web Developer");
// document.write(Alexander.showInfo());
//===============================================================================================================================================
//ECMASCRIPT6 ES6: new ways for to work with objects
// const createObject = (name, age) => {
//   return{
//     name,
//     age,
//     showDate(){
//       return `${name} has ${age} years old`;
//     }
//   }
// } 
// console.log(createObject("Hermann", 38).showDate());
//===============================================================================================================================================
//ECMASCRIPT6 ES6: parameters rest
// const showInfo = (...data) => {
//   console.log(data);
// };
// showInfo('Hermann', 29, 'Hesse', 'Deutschland');
// //===============================================================================================================================================
// //ECMASCRIPT6 ES6: parameters spread
// const arrayData = [ 'Albert', 33, 'Einstein', 'Deutschland'];
// showInfo(...arrayData); 
//===============================================================================================================================================
//ECMASCRIPT6 ES6: promises to work with AJAX
// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//             //this simulate AJAX
//     const success = true;
//     if(success){
//       resolve('The operation was success');
//     }else{
//       reject("The operation wasn't success");
//     }
//   }, 4000); 
// });
// prom.then((message) => {
//   alert(message);
// });
// prom.catch((message) => {
//   alert(message);
// });
//===============================================================================================================================================
//ECMASCRIPT6 ES6: new methodes for strings and arrays
// const text = 'Hello world, weather';
// console.log(text, 'begin with h:', text.toLowerCase().startsWith('h'));
// console.log(text, 'ending with d:', text.toLowerCase().startsWith('d'));
// console.log(text, 'include the word weather:', text.includes('weather'));
// const friends = ['Stan', 'Kenny', 'Eric', 'Kyle', 'Towelie'];
// console.log(friends.includes('Eric'));
// console.log(friends.find(friend => friend.length > 6 ));
// console.log(friends.findIndex( friend => friend === 'Towelie'));
//===============================================================================================================================================
//ECMASCRIPT6 ES6: new methodes for strings and arrays