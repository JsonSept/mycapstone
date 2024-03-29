import bcrypt from 'bcrypt'
// const bcrypt = require('bcrypt')
import express from 'express'
import cors from 'cors'
import swal from 'sweetalert'
import jwt from 'jsonwebtoken'
import mysql2 from 'mysql2'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import session from 'express-session'
config()



const app = express()
const PORT = process.env.PORT

const corsOptions = {
    origin: "mycapstone-27eaa.firebaseapp.com"
};

app.use(cors(corsOptions))

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(cookieParser())


app.get("/", (req,res) => {
    res.json({ msg: "Welcome to my aplication"});
});

const posts = [
{
username: 'Jason',
title: 'Post 1'
},
{
    username: 'Jim',
    title: 'Post 2'
    }
]
// app.get('/posts', (req,res)=> {
// res.json(posts.filter(post => post.username === req.user.name))
// }),

// app.post('/login', (req, res)=> {
// // Authenticate User

// const username = req.body.username
// const user = { name: username }

app.use('/products', productsRouter)
app.use('/users', usersRouter),


app.listen(PORT, ()  =>{
    console.log('http://localhost:'+ PORT);
})