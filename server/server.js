import express from 'express';
import categoriesRouter from './routes/categories.js';
import itemsRouter from './routes/items.js';
import usersRouter from './routes/users.js';
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use('/categories', categoriesRouter)
app.use('/items', itemsRouter)
app.use('/users', usersRouter)

app.listen(3000);
