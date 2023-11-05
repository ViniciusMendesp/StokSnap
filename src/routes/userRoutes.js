const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const router = express.Router();
const prisma = new PrismaClient();

const secretKey = crypto.randomBytes(32).toString("hex");
// Rota para autenticação (login)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Verifique as credenciais do usuário no banco de dados
  const user = await prisma.users.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  // Verifique se a senha está correta
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  // Se as credenciais estiverem corretas, crie um token JWT
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.json({ token });
});

// listar todos
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// buscar um user pelo id
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.users.findUnique({
      where: { id: Number(id) },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// criar um novo user
router.post("/users", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  try {
    const newUser = await prisma.users.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// atualizar um user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (updateData.password) {
    const saltRounds = 10;
    updateData.password = await bcrypt.hash(updateData.password, saltRounds);
  }

  try {
    const updatedUser = await prisma.users.update({
      where: { id: Number(id) },
      data: updateData,
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

// deletar um user
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.users.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

module.exports = router;
