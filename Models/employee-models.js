const mongoose = require('mongose');

const Employee = new mongoose.Schema(

    firstName : String,
    lastName  : { type: String, required },
    email: String,
    age: Number,

},

{ timeStamps: true }
)

