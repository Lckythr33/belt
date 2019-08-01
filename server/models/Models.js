const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is Required!"], minlength: [3, 'Name must be 3 character or more'] },
    review:  { type: String, required: [true,"Review is Required!"],  minlength: [3, 'Review must be 3 character or more'] },
    stars:  { type: Number, required: [true,"Stars are Required!"], max: [5,'Must be less than 5'], min:[1,'Must be more than 1'] },
});


const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is Required!"], minlength: [3, 'Name must be 3 character or more']  },
    cuisine:  { type: String, required: [true,"Cuisine is Required!"],  minlength: [3, 'Cuisine must be 3 character or more'] },
    reviews: [ReviewSchema]
},{timestamps : true}); 

mongoose.model('Author', AuthorSchema)
mongoose.model('Review', ReviewSchema)

