/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
const { app, BrowserWindow,ipcMain } = __webpack_require__(/*! electron */ "electron");
const path = __webpack_require__(/*! path */ "path");
let mainwin;
app.whenReady().then(() => {
  mainwin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, './preload/preload.js'),
    },
  });
  mainwin.loadURL('http://localhost:8080');
  mainwin.webContents.openDevTools()
});
ipcMain.handle('start',(e, data)=>{
  console.log(data)
  return 'ipcMain datatemp'
})

})();

/******/ })()
;
//# sourceMappingURL=main.4bcb05a0.js.map