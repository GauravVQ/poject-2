const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

let users = [
     {
          name:'Gaurav',
          email:'gaurav@gmail.com',
     },
     {
         name:'Kartik',
         email:'kartik@gmail.com',


           }];

router.get('/user/:id', ctx =>{
      ctx.body =users[ctx.params.id];
});

router.post('/user/:id', ctx =>{
    ctx.body =Object.assign(users[ctx.params.id],ctx.request.body);
});


//app.use(async ctx =>(ctx.body = 'Hii'));
app.use(require('koa-body')());
app.use(router.routes()).use(router.allowedMethods());



app.listen(3000, () =>console.log('started.....'));

