const app = require('./src/app')
const connectDB = require('./src/database/db-connect')

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`The server is running ${PORT}`);
    
})