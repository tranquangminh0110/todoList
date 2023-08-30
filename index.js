import Express from 'express';
import bodyParser from 'body-parser';

const app = Express();
const port = 3000;
var todoListDayTask = [];
var todoListWorkTask = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static('public'));

app.get('/', (req, res) => {
    const data = {
        amountTodoDayList: todoListDayTask.length,
        amountTodoWorkList: todoListWorkTask.length,
        listDayTodo: todoListDayTask,
        listWorkTodo: todoListWorkTask,
    };
    res.render('index.ejs', data);
});

app.post('/submit', (req, res) => {
    var stringDayContent = req.body['todoDayString'];
    if (stringDayContent === '') {
    } else {
        todoListDayTask.push(stringDayContent);
    }
    res.redirect('/'); // Change '/' to your desired route
});

app.post('/submit2', (req, res) => {
    var stringWorkContent = req.body['todoWorkString'];
    if (stringWorkContent === '') {
    } else {
        todoListWorkTask.push(stringWorkContent);
    }
    res.redirect('/'); // Change '/' to your desired route
});

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});

