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
    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
