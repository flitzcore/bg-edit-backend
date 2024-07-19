const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 5000;

const removeBackgroundRoute = require('../routes/removeBackground');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/remove-background', upload.single('image'), removeBackgroundRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
