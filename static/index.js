
const api = "https://type.fit/api/quotes";
let QuotesData;
let currentQuote;
const newQuoteBtn = document.getElementById('newQuote');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const tweet = document.getElementsByClassName('fa-twitter')[0];

const fetchQuotes = async () => {

    try {

        let response = await fetch(api);

        QuotesData = await response.json();

        QuotesData.push({
            text: "Don't let the Anxiety take over your voice",
            author: "Puneet Kumar Sharma"
        });

    } catch (err) {

        console.log("Something Wrong Happened!");
    }
}

const newQuote = () => {

    currentQuote = QuotesData[Math.floor(Math.random() * 1645)];
}

newQuoteBtn.addEventListener('click', () => {

    newQuote();

    quote.innerText = currentQuote.text;

    currentQuote.author == null ? (author.innerText = "By Unknown") : (author.innerText = `By ${currentQuote.author}`);
});

tweet.addEventListener('click',()=>{

    window.open(`https://twitter.com/intent/tweet?text=${currentQuote.text}`);
});

fetchQuotes();


