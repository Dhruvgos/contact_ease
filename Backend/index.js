const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors'); 
const user = require("./models/user");
require('dotenv').config()
const contact = require("./models/contacts"); 
// const getallcontact = require('./middleware/fetchUser')
const jwt = require("jsonwebtoken");
const fetchUser = require("./middleware/fetchUser");
const SECRET_KEY = process.env.SECRET;

async function startServer() {

    try {
        const app = express();
        await connectToMongo();
        const port = process.env.PORT || 8000;
        app.use(express.json());
        app.use(cors({ origin: 'http://localhost:3000' }));
        app.post("/createuser", async (req, res) => {

            const existingUser = await user.findOne({ email:req.body.email })
            if(existingUser){
                return res.status(400).json({message:"User already exist."})
            }
            try {
            let data = req.body;
            // res.send("Data Received: " + JSON.stringify(data));
            const newUser = await user.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
            });
            // console.log("New user created:", newUser.select("-password"));

            const token = jwt.sign({ email: newUser.email, id: newUser._id }, SECRET_KEY);
            res.status(201).json({ user: newUser, token: token });
            } catch (error) {
                res.status(500).json({message:"Something went wrong"})
            }

        });

        app.get('/api',(req,res)=>{
          res.send("hello")
        })

        app.post('/login', async (req, res) => {
            const { email ,password} = req.body; // Use req.query instead of req.body to get parameters from the query string
            const foundUser = await user.findOne({ email:email })
            if(!foundUser){
                return res.status(404).json({message:"User does not exist."})
            }
            try {
                if(foundUser.password !== password){
                    res.status(400).json({message:"Invalid credentials."})
                }
                const token = jwt.sign({email:foundUser.email,id:foundUser._id},SECRET_KEY);
                 res.status(201).json({user:foundUser,token:token})
            } catch (error) {
                res.status(500).json({message:"Something went wrong"})
            }
        })

        app.post('/addcontact',fetchUser,async(req,res)=>{
            const {email,phone,name}=req.body;
            try {
                const newContact = new contact({
                  name,email,phone
                    , user: req.user.id
                })
                const savedContact = await newContact.save();
                res.status(201).json(savedContact)
            } catch (error) {
                console.log(error)
                res.status(500).json({message:"Something went wrong"})
            }
        })

        app.get('/getcontacts',fetchUser,async(req,res)=>{
            const getContactsForUser = await contact.find({ user:req.user.id });
                try {
                    res.status(200).json(getContactsForUser)
                } catch (error) {
                    res.status(500).send("Internal server error occurred");
                }

        })

        app.delete('/deletecontact/:id',fetchUser,async(req,res)=>{
            //we use req.params.id as it means take value from parameter of url means = :id
                const deleteContact = await contact.findById({_id: req.params.id});
                try {
                    deleteContact.deleteOne();
                    res.sendStatus(204);
                } catch (error) {
                    res.sendStatus(404).json({error});
                }
        })

        app.put('/updatecontact/:id',fetchUser,async(req,res)=>{
                let contactToUpdated = await contact.findById({_id:req.params.id});
                const {name,phone,email}=req.body;
                try {
                    if(!contactToUpdated){
                        res.status(404).json({message:"Contact not found."})
                       }
                    
                    if(contactToUpdated.user.toString() !== req.user.id){
                        res.status.json({message:"Not allowed"})
                    }

                    let newContact = {};
                    if(name) {newContact.name = name}
                    if(phone) {newContact.phone = phone}
                    if(email) {newContact.email = email}
                    
                    contactToUpdated = await contact.findByIdAndUpdate(req.params.id,{ $set: newContact },{new:true})
                    // res.json(contactToUpdated)

                    res.status(200).json({message:"Sucessfulyy updated",contactToUpdated})
                    
                } catch (error) {
                    res.status(500).json({error})
                }


        })
        


        app.listen(port, () => {
            console.log(`Server is running successfully on port ${port}`);
            console.log("MongoDB connection established. Starting server...");
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
}

startServer();
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRocnV2QGdtYWlsLmNvbSIsImlkIjoiNjRlYjU1OGE1M2JiNDE3MjRjMDMyNjg5IiwiaWF0IjoxNjkzMTQ0NDU4fQ.gMtV3XVnONGlEc-UjZb53m00-RL59u382xOCj-59688