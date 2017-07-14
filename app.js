var express = require('express');
var app = express();

//var cookieParser = require('cookie-parser');
//app.use(cookieParser());


// This is the location dir for our style
// This could also look like this  'app.use('/styles', express.static(__dirname + '/public')); '
// Should there be more than a stylesheet files in the folder
// then in this case, you should put this in header.ejs ---
// --- <link rel="stylesheet" href="/styles/style.css" /> ----
// clear now I guess ! 
app.use(express.static(__dirname + '/public')); 
app.set('view engine','ejs')

// Handling request on / route
app.get('/', function(req, res){
   res.render("pages/index", { Info : [{
   									   	
                                      	Name: "Mikko",
                                       	Age: "30",
                                       	Profession: "Software Designer"
                                       },
                                       {
   									   	
                                      	Name: "Jenni",
                                       	Age: "25",
                                       	Profession: "Software Designer"
                                       },
                                       {
   									   	
                                      	Name: "Jenni",
                                       	Age: "25",
                                       	Profession: "Software Designer"
                                       },
                                       {
   									   	
                                      	Name: "Jukka",
                                       	Age: "28",
                                       	Profession: "Software Designer"
                                       }]
                            });

});

app.listen(3000); // Routing on port 3000
