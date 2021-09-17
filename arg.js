const [, , arg = 'base=8'] = process.argv;

const [, base] = arg.split('=');


console.log(base);