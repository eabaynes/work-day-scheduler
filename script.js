// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// MINE review jquery, missed intro class. don't know what "wrap code in jquery" means
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //MINE
  // add global variable hours to query.selectorAll (id=hour-x) if possible
  // add global variable buttons to query.selectorALL (button)
  // add eventListner "click" on save button
  // on click: push textarea.textcontent to local storage
  // (might need global variable events query selector to access and append content)
  // testing might need to be done to see if unique ids need to be added to specify which text is saved?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // MINE
  // fetch current time
  // note hour will have to be parsed from id(eg pull 9 from hour-9)
  // check if id =< currentHour
  // if id <currentHour, apply past class
  // if id === currentHour, apply present class
  // if id > currentHour, apply future class
  // test if append will remove current class if class change needs to be made
  // (ie changing past to present)
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // MINE
  // check for saved data in local storage
  // append and saved data (text) to appropriate textarea
  // note: see if individual hour-x ids will need to be coded individually. hope not.
  // TODO: Add code to display the current date in the header of the page.

  // MINE for date: run day.js for 3 letter month, 2 digit day, and full year
  // MINE append to id currentDay
});
