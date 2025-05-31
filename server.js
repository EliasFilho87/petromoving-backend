const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const clientRoutes = require('./routes/clientroutes');
const app = express();

app.use(cors());
app.use(express.json());

// Conecta no banco
mongoose.connect(process.env.MONGO_URI,
   {
  }).then(() => console.log("✅ MongoDB conectado!"))
  .catch(err => console.log("❌ Erro MongoDB:", err));

// Rotas
app.use('/api/clients', clientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
