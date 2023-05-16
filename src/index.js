const app = require("./server");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
