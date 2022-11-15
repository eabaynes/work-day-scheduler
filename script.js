// create a click event on buttons in hmtl
$('button').on('click', handleClick)

// use the click event to save text in textareas to local storage using div id as key
function handleClick (event) {
// variable to pull div id of the button clicked and call it as the key for localstorage
  const saveKey = $(this).parent('div').attr("id")
// variable to pull textarea value and call it as the value stored in localStorage
  const saveValue = $(this).siblings('textarea').val()
// save data to local storage
  localStorage.setItem(saveKey, saveValue)
}

// when the document is ready, check for information saved in local storage
$(document).ready(function checkStorage() {
// for each div, load data from local storage
  $('div').each(function loadStorage(){
    // variable to pull id (i.e. saveKey) of current div being checked
    const thisID = this.id
      // grab the saved value in the local storage using the corresponding id
    const writeValue = localStorage.getItem(thisID)
      // write saved value to appropriate textarea
      $(this).children('textarea').append(writeValue)
    })
})

// day.js insert for current date in "month day, year" format in the header
const date = dayjs();
$('#currentDay').text(date.format('MMM D, YYYY'));

  // variable to log current time (24hr format)
  const currentTime= dayjs().format('H')

  // function to check current hour and apply appropriate css class
 $(function() {
  // for each div element
    $('div').each(function(){
      // grab id of current div selected and split it on the "-"
      const idArray = this.id.split("-")
      // grabs only the number in the idArray
      const hour = Number(idArray[1])
      // check the hour block of the div against the current hour
      if (hour < currentTime) {
        // if hour is less than the current hour, apply past class
        $(this).addClass("past")
      } else if (hour == currentTime) {
        // if hour is equal to current hour, apply present class
        $(this).addClass("present")
      } else if (hour > currentTime) {
        // if hour is greater than current hour, apply future class
        $(this).addClass("future")
    }
    })
  })