/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/block-extensions/code-snippets/components/CodeSnippetEditor.js":
/*!***************************************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/components/CodeSnippetEditor.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeSnippetEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/codemirror */ "@wordpress/codemirror");
/* harmony import */ var _wordpress_codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_codemirror__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ "./static/scripts/block-extensions/code-snippets/components/Loading.js");
/* harmony import */ var _hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/use-code-snippets-route */ "./static/scripts/block-extensions/code-snippets/hooks/use-code-snippets-route.js");
/* harmony import */ var _DeleteCodeSnippetAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DeleteCodeSnippetAction */ "./static/scripts/block-extensions/code-snippets/components/DeleteCodeSnippetAction.js");

/**
 * WordPress dependencies.
 */







/**
 * Plover dependencies
 */





/**
 * Internal dependencies
 */



function CodeSnippetEditor({
  snippetId
}) {
  const defaultSnippet = {
    id: null,
    title: '',
    location: 'header',
    priority: 'normal',
    exclude: {
      post_types: [],
      authors: [],
      posts: []
    },
    status: true
  };
  const [snippet, setSnippet] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultSnippet);
  const [saving, setSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [content, setContent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    toSnippetEditor,
    toSnippetList
  } = (0,_hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_12__.useCodeSnippetsRoute)();
  const {
    showTimeoutNotice
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_9__.useNotices)();
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getLastEntitySaveError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    hasFinishedResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    if (!snippetId) {
      return {
        snippet: defaultSnippet,
        hasFinishedResolution: true
      };
    }
    const {
      getEntityRecord,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const selectorArgs = ['postType', 'plover_code_snippet', snippetId];
    const record = getEntityRecord(...selectorArgs);
    if (record) {
      setContent(record?.content?.raw);
      setSnippet({
        id: record?.id,
        title: record?.title?.raw,
        location: record?.meta?.plover_kit_code_snippet_location,
        priority: record?.meta?.plover_kit_code_snippet_priority,
        exclude: record?.meta?.plover_kit_code_snippet_exclude || defaultSnippet.exclude,
        status: record?.status === 'publish'
      });
    }
    return {
      hasFinishedResolution: hasFinishedResolution('getEntityRecord', selectorArgs)
    };
  }, [snippetId]);
  const saveSnippet = async () => {
    setSaving(true);
    const dispatcherArgs = ['postType', 'plover_code_snippet', {
      id: snippet?.id,
      title: snippet?.title,
      meta: {
        plover_kit_code_snippet_location: snippet?.location,
        plover_kit_code_snippet_priority: snippet?.priority,
        plover_kit_code_snippet_exclude: snippet?.exclude || defaultSnippet.exclude
      },
      status: snippet?.status ? 'publish' : 'draft',
      content
    }];
    const savedRecord = await saveEntityRecord(...dispatcherArgs);
    if (savedRecord) {
      toSnippetEditor(savedRecord?.id || '');
      showTimeoutNotice('success', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The code snippet is saved.', 'plover-kit'));
    } else {
      // We use the selector directly to get the error at this point in time.
      const lastError = getLastEntitySaveError(...dispatcherArgs);
      const message = (lastError?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There was an error.', 'plover-kit')) + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Please refresh the page and try again.', 'plover-kit');
      showTimeoutNotice('error', message);
    }
    setSaving(false);
  };
  if (!hasFinishedResolution) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-code"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_7__.CodeEditor, {
    value: content,
    height: '720px',
    mode: 'htmlmixed',
    codeMirrorProps: {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Code gose here...', 'plover-kit')
    },
    onChange: code => {
      setContent(code);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "plover-dashboard__code-snippet-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Snippet Name', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.TextInput, {
    id: 'plover-dashboard__code-snippet-title',
    value: snippet?.title,
    onChange: value => {
      setSnippet({
        ...snippet,
        title: value
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "plover-dashboard__code-snippet-location"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Location', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.Select, {
    label: null,
    value: snippet?.location,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Header', 'plover-kit'),
      value: 'header'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Footer', 'plover-kit'),
      value: 'footer'
    }],
    onChange: value => {
      setSnippet({
        ...snippet,
        location: value
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "plover-dashboard__code-snippet-priority"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Priority', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Used to specify the order in which code snippets are output, the higher the priority the earlier they are output.', 'plover')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.Select, {
    label: null,
    value: snippet?.priority,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Very High', 'plover-kit'),
      value: 'very_high'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('High', 'plover-kit'),
      value: 'high'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'plover-kit'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Low', 'plover-kit'),
      value: 'low'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Very Low', 'plover-kit'),
      value: 'very_low'
    }],
    onChange: value => {
      setSnippet({
        ...snippet,
        priority: value
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.applyFilters)('plover.codeSnippet.editorMetaGroups', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_7__.Tips, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s is the premium text and link. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to %s to access these features:', 'plover'), '<a href="' + (0,_plover_utils__WEBPACK_IMPORTED_MODULE_10__.upsell_url)() + '">' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Premium', 'plover') + '</a>')
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude by post types', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude by author', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude by posts, pages or products', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shortcode or snippet block for individual pages or posts', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wpplover.com/docs/plover-kit/modules/code-snippets/",
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Learn More ↗', 'plover-kit'))), {
    snippet,
    setSnippet
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "plover-dashboard__code-snippet-status"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.Switch, {
    value: snippet?.status,
    onChange: value => {
      setSnippet({
        ...snippet,
        status: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.Button, {
    disabled: saving,
    spinner: saving,
    onClick: saveSnippet
  }, saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving', 'plover-kit') : snippet?.id ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update', 'plover-kit') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'plover-kit'))), snippet?.id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-editor-meta-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteCodeSnippetAction__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: snippet?.id,
    title: snippet?.title,
    onDeleted: toSnippetList
  }, ({
    openModel
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "link",
    status: "danger",
    onClick: openModel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete This Snippet', 'plover'))))));
}

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/components/CodeSnippetList.js":
/*!*************************************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/components/CodeSnippetList.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeSnippetList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plover/utils */ "@plover/utils");
/* harmony import */ var _plover_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plover_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loading */ "./static/scripts/block-extensions/code-snippets/components/Loading.js");
/* harmony import */ var _hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-code-snippets-route */ "./static/scripts/block-extensions/code-snippets/hooks/use-code-snippets-route.js");
/* harmony import */ var _DeleteCodeSnippetAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeleteCodeSnippetAction */ "./static/scripts/block-extensions/code-snippets/components/DeleteCodeSnippetAction.js");

/**
 * WordPress dependencies
 */






/**
 * Plover dependencies
 */




/**
 * Internal dependencies
 */



function TableHeader({
  sorting,
  onSort
}) {
  const handleSortChange = (ev, orderby) => {
    ev.preventDefault();
    let order = 'desc';
    if (sorting?.orderby === orderby) {
      order = sorting?.order === 'desc' ? 'asc' : 'desc';
    }
    onSort({
      order,
      orderby
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "id-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: 'sortable',
    onClick: ev => handleSortChange(ev, 'id')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicators"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator asc",
    "aria-hidden": "true"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator desc",
    "aria-hidden": "true"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "status-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "title-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: 'sortable',
    onClick: ev => handleSortChange(ev, 'title')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Snippet Name', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicators"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator asc",
    "aria-hidden": "true"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator desc",
    "aria-hidden": "true"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "shortcode-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shortcode', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "priority-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Priority', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "location-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Location', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "date-col",
    onClick: ev => handleSortChange(ev, 'date')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: 'sortable'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicators"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator asc",
    "aria-hidden": "true"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sorting-indicator desc",
    "aria-hidden": "true"
  })))));
}
function TableRow({
  snippet,
  handleEdit
}) {
  const {
    showTimeoutNotice
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__.useNotices)();
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    getLastEntitySaveError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(snippet?.status === 'publish');
  const updateSnippetStatus = async status => {
    setStatus(status);
    const dispatcherArgs = ['postType', 'plover_code_snippet', {
      id: snippet?.id,
      title: snippet?.title?.raw,
      meta: snippet?.meta,
      status: status ? 'publish' : 'draft'
    }];
    const savedRecord = await saveEntityRecord(...dispatcherArgs);
    if (savedRecord) {
      showTimeoutNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The "%s" is %s.', 'plover-kit'), snippet?.title?.raw, status ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enabled', 'plover-kit') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disabled', 'plover-kit')));
    } else {
      // We use the selector directly to get the error at this point in time.
      const lastError = getLastEntitySaveError(...dispatcherArgs);
      const message = (lastError?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There was an error.', 'plover-kit')) + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Please refresh the page and try again.', 'plover-kit');
      showTimeoutNotice('error', message);
    }
  };
  const trans_meta_value = meta => {
    return meta.replaceAll('_', ' ').replaceAll('-', ' ');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "plover-dashboard__code-snippet-table-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "id-col"
  }, snippet?.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "status-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Switch, {
    value: status,
    onChange: status => updateSnippetStatus(status)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "title-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, snippet?.title?.raw), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "edit"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      handleEdit();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit', 'plover-kit'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " | "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "delete"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteCodeSnippetAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: snippet?.id,
    title: snippet?.title?.rendered
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "shortcode-col"
  }, (0,_plover_utils__WEBPACK_IMPORTED_MODULE_8__.is_premium)() ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "[plover-code-snippet id=\"", snippet?.id, "\"]") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: '_blank',
    href: (0,_plover_utils__WEBPACK_IMPORTED_MODULE_8__.upsell_url)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to Premium', 'plover'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "priority-col meta-value"
  }, trans_meta_value(snippet?.meta?.plover_kit_code_snippet_priority || 'normal')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "location-col meta-value"
  }, trans_meta_value(snippet?.meta?.plover_kit_code_snippet_location || 'header')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "date-col"
  }, new Date(snippet?.date).toLocaleString()));
}
function TableNav({
  currentPage,
  setCurrentPage,
  totalItems,
  totalPages,
  search,
  onSearch
}) {
  // const [bulkAction, setBulkAction] = useState('-1');
  const [searchKey, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(search);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-table-nav"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "actions"
  }, onSearch && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SearchControl, {
    __nextHasNoMarginBottom: true,
    className: "plover-dashboard__control",
    value: searchKey,
    onChange: setSearch
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    onClick: () => onSearch(searchKey)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search Snippets', 'plover-kit')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pages"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, totalItems, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Items', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "pagination"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "ghost",
    disabled: currentPage <= 1,
    onClick: () => setCurrentPage(1)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xAB"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First page', 'plover-kit')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "ghost",
    disabled: currentPage <= 1,
    onClick: () => setCurrentPage(currentPage - 1)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u2039"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous page', 'plover-kit')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, currentPage, " of ", totalPages), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "ghost",
    disabled: currentPage >= totalPages,
    onClick: () => setCurrentPage(currentPage + 1)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u203A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next page', 'plover-kit')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "ghost",
    disabled: currentPage >= totalPages,
    onClick: () => setCurrentPage(totalPages)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xBB"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last page', 'plover-kit')))))));
}
function CodeSnippetList() {
  const {
    paged,
    order,
    orderby,
    toSnippetList,
    toSnippetEditor
  } = (0,_hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_10__.useCodeSnippetsRoute)();
  const [searchKey, setSearchKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const sorting = {
    order: order || 'desc',
    orderby: orderby || 'date'
  };
  const {
    records,
    hasResolved,
    totalPages,
    totalItems
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityRecords)('postType', 'plover_code_snippet', {
    status: 'draft,publish',
    offset: Math.max(0, ((paged || 1) - 1) * 10),
    per_page: 10,
    search: searchKey,
    ...sorting
  });
  if (!hasResolved) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }
  if (!records || records.length <= 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "plover-dashboard__code-snippet-no-snippets"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Snippets', 'plover-kit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: () => toSnippetEditor('')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New Snippet', 'plover-kit')));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableNav, {
    totalItems: totalItems,
    totalPages: totalPages,
    currentPage: paged || 1,
    setCurrentPage: page => toSnippetList(page),
    search: searchKey,
    onSearch: keyword => setSearchKey(keyword)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-table-list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableHeader, {
    sorting: sorting,
    onSort: ({
      order,
      orderby
    }) => toSnippetList(paged, order, orderby)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, records.map(snippet => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableRow, {
      key: snippet?.id,
      snippet: snippet,
      handleEdit: () => {
        toSnippetEditor(snippet?.id);
      }
    });
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableHeader, {
    sorting: sorting,
    onSort: ({
      order,
      orderby
    }) => toSnippetList(paged, order, orderby)
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableNav, {
    totalItems: totalItems,
    totalPages: totalPages,
    currentPage: paged || 1,
    setCurrentPage: page => toSnippetList(page)
  }));
}

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/components/DeleteCodeSnippetAction.js":
/*!*********************************************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/components/DeleteCodeSnippetAction.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteCodeSnippetAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plover-kit/data */ "@plover-kit/data");
/* harmony import */ var _plover_kit_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__);

/**
 * WordPress dependencies
 */






/**
 * Plover dependencies.
 */


function DeleteCodeSnippetAction({
  id,
  title,
  children,
  onDeleted
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isDeleting, setIsDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const closeModel = () => setIsOpen(false);
  const openModel = () => setIsOpen(true);
  const {
    showTimeoutNotice
  } = (0,_plover_kit_data__WEBPACK_IMPORTED_MODULE_7__.useNotices)();
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getLastEntityDeleteError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const doDelete = async () => {
    setIsDeleting(true);
    const success = await deleteEntityRecord('postType', 'plover_code_snippet', id);
    if (success) {
      showTimeoutNotice('success', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The code snippet is deleted!', 'plover-kit'));
    } else {
      // We use the selector directly to get the error at this point in time.
      const lastError = getLastEntityDeleteError('postType', 'plover_code_snippet', id);
      const message = (lastError?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('There was an error.', 'plover-kit')) + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Please refresh the page and try again.', 'plover-kit');
      showTimeoutNotice('error', message);
    }
    setIsDeleting(false);
    closeModel();
    onDeleted && onDeleted();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    size: "medium",
    onRequestClose: closeModel,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %s: The name of code snippet. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete %s?', 'plover-kit'), title)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %s: The name of code snippet. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you sure you want to delete "%s"? This operation is not reversible.', 'plover-kit'), title)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_6__.Button, {
    spinner: isDeleting,
    disabled: isDeleting,
    status: "danger",
    onClick: doDelete
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Yes, please delete it.', 'plover-kit'))), children ? children({
    openModel
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      openModel();
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete', 'plover-kit'))));
}

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/components/Loading.js":
/*!*****************************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/components/Loading.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plover/components */ "@plover/components");
/* harmony import */ var _plover_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plover_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


/**
 * Plover dependencies
 */

function Loading({
  label
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippet-loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_components__WEBPACK_IMPORTED_MODULE_2__.ProgressBar, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading', 'plover-kit')));
}

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/entry.jsx":
/*!*****************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/entry.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plover-kit/dashboard */ "@plover-kit/dashboard");
/* harmony import */ var _plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./static/scripts/block-extensions/code-snippets/style.scss");
/* harmony import */ var _components_CodeSnippetList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CodeSnippetList */ "./static/scripts/block-extensions/code-snippets/components/CodeSnippetList.js");
/* harmony import */ var _components_CodeSnippetEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CodeSnippetEditor */ "./static/scripts/block-extensions/code-snippets/components/CodeSnippetEditor.js");
/* harmony import */ var _hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/use-code-snippets-route */ "./static/scripts/block-extensions/code-snippets/hooks/use-code-snippets-route.js");

/**
 * WordPress dependencies.
 */



/**
 * Plover dependencies
 */


/**
 * Internal dependencies.
 */




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('plover.dashboard.modulePlaceholderControl', 'plover-kit/with-code-snippets-editor', function (Control, {
  id,
  module
}) {
  if (module !== 'plover_code_snippets' || id !== 'code_snippets_editor') {
    return Control;
  }
  const {
    isEditor,
    snippetId
  } = (0,_hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_7__.useCodeSnippetsRoute)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippets-module"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Notices, null), isEditor ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CodeSnippetEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    snippetId: snippetId
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CodeSnippetList__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('plover.dashboard.moduleSettingsHeader', 'plover-kit/with-code-snippets-module-header', function (Control, {
  module
}) {
  if (module !== 'plover_code_snippets') {
    return Control;
  }
  const {
    isEditor,
    back,
    toSnippetEditor
  } = (0,_hooks_use_code_snippets_route__WEBPACK_IMPORTED_MODULE_7__.useCodeSnippetsRoute)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plover-dashboard__code-snippets-module-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "plover-dashboard__back",
    href: "#",
    onClick: e => {
      e.preventDefault();
      back();
    }
  }, "\u2190"), "\xA0\xA0", isEditor ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Code Snippet Editor', 'plover-kit') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Code Snippets', 'plover-kit')), !isEditor && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plover_kit_dashboard__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => toSnippetEditor()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add New Snippet', 'plover-kit')));
});

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/hooks/use-code-snippets-route.js":
/*!****************************************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/hooks/use-code-snippets-route.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCodeSnippetsRoute: () => (/* binding */ useCodeSnippetsRoute)
/* harmony export */ });
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hash-route */ "./node_modules/react-hash-route/lib/index.js");
/* harmony import */ var react_hash_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hash_route__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const build_route = params => {
  return Object.keys(params).map(k => {
    const v = params[k];
    return v !== undefined ? `${k}/${v}` : null;
  }).filter(i => i !== null).join('/');
};
function useCodeSnippetsRoute() {
  const hash = (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.getHash)();
  const [module, ...params] = (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.getHashParameters)();
  const editorIndex = params.indexOf('edit-snippet');
  const pagedIndex = params.indexOf('paged');
  const orderIndex = params.indexOf('order');
  const orderbyIndex = params.indexOf('orderby');
  const order = orderIndex !== -1 ? params[orderIndex + 1] : undefined;
  const orderby = orderbyIndex !== -1 ? params[orderbyIndex + 1] : undefined;
  let snippetId = Number.parseInt(editorIndex !== -1 ? params[editorIndex + 1] : null);
  let paged = Number.parseInt(pagedIndex !== -1 ? params[pagedIndex + 1] : undefined);
  snippetId = isNaN(snippetId) ? null : snippetId;
  paged = isNaN(paged) ? undefined : paged;
  return {
    isEditor: editorIndex !== -1,
    snippetId: snippetId,
    paged: paged,
    order,
    orderby,
    back: () => {
      if (editorIndex !== -1) {
        return (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.route)(build_route({
          [hash]: module,
          paged,
          order,
          orderby
        }));
      }
      return (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.route)('');
    },
    toSnippetList: (page = paged, sort = order, sortBy = orderby) => {
      return (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.route)(build_route({
        [hash]: module,
        paged: page,
        order: sort,
        orderby: sortBy
      }));
    },
    toSnippetEditor: (id = snippetId) => {
      return (0,react_hash_route__WEBPACK_IMPORTED_MODULE_0__.route)(build_route({
        [hash]: module,
        paged,
        order,
        orderby,
        'edit-snippet': id || ''
      }));
    }
  };
}

/***/ }),

/***/ "./static/scripts/block-extensions/code-snippets/style.scss":
/*!******************************************************************!*\
  !*** ./static/scripts/block-extensions/code-snippets/style.scss ***!
  \******************************************************************/
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

/***/ "@wordpress/codemirror":
/*!************************************!*\
  !*** external ["wp","codemirror"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["codemirror"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

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
/******/ 			"code-snippets": 0,
/******/ 			"./style-code-snippets": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-code-snippets"], () => (__webpack_require__("./static/scripts/block-extensions/code-snippets/entry.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map