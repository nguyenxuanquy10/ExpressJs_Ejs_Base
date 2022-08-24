const express = require("express");
const app = express();
const PORT = 5000;
const router = require("./routes/index");
const connectDB = require("./config/database");
connectDB();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use(router)
app.listen(PORT, function() {
    console.log("listen port " + PORT)
})