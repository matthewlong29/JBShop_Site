const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `googleMapsAPIKey=${process.env.googleMapsAPIKey}\n`
);
