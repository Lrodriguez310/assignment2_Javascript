// WEB303 Assignment 2

// Programmer: Luis Rodriguez
// Program objective: to have the content of each html listed below to show without going to another page. The contents will load in the same page using an animation.
// Date: 2022 09 25


$(document).ready(function(){    // readying function with document 
   


   $("a#prospect").click(function(){   // when the id prospect is clicked it will start up the function / animation


        $("#content").hide().load("prospect.html").slideDown(900);     // content of hiding and loading prospect.html
                                                   // the animation will perform a slidedown.		


        console.log("Prospect is working!");  // console will log if it is working.



    }); // closing click function for prospect id



    $("a#convert").click(function(){  //when the id convert is clicked it will start the function


        $("#content").hide().load("convert.html").fadeIn(1900);  // hiding the content open and then loading convert.html into the page
		                                         // animation will fade it in


        console.log("Covert is working!"); // console will log if it is working

    });  // closing click function for convert


    $("a#retain").click(function(){  // when the id retain is clicked it will start the function


        $("#content").hide().load("retain.html").fadeIn(2000);  // Hiding the last open tab and loading the clicked retain.html into page 
		                                          // animate to fade in


        console.log("Retain is working!"); // console will log if it is working.


    }); // closing click function for retain ID


});  // closing documt.ready function
