const mongoose = require('mongoose')
const Author = mongoose.model('Author')
const Review = mongoose.model('Review')

module.exports = {
    index: (req,res) => {
        Author.find({},(err,authors) => {
            if(err) {
                res.json(err)
            } else {
                res.json(authors)
            }
        
        })
    },

    create: (req,res) => {
        Author.find({name: req.body.name}, (err,data) =>{
            if (data.length > 0){
                let error = {errors: { name: { message: 'Restaurant already exists'}}};
                res.json(error);
            } else {

                Author.create(req.body, (err,author) =>{
                    if(err){
                        res.json(err)
                    }else{
                        res.json(author)
                    }
                });
            }

        })


    },

    show: (req,res) => {
        Author.findOne({_id: req.params.id}, (err,author) => {
            if(err) {
                res.json(err)
            }else{
                res.json(author)
            }
        })
    },
    

    addReview:(req,res) =>{
        // create review, then push to array

        Review.create(req.body, (err,review) => {
            if(err){
                console.log("Review validations TRIGGERED!")
                res.json(err);
            }
            else{
                
                Author.findByIdAndUpdate( req.params.id , {$push: {reviews: {$each : [review], $sort: {stars:-1} }}}, {new:true}, (err,data)=>{
                    if(err){
                        console.log("Couldnt update restaurant");
                        res.json(err);
                    }
                    else{
                        console.log(data);
                        res.json(data);
                    }

            })

        }


    })

},

    edit:(req,res) => {

        Author.findById(req.params.id, (err,data) => {

            if(data.name == req.body.name){
              
                Author.findByIdAndUpdate(req.params.id, {$set: req.body} , {runValidators: true, new: true}, (err,data) =>{
                    if(err) {
                        res.json(err)
                    }else{
                        res.json(data)
                    }
                })
            } else {
                Author.find({name: req.body.name}, (err,data) =>{
                    
                    if (data.length > 0){
                        let error = {errors: { name: { message: 'Restaurant already exists'}}};
                        res.json(error);
                    } else {
        
                        Author.findByIdAndUpdate(req.params.id, {$set: req.body} , {runValidators: true, new: true}, (err,data) =>{
                            if(err) {
                                res.json(err)
                            }else{
                                res.json(data)
                            }
                        })
                    }

                })
            }

        })

    },

    delete: (req, res) =>{
        Author.findByIdAndDelete(req.params.id, (err)=>{
            if(err){
                res.json(err);
            } else{
                res.json({
                    result: 'success'
                });
            }
        })
    },
    
}



