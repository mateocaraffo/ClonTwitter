const express = require('express');
const path = require('path');
const app = express();
const BP = require('body-parser');
const nunjucks = require('nunjucks');
const morgan = require('morgan')
const routes = require('./routes');
app.use('/', routes);
app.use("/", express.static(path.join(__dirname,"/public")));
app.use(BP.json())
app.use(morgan('tiny'))
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', function (err, output) {
    
});
var port = 3000; 
app.listen(port, function(){
    console.log(port)
})

