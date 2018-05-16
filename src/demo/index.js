import reformat from 'reformat-number';
import foo from './foo';
import bar from './bar';

console.info('nodeEnv:', process.env.NODE_ENV);
console.info('VERSION:', VERSION);
console.info('PRODUCTION:', PRODUCTION);
console.info('DEBUG:', DEBUG);

if (DEBUG) {
    console.info('Debug message');
    console.info('Code fragment using DefinePlugin:', CODE_FRAGMENT);
}

if (PRODUCTION) {
    console.info('Production code', reformat('75900.56'));
} else {
    console.info('Development code');
}

console.info(reformat('1123581321'));

foo();
