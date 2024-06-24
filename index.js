let express = require("express");
let app = express();

//Return a Welcome Message using function
function getWelcomeMessage() {
  return "Welcome to our Service!";
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

//Return Greeting Message with username
function getGreetingMessage(username) {
  return " Hello, " + username + " !";
}
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

//Check Password Strength
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

//Return the sum of two numbers
function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

//Return Subscription Status
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

//Return the final Price after discounts
function getDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

//Return a personalized greeting message
function getPersonalizedGreeting(age, gender, name) {
  return " Hello, " + name + " You are a " + age + " years old " + gender + ".";
}
app.get("/personalized-greeting", (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

//Return the final Price after discount and tax
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalePrice = discountedPrice + (discountedPrice * tax) / 100;
  return finalePrice.toString();
}
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax));
});

//Return the total exercise time
function getTotalExerciseTime(running, cycling, swimming) {
  let totalTime = running + cycling + swimming;
  return totalTime.toString();
}
app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming));
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
