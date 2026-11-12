var express = require("express");
var cors = require("cors");

// Calls the express function to start a new Express application

var app = express();
app.use(cors());

app.use(function (request, response) {
    console.log("In comes a request to: " + request.url); // middleware

    let productsArray = [
        {
            id: 1001,
            title: "Coding & Web Design",
            description: "Learn how to code and design websites",
            location: "Hendon",
            price: 150,
            availableInventory: 5,
            icon: "fas fa-laptop-code"
        },
        {
            id: 1002,
            title: "Martial Arts",
            description: "Master self-discipline and defend with confidence",
            location: "Colindale",
            price: 80,
            availableInventory: 5,
            icon: "fas fa-user-ninja"
        },
        {
            id: 1003,
            title: "Performing Arts",
            description: "Unleash your inner star and shine on stage",
            location: "Harrow",
            price: 120,
            availableInventory: 5,
            icon: "fas fa-theater-masks"
        },
        {
            id: 1004,
            title: "Yoga & Meditation",
            description: "Find your inner calm and stretch your limits",
            location: "Camden",
            price: 90,
            availableInventory: 5,
            icon: "fas fa-spa"
        },
        {
            id: 1005,
            title: "Art & Crafts",
            description: "Unlock your creativity and make amazing creations",
            location: "Greenwich",
            price: 70,
            availableInventory: 5,
            icon: "fas fa-palette"
        },
        {
            id: 1006,
            title: "Football",
            description: "Dribble, pass, and shoot like a pro",
            location: "Wembley",
            price: 110,
            availableInventory: 5,
            icon: "fas fa-football-ball"
        },
        {
            id: 1007,
            title: "Dance",
            description: "Express yourself and groove to the rhythm",
            location: "Camden",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-music"
        },
        {
            id: 1008,
            title: "Chess",
            description: "Develop critical thinking and strategic planning skills",
            location: "Hammersmith",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-chess"
        },
        {
            id: 1009,
            title: "Maths Club",
            description: "Sharpen your mind and boost your problem-solving skills",
            location: "Edgware",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-calculator"
        },
        {
            id: 1010,
            title: "Science Club",
            description: "Learn about the world around us",
            location: "Stratford",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-flask"
        },
        {
            id: 1011,
            title: "Gymnastics",
            description: "Develop strength, flexibility, and coordination",
            location: "Islington",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-dumbbell"
        },
        {
            id: 1012,
            title: "History Club",
            description: "Learn about the past",
            location: "Isle of Wight",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-book"
        },
        {
            id: 1013,
            title: "Cricket Club",
            description: "Learn how to play cricket",
            location: "Dagenham",
            price: 95,
            availableInventory: 5,
            icon: "fas fa-baseball-ball"
        }
    ];

    response.json(productsArray);  // return JSON 
});

// Starting the server
app.listen(3001, function () {
    console.log("App started on port 3001");
});