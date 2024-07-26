import express from 'express'

const app = express();
app.use(express.json());

const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

 //routes


//DB
 const PORT = process.env.PORT || 4000

db.sync({ force: false })
    .then(()=>console.log("DB conected"))
    .catch((error) => console.log(error))

app.listen(PORT,  ()=> {
    console.log(`Server on ${PORT}`);
})