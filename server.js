//create express server
//require the 'express' library
const express = require("express")
//create actual server
//by calling express as a function we create an application which allows us to set up our server
const app = express()
//then to make our application run
//git, post, put, delete, or patch
app.get('/', (req, res, next))