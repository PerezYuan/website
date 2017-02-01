/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author perezyuan.
	 * @time 2016/12/31.
	 * @desc 上传到excel
	 */
	
	(function () {
	    var $btn = $('.excel-submit'),
	        $infoForm = $('#excelForm'),
	        $loading = $('.excel-wrap');
	    $btn.on('click', function () {
	        $loading.show();
	        var _data = $infoForm.serialize();
	        $.ajax({
	            url: '/ajax/inputInfo',
	            type: 'post',
	            data: _data,
	            success: function success(res) {
	                if (res.state == 1) {
	                    alert('提交成功!');
	                    window.location.reload();
	                } else {
	                    alert(res.msg);
	                    $loading.hide();
	                }
	            }
	        });
	    });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=excel.js.map