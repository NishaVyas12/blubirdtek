const express = require('express')
const cors = require('cors')
const contactRoute = require('./routes/contactRoute')

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/contact', contactRoute);

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})