document.addEventListener('DOMContentLoaded',function(){
    let btn = document.querySelector("#new-quote");
    let quote = document.querySelector(".quote");
    let person = document.querySelector(".person");
    const quotes = [
      {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs",
      },
      {
        quote: "Be the change you wish to see in the world.",
        person: "Mahatma Gandhi",
      },
      {
        quote:
          "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        person: "Winston Churchill",
      },
      {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt",
      },
      {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay",
      },
      {
        quote:
          "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Einstein",
      },
      {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein",
      },
      {
        quote:
          "The only thing necessary for the triumph of evil is for good men to do nothing.",
        person: "Edmund Burke",
      },
      {
        quote:
          "If you can't explain it simply, you don't understand it well enough.",
        person: "Albert Einstein",
      },
      {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison",
      },
    ];
    btn.addEventListener('click', function()  {
        console.log('clicked');
      let random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random].quote;
      person.innerText = quotes[random].person;
    });
    
})
