import prisma from "../config/database.js";

// Testa a conexão com o banco de dados usando Prisma
export async function testarConexao() {
    try {
      await prisma.$connect();
      console.log("✅ Prisma conectado ao banco de dados!");
    } catch (error) {
      console.error("❌ Erro ao conectar com o banco de dados:", error);
    }
}
  
export default testarConexao();