const AuthorsCtrl = require('./../controllers/AuthorsCtrl.js')

module.exports = (app) => {
    app.get('/api/restaurants', AuthorsCtrl.index)
    app.get('/api/restaurants/:id', AuthorsCtrl.show)
    app.post('/api/restaurants', AuthorsCtrl.create)
    app.put('/api/restaurants/:id', AuthorsCtrl.edit)
    app.post('/api/restaurants/:id', AuthorsCtrl.addReview)
    app.delete('/api/restaurants/:id', AuthorsCtrl.delete);
    
}