const express = require('express');
const userRoutes = require('./devapi/api.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
 
app.use(express.static('public'));

app.use('/api', userRoutes);
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));