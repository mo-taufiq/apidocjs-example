const express = require('express');
const app = express();

// Routes
app.use('/api/v1/', require('./routers/general'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});