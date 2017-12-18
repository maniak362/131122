var express = require("express"), cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function(request, response)
{
    response.send("Hello!");
});

app.listen(591);