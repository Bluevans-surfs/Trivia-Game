
 // This code will run as soon as the page loads
 window.onload = function() {
   
  stopwatch.start();
  
   $("#reset").on("click", stopwatch.reset);
  
 };
 
 //  Variable that will hold our setInterval that runs the stopwatch
 var intervalId;
 
  
 // Our stopwatch object is identified as an object because of the {}.
 var stopwatch = {
 
   time: 5,
    
   reset: function() {
 
     stopwatch.time = 0;
     
     // DONE: Change the "display" div to "00:00."
     $("#display").html("00:00");
 
     
   },

   start: function() {
 
     // DONE: Use setInterval to start the count here and set the clock to running.
       
         intervalId = setInterval(stopwatch.count, 1000);
         
     },

   stop: function() {
 
     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
     clearInterval(intervalId);
     
   },
   
   count: function() {
 
     // DONE: increment time by 1, remember we cant use "this" here.
     stopwatch.time--;
 
     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
     //       and save the result in a variable.
     var converted = stopwatch.timeConverter(stopwatch.time);
     console.log(converted);
 
     // DONE: Use the variable we just created to show the converted time in the "display" div.
     // When selecting an id or class in the html, we repersent an id using a # and a class using a .
     $("#secondsleft").html(converted);

	if (stopwatch.time == 0) {

		stopwatch.stop();
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
 //   lap = 1;
 
 //   $("#display").html("00:00");
 //   $("#laps").html("");
 
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