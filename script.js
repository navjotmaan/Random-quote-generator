const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const randomBtn = document.getElementById('randomBtn');

async function getRandomQuote() {
  let data;

  try {
    // Try DummyJSON API
    const response = await fetch('https://dummyjson.com/quotes/random');
    data = await response.json();

    quoteElement.textContent = `"${data.quote}"`;
    authorElement.textContent = data.author;

  } catch (error) {
    // Fallback to Quotable API
    try {
      const response = await fetch('https://api.quotable.io/random');
      data = await response.json();

      quoteElement.textContent = `"${data.content}"`;
      authorElement.textContent = data.author;
    } catch (err) {
      quoteElement.textContent = "Failed to load quote 😢";
      authorElement.textContent = "";
      console.error("Both APIs failed:", err);
    }
  }
}

randomBtn.addEventListener('click', getRandomQuote);


