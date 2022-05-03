/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  /*
  * Author: Travis Brown
  * Grade Goal: Exceeds Expectations
  * Will accept meets expectations
  */

/*** 
 * Quote Data 
***/
const quotes = [
  {
    quote: '" The only source of knowledge is experience. "',
    source: 'Albert Einstein',
    year: 1941
  },
  {
    quote: '" A riddle wrapped in an enigma. "',
    source: 'Sir Winston Churchill',
    year: 1939
  },
  {
    quote: '" If music be the food of love, play on. "',
    source: 'William Shakespeare',
    year: 1602
  },
  {
    quote: '" Many a true word is spoken in jest. "',
    source: 'Geoffrey Chaucer',
    year: 1390
  },
  {
    quote: '" I know of no genius but the genius of hard work. "',
    source: 'John Ruskin',
    citation: 'Notes by Mr Ruskin on His Collection of Drawings by the late J. M. W. Turner, 1878',
    year: 1902
  },
  {
    quote: '" The journey of a thousand miles begins with the first step. "',
    source: 'Lao Tzu'
  },
  {
    quote: '" That which does not kill us makes us stronger. "',
    source: 'Friedrich Nietzsche'
  },
  {
    quote: '" Life is what happens when you"re busy making other plans." ',
    source: 'John Lennon'
  },
  {
    quote: '" You must be the change you wish to see in the world. "',
    source: 'Mahatma Gandhi'
  },
  {
    quote: '" You only live once, but if you do it right, once is enough. "',
    source: 'Mae West'
  },
  {
    quote: '" You miss 100 percent of the shots you never take. "',
    source: 'Wayne Gretzky - Michael Scott',
    tags: 'humor'
  }
]




/***
 * Generates a random number, then uses the number as an index to return a 
 * random quote. 
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum]
  return randomQuote;
}



/***
 * Separates the object attributes into printable html code. Then appends the html to the page.
***/
function printQuote(){
  let callRandom = getRandomQuote();
  let html = `
  <p class = "quotes">${callRandom.quote}
  <p class = "source">${callRandom.source}
  `
  // If statements check for citation and year attributes. Concats if true.
  if(callRandom.citation){
    html+= `
    <span class="citation">${callRandom.citation}</span>
    `
  }

  if(callRandom.year){
    html+= `
    <span class="year">${callRandom.year}</span>
    `
  }

  if(callRandom.tags){
    html+= `
    <span class="tags"> - ${callRandom.tags} &#128513</span>
    `
  }

  html+= `</p>`;

// Changes background color to random RGB value.
  changeColor();
  
// Appends completed string to page.
  let quoteBox = document.querySelector('.quote-box');
  quoteBox.innerHTML = html;
  
}

// Changes the background color to random RGB valuewhen a new quote is displayed
function changeColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomRGB = `rgb(${r},${g},${b})`; 
  document.body.style.background = randomRGB;
}


setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);