import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import rootRouter from "./routes/index.js";
import sequelize from "./db/dbconnection.js";
import ApiRoute from "./constants/routeConstant.js";
import storage from "./services/fileStorage.service.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(images, "public"));

app.use(ApiRoute.VERSION_1_BASE_ROUTE, rootRouter);
app.use(ApiRoute.UNIVERSAL_ROUTE, (req, res) => {
  res.status(400),
    json({ status: "Not Found!", message: "Your request route not found." });
});

//photo upload
// app.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     const newMovie = await Movie.create({
//       title: req.body.title,
//       description: req.body.description,
//       image: fs.readFileSync(
//         path.join(__dirname + "/uploads/" + req.file.filename)
//       ),
//       imageType: req.file.mimetype,
//     });
//     res.status(200).send(newMovie);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({alter:true});
    await sequelize.sync();
    console.log("🚀 - Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server start listen on port ${port}`);
});
