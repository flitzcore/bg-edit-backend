const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { removeBackground } = require('@imgly/background-removal-node');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const upload = multer({ dest: 'uploads/' });

app.post('/remove-background', upload.single('image'), async (req, res) => {
  // try {
  //   const { file } = req;
  //   const imgPath = path.resolve(file.path);
  //   const blob = await removeBackground(imgPath);
  //   const buffer = Buffer.from(await blob.arrayBuffer());
  //   const dataURL = `data:image/png;base64,${buffer.toString('base64')}`;

  //   // Clean up uploaded file
  //   fs.unlinkSync(imgPath);

  //   res.json({ dataURL });
  // } catch (error) {
  //   console.error('Error removing background:', error);
  //   res.status(500).send('Error removing background');
  // }
  res.status(200).send('tes');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
