import express from "express";

const app = express();

app.get("/generate", (request, response) => {
  const randomNumber = Math.round(Math.random() * 100);
  const isWin = randomNumber >= 50;

  response.json({
    data: {
      success: true,
      status: 200,
      message: "Number generated successfully",
      number: randomNumber,
      win: isWin,
    },
  });
});

app.listen(5000, () => {
  console.log("app started on port 5000");
});
