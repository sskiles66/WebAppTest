const express = require('express');
const app = express();
const port = 3000;
let name = "";
let courses = [];

let course = '';


//Had to install body-parser
const bodyParser = require('body-parser');


//Had to install ejs
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('test', {title: "Login System"})
});



app.post('/', (req, res) => {
    name = req.body.userName;
    //password = req.body.password;
    //console.log(password);

    res.redirect('/user');
   });

app.get('/user', (req, res) => {
  
  res.render('user', {title: name, course: course, courses: courses});
  
  });

app.post('/user', (req, res) => {
    course = req.body.courseName;
    console.log(course);
    if (course == ""){
      return;
    }else{
      courses.push(course);
     
    }

app.get('/add', (req, res) => {
  
  res.render('add');
      
  });
    
    
    //document.querySelector("#list").innerHTML = courses;

    res.render('user', {title: name, course: course, courses: courses});

    
   });

/*app.post('/user', (req, res) => {
    course = req.body.courseNameDelete;
    console.log(course);

    
    if (courses.includes(course)){
      console.log("coursew nt found");
      return;
    }else{
      console.log("course found");
      let index = courses.findIndex(course);
      courses.splice(index,1);
    }
    
    res.send(course);

    
    
    //document.querySelector("#list").innerHTML = courses;

    //res.render('user', {title: name, course: course, courses: courses});

    
   });
   */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
