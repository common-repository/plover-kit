/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/block-extensions/icon-library/api/index.js":
/*!*******************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/api/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIconLibrary: () => (/* binding */ createIconLibrary),
/* harmony export */   createIconRequestGenerator: () => (/* binding */ createIconRequestGenerator),
/* harmony export */   deleteIconLibrary: () => (/* binding */ deleteIconLibrary),
/* harmony export */   fetchIconCollections: () => (/* binding */ fetchIconCollections),
/* harmony export */   fetchIconLibraries: () => (/* binding */ fetchIconLibraries),
/* harmony export */   fetchIconsFromCollection: () => (/* binding */ fetchIconsFromCollection),
/* harmony export */   fetchIconsFromLibrary: () => (/* binding */ fetchIconsFromLibrary)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Get icon libraries
 *
 * @returns Promise
 */
function fetchIconLibraries() {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/plover-kit/v1/icon-libraries?per_page=-1',
    method: 'GET'
  });
}

/**
 * Create a new icon library.
 *
 * @param name
 * @param slug
 * @returns Promise
 */
function createIconLibrary(name, slug = null) {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/plover-kit/v1/icon-libraries',
    method: 'POST',
    data: {
      icon_library_settings: {
        name: name,
        slug: slug !== null && slug !== void 0 ? slug : name
      }
    }
  });
}

/**
 * Delete an exist icon library.
 *
 * @param id
 * @returns Promise
 */
function deleteIconLibrary(id) {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `/plover-kit/v1/icon-libraries/${id}?force=true`,
    method: 'DELETE'
  });
}

/**
 * Get icon collections
 *
 * @returns Promise
 */
function fetchIconCollections() {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/plover-kit/v1/icon-collections',
    method: 'GET'
  });
}

/**
 * Fetch icons from library
 *
 * @param library
 * @returns Promise
 */
function fetchIconsFromLibrary(library) {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/plover-kit/v1/icons?per_page=-1', {
      icon_library_id: library
    }),
    method: 'GET'
  });
}

/**
 * Fetch icons from collection
 *
 * @param collection
 * @returns Promise
 */
function fetchIconsFromCollection(collection) {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `/plover-kit/v1/icon-collections/${collection}`,
    method: 'GET'
  });
}

/**
 * Generate create icon request body for batch request.
 *
 * @param library
 * @returns {function({name: *, svg: *, tags: *}): {path: string, method: string, body: {icon_settings: {svg: *, name: *, slug: *, tags}}}}
 */
function createIconRequestGenerator(library) {
  return function ({
    name,
    svg,
    tags
  }) {
    return {
      method: 'POST',
      path: `/plover-kit/v1/icons?icon_library_id=${library}`,
      body: {
        icon_settings: {
          name: name,
          slug: name,
          tags: tags !== null && tags !== void 0 ? tags : [],
          svg: svg
        }
      }
    };
  };
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/AddNewLibrary.jsx":
/*!***********************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/AddNewLibrary.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNewLibrary: () => (/* binding */ AddNewLibrary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./static/scripts/block-extensions/icon-library/api/index.js");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */



/**
 * Internal dependencies.
 */

function AddNewLibrary({
  initialLibraryName = '',
  onLibraryAdded
}) {
  const [isShowAddNewLibrary, setShowAddNewLibrary] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isCreatingLibrary, setIsCreatingLibrary] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [newLibraryName, setNewLibraryName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(initialLibraryName);
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__.useNotices)();
  const {
    addLibrary
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('plover/icon-libraries');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '2px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "link",
    onClick: () => setShowAddNewLibrary(!isShowAddNewLibrary)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new library', 'plover-kit'))), isShowAddNewLibrary && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isCreatingLibrary ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Press enter to save new library.', 'plover-kit'),
    __nextHasNoMarginBottom: false,
    value: newLibraryName,
    onKeyPress: ev => {
      if (ev.key === 'Enter') {
        setIsCreatingLibrary(true);
        (0,_api__WEBPACK_IMPORTED_MODULE_7__.createIconLibrary)(newLibraryName).catch(showTimeoutErrorResponse).then(data => {
          addLibrary(data);
          setShowAddNewLibrary(false);
          if (onLibraryAdded) {
            onLibraryAdded(data);
          }
        }).finally(() => {
          setIsCreatingLibrary(false);
        });
      }
    },
    onChange: newLibrary => setNewLibraryName(newLibrary)
  })));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/DeleteIconsModal.js":
/*!*************************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/DeleteIconsModal.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteIconsModal: () => (/* binding */ DeleteIconsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__);

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */




function DeleteIconsModal({
  icons,
  library,
  onDeleted
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const closeModel = () => setIsOpen(false);
  const openModel = () => setIsOpen(true);
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__.useNotices)();
  const {
    removeIconsFromLibrary
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('plover/icon-libraries');

  /**
   * @param id
   * @returns {{path: string, method: string}}
   */
  const deleteIconRequestGenerator = ({
    id
  }) => {
    return {
      method: 'DELETE',
      path: `/plover-kit/v1/icons/${id}?icon_library_id=${library}&force=true`
    };
  };

  /**
   * @param request
   */
  const batchRequestHandler = request => {
    request.catch(showTimeoutErrorResponse).then(data => {
      const {
        responses
      } = data;
      const removed = [];
      for (const {
        status,
        body
      } of responses) {
        // Error status.
        if (status < 200 || status >= 300) {
          return showTimeoutErrorResponse(body);
        }
        removed.push(body.previous.id);
      }
      removeIconsFromLibrary(library, removed);
    });
  };
  const handleDelete = () => {
    openModel();
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.resolveSelect)('plover/icon-libraries').getBatchLimit().catch(showTimeoutErrorResponse).then(limit => {
      (0,_plover_api__WEBPACK_IMPORTED_MODULE_7__.batchApiRequest)(limit, icons, deleteIconRequestGenerator, batchRequestHandler).then(() => {
        onDeleted && onDeleted();
      }).finally(() => {
        closeModel();
      });
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    isDismissible: false,
    size: "medium",
    onRequestClose: () => null
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Notices, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_6__.ProgressBar, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Deleting... ', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    status: "danger",
    spinner: isOpen,
    disabled: isOpen || icons.length === 0,
    onClick: handleDelete
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete selected icons', 'plover-kit')));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/DeleteLibrary.jsx":
/*!***********************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/DeleteLibrary.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteLibrary: () => (/* binding */ DeleteLibrary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./static/scripts/block-extensions/icon-library/api/index.js");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */



/**
 * Internal dependencies.
 */

function DeleteLibrary({
  library,
  onDeleted
}) {
  const libraryData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)('plover/icon-libraries').getLibrary(library);
  if (!libraryData) {
    return null;
  }
  const {
    name,
    id,
    count
  } = libraryData;
  const [isConfirmOpen, setIsConfirmOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDeleting, setIsDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__.useNotices)();
  const {
    removeLibrary
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('plover/icon-libraries');
  const doDelete = () => {
    setIsDeleting(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_7__.deleteIconLibrary)(id).catch(showTimeoutErrorResponse).then(() => {
      // TODO: remove icons before remove library
      removeLibrary(id);
      onDeleted && onDeleted();
    }).finally(() => {
      setIsDeleting(false);
    });
  };
  const handleDeleteRequest = () => {
    if (count > 0) {
      setIsConfirmOpen(true);
    } else {
      doDelete();
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isConfirmOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    size: "medium",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: The name of icon library. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete %s?', 'plover-kit'), name),
    onRequestClose: () => setIsConfirmOpen(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: the count of icons. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('This library contains %s icon, once deleted, all icons will be deleted as well. This operation is not reversible.', 'This library contains %s icons, once deleted, all icons will be deleted as well. This operation is not reversible.', count, 'plover-kit'), count)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    spinner: isDeleting,
    disabled: isDeleting,
    status: "danger",
    onClick: doDelete
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Yes, please delete it.', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    spinner: isDeleting,
    disabled: isDeleting,
    variant: "link",
    status: "danger",
    onClick: handleDeleteRequest
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete this library', 'plover-kit')));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/DragAndDropUpload.jsx":
/*!***************************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/DragAndDropUpload.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragAndDropUpload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__);




function DragAndDropUpload({
  className,
  onFilesChange,
  onRequestClose,
  accept = '*',
  isDismissible = true,
  multiple = true,
  instruction = null,
  ...props
}) {
  const [dragStatus, setDragStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const acceptFiles = files => {
    onFilesChange && onFilesChange(files);
  };
  const dragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    setDragStatus('over');
  };
  const dragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragStatus('leave');
  };
  const drop = e => {
    e.preventDefault();
    e.stopPropagation();
    acceptFiles([...e.dataTransfer.files].filter(f => {
      if (accept === '*') {
        return true;
      }
      return accept.split(',').indexOf(f.type) !== -1;
    }));
    setDragStatus('drop');
  };
  const manually = e => {
    if (e.target.files.length > 0) {
      acceptFiles(e.target.files);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'plover-dashboard__drag-drop-upload ' + (dragStatus ? `plover-dashboard__drag-${dragStatus} ` : '') + (className || '')
  }, isDismissible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: onRequestClose,
    className: "plover-dashboard__control plover-dashboard__drag-drop-upload-close"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ...props,
    accept: accept,
    type: "file",
    multiple: multiple,
    onDragOver: dragOver,
    onDragLeave: dragLeave,
    onDrop: drop,
    onChange: manually,
    className: "plover-dashboard__drag-drop-upload-input"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__drag-drop-upload-instructions"
  }, instruction));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/IconCollection.jsx":
/*!************************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/IconCollection.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconCollection: () => (/* binding */ IconCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IconList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconList */ "./static/scripts/block-extensions/icon-library/components/IconList.jsx");
/* harmony import */ var _ImportIconsModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImportIconsModal */ "./static/scripts/block-extensions/icon-library/components/ImportIconsModal.jsx");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */




/**
 * Internal dependencies.
 */


function AvailableCollection({
  collection
}) {
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__.useNotices)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setLoading(true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.resolveSelect)('plover/icon-libraries').getCollectionIcons(collection.slug).catch(showTimeoutErrorResponse).then(icons => {
      setIcons(icons);
      setSelected([]);
    }).finally(() => {
      setLoading(false);
    });
  }, [collection.slug]);
  if (loading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_IconList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    icons: !!search.trim() ? icons.filter(({
      name,
      tags
    }) => {
      return ((tags !== null && tags !== void 0 ? tags : []).join('') + name).indexOf(search) !== -1;
    }) : icons,
    selected: selected,
    search: search,
    onSearchChange: setSearch,
    onSelectChange: icon => {
      if (selected.indexOf(icon) !== -1) {
        setSelected(selected.filter(s => s !== icon));
      } else {
        setSelected([...selected, icon]);
      }
    },
    footer: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__icon-list-footer-section"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__icon-list-footer-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, selected.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('icons selected', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ImportIconsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      collection: collection,
      icons: selected,
      onImported: () => setSelected([])
    })))
  });
}
function IconCollection({
  collection
}) {
  if (!collection) {
    return null;
  }
  const {
    collectionData
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      collectionData: (select('plover/icon-libraries').getCollections() || []).find(({
        slug
      }) => slug === collection)
    };
  });
  if (!collectionData) {
    return null;
  }
  if (collectionData.premium && !(0,_plover_utils__WEBPACK_IMPORTED_MODULE_5__.is_premium)()) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.UpgradeCard, {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to the Premium plan to access this icon collection.', 'plover-kit')
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AvailableCollection, {
    collection: collectionData
  });
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/IconLibrary.jsx":
/*!*********************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/IconLibrary.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconLibrary: () => (/* binding */ IconLibrary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IconList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconList */ "./static/scripts/block-extensions/icon-library/components/IconList.jsx");
/* harmony import */ var _UploadIconsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UploadIconsForm */ "./static/scripts/block-extensions/icon-library/components/UploadIconsForm.jsx");
/* harmony import */ var _DeleteLibrary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteLibrary */ "./static/scripts/block-extensions/icon-library/components/DeleteLibrary.jsx");
/* harmony import */ var _DeleteIconsModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeleteIconsModal */ "./static/scripts/block-extensions/icon-library/components/DeleteIconsModal.js");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */




/**
 * Internal dependencies.
 */




function IconLibrary({
  library,
  onDeleted
}) {
  if (!library) {
    return null;
  }
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__.useNotices)();
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [showUpload, setShowUpload] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const icons = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select('plover/icon-libraries').getLibraryIcons(library);
  }, [library]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLoading(true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.resolveSelect)('plover/icon-libraries').getLibraryIcons(library).catch(showTimeoutErrorResponse).finally(() => {
      setLoading(false);
    });
  }, [library]);
  if (loading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !(0,_plover_utils__WEBPACK_IMPORTED_MODULE_5__.is_premium)() && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.UpgradeNotice, {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upgrade to the Premium plan to upload your own SVG icons.', 'plover-kit')
  }), showUpload && (0,_plover_utils__WEBPACK_IMPORTED_MODULE_5__.is_premium)() && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UploadIconsForm__WEBPACK_IMPORTED_MODULE_9__.UploadIconsForm, {
    library: library,
    onRequestClose: () => setShowUpload(false)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_IconList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    icons: !!search.trim() ? (icons !== null && icons !== void 0 ? icons : []).filter(({
      name,
      tags
    }) => {
      return ((tags !== null && tags !== void 0 ? tags : []).join('') + name).indexOf(search) !== -1;
    }) : icons !== null && icons !== void 0 ? icons : [],
    selected: selected,
    search: search,
    onSearchChange: setSearch,
    header: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_5__.is_premium)() && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: () => setShowUpload(!showUpload)
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Icon', 'plover-kit')),
    onSelectChange: icon => {
      if (selected.indexOf(icon) !== -1) {
        setSelected(selected.filter(s => s !== icon));
      } else {
        setSelected([...selected, icon]);
      }
    },
    footer: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__icon-list-footer-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteLibrary__WEBPACK_IMPORTED_MODULE_10__.DeleteLibrary, {
      library: library,
      onDeleted: onDeleted
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__icon-list-footer-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, selected.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('icons selected', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteIconsModal__WEBPACK_IMPORTED_MODULE_11__.DeleteIconsModal, {
      library: library,
      icons: selected,
      onDeleted: () => setSelected([])
    })))
  }));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/IconList.jsx":
/*!******************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/IconList.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _NoContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoContent */ "./static/scripts/block-extensions/icon-library/components/NoContent.jsx");

/**
 * WordPress dependencies.
 */




/**
 * Plover dependencies.
 */




/**
 * Internal dependencies.
 */

function IconList({
  icons,
  header,
  footer,
  search,
  onSearchChange,
  selected,
  onSelectChange
}) {
  const [iconPreviewSize, setIconPreviewSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(22);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-list-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-list-header-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, {
    __nextHasNoMarginBottom: true,
    className: "plover-dashboard__control",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search icons', 'plover-kit'),
    value: search !== null && search !== void 0 ? search : '',
    onChange: onSearchChange !== null && onSearchChange !== void 0 ? onSearchChange : () => null
  }), header), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    className: "plover-dashboard__control plover-dashboard__icon-preview-size-slider",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon preview size', 'plover-kit'),
    initialPosition: iconPreviewSize,
    max: 48,
    min: 12,
    withInputField: false,
    onChange: setIconPreviewSize,
    __nextHasNoMarginBottom: true
  })), icons.length <= 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NoContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No icons, Import icons to this library', 'plover-kit')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "secondary",
    href: "https://wpplover.com/docs/plover-kit/modules/icon-library/",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read Documentation', 'plover-kit'))), icons.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      '--plover-dashboard__icon-preview-size': `${iconPreviewSize}px`
    },
    className: "plover-dashboard__icon-list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_4__.AutoSizer, null, ({
    height,
    width
  }) => {
    const COLUMN_WIDTH = iconPreviewSize + 48 + 16;
    // const ROW_HEIGHT = iconPreviewSize + 48 + 16;
    const ROW_HEIGHT = iconPreviewSize + 48 + 30 + 16;
    // Pay attention to the width of sidebar
    const ICONS_PER_ROW = Math.floor((width - 16) / COLUMN_WIDTH);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_4__.FixedSizeGrid, {
      itemData: icons,
      columnCount: ICONS_PER_ROW,
      columnWidth: COLUMN_WIDTH,
      rowCount: Math.ceil(icons.length / ICONS_PER_ROW),
      rowHeight: ROW_HEIGHT,
      height: height,
      width: width
    }, ({
      columnIndex,
      rowIndex,
      style
    }) => {
      const i = ICONS_PER_ROW * rowIndex + columnIndex;
      const icon = icons[i];
      if (!icon) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: style,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])({
          'plover-dashboard__icon-preview': true,
          'plover-dashboard__icon-preview-selected': selected && selected.indexOf(icon) !== -1
        }),
        onClick: () => onSelectChange && onSelectChange(icon)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "plover-dashboard__icon-preview-svg",
        dangerouslySetInnerHTML: {
          __html: icon.svg
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "plover-dashboard__icon-preview-label"
      }, icon.name));
    });
  })), footer && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-list-footer"
  }, footer));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/ImportIconsModal.jsx":
/*!**************************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/ImportIconsModal.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImportIconsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AddNewLibrary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddNewLibrary */ "./static/scripts/block-extensions/icon-library/components/AddNewLibrary.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api */ "./static/scripts/block-extensions/icon-library/api/index.js");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */





/**
 * Internal dependencies.
 */


function ImportIconsModal({
  icons,
  collection,
  onImported
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isProcessing, setIsProcessing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [imported, setImported] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [selectedLibrary, selectLibrary] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const closeModel = () => isProcessing ? null : setIsOpen(false);
  const openModel = () => setIsOpen(true);
  const {
    showTimeoutNotice,
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__.useNotices)();
  const {
    addIconsToLibrary
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('plover/icon-libraries');
  const {
    libraries
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const libraries = select('plover/icon-libraries').getLibraries();
    const sameNameLibrary = libraries.find(({
      name
    }) => {
      return name.trim().toLocaleLowerCase() === collection.title.trim().toLocaleLowerCase();
    });
    if (sameNameLibrary) {
      selectLibrary(sameNameLibrary.id);
    } else if (libraries.length > 0) {
      selectLibrary(libraries[0].id);
    }
    return {
      libraries
    };
  }, [collection.slug]);

  /**
   * Handle chunk batch request.
   *
   * @param request
   */
  const batchRequestHandler = request => {
    request.catch(showTimeoutErrorResponse).then(({
      responses
    }) => {
      const icons = [];
      for (const {
        status,
        body
      } of responses) {
        setImported(imported => imported + 1);

        // Error status.
        if (status < 200 || status >= 300) {
          return showTimeoutErrorResponse(body);
        }
        icons.push(body);
      }
      addIconsToLibrary(selectedLibrary, icons);
    });
  };

  /**
   * Do create icons.
   */
  const handleImport = () => {
    if (!selectedLibrary) {
      showTimeoutNotice('error', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Invalid library.', 'plover-kit'));
      return;
    }
    setImported(0);
    setIsProcessing(true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.resolveSelect)('plover/icon-libraries').getBatchLimit().catch(showTimeoutErrorResponse).then(limit => {
      (0,_plover_api__WEBPACK_IMPORTED_MODULE_7__.batchApiRequest)(limit, icons, (0,_api__WEBPACK_IMPORTED_MODULE_10__.createIconRequestGenerator)(selectedLibrary), batchRequestHandler).then(() => {
        onImported && onImported();
        setIsProcessing(false);
      }).finally(() => {
        closeModel();
      });
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    isDismissible: !isProcessing,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: the count of icons. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Import %s icon to library', 'Import %s icons to library', icons.length, 'plover-kit'), icons.length),
    onRequestClose: closeModel,
    size: "medium",
    style: {
      '--plover-dashboard-control-max-width': '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Notices, {
    extraNotices: libraries.length > 0 ? [] : [{
      status: 'warning',
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No available libraries, please create one first.', 'plover-kit')
    }]
  }), isProcessing ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_6__.ProgressBar, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Importing: ', 'plover-kit'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, imported, "/", icons.length))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Select, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a library to add', 'plover-kit'),
    value: selectedLibrary,
    options: libraries.map(({
      id,
      name
    }) => {
      return {
        label: name,
        value: id
      };
    }),
    onChange: library => selectLibrary(library),
    __nextHasNoMarginBottom: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddNewLibrary__WEBPACK_IMPORTED_MODULE_9__.AddNewLibrary, {
    initialLibraryName: collection.title,
    onLibraryAdded: ({
      id
    }) => {
      selectLibrary(id);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '24px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    spinner: isProcessing,
    disabled: isProcessing,
    onClick: handleImport
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import icons to library', 'plover-kit'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_5__.Button, {
    disabled: icons.length === 0,
    onClick: openModel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import to library', 'plover-kit')));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/NoContent.jsx":
/*!*******************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/NoContent.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies.
 */

const imgurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwYAAAECCAMAAABzFjDZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURfT09vT09v////T09vT09vT09vT09vT09vT09vf3+PT09vz8/Pj4+fT09vT09vT09vT09vT09v////T09vT09vT09vf3+P////j4+fT09vT09vT09vT09vT09vT09vT09vT09vv7/PT09vr6+/T09vT09v////T09vr6+vT09vT09v////T09vr6+/////T09vT09vr6+/f3+P////T09vj4+f////T09vT09vT09v////////////T09vT09vT09vT09v////////////T09vT09v////T09vT09vT09vT09vv7/PT09vT09vT09vT09vf3+P////T09vT09vT09v////T09vT09vT09v////T09vT09v////////T09vT09vX19v////T09vT09v////X19v////T09vT09vT09v////T09vT09vT09vT09vT09vT09vT09vT09v////////////T09v////////T09v////T09vT09vj4+fT09vT09vf3+f////T09vT09vT09vT09v////T09vj4+fT09vT09v////////////T09vT09v////T09v////X09v////T09v////////////////T09v////////////////////////////////////////////////////////////////////////T09v////////////////T09v////////////////////T09v////T09v///////0JJT////////////////////////0FITv///0FHTqSnq/X09D9GTPT09D9GTU9VWz9FTDxDSkBGTWxyd6eqrkZMU5ebn2pwdW5zeGtvdaeqroKGip+ipj1ESkNJUN3e4Kyvs2xxd6irr7q8wNrb3snMz21xd93e4ZicoOHi5FdcYubn6aSnrN/f4s/R1Obm6cbIy9bX25aann+EidLT1tfZ3Pb29/v7+/v7+/v7++fo6tfY2/n5+fv7+8zO0tnb3fv7+/////v7+yHPEAoAAAEAdFJOUzBULDE/LlApNxc2DB48OzRFLCknS0ETJg9DI+RHJpxNkxxIGPRZUJAhu8hMUh8w3l0g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';
function NoContent({
  title,
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-library-no-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imgurl,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon library background', 'plover-kit')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-library-no-content-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), children));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/components/UploadIconsForm.jsx":
/*!*************************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/components/UploadIconsForm.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadIconsForm: () => (/* binding */ UploadIconsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _DragAndDropUpload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DragAndDropUpload */ "./static/scripts/block-extensions/icon-library/components/DragAndDropUpload.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api */ "./static/scripts/block-extensions/icon-library/api/index.js");

/**
 * WordPress dependencies.
 */





/**
 * Plover dependencies.
 */






/**
 * Internal dependencies.
 */


function UploadIconsForm({
  library,
  onUploaded,
  onRequestClose
}) {
  const [uploading, setUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    showTimeoutNotice,
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_8__.useNotices)();
  const {
    addIconsToLibrary
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('plover/icon-libraries');
  const handleUploadSvgs = files => {
    setUploading(true);

    /**
     * Handle chunk batch request.
     *
     * @param request
     */
    const batchRequestHandler = request => {
      request.catch(showTimeoutErrorResponse).then(({
        responses
      }) => {
        const icons = [];
        for (const {
          status,
          body
        } of responses) {
          // Error status.
          if (status < 200 || status >= 300) {
            return showTimeoutErrorResponse(body);
          }
          icons.push(body);
        }
        addIconsToLibrary(library, icons);
      });
    };
    (0,_plover_utils__WEBPACK_IMPORTED_MODULE_5__.readFilesSync)(files).then(results => {
      const icons = results.map(({
        file,
        content
      }) => {
        const name = file.name.trim().replace('.svg', '');
        return {
          name: name,
          slug: name,
          tags: [],
          svg: content
        };
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.resolveSelect)('plover/icon-libraries').getBatchLimit().catch(showTimeoutErrorResponse).then(limit => {
        (0,_plover_api__WEBPACK_IMPORTED_MODULE_7__.batchApiRequest)(limit, icons, (0,_api__WEBPACK_IMPORTED_MODULE_11__.createIconRequestGenerator)(library), batchRequestHandler).then(() => {
          onUploaded && onUploaded();
        }).finally(() => {
          setUploading(false);
        });
      });
    }).catch(err => {
      showTimeoutNotice('error', err.message);
      setUploading(false);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, uploading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    isDismissible: false,
    onRequestClose: () => null,
    size: "medium"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_9__.Notices, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_6__.ProgressBar, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Uploading...', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DragAndDropUpload__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "files[]",
    accept: "image/svg+xml",
    onFilesChange: handleUploadSvgs,
    onRequestClose: onRequestClose,
    isDismissible: !uploading,
    instruction: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload icons', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Accept formats: .svg', 'plover-kit')))
  }));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/entry.jsx":
/*!****************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/entry.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./static/scripts/block-extensions/icon-library/layout/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./static/scripts/block-extensions/icon-library/store/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./static/scripts/block-extensions/icon-library/style.scss");

/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */



(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('plover.dashboard.modulePlaceholderControl', 'plover-kit/with-icon-library', function (Control, {
  id,
  module
}) {
  if (module !== 'plover_icon_library' || id !== 'icon_library') {
    return Control;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout__WEBPACK_IMPORTED_MODULE_2__.Container, null);
});

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/layout/Container.jsx":
/*!***************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/layout/Container.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./static/scripts/block-extensions/icon-library/layout/Sidebar.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./static/scripts/block-extensions/icon-library/layout/Content.jsx");

/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */


function Container() {
  const [current, setCurrent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    type: null,
    payload: null
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-library-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-library-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
    current: current,
    onChange: setCurrent
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__icon-library-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Content__WEBPACK_IMPORTED_MODULE_3__.Content, {
    current: current,
    onChange: setCurrent
  })));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/layout/Content.jsx":
/*!*************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/layout/Content.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_IconLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IconLibrary */ "./static/scripts/block-extensions/icon-library/components/IconLibrary.jsx");
/* harmony import */ var _components_IconCollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconCollection */ "./static/scripts/block-extensions/icon-library/components/IconCollection.jsx");
/* harmony import */ var _components_NoContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NoContent */ "./static/scripts/block-extensions/icon-library/components/NoContent.jsx");

/**
 * WordPress dependencies.
 */


/**
 * Plover dependencies.
 */


/**
 * Internal dependencies.
 */



function Content({
  current,
  onChange
}) {
  let component = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NoContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the icons on your site', 'plover-kit')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    href: "https://wpplover.com/docs/plover-kit/modules/icon-library/",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read Documentation', 'plover-kit')));
  if (current && current.type === 'ICON_LIBRARY') {
    component = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconLibrary__WEBPACK_IMPORTED_MODULE_3__.IconLibrary, {
      library: current.payload,
      onDeleted: () => onChange({
        type: null,
        payload: null
      })
    });
  }
  if (current && current.type === 'ICON_COLLECTION') {
    component = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconCollection__WEBPACK_IMPORTED_MODULE_4__.IconCollection, {
      collection: current.payload
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_2__.Notices, null), component);
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/layout/Sidebar.jsx":
/*!*************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/layout/Sidebar.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AddNewLibrary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddNewLibrary */ "./static/scripts/block-extensions/icon-library/components/AddNewLibrary.jsx");

/**
 * WordPress dependencies.
 */






/**
 * Plover dependencies
 */


/**
 * Internal dependencies.
 */

function Sidebar({
  current,
  onChange
}) {
  const [loadingCollections, setLoadingCollections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [loadingLibraries, setLoadingLibraries] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    showTimeoutErrorResponse
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_6__.useNotices)();
  const onLibrarySelect = id => {
    onChange({
      type: 'ICON_LIBRARY',
      payload: id
    });
  };
  const onCollectionSelect = slug => {
    onChange({
      type: 'ICON_COLLECTION',
      payload: slug
    });
  };
  const isCurrentLibrary = id => {
    if (!current) {
      return false;
    }
    return current.type === 'ICON_LIBRARY' && current.payload === id;
  };
  const isCurrentCollection = slug => {
    if (!current) {
      return false;
    }
    return current.type === 'ICON_COLLECTION' && current.payload === slug;
  };
  const {
    libraries,
    collections
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getLibraries,
      getCollections
    } = select('plover/icon-libraries');
    const libraries = getLibraries();
    const collections = getCollections();
    return {
      libraries,
      collections
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setLoadingCollections(true);
    setLoadingLibraries(true);
    const {
      getLibraries,
      getCollections
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)('plover/icon-libraries');
    getLibraries().catch(showTimeoutErrorResponse).finally(() => {
      setLoadingLibraries(false);
    });
    getCollections().catch(showTimeoutErrorResponse).finally(() => {
      setLoadingCollections(false);
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__navigation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__menu-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "plover-dashboard__menu-group-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Created libraries', 'plover-kit')), loadingLibraries && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null), libraries.map(({
    id,
    name,
    slug,
    count
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: slug,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'plover-dashboard__menu-item': true,
      'plover-dashboard__active-menu-item': isCurrentLibrary(id)
    }),
    onClick: () => onLibrarySelect(id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__menu-badge"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, count)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__menu-extra-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AddNewLibrary__WEBPACK_IMPORTED_MODULE_7__.AddNewLibrary, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__menu-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "plover-dashboard__menu-group-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Available collections', 'plover-kit')), loadingCollections && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null), collections.map(({
    slug,
    count,
    title,
    premium
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: slug,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'plover-dashboard__menu-item': true,
      'plover-dashboard__active-menu-item': isCurrentCollection(slug)
    }),
    onClick: () => onCollectionSelect(slug)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__menu-badge"
  }, premium && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "plover-dashboard__icon-library-primary-badge"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('premium', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, count)))))));
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/layout/index.js":
/*!**********************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/layout/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   Content: () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_2__.Content),
/* harmony export */   Sidebar: () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./static/scripts/block-extensions/icon-library/layout/Container.jsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./static/scripts/block-extensions/icon-library/layout/Sidebar.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./static/scripts/block-extensions/icon-library/layout/Content.jsx");




/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/store/icon-libraries.js":
/*!******************************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/store/icon-libraries.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plover/api */ "@plover/api");
/* harmony import */ var _plover_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plover_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./static/scripts/block-extensions/icon-library/api/index.js");


const DEFAULT_STATE = {
  collections: [],
  libraries: [],
  library_icons: {},
  collection_icons: {},
  batch_limit: 25
};
const actions = {
  fetchLibrariesFromAPI() {
    return {
      type: 'FETCH_LIBRARIES_FROM_API'
    };
  },
  fetchCollectionsFromAPI() {
    return {
      type: 'FETCH_COLLECTIONS_FROM_API'
    };
  },
  fetchIconsFromLibrary(library) {
    return {
      type: 'FETCH_ICONS_FROM_LIBRARY',
      library
    };
  },
  fetchIconsFromCollection(collection) {
    return {
      type: 'FETCH_ICONS_FROM_COLLECTION',
      collection
    };
  },
  setLibraryIcons(library, icons) {
    return {
      type: 'SET_LIBRARY_ICONS',
      library,
      icons
    };
  },
  addIconsToLibrary(library, icons) {
    return {
      type: 'ADD_ICONS_TO_LIBRARY',
      library,
      icons
    };
  },
  removeIconsFromLibrary(library, icons) {
    return {
      type: 'REMOVE_ICONS_FROM_LIBRARY',
      library,
      icons
    };
  },
  setCollectionIcons(collection, {
    icons
  }) {
    return {
      type: 'SET_COLLECTION_ICONS',
      collection,
      icons
    };
  },
  setLibraries: libraries => {
    return {
      type: 'SET_ICON_LIBRARIES',
      libraries
    };
  },
  setCollections: collections => {
    return {
      type: 'SET_ICON_COLLECTIONS',
      collections
    };
  },
  addLibrary: library => {
    return {
      type: 'ADD_ICON_LIBRARY',
      library
    };
  },
  removeLibrary: library => {
    return {
      type: 'REMOVE_ICON_LIBRARY',
      library
    };
  },
  getBatchLimit() {
    return {
      type: 'GET_BATCH_LIMIT'
    };
  },
  setBatchLimit(limit) {
    return {
      type: 'SET_BATCH_LIMIT',
      limit
    };
  }
};
const storeOptions = {
  name: 'plover/icon-libraries',
  options: {
    reducer(state = DEFAULT_STATE, action) {
      switch (action.type) {
        case 'SET_BATCH_LIMIT':
          {
            return {
              ...state,
              batch_limit: action.limit
            };
          }
        case 'SET_ICON_LIBRARIES':
          {
            return {
              ...state,
              libraries: action.libraries
            };
          }
        case 'ADD_ICON_LIBRARY':
          {
            return {
              ...state,
              libraries: [action.library, ...state.libraries]
            };
          }
        case 'REMOVE_ICON_LIBRARY':
          {
            return {
              ...state,
              libraries: state.libraries.filter(({
                id
              }) => id !== action.library),
              library_icons: {
                ...state.library_icons,
                [action.library]: []
              }
            };
          }
        case 'SET_ICON_COLLECTIONS':
          {
            return {
              ...state,
              collections: action.collections
            };
          }
        case 'SET_LIBRARY_ICONS':
          {
            return {
              ...state,
              library_icons: {
                ...state.library_icons,
                [action.library]: action.icons
              }
            };
          }
        case 'ADD_ICONS_TO_LIBRARY':
          {
            var _state$library_icons$;
            return {
              ...state,
              libraries: state.libraries.map(library => {
                if (library.id === action.library) {
                  return {
                    ...library,
                    count: library.count + action.icons.length
                  };
                }
                return library;
              }),
              library_icons: {
                ...state.library_icons,
                [action.library]: [...action.icons, ...((_state$library_icons$ = state.library_icons[action.library]) !== null && _state$library_icons$ !== void 0 ? _state$library_icons$ : [])]
              }
            };
          }
        case 'REMOVE_ICONS_FROM_LIBRARY':
          {
            var _state$library_icons$2;
            return {
              ...state,
              libraries: state.libraries.map(library => {
                if (library.id === action.library) {
                  return {
                    ...library,
                    count: library.count - action.icons.length
                  };
                }
                return library;
              }),
              library_icons: {
                ...state.library_icons,
                [action.library]: ((_state$library_icons$2 = state.library_icons[action.library]) !== null && _state$library_icons$2 !== void 0 ? _state$library_icons$2 : []).filter(({
                  id
                }) => {
                  return action.icons.indexOf(id) === -1;
                })
              }
            };
          }
        case 'SET_COLLECTION_ICONS':
          {
            return {
              ...state,
              collection_icons: {
                ...state.collection_icons,
                [action.collection]: action.icons.map(({
                  n,
                  s,
                  t
                }) => {
                  return {
                    name: n,
                    svg: s,
                    tags: t !== null && t !== void 0 ? t : []
                  };
                })
              }
            };
          }
      }
      return state;
    },
    actions,
    selectors: {
      getLibraries(state) {
        return state.libraries;
      },
      getLibrary(state, id) {
        return state.libraries.find(lib => lib.id === id);
      },
      getCollections(state) {
        return state.collections.sort((l, r) => {
          if (l?.premium !== r?.premium) {
            return l?.premium ? 1 : -1;
          }
          return l.title.localeCompare(r.title);
        });
      },
      getLibraryIcons(state, library) {
        return state.library_icons[library];
      },
      getCollectionIcons(state, collection) {
        return state.collection_icons[collection];
      },
      getBatchLimit(state) {
        return state.batch_limit;
      }
    },
    controls: {
      FETCH_LIBRARIES_FROM_API() {
        return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchIconLibraries)();
      },
      FETCH_COLLECTIONS_FROM_API() {
        return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchIconCollections)();
      },
      FETCH_ICONS_FROM_LIBRARY({
        library
      }) {
        return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchIconsFromLibrary)(library);
      },
      FETCH_ICONS_FROM_COLLECTION({
        collection
      }) {
        return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchIconsFromCollection)(collection);
      },
      GET_BATCH_LIMIT() {
        return (0,_plover_api__WEBPACK_IMPORTED_MODULE_0__.fetchBatchOptions)();
      }
    },
    resolvers: {
      *getLibraries() {
        const data = yield actions.fetchLibrariesFromAPI();
        return actions.setLibraries(data);
      },
      *getCollections() {
        const data = yield actions.fetchCollectionsFromAPI();
        return actions.setCollections(data);
      },
      *getLibraryIcons(library) {
        const data = yield actions.fetchIconsFromLibrary(library);
        return actions.setLibraryIcons(library, data);
      },
      *getCollectionIcons(collection) {
        const data = yield actions.fetchIconsFromCollection(collection);
        return actions.setCollectionIcons(collection, data);
      },
      *getBatchLimit() {
        const data = yield actions.getBatchLimit();
        return actions.setBatchLimit(data.endpoints[0].args.requests.maxItems);
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeOptions);

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/store/index.js":
/*!*********************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/store/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_libraries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-libraries */ "./static/scripts/block-extensions/icon-library/store/icon-libraries.js");


if (_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_icon_libraries__WEBPACK_IMPORTED_MODULE_1__["default"].name, _icon_libraries__WEBPACK_IMPORTED_MODULE_1__["default"].options));
} else {
  // WP 5.4 - WP5.6
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_icon_libraries__WEBPACK_IMPORTED_MODULE_1__["default"].name, _icon_libraries__WEBPACK_IMPORTED_MODULE_1__["default"].options);
}

/***/ }),

/***/ "./static/scripts/block-extensions/icon-library/style.scss":
/*!*****************************************************************!*\
  !*** ./static/scripts/block-extensions/icon-library/style.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@plover-kit/data":
/*!*************************************!*\
  !*** external ["ploverKit","data"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["ploverKit"]["data"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

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
/******/ 			"icon-library": 0,
/******/ 			"./style-icon-library": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-icon-library"], () => (__webpack_require__("./static/scripts/block-extensions/icon-library/entry.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map