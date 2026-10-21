

const {Router} = require("express");
const indexRouter = Router();


const messages = [
 {
   text: "hi there!", user: "Amando",added: new Date()
 },
 { 
   text: "Hello World!", user: "Charles", added: new Date()
 },

]


indexRouter.get("/", (req, res) => {
  res.render("index", {title: "mini Messageboard", messages: messages});
});


indexRouter.get("/new", (req, res) => {
  res.render("form");
});

//to post new  messages to the message array
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

//to get messages per id of the user
indexRouter.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if(!message) {
     return res.status(404).send("Message not Found");
  }
  res.render("message", {message: message });
});

module.exports = indexRouter;
