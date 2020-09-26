const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// assignment-1
app.get('/', (req, res) => {
    res.send('Hello, My Server! :)');
});

// assignment-2
function sum(num) {
    let sum = 0;
    for(let i=1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

app.get('/getData', (req, res) => {
    const queryParams = req.query.number;
    const number = Number(queryParams);
    const isInt = Number.isInteger(number);
    if(queryParams) {
        if(isInt && number > 0) {
            const answer = sum(number);
            return res.send(`${answer}`);
        } else {
            return res.send('Wrong Parameter');
        }
    } else {
        return res.send('Lack of Parameter');
    }
});

// assignment-3
app.use(express.static('public'))


// assignment-4
app.set('view engine', 'pug');

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if(name) {
        res.render('index', { name });
    } else {
        res.render('login');
    }
});

app.get('/trackName', (req, res) => {
    res.cookie('name', req.query.name);
    res.redirect('/myName');
});

app.get('/clearName', (req, res) => {
    res.clearCookie('name');
    res.redirect('/myName');
});


app.listen('3000');