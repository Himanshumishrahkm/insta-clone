const ImageKit = require('@imagekit/nodejs');

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
});

async function uploadbuffer(buffer) {
    

    const response = await client.files.upload({
        fileName: 'image.jpg',
        file: buffer.toString("base64"),
    });

    return response;

}
module.exports = uploadbuffer;