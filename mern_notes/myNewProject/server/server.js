const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                 /* This is new */

app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');    /* This is new */

//this is a shorthand notation of the code below
require('./routes/person.route')(app);   

/* 
- We're importing the routes export. 
- These two lines are the long-hand notation of the code above. They better show what's going on.
- const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
- personRoutes(app);     <-- invoke the function and pass in the express "app" server 
*/
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
