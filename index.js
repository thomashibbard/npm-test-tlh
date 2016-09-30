#! /usr/bin/env node

exports.print = function(){
	var path = require('path');
	var chalk = require('chalk');
	console.log('test');
	console.log(chalk.red(path.join(__dirname, 'testDirectory')));
	console.log(chalk.green('__dirname: ', __dirname));
	console.log(chalk.blue('__filename: ', __filename));
}

exports.print();