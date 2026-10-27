const express = require("express");
const app = express();
const port = 8000;


app.set("view engine", "ejs");





const horaireDeTravail = (req, res, next) => {
  const currentHour = new Date();
  const currentDay = currentHour.getDay(); // Les jours de la semaine sont représentés par des nombres (0 pour dimanche, 1 pour lundi, etc.)
  const currentTime = currentHour.getHours(); // Les heures sont représentées par des nombres (0-23)

  if ( currentDay >= 1 && currentDay <= 5 && currentTime >= 8 && currentTime < 24 ) {
    next();
  } else {
    res.status(403).send("Désolé, nous sommes fermés les week-ends, laissez-nous un message et nous vous répondrons dès que possible, merci pour la compréhension!");
  }
};

app.use(horaireDeTravail);



app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/Services", (req, res) => {
    res.render("Services")
});

app.get("/Contacts", (req, res) => {
    res.render("Contacts")
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});