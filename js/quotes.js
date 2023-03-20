const quotes =[
    {
        quote:"Nothing is more despicable than respect based on fear.",
        author:"Albert Camus"
    },
    {
        quote:"It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
        author:"Antoine de Saint-Exupery"
    },
    {
        quote:"You don't live in a world all alone. Your brothers are here too.",
        author:"Albert Schweitzer"
    },
    {
        quote:"A hungry man is not a free man.",
        author:"Adlai Stevenson"
    },
    {
        quote:"One man with courage makes a majority.",
        author:"Andrew Jackson"
    },
    {
        quote:"Television has a real problem. They have no page two.",
        author:"Art Buchwald"
    },
    {
        quote:"Anything you're good at contributes to happiness.",
        author:"Bertrand Russell"
    },
    {
        quote:"Happiness is a warm puppy.",
        author:"Charles M. Schulz"
    },
    {
        quote:"I was never less alone than when by myself.",
        author:"Edward Gibbon"
    },
    {  
        quote:"A friend in power is a friend lost.",
        author:"Henry Adams"
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;