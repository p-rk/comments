import express from 'express';
import bodyParser from 'body-parser';
import signupController from './src/controllers/signup'
import loginController from './src/controllers/login'
import commentsController from './src/controllers/Comments';
import authMiddleware from './src/middlewares/checkAuth';
import redis from './src/redis/config';

const { getComments } = commentsController();

const app = express();

app.set('redis', redis);

// parsing the request bodys
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/signup', signupController);
app.post('/login', loginController);
app.get('/comments', authMiddleware, getComments);


const port = 3002;

app.listen(
  port,
  () => console.log(`Comment-pro listening on port ${port}!`),
);


export default app;
