const express = require('express');
const app = express();

app.use(express.json());

//app.get();
//app.post();
//app.put();
//app.delete();

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

//The app.get replaces the if blocks that are in app.js



const courses = [
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"}
]

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("This course was not found");
    }else{
        res.send(course);
    }
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
})

//PORT

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//USe this to connect to a different port in powershell: $env:PORT=5000

//Nodemon makes it so that our web server keeps updating.