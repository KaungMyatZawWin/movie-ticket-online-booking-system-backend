import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images");
  },
  filename: (req, file, callback) => {
    callback(null, file.filename);
  },
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now());
//   }
// });

export default storage;
