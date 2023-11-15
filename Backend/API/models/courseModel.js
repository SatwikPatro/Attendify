const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true,
        unique: false,
    },
    course_id: {
        type: Number,
        required: true,
    },
    instructor_ids: [Numbers],
    timePeriods:{
        sections: [{
            days: [Strings],
            startTime: {
                type: String,
                required: true,
                unique: false, 
            },
            endTime: {
                type: String,
                required: true,
                unique: false, 
            },
        }],
    },
    checkInHistory:{
        checkIns: [{
            student_id: {
            type: Number,
            required: true,
            unique: true, 
            },
            attendance: [{
                date: {
                    type: Number,
                    required: true,
                    unique: false,
                },
                checkIn: {
                    type: Boolean,
                    required: true,
                    unique: false,
                }
            }]
        }]
    }
})

module.exports = mongoose.model.course || mongoose.model("Course", courseSchemaSchema);