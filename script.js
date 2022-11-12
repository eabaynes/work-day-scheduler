 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// select buttons in html
const buttons = $('button')

$('button').on('click', handleClick)

function handleClick (event) {
  console.log('hi')
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //MINE
  // [x]add global variable hours to query.selectorAll (hour-x)
  //[x] add global variable buttons to query.selectorALL (button)
  // []add eventListner "click" on save button
  // []on click: push textarea.textcontent to local storage
  // [](might need global variable events query selector to access and append content)
  // []testing might need to be done to see if unique ids need to be added to specify which text is saved?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // MINE
  // check for saved data in local storage
  // append and saved data (text) to appropriate textarea
  // note: see if individual hour-x ids will need to be coded individually. hope not.
}

// day.js insert for current date in "month day, year" format in the header
const date = dayjs();
$('#currentDay').text(date.format('MMM D, YYYY'));

  // variable to log current time
  const currentTime= dayjs().format('H')
  console.log(currentTime)

 $(function() {
    $('div').each(function(){
      var idArray = this.id.split("-")
      var hour = Number(idArray[1])
      if (hour < currentTime) {
        $("div").addClass("past")
      } else if (hour === currentTime) {
        $("div").addClass("present")
      } else if (hour > currentTime) 
      {$("div").addClass("future")
    }
    })
  })
 