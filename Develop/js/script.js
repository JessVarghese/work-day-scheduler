
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
    
        });
        console.log(currentHour);
        console.log(rowHour);
        console.log(rowHour[1]);
    };
        getCurrentHour();


    
var saveButton = document.getElementsByClassName('saveBtn');
saveButton.onclick = saveData;
        

    function saveData(){
    var input = document.getElementsByClassName("description")    ;
    localStorage.setItem("button", input.value);
};


    // // //create an onclick function for the save button
    // // select the description
    // set the value and time of that task