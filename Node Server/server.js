const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/sayHai", (req, res) => {
  res.setHeader('content-type','application/json')

  res.json({ status:true, message: "hello ng greetings" });
});

// Start the server 
app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
  
});