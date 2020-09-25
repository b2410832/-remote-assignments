const express = require('express');
const app = express();

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

//assignment-3
app.use(express.static('public'))

app.listen('3000');


// req.query.number -> 取得?number="value"的value
// Number() -> string to number
// Number.isInteger() -> 判斷是否為整數