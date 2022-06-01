const { Command } = require('commander');
const program = new Command();
program.version = '0.0.1';
program.option("-n", "输出名称")    //node bin/demo-commander.js -n   结果为Boolean
program.option("-t <type>", "项目类型") //node bin/demo-commander.js -t pink  结果为pink
program.option("-s --save <type>", "项目类型")  //node bin/demo-commander.js -s pink 或者 --save pink 结果为pink

const options = program.opts();
console.log(options);


//执行语句为 目录 create 名字
program
    .command("create <app-name>")
    .description("创建一个标准的Vue项目")  //描述
    .action(name => { //行为
        console.log(`创建一个标准的Vue项目${name}`);
    })



program.parse(program.argv);
