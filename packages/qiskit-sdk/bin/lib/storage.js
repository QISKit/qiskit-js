/**
 * @license
 *
 * Copyright (c) 2017-present, IBM Research.
 *
 * This source code is licensed under the Apache license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const path = require('path');

const storage = require('node-persist');
const homeOrTmp = require('home-or-tmp');

const logger = require('./logger');

try {
  storage.initSync({ dir: path.resolve(homeOrTmp, '.qiskit') });
} catch (err) {
  logger.error('Starting the persistent storage', err);
  process.exit(1);
}

module.exports = storage;
