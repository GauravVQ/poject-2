const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new koa();
const router = new Router();

app.use(bodyParser());

let users = [
  {
    name: 'Gaurav',
    email: 'gaurav@gmail.com',
  },
  {
    name: 'Kartik',
    email: 'kartik@gmail.com',
  },

  {
    name: 'X',
    email: 'X@gmail.com',
  },
  {
    name: 'X',
    email: 'Y@gmail.com',
  },
  {
    name: 'Z',
    email: 'Z@gmail.com',
  },
  {
    name: 'A',
    email: 'A@gmail.com',
  },
  {
    name: 'B',
    email: 'B@gmail.com',
  },
  {
    name: 'D',
    email: 'D@gmail.com',
  },
  {
    name: 'F',
    email: 'F@gmail.com',
  },
  {
    name: 'G',
    email: 'G@gmail.com',
  },
  {
    name: 'H',
    email: 'H@gmail.com',
  },
  {
    name: 'I',
    email: 'I@gmail.com',
  },
  {
    name: 'J',
    email: 'J@gmail.com',
  },
  {
    name: 'K',
    email: 'K@gmail.com',
  },
  {
    name: 'L',
    email: 'L@gmail.com',
  },
  {
    name: 'M',
    email: 'M@gmail.com',
  },
  {
    name: 'N',
    email: 'N@gmail.com',
  },
  {
    name: 'O',
    email: 'O@gmail.com',
  },
  {
    name: 'P',
    email: 'P@gmail.com',
  },
  {
    name: 'R',
    email: 'R@gmail.com',
  },
  {
    name: 'S',
    email: 'S@gmail.com',
  },

];
//FIRST API
router.get('/users', ctx => {
  ctx.status = 200;
  ctx.body = users;
});


//Second API
router.post('/users', ctx => {
  let a = ctx.request.body;
  console.log("Post request working....");
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
  ctx.status = 201
});

//Third API
router.get('/user/:name', ctx => {
  let name = ctx.params.name;
  let requiredUser = users.find(x => x.name === name);
  if (!requiredUser) {
    ctx.status = 404;
  } else {
    ctx.body = requiredUser;
    ctx.status = 200;
  }
});

//Fourth API
router.get('/filteredUsers', ctx => {
  let start = ctx.query.start;
  let end = ctx.query.end;
  if (start > end) {
    return ctx.status = 400;
  }
  let filteredUsers = users.filter((x, i) => i >= (start - 1) && i <= (end - 1));
  ctx.body = filteredUsers;
  ctx.status = 200;
});


app
  .use(require('koa-body')())
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000, () => console.log('started.....'));

