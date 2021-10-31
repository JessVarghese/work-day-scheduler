
//Display current day at the top of the page
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').innerHTML= currentDay;



//check for current time

let rows = document.getElementsByClassName("row-2");

    
    function getCurrentHour() {

        let currentHour = moment().format("H"); 

        $(".row-2").each(function(){
            rowHour = parseInt($(this).attr("id")); 

        if (currentHour > rowHour) {
                $(this).addClass("past");

            } else if (currentHour == rowHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    
        })

      
        console.log(currentHour);
        console.log(rowHour);

    };
        getCurrentHour();


   function saveData() {
    $(".saveBtn").on("click", function () {

        $(".saveBtn").each(function(){

        })
            saveButton = parseInt($(this).attr("id")); 
        
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");

        
        localStorage.setItem("text",text);
        localStorage.getItem("time",time);
   })

   $("#hour09 .description").val(localStorage.getItem("hour9"));
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour13 .description").val(localStorage.getItem("hour13"));
   $("#hour14 .description").val(localStorage.getItem("hour14"));
   $("#hour15 .description").val(localStorage.getItem("hour15"));
   $("#hour16 .description").val(localStorage.getItem("hour16"));
   $("#hour17 .description").val(localStorage.getItem("hour17"));
        
   }
    saveData();