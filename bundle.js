/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/functions/formfunctions.js":
/*!***************************************!*\
  !*** ./js/functions/formfunctions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.makeFormCreate = makeFormCreate;\n\nfunction makeFormCreate() {\n  var txtCriar = {\n    'txth2': 'Cadastro Funcionário',\n    'txtP': 'Ao cadastrar o funcionário bote todas as características obrigatórias abaixo, caso alguma esteja faltando, o funcionário nãpoderá ser cadastrado.',\n    'txtLbl1': 'Insira o nome do funcionário:',\n    'txtlbl2': 'Insira o cargo do funcionário:',\n    'txtlbl3': 'Descreva o cargo do funcionário:',\n    'txtBTN': 'Cadastrar funcionário'\n  };\n  var secoes = document.querySelectorAll('section.main-sections');\n  var secaoEl = secoes[0];\n  var formEl = document.createElement('form');\n  formEl.setAttribute('class', 'form-section');\n  formEl.setAttribute('method', 'post');\n  var h2El = document.createElement('h2');\n  h2El.appendChild(document.createTextNode(txtCriar.txth2));\n  var pEl = document.createElement('p');\n  pEl.appendChild(document.createTextNode(txtCriar.txtP));\n  var label1 = document.createElement('label');\n  label1.setAttribute('class', 'first-label');\n  label1.setAttribute('for', 'input-nm-funcioario');\n  label1.appendChild(document.createTextNode(txtCriar.txtLbl1));\n  var input1 = document.createElement('input');\n  input1.setAttribute('id', 'input-nm-funcioario');\n  input1.setAttribute('class', 'inputs');\n  input1.setAttribute('type', 'text');\n  input1.setAttribute('name', 'nome-funcionario');\n  input1.setAttribute('minlength', '3');\n  input1.required = true;\n  input1.setAttribute('placeholder', ' Digite seu nome');\n  var label2 = document.createElement('label');\n  label2.setAttribute('for', 'input-cargo-funcionario');\n  label2.appendChild(document.createTextNode(txtCriar.txtlbl2));\n  var input2 = document.createElement('input');\n  input2.setAttribute('id', 'input-cargo-funcionario');\n  input2.setAttribute('class', 'inputs');\n  input2.setAttribute('type', 'text');\n  input2.setAttribute('name', 'cargo-funcionario');\n  input2.setAttribute('minlength', '5');\n  input2.required = true;\n  input2.setAttribute('placeholder', ' Digite seu cargo na empresa');\n  var label3 = document.createElement('label');\n  label3.setAttribute('for', 'txtArea-descricao-cargo');\n  label3.appendChild(document.createTextNode(txtCriar.txtlbl3));\n  var textArea = document.createElement('textarea');\n  textArea.setAttribute('id', 'txtArea-descricao-cargo');\n  textArea.setAttribute('class', 'inputs');\n  textArea.setAttribute('name', 'descri-funcionario');\n  textArea.setAttribute('rows', '4');\n  textArea.setAttribute('minlength', '10');\n  textArea.required = true;\n  textArea.setAttribute('placeholder', ' Descreva a função do seu cargo na empresa');\n  var btnEl = document.createElement('button');\n  btnEl.setAttribute('id', 'btn-cadastrar');\n  btnEl.setAttribute('type', 'button');\n  btnEl.appendChild(document.createTextNode(txtCriar.txtBTN));\n  formEl.appendChild(h2El);\n  formEl.appendChild(pEl);\n  formEl.appendChild(label1);\n  formEl.appendChild(input1);\n  formEl.appendChild(label2);\n  formEl.appendChild(input2);\n  formEl.appendChild(label3);\n  formEl.appendChild(textArea);\n  formEl.appendChild(btnEl);\n  secaoEl.appendChild(formEl);\n  console.log(formEl);\n}\n\n//# sourceURL=webpack:///./js/functions/formfunctions.js?");

/***/ }),

/***/ "./js/functions/functions.js":
/*!***********************************!*\
  !*** ./js/functions/functions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.makeList = makeList;\nexports.makeNewEmploye = makeNewEmploye;\nexports.makeId = makeId;\nexports.addNewEmploye = addNewEmploye;\nexports.deleteEmploye = deleteEmploye;\n\n/*\r\n\r\n    These basically are the main functions of the code, they control \r\n    the main proccesses. This function list will be imported to \r\n    main.js, I'll try to write them shorter as possible.\r\n\r\n*/\nfunction makeList() {\n  var lista = [];\n  return lista;\n}\n\nfunction makeNewEmploye(nm, job, txt, id_gerado) {\n  return {\n    id: id_gerado,\n    nome: nm,\n    cargo: job,\n    txt: txt\n  };\n}\n\nfunction makeId() {\n  return 'A' + Math.random().toString(36).substr(2, 9);\n}\n\nfunction addNewEmploye(list, employe) {\n  list.push(employe);\n  return list;\n}\n\nfunction deleteEmploye(list, id) {\n  list.forEach(function (x, index) {\n    if (x === list.find(function (person) {\n      return person.id === id;\n    })) {\n      list.splice(index, 1);\n    }\n  });\n  return list;\n}\n\n//# sourceURL=webpack:///./js/functions/functions.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar Functions = _interopRequireWildcard(__webpack_require__(/*! ./functions/functions */ \"./js/functions/functions.js\"));\n\nvar FormFunc = _interopRequireWildcard(__webpack_require__(/*! ./functions/formfunctions */ \"./js/functions/formfunctions.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar lista = Functions.makeList();\nvar gustavo = Functions.makeNewEmploye('Gustavo', 'Analista de Banco de Dados', 'Lorem Ipsum', Functions.makeId()),\n    yan = Functions.makeNewEmploye('Yan', 'Desenvolvedor Back-End', 'Lorem Ipsum', Functions.makeId()),\n    ivan = Functions.makeNewEmploye('Ivan', 'Desenvolvedor Front-End', 'Lorem Ipsum', Functions.makeId());\nFunctions.addNewEmploye(lista, yan);\nFunctions.addNewEmploye(lista, ivan);\nFunctions.addNewEmploye(lista, gustavo);\nconsole.log(lista);\nFormFunc.makeFormCreate();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });