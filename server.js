const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");
const express = require("express");

const app = express();

// Configurar CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
