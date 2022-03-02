import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.json({
  "Commands:": "Polecenia:",
  "Options:": "Opcje:",
  "Examples:": "Przykłady:",
  "boolean": "boolean",
  "count": "ilość",
  "string": "ciąg znaków",
  "number": "liczba",
  "array": "tablica",
  "required": "wymagany",
  "default": "domyślny",
  "default:": "domyślny:",
  "choices:": "dostępne:",
  "aliases:": "aliasy:",
  "generated-value": "wygenerowana-wartość"
}
))
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});