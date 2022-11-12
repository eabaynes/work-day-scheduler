//  todo: comment out javascript code

// create a click event on buttons in hmtl
$('button').on('click', handleClick)

// use the click event to save text in textareas to local storage using div id as key
function handleClick (event) {

  var saveKey = $(this).parent('div').attr("id")

  var saveValue = $(this).siblings('textarea').val()

  localStorage.setItem(saveKey, saveValue)
}

$(document).ready(function checkStorage() {

  $('div').each(function loadStorage(){

    const thisID = this.id

    const writeValue = localStorage.getItem(thisID)

      $(this).children('textarea').append(writeValue)
    })
})
// })

// day.js insert for current date in "month day, year" format in the header
const date = dayjs();
$('#currentDay').text(date.format('MMM D, YYYY'));

  // variable to log current time
  const currentTime= dayjs().format('H')

 $(function() {
    $('div').each(function(){
      var idArray = this.id.split("-")
      var hour = Number(idArray[1])
      if (hour < currentTime) {
        $(this).addClass("past")
      } else if (hour == currentTime) {
        $(this).addClass("present")
      } else if (hour > currentTime) 
      {$(this).addClass("future")
    }
    })
  })
 
