import express from "express";
import morgan from "morgan";
const port = 3000;
const app = express();

app.use(
  morgan("combined", {
    skip: (req, res) => {
      return res.statusCode < 400;
    },
  })
);
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
