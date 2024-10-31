/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/packages/dashboard/button/index.jsx":
/*!****************************************************!*\
  !*** ./static/packages/dashboard/button/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./static/packages/dashboard/button/style.scss");

/**
 * WordPress dependencies
 */


function Button({
  variant = 'primary',
  status = 'theme',
  className,
  spinner,
  children,
  href,
  ...props
}) {
  let Tag = 'button';
  let linkProps = {};
  if (href) {
    // link
    Tag = 'a';
    linkProps['href'] = href;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: `plover-dashboard__control plover-dashboard__button-control ${className !== null && className !== void 0 ? className : ''} is-${variant}-style is-${status}-status`,
    ...props,
    ...linkProps
  }, spinner && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
    className: "plover-dashboard__button-spinner"
  }), children);
}

/***/ }),

/***/ "./static/packages/dashboard/entry.js":
/*!********************************************!*\
  !*** ./static/packages/dashboard/entry.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_2__.Button),
/* harmony export */   Notices: () => (/* reexport safe */ _notices__WEBPACK_IMPORTED_MODULE_3__.Notices),
/* harmony export */   Select: () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_5__.Select),
/* harmony export */   Switch: () => (/* reexport safe */ _switch__WEBPACK_IMPORTED_MODULE_4__.Switch),
/* harmony export */   Tags: () => (/* reexport safe */ _tags__WEBPACK_IMPORTED_MODULE_7__.Tags),
/* harmony export */   TextInput: () => (/* reexport safe */ _text_input__WEBPACK_IMPORTED_MODULE_1__.TextInput),
/* harmony export */   ToggleGroup: () => (/* reexport safe */ _toggle_group__WEBPACK_IMPORTED_MODULE_6__.ToggleGroup),
/* harmony export */   UpgradeCard: () => (/* reexport safe */ _upgrade__WEBPACK_IMPORTED_MODULE_8__.UpgradeCard),
/* harmony export */   UpgradeNotice: () => (/* reexport safe */ _upgrade__WEBPACK_IMPORTED_MODULE_8__.UpgradeNotice)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./static/packages/dashboard/style.scss");
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-input */ "./static/packages/dashboard/text-input/index.jsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./static/packages/dashboard/button/index.jsx");
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notices */ "./static/packages/dashboard/notices/index.jsx");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch */ "./static/packages/dashboard/switch/index.jsx");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./static/packages/dashboard/select/index.jsx");
/* harmony import */ var _toggle_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-group */ "./static/packages/dashboard/toggle-group/index.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags */ "./static/packages/dashboard/tags/index.jsx");
/* harmony import */ var _upgrade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upgrade */ "./static/packages/dashboard/upgrade/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./static/packages/dashboard/utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _utils__WEBPACK_IMPORTED_MODULE_9__) if(["default","TextInput","Button","Notices","Switch","Select","ToggleGroup","Tags","UpgradeCard","UpgradeNotice"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _utils__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);











/***/ }),

/***/ "./static/packages/dashboard/notices/index.jsx":
/*!*****************************************************!*\
  !*** ./static/packages/dashboard/notices/index.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notices: () => (/* binding */ Notices)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./static/packages/dashboard/notices/style.scss");

/**
 * WordPress dependencies
 */



function Notices({
  maxItems = 4,
  extraNotices = []
}) {
  const {
    notices,
    removeNotice
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_2__.useNotices)();
  if ([...(notices !== null && notices !== void 0 ? notices : []), ...extraNotices].length <= 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__dashboard-notices"
  }, extraNotices.map(({
    status,
    message
  }, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    key: index,
    status: status,
    isDismissible: false
  }, message)), notices.slice(maxItems * -1).map(({
    status,
    message,
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    key: id,
    status: status,
    onRemove: () => {
      removeNotice(id);
    }
  }, message)));
}

/***/ }),

/***/ "./static/packages/dashboard/select/index.jsx":
/*!****************************************************!*\
  !*** ./static/packages/dashboard/select/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function Select({
  className,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    className: `plover-dashboard__control plover-dashboard__select-control ${className !== null && className !== void 0 ? className : ''}`,
    ...props
  });
}

/***/ }),

/***/ "./static/packages/dashboard/switch/index.jsx":
/*!****************************************************!*\
  !*** ./static/packages/dashboard/switch/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function Switch({
  className,
  value,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    checked: value === 'yes' || value === true,
    className: `plover-dashboard__control plover-dashboard__switch-control ${className !== null && className !== void 0 ? className : ''}`,
    ...props
  });
}

/***/ }),

/***/ "./static/packages/dashboard/tags/index.jsx":
/*!**************************************************!*\
  !*** ./static/packages/dashboard/tags/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tags: () => (/* binding */ Tags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./static/packages/dashboard/tags/style.scss");

/**
 * WordPress dependencies
 */



function Tags(props) {
  let {
    className,
    suggestions,
    expandOnFocus = true,
    showHowTo = false,
    validate = true,
    value,
    ...extraProps
  } = props;
  if ((0,_plover_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(value) && value.trim()) {
    value = value.trim().split(',');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: null,
    tokenizeOnBlur: true,
    suggestions: suggestions,
    value: Array.isArray(value) ? value : [],
    __nextHasNoMarginBottom: true,
    __experimentalShowHowTo: showHowTo,
    __experimentalExpandOnFocus: expandOnFocus,
    __experimentalValidateInput: validate ? v => {
      return suggestions.indexOf(v) !== -1;
    } : undefined,
    className: `plover-dashboard__control plover-dashboard__tags-control ${className !== null && className !== void 0 ? className : ''}`,
    ...extraProps
  });
}

/***/ }),

/***/ "./static/packages/dashboard/text-input/index.jsx":
/*!********************************************************!*\
  !*** ./static/packages/dashboard/text-input/index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInput: () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function TextInput({
  className,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    className: `plover-dashboard__control plover-dashboard__text-control ${className !== null && className !== void 0 ? className : ''}`,
    __nextHasNoMarginBottom: true,
    ...props
  });
}

/***/ }),

/***/ "./static/packages/dashboard/toggle-group/index.js":
/*!*********************************************************!*\
  !*** ./static/packages/dashboard/toggle-group/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleGroup: () => (/* binding */ ToggleGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function ToggleGroup({
  className,
  options,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    isBlock: true,
    label: null,
    hideLabelFromVision: true,
    className: `plover-dashboard__control plover-dashboard__toggle-group-control ${className !== null && className !== void 0 ? className : ''}`,
    __nextHasNoMarginBottom: true,
    ...props
  }, options.map(({
    value,
    label
  }, i) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
      key: i,
      value: value,
      label: label
    });
  }));
}

/***/ }),

/***/ "./static/packages/dashboard/upgrade/index.js":
/*!****************************************************!*\
  !*** ./static/packages/dashboard/upgrade/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpgradeCard: () => (/* binding */ UpgradeCard),
/* harmony export */   UpgradeNotice: () => (/* binding */ UpgradeNotice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./static/packages/dashboard/button/index.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./static/packages/dashboard/upgrade/style.scss");

/**
 * WordPress dependencies.
 */



/**
 * Plover dependencies.
 */


/**
 * Internal dependencies.
 */


const upgrade_message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to the Premium plan to access this feature.', 'plover-kit');
function UpgradeCard({
  title,
  message,
  align = 'left'
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `plover-dashboard__upgrade-card is-align-${align}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to premium plan.', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, message || upgrade_message), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "plover-dashboard__control",
    variant: "primary",
    href: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_3__.upsell_url)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade now', 'plover-kit')));
}
function UpgradeNotice({
  message
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__upgrade-notice"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: 'success',
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, message || upgrade_message), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_3__.upsell_url)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade Now ↗', 'plover-kit'))));
}

/***/ }),

/***/ "./static/packages/dashboard/utils/index.js":
/*!**************************************************!*\
  !*** ./static/packages/dashboard/utils/index.js ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./static/packages/dashboard/button/style.scss":
/*!*****************************************************!*\
  !*** ./static/packages/dashboard/button/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/packages/dashboard/notices/style.scss":
/*!******************************************************!*\
  !*** ./static/packages/dashboard/notices/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/packages/dashboard/style.scss":
/*!**********************************************!*\
  !*** ./static/packages/dashboard/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/packages/dashboard/tags/style.scss":
/*!***************************************************!*\
  !*** ./static/packages/dashboard/tags/style.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/packages/dashboard/upgrade/style.scss":
/*!******************************************************!*\
  !*** ./static/packages/dashboard/upgrade/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@plover/utils":
/*!***********************************!*\
  !*** external ["plover","utils"] ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = window["plover"]["utils"];

/***/ }),

/***/ "@plover-kit/data":
/*!*************************************!*\
  !*** external ["ploverKit","data"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["ploverKit"]["data"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"plover-kit-dashboard": 0,
/******/ 			"./style-plover-kit-dashboard": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkplover_kit"] = globalThis["webpackChunkplover_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-plover-kit-dashboard"], () => (__webpack_require__("./static/packages/dashboard/entry.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	(window.ploverKit = window.ploverKit || {}).dashboard = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map