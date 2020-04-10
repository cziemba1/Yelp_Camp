const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let campgrounds = [
    { name: "Salmon Creek", image: "https://images.unsplash.com/photo-1544239649-4238bf7bd7d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { name: "Granite Hill", image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { name: "Mountain Rest", image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" }
]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("landing")
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds })
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.listen(3000, function () {
    console.log("The Yelp Camp Server is running...")
})