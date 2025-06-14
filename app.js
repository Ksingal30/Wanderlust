const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../Wanderlust/Models/listing.js")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");

main().then(()=>{
    console.log("Connection Succeded");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true})); //for line 31
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Welcome to Wanderlust!");
})


//Index Route
app.get("/listings",async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings})
})

//New post Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

//Read - Show Route 
app.get("/listings/:id",async(req,res)=>{
    //line 17
    let {id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})

//Create Route
app.post("/listings",async (req,res)=>{
    const newListing = new Listing(req.body.listing);
    newListing.save();
    res.redirect("/listings");
})  

//Edit Route
app.get("/listings/:id/edit", async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}) // method override 

//Update Route
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstructing
    res.redirect(`/listings/${id}`);
})

//Delete Route
app.delete("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id); 
    console.log(`${deletedListing} DELETED`);
    res.redirect("/listings");
})


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})