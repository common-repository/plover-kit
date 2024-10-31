/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/dashboard/Dashboard.jsx":
/*!************************************************!*\
  !*** ./static/scripts/dashboard/Dashboard.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules */ "./static/scripts/dashboard/Modules.jsx");
/* harmony import */ var _ModuleSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModuleSettings */ "./static/scripts/dashboard/ModuleSettings.jsx");
/* harmony import */ var _ModuleDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModuleDetails */ "./static/scripts/dashboard/ModuleDetails.jsx");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function Dashboard() {
  const hash = (0,react_hash_route__WEBPACK_IMPORTED_MODULE_1__.getHash)();
  const [activeModule] = (0,react_hash_route__WEBPACK_IMPORTED_MODULE_1__.getHashParameters)();
  if (hash === 'module' && activeModule) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__module-page"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ModuleSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
      module: activeModule
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ModuleDetails__WEBPACK_IMPORTED_MODULE_4__.ModuleDetails, {
      module: activeModule
    }));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Modules__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}

/***/ }),

/***/ "./static/scripts/dashboard/Module.jsx":
/*!*********************************************!*\
  !*** ./static/scripts/dashboard/Module.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */


/**
 * Plover dependencies.
 */


const defaultIcon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" xml:space="preserve" class=""><g><path d="M26.163 37.766H5a1 1 0 0 0-1 1V59.38a1 1 0 0 0 1 1h21.163a1 1 0 0 0 1-1V38.766a1 1 0 0 0-1-1zm-1 20.613H6V39.766h19.163zM54.812 37.766H33.648a1 1 0 0 0-1 1V59.38a1 1 0 0 0 1 1h21.164a1 1 0 0 0 1-1V38.766a1 1 0 0 0-1-1zm-1 20.613H34.648V39.766h19.164zM26.163 8.073H5a1 1 0 0 0-1 1v20.613a1 1 0 0 0 1 1h21.163a1 1 0 0 0 1-1V9.073a1 1 0 0 0-1-1zm-1 20.613H6V10.073h19.163zM59.707 18.478 45.131 3.902a1.03 1.03 0 0 0-1.414 0L28.753 18.867a1.006 1.006 0 0 0 0 1.414l14.576 14.575a1 1 0 0 0 1.414 0l14.964-14.964a1 1 0 0 0 0-1.414zM44.036 32.735 30.874 19.574l13.55-13.551 13.162 13.162z" fill="#3c444a" opacity="1"></path></g></svg>';
function Module({
  id,
  doc,
  dirty,
  fields,
  icon,
  label,
  enabled,
  excerpt,
  onToggle
}) {
  const editable = (enabled === true || enabled === 'yes') && !dirty;
  const routeModuleDetailPage = e => {
    e.preventDefault();
    if (!editable) {
      return;
    }
    (0,react_hash_route__WEBPACK_IMPORTED_MODULE_1__.route)(`module/${id}`);
  };
  const thumbnail = icon || defaultIcon;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module plover-dashboard__card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-panel"
  }, thumbnail.startsWith('http') ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "plover-dashboard__module-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: icon,
    alt: label
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "plover-dashboard__module-icon",
    dangerouslySetInnerHTML: {
      __html: thumbnail
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, editable && fields.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    onClick: routeModuleDetailPage
  }, label) : label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__.Switch, {
    value: enabled,
    onChange: onToggle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, excerpt))), (fields.length > 0 || doc) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__footer"
  }, doc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "ghost",
    href: doc,
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Documentation', 'plover-kit')), fields.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: !editable,
    onClick: routeModuleDetailPage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'plover-kit'))));
}

/***/ }),

/***/ "./static/scripts/dashboard/ModuleDetails.jsx":
/*!****************************************************!*\
  !*** ./static/scripts/dashboard/ModuleDetails.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleDetails: () => (/* binding */ ModuleDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./static/scripts/dashboard/hooks/index.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function ModuleDetails({
  module
}) {
  const {
    moduleData
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModule)(module);
  const {
    description
  } = moduleData;
  if (!description) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__wrap plover-dashboard__card plover-dashboard__module-details"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'plover'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-details-content",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }));
}

/***/ }),

/***/ "./static/scripts/dashboard/ModuleSettings.jsx":
/*!*****************************************************!*\
  !*** ./static/scripts/dashboard/ModuleSettings.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModuleSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./static/scripts/dashboard/controls/index.jsx");
/* harmony import */ var _NotResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NotResult */ "./static/scripts/dashboard/NotResult.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./static/scripts/dashboard/hooks/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__);

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Plover dependencies
 */



/**
 * Internal dependencies
 */






function ModuleSettings({
  module
}) {
  const {
    moduleData,
    updateModuleFields,
    setModuleFieldsDirty
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useModule)(module);
  const {
    id,
    enabled,
    dirty,
    label,
    fields_dirty,
    fields
  } = moduleData;
  const editable = (enabled === true || enabled === 'yes') && !dirty;
  if (!editable) {
    return (0,react_hash_route__WEBPACK_IMPORTED_MODULE_2__.route)('');
  }
  const [updating, setUpdating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const handleSaveChanges = e => {
    e.preventDefault();
    const changes = Object.fromEntries(fields.map(f => [f.id, f.value]));
    setUpdating(true);
    (0,_plover_api__WEBPACK_IMPORTED_MODULE_4__.updateSettingFields)(id, changes).then(() => {
      setModuleFieldsDirty(false);
    }).catch(() => {
      //
    }).finally(() => {
      setUpdating(false);
    });
  };
  const placeholders = [];
  const FieldControls = fields.map(field => {
    if (field?.control === 'placeholder') {
      placeholders.push(field);
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: field.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, field.label), field.help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, field.help)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls__WEBPACK_IMPORTED_MODULE_5__.GenericControl, {
      value: field?.value,
      onChange: value => {
        updateModuleFields({
          [field.id]: value
        });
      },
      control: field?.control,
      ...(field?.control_args || {})
    })));
  }).filter(v => !!v);
  const Controls = fields.length > 0 ? FieldControls.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "plover-dashboard__form-table"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, FieldControls)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "submit",
    disabled: !fields_dirty || updating,
    spinner: updating,
    onClick: handleSaveChanges
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Changes', 'plover')))) : null : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NotResult__WEBPACK_IMPORTED_MODULE_6__.NotResult, {
    back: false,
    wrap: false
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__wrap plover-dashboard__card plover-dashboard__module-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__header"
  }, (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__.applyFilters)('plover.dashboard.moduleSettingsHeader', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "plover-dashboard__back",
    href: "#",
    onClick: e => {
      e.preventDefault();
      (0,react_hash_route__WEBPACK_IMPORTED_MODULE_2__.route)('');
    }
  }, "\u2190"), "\xA0\xA0", label, "\xA0\xA0-\xA0\xA0", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'plover')), {
    module,
    label
  })), placeholders.map(({
    id,
    ...props
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: id
    }, (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__.applyFilters)('plover.dashboard.modulePlaceholderControl', null, {
      id,
      module,
      props
    }));
  }), (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__.applyFilters)('plover.dashboard.moduleControls', Controls, module));
}

/***/ }),

/***/ "./static/scripts/dashboard/Modules.jsx":
/*!**********************************************!*\
  !*** ./static/scripts/dashboard/Modules.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Module */ "./static/scripts/dashboard/Module.jsx");
/* harmony import */ var _hooks_use_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/use-modules */ "./static/scripts/dashboard/hooks/use-modules.js");

/**
 * WordPress dependencies
 */



/**
 * Plover dependencies
 */



/**
 * Internal dependencies
 */


function ModuleGroup({
  group,
  modules,
  filter,
  onModuleToggle
}) {
  const filteredModules = modules.filter(({
    label,
    excerpt
  }) => {
    return label.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || excerpt.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });
  if (filteredModules.length <= 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-group-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, group?.label), group?.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, group?.description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-list"
  }, filteredModules.map(props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Module__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ...props,
      key: props.id,
      onToggle: value => {
        onModuleToggle(props.id, value);
      }
    });
  })));
}
function Modules() {
  const {
    modules,
    groups,
    modulesByGroup,
    setModulesDirty,
    toggleModule,
    toggleAllModule
  } = (0,_hooks_use_modules__WEBPACK_IMPORTED_MODULE_6__.useModules)();
  const isDirty = modules.filter(m => m.dirty).length > 0;
  const allEnabled = modules.filter(m => m.enabled !== 'yes' && m.enabled !== true).length === 0;
  const [updating, setUpdating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [filter, setFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const handleSaveChanges = e => {
    e.preventDefault();
    const changes = Object.fromEntries(modules.filter(m => m.dirty).map(m => [m.id, m.enabled]));
    setUpdating(true);
    (0,_plover_api__WEBPACK_IMPORTED_MODULE_4__.updateSettingGroups)(changes).then(() => {
      setModulesDirty(false);
    }).finally(() => {
      setUpdating(false);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__wrap plover-dashboard__modules"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-header-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle all', 'plover'),
    value: allEnabled,
    onChange: value => {
      toggleAllModule(value);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__module-header-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter...', 'plover'),
    value: filter,
    onChange: setFilter
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "submit",
    spinner: updating,
    disabled: !isDirty || updating,
    onClick: handleSaveChanges
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save changes', 'plover')))), groups.map(group => {
    var _modulesByGroup$group;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ModuleGroup, {
      key: group.id,
      group: group,
      filter: filter,
      modules: (_modulesByGroup$group = modulesByGroup[group?.id]) !== null && _modulesByGroup$group !== void 0 ? _modulesByGroup$group : [],
      onModuleToggle: toggleModule
    });
  }));
}

/***/ }),

/***/ "./static/scripts/dashboard/NotResult.jsx":
/*!************************************************!*\
  !*** ./static/scripts/dashboard/NotResult.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotResult: () => (/* binding */ NotResult)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


function NotResult({
  back = true,
  wrap = true,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Result', 'plover')
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
      'plover-dashboard__no-result': true,
      'plover-dashboard__wrap plover-dashboard__card': wrap
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, back && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "plover-dashboard__back",
    href: "#",
    onClick: e => {
      e.preventDefault();
      (0,react_hash_route__WEBPACK_IMPORTED_MODULE_2__.route)('');
    }
  }, "\u2190"), "\xA0\xA0"), label));
}

/***/ }),

/***/ "./static/scripts/dashboard/controls/controls.js":
/*!*******************************************************!*\
  !*** ./static/scripts/dashboard/controls/controls.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dynamic_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-select */ "./static/scripts/dashboard/controls/dynamic-select.jsx");


const controls = {
  'text': _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0__.TextInput,
  'select': _dynamic_select__WEBPACK_IMPORTED_MODULE_1__["default"],
  'switch': _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0__.Switch,
  'tags': _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_0__.Tags
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controls);

/***/ }),

/***/ "./static/scripts/dashboard/controls/dynamic-select.jsx":
/*!**************************************************************!*\
  !*** ./static/scripts/dashboard/controls/dynamic-select.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_1__);


function DynamicSelect({
  options,
  ...props
}) {
  if (options.length <= 4) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_1__.ToggleGroup, {
      options: options,
      ...props
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_1__.Select, {
    options: options,
    ...props
  });
}

/***/ }),

/***/ "./static/scripts/dashboard/controls/generic-control.jsx":
/*!***************************************************************!*\
  !*** ./static/scripts/dashboard/controls/generic-control.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericControl: () => (/* binding */ GenericControl),
/* harmony export */   getControlComponent: () => (/* binding */ getControlComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./static/scripts/dashboard/controls/controls.js");


const getControlComponent = control => {
  return _controls__WEBPACK_IMPORTED_MODULE_1__["default"][control] || null;
};
function GenericControl({
  control,
  ...props
}) {
  const Component = getControlComponent(control);
  if (!Component) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  });
}

/***/ }),

/***/ "./static/scripts/dashboard/controls/index.jsx":
/*!*****************************************************!*\
  !*** ./static/scripts/dashboard/controls/index.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericControl: () => (/* reexport safe */ _generic_control__WEBPACK_IMPORTED_MODULE_1__.GenericControl),
/* harmony export */   getControlComponent: () => (/* reexport safe */ _generic_control__WEBPACK_IMPORTED_MODULE_1__.getControlComponent)
/* harmony export */ });
/* harmony import */ var _dynamic_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-select */ "./static/scripts/dashboard/controls/dynamic-select.jsx");
/* harmony import */ var _generic_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-control */ "./static/scripts/dashboard/controls/generic-control.jsx");



/***/ }),

/***/ "./static/scripts/dashboard/entry.jsx":
/*!********************************************!*\
  !*** ./static/scripts/dashboard/entry.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard */ "./static/scripts/dashboard/Dashboard.jsx");
/* harmony import */ var _upsell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upsell */ "./static/scripts/dashboard/upsell/index.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stores */ "./static/scripts/dashboard/stores/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./static/scripts/dashboard/style.scss");

/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Stylesheet
 */

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  const dashboardContainer = document.getElementById(window?.PloverDashboard?.root);
  let root = null;
  if (dashboardContainer) {
    (0,react_hash_route__WEBPACK_IMPORTED_MODULE_3__.routeSetup)(function () {
      if (_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot) {
        if (!root) {
          root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(dashboardContainer);
        }
        root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null));
      } else {
        (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), dashboardContainer);
      }
    });
  }
});

/***/ }),

/***/ "./static/scripts/dashboard/hooks/index.js":
/*!*************************************************!*\
  !*** ./static/scripts/dashboard/hooks/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModule: () => (/* reexport safe */ _use_module__WEBPACK_IMPORTED_MODULE_0__.useModule)
/* harmony export */ });
/* harmony import */ var _use_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-module */ "./static/scripts/dashboard/hooks/use-module.js");


/***/ }),

/***/ "./static/scripts/dashboard/hooks/use-module.js":
/*!******************************************************!*\
  !*** ./static/scripts/dashboard/hooks/use-module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModule: () => (/* binding */ useModule)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

function useModule(module) {
  let moduleData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('plover/module-settings').getModule(module);
  }, []);
  const {
    updateModuleFields,
    toggleModule,
    setModuleFieldsDirty
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('plover/module-settings');
  return {
    moduleData: moduleData ? {
      ...moduleData,
      id: module
    } : null,
    updateModuleFields: (...props) => {
      updateModuleFields(module, ...props);
    },
    toggleModule: (...props) => {
      toggleModule(module, ...props);
    },
    setModuleFieldsDirty: (...props) => {
      setModuleFieldsDirty(module, ...props);
    }
  };
}

/***/ }),

/***/ "./static/scripts/dashboard/hooks/use-modules.js":
/*!*******************************************************!*\
  !*** ./static/scripts/dashboard/hooks/use-modules.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModules: () => (/* binding */ useModules)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

function useModules() {
  const {
    modules,
    groups
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const modules = select('plover/module-settings').getModules();
    const groups = select('plover/module-settings').getModuleGroups();
    return {
      modules,
      groups
    };
  }, []);
  const modulesByGroup = {};
  modules.forEach(module => {
    var _groupData$id;
    const groupData = groups.find(({
      id
    }) => id === module?.group);
    const group = (_groupData$id = groupData?.id) !== null && _groupData$id !== void 0 ? _groupData$id : 'default';
    if (!modulesByGroup[group]) {
      modulesByGroup[group] = [];
    }
    modulesByGroup[group].push(module);
  });
  const {
    toggleModule,
    toggleAllModule,
    setModulesDirty
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('plover/module-settings');
  return {
    modules,
    groups,
    modulesByGroup,
    setModulesDirty,
    toggleModule,
    toggleAllModule
  };
}

/***/ }),

/***/ "./static/scripts/dashboard/stores/index.js":
/*!**************************************************!*\
  !*** ./static/scripts/dashboard/stores/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./static/scripts/dashboard/stores/settings.js");


if (_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_settings__WEBPACK_IMPORTED_MODULE_1__["default"].name, _settings__WEBPACK_IMPORTED_MODULE_1__["default"].options));
} else {
  // WP 5.4 - WP5.6
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_settings__WEBPACK_IMPORTED_MODULE_1__["default"].name, _settings__WEBPACK_IMPORTED_MODULE_1__["default"].options);
}

/***/ }),

/***/ "./static/scripts/dashboard/stores/settings.js":
/*!*****************************************************!*\
  !*** ./static/scripts/dashboard/stores/settings.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_0__);
var _window$PloverDashboa, _window$PloverDashboa2;
/**
 * Plover dependencies.
 */


/*
Example data structure:

const state = {
    module: {
        dirty: false,
        enabled: true,
        fields: {
            field: {
                default: '',
                value: '',
            }
        }
    }
}
 */
const DEFAULT_STATE = {
  modules: (_window$PloverDashboa = window?.PloverDashboard?.modules) !== null && _window$PloverDashboa !== void 0 ? _window$PloverDashboa : {},
  groups: (_window$PloverDashboa2 = window?.PloverDashboard?.module_groups) !== null && _window$PloverDashboa2 !== void 0 ? _window$PloverDashboa2 : {}
};
const storeOptions = {
  name: 'plover/module-settings',
  options: {
    reducer(state = DEFAULT_STATE, action) {
      switch (action.type) {
        case 'TOGGLE_MODULE':
          {
            var _state$modules$action;
            return {
              ...state,
              modules: {
                ...state.modules,
                [action.module]: {
                  ...((_state$modules$action = state.modules[action.module]) !== null && _state$modules$action !== void 0 ? _state$modules$action : {}),
                  enabled: action.payload,
                  dirty: true
                }
              }
            };
          }
        case 'SET_MODUlES_DIRTY':
          {
            return {
              ...state,
              modules: Object.fromEntries(Object.keys(state.modules).map(id => {
                return [id, {
                  ...state.modules[id],
                  dirty: false
                }];
              }))
            };
          }
        case 'TOGGLE_ALL_MODULE':
          {
            return {
              ...state,
              modules: Object.fromEntries(Object.keys(state.modules).map(id => {
                const module = state.modules[id];
                return [id, {
                  ...module,
                  enabled: action.payload,
                  dirty: true
                }];
              }))
            };
          }
        case 'UPDATE_MODULE_FIELDS':
          {
            var _state$modules$action2, _oldModuleData$fields2;
            const oldModuleData = (_state$modules$action2 = state.modules[action.module]) !== null && _state$modules$action2 !== void 0 ? _state$modules$action2 : {};
            const newFields = Object.fromEntries(Object.keys(action.payload).map(id => {
              var _oldModuleData$fields;
              const value = action.payload[id];
              return [id, {
                ...((_oldModuleData$fields = oldModuleData?.fields[id]) !== null && _oldModuleData$fields !== void 0 ? _oldModuleData$fields : {}),
                value
              }];
            }));
            return {
              ...state,
              modules: {
                ...state.modules,
                [action.module]: {
                  ...oldModuleData,
                  fields_dirty: true,
                  fields: {
                    ...((_oldModuleData$fields2 = oldModuleData?.fields) !== null && _oldModuleData$fields2 !== void 0 ? _oldModuleData$fields2 : {}),
                    ...newFields
                  }
                }
              }
            };
          }
        case 'SET_MODUlE_FIELDS_DIRTY':
          {
            var _state$modules$action3;
            const oldModuleData = (_state$modules$action3 = state.modules[action.module]) !== null && _state$modules$action3 !== void 0 ? _state$modules$action3 : {};
            return {
              ...state,
              modules: {
                ...state.modules,
                [action.module]: {
                  ...oldModuleData,
                  fields_dirty: action.payload
                }
              }
            };
          }
      }
      return state;
    },
    actions: {
      setModulesDirty: dirty => {
        return {
          type: 'SET_MODUlES_DIRTY',
          payload: dirty
        };
      },
      setModuleFieldsDirty: (module, dirty) => {
        return {
          type: 'SET_MODUlE_FIELDS_DIRTY',
          module,
          payload: dirty
        };
      },
      updateModuleFields: (module, settings) => {
        return {
          type: 'UPDATE_MODULE_FIELDS',
          module,
          payload: settings
        };
      },
      toggleModule: (module, status) => {
        return {
          type: 'TOGGLE_MODULE',
          module,
          payload: status
        };
      },
      toggleAllModule: status => {
        return {
          type: 'TOGGLE_ALL_MODULE',
          payload: status
        };
      }
    },
    selectors: {
      getModules: state => {
        return (0,_plover_utils__WEBPACK_IMPORTED_MODULE_0__.flattenObject)(state.modules).sort((l, r) => {
          return r?.order - l?.order;
        }).map(module => {
          return {
            ...module,
            fields: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_0__.flattenObject)(module?.fields)
          };
        });
      },
      getModuleGroups: state => {
        return (0,_plover_utils__WEBPACK_IMPORTED_MODULE_0__.flattenObject)(state.groups).sort((l, r) => {
          return l?.order - r?.order;
        });
      },
      getModule: (state, module) => {
        return {
          ...state.modules[module],
          fields: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_0__.flattenObject)(state.modules[module]?.fields)
        };
      },
      getModuleFields: (state, module) => {
        return (0,_plover_utils__WEBPACK_IMPORTED_MODULE_0__.flattenObject)(state.modules[module]?.fields);
      },
      isModuleEnabled: (state, module) => {
        return state.modules[module]?.enabled;
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeOptions);

/***/ }),

/***/ "./static/scripts/dashboard/upsell/code-highlight-upsell.js":
/*!******************************************************************!*\
  !*** ./static/scripts/dashboard/upsell/code-highlight-upsell.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies.
 */



/**
 * Plover dependencies.
 */


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('plover.dashboard.modulePlaceholderControl', 'plover/code-highlight-upsell', function (Control, {
  id,
  module
}) {
  if (module !== 'plover_code_highlight' || id !== 'upsell') {
    return Control;
  }
  if ((0,_plover_utils__WEBPACK_IMPORTED_MODULE_4__.is_premium)()) {
    return Control;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_3__.Tips, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: sprintf( /* translators: %s: Premium version text & link. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upgrade to %s to access these features:', 'plover-kit'), '<a href="' + (0,_plover_utils__WEBPACK_IMPORTED_MODULE_4__.upsell_url)() + '">' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Premium', 'plover-kit') + '</a>')
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show line numbers by default', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show languages by default', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show copy button by default', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('More highlight themes', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wpplover.com/docs/plover-kit/modules/code-highlight/",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Learn More ↗', 'plover-kit')));
});

/***/ }),

/***/ "./static/scripts/dashboard/upsell/index.js":
/*!**************************************************!*\
  !*** ./static/scripts/dashboard/upsell/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_highlight_upsell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-highlight-upsell */ "./static/scripts/dashboard/upsell/code-highlight-upsell.js");


/***/ }),

/***/ "./static/scripts/dashboard/style.scss":
/*!*********************************************!*\
  !*** ./static/scripts/dashboard/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-hash-route/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-hash-route/lib/index.js ***!
  \****************************************************/
/***/ ((module) => {



var hashSubs = void 0;

function getHash() {
  var hash = window.location.hash;

  var parts = hash.split('/'); // separates hash parameters
  return parts[0].substring(1); // removes leading #
}

/**
 * All the parts of the hash separated by slashes
 * except the first part are treated as "hash parameters".
 */
function getHashParameters() {
  var hash = window.location.hash;

  var parts = hash.split('/');
  parts.shift(); // removes first part
  return parts;
}

function setupListener(render) {
  hashSubs = [];

  window.addEventListener('hashchange', function () {
    render();
    var hash = getHash();
    var parameters = getHashParameters();
    hashSubs.forEach(function (sub) {
      setTimeout(sub, 0, hash, parameters);
    });
  });
}

/**
 * Can add a handler to be called when the
 * hash changes.
 *
 * On a change event, the handler will be
 * called with an object that contains the
 * current `hash` and `parameters`.
 *
 * Returns a function that can be called
 * to unsubscribe the handler.  If this
 * is being used in a component, the
 * unsubscribe should be called when the
 * component is unmounted to prevent
 * memory leaks.
 *
 */
function onHashChange(handler) {
  hashSubs = hashSubs.concat(handler);
  return function () {
    hashSubs = hashSubs.filter(function (sub) {
      return sub !== handler;
    });
  };
}

/**
 * Changes the current "route"
 * and returns null so render methods can
 * return the result of calling this
 * to render nothing AND change the route.
 */
function route(hash) {
  window.location.hash = hash;
  return null; // Don't remove this!
}

function routeSetup(render) {
  setupListener(render);
  render();
}

module.exports = { getHash: getHash, getHashParameters: getHashParameters, onHashChange: onHashChange, route: route, routeSetup: routeSetup };

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@plover/api":
/*!*********************************!*\
  !*** external ["plover","api"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["plover"]["api"];

/***/ }),

/***/ "@plover/components":
/*!****************************************!*\
  !*** external ["plover","components"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = window["plover"]["components"];

/***/ }),

/***/ "@plover/utils":
/*!***********************************!*\
  !*** external ["plover","utils"] ***!
  \***********************************/
/***/ ((module) => {

module.exports = window["plover"]["utils"];

/***/ }),

/***/ "@plover-kit/dashboard":
/*!******************************************!*\
  !*** external ["ploverKit","dashboard"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["ploverKit"]["dashboard"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

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
/******/ 			"dashboard": 0,
/******/ 			"./style-dashboard": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-dashboard"], () => (__webpack_require__("./static/scripts/dashboard/entry.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map