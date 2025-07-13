import cookieParser from "cookie-parser";
import express from "express"
const app= express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.get("/",(req,res)=>{
  res.send("Hello from /get")
})



app.listen(3000,()=>{
  console.log('server is listening on port 3000')
})