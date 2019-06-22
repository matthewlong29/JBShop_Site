const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `VUE_APP_GOOGLE_API_KEY=${process.env.VUE_APP_GOOGLE_API_KEY}\n`
);
