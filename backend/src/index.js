import express from 'express';

const app =express();

app.use("/api/auth" ,authRoutes)

app.listen(5001,()=>{
    console.log("the server is running on port 5001");
})