/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (() => {

eval("let urgentOptions = [new Option(\"3 месяца - 20%\", \"3,20\"), new Option(\"6 месяцев - 22%\", \"6,22\"), new Option(\"9 месяцев - 23%\", \"9,23\"), new Option(\"1 год - 24%\", \"12,24\"), new Option(\"1,5 года - 18%\", \"18,18\"), new Option(\" 2 года - 15%\", \"24,15\")];\nlet replenishedOptions = [new Option(\"6 месяцев - 20%\", \"6,20\"), new Option(\"1 год - 22%\", \"12,22\"), new Option(\"1,5 года - 15%\", \"18,15\"), new Option(\"2 года - 10%\", \"24,10\")];\ntypesOptions = [new Option(\"Пополняемый\", \"replenished\"), new Option(\"Срочный\", \"urgent\")];\n\nfunction setOptionsToSelect(select, options) {\n  for (let i = 0; i < options.length; i++) select.options[i] = options[i];\n\n  for (let i = options.length; i < select.options.length;) select.options[i] = null;\n}\n\nfunction onChangedTypeOfDeposit(sender) {\n  let comboBox = document.getElementById('depositTerm');\n\n  switch (sender.value) {\n    case 'urgent':\n      setOptionsToSelect(comboBox, urgentOptions);\n      break;\n\n    case 'replenished':\n      setOptionsToSelect(comboBox, replenishedOptions);\n      break;\n  }\n}\n\nfunction onFocusSelect(sender) {\n  if (sender.value == \"default\") {\n    setOptionsToSelect(sender, typesOptions);\n    onChangedTypeOfDeposit(sender);\n  }\n}\n\nfunction onClickStartButton() {\n  let sum = document.getElementById(\"textSum\").value.trim();\n  let depositTerm = document.getElementById(\"depositTerm\");\n  let typeOfDeposit = document.getElementById(\"typeOfDeposit\");\n\n  if (depositTerm.options[0].value == \"default\" || typeOfDeposit.options[0].value == \"default\") {\n    alert(\"Необходимо выбрать условия вклада!\");\n    return;\n  }\n\n  if (isNaN(sum)) {\n    alert(\"Вы ввели не число!\");\n    return;\n  }\n\n  let values = depositTerm.value.split(',');\n  document.getElementById(\"resultText\").value = \"Вклад \\\"\" + typeOfDeposit.options[typeOfDeposit.selectedIndex].text + \"\\\" на срок \" + values[0] + \" месяцев, на сумму \" + sum + \" руб.\\nпод годовую ставку \" + values[1] + \"%.\\n\\nВ конце срока вы получите \" + (Number(sum) + sum * values[0] / 12 * values[1] / 100) + \" руб.\";\n}\n\n//# sourceURL=webpack://npm_package/./app/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/index.js"]();
/******/ 	
/******/ })()
;