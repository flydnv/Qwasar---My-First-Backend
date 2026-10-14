const express = require("express");
const app = express();

const port = 8080;
const sinatraSongs = [
    "Fly Me to the Moon",
    "My Way",
    "Theme from New York, New York",
    "Strangers in the Night",
    "That's Life",
    "I've Got You Under My Skin",
    "Come Fly with Me",
    "The Way You Look Tonight",
    "Luck Be a Lady",
    "Summer Wind",
    "It Was a Very Good Year",
    "Somethin' Stupid",
    "The Best Is Yet to Come",
    "Night and Day",
    "Witchcraft",
    "I Get a Kick Out of You",
    "You Make Me Feel So Young",
    "My Funny Valentine",
    "Learnin' the Blues",
    "High Hopes"
];

// console.log("Hello Dear")
app.get("/", (req,res)=>{
    const randomIndex = (min,max)=> Math.floor(Math.random()*(max-min+1) + min);
    let request = sinatraSongs[randomIndex(0,sinatraSongs.length)-1]
    res.send(request);
});
app.get("/birth_date", (req,res)=>{
    res.send("December 12, 1915");
});
app.get("/birth_city", (req,res)=>{
    res.send("Hoboken, New Jersey");
});
app.get("/wives", (req,res)=>{
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
});
app.get('/picture', (req, res) => {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
});

app.get("/public", (req, res) => {
    res.send("Everybody can see this page");
});
app.get("/protected", (req,res) => {
    if(!req.headers.authorization){
        res.set(['WWW-Authenticate', 'Basic realm="401"'])
        res.status(401).send("Not Authorized.");
    }
    const array  = atob(req.headers.authorization.split(' ')[1]).split(':');
    console.log(array);
    const username = array[0];
    const password = array[1];
    if(username=="admin" && password=="admin"){
        res.send("Welcome, authenticated client")
        return;
    }
    res.set(['WWW-Authenticate', 'Basic realm="401"'])
    res.status(401).send("Not Authorized.");
});

app.listen(port, ()=>{
    console.log("Listen done " + port);
})
