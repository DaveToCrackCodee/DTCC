import connectionDb from "./db/dbConnection.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import cors from 'cors'; // Import the CORS middleware

const port = process.env.PORT || 5000;
dotenv.config({
    path: './.env'
});

connectionDb()
    .then(() => {
        // Apply CORS middleware to allow cross-origin requests
        app.use(cors());

        app.on("error", (error) => {
            console.log("ERROR:", error);
        });

        app.listen(port, () => {
            console.log(`Server is listening at PORT ${port}`);
        })
    })
    .catch((error) => {
        console.log("MONGODB connection Failed !!!", error);
    });





/*
const app=express();
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error",(error)=>{
        console.log("ERROR:",error);
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listning at port number ${process.env.PORT}`);
       })
    } catch (error) {
        console.log("ERROR:",error);
        throw error;
        
    }
})();
*/