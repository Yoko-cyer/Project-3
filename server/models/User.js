const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // valid email address match
        // match: [/.+@.+\..+/]
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
     },
    phonenumber: {
        type: String,
        // required: true,
    },
    introduction: 
        {
          type: String,
          trim: true,
        //   required: 'Leave your introduction please!',
          minlength: 1,
          maxlength: 280,
        },
//     wanttobabysit: {
//         type: Boolean,
//         // required: true,     
//     },
//     haslicense: {
//         type: Boolean,
//         // required: true,        
//     },
//     howmuchexperience: {
//         type: String,
//         // required: true,  
//     },
//     candolightduties: {
//         type: Boolean,
//         // required: true,
        
//     },
//     candopickupdropoff: {
//         type: Boolean,
//         // required: true,
        
//     },
//     covidvaccinated: {
//         type: Boolean,
//         // required: true,
//     },
//     availabledays:[
//     {
//         type: String,
//           trim: true,
//     },
// ],

//     comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    
}
);
   

// Initialize User model
const User = model('User', userSchema);

// Export user model
module.exports = User;