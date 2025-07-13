import { Hono } from 'hono'

const app = new Hono()

app.use('*',async (c,next)=>{
  console.log('inside global middleware');
  await next();
})

app.get('/', async (c) => {
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.json({
    message:"Hello from GET /"
  })
})


app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.json({
    message:"Hello from POST /"
  })
})



export default app
