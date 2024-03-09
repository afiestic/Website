// script.js
document.addEventListener('DOMContentLoaded', function () {
    getQuotes();
  });
  
  function getQuotes() {
    fetch('/getQuotes')
      .then(response => response.json())
      .then(data => displayQuotes(data));
  }
  
  function addQuote() {
    const author = document.getElementById('author').value;
    const text = document.getElementById('quote').value;
  
    fetch('/addQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, text }),
    })
      .then(response => response.json())
      .then(newQuote => {
        displayQuote(newQuote);
        document.getElementById('author').value = '';
        document.getElementById('quote').value = '';
      });
  }
  
  function displayQuotes(quotes) {
    const quoteList = document.getElementById('quoteList');
    quoteList.innerHTML = '';
  
    quotes.forEach(quote => {
      displayQuote(quote);
    });
  }
  
  function displayQuote(quote) {
    const quoteList = document.getElementById('quoteList');
    const quoteDiv = document.createElement('div');
    quoteDiv.innerHTML = `<p><strong>${quote.author}:</strong> ${quote.text}</p>`;
    quoteList.appendChild(quoteDiv);
  }
  