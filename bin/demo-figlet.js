let { promisify } = require("util"); //将一个对象包装成一个promise对象 util为自带的
let asyncFiglet = promisify(require('figlet'))


async function run() {
    let data = await asyncFiglet('Vue 3');
    console.log(data);
}
run()

