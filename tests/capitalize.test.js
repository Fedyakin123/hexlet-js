import capitalize from '../capitalize.js'

if (capitalize('hello') !== 'Hello') throw new Error('Test 1 wrong');
if (capitalize('') !== '') throw new Error('Test 2 wrong');