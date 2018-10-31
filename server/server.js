
var express      = require('express');
var mongoose     = require('mongoose');
var bodyParser   = require('body-parser');
var app          = express();

// app config
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = process.env.PORT || 3000;

// mongoose config
mongoose.set('debug', true);
mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/contacts_db';
mongoose.connect(MONGODB_URI);
var contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    mobileNumber: {type: String, required: true},
    message: {type: String, required: true},
    created: {type: Date, default: Date.now}
});
var Contact = mongoose.model("Contact", contactSchema);

// restful routes ;; post => /api/contacts
app.post('/api/contacts', function(req, res){
    Contact.create(req.body)
        .then(function(newContact){
            res.json(newContact);
        })
        .catch(function(err){
            res.send(err);
        });
});

// server
app.listen(port, function () {
    console.log("Server is started");
});