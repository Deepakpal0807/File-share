import { app } from './app.js'
import {connectodb} from './Database/db.js'

const port = 8000;
connectodb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// app.listen(process.env.PORT || 8000, () => {
  // console.log(`⚙️ Server is running at port : ${port}`);
// })

