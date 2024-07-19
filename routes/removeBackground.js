const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const { file } = req;
    const imgPath = path.resolve(file.path);
    const blob = await removeBackground(imgPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    const dataURL = `data:image/png;base64,${buffer.toString('base64')}`;

    // Clean up uploaded file
    fs.unlinkSync(imgPath);

    res.json({ dataURL });
  } catch (error) {
    console.error('Error removing background:', error);
    res.status(500).send('Error removing background');
  }
};
