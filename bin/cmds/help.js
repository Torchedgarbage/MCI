const path = require('path');
const fs = require('fs');
const clear = require("clear")
const ascii = require("figlet")
const chalk = require("chalk")

let commandArr = [];
let commandList = fs.readdirSync(__dirname);
exports.run = (args) => {
    for (let i = 0; i < commandList.length; i++) {
        commandArr.push(`mci ${path.basename(`${__dirname}/${commandList[i]}`, `.js`)}`);
    }
    clear()
    console.log(
        chalk.blue(
            ascii.textSync('MCI', { horizontalLayout: 'full' })
        )
    )
    console.log("A memey and dumb CLI.")
    console.log("\nCommand List:")
    console.log(`${"-".repeat(30)}`)
    console.log(commandArr.join("\n"))
    console.log(`${"-".repeat(30)}`)
}