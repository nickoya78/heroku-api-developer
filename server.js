const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

// All my API code goes here
app.get("/api", (req, res) => {
  res.json({
    users: [
      "userOne: Alex Cooper, email: alex@gmail.com, phone: 626-400-9007",
      "userTwo: David Smith, email: david@aol.com, phone: 322-300-5008",
      "userThree: Beck Small, email: beck@yahoo.com, phone: 310-400-6009",
      "userFour: James Bond, email: james@gmail.com, phone:818-214-4001",
      "userFive: Fred Walker, email: fred@yahoo.com, phone:808-392-8080",
      "userSix: Sam London, email: sam@yahoo.com, phone:300-562-4030",
    ],
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, (_) => {
  console.log(`server is started on port ${port}`);
});
