const mongoose = require('mongoose');
const uri = "mongodb+srv://vigneshk:cloudatlas@cluster0.ca6v9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;