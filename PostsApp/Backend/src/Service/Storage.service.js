const ImageKit = require("@imagekit/nodejs");

const imageKit  = new ImageKit({
  privateKey: "private_k6V0ShtkM8VQxPl2c+dSrQxV2ec=",
});

async  function uploadFile(buffer){
  const response = await imageKit.files.upload({
  file: buffer.toString("base64"),
  fileName: "image.jpg"
});
return response;
}

module.exports = uploadFile;