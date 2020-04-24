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
    name: 'Y',
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
router.get('/user/:id', ctx => {
  ctx.body = users[ctx.params.id];
});


//Second API
router.post('/user', ctx => {
  ctx.request.body;
  console.log("Post request working....");
});

//Third API
router.get('/user', ctx => {
  let name = ctx.query.name;
  users = users.filter(function (value) {
    return value = users.name;
  });

});

//Fourth API
router.get('/user', ctx => {
  let start = ctx.query.start;
  let end = ctx.query.end;
  users = users.filter(function (index) {
    return index = index >= start && index <= end;
  });
});


app
  .use(require('koa-body')())
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000, () => console.log('started.....'));

