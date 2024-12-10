import express from "express";

const app = express();

const jokes = [
  {
    id: 1,
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
  },
  {
    id: 2,
    joke: "Why don't elephants use computers? Because they're afraid of the mouse!",
  },
  {
    id: 3,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 4,
    joke: "Why did the math book look sad? Because it had too many problems!",
  },
  {
    id: 5,
    joke: "What do you call fake spaghetti? An impasta!",
  },
];

app.get("/", (req, res) => {
  res.send("Appcication is serving");
});

app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Appliaction is sreving on port ${port}`);
});
