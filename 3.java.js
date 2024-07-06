// Change background color
const redBtn = document.querySelector("#red");
const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");

redBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

greenBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

yellowBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});

// Generate random quote
const generateQuoteBtn = document.querySelector("#generateQuote");
const quote = document.querySelector("#quote");

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder you work, the harder it is to surrender. - Vince Lombardi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
];

generateQuoteBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = randomQuote;
});