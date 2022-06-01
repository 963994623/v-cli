/**
 * 开发后台脚手架 快速生成标准Vue后台架构
 * @author Duxi
 */
const { program } = require('commander');
const { promisify } = require("util")
const asyncFiglet = promisify(require('figlet'));
const chalk = require('chalk');
let inquirer = require("inquirer");
let init = require("./init")

//设置版本和参数
program.version = "0.0.1"
program.option("-n --name <type>", "output name");

program
    .command("create <app-name>")
    .description("创建Vue后台项目")
    .action(async name => {
        console.log(name);
        await printLogo()
        log("准备创建项目....")
        let answer = await inquirer.prompt([
            {
                name: "language",
                type: "list",
                message: "请选择项目语言",
                choices: ["Javascript", "Typescript"]
            }
        ])
        if (answer.language === "Javascript") {
            log("正在创建Javascript项目....")
            init(name)
        } else {
            log("正在创建Typescript项目....")
        }
    })

//参数解析
program.parse(process.argv);



//打印Logo
async function printLogo() {
    let data = await asyncFiglet('Duxi')
    log(data)
}
//打印函数
const log = content => console.log(chalk.yellow(content));


