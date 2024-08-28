import express from 'express'


const app = express();

//create ainstance of that express as a server

const port = 3000 || 5000;

app.use(express.json()) 

app.get("/test/companies/:companyname/categories/:categoryname/products",)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})