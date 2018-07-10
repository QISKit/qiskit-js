# Qiskit.js

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.org/Qiskit/qiskit-js.svg?branch=master)](https://travis-ci.org/Qiskit/qiskit-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

:atom_symbol: [Quantum Information Science Kit](https://developer.ibm.com/open/openprojects/qiskit) for JavaScript. :bulb: This project born as a clone (in JS) of [its big brother](https://github.com/Qiskit/qiskit-sdk-py).

**beta**: Until v1 breaking changes could be included.

## Philosophy

:orange_book: The basic concept of our quantum program is an array of quantum circuits. The program workflow consists of three stages: Build, Compile, and Run. Build allows you to make different quantum circuits that represent the problem you are solving. Compile allows you to rewrite them to run on different backends (simulators/real chips of different quantum volumes, sizes, fidelity, etc); and Run launches the jobs. After the jobs have been run, the data is collected. There are methods for putting this data together, depending on the program. This either gives you the answer you wanted or allows you to make a better program for the next instance.

If you want to learn more about Quantum Computing, you're invited to visit our [Quamtum Experience](https://quantumexperience.ng.bluemix.net) project.

## Structure

:handbag: The components of this repository are exposed as these libraries:

* @qiskit/sdk: Meta-package, documented in this file. It also includes a command line client, which is your friend if you want to play with some OpenQASM circuits (in the Quantum Experience or the local simulator) without having to use any other programming language.
* [@qiskit/qasm](./packages/qiskit-qasm): [OpenQASM](https://github.com/IBM/qiskit-openqasm) stuff, including the parser.
* [@qiskit/cloud](./packages/qiskit-cloud): To send circuits to the Quantum Experience.
* [@qiskit/sim](./packages/qiskit-sim): Local simulator for OpenQASM circuits.
* [@qiskit/utils](./packages/qiskit-utils): Helpers shared among all packages.
* [@qiskit/devs](./packages/qiskit-devs): High level algorithms for easy use. Designed for developers (vs. researchers).

### Qiskit for the browser

You can find a bundled version with the same stuff ready to be used in the browser in the [dist](./dist) folder.

## Install

:coffee: Install last [Node.js](https://nodejs.org/download) stable version (or LTS) and then:

```sh
npm i -g @qiskit/sdk
```

## Use

### CLI

:rocket: The command line client allows to play with the circuits without having to use any programming language API.

```sh
qiskitjs --help
```

### Programatically

:pencil: As you can see in the next section, we have to use it like in the rest of independent modules. The only difference is we need to select the proper field of the main object before.

```js
const qiskit = require('@qiskit/sdk');

console.log('Simulator version');
console.log(qiskit.sim.version);
```

## API

:eyes: Full specification.

### `version`

The actual version of the library.

* `version` (string) - Version number.

### `qasm`

A wrapper fot the [`qiskit-qasm`](./packages/qiskit-qasm) project.

* `qasm` (object) - The same object provided in the original library.

### `sim`

A wrapper fot the [`qiskit-sim`](./packages/qiskit-sim) project.

* `sim` (object) - The same object provided in the original library.

### `Cloud`

A wrapper fot the [`qiskit-cloud`](./packages/qiskit-cloud) project.

* `Cloud` (object) - The same constructor provided in the original library.

### `utils`

A wrapper fot the [`qiskit-utils`](./packages/qiskit-utils) project.

* `utils` (object) - The same object provided in the original library.

### `devs`

A wrapper fot the [`qiskit-devs`](./packages/qiskit-devs) project.

* `devs` (object) - The same object provided in the original library.

## Authors

:alien: https://github.com/Qiskit/qiskit-js/graphs/contributors

Original code (Python) authors [here](https://github.com/Qiskit/qiskit-sdk-py#authors-alphabetical).

## Other Qiskit projects

:school_satchel:

* [Python Qiskit](https://github.com/Qiskit/qiskit-sdk-py.git>)
* [ibmqx backend information](https://github.com/Qiskit/ibmqx-backend-information): Information about the different IBM Q experience backends.
* [ibmqx user guide](https://github.com/Qiskit/ibmqx-user-guides): The users guides for the IBM Q experience.
* [OpenQasm](https://github.com/Qiskit/openqasm): Examples and tools for the OpenQASM intermediate representation.
* [Python API](https://github.com/Qiskit/qiskit-api-py): API Client to use IBM Q experience in Python.
* [Tutorials](https://github.com/Qiskit/qiskit-tutorial): Jupyter notebooks for using Qiskit.

## License

:penguin: Qiskit is released under the [Apache license, v2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Do you want to help?

:sunglasses: If you'd like to help please take a look to our [contribution guidelines](./CONTRIBUTING.md).
