import reformat from 'reformat-number';
import foo from './foo';
import bar from './bar';

console.info('nodeEnv', process.env.NODE_ENV);

if (PRODUCTION) {
    console.info('PRODUCTION:', PRODUCTION);
} else {
    console.info('DEVELOPMENT');
}

console.info(reformat('1123581321'));

foo();
