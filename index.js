const fs = require("fs");
const contract = JSON.parse(fs.readFileSync("./build/contracts/Archivers.json", "utf8"));
console.log(JSON.stringify(contract.abi));
