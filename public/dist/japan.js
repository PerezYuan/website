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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var uploader = __webpack_require__(12); /**
	                                            * @author perezyuan.
	                                            * @time 2016/12/19.
	                                            * @desc 照片墙核心逻辑
	                                            */
	
	(function ($) {
	    $('#st-stack').stackslider();
	
	    var $overlay = $('.overlay');
	    $('.J-upload-open').on('click', function () {
	        $overlay.show();
	    });
	
	    $('.J-upload-close').on('click', function () {
	        $overlay.hide();
	    });
	
	    $('#checkLove').on('click', function () {
	        var answer = $('input[name=answer]').val().trim();
	        if (answer === '') {
	            alert('请输入一生所爱~');
	        } else {
	            $.ajax({
	                url: '/ajax/checklove',
	                type: 'post',
	                data: 'answer=' + answer,
	                dataType: 'json',
	                async: false,
	                success: function success(res) {
	                    if (res.code == 1) {
	                        new uploader({
	                            url: '/ajax/upload',
	                            multiple: true,
	                            type: ['jpg', 'png'],
	                            onProgress: function onProgress(event) {
	                                var pre = Math.floor(100 * event.loaded / event.total);
	                                console.log(pre);
	                            }
	                        });
	                    } else {
	                        alert(res.msg);
	                    }
	                }
	            });
	        }
	    });
	})($);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./japan.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./japan.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: 700;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: 700;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  line-height: 1.1;\n  font-weight: 500;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small {\n  font-weight: 400;\n  line-height: 1;\n  color: #999;\n}\nh1,\nh2,\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh4,\nh5,\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.unstyled,\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n  margin-bottom: 0;\n}\n.inline,\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-bottom: 0;\n  margin-left: -5px;\n}\n.inline > li,\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.inline li,\n.list-inline li {\n  *display: inline;\n  *zoom: 1;\n  _padding-left: 5px;\n  _padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.5;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-left: 0;\n}\nimg {\n  vertical-align: top;\n  -ms-interpolation-mode: bicubic;\n}\n:focus {\n  outline: 0;\n}\n.reset,\n.reset p,\n.reset ul,\n.reset ol,\n.reset li,\n.reset dl,\n.reset dt,\n.reset dd,\n.reset h1,\n.reset h2,\n.reset h3,\n.reset h4,\n.reset h5,\n.reset h6,\n.reset form,\n.reset fieldset,\n.reset legend,\n.reset input,\n.reset select,\n.reset textarea,\n.reset button,\n.reset blockquote,\n.reset address,\n.reset pre {\n  margin: 0;\n  padding: 0;\n}\n.reset h1,\n.reset h2,\n.reset h3,\n.reset h4,\n.reset h5,\n.reset h6,\n.reset input,\n.reset textarea,\n.reset select,\n.reset label {\n  font-size: 100%;\n}\n.reset ul,\n.reset ol {\n  list-style: none;\n}\n.reset textarea {\n  resize: none;\n}\nul,\nol {\n  padding: 0;\n  margin: 0;\n}\nli {\n  list-style: none;\n}\ndl {\n  margin: 0;\n}\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\np {\n  margin: 0;\n}\nem,\ni {\n  font-style: normal;\n}\nbody {\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #333;\n  background-color: #fff;\n}\na {\n  color: #555;\n  text-decoration: none;\n}\na:hover {\n  color: #ff9400;\n  text-decoration: underline;\n}\n.primary {\n  color: #ff9400;\n}\n.highlight,\na.highlight {\n  color: #d9534f;\n}\n.gray,\na.gray {\n  color: #999;\n}\n.blue,\na.blue {\n  color: #5bc0de;\n}\n.yahei {\n  font-family: \"Microsoft YaHei\", sans-serif;\n}\n.simsun {\n  font-family: simsun, serif;\n}\n.split {\n  display: inline-block;\n  padding: 0 5px;\n  color: #eee;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n  display: inline;\n}\n.hide-txt {\n  visibility: hidden;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.hide {\n  display: none;\n}\n.invisible {\n  visibility: hidden;\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n@font-face {\n  font-family: 'icomoon';\n  src: url(" + __webpack_require__(5) + ");\n  src: url(" + __webpack_require__(5) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(6) + "#icomoon) format('svg'), url(" + __webpack_require__(7) + ") format('woff'), url(" + __webpack_require__(8) + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n.js .st-stack-raw {\n  display: none;\n}\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family: \"Microsoft YaHei\", Calibri, Arial, sans-serif;\n  background: #ffa3c0 url(" + __webpack_require__(9) + ");\n  font-weight: 400;\n  font-size: 15px;\n  color: #333;\n}\na {\n  color: #555;\n  text-decoration: none;\n}\n.container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.clr {\n  clear: both;\n  padding: 0;\n  height: 0;\n  margin: 0;\n}\n.main {\n  width: 80%;\n  max-width: 1100px;\n  margin: 10% auto 0;\n  position: relative;\n  padding: 0 30px 50px 30px;\n}\n.container > header {\n  padding: 30px;\n}\n.container > header h1 {\n  font-size: 34px;\n  line-height: 38px;\n  margin: 0;\n  font-weight: 700;\n  color: #dc4e2a;\n  float: left;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);\n}\n.container > header h1 span {\n  display: block;\n  font-size: 20px;\n  font-weight: 300;\n  color: #fff;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n.container > header p {\n  float: right;\n  padding-top: 10px;\n  color: #dc4e2a;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);\n}\n.main p {\n  text-align: center;\n  padding-top: 60px;\n  color: #a07419;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);\n}\n/* Header Style */\n.codrops-top {\n  line-height: 24px;\n  font-size: 11px;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  z-index: 9999;\n  position: relative;\n  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.codrops-top a {\n  padding: 0px 10px;\n  letter-spacing: 1px;\n  color: #333;\n  display: inline-block;\n}\n.codrops-top a:hover {\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n}\n.codrops-top span.right {\n  float: right;\n}\n.codrops-top span.right a {\n  float: left;\n  display: block;\n}\n/* Demo Buttons Style */\n.codrops-demos {\n  float: right;\n  padding-top: 10px;\n}\n.codrops-demos a {\n  display: inline-block;\n  margin: 10px;\n  color: #666;\n  font-weight: 700;\n  line-height: 30px;\n  border-bottom: 4px solid transparent;\n}\n.codrops-demos a:hover {\n  color: #000;\n  border-color: #000;\n}\n.codrops-demos a.current-demo,\n.codrops-demos a.current-demo:hover {\n  color: #aaa;\n  border-color: #aaa;\n}\n.support-note {\n  clear: both;\n}\n.support-note span {\n  color: #ac375d;\n  font-size: 16px;\n  display: none;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n}\n.st-wrapper {\n  width: 100%;\n  height: 500px;\n  position: relative;\n  margin: 0 auto;\n  -webkit-perspective: 1200px;\n  -webkit-perspective-origin: 50% 100%;\n  -moz-perspective: 1200px;\n  -moz-perspective-origin: 50% 100%;\n  -o-perspective: 1200px;\n  -o-perspective-origin: 50% 100%;\n  -ms-perspective: 1200px;\n  -ms-perspective-origin: 50% 100%;\n  perspective: 1200px;\n  perspective-origin: 50% 100%;\n}\n.st-stack {\n  position: absolute;\n  height: 10px;\n  bottom: 0px;\n  background-image: url(" + __webpack_require__(10) + ");\n  background-image: -webkit-linear-gradient(top, #fff 50%, #e7ae38 50%);\n  background-image: linear-gradient(to bottom, #fff 50%, #e7ae38 50%);\n  background-size: 5px 5px;\n  background-position: bottom center;\n}\n.st-stack:before {\n  content: '';\n  position: absolute;\n  width: 140%;\n  left: -20%;\n  bottom: -10px;\n  height: 20px;\n  z-index: -1;\n  background: -webkit-radial-gradient(center, ellipse cover, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 60%);\n  background: radial-gradient(center, ellipse cover, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 60%);\n}\n.st-stack-left {\n  left: 0px;\n}\n.st-stack-right {\n  right: 0px;\n}\n.st-wrapper .st-title,\n.st-wrapper nav {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.st-wrapper .st-title {\n  padding: 0 10% 60px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.st-wrapper .st-title h2 {\n  padding: 0 20px;\n  font-size: 28px;\n  color: #dc4e2a;\n  font-weight: 400;\n  letter-spacing: 3px;\n  font-family: 'Englebert', Arial, sans-serif;\n  line-height: 38px;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);\n}\n.st-wrapper .st-title h3 {\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.st-wrapper nav span {\n  color: transparent;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: 50%;\n  bottom: 0;\n  cursor: pointer;\n}\n.st-wrapper nav span:first-child {\n  margin-left: -45px;\n}\n.st-wrapper nav span:last-child {\n  margin-left: 5px;\n}\n.st-wrapper nav span:before {\n  font-family: 'icomoon';\n  font-style: normal;\n  speak: none;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 40px;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  color: #fff;\n  background: #ffcd80;\n  border-radius: 50%;\n  cursor: pointer;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n.st-wrapper nav span:first-child:before {\n  content: \"L\";\n}\n.st-wrapper nav span:last-child:before {\n  content: \"R\";\n}\n.st-wrapper nav span:hover:before {\n  color: #dc4e2a;\n}\n.st-wrapper .st-item {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.st-wrapper .st-item.st-center {\n  -webkit-transform: rotateZ(0deg) rotateY(0deg);\n  transform: rotateZ(0deg) rotateY(0deg);\n}\n.st-wrapper .st-item.st-right,\n.st-wrapper .st-item.st-rightflow {\n  opacity: 0;\n  -webkit-transform: rotateZ(90deg) rotateY(-90deg);\n  transform: rotateZ(90deg) rotateY(-91deg);\n  pointer-events: none;\n}\n.st-wrapper .st-item.st-left,\n.st-wrapper .st-item.st-leftflow {\n  opacity: 0;\n  -webkit-transform: rotateZ(-90deg) rotateY(90deg);\n  transform: rotateZ(-90deg) rotateY(91deg);\n  pointer-events: none;\n}\n.st-wrapper .st-item.st-rightflow,\n.st-wrapper .st-item.st-leftflow,\n.st-wrapper .st-item.st-center {\n  opacity: 1;\n}\n.st-wrapper .st-item img {\n  border: none;\n  max-width: 100%;\n  display: block;\n  background: #fff;\n  box-shadow: 0 0 0 9px #fff, 0 1px 3px 9px rgba(0, 0, 0, 0.3);\n}\n@media screen and (max-width: 1310px) {\n  .st-wrapper .st-item {\n    width: 300px;\n  }\n  .st-wrapper {\n    height: 460px;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .st-wrapper .st-item {\n    width: 260px;\n  }\n  .st-wrapper {\n    height: 380px;\n  }\n}\n@media screen and (max-width: 935px) {\n  .st-wrapper .st-item {\n    width: 240px;\n  }\n  .st-wrapper {\n    height: 380px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .st-wrapper .st-item {\n    width: 220px;\n  }\n  .st-wrapper .st-title {\n    bottom: 280px;\n  }\n  .st-wrapper {\n    height: 420px;\n  }\n}\n@media screen and (max-width: 740px) {\n  .st-wrapper .st-item {\n    width: 200px;\n  }\n  .st-wrapper .st-title {\n    bottom: 240px;\n  }\n  .st-wrapper {\n    height: 370px;\n  }\n}\n@media screen and (max-width: 650px) {\n  .st-stack {\n    display: none;\n  }\n  .st-wrapper nav {\n    bottom: 220px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .st-wrapper .st-item {\n    width: 200px;\n  }\n  .st-wrapper .st-title {\n    bottom: 150px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .st-wrapper .st-title h2 {\n    font-size: 22px;\n    line-height: 32px;\n  }\n  .st-wrapper nav {\n    bottom: 140px;\n  }\n  .st-wrapper {\n    height: 300px;\n  }\n}\n.upload-open {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  border: none;\n  outline: none;\n  width: 90px;\n  height: 90px;\n  background: transparent;\n  border-radius: 45px;\n  box-shadow: 0 0 0 9px #fff, 0 1px 3px 9px rgba(0, 0, 0, 0.3);\n}\n.upload-open img {\n  display: block;\n  margin: 0 auto;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n}\n.upload-open:hover img {\n  transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n  -moz-transform: rotate(360deg);\n}\n.overlay {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n}\n.japan-pop {\n  width: 500px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -250px;\n  margin-top: -100px;\n  background-color: #fff;\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  overflow: hidden;\n  text-align: center;\n}\n.japan-pop p {\n  color: #666;\n  font-size: 16px;\n  margin-top: 30px;\n}\n.japan-panel {\n  margin-top: 15px;\n}\n.japan-panel input {\n  padding: 10px 15px;\n  text-align: center;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  outline: none;\n  border: 1px solid #eee;\n}\n.japan-panel input:focus {\n  border: 1px solid #fca5c0;\n}\n.japan-pop button {\n  border: none;\n  outline: none;\n  background-color: #fca5c0;\n  width: 130px;\n  height: 30px;\n  color: #fff;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  margin-top: 20px;\n  font-size: 16px;\n}\n.japan-pop a {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  color: #333;\n  font-size: 28px;\n  text-decoration: none;\n}\n.japan-pop a:hover {\n  color: #999;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/99581373b82a09242dc59903422e9ebf.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/efad468192a1adc786360805f2eb75b6.svg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/bec7efb5a03e73655a8016381bff6255.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/a9669516c3388855b4497c70530b4524.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/abd66a57a9098174d110630aeb86cfe0.png";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAFCAYAAAHpv1aHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi/PDhw38GIAAIIEYYAyCAGP//B9NwABBAcBkMWYAAQpFBBwABhFOSCacOdJthACDA8NpDsmn4AABDtSLbt0u3cAAAAABJRU5ErkJggg=="

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author perezyuan.
	 * @time 2017/01/18.
	 * @desc 上传组件.
	 */
	
	function uploader(option) {
	    this.config = {
	        // 上传的路由
	        url: '',
	        // 上传的种类
	        type: ['jpg', 'png'],
	        // 最大上传限制
	        maxSize: 10,
	        // 是否允许一次上传多个
	        multiple: false,
	        // 上传之前
	        beforeSend: function beforeSend() {
	            console.log("开始上传...");
	        },
	
	        // 上传成功回调
	        callback: function callback(res) {
	            console.log(res);
	        },
	        onProgress: function onProgress(res) {
	            console.log(res);
	        }
	    };
	    this.init(option);
	}
	
	uploader.prototype = {
	    init: function init(option) {
	        var me = this,
	            config = option || {};
	        me.config = $.extend(this.config, config);
	        me.createElem();
	    },
	    createElem: function createElem() {
	        var me = this,
	            $up = this.$el = $('<input>');
	        $up.prop({
	            id: 'uploader',
	            type: 'file',
	            name: 'file',
	            multiple: this.config.multiple ? true : false
	        });
	        $up.click();
	        $up.on('change', $.proxy(me.changeFile, me));
	    },
	    changeFile: function changeFile() {
	        var fd = new FormData(),
	            me = this,
	            files = me.$el[0].files;
	        if (Object.prototype.toString.call(me.config.beforeSend) === '[object Function]') {
	            if (me.config.beforeSend(me.$el) === false) {
	                return false;
	            }
	        }
	        for (var i = 0, ii = files.length; i < ii; i++) {
	            // 判断文件大小
	            if (files[i].size > me.config.maxSize * 1024 * 1024) {
	                alert('请上传小于' + me.config.maxSize + 'M的文件');
	                return false;
	            }
	            var type = files[i].name.split('.').pop();
	            if (me.config.type.indexOf(type.toLocaleLowerCase()) == -1) {
	                alert("暂不支持该类型的文件，请重新选择!");
	                return false;
	            }
	            fd.append('file' + i, files[i]);
	        }
	        $.ajax({
	            type: "post",
	            url: "/ajax/upload",
	            data: fd,
	            // 取消数据预处理
	            processData: false,
	            // 自动加上正确的Content-Type
	            contentType: false,
	            xhr: function xhr() {
	                var xhr = $.ajaxSettings.xhr();
	                if (Object.prototype.toString.call(me.config.onProgress) === '[object Function]' && xhr.upload) {
	                    xhr.upload.addEventListener("progress", me.config.onProgress, false);
	                    return xhr;
	                }
	            }
	        });
	    }
	};
	
	module.exports = uploader;

/***/ }
/******/ ]);
//# sourceMappingURL=japan.js.map