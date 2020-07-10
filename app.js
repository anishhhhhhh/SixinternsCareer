const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/careers.html");
});

app.get("/1",(req, res)=>{
    res.render("1");
});

app.get("/2",(req, res)=>{
    res.render("2");
});

app.get("/3",(req, res)=>{
    res.render("3");
});

app.get("/4",(req, res)=>{
    res.render("4");
});

app.get("/5",(req, res)=>{
    res.render("5");
});

app.get("/6",(req, res)=>{
    res.render("6");
});

app.get("/7",(req, res)=>{
    res.render("7");
});

app.get("/8",(req, res)=>{
    res.render("8");
});

app.get("/9",(req, res)=>{
    res.render("9");
});

app.get("/10",(req, res)=>{
    res.render("10");
});

app.get("/11",(req, res)=>{
    res.render("11");
});

app.get("/12",(req, res)=>{
    res.render("12");
});

app.get("/13",(req, res)=>{
    res.render("13");
});

app.get("/14",(req, res)=>{
    res.render("14");
});

app.get("/15",(req, res)=>{
    res.render("15");
});

app.get("/16",(req, res)=>{
    res.render("16");
});

app.get("/17",(req, res)=>{
    res.render("17");
});

app.get("/18",(req, res)=>{
    res.render("18");
});
app.get("/19",(req, res)=>{
    res.render("19");
});
app.get("/20",(req, res)=>{
    res.render("20");
});
app.get("/21",(req, res)=>{
    res.render("21");
});
app.get("/22",(req, res)=>{
    res.render("22");
});
app.get("/23",(req, res)=>{
    res.render("23");
});
app.get("/24",(req, res)=>{
    res.render("24");
});
app.get("/25",(req, res)=>{
    res.render("25");
});
app.get("/26",(req, res)=>{
    res.render("26");
});
app.get("/27",(req, res)=>{
    res.render("27");
});
app.get("/28",(req, res)=>{
    res.render("28");
});
app.get("/29",(req, res)=>{
    res.render("29");
});
app.get("/30",(req, res)=>{
    res.render("30");
});
app.get("/31",(req, res)=>{
    res.render("31");
});
app.get("/32",(req, res)=>{
    res.render("32");
});
app.get("/33",(req, res)=>{
    res.render("33");
});
app.get("/34",(req, res)=>{
    res.render("34");
});
app.get("/35",(req, res)=>{
    res.render("35");
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});