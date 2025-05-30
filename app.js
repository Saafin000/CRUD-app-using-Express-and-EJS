const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const{v4:uuidv4}=require("uuid");
const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

let posts=[
    {
        id:uuidv4(),
        username:"Saafin",
        content:"I Love Coding and solve real world problems."
    },
    {
        id:uuidv4(),
        username:"Rakib",
        content:"I love Machine Learning."
    },
    {
        id:uuidv4(),
        username:"Sohil",
        content:"I am good in communication skills."
    }
];

app.get("/posts",(req,res)=>{
    res.render("index",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new",{posts});
});

app.post("/posts",(req,res)=>{
    const {username,content}=req.body;
    const id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    const {id}=req.params;
    const post=posts.find(p=>p.id===id);
    res.render("show",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    const {id}=req.params;
    const post=posts.find(p=>p.id===id);
    res.render("edit",{post});
});

app.patch("/posts/:id",(req,res)=>{
    const {id}=req.params;
    const newContent=req.body.content;
    const post=posts.find(p=>p.id===id);
    post.content=newContent;
    res.redirect("/posts");
});
app.delete("/posts/:id",(req,res)=>{
    const {id}=req.params;
    posts=posts.filter(p=>p.id!==id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("Server running on http://localhost:8080");
});