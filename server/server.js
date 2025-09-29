        const express = require('express');
        const app = express();
        const bodyParser = require('body-parser');
        const cors = require('cors');

        const PORT = process.env.PORT || 3000;


        app.get('/', (req, res) => {
          res.send('<h1>Hello from Express!</h1>');
        });

        app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
        });