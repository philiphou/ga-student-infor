const Student = require ('../models/students')
const GPA = require ('../models/gpas');

module.exports={
   
 
    index,
    new:newStudent,
    create,
    show,
    deleteOne
};



function index(req,res){
    Student.find({},function(err,students){
        console.log(students);
        res.render('students/index',{students})
    })
}
function newStudent(req,res){
    res.render('students/new')
}
function create(req,res){
    
    const student = new Student(req.body);
    console.log('student:',student)
    let gpa = new GPA({python: 0, java: 0, c: 0, student: student._id});
    gpa.save();
    student.save(function(err){
   
        res.redirect('/students')
    });
}

function show(req, res) {
    Student.findById(req.params.id, function(err, student) {
        console.log(student._id)
        GPA.find({ student: student._id }, function(err, gpa) {
            console.log("gpa:" ,gpa)
            res.render('students/show', {student, gpa: gpa[gpa.length-1]})
        })
    })
};
function deleteOne(req,res){
    
    Student.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err)
        }else{
             console.log("Student Deleted")
        }
    })
    res.redirect("/students")
}