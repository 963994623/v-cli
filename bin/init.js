/**
 * 项目clone
 */
let { promisify } = require("util")
const orag = require("ora");
const download = promisify(require("download-git-repo"));
const shell = require("shelljs")
const chalk = require("chalk");
//日志打印
const log = content => console.log(chalk.yellow(content))

module.exports = async (appName) => {
    log("🧵创建项目" + appName)
    shell.rm("-rf", appName)
    const spinner = orag("🧵下载中" + appName).start();
    try {
        await download("direct:https://github.com.cnpmjs.org/vuejs/vue.git", appName, { clone: true })
        spinner.succeed("下载完成")
        log(`
        下载完成,请执行下面命令启动项目:
        ==========================
        cd ${appName}
        npm run dev
        或者
        yarn dev

        `)
    } catch (e) {
        log("下载失败", e)
        spinner.stop()
    }
}