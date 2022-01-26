const Student = require('../models/students');
const GPA = require('../models/gpas');

module.exports = {
        new:newGPA,
        create
}
function newGPA(req, res) {
    const studentID = req.params.id
    res.render('gpas/new', { studentID })
}

function create(req, res) {
    console.log("create")
    Student.findById(req.params.id, function(err, student) {
       
        req.body.student = req.params.id
        console.log(req.body)
        const gpa = new GPA(req.body);
        gpa.save(function(err) {
            if (err) return res.redirect(`/students/${req.params.id}/gpas/new`);
            res.redirect(`/students/${ req.params.id }`)
        })
    })
}

