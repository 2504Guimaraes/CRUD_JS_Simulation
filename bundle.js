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

/***/ "./js/Functions/functions.js":
/*!***********************************!*\
  !*** ./js/Functions/functions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.makeList = makeList;\nexports.makeNewEmploye = makeNewEmploye;\nexports.makeId = makeId;\nexports.addNewEmploye = addNewEmploye;\nexports.deleteEmploye = deleteEmploye;\n\n/*\r\n\r\n    These basically are the main functions of the code, they control \r\n    the main proccesses. This function list will be imported to \r\n    main.js, I'll try to write them shorter as possible.\r\n\r\n*/\nfunction makeList() {\n  var lista = [];\n  return lista;\n}\n\nfunction makeNewEmploye(nm, job, txt, id_gerado) {\n  return {\n    id: id_gerado,\n    nome: nm,\n    cargo: job,\n    txt: txt\n  };\n}\n\nfunction makeId() {\n  return 'A' + Math.random().toString(36).substr(2, 9);\n}\n\nfunction addNewEmploye(list) {\n  for (var _len = arguments.length, employe = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    employe[_key - 1] = arguments[_key];\n  }\n\n  list.push(employe);\n  return list;\n}\n\nfunction deleteEmploye(list, name) {\n  list.forEach(function (x, index) {\n    if (x === list.find(function (person) {\n      return person.nome === name;\n    })) {\n      list.splice(index, 1);\n    }\n  });\n  return list;\n} // let lista = makeList();\n// let gustavo = makeNewEmploye('Gustavo', 'Engenheiro de Software', 'Lorem Ipsum', makeId()),\n//     yan = makeNewEmploye('Nathalia', 'Engenheiro fr Software', 'Lorem Ipsum', makeId()),\n//     ivan = makeNewEmploye('Ivan', 'Engenheiro fr Software', 'Lorem Ipsum', makeId());\n// addNewEmploye(lista, yan);\n// addNewEmploye(lista, ivan);\n// addNewEmploye(lista, gustavo);\n// console.log(lista);\n// console.log('\\nLista com Usuário Ivan apagado: \\n');\n// console.log(deleteEmploye(lista, 'Gustavo'));\n\n//# sourceURL=webpack:///./js/Functions/functions.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar Functions = _interopRequireWildcard(__webpack_require__(/*! ./Functions/functions */ \"./js/Functions/functions.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n// let lista = makeList();\n// let gustavo = makeNewEmploye('Gustavo', 'Engenheiro de Software', 'Lorem Ipsum', makeId()),\n//     yan = makeNewEmploye('Nathalia', 'Engenheiro fr Software', 'Lorem Ipsum', makeId()),\n//     ivan = makeNewEmploye('Ivan', 'Engenheiro fr Software', 'Lorem Ipsum', makeId());\n// addNewEmploye(lista, yan);\n// addNewEmploye(lista, ivan);\n// addNewEmploye(lista, gustavo);\n// console.log(lista);\n// console.log('\\nLista com Usuário Ivan apagado: \\n');\n// console.log(deleteEmploye(lista, 'Gustavo'));\nvar lista = Functions.makeList();\nvar gustavo = Functions.makeNewEmploye('Gustavo', 'Analista de Banco de Dados', 'Lorem Ipsum', Functions.makeId()),\n    yan = Functions.makeNewEmploye('Yan', 'Desenvolvedor Back-End', 'Lorem Ipsum', Functions.makeId()),\n    ivan = Functions.makeNewEmploye('Ivan', 'Desenvolvedor Front-End', 'Lorem Ipsum', Functions.makeId());\nFunctions.addNewEmploye(lista, yan, ivan, gustavo);\nconsole.log(lista);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });