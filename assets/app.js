const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World");
  });
app.get("/Emeril", (request, response) => {
    response.send("Bam!");
  });

app.get("/Steve-McGarrett", (request, response) => {
    response.send("Book 'em Danno!");
  });

app.get("/Coach-Taylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose");
  });
app.get("/Homer-Simpson", (request, response) => {
    response.send("D'Oh");
  });
app.get("/Bruce-Banner", (request, response) => {
    response.send("Don't make me angry");
  });
app.get("/JJ-Evans", (request, response) => {
    response.send("Dy-no-myte!");
  });
app.get("/Batman", (request, response) => {
    response.send("To the Batmobile!");
  });
app.get("/Hannibal-Smith", (request, response) => {
    response.send(" I love it when a plan comes together");
  });
app.get("/Fraiser", (request, response) => {
    response.send("I'm listening")
    // response.send("I'm Talking");
  });

  app.get("/magic8", (request, response) => {
    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"

      ]
    response.send(`<h1>${magic8Responses[Math.ceil(Math.random() * 10)]}</h1>`)
 })