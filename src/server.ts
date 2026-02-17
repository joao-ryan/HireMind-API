import { app } from "./app";
import { connectDB } from "./config/database";
import "./modules/submissions/evaluation.worker";


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server rodando na porta ${PORT}`);
  });
};

startServer();
