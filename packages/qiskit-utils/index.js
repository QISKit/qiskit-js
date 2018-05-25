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

const utils = require('lodash');
const debug = require('debug');
const ayb = require('all-your-base');

const { version } = require('./package.json');

function pathToTag(fullPath) {
  const res = path.basename(fullPath, '.js');

  if (!res || res === fullPath) {
    throw new Error('Not valid path');
  } else {
    return res;
  }
}

// Exposed stuff.
utils.version = version;
utils.pathToTag = pathToTag;
utils.debug = debug;
utils.ayb = ayb;

module.exports = utils;
