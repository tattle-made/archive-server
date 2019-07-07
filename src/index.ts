import * as express from 'express';
import {Request, Response} from 'express';
import {PostController} from './controllers/PostController';
import {SearchController} from './controllers/SearchController';
import {LoginController} from './controllers/LoginController';

import LoginResponse from './models/response/LoginResponse';

const app = express();
const port = 8080;

app.use(express.json());

// import logger from './logger-core';
const postController = new PostController();
const searchController = new SearchController();
const loginController = new LoginController();

app.get('/', (req: Request, res: Response) => {
    res.send('pong');
});

app.get('/posts', (req: Request, res: Response) => {
    postController.getAll()
    .then((posts) => res.send(posts));
});

app.post('/posts', (req: Request, res: Response) => {
    const {type, data, filename, source} = req.body;
    postController.create(type, data, filename, source)
    .then((response: JSON) => res.send(response))
    .catch((err) => res.send(err.JSON));
});

app.get('/posts/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    postController.get(id)
    .then((post) => res.send(post));
});

app.get('/search', (req: Request, res: Response) => {
    res.send(searchController.search(req.query));
});

app.post('/auth/login', (req: Request, res: Response) => {
    const {username, password} = req.body;
    loginController.login(username, password)
    .then((response) => res.send((new LoginResponse(response).get())));
});

app.post('/auth/logout', (req: Request, res: Response) => {
    loginController.logout()
    .then((response) => res.send({msg: response}));
});


app.listen(port, () => {
    console.log('server is listening to ', port);
});
