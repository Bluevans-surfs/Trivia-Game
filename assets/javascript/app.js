
 // This code will run as soon as the page loads
 window.onload = function() {
   
  counter.start();
  
   $("#reset").on("click", counter.reset);




	 document.getElementById("form1").onsubmit=function(event) {

	   event.preventDefault();

       firstquestion = parseInt(document.querySelector('input[name = "firstquestion"]:checked').value);
	   secondquestion = parseInt(document.querySelector('input[name = "secondquestion"]:checked').value);
	   thirdquestion = parseInt(document.querySelector('input[name = "thirdquestion"]:checked').value);
	   fourthquestion = parseInt(document.querySelector('input[name = "fourthquestion"]:checked').value);
	   fifthquestion = parseInt(document.querySelector('input[name = "fifthquestion"]:checked').value);
	   
	   
	   result = firstquestion + secondquestion + thirdquestion + fourthquestion + fifthquestion;
	   
	document.getElementById("grade").innerHTML = result;
	   

if (result == 0) {result2 = "I don't think you watched the Brady Bunch."};
if (result == 20) {result2 = "You need to spend more time watching the Brady Bunch. Try again."};
if (result == 40) {result2 = "I think you should watch some Brady Bunch reruns. Try again."};
if (result == 60) {result2 = "I think you did watch the Brady Bunch, but could do better. Try again."};
if (result == 80) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're a Brady Bunch fan!"};
document.getElementById("grade2").innerHTML = result2; 



return false; // required to not refresh the page; just leave this here
} //this ends the submit function







  
 };
 
 //  Variable that will hold our setInterval that runs the counter
 var intervalId;
 
  
 // Our counter object is identified as an object because of the {}.
 var counter = {
 
   time: 90,
    
   reset: function() {
 
     counter.time = 0;
     
     // DONE: Change the "display" div to "00:00."
     $("#display").html("00:00");
 
     
   },

   start: function() {
 
     // DONE: Use setInterval to start the count here and set the clock to running.
       
         intervalId = setInterval(counter.count, 1000);
         
     },

   stop: function() {
 
     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
     clearInterval(intervalId);
     
   },
   
   count: function() {
 
     // DONE: increment time by 1, remember we cant use "this" here.
     counter.time--;
 
     // DONE: Get the current time, pass that into the counter.timeConverter function,
     //       and save the result in a variable.
     var converted = counter.timeConverter(counter.time);
     console.log(converted);
 
     // DONE: Use the variable we just created to show the converted time in the "display" div.
     // When selecting an id or class in the html, we repersent an id using a # and a class using a .
     $("#secondsleft").html(converted);

	if (counter.time == 0) {

		counter.stop();
   }


   },
   timeConverter: function(t) {
 
     var minutes = Math.floor(t / 60);
     var seconds = t - (minutes * 60);
 
     if (seconds < 10) {
       seconds = "0" + seconds;
     }
 
     if (minutes === 0) {
       minutes = "00";
     }
     else if (minutes < 10) {
       minutes = "0" + minutes;
     }
 
     return minutes + ":" + seconds;
   }
 };
 
   
 var time = 0;
 
 // function reset() {
 
 //   time = 0;
 
 //   $("#display").html("00:00");
  
 // }
 
 function start() {
   intervalId = setInterval(count, 1000);
 }
 
 function stop() {
 
   console.log("stopping");
   clearInterval(intervalId);
 
 }
 
  
 function count() {
 
   time++;
   var converted = timeConverter(time);
   $("#display").html(converted);
 
 }
 
 function timeConverter(t) {
 
   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);
 
   if (seconds < 10) {
     seconds = "0" + seconds;
   }
 
   if (minutes === 0) {
     minutes = "00";
   }
	
   else if (minutes < 10) {
     minutes = "0" + minutes;
   }
 
   return minutes + ":" + seconds;

   }



















