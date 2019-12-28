var express = require("express");
var exphbs = require("express-handlebars");
var PORT = 3030;
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars",
    exphbs({
        defaultLayout:"main",
        layoutsDir: __dirname + "/views/layouts/",
        partialsDir:__dirname + "/views/partials/"
    }));
app.set("view engine",handlebars);



app.listen(PORT,() => {
    console.log(`App listening on PORT ${PORT}`);
})