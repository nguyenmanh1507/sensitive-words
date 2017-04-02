'use strict';

var _ = require('.');

test('replace blacklisted words with asterisks', function () {
  return expect((0, _.sensitiveWords)('The name of the NX will be the Nintendo Switch', ['switch'])).toBe('The name of the NX will be the Nintendo xxxx');
});

test('replace blacklisted words with asterisks', function () {
  return expect((0, _.sensitiveWords)('The name of the NX will be the Nintendo Switch. The switch will be awesome', ['switch'])).toBe('The name of the NX will be the Nintendo xxxx. The xxxx will be awesome');
});

test('replace multiple instances words with asterisks', function () {
  return expect((0, _.sensitiveWords)('The name of the NX will be the Nintendo Switch', ['switch', 'will'])).toBe('The name of the NX xxxx be the Nintendo xxxx');
});