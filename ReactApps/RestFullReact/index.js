const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended:false}))
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id:uuid(),
        username: 'Ted',
        comment: 'lol you mad'
    },
    {
        id:uuid(),
        username: 'Ted2',
        comment: 'lol you mad'
    },
    {
        id:uuid(),
        username: 'Ted3',
        comment: 'lol you mad'
    },
    {
        id:uuid(),
        username: 'Ted4',
        comment: 'lol you mad'
    },
    {
        id:uuid(),
        username: 'Ted5',
        comment: 'lol you mad'
    }

]

app.get('/comments',(req,res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new',(req, res) => {
    res.render('comments/new');
})

app.post('comments',(req, res) => {
    const { username, comment } = req.body;
    comments.push({username,comment, id: uuid() })
    res.redirect('/comments');
})


app.get('/comments/:id',(req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos',(req, res) =>{
    const {meat, qty} = req.body;
    res.send('OK bro here are your ${meat} ${qty} taco meal')
})

app.listen(3000, () => {
    console.log("ON PORT 3000 !")
})