const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1/notes-app';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error('Database connection error:', err));