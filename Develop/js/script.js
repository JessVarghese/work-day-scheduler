//Display current day at the top of the page
let currentDay = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDay;

//check for current time

let rows = document.getElementsByClassName("row-2");

function getCurrentHour() {
  let currentHour = moment().format("H");

  $(".row-2").each(function () {
    rowHour = parseInt($(this).attr("id"));

    if (currentHour > rowHour) {
      $(this).addClass("past");
    } else if (currentHour == rowHour) {
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
}
getCurrentHour();



//save text input to local storage
function saveData() {
   
    var textItem= {};

    $('.textItem').each(function(){
        textItem[this.id] = this.value;
    })
    localStorage.setItem('textString',JSON.stringify(textItem));

    console.log(localStorage.getItem('textString'));               
    console.log(JSON.parse(localStorage.getItem('textString')));   
}


  

//   $("#hour09 .description").val(localStorage.getItem("hour9"));
//   $("#hour10 .description").val(localStorage.getItem("hour10"));
//   $("#hour11 .description").val(localStorage.getItem("hour11"));
//   $("#hour12 .description").val(localStorage.getItem("hour12"));
//   $("#hour13 .description").val(localStorage.getItem("hour13"));
//   $("#hour14 .description").val(localStorage.getItem("hour14"));
//   $("#hour15 .description").val(localStorage.getItem("hour15"));
//   $("#hour16 .description").val(localStorage.getItem("hour16"));
//   $("#hour17 .description").val(localStorage.getItem("hour17"));




// saveBtn.on("click", function () {
//   // console.log(this); //save button
//   var time = $(this).siblings(".hour").text();
//   var plan = $(this).siblings(".plan").val();

//   // THEN the text for that event is saved in local storage
//   localStorage.setItem(time, plan);
// });
