
//Display current day at the top of the page
const currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').innerHTML= currentDay;

//check for current time
const currentHour = moment().format("H"); 
console.log(currentHour);


$(document).ready(function(){
    $(".saveBtn").click(function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        localStorage.setItem(time, text);
        localStorage.getItem(time, text);
  });
});


const rows = document.getElementsByClassName("row-2");


Array.from(rows).forEach(row => {
    let rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);

    }
        if (rowHour) {

            if (currentHour > rowHour) {
             $(".description").addClass("past");

      
            } else if (currentHour < rowHour) {
                $(".description").addClass("future");
        
            } else if (currentHour === rowHour) {
                $(".description").addClass("present");
        
            }
        }
    });

    
    
//    function saveData () {
//        var saveButton = document.getElementsByClassName("saveBtn");
//        saveButton.addEventListener("click", saveData);

//        var textInput = document.querySelectorAll("textarea");
//        textInput.addEventListener("click", saveData);
       
       
//         localStorage.setItem("saveButton", "saveButton");
//         localStorage.setItem("textInput", "textInput");

//         localStorage.getItem("saveButton");
//        localStorage.getItem("textInput");
//    }



    