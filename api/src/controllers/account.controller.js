const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "account.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Iternal Server Error" });
  }
};
const createAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "account.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const newAccount = { ...req.body, id: v4() };

    accounts.push(newAccount);
    console.log(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "account.json");
    const { id } = req.params;

    const rawData = fs.readFileSync(filePath);
    let accounts = JSON.parse(rawData);

    accounts = accounts.filter((account) => account.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// const fs = require("fs").promises;
// const path = require("path");

// const deleteAccount = async (req, res) => {
//   const { id } = req.params;

//   if (!id) {
//     return res.status(400).json({ error: "Account ID is required" });
//   }

//   const filePath = path.join(__dirname, "..", "data", "accounts.json");

//   try {
//     // Файлыг асинхрон унших
//     const rawData = await fs.readFile(filePath, "utf8");
//     let accounts = JSON.parse(rawData);

//     // Шинээр данснаас id-ийг устгах
//     const initialLength = accounts.length;
//     accounts = accounts.filter((account) => account.id !== id);

//     // Устгасан данс байвал хариулт илгээнэ
//     if (accounts.length === initialLength) {
//       return res.status(404).json({ error: "Account not found" });
//     }

//     // Шинэ өгөгдлийг файлын системд бичих
//     await fs.writeFile(filePath, JSON.stringify(accounts, null, 2), "utf8");

//     // Амжилттай хариу илгээх
//     res.status(204).end();
//   } catch (error) {
//     console.error("Error deleting account:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

module.exports = { getAllAccounts, createAccount, deleteAccount };
