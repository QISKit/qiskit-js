/**
 * @license
 *
 * Copyright (c) 2017-present, IBM Research.
 *
 * This source code is licensed under the Apache license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

// const util = require('util');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const jison = require('jison');

const dbg = utils.dbg(__filename);

// const QasmError = require('./QasmError');

// TODO: Do async?
const bnf = fs.readFileSync(path.resolve(__dirname, 'grammar.jison'), 'utf8');
let parser;

class Parser {
  constructor(opts = {}) {
    dbg('Starting', opts);
    parser = new jison.Parser(bnf);

    if (opts.core !== false) {
      // TODO: Parse all core libraries (when we have more)
      const qelib1 = fs.readFileSync(
        path.resolve(__dirname, '../core/qelib1.inc'),
        'utf8',
      );
      this.qelibParsed = parser.parse(qelib1);
    }
  }

  parse(circuit) {
    if (!circuit) {
      throw new Error('Required param: circuit');
    }

    let res;

    try {
      res = parser.parse(circuit, this.qelibParsed);
    } catch (err) {
      // TODO: Use our custom error
      // throw new QasmError('')
      throw err;
    }

    return res;
  }
}

module.exports = Parser;
