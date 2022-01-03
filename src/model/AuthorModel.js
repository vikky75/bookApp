const mongoose = require('mongoose');
const uri = "mongodb+srv://vigneshk:cloudatlas@cluster0.ca6v9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;