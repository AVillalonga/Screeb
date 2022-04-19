// .▄▄ ·  ▄▄· ▄▄▄  ▄▄▄ .▄▄▄ .▄▄▄▄·
// ▐█ ▀. ▐█ ▌▪▀▄ █·▀▄.▀·▀▄.▀·▐█ ▀█▪
// ▄▀▀▀█▄██ ▄▄▐▀▀▄ ▐▀▀▪▄▐▀▀▪▄▐█▀▀█▄
// ▐█▄▪▐█▐███▌▐█•█▌▐█▄▄▌▐█▄▄▌██▄▪▐█
//  ▀▀▀▀ ·▀▀▀ .▀  ▀ ▀▀▀  ▀▀▀ ·▀▀▀▀

const { config } = require("dotenv");
const fs = require("fs");
const path = require("path");

/**
 * Load environment variables
 */
function loadSettings() {
  const result = config();
  if (result.error) throw result.error;
}

/**
 * Move webpack in game folder !
 */
function migrate() {
  console.log(`\n  🚀  Start migration\n`);
  loadSettings();

  fs.rename(
    process.env.BUNDLE_SOURCE,
    path.join(process.env.BUNDLE_TARGET, "main.js"),
    function (err) {
      if (err) throw err;
      else console.log(`  🌙  Migration complete !\n\n\n\n\n`);
    }
  );
}

migrate();
