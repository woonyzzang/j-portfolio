function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _container_App_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @container/App.controller */
    "./src/app/container/App.controller.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts"); // import { AppRouterModule } from './app.router.module'; // 라우터


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_container_App_controller__WEBPACK_IMPORTED_MODULE_6__["AppController"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_container_App_controller__WEBPACK_IMPORTED_MODULE_6__["AppController"], _components__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["LicensesComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["TechniqueComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["WorkbenchComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["DevelopmentComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_container_App_controller__WEBPACK_IMPORTED_MODULE_6__["AppController"], _components__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["LicensesComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["TechniqueComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["WorkbenchComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["DevelopmentComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_container_App_controller__WEBPACK_IMPORTED_MODULE_6__["AppController"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Blog/Blog.controller.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/Blog/Blog.controller.ts ***!
    \****************************************************/

  /*! exports provided: BlogController */

  /***/
  function srcAppComponentsBlogBlogControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogController", function () {
      return BlogController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var BlogController =
    /*#__PURE__*/
    function () {
      function BlogController() {
        _classCallCheck(this, BlogController);

        this.faNewspaper = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faNewspaper"];
      }

      _createClass(BlogController, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogController;
    }();

    BlogController.ɵfac = function BlogController_Factory(t) {
      return new (t || BlogController)();
    };

    BlogController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogController,
      selectors: [["app-blog"]],
      decls: 15,
      vars: 1,
      consts: [["id", "blog", 1, "blog"], [3, "icon"], ["href", "#", "rel", "noopener", "target", "_blank"], [1, "inr"]],
      template: function BlogController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "j dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "q");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "github \uBC0F hexo \uAE30\uBC18\uC73C\uB85C \uC815\uC801 \uD15C\uD50C\uB9BF\uC744 \uD65C\uC6A9\uD574\uC11C \uC81C\uC791\uD55C \uAC1C\uC778 \uBE14\uB85C\uADF8 \uC785\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uC6F9 \uAC1C\uBC1C\uC2DC \uD504\uB860\uD2B8\uC5D4\uB4DC \uBC0F \uBC31 \uC5D4\uB4DC \uAE30\uC220 \uACF5\uC720 \uBAA9\uC801\uC73C\uB85C \uBC14\uD0D5\uC73C\uB85C \uC804\uBC18\uC801\uC73C\uB85C \uB9C8\uD06C\uC5C5 / UI\uAC1C\uBC1C \uC2DC \uC2E4\uBB34\uC5D0 \uB3C4\uC6C0\uC774 \uB420 \uB9CC\uD55C \uC774\uC288\uB098 \uD301 \uB4F1\uC758 \uCEE8\uD150\uCE20\uB4E4\uC774 \uC8FC\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC73C\uBA70 \uAC1C\uC778\uC801\uC73C\uB85C \uAD00\uC2EC\uC788\uB294 \uB514\uC790\uC778\uC774\uB098 \uC11C\uBC84\uC5D0 \uB300\uD55C \uCEE8\uD150\uCE20\uB4E4\uB3C4 \uAE30\uC7AC \uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faNewspaper);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: [".blog[_ngcontent-%COMP%] {\n  padding: 6rem 18rem 14rem 9rem;\n  background-color: #b10058;\n  color: #fff; }\n  .blog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 4rem;\n    font-weight: normal;\n    font-size: 2.2rem; }\n  .blog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      margin-left: 1rem;\n      font-size: inherit;\n      color: #fff; }\n  .blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 6rem;\n    font-size: 3rem;\n    text-transform: capitalize; }\n  .blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 1.6rem;\n    line-height: 1.8;\n    -webkit-text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);\n    text-shadow: 0 0 2px rgba(255, 255, 255, 0.2); }\n  .blog[_ngcontent-%COMP%]   q[_ngcontent-%COMP%]:before, .blog[_ngcontent-%COMP%]   q[_ngcontent-%COMP%]:after {\n    content: '\"'; }\n  .blog[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 3.5rem 0;\n    border-top: 1px solid #fff;\n    border-bottom: 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9CbG9nL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxCbG9nXFxibG9nLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9CbG9nL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcc2Nzc1xcX2RlcGVuZGVuY3lcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw4QkNFK0I7RUREL0IseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtFQUhmO0lBTVEsbUJDSDJCO0lESTNCLG1CQUFtQjtJQUNuQixpQkNMMkIsRUFBQTtFREhuQztNQVdZLGlCQ1J1QjtNRFN2QixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBO0VBYnZCO0lBa0JRLG1CQ2YyQjtJRGdCM0IsZUNoQjJCO0lEaUIzQiwwQkFBMEIsRUFBQTtFQXBCbEM7SUF3QlEsa0JDckIyQjtJRHNCM0IsZ0JBQWdCO0lDd0twQixxRER2S3dEO0lDd0t4RCw2Q0R4S3dELEVBQUE7RUExQjVEO0lBZ0NZLFlBQVksRUFBQTtFQWhDeEI7SUFxQ1EsZ0JBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmxvZy9ibG9nLnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ19kZXBlbmRlbmN5L3ZhcmlhYmxlJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvbWl4aW4nO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9wbGFjZWhvbGRlcic7XHJcblxyXG4uYmxvZyB7XHJcbiAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcig2KSB1bml0c0NvbnZlcnRlcigxOCkgdW5pdHNDb252ZXJ0ZXIoMTQpIHVuaXRzQ29udmVydGVyKDkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxMDA1ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bml0c0NvbnZlcnRlcig0KTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMi4yKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHVuaXRzQ29udmVydGVyKDYpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5pdHNDb252ZXJ0ZXIoMS42KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHQtc2hhZG93KDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikpO1xyXG4gICAgfVxyXG5cclxuICAgIHEge1xyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXCInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgICAgbWFyZ2luOiB1bml0c0NvbnZlcnRlcigzLjUpIDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.view.html',
          styleUrls: ['./blog.view.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Development/Development.controller.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/Development/Development.controller.ts ***!
    \******************************************************************/

  /*! exports provided: DevelopmentController */

  /***/
  function srcAppComponentsDevelopmentDevelopmentControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopmentController", function () {
      return DevelopmentController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_development_Development_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/development/Development.service */
    "./src/app/services/development/Development.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DevelopmentController_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dev_r44 = ctx.$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", dev_r44.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dev_r44.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r42.faExternalLinkAlt);
      }
    }

    function DevelopmentController_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ui_r45 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ui_r45.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ui_r45.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r43.faExternalLinkAlt);
      }
    }

    var DevelopmentController =
    /*#__PURE__*/
    function () {
      function DevelopmentController(developmentService) {
        _classCallCheck(this, DevelopmentController);

        this.developmentService = developmentService;
        this.faInbox = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInbox"];
        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExternalLinkAlt"];
        this.devs = this.developmentService.getDevs;
        this.uis = this.developmentService.getUIs;
      }

      _createClass(DevelopmentController, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DevelopmentController;
    }();

    DevelopmentController.ɵfac = function DevelopmentController_Factory(t) {
      return new (t || DevelopmentController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_development_Development_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
    };

    DevelopmentController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DevelopmentController,
      selectors: [["app-development"]],
      decls: 14,
      vars: 3,
      consts: [["id", "development", 1, "development"], [3, "icon"], [1, "inr"], [4, "ngFor", "ngForOf"], ["rel", "noopener", "target", "_blank", 3, "href"]],
      template: function DevelopmentController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "j Labs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DevelopmentController_li_9_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DevelopmentController_li_12_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uis);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".development[_ngcontent-%COMP%] {\n  padding: 6rem 18rem 14rem 9rem;\n  background-color: #3465aa;\n  color: #fff; }\n  .development[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 4rem;\n    font-weight: normal;\n    font-size: 2.2rem; }\n  .development[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 2.5rem;\n    font-size: 3rem;\n    text-transform: capitalize; }\n  .development[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 3.5rem 0;\n    border-top: 1px solid #fff;\n    border-bottom: 0; }\n  .development[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: right; }\n  .development[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      font-size: 1.3rem;\n      color: #fff;\n      text-transform: capitalize; }\n  .development[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        padding: 0 1rem;\n        background-color: #333; }\n  .development[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n      margin-top: 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9EZXZlbG9wbWVudC9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcRGV2ZWxvcG1lbnRcXGRldmVsb3BtZW50LnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9EZXZlbG9wbWVudC9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXHNjc3NcXF9kZXBlbmRlbmN5XFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksOEJDRStCO0VERC9CLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7RUFIZjtJQU1RLG1CQ0gyQjtJREkzQixtQkFBbUI7SUFDbkIsaUJDTDJCLEVBQUE7RURIbkM7SUFZUSxxQkNUMkI7SURVM0IsZUNWMkI7SURXM0IsMEJBQTBCLEVBQUE7RUFkbEM7SUFrQlEsZ0JBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQTtFQXBCeEI7SUF3QlEsZ0JDckIyQjtJRHNCM0IsaUJBQWlCLEVBQUE7RUF6QnpCO01BNEJZLGlCQ3pCdUI7TUQwQnZCLFdBQVc7TUFDWCwwQkFBMEIsRUFBQTtFQTlCdEM7UUFpQ2dCLGVDOUJtQjtRRCtCbkIsc0JBQXNCLEVBQUE7RUFsQ3RDO01Bd0NZLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvRGV2ZWxvcG1lbnQvZGV2ZWxvcG1lbnQudmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX2RlcGVuZGVuY3kvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9taXhpbic7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L3BsYWNlaG9sZGVyJztcclxuXHJcbi5kZXZlbG9wbWVudCB7XHJcbiAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcig2KSB1bml0c0NvbnZlcnRlcigxOCkgdW5pdHNDb252ZXJ0ZXIoMTQpIHVuaXRzQ29udmVydGVyKDkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NjVhYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bml0c0NvbnZlcnRlcig0KTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMi4yKTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5pdHNDb252ZXJ0ZXIoMi41KTtcclxuICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDMpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGhyIHtcclxuICAgICAgICBtYXJnaW46IHVuaXRzQ29udmVydGVyKDMuNSkgMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevelopmentController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-development',
          templateUrl: './development.view.html',
          styleUrls: ['./development.view.scss']
        }]
      }], function () {
        return [{
          type: _services_development_Development_service__WEBPACK_IMPORTED_MODULE_2__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Features/Features.controller.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/Features/Features.controller.ts ***!
    \************************************************************/

  /*! exports provided: FeaturesController */

  /***/
  function srcAppComponentsFeaturesFeaturesControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesController", function () {
      return FeaturesController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _libs_jquery_coveringBad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @libs/jquery.coveringBad */
    "./src/app/libs/jquery.coveringBad.js");
    /* harmony import */


    var _libs_jquery_coveringBad__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_libs_jquery_coveringBad__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var FeaturesController =
    /*#__PURE__*/
    function () {
      function FeaturesController() {
        _classCallCheck(this, FeaturesController);

        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"];
        this.faCogs = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCogs"];
        this.faChartBar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartBar"];
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMobileAlt"];
        this.faTabletAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTabletAlt"];
        this.faLaptop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLaptop"];
        this.faArrowsAltH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowsAltH"];
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"]; // console.log($);
      }

      _createClass(FeaturesController, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (!Object.is($, 'undefined')) {
          //     // jQuery is loaded => print the version
          //     alert($.fn.jquery);
          // } else {
          //     // jQuery was not loaded
          //     console.error('No jquery');
          // }
          // @ts-ignore
          jquery__WEBPACK_IMPORTED_MODULE_1__('.covered-first').coveringBad({
            marginX: 0,
            marginY: 23,
            setX: 150,
            setY: 200
          });
        }
      }]);

      return FeaturesController;
    }();

    FeaturesController.ɵfac = function FeaturesController_Factory(t) {
      return new (t || FeaturesController)();
    };

    FeaturesController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturesController,
      selectors: [["app-features"]],
      decls: 66,
      vars: 11,
      consts: [["id", "features", 1, "features"], [1, "lid-area"], [1, "lid", "first"], [1, "in"], [1, "stit"], [3, "icon"], [1, "stit", "v1"], ["href", "#", 1, "qusetion"], [1, "lid", "second"], [1, "lid", "third"], [1, "lid", "fourth"], ["data-passive", "/assets/img/@tmp_covering_a11.jpg", "data-active", "/assets/img/@tmp_covering_a1.jpg", 1, "covered", "covered-first"], [1, "handle"], [1, "fa", 3, "icon"], [1, "changeable"]],
      template: function FeaturesController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \uC6F9\uD45C\uC900 & \uC6F9\uC811\uADFC\uC131 \uC900\uC218");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\uC7A5\uC560\uC778\uCC28\uBCC4\uAE08\uC9C0\uBC95\uC774 \uC2DC\uD589\uB428\uC5D0 \uB530\uB77C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uAE30\uC5C5\uC758 \uC6F9\uC0AC\uC774\uD2B8 \uC811\uADFC\uC131 \uAD6C\uCD95\uC740 \uD544\uC218\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uC6F9\uC811\uADFC\uC131 \uAD6C\uCD95\uBD80\uD130 \uC778\uC99D\uD68D\uB4DD \uAE4C\uC9C0 \uAD00\uB828 \uC5C5\uBB34\uB97C \uC218\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \uC6F9 UI \uAC1C\uBC1C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Web UI Development Knowhow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \uC131\uB2A5 \uCD5C\uC801\uD654");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "site optimization Knowhow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\uC6F9 \uC11C\uBE44\uC2A4 \uADDC\uBAA8\uAC00 \uCEE4\uC9C0\uBA74 \uCEE4\uC9C8\uC218\uB85D \uC131\uB2A5 \uCD5C\uC801\uD654\uAC00 \uC911\uC694\uC2DC \uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uBAA8\uBC14\uC77C \uC11C\uBE44\uC2A4 \uB610\uD55C \uC774\uC81C \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uACE0\uAC1D\uCC44\uB110\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\uBC18\uC751\uD615\uC6F9, HTML5, jQuery \uB4F1 \uCD5C\uC801\uD654\uB41C \uBAA8\uBC14\uC77C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD55C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\uCD5C\uC801\uD654 \uAE30\uC220\uC740 \uBB3C\uB860, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC704\uD55C \uC120\uB3C4\uC801\uC778 \uAE30\uC220\uC744 \uD1B5\uD574");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uBCF4\uB2E4 \uC548\uC815\uD654\uB41C \uB192\uC740 \uD488\uC9C8 \uCF54\uB4DC \uD5A5\uC0C1\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uC57D\uC18D\uB4DC\uB9BD\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \uBC18\uC751\uD615 \uCEE8\uD150\uCE20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Responsive Contents Knowhow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\uB370\uC2A4\uD06C\uD0D1, \uC2A4\uB9C8\uD2B8\uD3F0, \uD0DC\uBE14\uB9BF\uC758 \uB2E4\uC591\uD55C \uD654\uBA74 \uC0AC\uC774\uC988 \uBCC0\uACBD\uC5D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\uB300\uC751\uD558\uB294 \uCEE8\uD150\uCE20\uB97C \uC81C\uC791\uD569\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uB178\uD558\uC6B0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cross-Browser optimizing Knowhow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCogs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChartBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMobileAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowsAltH);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTabletAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowsAltH);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLaptop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLaptop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronRight);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
      styles: [".features[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 80rem;\n  -webkit-text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2); }\n  .features[_ngcontent-%COMP%]   .lid-area[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 600rem;\n    height: 600rem;\n    margin: -300rem 0 0 -300rem;\n    background-color: #dc0030;\n    -webkit-transform: rotate(-20deg);\n    transform: rotate(-20deg); }\n  .features[_ngcontent-%COMP%]   .lid[_ngcontent-%COMP%] {\n    float: left;\n    position: relative;\n    width: 50%;\n    height: 50%; }\n  .features[_ngcontent-%COMP%]   .lid[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n      position: absolute; }\n  .features[_ngcontent-%COMP%]   .lid[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%] {\n      margin-top: 1.6rem; }\n  .features[_ngcontent-%COMP%]   .lid[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%]:first-child {\n        margin-top: 0; }\n  .features[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n    background-color: #dc0030;\n    color: #fff;\n    text-align: right; }\n  .features[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n      right: 0;\n      bottom: 0;\n      margin: 0 1.5rem 1.5rem 0; }\n  .features[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%] {\n      font-size: 2.8rem; }\n  .features[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.8rem; }\n  .features[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   a.qusetion[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin-top: 0.4rem;\n      padding: 0.5rem 1.4rem;\n      background-color: #fff;\n      font-weight: bold;\n      font-size: 2rem;\n      color: #dc0030;\n      vertical-align: top;\n      border-radius: 50%; }\n  .features[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n    background-color: #ff184a;\n    color: #fff; }\n  .features[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n      bottom: 0;\n      left: 0;\n      margin: 0 0 1.5rem 1.5rem; }\n  .features[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%] {\n      font-weight: normal;\n      font-size: 3rem; }\n  .features[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.6rem;\n      color: #fff; }\n  .features[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n    text-align: right;\n    background-color: #ff184a;\n    color: #fff; }\n  .features[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n      right: 0;\n      top: 0;\n      margin: 1.5rem 1.5rem 0 0; }\n  .features[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%] {\n      font-size: 2rem; }\n  .features[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.4rem;\n      color: #fff; }\n  .features[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%] {\n    background-color: #dc0030; }\n  .features[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 20%;\n      height: 15%;\n      margin: 1.5rem 0 0 1.5rem; }\n  .features[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%]   .stit[_ngcontent-%COMP%] {\n      font-size: 1.8rem;\n      color: #7b6700; }\n  \n  .covered[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-size: cover; }\n  .covered[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 4.6rem;\n    height: 4.6rem;\n    margin-top: -2.3rem;\n    margin-left: -2.3rem;\n    border-radius: 50%;\n    background-color: #fff;\n    text-align: center;\n    box-shadow: 1px 0 2px #333; }\n  .covered[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin: 1.4rem 0.1rem 0;\n      color: #000;\n      -webkit-transition: 0.1s ease-out;\n      transition: 0.1s ease-out; }\n  .covered[_ngcontent-%COMP%]   .handle.vertical[_ngcontent-%COMP%] {\n      -webkit-transform: rotate(90deg);\n      transform: rotate(90deg); }\n  .covered[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]:hover {\n      background-color: #555; }\n  .covered[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]:hover    > .fa[_ngcontent-%COMP%] {\n        color: #fff; }\n  .covered[_ngcontent-%COMP%]   .changeable[_ngcontent-%COMP%] {\n    background-size: cover; }\n  .covered[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%] {\n    background-color: #555;\n    cursor: move; }\n  .covered[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n      margin: 1.4rem 0.4rem 0;\n      color: #fff;\n      -webkit-transition: 0.1s ease-out;\n      transition: 0.1s ease-out; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcRmVhdHVyZXNcXGZlYXR1cmVzLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXHNjc3NcXF9kZXBlbmRlbmN5XFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQ0ErQjtFQThML0IsK0NEN0w4QztFQzhMOUMsdUNEOUw4QyxFQUFBO0VBSmxEO0lBT1Esa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUNQMkI7SURRM0IsY0NSMkI7SURTM0IsMkJDVDJCO0lEVTNCLHlCQUF5QjtJQ3lKN0IsaUNEeEpxQztJQzRKckMseUJENUpxQyxFQUFBO0VBZHpDO0lBa0JRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQXJCbkI7TUF3Qlksa0JBQWtCLEVBQUE7RUF4QjlCO01BNEJZLGtCQ3pCdUIsRUFBQTtFREhuQztRQStCZ0IsYUFBYSxFQUFBO0VBL0I3QjtJQXFDUSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBdkN6QjtNQTBDWSxRQUFRO01BQ1IsU0FBUztNQUNULHlCQUFtRCxFQUFBO0VBNUMvRDtNQWdEWSxpQkM3Q3VCLEVBQUE7RURIbkM7TUFvRFksaUJDakR1QixFQUFBO0VESG5DO01Bd0RZLHFCQUFxQjtNQUNyQixrQkN0RHVCO01EdUR2QixzQkN2RHVCO01Ed0R2QixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGVDMUR1QjtNRDJEdkIsY0FBYztNQUNkLG1CQUFtQjtNQ21DM0Isa0JEbENrQyxFQUFBO0VBaEV0QztJQXFFUSx5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBdEVuQjtNQXlFWSxTQUFTO01BQ1QsT0FBTztNQUNQLHlCQ3hFdUIsRUFBQTtFREhuQztNQStFWSxtQkFBbUI7TUFDbkIsZUM3RXVCLEVBQUE7RURIbkM7TUFvRlksaUJDakZ1QjtNRGtGdkIsV0FBVyxFQUFBO0VBckZ2QjtJQTBGUSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTtFQTVGbkI7TUErRlksUUFBUTtNQUNSLE1BQU07TUFDTix5QkFBbUQsRUFBQTtFQWpHL0Q7TUFxR1ksZUNsR3VCLEVBQUE7RURIbkM7TUF5R1ksaUJDdEd1QjtNRHVHdkIsV0FBVyxFQUFBO0VBMUd2QjtJQStHUSx5QkFBeUIsRUFBQTtFQS9HakM7TUFrSFksTUFBTTtNQUNOLE9BQU87TUFDUCxVQUFVO01BQ1YsV0FBVztNQUNYLHlCQ25IdUIsRUFBQTtFREhuQztNQTBIWSxpQkN2SHVCO01Ed0h2QixjQUFjLEVBQUE7RUFLMUIsYUFBQTtFQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VDMUJaLHNCRDJCOEIsRUFBQTtFQUpsQztJQU9RLGtCQUFrQjtJQUNsQixhQ3RJMkI7SUR1STNCLGNDdkkyQjtJRHdJM0IsbUJDeEkyQjtJRHlJM0Isb0JDekkyQjtJQStGL0Isa0JEMkM4QjtJQUMxQixzQkFBc0I7SUFDdEIsa0JBQW1CO0lBQ25CLDBCQUEwQixFQUFBO0VBZmxDO01Ba0JZLHFCQUFzQjtNQUN0Qix1QkFBaUQ7TUFDakQsV0FBWTtNQ0RwQixpQ0RFd0M7TUNFeEMseUJERndDLEVBQUE7RUFyQjVDO01DcUNJLGdDRFp3QztNQ2dCeEMsd0JEaEJ3QyxFQUFBO0VBekI1QztNQTZCWSxzQkFBc0IsRUFBQTtFQTdCbEM7UUFnQ2dCLFdBQVksRUFBQTtFQWhDNUI7SUN2Qkksc0JENkRrQyxFQUFBO0VBdEN0QztJQTBDUSxzQkFBc0I7SUFDdEIsWUFBYSxFQUFBO0VBM0NyQjtNQThDWSx1QkFBaUQ7TUFDakQsV0FBWTtNQzVCcEIsaUNENkJ3QztNQ3pCeEMseUJEeUJ3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9mZWF0dXJlcy52aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfZGVwZW5kZW5jeS92YXJpYWJsZSc7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L21peGluJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvcGxhY2Vob2xkZXInO1xyXG5cclxuLmZlYXR1cmVzIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDgwKTtcclxuICAgIEBpbmNsdWRlIHRleHQtc2hhZG93KDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMikpO1xyXG5cclxuICAgIC5saWQtYXJlYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogdW5pdHNDb252ZXJ0ZXIoNjAwKTtcclxuICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDYwMCk7XHJcbiAgICAgICAgbWFyZ2luOiB1bml0c0NvbnZlcnRlcigtMzAwKSAwIDAgdW5pdHNDb252ZXJ0ZXIoLTMwMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDAzMDtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKC0yMGRlZykpO1xyXG4gICAgfVxyXG5cclxuICAgIC5saWQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG5cclxuICAgICAgICAuaW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RpdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHVuaXRzQ29udmVydGVyKDEuNik7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMwMDMwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAuaW4ge1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgdW5pdHNDb252ZXJ0ZXIoMS41KSB1bml0c0NvbnZlcnRlcigxLjUpIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMi44KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDEuOCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhLnF1c2V0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlciguNCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKC41KSB1bml0c0NvbnZlcnRlcigxLjQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigyKTtcclxuICAgICAgICAgICAgY29sb3I6ICNkYzAwMzA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTg0YTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgLmluIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCB1bml0c0NvbnZlcnRlcigxLjUpIHVuaXRzQ29udmVydGVyKDEuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigxLjYpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaXJkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxODRhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAuaW4ge1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IHVuaXRzQ29udmVydGVyKDEuNSkgdW5pdHNDb252ZXJ0ZXIoMS41KSAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigxLjQpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvdXJ0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDAzMDtcclxuXHJcbiAgICAgICAgLmluIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiB1bml0c0NvbnZlcnRlcigxLjUpIDAgMCB1bml0c0NvbnZlcnRlcigxLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0aXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDEuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2I2NzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogPUNvdmVyZWQgKi9cclxuLmNvdmVyZWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLXNpemUoY292ZXIpO1xyXG5cclxuICAgIC5oYW5kbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogdW5pdHNDb252ZXJ0ZXIoNC42KTtcclxuICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDQuNik7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5pdHNDb252ZXJ0ZXIoLTIuMyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuaXRzQ29udmVydGVyKC0yLjMpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMnB4ICMzMzM7XHJcblxyXG4gICAgICAgID4gLmZhIHtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luIDogdW5pdHNDb252ZXJ0ZXIoMS40KSB1bml0c0NvbnZlcnRlciguMSkgMDtcclxuICAgICAgICAgICAgY29sb3IgOiAjMDAwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4xcyBlYXNlLW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnZlcnRpY2FsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSg5MGRlZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcblxyXG4gICAgICAgICAgICA+IC5mYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZWFibGUge1xyXG4gICAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQtc2l6ZShjb3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyYWdnYWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgICAgICBjdXJzb3IgOiBtb3ZlO1xyXG5cclxuICAgICAgICA+IC5mYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbiA6IHVuaXRzQ29udmVydGVyKDEuNCkgdW5pdHNDb252ZXJ0ZXIoLjQpIDA7XHJcbiAgICAgICAgICAgIGNvbG9yIDogI2ZmZjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMXMgZWFzZS1vdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-features',
          templateUrl: './features.view.html',
          styleUrls: ['./features.view.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Footer/Footer.controller.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/Footer/Footer.controller.ts ***!
    \********************************************************/

  /*! exports provided: FooterController */

  /***/
  function srcAppComponentsFooterFooterControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterController", function () {
      return FooterController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var FooterController =
    /*#__PURE__*/
    function () {
      function FooterController() {
        _classCallCheck(this, FooterController);

        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faPhoneSquareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhoneSquareAlt"];
        this.faLeaf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLeaf"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"];
      }

      _createClass(FooterController, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterController;
    }();

    FooterController.ɵfac = function FooterController_Factory(t) {
      return new (t || FooterController)();
    };

    FooterController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterController,
      selectors: [["app-footer"]],
      decls: 29,
      vars: 5,
      consts: [["id", "footer"], [1, "column"], [1, "col-inr"], [1, "email"], [1, "fa", 3, "icon"], ["href", "mailto://seungwoonjjang@gmail.com"], [1, "phone"], ["href", "tel:010-7757-7553"], [1, "copyright"], [1, "law"]],
      template: function FooterController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "seungwoonjjang@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "010-7757-7553");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "copyright \xA9 2020 J Portfolio all rights reserved. dev by woonyzzang");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " all designs are protected under copyright law and unauthorized use is strictly prohibited.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Imhak, Incheon, Gyeyang");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhoneSquareAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLeaf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInfoCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMapMarkerAlt);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["#footer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 15%;\n  background-color: #ffd500; }\n  #footer[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n    height: 100%; }\n  #footer[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    float: left;\n    width: 33.3%;\n    height: 100%;\n    padding: 25px 0; }\n  #footer[_ngcontent-%COMP%]   .col-inr[_ngcontent-%COMP%] {\n    padding: 0 25px; }\n  #footer[_ngcontent-%COMP%]   .col-inr[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .col-inr[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n      margin-top: 10px; }\n  #footer[_ngcontent-%COMP%]   .col-inr[_ngcontent-%COMP%]   .law[_ngcontent-%COMP%] {\n      font-weight: normal; }\n  #footer[_ngcontent-%COMP%]   .col-inr[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n      margin-right: 0.4rem; }\n  #footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXEZvb3RlclxcZm9vdGVyLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7RUFIN0I7SUFNUSxZQUFZLEVBQUE7RUFOcEI7SUFVUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVc7SUFDWCxlQUFlLEVBQUE7RUFidkI7SUFpQlEsZUFBZSxFQUFBO0VBakJ2Qjs7TUFxQlksZ0JBQWdCLEVBQUE7RUFyQjVCO01BeUJZLG1CQUFtQixFQUFBO0VBekIvQjtNQTZCWSxvQkMxQnVCLEVBQUE7RURIbkM7SUFrQ1EsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ19kZXBlbmRlbmN5L3ZhcmlhYmxlJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvbWl4aW4nO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9wbGFjZWhvbGRlcic7XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ1MDA7XHJcblxyXG4gICAgLmluciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1pbnIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbiAgICAgICAgLnBob25lLFxyXG4gICAgICAgIGFkZHJlc3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhdyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuaXRzQ29udmVydGVyKC40KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQCBNaXhpbnNcclxuLy8gdXNlOiBAaW5jbHVkZSB7e21peGluIG5hbWV9fVxyXG5cclxuQGZ1bmN0aW9uIHVuaXRzQ29udmVydGVyKCRudW0pIHtcclxuICAgIEBpZiAoJGZvbnRVbml0ICE9ICdyZW0nKSB7IC8vIHJlbeydtCDslYTri5Ag65WMXHJcbiAgICAgICAgQHJldHVybiAjeyRudW0gKiAkZGVmYXVsdEZvbnRTaXplfSN7JGZvbnRVbml0fTsgLy8gcHgsIHB0IOuTsSDsoIjrjIAg7IiY7LmYIOyCrOyaqVxyXG4gICAgfSBAZWxzZSB7IC8vIHJlbVxyXG4gICAgICAgIEByZXR1cm4gI3skbnVtfSN7JGZvbnRVbml0fTtcclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiAnJykgeyAgLy8gU3RyaW5nIFJlcGxhY2VcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICAgIEBpZiAoJGluZGV4KSB7XHJcbiAgICAgICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gd2ViLWZvbnRcclxuQG1peGluIHdlYi1mb250KCRuYW1lLCAkcGF0aCwgJHdlaWdodDogbnVsbCwgJHN0eWxlOiBudWxsLCAkZXh0czogZW90IHdvZmYyIHdvZmYgdHRmIHN2Zykge1xyXG4gICAgJHNyYzogbnVsbDtcclxuICAgICRleHRtb2RzOiAoZW90OiAnPycsIHN2ZzogJyMnICsgc3RyLXJlcGxhY2UoJG5hbWUsICcgJywgJ18nKSk7XHJcbiAgICAkZm9ybWF0czogKG90ZjogJ29wZW50eXBlJywgdHRmOiAndHJ1ZXR5cGUnKTtcclxuXHJcbiAgICBAZWFjaCAkZXh0IGluICRleHRzIHtcclxuICAgICAgICAkZXh0bW9kOiBpZihtYXAtaGFzLWtleSgkZXh0bW9kcywgJGV4dCksICRleHQgKyBtYXAtZ2V0KCRleHRtb2RzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJGZvcm1hdDogaWYobWFwLWhhcy1rZXkoJGZvcm1hdHMsICRleHQpLCBtYXAtZ2V0KCRmb3JtYXRzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJHNyYzogYXBwZW5kKCRzcmMsIHVybChxdW90ZSgkcGF0aCArICcuJyArICRleHRtb2QpKSBmb3JtYXQocXVvdGUoJGZvcm1hdCkpLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHF1b3RlKCRuYW1lKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IGF1dG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogJHN0eWxlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgICAgIHNyYzogbG9jYWwocXVvdGUoJG5hbWUpKSwgJHNyYztcclxuICAgIH1cclxufVxyXG5cclxuLy8gbWVkaWEtYnJlYWtwb2ludFxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICAgIEBpZiAoJHBvaW50ID09ICdwaG9uZScpIHsgLy9tb2JpbGVcclxuICAgICAgICAkcG9pbnQ6ICRwaG9uZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAnbW9iaWxlJykgeyAvL3RhYmxldFxyXG4gICAgICAgICRwb2ludDogJG1vYmlsZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAndGFibGV0JykgeyAvL2Rlc2NrdG9wXHJcbiAgICAgICAgJHBvaW50OiAkdGFibGV0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgI3skcG9pbnR9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYWRqdXN0LWxvY2F0aW9uXHJcbi8vQG1peGluIGFkanVzdC1sb2NhdGlvbigkeCwgJHkpIHtcclxuLy8gICAgQGlmIHVuaXRsZXNzKCR4KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHh9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHg6IDFweCAqICR4O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIEBpZiB1bml0bGVzcygkeSkge1xyXG4vLyAgICAgICAgQHdhcm4gXCJBc3N1bWluZyAjeyR5fSB0byBiZSBpbiBwaXhlbHNcIjtcclxuLy8gICAgICAgICR5OiAxcHggKiAkeTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OiR4O3RvcDogJHk7XHJcbi8vfVxyXG5cclxuLy8gZGlzcGxheVxyXG5AbWl4aW4gZGlzcGxheSgkdmFsKSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LSN7JHZhbH07XHJcbiAgICBkaXNwbGF5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4LWRpcmVjdGlvblxyXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4XHJcbkBtaXhpbiBmbGV4KCR2YWwpIHtcclxuICAgIC13ZWJraXQtZmxleDogJHZhbDtcclxuICAgIC1tcy1mbGV4OiAkdmFsO1xyXG4gICAgZmxleDogJHZhbDtcclxufVxyXG5cclxuLy8gdXNlci1zZWxlY3RcclxuQG1peGluIHVzZXItc2VsZWN0KCR2YWwpIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgdXNlci1zZWxlY3Q6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGJvcmRlci1yYWRpdXNcclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdmFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1zaXplXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1ncmFkaWVudFxyXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkZnJvbSwgJHRvKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxufVxyXG5cclxuLy8gb3BhY2l0eVxyXG5AbWl4aW4gb3BhY2l0eSgkdmFsKSB7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PSN7JHZhbCAqIDEwMH0pXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9I3skdmFsICogMTAwfSk7XHJcbiAgICBvcGFjaXR5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBrZXlmcmFtZXNcclxuQG1peGluIGtleWZyYW1lcygkbmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYW5pbWF0aW9uXHJcbkBtaXhpbiBhbmltYXRpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICR2YWw7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1vLWFuaW1hdGlvbjogJHZhbDtcclxuICAgIGFuaW1hdGlvbjogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNpdGlvblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1vLXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICB0cmFuc2l0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2xhdGUzZFxyXG5AbWl4aW4gdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm06ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1zdHlsZVxyXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG59XHJcblxyXG4vLyB0ZXh0LXNoYWRvd1xyXG5AbWl4aW4gdGV4dC1zaGFkb3coJHZhbCkge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHZhbDtcclxuICAgIHRleHQtc2hhZG93OiAkdmFsO1xyXG59XHJcblxyXG4vLyBlbGxpcHNpc1xyXG5AbWl4aW4gZWxsaXBzaXMoJGxpbmVzOiAxKSB7XHJcbiAgICBAaWYgKCRsaW5lcyA9PSAxKSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYm94O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLy8gW0ldIGhlaWdodCDqs7Xsi51cclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7JeG7J2E6rK97JqwOiAoKGZvbmN0LXNpemUgKiBsaW5lLWhlaWdodCkgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQg64uo7JyE6rCAIOyeiOydhOqyveyasDogKGxpbmUtaGVpZ2h0ICogLXdlYmtpdC1saW5lLWNsYW1wKVxyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.view.html',
          styleUrls: ['./footer.view.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Header/Header.controller.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/Header/Header.controller.ts ***!
    \********************************************************/

  /*! exports provided: HeaderController */

  /***/
  function srcAppComponentsHeaderHeaderControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderController", function () {
      return HeaderController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_header_Header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/header/Header.service */
    "./src/app/services/header/Header.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"); // import * as $ from 'jquery';


    function HeaderController_li_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderController_li_19_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.navClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gnbMenu_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gnbMenu_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", gnbMenu_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gnbMenu_r2.name);
      }
    }

    function HeaderController_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var utilMenu_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", utilMenu_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", utilMenu_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](utilMenu_r5.name);
      }
    }

    var HeaderController =
    /*#__PURE__*/
    function () {
      function HeaderController(headerService) {
        _classCallCheck(this, HeaderController);

        this.headerService = headerService;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.gnbMenus = this.headerService.getGnbMenus;
        this.utilMenus = this.headerService.getUtilMenus;
        this.resume = this.headerService.getResume;
      }
      /**
       * resumeClick
       * @description 네비게이션메뉴 클릭 이벤트 핸들러
       */


      _createClass(HeaderController, [{
        key: "navClick",
        value: function navClick() {
          // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
          var $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');
          $sections.forEach(function (section) {
            return section.classList.add('v1');
          });
        }
        /**
         * resumeClick
         * @description 이력서 클릭 이벤트 핸들러
         * @param {Event} e - 이벤트 객체
         */

      }, {
        key: "resumeClick",
        value: function resumeClick(e) {
          e.preventDefault(); // window.open($('#resume').attr('href'), 'resume', 'width=900, height=950');

          window.open(document.querySelector('#resume').getAttribute('href'), 'resume', 'width=900, height=950');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderController;
    }();

    HeaderController.ɵfac = function HeaderController_Factory(t) {
      return new (t || HeaderController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_Header_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
    };

    HeaderController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderController,
      selectors: [["app-header"]],
      decls: 31,
      vars: 6,
      consts: [["id", "header"], [1, "intro"], [1, "inr"], [1, "logo"], ["href", "/"], ["id", "gnb", 1, "gnb"], [4, "ngFor", "ngForOf"], ["role", "complementary", 1, "util"], ["rel", "noopener", "target", "_blank", "id", "resume", 1, "contact", 3, "href", "title", "click"], [3, "icon"], [3, "href", "title", "click"], ["rel", "noopener", "target", "_blank", 3, "href", "title"]],
      template: function HeaderController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "J");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Web Accessibility & Web Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Responsive And Mobile Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Web UI, UX Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Main Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderController_li_19_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Util Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "GET STARTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderController_li_26_Template, 3, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderController_Template_a_click_27_listener($event) {
            return ctx.resumeClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gnbMenus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.utilMenus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.resume.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.resume.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resume.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
      styles: ["#header[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   .util[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px; }\n\n#header[_ngcontent-%COMP%]:after, .util[_ngcontent-%COMP%]:after {\n  display: table;\n  content: '';\n  clear: both; }\n\n#header[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  width: 50%;\n  height: 100%; }\n\n#header[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n    float: left;\n    position: relative;\n    z-index: 20;\n    width: 60%;\n    height: 100%; }\n\n#header[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-weight: normal;\n      font-size: 8.6rem; }\n\n#header[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin-top: 1.6rem;\n      font-size: 3.2rem; }\n\n#header[_ngcontent-%COMP%]   .gnb[_ngcontent-%COMP%] {\n    float: left;\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    right: 0;\n    width: 40%;\n    height: 100%; }\n\n#header[_ngcontent-%COMP%]   .gnb.v1[_ngcontent-%COMP%] {\n      right: -5.6rem; }\n\n#header[_ngcontent-%COMP%]   .util[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 3.4rem;\n    left: 3.4rem;\n    z-index: 30; }\n\n\n\n.intro[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n  padding: 15rem 5rem 10rem; }\n\n\n\n.logo[_ngcontent-%COMP%] {\n  font-weight: bold; }\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #f05339;\n    -webkit-text-shadow: 1px 1px 2px #888;\n    text-shadow: 1px 1px 2px #888; }\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n      content: '.'; }\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\n      -webkit-animation: spin 3s infinite;\n      animation: spin 3s infinite; }\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    overflow: hidden;\n    width: 6.8rem;\n    height: 6.8rem;\n    margin: 2.6rem 0.4rem 0 0;\n    border: 1px solid #f15a3a;\n    background: -webkit-gradient(linear, left top, left bottom, from(#f68f4a), to(#f0583a));\n    background: linear-gradient(#f68f4a, #f0583a);\n    vertical-align: top;\n    text-align: right;\n    border-radius: 0.5rem;\n    -webkit-transform: rotate(-20deg);\n    transform: rotate(-20deg); }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(-20deg);\n    transform: rotate(-20deg); }\n  to {\n    -webkit-transform: rotate(-380deg);\n    transform: rotate(-380deg); } }\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(-20deg);\n    transform: rotate(-20deg); }\n  to {\n    -webkit-transform: rotate(-380deg);\n    transform: rotate(-380deg); } }\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n      display: block;\n      margin-right: 0.2rem;\n      font: 9.6rem/6rem Tahoma;\n      color: #fff;\n      -webkit-text-shadow: 1px 1px 2px #333;\n      text-shadow: 1px 1px 2px #333;\n      -webkit-transform: rotate(26deg);\n      transform: rotate(26deg); }\n\n\n\n.gnb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: inherit; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 12.5%; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(1) {\n    background-color: #dc0030; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2) {\n    background-color: #e57d04; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(3) {\n    background-color: #f2b701; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(4) {\n    background-color: #7cb854; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(5) {\n    background-color: #09a275; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(6) {\n    background-color: #3465aa; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7) {\n    background-color: #7c378a; }\n\n.gnb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(8) {\n    background-color: #b10058; }\n\n.gnb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-transition: margin-left .25s;\n  transition: margin-left .25s;\n  display: block;\n  position: relative;\n  height: 100%;\n  background-color: inherit;\n  color: #fff; }\n\n.gnb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    right: 3rem;\n    margin-top: -1rem;\n    padding-right: 2.6rem;\n    font-weight: bold;\n    font-size: 1.4rem;\n    text-align: right;\n    text-transform: uppercase;\n    -webkit-text-shadow: 1px 1px 1px #000;\n    text-shadow: 1px 1px 1px #000; }\n\n.gnb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .gnb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    width: 110%;\n    margin-left: -10%; }\n\n.gnb.v1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .gnb.v1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  width: 115%;\n  margin-left: 15%; }\n\n\n\n.util[_ngcontent-%COMP%] {\n  position: relative; }\n\n.util[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    float: left;\n    padding: 0.3rem 1.5rem;\n    background-color: #333;\n    color: #fff;\n    border-radius: 1.5rem; }\n\n.util[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    float: left; }\n\n.util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    position: relative;\n    margin-left: 1.2rem; }\n\n.util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: block;\n      padding-top: 0.4rem;\n      color: #333;\n      text-align: center;\n      text-transform: uppercase; }\n\n.util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #f60;\n        text-decoration: underline; }\n\n.util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n        display: none;\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin-left: -0.6rem;\n        border-width: 0.6rem 0.6rem 0;\n        border-style: solid;\n        border-color: transparent;\n        border-top-color: #f30; }\n\n.util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .util[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after {\n        display: block; }\n\n.util[_ngcontent-%COMP%]   a.contact[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -0.2rem;\n    right: -4rem;\n    width: 3rem;\n    height: 3rem;\n    background-color: #666;\n    font-size: 1.6rem;\n    line-height: 1.8;\n    color: #fff;\n    text-align: center;\n    border-radius: 50%; }\n\n.util[_ngcontent-%COMP%]   a.contact[_ngcontent-%COMP%]:hover, .util[_ngcontent-%COMP%]   a.contact[_ngcontent-%COMP%]:focus {\n      background-color: #000; }\n\n\n\na.btn_home[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  right: 1.7rem;\n  padding: 1.5rem 2rem;\n  background-color: #333;\n  color: #fff; }\n\na.btn_home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none; }\n\na.btn_home[_ngcontent-%COMP%]:hover {\n    -webkit-text-shadow: 1px 1px #000;\n    text-shadow: 1px 1px #000; }\n\na.btn_home[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n      display: inline-block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXEhlYWRlclxcaGVhZGVyLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxccGxhY2Vob2xkZXIuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQ0FJLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBRE5oQjtFQ2tCSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVcsRUFBQTs7QURwQmY7RUFHSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBTmhCO0lBU1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFicEI7TUFnQlksbUJBQW1CO01BQ25CLGlCRWR1QixFQUFBOztBRkhuQztNQXFCWSxrQkVsQnVCO01GbUJ2QixpQkVuQnVCLEVBQUE7O0FGSG5DO0lBMkJRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFqQ3BCO01Bd0NZLGNFckN1QixFQUFBOztBRkhuQztJQTZDUSxrQkFBa0I7SUFDbEIsV0UzQzJCO0lGNEMzQixZRTVDMkI7SUY2QzNCLFdBQVcsRUFBQTs7QUFZbkIsV0FBQTs7QUFDQTtFQUlRLHlCRTlEMkIsRUFBQTs7QUZrRW5DLFVBQUE7O0FBQ0E7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFJUSxjQUFjO0lFdUhsQixxQ0Z0SHlDO0lFdUh6Qyw2QkZ2SHlDLEVBQUE7O0FBTDdDO01BUVksWUFBWSxFQUFBOztBQVJ4QjtNRXNFSSxtQ0Z4RCtDO01FMkQvQywyQkYzRCtDLEVBQUE7O0FBZG5EO0lBZ0NRLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUVyRzJCO0lGc0czQixjRXRHMkI7SUZ1RzNCLHlCQUFrRDtJQUNsRCx5QkFBeUI7SUVLN0IsdUZBQXVDO0lBQXZDLDZDQUF1QztJRkhuQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lFWnJCLHFCQS9GK0I7SUFtSy9CLGlDRnREcUM7SUUwRHJDLHlCRjFEcUMsRUFBQTs7QUVZckM7RUZoQ1k7SUUwRVosaUNGekVpRDtJRTZFakQseUJGN0VpRCxFQUFBO0VBR3JDO0lFc0VaLGtDRnJFa0Q7SUV5RWxELDBCRnpFa0QsRUFBQSxFQUFBOztBRW9DbEQ7RUZ6Q1k7SUUwRVosaUNGekVpRDtJRTZFakQseUJGN0VpRCxFQUFBO0VBR3JDO0lFc0VaLGtDRnJFa0Q7SUV5RWxELDBCRnpFa0QsRUFBQSxFQUFBOztBQTNCdEQ7TUE2Q1ksY0FBYztNQUNkLG9CRWpIdUI7TUZrSHZCLHdCQUFrRDtNQUNsRCxXQUFXO01FMkVuQixxQ0YxRTZDO01FMkU3Qyw2QkYzRTZDO01FK0M3QyxnQ0Y5Q3dDO01Fa0R4Qyx3QkZsRHdDLEVBQUE7O0FBSzVDLFNBQUE7O0FBQ0E7RUFFUSxlQUFlLEVBQUE7O0FBRnZCO0VBTVEsYUFBYSxFQUFBOztBQU5yQjtJQVVvQix5QkFBeUIsRUFBQTs7QUFWN0M7SUFZb0IseUJBQXlCLEVBQUE7O0FBWjdDO0lBY29CLHlCQUF5QixFQUFBOztBQWQ3QztJQWdCb0IseUJBQXlCLEVBQUE7O0FBaEI3QztJQWtCb0IseUJBQXlCLEVBQUE7O0FBbEI3QztJQW9Cb0IseUJBQXlCLEVBQUE7O0FBcEI3QztJQXNCb0IseUJBQXlCLEVBQUE7O0FBdEI3QztJQXdCb0IseUJBQXlCLEVBQUE7O0FBeEI3QztFQWlDUSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBdkNuQjtJQTBDWSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdFdkt1QjtJRndLdkIsaUJFeEt1QjtJRnlLdkIscUJFekt1QjtJRjBLdkIsaUJBQWlCO0lBQ2pCLGlCRTNLdUI7SUY0S3ZCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUVpQmpDLHFDRmhCNkM7SUVpQjdDLDZCRmpCNkMsRUFBQTs7QUFuRGpEO0lBd0RZLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUF6RDdCO0VBa0VnQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBTWhDLFVBQUE7O0FBQ0E7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFJUSxXQUFXO0lBQ1gsc0JFMU0yQjtJRjJNM0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUU3R2YscUJBL0YrQixFQUFBOztBRnFNbkM7SUFZUSxXQUFXLEVBQUE7O0FBWm5CO0lBZ0JRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJFdk4yQixFQUFBOztBRnFNbkM7TUFxQlksY0FBYztNQUNkLG1CRTNOdUI7TUY0TnZCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7O0FBekJyQztRQTZCZ0IsV0FBVztRQUNYLDBCQUEwQixFQUFBOztBQTlCMUM7UUFrQ2dCLGFBQWE7UUFDYixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTO1FBQ1Qsb0JFNU9tQjtRRjZPbkIsNkJBQXFEO1FBQ3JELG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsc0JBQXNCLEVBQUE7O0FBM0N0QztRQWdEZ0IsY0FBYyxFQUFBOztBQWhEOUI7SUFzRFEsa0JBQWtCO0lBQ2xCLFlFNVAyQjtJRjZQM0IsWUU3UDJCO0lGOFAzQixXRTlQMkI7SUYrUDNCLFlFL1AyQjtJRmdRM0Isc0JBQXNCO0lBQ3RCLGlCRWpRMkI7SUZrUTNCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lFckt0QixrQkZzSzhCLEVBQUE7O0FBaEVsQztNQW9FWSxzQkFBc0IsRUFBQTs7QUFTbEMsY0FBQTs7QUFDQTtFQUNJLGVBQWU7RUFDZixTRXJSK0I7RUZzUi9CLGFFdFIrQjtFRnVSL0Isb0JFdlIrQjtFRndSL0Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFOZjtJQVNRLGFBQWEsRUFBQTs7QUFUckI7SUVyRkksaUNGb0dxQztJRW5HckMseUJGbUdxQyxFQUFBOztBQWZ6QztNQWtCWSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci52aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfZGVwZW5kZW5jeS92YXJpYWJsZSc7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L21peGluJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvcGxhY2Vob2xkZXInO1xyXG5cclxuI2hlYWRlciB7XHJcbiAgICAvLy13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcclxuICAgIC8vLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuaW50cm8ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDguNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogdW5pdHNDb252ZXJ0ZXIoMS42KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigzLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ25iIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWJsaW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi52MSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiB1bml0c0NvbnZlcnRlcigtNS42KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnV0aWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHVuaXRzQ29udmVydGVyKDMuNCk7XHJcbiAgICAgICAgbGVmdDogdW5pdHNDb252ZXJ0ZXIoMy40KTtcclxuICAgICAgICB6LWluZGV4OiAzMDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVibGluZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlY2xlYXJmaXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID1JbnRybyAqL1xyXG4uaW50cm8ge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLy9AaW5jbHVkZSBib3JkZXItcmFkaXVzKDAgNDUlIDQ1JSAwKTtcclxuICAgIC5pbnJ7XHJcbiAgICAgICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoMTUpIHVuaXRzQ29udmVydGVyKDUpIHVuaXRzQ29udmVydGVyKDEwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPUxvZ28gKi9cclxuLmxvZ28ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmMDUzMzk7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dC1zaGFkb3coMXB4IDFweCAycHggIzg4OCk7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihzcGluIDNzIGluZmluaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGtleWZyYW1lcyhzcGluKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKC0yMGRlZykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKC0zODBkZWcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IHVuaXRzQ29udmVydGVyKDYuOCk7XHJcbiAgICAgICAgaGVpZ2h0OiB1bml0c0NvbnZlcnRlcig2LjgpO1xyXG4gICAgICAgIG1hcmdpbjogdW5pdHNDb252ZXJ0ZXIoMi42KSB1bml0c0NvbnZlcnRlciguNCkgMCAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMTVhM2E7XHJcbiAgICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZC1ncmFkaWVudCgjZjY4ZjRhLCAjZjA1ODNhKTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModW5pdHNDb252ZXJ0ZXIoLjUpKTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKC0yMGRlZykpO1xyXG5cclxuICAgICAgICBiIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdW5pdHNDb252ZXJ0ZXIoLjIpO1xyXG4gICAgICAgICAgICBmb250OiB1bml0c0NvbnZlcnRlcig5LjYpL3VuaXRzQ29udmVydGVyKDYpIFRhaG9tYTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQtc2hhZG93KDFweCAxcHggMnB4ICMzMzMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDI2ZGVnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiA9R05CICovXHJcbi5nbmIge1xyXG4gICAgdWwge1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMi41JTtcclxuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDgge1xyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XHJcbiAgICAgICAgICAgICAgICBAaWYgJGkgPT0gMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDAzMDtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2QwNDtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYjcwMTtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYjg1NDtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YTI3NTtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NjVhYTtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gNyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjMzc4YTtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgJGkgPT0gOCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxMDA1ODtcclxuICAgICAgICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuMjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC4yNXM7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IHVuaXRzQ29udmVydGVyKDMpO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlcigtMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuaXRzQ29udmVydGVyKDIuNik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDEuNCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdygxcHggMXB4IDFweCAjMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICAgICAgICAgICAgLy9AaW5jbHVkZSB0ZXh0LXNoYWRvdygycHggMnB4ICMzMzMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnYxIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTE1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID1VdGlsICovXHJcbi51dGlsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlciguMykgdW5pdHNDb252ZXJ0ZXIoMS41KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModW5pdHNDb252ZXJ0ZXIoMS41KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuaXRzQ29udmVydGVyKDEuMik7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IHVuaXRzQ29udmVydGVyKC40KTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdW5pdHNDb252ZXJ0ZXIoLS42KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogdW5pdHNDb252ZXJ0ZXIoLjYpIHVuaXRzQ29udmVydGVyKC42KSAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZjMwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyOmFmdGVyLFxyXG4gICAgICAgICAgICAmOmZvY3VzOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEuY29udGFjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogdW5pdHNDb252ZXJ0ZXIoLS4yKTtcclxuICAgICAgICByaWdodDogdW5pdHNDb252ZXJ0ZXIoLTQpO1xyXG4gICAgICAgIHdpZHRoOiB1bml0c0NvbnZlcnRlcigzKTtcclxuICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDMpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigxLjYpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcclxuXHJcbiAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlY2xlYXJmaXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID1CdG4gSG9tZSAqL1xyXG5hLmJ0bl9ob21lIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogdW5pdHNDb252ZXJ0ZXIoMSk7XHJcbiAgICByaWdodDogdW5pdHNDb252ZXJ0ZXIoMS43KTtcclxuICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKDEuNSkgdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmQ1MDA7XHJcbiAgICAgICAgLy9jb2xvcjogIzMzMztcclxuICAgICAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdygxcHggMXB4ICMwMDApO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBAUGxhY2Vob2xkZXJcclxuLy8gdXNlOiBAZXh0ZW5kICV7e3BsYWNlaG9sZGVyIG5hbWV9fVxyXG5cclxuJWJsaW5kIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvL2NsaXA6IHJlY3QoMCAwIDAgMCk7IC8vIElFIDYsIDdcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbn1cclxuXHJcbiV1bmJsaW5kIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgY2xpcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuJWNsZWFyZml4IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.view.html',
          styleUrls: ['./header.view.scss']
        }]
      }], function () {
        return [{
          type: _services_header_Header_service__WEBPACK_IMPORTED_MODULE_2__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Licenses/Licenses.controller.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/Licenses/Licenses.controller.ts ***!
    \************************************************************/

  /*! exports provided: LicensesController */

  /***/
  function srcAppComponentsLicensesLicensesControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LicensesController", function () {
      return LicensesController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_licenses_Licenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/licenses/Licenses.service */
    "./src/app/services/licenses/Licenses.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    function LicensesController_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var licenseModel_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", licenseModel_r8["year"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", licenseModel_r8["year"], "\uB144");
      }
    }

    function LicensesController_div_15_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var license_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](license_r11["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faBuilding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", license_r11["issued"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faCalendar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", license_r11["date"], "");
      }
    }

    function LicensesController_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LicensesController_div_15_li_4_Template, 10, 5, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var licenseModel_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](licenseModel_r9["year"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", licenseModel_r9["license"]);
      }
    }

    var LicensesController =
    /*#__PURE__*/
    function () {
      function LicensesController(licensesService) {
        _classCallCheck(this, LicensesController);

        this.licensesService = licensesService;
        this.faCreditCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCreditCard"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBuilding"];
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendar"];
        this.dateFilter = '';
      }

      _createClass(LicensesController, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.licensesService.getLicensesData.then((res) => {
          //     this.licensesModel$ = res;
          // });
          this.licensesService.getLicensesData.subscribe(function (data) {
            _this.licensesModel$ = data;
          });
        }
      }]);

      return LicensesController;
    }();

    LicensesController.ɵfac = function LicensesController_Factory(t) {
      return new (t || LicensesController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_licenses_Licenses_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
    };

    LicensesController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LicensesController,
      selectors: [["app-licenses"]],
      decls: 17,
      vars: 7,
      consts: [["id", "licenses", 1, "licenses"], [1, "chapter-tit"], [3, "icon"], [1, "inr"], [1, "velo-bubble"], ["title", "\uB144\uB3C4\uBCC4 \uC790\uACA9\uC99D \uC120\uD0DD", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "timeline", 4, "ngFor", "ngForOf"], [3, "value"], [1, "timeline"], [1, "year"], [4, "ngFor", "ngForOf"], [1, "note"], [1, "pjt_tit"], [1, "desc"], [1, "date"]],
      template: function LicensesController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Licenses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "time tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LicensesController_Template_select_ngModelChange_11_listener($event) {
            return ctx.dateFilter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uC804\uCCB4\uAE30\uAC04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LicensesController_option_14_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LicensesController_div_15_Template, 5, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCreditCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.licensesModel$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 4, ctx.licensesModel$, ctx.dateFilter));
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]],
      styles: [".timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:after {\n  display: table;\n  content: '';\n  clear: both; }\n\n.licenses[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 6rem 3rem 14rem 9rem;\n  background-color: #e57d04; }\n\n.licenses[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 6.4rem;\n    font-weight: normal;\n    font-size: 2.2rem;\n    text-transform: capitalize;\n    color: #fff; }\n\n.licenses[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 10rem 4rem 2rem;\n    background-color: #f6f6f6;\n    border-radius: 1rem; }\n\n.licenses[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -4.6rem;\n    right: 0;\n    padding: 0.8rem 1.2rem;\n    border: 0;\n    border-left: 6px solid #b50D19;\n    border-radius: 0.4rem;\n    background-color: #fff; }\n\n\n\n.velo-bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 10rem;\n  height: 10rem;\n  margin: -5rem 0 0 -4.8rem;\n  background-color: #000;\n  font-style: italic;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 50%; }\n\n.velo-bubble[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    bottom: 1.6rem;\n    left: 50%;\n    margin-left: -0.8rem;\n    border-width: 1rem;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #000; }\n\n.velo-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 3rem; }\n\n\n\n.timeline[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 2.8rem; }\n\n.timeline[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%]:last-child:after {\n    content: '';\n    position: absolute;\n    top: 2.8rem;\n    width: 0.4rem;\n    height: 100%;\n    background-color: #f6f6f6; }\n\n.timeline[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%]:nth-of-type(odd):last-child:after {\n    right: -0.2rem; }\n\n.timeline[_ngcontent-%COMP%]:last-child   li[_ngcontent-%COMP%]:nth-of-type(even):last-child:after {\n    left: -0.2rem; }\n\n.timeline[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  width: 7.4rem;\n  height: 7.4rem;\n  margin: 0 auto;\n  border: 4px solid #9dc7c8;\n  background-color: #add3d4;\n  font-weight: bold;\n  font-size: 2rem;\n  line-height: 3.8;\n  color: #fff;\n  text-align: center;\n  border-radius: 50%; }\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: url(/assets/img/bg_timeline.jpg) repeat-y 50% 50%; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-top: -2rem; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    top: 2.8rem;\n    z-index: 20;\n    width: 1rem;\n    height: 1rem;\n    border: 3px solid #999;\n    background-color: #fff;\n    border-radius: 50%; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd) {\n    float: left;\n    clear: left; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   .note[_ngcontent-%COMP%] {\n      float: left; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   .note[_ngcontent-%COMP%]:before {\n        right: -1.6rem;\n        border-left-color: rgba(0, 0, 0, 0.2); }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   .note[_ngcontent-%COMP%]:after {\n        right: -1.5rem;\n        border-left-color: #fff; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd):before {\n      right: 0;\n      margin-right: -0.8rem; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even) {\n    float: right; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   .note[_ngcontent-%COMP%] {\n      float: right; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   .note[_ngcontent-%COMP%]:before {\n        left: -1.6rem;\n        border-right-color: rgba(0, 0, 0, 0.2); }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   .note[_ngcontent-%COMP%]:after {\n        left: -1.5rem;\n        border-right-color: #fff; }\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even):before {\n      left: 0;\n      margin-left: -0.8rem; }\n\n\n\n.note[_ngcontent-%COMP%] {\n  position: relative;\n  width: 84%;\n  margin: 1rem 0;\n  padding: 2rem;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  border-radius: 0.6rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); }\n\n.note[_ngcontent-%COMP%]   .pjt_tit[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.6rem; }\n\n.note[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    color: #666; }\n\n.note[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    color: #888; }\n\n.note[_ngcontent-%COMP%]   .tech-spec[_ngcontent-%COMP%] {\n    text-align: right; }\n\n.note[_ngcontent-%COMP%]:before, .note[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    top: 1.8rem;\n    width: 0;\n    height: 0;\n    border: 8px solid;\n    border-color: transparent;\n    line-height: 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9MaWNlbnNlcy9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcTGljZW5zZXNcXGxpY2Vuc2VzLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9MaWNlbnNlcy9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXHNjc3NcXF9kZXBlbmRlbmN5XFxwbGFjZWhvbGRlci5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL0xpY2Vuc2VzL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcc2Nzc1xcX2RlcGVuZGVuY3lcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZBO0VDckVJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBRHBCZjtFQUNJLGtCQUFrQjtFQUNsQiw2QkVDK0I7RUZBL0IseUJBQXlCLEVBQUE7O0FBSDdCO0lBTVEscUJFSDJCO0lGSTNCLG1CQUFtQjtJQUNuQixpQkVMMkI7SUZNM0IsMEJBQTBCO0lBQzFCLFdBQVcsRUFBQTs7QUFWbkI7SUFjUSxrQkFBa0I7SUFDbEIsd0JFWjJCO0lGYTNCLHlCQUF5QjtJRWtGN0IsbUJBL0YrQixFQUFBOztBRkhuQztJQXFCUSxrQkFBa0I7SUFDbEIsWUVuQjJCO0lGb0IzQixRQUFRO0lBQ1Isc0JFckIyQjtJRnNCM0IsU0FBUztJQUNULDhCQUE4QjtJRXdFbEMscUJBL0YrQjtJRnlCM0Isc0JBQXNCLEVBQUE7O0FBd0I5QixpQkFBQTs7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFlFdEQrQjtFRnVEL0IsYUV2RCtCO0VGd0QvQix5QkV4RCtCO0VGeUQvQixzQkFBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VFaUN6QixrQkZoQzBCLEVBQUE7O0FBYjlCO0lBZ0JRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0VwRTJCO0lGcUUzQixTQUFTO0lBQ1Qsb0JFdEUyQjtJRnVFM0Isa0JFdkUyQjtJRndFM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0IsRUFBQTs7QUF4QjlCO0lBNEJRLHFCQUFvQjtJQUNwQixnQkUvRTJCLEVBQUE7O0FGbUZuQyxjQUFBOztBQUNBO0VBR1Esc0JFdkYyQixFQUFBOztBRm9GbkM7SUFPZ0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXRTdGbUI7SUY4Rm5CLGFFOUZtQjtJRitGbkIsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQVp6QztJQWdCZ0IsY0VwR21CLEVBQUE7O0FGb0ZuQztJQW9CZ0IsYUV4R21CLEVBQUE7O0FGb0ZuQztFQTBCUSxhRTlHMkI7RUYrRzNCLGNFL0cyQjtFRmdIM0IsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVFcEgyQjtFRnFIM0IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUV4QnRCLGtCRnlCOEIsRUFBQTs7QUFwQ2xDO0VBeUNRLDZEQUFrQyxFQUFBOztBQXpDMUM7RUFpRFEsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFsRGxCO0lBcURZLGlCRXpJdUIsRUFBQTs7QUZvRm5DO0lBeURZLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0UvSXVCO0lGZ0p2QixXQUFXO0lBQ1gsV0VqSnVCO0lGa0p2QixZRWxKdUI7SUZtSnZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUVyRDlCLGtCRnNEa0MsRUFBQTs7QUFqRXRDO0lBcUVZLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBdEV2QjtNQXlFZ0IsV0FBVyxFQUFBOztBQXpFM0I7UUE0RW9CLGNFaEtlO1FGaUtmLHFDQUFvQyxFQUFBOztBQTdFeEQ7UUFpRm9CLGNFcktlO1FGc0tmLHVCQUFzQixFQUFBOztBQWxGMUM7TUF1RmdCLFFBQVE7TUFDUixxQkU1S21CLEVBQUE7O0FGb0ZuQztJQTZGWSxZQUFZLEVBQUE7O0FBN0Z4QjtNQWdHZ0IsWUFBWSxFQUFBOztBQWhHNUI7UUFtR29CLGFFdkxlO1FGd0xmLHNDQUFxQyxFQUFBOztBQXBHekQ7UUF3R29CLGFFNUxlO1FGNkxmLHdCQUF1QixFQUFBOztBQXpHM0M7TUE4R2dCLE9BQU87TUFDUCxvQkVuTW1CLEVBQUE7O0FGeU1uQyxVQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUEyQjtFQUMzQixhRTlNK0I7RUYrTS9CLGlCQUFpQjtFQUNqQixnQ0FBK0I7RUFDL0Isc0JBQXNCO0VFbEh0QixxQkEvRitCO0VGbU4vQix5Q0FBd0MsRUFBQTs7QUFUNUM7SUFhUSxpQkFBaUI7SUFDakIsaUJFeE4yQixFQUFBOztBRjBNbkM7SUFrQlEsV0FBVyxFQUFBOztBQWxCbkI7SUFzQlEsV0FBVyxFQUFBOztBQXRCbkI7SUEwQlEsaUJBQWlCLEVBQUE7O0FBMUJ6QjtJQStCUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdFM08yQjtJRjRPM0IsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTGljZW5zZXMvbGljZW5zZXMudmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX2RlcGVuZGVuY3kvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9taXhpbic7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L3BsYWNlaG9sZGVyJztcclxuXHJcbi5saWNlbnNlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcig2KSB1bml0c0NvbnZlcnRlcigzKSB1bml0c0NvbnZlcnRlcigxNCkgdW5pdHNDb252ZXJ0ZXIoOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3ZDA0O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bml0c0NvbnZlcnRlcig2LjQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigyLjIpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcigxMCkgdW5pdHNDb252ZXJ0ZXIoNCkgdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHVuaXRzQ29udmVydGVyKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHVuaXRzQ29udmVydGVyKC00LjYpO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKC44KSB1bml0c0NvbnZlcnRlcigxLjIpO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNiNTBEMTk7XHJcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh1bml0c0NvbnZlcnRlciguNCkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8uc2xpbS1zY3JvbGwge1xyXG4gICAgLy8gICAgLypkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8vICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAvLyAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7Ki9cclxuICAgIC8vICAgIC8qZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlOyovXHJcbiAgICAvLyAgICAvKnBhZGRpbmc6IDAgMTRweDsqL1xyXG4gICAgLy99XHJcbn1cclxuXHJcbi8vLyogPUNoYXB0ZXIgVGl0bGUgKi9cclxuLy8uY2hhcHRlci10aXQge1xyXG4vLyAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgdG9wOiAwO1xyXG4vLyAgICBsZWZ0OiA1MCU7XHJcbi8vICAgIG1hcmdpbjogLTUwcHggMCAwIC0xNnB4OyovXHJcbi8vICAgIC8qYmFja2dyb3VuZDogdXJsKC4uL2ltZy9zcHJpdGUtdmVsby5wbmcpIG5vLXJlcGVhdDsqL1xyXG4vLyAgICAvKm9wYWNpdHk6IDA7XHJcbi8vICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTsqL1xyXG4vL31cclxuXHJcbi8qID1WZWxvIEJ1YmJsZSAqL1xyXG4udmVsby1idWJibGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IHVuaXRzQ29udmVydGVyKDEwKTtcclxuICAgIGhlaWdodDogdW5pdHNDb252ZXJ0ZXIoMTApO1xyXG4gICAgbWFyZ2luOiB1bml0c0NvbnZlcnRlcigtNSkgMCAwIHVuaXRzQ29udmVydGVyKC00LjgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIC8vZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwJSk7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogdW5pdHNDb252ZXJ0ZXIoMS42KTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuaXRzQ29udmVydGVyKC0uOCk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlcigzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPVRpbWVsaW5lICovXHJcbi50aW1lbGluZSB7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdW5pdHNDb252ZXJ0ZXIoMi44KTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHVuaXRzQ29udmVydGVyKDIuOCk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5pdHNDb252ZXJ0ZXIoLjQpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZShvZGQpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHVuaXRzQ29udmVydGVyKC0uMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbik6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB1bml0c0NvbnZlcnRlcigtLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC55ZWFyIHtcclxuICAgICAgICB3aWR0aDogdW5pdHNDb252ZXJ0ZXIoNy40KTtcclxuICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDcuNCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzlkYzdjODtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRkM2Q0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuODtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoI3skRklMRS1QQVRIfS9pbWcvYmdfdGltZWxpbmUuanBnKSByZXBlYXQteSA1MCUgNTAlO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlY2xlYXJmaXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHVuaXRzQ29udmVydGVyKC0yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiB1bml0c0NvbnZlcnRlcigyLjgpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgICAgd2lkdGg6IHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAubm90ZSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHVuaXRzQ29udmVydGVyKC0xLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdW5pdHNDb252ZXJ0ZXIoLTEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuaXRzQ29udmVydGVyKC0uOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAubm90ZSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHVuaXRzQ29udmVydGVyKC0xLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdW5pdHNDb252ZXJ0ZXIoLTEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdW5pdHNDb252ZXJ0ZXIoLS44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogPU5vdGUgKi9cclxuLm5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgbWFyZ2luOiB1bml0c0NvbnZlcnRlcigxKSAwO1xyXG4gICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh1bml0c0NvbnZlcnRlciguNikpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIC8vY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5wanRfdGl0IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDEuNik7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2Mge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlIHtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaC1zcGVjIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHVuaXRzQ29udmVydGVyKDEuOCk7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogOHB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQFBsYWNlaG9sZGVyXHJcbi8vIHVzZTogQGV4dGVuZCAle3twbGFjZWhvbGRlciBuYW1lfX1cclxuXHJcbiVibGluZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy9jbGlwOiByZWN0KDAgMCAwIDApOyAvLyBJRSA2LCA3XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG59XHJcblxyXG4ldW5ibGluZCB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGNsaXA6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiVjbGVhcmZpeCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuIiwiLy8gQCBNaXhpbnNcclxuLy8gdXNlOiBAaW5jbHVkZSB7e21peGluIG5hbWV9fVxyXG5cclxuQGZ1bmN0aW9uIHVuaXRzQ29udmVydGVyKCRudW0pIHtcclxuICAgIEBpZiAoJGZvbnRVbml0ICE9ICdyZW0nKSB7IC8vIHJlbeydtCDslYTri5Ag65WMXHJcbiAgICAgICAgQHJldHVybiAjeyRudW0gKiAkZGVmYXVsdEZvbnRTaXplfSN7JGZvbnRVbml0fTsgLy8gcHgsIHB0IOuTsSDsoIjrjIAg7IiY7LmYIOyCrOyaqVxyXG4gICAgfSBAZWxzZSB7IC8vIHJlbVxyXG4gICAgICAgIEByZXR1cm4gI3skbnVtfSN7JGZvbnRVbml0fTtcclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiAnJykgeyAgLy8gU3RyaW5nIFJlcGxhY2VcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICAgIEBpZiAoJGluZGV4KSB7XHJcbiAgICAgICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gd2ViLWZvbnRcclxuQG1peGluIHdlYi1mb250KCRuYW1lLCAkcGF0aCwgJHdlaWdodDogbnVsbCwgJHN0eWxlOiBudWxsLCAkZXh0czogZW90IHdvZmYyIHdvZmYgdHRmIHN2Zykge1xyXG4gICAgJHNyYzogbnVsbDtcclxuICAgICRleHRtb2RzOiAoZW90OiAnPycsIHN2ZzogJyMnICsgc3RyLXJlcGxhY2UoJG5hbWUsICcgJywgJ18nKSk7XHJcbiAgICAkZm9ybWF0czogKG90ZjogJ29wZW50eXBlJywgdHRmOiAndHJ1ZXR5cGUnKTtcclxuXHJcbiAgICBAZWFjaCAkZXh0IGluICRleHRzIHtcclxuICAgICAgICAkZXh0bW9kOiBpZihtYXAtaGFzLWtleSgkZXh0bW9kcywgJGV4dCksICRleHQgKyBtYXAtZ2V0KCRleHRtb2RzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJGZvcm1hdDogaWYobWFwLWhhcy1rZXkoJGZvcm1hdHMsICRleHQpLCBtYXAtZ2V0KCRmb3JtYXRzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJHNyYzogYXBwZW5kKCRzcmMsIHVybChxdW90ZSgkcGF0aCArICcuJyArICRleHRtb2QpKSBmb3JtYXQocXVvdGUoJGZvcm1hdCkpLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHF1b3RlKCRuYW1lKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IGF1dG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogJHN0eWxlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgICAgIHNyYzogbG9jYWwocXVvdGUoJG5hbWUpKSwgJHNyYztcclxuICAgIH1cclxufVxyXG5cclxuLy8gbWVkaWEtYnJlYWtwb2ludFxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICAgIEBpZiAoJHBvaW50ID09ICdwaG9uZScpIHsgLy9tb2JpbGVcclxuICAgICAgICAkcG9pbnQ6ICRwaG9uZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAnbW9iaWxlJykgeyAvL3RhYmxldFxyXG4gICAgICAgICRwb2ludDogJG1vYmlsZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAndGFibGV0JykgeyAvL2Rlc2NrdG9wXHJcbiAgICAgICAgJHBvaW50OiAkdGFibGV0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgI3skcG9pbnR9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYWRqdXN0LWxvY2F0aW9uXHJcbi8vQG1peGluIGFkanVzdC1sb2NhdGlvbigkeCwgJHkpIHtcclxuLy8gICAgQGlmIHVuaXRsZXNzKCR4KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHh9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHg6IDFweCAqICR4O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIEBpZiB1bml0bGVzcygkeSkge1xyXG4vLyAgICAgICAgQHdhcm4gXCJBc3N1bWluZyAjeyR5fSB0byBiZSBpbiBwaXhlbHNcIjtcclxuLy8gICAgICAgICR5OiAxcHggKiAkeTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OiR4O3RvcDogJHk7XHJcbi8vfVxyXG5cclxuLy8gZGlzcGxheVxyXG5AbWl4aW4gZGlzcGxheSgkdmFsKSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LSN7JHZhbH07XHJcbiAgICBkaXNwbGF5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4LWRpcmVjdGlvblxyXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4XHJcbkBtaXhpbiBmbGV4KCR2YWwpIHtcclxuICAgIC13ZWJraXQtZmxleDogJHZhbDtcclxuICAgIC1tcy1mbGV4OiAkdmFsO1xyXG4gICAgZmxleDogJHZhbDtcclxufVxyXG5cclxuLy8gdXNlci1zZWxlY3RcclxuQG1peGluIHVzZXItc2VsZWN0KCR2YWwpIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgdXNlci1zZWxlY3Q6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGJvcmRlci1yYWRpdXNcclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdmFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1zaXplXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1ncmFkaWVudFxyXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkZnJvbSwgJHRvKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxufVxyXG5cclxuLy8gb3BhY2l0eVxyXG5AbWl4aW4gb3BhY2l0eSgkdmFsKSB7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PSN7JHZhbCAqIDEwMH0pXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9I3skdmFsICogMTAwfSk7XHJcbiAgICBvcGFjaXR5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBrZXlmcmFtZXNcclxuQG1peGluIGtleWZyYW1lcygkbmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYW5pbWF0aW9uXHJcbkBtaXhpbiBhbmltYXRpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICR2YWw7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1vLWFuaW1hdGlvbjogJHZhbDtcclxuICAgIGFuaW1hdGlvbjogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNpdGlvblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1vLXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICB0cmFuc2l0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2xhdGUzZFxyXG5AbWl4aW4gdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm06ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1zdHlsZVxyXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG59XHJcblxyXG4vLyB0ZXh0LXNoYWRvd1xyXG5AbWl4aW4gdGV4dC1zaGFkb3coJHZhbCkge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHZhbDtcclxuICAgIHRleHQtc2hhZG93OiAkdmFsO1xyXG59XHJcblxyXG4vLyBlbGxpcHNpc1xyXG5AbWl4aW4gZWxsaXBzaXMoJGxpbmVzOiAxKSB7XHJcbiAgICBAaWYgKCRsaW5lcyA9PSAxKSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYm94O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLy8gW0ldIGhlaWdodCDqs7Xsi51cclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7JeG7J2E6rK97JqwOiAoKGZvbmN0LXNpemUgKiBsaW5lLWhlaWdodCkgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQg64uo7JyE6rCAIOyeiOydhOqyveyasDogKGxpbmUtaGVpZ2h0ICogLXdlYmtpdC1saW5lLWNsYW1wKVxyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LicensesController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-licenses',
          templateUrl: './licenses.view.html',
          styleUrls: ['./licenses.view.scss']
        }]
      }], function () {
        return [{
          type: _services_licenses_Licenses_service__WEBPACK_IMPORTED_MODULE_2__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Portfolio/Portfolio.controller.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/Portfolio/Portfolio.controller.ts ***!
    \**************************************************************/

  /*! exports provided: PortfolioController */

  /***/
  function srcAppComponentsPortfolioPortfolioControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioController", function () {
      return PortfolioController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _libs_jquery_mixitup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @libs/jquery.mixitup */
    "./src/app/libs/jquery.mixitup.js");
    /* harmony import */


    var _libs_jquery_mixitup__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_libs_jquery_mixitup__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @utils/dom */
    "./src/app/utils/dom.ts");
    /* harmony import */


    var _services_portfolio_Portfolio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/portfolio/Portfolio.service */
    "./src/app/services/portfolio/Portfolio.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PortfolioController_div_66_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "accessibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "responsive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "html5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "css3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "jquery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioController_div_66_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_div_66_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.gallery($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fa-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uBC14\uB85C\uAC00\uAE30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PortfolioController_div_66_span_19_Template, 2, 0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PortfolioController_div_66_span_20_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PortfolioController_div_66_span_21_Template, 2, 0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PortfolioController_div_66_span_22_Template, 2, 0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PortfolioController_div_66_span_23_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PortfolioController_div_66_span_24_Template, 2, 0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var portfolioModel_r32 = ctx.$implicit;
        var i_r33 = ctx.index;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mix ", portfolioModel_r32["category"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-order", i_r33 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", portfolioModel_r32["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/gallery/" + portfolioModel_r32["imageUrl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r31.faQuoteLeft);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", portfolioModel_r32["title"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r31.faQuoteRight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](portfolioModel_r32["company"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", portfolioModel_r32["link"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r31.faArrowRight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("datetime", portfolioModel_r32["start"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r31.faClock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", portfolioModel_r32["year"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["access"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["respon"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["mobile"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["html5"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["css3"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", portfolioModel_r32["techSpec"]["jquery"]);
      }
    }

    var PortfolioController =
    /*#__PURE__*/
    function () {
      function PortfolioController(portfolioService) {
        _classCallCheck(this, PortfolioController);

        this.portfolioService = portfolioService;
        this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSyncAlt"];
        this.faSortNumericDownAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortNumericDownAlt"];
        this.faSortNumericUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortNumericUp"];
        this.faRandom = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRandom"];
        this.faThLarge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faThLarge"];
        this.faAlignJustify = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAlignJustify"];
        this.faQuoteLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faQuoteLeft"];
        this.faQuoteRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faQuoteRight"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
      }
      /**
       * filterClick
       * @description 포트폴리오 필터 메뉴 클릭 이벤트 핸들러
       * @param {Event} e - 이벤트 객체
       */


      _createClass(PortfolioController, [{
        key: "filterClick",
        value: function filterClick(e) {
          // $(e.target).parent('li').addClass('active').siblings('li').removeClass('active');
          e.target.parentNode.classList.add('active');
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["siblings"])(e.target.parentNode).map(function (elem) {
            return elem.classList.remove('active');
          });
        }
        /**
         * sortClick
         * @description 포트폴리오 썸네일형 || 리스트형 보기 클릭 이벤트 핸들러
         * @param {String} btnType - 버튼 타입
         */

      }, {
        key: "sortClick",
        value: function sortClick(btnType) {
          // const $gallery = $('#gallery');
          var $gallery = document.querySelector('#gallery');

          switch (btnType) {
            case 'list':
              // $gallery.addClass('list');
              $gallery.classList.add('list');
              break;

            case 'thumb':
              // $gallery.removeClass('list');
              $gallery.classList.remove('list');
              break;
          }
        }
        /**
         * gallery
         * @description 포트폴리오 클릭 이벤트 핸들러 url 링크
         * @param {Event} e - 이벤트 객체
         */

      }, {
        key: "gallery",
        value: function gallery(e) {
          // if ($(e.target).parent().attr('href') === '#') {}
          if (e.target.parentNode.getAttribute('href') === '#') {
            e.preventDefault();
            alert('외부에서 접근할 수 없는 프로젝트 입니다.');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.portfolioService.gePortfolioData.subscribe(function (data) {
            _this2.portfolioModel$ = data;
          }); // 필터 초기 메뉴 활성화
          // $('#mfilter').children('li').eq(0).addClass('active');

          document.querySelector('#mfilter').childNodes[0].classList.add('active'); // 믹스업 플러그인 초기화
          // @ts-ignore

          jquery__WEBPACK_IMPORTED_MODULE_1__('#gallery').mixItUp();
        }
      }]);

      return PortfolioController;
    }();

    PortfolioController.ɵfac = function PortfolioController_Factory(t) {
      return new (t || PortfolioController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portfolio_Portfolio_service__WEBPACK_IMPORTED_MODULE_5__["default"]));
    };

    PortfolioController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioController,
      selectors: [["app-portfolio"]],
      decls: 69,
      vars: 7,
      consts: [["id", "portfolio", 1, "portfolio"], [1, "inr"], ["id", "mfilter", 1, "mfilter"], ["data-filter", "all", "title", "\uC804\uCCB4", 1, "filter", 3, "click"], ["data-filter", ".new", "title", "\uC2E0\uADDC", 1, "filter", 3, "click"], ["data-filter", ".sustaining", "title", "\uC720\uC9C0\uBCF4\uC218", 1, "filter", 3, "click"], ["data-filter", ".accessibility", "title", "\uC6F9 \uC811\uADFC\uC131", 1, "filter", 3, "click"], ["data-filter", ".responsive", "title", "\uBC18\uC751\uD615\uC6F9", 1, "filter", 3, "click"], ["data-filter", ".web", "title", "\uC6F9", 1, "filter", 3, "click"], ["data-filter", ".mobile", "title", "\uBAA8\uBC14\uC77C\uC6F9", 1, "filter", 3, "click"], ["data-filter", ".app", "title", "\uC571", 1, "filter", 3, "click"], [1, "msort"], ["data-sort", "default", "title", "\uC0C8\uB85C\uACE0\uCE68", 1, "sort"], [3, "icon"], ["data-sort", "order:asc", "title", "\uC624\uB984\uCC28\uC21C \uC815\uB82C", 1, "sort"], ["data-sort", "order:desc", "title", "\uB0B4\uB9BC\uCC28\uC21C \uC815\uB82C", 1, "sort"], ["data-sort", "random", "title", "\uB79C\uB364 \uC815\uB82C", 1, "sort"], ["title", "\uC378\uB124\uC77C\uD615 \uBCF4\uAE30", 3, "click"], ["title", "\uB9AC\uC2A4\uD2B8\uD615 \uBCF4\uAE30", 3, "click"], ["id", "gallery", 1, "gallery"], ["style", "display:inline-block", 3, "class", 4, "ngFor", "ngForOf"], [1, "gap"], [2, "display", "inline-block"], [1, "fluid_thumb"], ["width", "265", "height", "164", 3, "src", "alt"], ["rel", "noopener", "aria-hidden", "true", "target", "_blank", 3, "href", "click"], [1, "fa", 3, "icon"], [1, "tech-spec"], ["class", "access", 4, "ngIf"], ["class", "respon", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], ["class", "html5", 4, "ngIf"], ["class", "css3", 4, "ngIf"], ["class", "jquery", 4, "ngIf"], [1, "access"], [1, "respon"], [1, "mobile"], [1, "html5"], [1, "css3"], [1, "jquery"]],
      template: function PortfolioController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_9_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_12_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_15_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "sustaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_18_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "accessibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_21_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_24_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_27_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_30_listener($event) {
            return ctx.filterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sort Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "asc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "desc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "random");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_56_listener($event) {
            return ctx.sortClick("thumb");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "thumbnail layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioController_Template_a_click_61_listener($event) {
            return ctx.sortClick("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "fa-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "list layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PortfolioController_div_66_Template, 25, 21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSyncAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSortNumericDownAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSortNumericUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRandom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faThLarge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAlignJustify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioModel$);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".portfolio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0.4rem 0.5rem;\n  border-bottom: 1px solid #222;\n  background-color: #333; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mfilter[_ngcontent-%COMP%] {\n    float: left; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .msort[_ngcontent-%COMP%] {\n    float: right; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: block;\n      padding: 0.6rem 1rem;\n      color: #999;\n      text-transform: uppercase; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      cursor: pointer; }\n\n.portfolio[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #fff; }\n\n.portfolio.v1[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n  padding-left: 56px; }\n\n\n\n.gallery[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  align-content: flex-start;\n  overflow: hidden;\n  position: relative;\n  padding: 2rem 2rem 0;\n  background-color: #09a275;\n  text-align: justify; }\n\n.gallery[_ngcontent-%COMP%]   .gap[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 23.5%; }\n\n@media only screen and (max-width: 1200px) {\n      .gallery[_ngcontent-%COMP%]   .gap[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%] {\n        width: 32%; } }\n\n@media only screen and (max-width: 576px) {\n      .gallery[_ngcontent-%COMP%]   .gap[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%] {\n        width: 46.5%; } }\n\n.gallery[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%] {\n    display: none;\n    overflow: hidden;\n    -webkit-backface-visibility: hidden;\n    position: relative;\n    margin-bottom: 2rem;\n    border: 2px solid #f7f7f7;\n    background-color: rgba(255, 255, 255, 0.4);\n    color: rgba(255, 255, 255, 0.9);\n    vertical-align: top;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n\n.gallery[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      border: 20px solid transparent;\n      border-right-color: #fff;\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n\n.gallery[_ngcontent-%COMP%]   .mix.accessibility[_ngcontent-%COMP%]:before {\n      border-right-color: #6bd2e8; }\n\n.gallery[_ngcontent-%COMP%]   .mix.responsive[_ngcontent-%COMP%]:before {\n      border-right-color: #a6e6a7; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]    > .fluid_thumb[_ngcontent-%COMP%] {\n      display: none; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n      position: static;\n      background-color: #56abbb;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n        color: #fff; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n          display: inline;\n          margin-left: 0.6rem;\n          color: #ddd; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-top: 4px; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n          color: #56abbb; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n      float: right;\n      clear: none;\n      margin: 2rem 1.2rem 0 0;\n      color: #fff; }\n\n.gallery.list[_ngcontent-%COMP%]   .mix[_ngcontent-%COMP%]   .tech-spec[_ngcontent-%COMP%] {\n      display: block;\n      margin-top: 0.4rem; }\n\n.gallery[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    position: relative; }\n\n.gallery[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n      display: block; }\n\n.gallery[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%] {\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n\n.gallery[_ngcontent-%COMP%]   .fluid_thumb[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    padding-top: 59.482%;\n    border: 1px solid #e4edf2; }\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    background-size: cover; }\n\n.gallery[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 1.5rem;\n    background-color: #ffd600;\n    -webkit-transition: transform 0.25s ease-in;\n    -webkit-transition: -webkit-transform 0.25s ease-in;\n    transition: -webkit-transform 0.25s ease-in;\n    transition: transform 0.25s ease-in;\n    transition: transform 0.25s ease-in, -webkit-transform 0.25s ease-in;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n\n.gallery[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      font-weight: bold;\n      font-size: 1.4rem;\n      color: #333; }\n\n.gallery[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: block;\n        font-weight: normal;\n        color: #707070; }\n\n.gallery[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      float: right;\n      width: 3.6rem;\n      height: 3.6rem;\n      background-color: #000;\n      text-align: center;\n      border-radius: 50%; }\n\n.gallery[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n        display: block;\n        margin-top: 0.4rem;\n        font-size: 2rem;\n        color: #ffd600; }\n\n.gallery[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n    display: block;\n    clear: both;\n    height: 1.6rem;\n    color: #000; }\n\n.gallery[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n      font-size: 1.4rem; }\n\n.gallery[_ngcontent-%COMP%]   .tech-spec[_ngcontent-%COMP%] {\n    margin-top: 1rem; }\n\n\n\n.tech-spec[_ngcontent-%COMP%]:after {\n  display: table;\n  content: '';\n  clear: both; }\n\n.tech-spec[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0.2rem;\n  padding: 0.1rem 0.8rem 0.2rem;\n  background-color: #333;\n  font-size: 1.1rem;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 0.2rem; }\n\n.tech-spec[_ngcontent-%COMP%]   .access[_ngcontent-%COMP%] {\n  background-color: #8dc63f; }\n\n.tech-spec[_ngcontent-%COMP%]   .respon[_ngcontent-%COMP%] {\n  background-color: #f2b600; }\n\n.tech-spec[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  background-color: #b84ddb; }\n\n.tech-spec[_ngcontent-%COMP%]   .html5[_ngcontent-%COMP%] {\n  background-color: #ec6334; }\n\n.tech-spec[_ngcontent-%COMP%]   .css3[_ngcontent-%COMP%] {\n  background-color: #ec346f; }\n\n.tech-spec[_ngcontent-%COMP%]   .jquery[_ngcontent-%COMP%] {\n  background-color: #288aad; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW8vRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXFBvcnRmb2xpb1xccG9ydGZvbGlvLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW8vRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxccGxhY2Vob2xkZXIuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW8vRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQ0FJLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBRE5oQjtFQU1RLGdCQUFnQjtFQUNoQixzQkVKMkI7RUZLM0IsNkJBQTZCO0VBQzdCLHNCQUFzQixFQUFBOztBQVQ5QjtJQWdCWSxXQUFXLEVBQUE7O0FBaEJ2QjtJQW9CWSxZQUFZLEVBQUE7O0FBcEJ4QjtJQXdCWSxXQUFXLEVBQUE7O0FBeEJ2Qjs7TUE0QmdCLGNBQWM7TUFDZCxvQkUxQm1CO01GMkJuQixXQUFXO01BQ1gseUJBQXlCLEVBQUE7O0FBL0J6QztNQW1DZ0IsZUFBZSxFQUFBOztBQW5DL0I7TUF3Q29CLFdBQVcsRUFBQTs7QUF4Qy9CO0VBZ0RZLGtCQUFrQixFQUFBOztBQUs5QixhQUFBOztBQUNBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBRWIsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFFbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUU5Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBOEM7RUFDOUMseUJBQXlCO0VBRXpCLG1CQUFtQixFQUFBOztBQWJ2Qjs7SUFpQlEscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTs7QUV4QmhCO01GTUo7O1FBcUJZLFVBQVUsRUFBQSxFQU1qQjs7QUVqQ0Q7TUZNSjs7UUF5QlksWUFBWSxFQUFBLEVBRW5COztBQTNCTDtJQThCUSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJFckYyQjtJRnNGM0IseUJBQXlCO0lBQ3pCLDBDQUF5QztJQUN6QywrQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHlDQUF3QztJRWtGNUMsb0NGakZ3QztJRXFGeEMsNEJGckZ3QyxFQUFBOztBQXhDNUM7TUEyQ1ksV0FBVztNQUNYLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsV0FBVztNQUNYLDhCQUE4QjtNQUM5Qix3QkFBd0I7TUVnRWhDLGdDRi9Ed0M7TUVtRXhDLHdCRm5Fd0MsRUFBQTs7QUFqRDVDO01BcURZLDJCQUEyQixFQUFBOztBQXJEdkM7TUF5RFksMkJBQTJCLEVBQUE7O0FBekR2QztJQStEWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUF5QyxFQUFBOztBQWpFckQ7TUFxRW9CLGFBQWEsRUFBQTs7QUFyRWpDO01BMEVnQixnQkFBZ0I7TUFDaEIseUJBQXlCO01FcUNyQyx1Q0ZwQ21EO01Fd0NuRCwrQkZ4Q21ELEVBQUE7O0FBNUV2RDtRQStFb0IsV0FBVyxFQUFBOztBQS9FL0I7VUFrRndCLGVBQWU7VUFDZixtQkV0SVc7VUZ1SVgsV0FBVyxFQUFBOztBQXBGbkM7UUF5Rm9CLGVBQWUsRUFBQTs7QUF6Rm5DO1VBMkZ3QixjQUFjLEVBQUE7O0FBM0Z0QztNQWlHZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCx1QkFBaUQ7TUFDakQsV0FBVyxFQUFBOztBQXBHM0I7TUF3R2dCLGNBQWM7TUFDZCxrQkU1Sm1CLEVBQUE7O0FGbURuQztJQStHUSxrQkFBa0IsRUFBQTs7QUEvRzFCO01Ba0hZLGNBQWMsRUFBQTs7QUFsSDFCO01FZ0hJLHVDRk9tRDtNRUhuRCwrQkZHbUQsRUFBQTs7QUF2SHZEO0lBNkhRLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUIsRUFBQTs7QUFqSWpDO0lBcUlRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJRXRGZixzQkZ1RmtDLEVBQUE7O0FBM0l0QztJQStJUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxlRXhNMkI7SUZ5TTNCLHlCQUF5QjtJRXhEN0IsMkNGeUQ4QztJRXJEOUMsbURGcUQ4QztJRXJEOUMsMkNGcUQ4QztJRXJEOUMsbUNGcUQ4QztJRXJEOUMsb0VGcUQ4QztJRXZDOUMsMENGd0M4QztJRXBDOUMsa0NGb0M4QyxFQUFBOztBQXhKbEQ7TUEySlksaUJBQWlCO01BQ2pCLGlCRS9NdUI7TUZnTnZCLFdBQVcsRUFBQTs7QUE3SnZCO1FBK0pnQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGNBQWMsRUFBQTs7QUFqSzlCO01Bc0tZLFlBQVk7TUFDWixhRTFOdUI7TUYyTnZCLGNFM051QjtNRjROdkIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTs7QUEzSzlCO1FBOEtnQixjQUFjO1FBQ2Qsa0JFbE9tQjtRRm1PbkIsZUVuT21CO1FGb09uQixjQUFjLEVBQUE7O0FBakw5QjtJQXVMUSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNFNU8yQjtJRjZPM0IsV0FBVyxFQUFBOztBQTFMbkI7TUE2TFksaUJFaFB1QixFQUFBOztBRm1EbkM7SUFtTVEsZ0JFdFAyQixFQUFBOztBRjBQbkMsZUFBQTs7QUFDQTtFQUVRLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUpuQjtFQVFRLFdBQVc7RUFDWCxjRXBRMkI7RUZxUTNCLDZCRXJRMkI7RUZzUTNCLHNCQUFzQjtFQUN0QixpQkV2UTJCO0VGd1EzQixXQUFXO0VBQ1gseUJBQXlCO0VFMUs3QixxQkEvRitCLEVBQUE7O0FGMlBuQztFQW1CUSx5QkFBeUIsRUFBQTs7QUFuQmpDO0VBdUJRLHlCQUF5QixFQUFBOztBQXZCakM7RUEyQlEseUJBQXlCLEVBQUE7O0FBM0JqQztFQStCUSx5QkFBeUIsRUFBQTs7QUEvQmpDO0VBbUNRLHlCQUF5QixFQUFBOztBQW5DakM7RUF1Q1EseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1BvcnRmb2xpby9wb3J0Zm9saW8udmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX2RlcGVuZGVuY3kvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9taXhpbic7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L3BsYWNlaG9sZGVyJztcclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gICAgaDIge1xyXG4gICAgICAgIEBleHRlbmQgJWJsaW5kO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlciguNCkgdW5pdHNDb252ZXJ0ZXIoLjUpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlYmxpbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWZpbHRlciB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1zb3J0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgIHN0cm9uZyxcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKC42KSB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYudjEge1xyXG4gICAgICAgIC5pbnIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiA9R2FsbGVyeSAqL1xyXG4uZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcigyKSB1bml0c0NvbnZlcnRlcigyKSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YTI3NTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAzODk5YztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG4gICAgLmdhcCxcclxuICAgIC5taXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjMuNSU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ3RhYmxldCcpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ3Bob25lJykge1xyXG4gICAgICAgICAgICB3aWR0aDogNDYuNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5taXgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y3ZjdmNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuNDUpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1zdHlsZShwcmVzZXJ2ZS0zZCk7XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDQ1ZGVnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjY2Vzc2liaWxpdHk6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNmJkMmU4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5yZXNwb25zaXZlOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2E2ZTZhNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5saXN0IHtcclxuICAgICAgICAubWl4IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XHJcblxyXG4gICAgICAgICAgICBmaWd1cmV7XHJcbiAgICAgICAgICAgICAgICA+IC5mbHVpZF90aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlnY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YWJiYjtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUzZCgwLCAwLCAwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHVuaXRzQ29udmVydGVyKC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICA+IC5mYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTZhYmJiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGltZSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjbGVhcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogdW5pdHNDb252ZXJ0ZXIoMikgdW5pdHNDb252ZXJ0ZXIoMS4yKSAwIDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRlY2gtc3BlYyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHVuaXRzQ29udmVydGVyKC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaWd1cmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZmlnY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbHVpZF90aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDU5LjQ4MiU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZWRmMjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZC1zaXplKGNvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoMS41KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjAwO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24odHJhbnNmb3JtIC4yNXMgZWFzZS1pbik7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApKTtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS40KTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiB1bml0c0NvbnZlcnRlcigzLjYpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHVuaXRzQ29udmVydGVyKDMuNik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgPiAuZmEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlciguNCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDIpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmQ2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgaGVpZ2h0OiB1bml0c0NvbnZlcnRlcigxLjYpO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICA+IC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS40KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRlY2gtc3BlYyB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPVRlY2ggU3BlYyAqL1xyXG4udGVjaC1zcGVje1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgPiBzcGFuIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IHVuaXRzQ29udmVydGVyKC4yKTtcclxuICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlciguMSkgdW5pdHNDb252ZXJ0ZXIoLjgpIHVuaXRzQ29udmVydGVyKC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS4xKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModW5pdHNDb252ZXJ0ZXIoLjIpKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRjNjNmO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmI2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I4NGRkYjtcclxuICAgIH1cclxuXHJcbiAgICAuaHRtbDUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzYzMzQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNzczMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzM0NmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmpxdWVyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4OGFhZDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBAUGxhY2Vob2xkZXJcclxuLy8gdXNlOiBAZXh0ZW5kICV7e3BsYWNlaG9sZGVyIG5hbWV9fVxyXG5cclxuJWJsaW5kIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvL2NsaXA6IHJlY3QoMCAwIDAgMCk7IC8vIElFIDYsIDdcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbn1cclxuXHJcbiV1bmJsaW5kIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgY2xpcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuJWNsZWFyZml4IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.view.html',
          styleUrls: ['./portfolio.view.scss']
        }]
      }], function () {
        return [{
          type: _services_portfolio_Portfolio_service__WEBPACK_IMPORTED_MODULE_5__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Technique/Technique.controller.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/Technique/Technique.controller.ts ***!
    \**************************************************************/

  /*! exports provided: TechniqueController */

  /***/
  function srcAppComponentsTechniqueTechniqueControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechniqueController", function () {
      return TechniqueController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_technique_Technique_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/technique/Technique.service */
    "./src/app/services/technique/Technique.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TechniqueController_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r15);
      }
    }

    function TechniqueController_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r16);
      }
    }

    function TechniqueController_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r17);
      }
    }

    var TechniqueController =
    /*#__PURE__*/
    function () {
      function TechniqueController(techniqueService) {
        _classCallCheck(this, TechniqueController);

        this.techniqueService = techniqueService;
        this.faFileCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileCode"];
        this.techniqueList = this.techniqueService.getTechniqueList;
      }

      _createClass(TechniqueController, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TechniqueController;
    }();

    TechniqueController.ɵfac = function TechniqueController_Factory(t) {
      return new (t || TechniqueController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_technique_Technique_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
    };

    TechniqueController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TechniqueController,
      selectors: [["app-technique"]],
      decls: 19,
      vars: 4,
      consts: [["id", "technique", 1, "technique"], [3, "icon"], [1, "inr"], [4, "ngFor", "ngForOf"]],
      template: function TechniqueController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Technique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Frontend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TechniqueController_li_8_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TechniqueController_li_13_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TechniqueController_li_18_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techniqueList.get("frontend"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techniqueList.get("backend"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techniqueList.get("database"));
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".technique[_ngcontent-%COMP%] {\n  padding: 6rem 3.4rem 14rem 9rem;\n  background-color: #f2b701;\n  color: #fff; }\n  .technique[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-size: 2.2rem;\n    text-transform: capitalize; }\n  .technique[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n    margin-top: 2rem; }\n  .technique[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0.4rem 1rem;\n    background-color: #fecc2d;\n    font-size: 2rem; }\n  .technique[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-top: 1rem; }\n  .technique[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      padding: 0.2rem 0;\n      font-size: 1.4rem; }\n  .technique[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    clear: both;\n    margin: 3.5rem 0;\n    border-top: 1px solid #fff;\n    border-bottom: 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9UZWNobmlxdWUvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXFRlY2huaXF1ZVxcdGVjaG5pcXVlLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9UZWNobmlxdWUvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLCtCQ0UrQjtFREQvQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0VBSGY7SUFNUSxtQkFBbUI7SUFDbkIsaUJDSjJCO0lESzNCLDBCQUEwQixFQUFBO0VBUmxDO0lBWVEsZ0JDVDJCLEVBQUE7RURIbkM7SUFnQlEscUJBQXFCO0lBQ3JCLG9CQ2QyQjtJRGUzQix5QkFBeUI7SUFDekIsZUNoQjJCLEVBQUE7RURIbkM7SUF1QlEsZ0JDcEIyQixFQUFBO0VESG5DO01BMEJZLGlCQUE2QjtNQUM3QixpQkN4QnVCLEVBQUE7RURIbkM7SUFnQ1EsV0FBVztJQUNYLGdCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1RlY2huaXF1ZS90ZWNobmlxdWUudmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX2RlcGVuZGVuY3kvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9taXhpbic7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L3BsYWNlaG9sZGVyJztcclxuXHJcbi50ZWNobmlxdWUge1xyXG4gICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoNikgdW5pdHNDb252ZXJ0ZXIoMy40KSB1bml0c0NvbnZlcnRlcigxNCkgdW5pdHNDb252ZXJ0ZXIoOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJiNzAxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigyLjIpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHVuaXRzQ29udmVydGVyKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoLjQpIHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWNjMmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB1bml0c0NvbnZlcnRlcigyKTtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5pdHNDb252ZXJ0ZXIoMSk7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoLjIpIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS40KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIG1hcmdpbjogdW5pdHNDb252ZXJ0ZXIoMy41KSAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQCBNaXhpbnNcclxuLy8gdXNlOiBAaW5jbHVkZSB7e21peGluIG5hbWV9fVxyXG5cclxuQGZ1bmN0aW9uIHVuaXRzQ29udmVydGVyKCRudW0pIHtcclxuICAgIEBpZiAoJGZvbnRVbml0ICE9ICdyZW0nKSB7IC8vIHJlbeydtCDslYTri5Ag65WMXHJcbiAgICAgICAgQHJldHVybiAjeyRudW0gKiAkZGVmYXVsdEZvbnRTaXplfSN7JGZvbnRVbml0fTsgLy8gcHgsIHB0IOuTsSDsoIjrjIAg7IiY7LmYIOyCrOyaqVxyXG4gICAgfSBAZWxzZSB7IC8vIHJlbVxyXG4gICAgICAgIEByZXR1cm4gI3skbnVtfSN7JGZvbnRVbml0fTtcclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiAnJykgeyAgLy8gU3RyaW5nIFJlcGxhY2VcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICAgIEBpZiAoJGluZGV4KSB7XHJcbiAgICAgICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gd2ViLWZvbnRcclxuQG1peGluIHdlYi1mb250KCRuYW1lLCAkcGF0aCwgJHdlaWdodDogbnVsbCwgJHN0eWxlOiBudWxsLCAkZXh0czogZW90IHdvZmYyIHdvZmYgdHRmIHN2Zykge1xyXG4gICAgJHNyYzogbnVsbDtcclxuICAgICRleHRtb2RzOiAoZW90OiAnPycsIHN2ZzogJyMnICsgc3RyLXJlcGxhY2UoJG5hbWUsICcgJywgJ18nKSk7XHJcbiAgICAkZm9ybWF0czogKG90ZjogJ29wZW50eXBlJywgdHRmOiAndHJ1ZXR5cGUnKTtcclxuXHJcbiAgICBAZWFjaCAkZXh0IGluICRleHRzIHtcclxuICAgICAgICAkZXh0bW9kOiBpZihtYXAtaGFzLWtleSgkZXh0bW9kcywgJGV4dCksICRleHQgKyBtYXAtZ2V0KCRleHRtb2RzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJGZvcm1hdDogaWYobWFwLWhhcy1rZXkoJGZvcm1hdHMsICRleHQpLCBtYXAtZ2V0KCRmb3JtYXRzLCAkZXh0KSwgJGV4dCk7XHJcbiAgICAgICAgJHNyYzogYXBwZW5kKCRzcmMsIHVybChxdW90ZSgkcGF0aCArICcuJyArICRleHRtb2QpKSBmb3JtYXQocXVvdGUoJGZvcm1hdCkpLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHF1b3RlKCRuYW1lKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IGF1dG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogJHN0eWxlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgICAgIHNyYzogbG9jYWwocXVvdGUoJG5hbWUpKSwgJHNyYztcclxuICAgIH1cclxufVxyXG5cclxuLy8gbWVkaWEtYnJlYWtwb2ludFxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICAgIEBpZiAoJHBvaW50ID09ICdwaG9uZScpIHsgLy9tb2JpbGVcclxuICAgICAgICAkcG9pbnQ6ICRwaG9uZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAnbW9iaWxlJykgeyAvL3RhYmxldFxyXG4gICAgICAgICRwb2ludDogJG1vYmlsZTtcclxuICAgIH0gQGVsc2UgaWYgKCRwb2ludCA9PSAndGFibGV0JykgeyAvL2Rlc2NrdG9wXHJcbiAgICAgICAgJHBvaW50OiAkdGFibGV0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgI3skcG9pbnR9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYWRqdXN0LWxvY2F0aW9uXHJcbi8vQG1peGluIGFkanVzdC1sb2NhdGlvbigkeCwgJHkpIHtcclxuLy8gICAgQGlmIHVuaXRsZXNzKCR4KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHh9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHg6IDFweCAqICR4O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIEBpZiB1bml0bGVzcygkeSkge1xyXG4vLyAgICAgICAgQHdhcm4gXCJBc3N1bWluZyAjeyR5fSB0byBiZSBpbiBwaXhlbHNcIjtcclxuLy8gICAgICAgICR5OiAxcHggKiAkeTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OiR4O3RvcDogJHk7XHJcbi8vfVxyXG5cclxuLy8gZGlzcGxheVxyXG5AbWl4aW4gZGlzcGxheSgkdmFsKSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LSN7JHZhbH07XHJcbiAgICBkaXNwbGF5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4LWRpcmVjdGlvblxyXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyBmbGV4XHJcbkBtaXhpbiBmbGV4KCR2YWwpIHtcclxuICAgIC13ZWJraXQtZmxleDogJHZhbDtcclxuICAgIC1tcy1mbGV4OiAkdmFsO1xyXG4gICAgZmxleDogJHZhbDtcclxufVxyXG5cclxuLy8gdXNlci1zZWxlY3RcclxuQG1peGluIHVzZXItc2VsZWN0KCR2YWwpIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgdXNlci1zZWxlY3Q6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGJvcmRlci1yYWRpdXNcclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdmFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1zaXplXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxufVxyXG5cclxuLy8gYmFja2dyb3VuZC1ncmFkaWVudFxyXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkZnJvbSwgJHRvKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZnJvbSwgJHRvKTtcclxufVxyXG5cclxuLy8gb3BhY2l0eVxyXG5AbWl4aW4gb3BhY2l0eSgkdmFsKSB7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PSN7JHZhbCAqIDEwMH0pXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9I3skdmFsICogMTAwfSk7XHJcbiAgICBvcGFjaXR5OiAkdmFsO1xyXG59XHJcblxyXG4vLyBrZXlmcmFtZXNcclxuQG1peGluIGtleWZyYW1lcygkbmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYW5pbWF0aW9uXHJcbkBtaXhpbiBhbmltYXRpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICR2YWw7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1vLWFuaW1hdGlvbjogJHZhbDtcclxuICAgIGFuaW1hdGlvbjogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNpdGlvblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1vLXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICB0cmFuc2l0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2xhdGUzZFxyXG5AbWl4aW4gdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm06ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1zdHlsZVxyXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG59XHJcblxyXG4vLyB0ZXh0LXNoYWRvd1xyXG5AbWl4aW4gdGV4dC1zaGFkb3coJHZhbCkge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHZhbDtcclxuICAgIHRleHQtc2hhZG93OiAkdmFsO1xyXG59XHJcblxyXG4vLyBlbGxpcHNpc1xyXG5AbWl4aW4gZWxsaXBzaXMoJGxpbmVzOiAxKSB7XHJcbiAgICBAaWYgKCRsaW5lcyA9PSAxKSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYm94O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLy8gW0ldIGhlaWdodCDqs7Xsi51cclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7JeG7J2E6rK97JqwOiAoKGZvbmN0LXNpemUgKiBsaW5lLWhlaWdodCkgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQg64uo7JyE6rCAIOyeiOydhOqyveyasDogKGxpbmUtaGVpZ2h0ICogLXdlYmtpdC1saW5lLWNsYW1wKVxyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechniqueController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-technique',
          templateUrl: './technique.view.html',
          styleUrls: ['./technique.view.scss']
        }]
      }], function () {
        return [{
          type: _services_technique_Technique_service__WEBPACK_IMPORTED_MODULE_2__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Wiki/Wiki.controller.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/Wiki/Wiki.controller.ts ***!
    \****************************************************/

  /*! exports provided: WikiController */

  /***/
  function srcAppComponentsWikiWikiControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WikiController", function () {
      return WikiController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var WikiController =
    /*#__PURE__*/
    function () {
      function WikiController() {
        _classCallCheck(this, WikiController);

        this.faFileArchive = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileArchive"];
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
      }

      _createClass(WikiController, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WikiController;
    }();

    WikiController.ɵfac = function WikiController_Factory(t) {
      return new (t || WikiController)();
    };

    WikiController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WikiController,
      selectors: [["app-wiki"]],
      decls: 79,
      vars: 7,
      consts: [["id", "wiki", 1, "wiki"], [3, "icon"], ["href", "#", "rel", "noopener", "target", "_blank"], [1, "inr"], [1, "fa", 3, "icon"]],
      template: function WikiController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " J Snippet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uC6F9\uD45C\uC900 / \uC6F9 \uC811\uADFC\uC131 \uBC0F Front-end \uC131\uB2A5 \uD5A5\uC0C1\uC744 \uC704\uD574 HTML / CSS\uC640 \uAD00\uB828\uD55C \uC5EC\uB7EC\uAC00\uC9C0 \uD1B5\uC77C\uB41C \uADDC\uCE59\uC744 \uC801\uC6A9\uD574\uC11C \uB9C8\uD06C\uC5C5 \uD611\uC5C5 \uAC1C\uBC1C \uC2DC \uD6A8\uC728\uC801\uC73C\uB85C \uC791\uC5C5 \uB2A5\uB825\uC744 \uD5A5\uC0C1 \uC2DC\uD0AC\uC218 \uC788\uAC8C \uB9C8\uD06C\uC5C5 \uCF54\uB529 \uCEE8\uBCA4\uC158 \uAC00\uC774\uB4DC \uBB38\uC11C \uC785\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \uC6F9\uD45C\uC900(Web Standard)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uD45C\uC900\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uB294 \uAE30\uC220\uC774\uB098 \uADDC\uCE59\uC744 \uC758\uBBF8\uD558\uB294\uB370, \uC6F9\uC5D0\uC11C\uC758 \uD45C\uC900\uC740 W3C\uC758 \uD1A0\uB860\uC744 \uD1B5\uD574 \uB098\uC628 \uAD8C\uACE0\uC548\uC744 \uB9D0\uD558\uBA70, \uAD8C\uACE0\uC548 \uC774\uC678 \uB2E8\uACC4\uC218\uC900\uC758 \uC2A4\uD399\uC740 \uBE44\uD45C\uC900\uC774\uAC70\uB098 \uB3C5\uC790\uD655\uC7A5 \uC694\uC18C\uB97C \uC758\uBBF8\uD558\uAE30 \uB300\uBB38\uC5D0 \uAD6C\uBD84\uD574\uC57C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \uC6F9\uD45C\uC900 \uAD00\uB828 \uAE30\uC220");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HTML(\uAD6C\uC870\uC5B8\uC5B4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CSS(\uD45C\uD604)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "script(\uB3D9\uC791)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \uC6F9\uD45C\uC900\uC758 \uC7A5\uC810");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\uC6F9 \uC811\uADFC\uC131 \uC218\uC900\uC758 \uD5A5\uC0C1: \uC6F9\uD45C\uC900\uC744 \uC900\uC218\uD55C \uC6F9\uC0AC\uC774\uD2B8\uB294 \uB2E4\uC591\uD55C \uC6F9 \uBE0C\uB77C\uC6B0\uC800\uB098 \uC0C8\uB85C\uC6B4 \uAE30\uAE30\uC5D0\uC11C\uB3C4 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uBBC0\uB85C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC6F9\uC811\uADFC\uC131\uC544 \uD5A5\uC0C1\uB429\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0 \uB9AC\uB354, \uCD5C\uC2E0\uC758 \uC6F9\uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uB4F1 \uB2E4\uC591\uD55C \uD658\uACBD\uC5D0\uC11C \uC811\uC18D\uD574\uB3C4 \uC77C\uAD00\uC131\uC744 \uC720\uC9C0\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\uAC80\uC0C9 \uCE5C\uD654\uC801\uC778 \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uD604: meta\uC694\uC18C\uB97C \uC774\uC6A9\uD55C \uC815\uD655\uD55C \uBB38\uC11C \uC815\uBCF4\uC758 \uC81C\uACF5\uACFC \uC801\uC808\uD55C \uC81C\uBAA9 (Heading\uC694\uC18C)\uC758 \uC0AC\uC6A9, \uC758\uBBF8\uC5D0 \uB9DE\uB294 \uB9C8\uD06C\uC5C5\uC740 \uAC80\uC0C9\uC2DC \uACB0\uACFC\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uB294 \uC911\uC694\uD55C \uC815\uBCF4\uC785\uB2C8\uB2E4. \uB530\uB85C \uD64D\uBCF4\uB97C \uC704\uD55C \uBE44\uC6A9\uC744 \uC9C0\uCD9C\uD558\uC9C0 \uC54A\uC544\uB3C4 \uCDA9\uC2E4\uD558\uAC8C \uC791\uC131\uB41C \uBB38\uC11C \uC815\uBCF4\uB9CC\uC73C\uB85C\uB3C4 \uAC80\uC0C9\uC758 \uD6A8\uC728\uC131\uC744 \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\uAD6C\uC870\uC640 \uD45C\uD604\uC758 \uBD84\uB9AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uC190\uC26C\uC6B4 \uC720\uC9C0 \uBCF4\uC218 \uBC0F \uBE44\uC6A9 \uC808\uAC10 \uD6A8\uACFC: \uAD6C\uC870\uC640 \uD45C\uD604\uC744 \uBD84\uB9AC\uD588\uC744 \uACBD\uC6B0, \uC18C\uC2A4\uC758 \uACBD\uB7C9\uD654\uB85C \uC778\uD574 \uC11C\uBC84\uC758 \uD2B8\uB798\uD53D \uBE44\uC6A9\uC774 \uAC10\uC18C\uD558\uB294 \uBD80\uC218\uC801\uC778 \uD6A8\uACFC\uB3C4 \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \uC6F9 \uC811\uADFC\uC131(Web Accessibility)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\uBC95\uC801 \uAD00\uC810\uC5D0\uC11C\uC758 \uC6F9 \uC811\uADFC\uC131\uC740 '\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uC2E0\uCCB4\uC801, \uD658\uACBD\uC801 \uC870\uAC74\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uC6F9\uC5D0 \uC811\uADFC\uD558\uC5EC \uC774\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD558\uB294 \uAC83'\uC785\uB2C8\uB2E4. \uC880 \uB354 \uBCF4\uD3B8\uC801\uC778 \uC758\uBBF8\uC5D0\uC11C\uB294 \uC6F9 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uB97C \uCC28\uBCC4 \uBC0F \uC81C\uD55C \uC5C6\uC774 \uB3D9\uB4F1\uD558\uAC8C \uC774\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\uC7A5\uC560\uC778 \uBC0F \uACE0\uB839\uC790 \uB4F1\uC744 \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uC0AC\uB78C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC \uBC0F \uC7A5\uCE58, \uC6F9 \uBE0C\uB77C\uC6B0\uC800 \uB4F1\uC758 \uBAA8\uB4E0 \uD658\uACBD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \uC6F9\uC811\uADFC\uC131 \uC900\uC218\uC2DC \uAE30\uB300\uD6A8\uACFC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\uC7A5\uC560\uC778, \uACE0\uB839\uC790 \uB4F1\uC744 \uD3EC\uD568\uD55C \uC0AC\uC6A9\uC790\uCE35 \uD655\uB300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\uADDC\uC815\uACFC \uBC95\uC801 \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uB300\uD55C \uC900\uC218(2013\uB144\uAE4C\uC9C0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\uB2E4\uC591\uD55C \uD658\uACBD, \uC0C8\uB85C\uC6B4 \uAE30\uAE30\uC5D0\uC11C\uC758 \uC774\uC6A9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\uAC1C\uBC1C \uBC0F \uC6B4\uC6A9\uC758 \uD6A8\uC728\uC131 \uC81C\uACE0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\uC0AC\uD68C \uACF5\uD5CC \uBC0F \uBCF5\uC9C0 \uAE30\uC5C5\uC73C\uB85C\uC11C\uC758 \uAE30\uC5C5 \uC774\uBBF8\uC9C0 \uD5A5\uC0C1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\uC6F9 \uD45C\uC900 \uBC29\uC2DD\uC758 \uCF58\uD150\uCE20 \uB17C\uB9AC\uC801 \uB808\uC774\uC544\uC6C3 \uC120\uD615\uD654");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\uD30C\uC77C\uC758 \uC6A9\uB7C9\uC744 50% \uC774\uC0C1 \uBE44\uC6A9 \uC808\uAC10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\uC0AC\uB78C\uC774\uB098 \uB85C\uBD07(\uCEF4\uD4E8\uD130)\uC774 \uC774\uD574\uD558\uAE30 \uC26C\uC6B4 \uAD6C\uC870");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\uC720\uC9C0\uBCF4\uC218\uAC00 \uC27D\uACE0, \uC720\uC9C0\uBCF4\uC218 \uBE44\uC6A9\uC744 \uC808\uAC10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\uC6F9 \uC811\uADFC\uC131 \uBB38\uC81C\uB294 \uC6F9 \uD45C\uC900\uB9CC \uC9C0\uD0A4\uBA74 90% \uC774\uC0C1 \uD574\uACB0 \uAC00\uB2A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileArchive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckSquare);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: [".wiki[_ngcontent-%COMP%] {\n  padding: 6rem 18rem 14rem 9rem;\n  background-color: #7c378a;\n  color: #fff; }\n  .wiki[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n    -webkit-column-count: 2;\n    -webkit-column-gap: 3rem;\n    -moz-column-count: 2;\n    -moz-column-gap: 3rem;\n    -webkit-column-width: 24rem;\n    column-count: 2;\n    column-gap: 3rem;\n    -moz-column-width: 24rem;\n         column-width: 24rem; }\n  .wiki[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-size: 2.2rem; }\n  .wiki[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      margin-left: 1rem;\n      font-size: inherit;\n      color: #fff; }\n  .wiki[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    margin-top: 1.6rem;\n    line-height: 1.8;\n    -webkit-text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);\n    text-shadow: 0 0 2px rgba(255, 255, 255, 0.2); }\n  .wiki[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      font-weight: bold;\n      font-size: 2rem; }\n  .wiki[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .wiki[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n        font-size: 1.6rem; }\n  .wiki[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: disc;\n    padding-left: 2rem;\n    line-height: 2; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9XaWtpL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxXaWtpXFx3aWtpLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9XaWtpL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcc2Nzc1xcX2RlcGVuZGVuY3lcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw4QkNFK0I7RUREL0IseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtFQUhmO0lBTVEsdUJBQXVCO0lBQ3ZCLHdCQ0oyQjtJREszQixvQkFBb0I7SUFDcEIscUJDTjJCO0lETzNCLDJCQ1AyQjtJRFEzQixlQUFlO0lBQ2YsZ0JDVDJCO0lEVTNCLHdCQ1YyQjtTRFUzQixtQkNWMkIsRUFBQTtFREhuQztJQWlCUSxtQkFBbUI7SUFDbkIsaUJDZjJCLEVBQUE7RURIbkM7TUFxQlksaUJDbEJ1QjtNRG1CdkIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQXZCdkI7O0lBNkJRLGtCQzFCMkI7SUQyQjNCLGdCQUFnQjtJQ21LcEIscUREbEt3RDtJQ21LeEQsNkNEbkt3RCxFQUFBO0VBL0I1RDs7OztNQW1DWSxpQkFBaUI7TUFDakIsZUNqQ3VCLEVBQUE7RURIbkM7Ozs7UUF1Q2dCLGlCQ3BDbUIsRUFBQTtFREhuQztJQTZDUSxnQkFBZ0I7SUFDaEIsa0JDM0MyQjtJRDRDM0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9XaWtpL3dpa2kudmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX2RlcGVuZGVuY3kvdmFyaWFibGUnO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9taXhpbic7XHJcbkBpbXBvcnQgJ19kZXBlbmRlbmN5L3BsYWNlaG9sZGVyJztcclxuXHJcbi53aWtpIHtcclxuICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKDYpIHVuaXRzQ29udmVydGVyKDE4KSB1bml0c0NvbnZlcnRlcigxNCkgdW5pdHNDb252ZXJ0ZXIoOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzNzhhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmluciB7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiB1bml0c0NvbnZlcnRlcigzKTtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcclxuICAgICAgICAtbW96LWNvbHVtbi1nYXA6IHVuaXRzQ29udmVydGVyKDMpO1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiB1bml0c0NvbnZlcnRlcigyNCk7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IHVuaXRzQ29udmVydGVyKDMpO1xyXG4gICAgICAgIGNvbHVtbi13aWR0aDogdW5pdHNDb252ZXJ0ZXIoMjQpO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMi4yKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB1bml0c0NvbnZlcnRlcigxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCxcclxuICAgIGRsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bml0c0NvbnZlcnRlcigxLjYpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dC1zaGFkb3coMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSk7XHJcblxyXG4gICAgICAgIGR0LFxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDIpO1xyXG5cclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdW5pdHNDb252ZXJ0ZXIoMS42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuaXRzQ29udmVydGVyKDIpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEAgTWl4aW5zXHJcbi8vIHVzZTogQGluY2x1ZGUge3ttaXhpbiBuYW1lfX1cclxuXHJcbkBmdW5jdGlvbiB1bml0c0NvbnZlcnRlcigkbnVtKSB7XHJcbiAgICBAaWYgKCRmb250VW5pdCAhPSAncmVtJykgeyAvLyByZW3snbQg7JWE64uQIOuVjFxyXG4gICAgICAgIEByZXR1cm4gI3skbnVtICogJGRlZmF1bHRGb250U2l6ZX0jeyRmb250VW5pdH07IC8vIHB4LCBwdCDrk7Eg7KCI64yAIOyImOy5mCDsgqzsmqlcclxuICAgIH0gQGVsc2UgeyAvLyByZW1cclxuICAgICAgICBAcmV0dXJuICN7JG51bX0jeyRmb250VW5pdH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogJycpIHsgIC8vIFN0cmluZyBSZXBsYWNlXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcclxuXHJcbiAgICBAaWYgKCRpbmRleCkge1xyXG4gICAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBAcmV0dXJuICRzdHJpbmc7XHJcbn1cclxuXHJcbi8vIHdlYi1mb250XHJcbkBtaXhpbiB3ZWItZm9udCgkbmFtZSwgJHBhdGgsICR3ZWlnaHQ6IG51bGwsICRzdHlsZTogbnVsbCwgJGV4dHM6IGVvdCB3b2ZmMiB3b2ZmIHR0ZiBzdmcpIHtcclxuICAgICRzcmM6IG51bGw7XHJcbiAgICAkZXh0bW9kczogKGVvdDogJz8nLCBzdmc6ICcjJyArIHN0ci1yZXBsYWNlKCRuYW1lLCAnICcsICdfJykpO1xyXG4gICAgJGZvcm1hdHM6IChvdGY6ICdvcGVudHlwZScsIHR0ZjogJ3RydWV0eXBlJyk7XHJcblxyXG4gICAgQGVhY2ggJGV4dCBpbiAkZXh0cyB7XHJcbiAgICAgICAgJGV4dG1vZDogaWYobWFwLWhhcy1rZXkoJGV4dG1vZHMsICRleHQpLCAkZXh0ICsgbWFwLWdldCgkZXh0bW9kcywgJGV4dCksICRleHQpO1xyXG4gICAgICAgICRmb3JtYXQ6IGlmKG1hcC1oYXMta2V5KCRmb3JtYXRzLCAkZXh0KSwgbWFwLWdldCgkZm9ybWF0cywgJGV4dCksICRleHQpO1xyXG4gICAgICAgICRzcmM6IGFwcGVuZCgkc3JjLCB1cmwocXVvdGUoJHBhdGggKyAnLicgKyAkZXh0bW9kKSkgZm9ybWF0KHF1b3RlKCRmb3JtYXQpKSwgY29tbWEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBxdW90ZSgkbmFtZSk7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcclxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgICAgICBzcmM6IGxvY2FsKHF1b3RlKCRuYW1lKSksICRzcmM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1lZGlhLWJyZWFrcG9pbnRcclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgICBAaWYgKCRwb2ludCA9PSAncGhvbmUnKSB7IC8vbW9iaWxlXHJcbiAgICAgICAgJHBvaW50OiAkcGhvbmU7XHJcbiAgICB9IEBlbHNlIGlmICgkcG9pbnQgPT0gJ21vYmlsZScpIHsgLy90YWJsZXRcclxuICAgICAgICAkcG9pbnQ6ICRtb2JpbGU7XHJcbiAgICB9IEBlbHNlIGlmICgkcG9pbnQgPT0gJ3RhYmxldCcpIHsgLy9kZXNja3RvcFxyXG4gICAgICAgICRwb2ludDogJHRhYmxldDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICN7JHBvaW50fSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGFkanVzdC1sb2NhdGlvblxyXG4vL0BtaXhpbiBhZGp1c3QtbG9jYXRpb24oJHgsICR5KSB7XHJcbi8vICAgIEBpZiB1bml0bGVzcygkeCkge1xyXG4vLyAgICAgICAgQHdhcm4gXCJBc3N1bWluZyAjeyR4fSB0byBiZSBpbiBwaXhlbHNcIjtcclxuLy8gICAgICAgICR4OiAxcHggKiAkeDtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHkpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeX0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeTogMXB4ICogJHk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgcG9zaXRpb246cmVsYXRpdmU7bGVmdDokeDt0b3A6ICR5O1xyXG4vL31cclxuXHJcbi8vIGRpc3BsYXlcclxuQG1peGluIGRpc3BsYXkoJHZhbCkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC0jeyR2YWx9O1xyXG4gICAgZGlzcGxheTogJHZhbDtcclxufVxyXG5cclxuLy8gZmxleC1kaXJlY3Rpb25cclxuQG1peGluIGZsZXgtZGlyZWN0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJHZhbDtcclxufVxyXG5cclxuLy8gZmxleFxyXG5AbWl4aW4gZmxleCgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXg6ICR2YWw7XHJcbiAgICAtbXMtZmxleDogJHZhbDtcclxuICAgIGZsZXg6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHVzZXItc2VsZWN0XHJcbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIHVzZXItc2VsZWN0OiAkdmFsO1xyXG59XHJcblxyXG4vLyBib3JkZXItcmFkaXVzXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR2YWwpIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHZhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGJhY2tncm91bmQtc2l6ZVxyXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR2YWwpIHtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGJhY2tncm91bmQtZ3JhZGllbnRcclxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJGZyb20sICR0bykge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGZyb20sICR0byk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGZyb20sICR0byk7XHJcbn1cclxuXHJcbi8vIG9wYWNpdHlcclxuQG1peGluIG9wYWNpdHkoJHZhbCkge1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0jeyR2YWwgKiAxMDB9KVwiO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSN7JHZhbCAqIDEwMH0pO1xyXG4gICAgb3BhY2l0eTogJHZhbDtcclxufVxyXG5cclxuLy8ga2V5ZnJhbWVzXHJcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tcy1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyAjeyRuYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGFuaW1hdGlvblxyXG5AbWl4aW4gYW5pbWF0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW1vei1hbmltYXRpb246ICR2YWw7XHJcbiAgICAtby1hbmltYXRpb246ICR2YWw7XHJcbiAgICBhbmltYXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zaXRpb25cclxuQG1peGluIHRyYW5zaXRpb24oJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICR2YWw7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgdHJhbnNpdGlvbjogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNsYXRlM2RcclxuQG1peGluIHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybVxyXG5AbWl4aW4gdHJhbnNmb3JtKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICR2YWw7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm0tc3R5bGVcclxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLW9yaWdpblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxufVxyXG5cclxuLy8gdGV4dC1zaGFkb3dcclxuQG1peGluIHRleHQtc2hhZG93KCR2YWwpIHtcclxuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICR2YWw7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHZhbDtcclxufVxyXG5cclxuLy8gZWxsaXBzaXNcclxuQG1peGluIGVsbGlwc2lzKCRsaW5lczogMSkge1xyXG4gICAgQGlmICgkbGluZXMgPT0gMSkge1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGJveDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC8vIFtJXSBoZWlnaHQg6rO17IudXHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQg64uo7JyE6rCAIOyXhuydhOqyveyasDogKChmb25jdC1zaXplICogbGluZS1oZWlnaHQpICogLXdlYmtpdC1saW5lLWNsYW1wKVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsnojsnYTqsr3smrA6IChsaW5lLWhlaWdodCAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WikiController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wiki',
          templateUrl: './wiki.view.html',
          styleUrls: ['./wiki.view.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Workbench/Workbench.controller.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/Workbench/Workbench.controller.ts ***!
    \**************************************************************/

  /*! exports provided: WorkbenchController */

  /***/
  function srcAppComponentsWorkbenchWorkbenchControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkbenchController", function () {
      return WorkbenchController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_workbench_Workbench_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/workbench/Workbench.service */
    "./src/app/services/workbench/Workbench.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    function WorkbenchController_tbody_49_tr_1_i_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "G");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkbenchController_tbody_49_tr_1_i_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkbenchController_tbody_49_tr_1_i_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkbenchController_tbody_49_tr_1_i_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkbenchController_tbody_49_tr_1_i_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkbenchController_tbody_49_tr_1_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r29 = ctx.$implicit;
        var isFirst_r30 = ctx.first;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", isFirst_r30 ? "" : ", ", "", skill_r29, "");
      }
    }

    function WorkbenchController_tbody_49_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkbenchController_tbody_49_tr_1_i_11_Template, 2, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkbenchController_tbody_49_tr_1_i_12_Template, 2, 0, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkbenchController_tbody_49_tr_1_i_13_Template, 2, 0, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WorkbenchController_tbody_49_tr_1_i_14_Template, 2, 0, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkbenchController_tbody_49_tr_1_i_15_Template, 2, 0, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkbenchController_tbody_49_tr_1_span_17_Template, 2, 2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r22["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r22["start"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r22["end"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r22["role"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r22["works"]["guide"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r22["works"]["markup"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r22["works"]["uidev"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r22["works"]["frontdev"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r22["works"]["backdev"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r22["skill"]);
      }
    }

    function WorkbenchController_tbody_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkbenchController_tbody_49_tr_1_Template, 18, 10, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var workbenchModel_r19 = ctx.$implicit;
        var i_r20 = ctx.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-idx", i_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, workbenchModel_r19["project"], ctx_r18.searchText));
      }
    }

    var WorkbenchController =
    /*#__PURE__*/
    function () {
      function WorkbenchController(workbenchService) {
        _classCallCheck(this, WorkbenchController);

        this.workbenchService = workbenchService;
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.searchText = '';
      }

      _createClass(WorkbenchController, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.workbenchService.getWorkbenchData.subscribe(function (data) {
            _this3.workbenchModel$ = data;
          });
        }
      }]);

      return WorkbenchController;
    }();

    WorkbenchController.ɵfac = function WorkbenchController_Factory(t) {
      return new (t || WorkbenchController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workbench_Workbench_service__WEBPACK_IMPORTED_MODULE_2__["default"]));
    };

    WorkbenchController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkbenchController,
      selectors: [["app-workbench"]],
      decls: 50,
      vars: 3,
      consts: [["id", "workbench", 1, "workbench"], [3, "icon"], [1, "inr"], [1, "func_area"], [1, "combo"], ["for", "srch"], ["type", "search", "title", "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC2DC\uBA74 \uD544\uD130\uB9C1 \uCC98\uB9AC \uB429\uB2C8\uB2E4.", "placeholder", "\uD544\uD130\uB9C1 \uAC80\uC0C9\uC5B4 \uC785\uB825", "id", "srch", 3, "ngModel", "ngModelChange"], [1, "label_area"], ["title", "\uAC00\uC774\uB4DC", 1, "guide"], ["title", "\uB9C8\uD06C\uC5C5", 1, "markup"], ["title", "UI\uAC1C\uBC1C", 1, "uidev"], ["title", "\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C", 1, "frontdev"], ["title", "\uBC31\uC5D4\uB4DC\uAC1C\uBC1C", 1, "backdev"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "pjt"], [1, "start"], [1, "end"], [1, "role"], [1, "work"], ["title", "\uAC00\uC774\uB4DC", "class", "guide", 4, "ngIf"], ["title", "\uB9C8\uD06C\uC5C5", "class", "markup", 4, "ngIf"], ["title", "UI\uAC1C\uBC1C", "class", "uidev", 4, "ngIf"], ["title", "\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C", "class", "frontdev", 4, "ngIf"], ["title", "\uBC31\uC5D4\uB4DC\uAC1C\uBC1C", "class", "backdev", 4, "ngIf"]],
      template: function WorkbenchController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Workbench");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uAC80\uC0C9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkbenchController_Template_input_ngModelChange_10_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uAC00\uC774\uB4DC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\uB9C8\uD06C\uC5C5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "UI\uAC1C\uBC1C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "BE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\uBC31\uC5D4\uB4DC\uAC1C\uBC1C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "caption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\uD504\uB85C\uC81D\uD2B8 \uC791\uC5C5 \uC694\uC57D \uBAA9\uB85D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uD504\uB85C\uC81D\uD2B8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\uC2DC\uC791\uC77C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\uC644\uB8CC\uC77C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\uC5ED\uD560");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\uB2F4\uB2F9\uC5C5\uBB34");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\uC0AC\uC6A9\uAE30\uC220");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, WorkbenchController_tbody_49_Template, 3, 5, "tbody", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCalendarAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workbenchModel$);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]],
      styles: [".workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .workbench[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px; }\n\n.workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]:after {\n  display: table;\n  content: '';\n  clear: both; }\n\n.workbench[_ngcontent-%COMP%] {\n  padding: 6rem 3.4rem 14rem 9rem;\n  background-color: #7cb854; }\n\n.workbench[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-size: 2.2rem;\n    color: #fff;\n    text-transform: capitalize; }\n\n.workbench[_ngcontent-%COMP%]   .inr[_ngcontent-%COMP%] {\n    margin-top: 2rem; }\n\n.workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%], .workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%] {\n    vertical-align: top; }\n\n.workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%] {\n    float: left; }\n\n.workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      padding: 0.6rem 1.2rem;\n      border: 0;\n      border-left: 4px solid #1b809e;\n      border-radius: 0.4rem;\n      background-color: #fff; }\n\n.workbench[_ngcontent-%COMP%]   .func_area[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%] {\n    float: right; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 0.4rem;\n    padding: 0.2rem 0.6rem;\n    border-radius: 0.4rem;\n    background-color: #fff;\n    font-weight: bold;\n    font-style: normal;\n    color: #fff;\n    text-align: center;\n    -webkit-text-shadow: 0 0 2px #000, 0 0 4px #fff;\n    text-shadow: 0 0 2px #000, 0 0 4px #fff; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-of-type {\n      margin-left: 0; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i.guide[_ngcontent-%COMP%] {\n      background-color: #008080; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i.markup[_ngcontent-%COMP%] {\n      background-color: #da2315; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i.uidev[_ngcontent-%COMP%] {\n      background-color: #f2b600; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i.frontdev[_ngcontent-%COMP%] {\n      background-color: #800080; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   i.backdev[_ngcontent-%COMP%] {\n      background-color: #333; }\n\n.workbench[_ngcontent-%COMP%]   .label_area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 0 0.6rem;\n    font-size: 1.1rem;\n    -webkit-text-shadow: 0 0 2px #fff;\n    text-shadow: 0 0 2px #fff; }\n\n.workbench[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    table-layout: fixed;\n    width: 100%;\n    margin-top: 1rem;\n    border-collapse: collapse;\n    border-spacing: 0;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5); }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .workbench[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #bbb;\n    border-width: 0 0 1px 1px;\n    background-color: #fff;\n    text-align: center; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .workbench[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n      border-left: 0; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n    border-bottom-width: 4px;\n    background-color: #f0f0f0;\n    font-weight: bold;\n    -webkit-text-shadow: 1px 1px #fff;\n    text-shadow: 1px 1px #fff; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(1) {\n      width: 40%;\n      border-bottom-color: #bce44d; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2) {\n      width: 10%;\n      border-bottom-color: #8adb65; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3) {\n      width: 10%;\n      border-bottom-color: #4dd9aa; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(4) {\n      width: 5%;\n      border-bottom-color: #57d6df; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(5) {\n      width: 15%;\n      border-bottom-color: #4e8e0a; }\n\n.workbench[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(6) {\n      width: 20%;\n      border-bottom-color: #8c8e0a; }\n\n.workbench[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n    border-top: 2px solid #666; }\n\n.workbench[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n    border-bottom: 0; }\n\n.workbench[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n    background-color: #cef; }\n\n.workbench[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]:nth-of-type(1)   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n    border-top: 0; }\n\n.workbench[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    word-break: break-word; }\n\n.workbench[_ngcontent-%COMP%]   td.pjt[_ngcontent-%COMP%], .workbench[_ngcontent-%COMP%]   td.work[_ngcontent-%COMP%] {\n      text-align: left; }\n\n.workbench[_ngcontent-%COMP%]   td.pjt[_ngcontent-%COMP%] {\n      background-color: #eff; }\n\n.workbench[_ngcontent-%COMP%]   td.role[_ngcontent-%COMP%] {\n      background-color: #ffc; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Xb3JrYmVuY2gvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXFdvcmtiZW5jaFxcV29ya2JlbmNoLnZpZXcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9Xb3JrYmVuY2gvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxccGxhY2Vob2xkZXIuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9Xb3JrYmVuY2gvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQ0FJLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBRE5oQjtFQ2tCSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVcsRUFBQTs7QURwQmY7RUFDSSwrQkVFK0I7RUZEL0IseUJBQXlCLEVBQUE7O0FBRjdCO0lBS1EsbUJBQW1CO0lBQ25CLGlCRUgyQjtJRkkzQixXQUFXO0lBQ1gsMEJBQTBCLEVBQUE7O0FBUmxDO0lBWVEsZ0JFVDJCLEVBQUE7O0FGSG5DOztJQWtCWSxtQkFBbUIsRUFBQTs7QUFsQi9CO0lBc0JZLFdBQVcsRUFBQTs7QUF0QnZCO01BZ0NnQixzQkU3Qm1CO01GOEJuQixTQUFTO01BQ1QsOEJBQThCO01FZ0UxQyxxQkEvRitCO01GaUNuQixzQkFBc0IsRUFBQTs7QUFwQ3RDO0lBeUNZLFlBQVksRUFBQTs7QUF6Q3hCO0lBbURZLHFCQUFxQjtJQUNyQixtQkVqRHVCO0lGa0R2QixzQkVsRHVCO0lBK0YvQixxQkEvRitCO0lGb0R2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lFc0kxQiwrQ0ZySXdEO0lFc0l4RCx1Q0Z0SXdELEVBQUE7O0FBNUQ1RDtNQStEZ0IsY0FBYyxFQUFBOztBQS9EOUI7TUFtRWdCLHlCQUF5QixFQUFBOztBQW5FekM7TUF1RWdCLHlCQUF5QixFQUFBOztBQXZFekM7TUEyRWdCLHlCQUF5QixFQUFBOztBQTNFekM7TUErRWdCLHlCQUF5QixFQUFBOztBQS9FekM7TUFtRmdCLHNCQUFzQixFQUFBOztBQW5GdEM7SUF3RlksZ0JFckZ1QjtJRnNGdkIsaUJFdEZ1QjtJQThML0IsaUNGdkd5QztJRXdHekMseUJGeEd5QyxFQUFBOztBQTFGN0M7SUErRlEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkU5RjJCO0lGK0YzQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHNDQUFxQyxFQUFBOztBQXBHN0M7O0lBNkdRLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBOztBQWhIMUI7O01BbUhZLGNBQWMsRUFBQTs7QUFuSDFCO0lBd0hRLGVFckgyQjtJRnNIM0Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUVzRXJCLGlDRnJFcUM7SUVzRXJDLHlCRnRFcUMsRUFBQTs7QUE1SHpDO01BK0hZLFVBQVU7TUFDViw0QkFBNEIsRUFBQTs7QUFoSXhDO01Bb0lZLFVBQVU7TUFDViw0QkFBNEIsRUFBQTs7QUFySXhDO01BeUlZLFVBQVU7TUFDViw0QkFBNEIsRUFBQTs7QUExSXhDO01BOElZLFNBQVM7TUFDVCw0QkFBNEIsRUFBQTs7QUEvSXhDO01BbUpZLFVBQVU7TUFDViw0QkFBNEIsRUFBQTs7QUFwSnhDO01Bd0pZLFVBQVU7TUFDViw0QkFBNEIsRUFBQTs7QUF6SnhDO0lBaUtvQiwwQkFBMEIsRUFBQTs7QUFqSzlDO0lBdUtvQixnQkFBZ0IsRUFBQTs7QUF2S3BDO0lBNktvQixzQkFBc0IsRUFBQTs7QUE3SzFDO0lBc0x3QixhQUFhLEVBQUE7O0FBdExyQztJQThMUSxlRTNMMkI7SUY0TDNCLHNCQUFzQixFQUFBOztBQS9MOUI7TUFtTVksZ0JBQWdCLEVBQUE7O0FBbk01QjtNQXVNWSxzQkFBc0IsRUFBQTs7QUF2TWxDO01BMk1ZLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Xb3JrYmVuY2gvV29ya2JlbmNoLnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ19kZXBlbmRlbmN5L3ZhcmlhYmxlJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvbWl4aW4nO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9wbGFjZWhvbGRlcic7XHJcblxyXG4ud29ya2JlbmNoIHtcclxuICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKDYpIHVuaXRzQ29udmVydGVyKDMuNCkgdW5pdHNDb252ZXJ0ZXIoMTQpIHVuaXRzQ29udmVydGVyKDkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYjg1NDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDIuMik7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1bmNfYXJlYSB7XHJcbiAgICAgICAgLmNvbWJvLFxyXG4gICAgICAgIC5sYWJlbF9hcmVhIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21ibyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVibGluZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgLy8td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlciguNikgdW5pdHNDb252ZXJ0ZXIoMS4yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzFiODA5ZTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModW5pdHNDb252ZXJ0ZXIoLjQpKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYWJlbF9hcmVhIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWNsZWFyZml4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGFiZWxfYXJlYSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHVuaXRzQ29udmVydGVyKC40KTtcclxuICAgICAgICAgICAgcGFkZGluZzogdW5pdHNDb252ZXJ0ZXIoLjIpIHVuaXRzQ29udmVydGVyKC42KTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh1bml0c0NvbnZlcnRlciguNCkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdygoMCAwIDJweCAjMDAwLCAwIDAgNHB4ICNmZmYpKTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ndWlkZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDgwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm1hcmt1cCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGEyMzE1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnVpZGV2IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmI2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZnJvbnRkZXYge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5iYWNrZGV2IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgdW5pdHNDb252ZXJ0ZXIoLjYpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHVuaXRzQ29udmVydGVyKDEuMSk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQtc2hhZG93KDAgMCAycHggI2ZmZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXB0aW9uIHtcclxuICAgICAgICBAZXh0ZW5kICVibGluZDtcclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKDEuMik7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dC1zaGFkb3coMXB4IDFweCAjZmZmKTtcclxuXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiY2U0NGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzhhZGI2NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNGRkOWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzU3ZDZkZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNGU4ZTBhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM4YzhlMGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiB1bml0c0NvbnZlcnRlcigxLjUpO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICAgICYucGp0LFxyXG4gICAgICAgICYud29yayB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnBqdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJvbGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBAUGxhY2Vob2xkZXJcclxuLy8gdXNlOiBAZXh0ZW5kICV7e3BsYWNlaG9sZGVyIG5hbWV9fVxyXG5cclxuJWJsaW5kIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvL2NsaXA6IHJlY3QoMCAwIDAgMCk7IC8vIElFIDYsIDdcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbn1cclxuXHJcbiV1bmJsaW5kIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgY2xpcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuJWNsZWFyZml4IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkbenchController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workbench',
          templateUrl: './workbench.view.html',
          styleUrls: ['./Workbench.view.scss']
        }]
      }], function () {
        return [{
          type: _services_workbench_Workbench_service__WEBPACK_IMPORTED_MODULE_2__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: HeaderComponent, FooterComponent, FeaturesComponent, LicensesComponent, TechniqueComponent, WorkbenchComponent, PortfolioComponent, DevelopmentComponent, WikiComponent, BlogComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components_Header_Header_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @components/Header/Header.controller */
    "./src/app/components/Header/Header.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _components_Header_Header_controller__WEBPACK_IMPORTED_MODULE_0__["HeaderController"];
    });
    /* harmony import */


    var _components_Footer_Footer_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @components/Footer/Footer.controller */
    "./src/app/components/Footer/Footer.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _components_Footer_Footer_controller__WEBPACK_IMPORTED_MODULE_1__["FooterController"];
    });
    /* harmony import */


    var _components_Features_Features_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/Features/Features.controller */
    "./src/app/components/Features/Features.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return _components_Features_Features_controller__WEBPACK_IMPORTED_MODULE_2__["FeaturesController"];
    });
    /* harmony import */


    var _components_Licenses_Licenses_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @components/Licenses/Licenses.controller */
    "./src/app/components/Licenses/Licenses.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LicensesComponent", function () {
      return _components_Licenses_Licenses_controller__WEBPACK_IMPORTED_MODULE_3__["LicensesController"];
    });
    /* harmony import */


    var _components_Technique_Technique_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/Technique/Technique.controller */
    "./src/app/components/Technique/Technique.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TechniqueComponent", function () {
      return _components_Technique_Technique_controller__WEBPACK_IMPORTED_MODULE_4__["TechniqueController"];
    });
    /* harmony import */


    var _components_Workbench_Workbench_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @components/Workbench/Workbench.controller */
    "./src/app/components/Workbench/Workbench.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorkbenchComponent", function () {
      return _components_Workbench_Workbench_controller__WEBPACK_IMPORTED_MODULE_5__["WorkbenchController"];
    });
    /* harmony import */


    var _components_Portfolio_Portfolio_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/Portfolio/Portfolio.controller */
    "./src/app/components/Portfolio/Portfolio.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return _components_Portfolio_Portfolio_controller__WEBPACK_IMPORTED_MODULE_6__["PortfolioController"];
    });
    /* harmony import */


    var _components_Development_Development_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/Development/Development.controller */
    "./src/app/components/Development/Development.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevelopmentComponent", function () {
      return _components_Development_Development_controller__WEBPACK_IMPORTED_MODULE_7__["DevelopmentController"];
    });
    /* harmony import */


    var _components_Wiki_Wiki_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @components/Wiki/Wiki.controller */
    "./src/app/components/Wiki/Wiki.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WikiComponent", function () {
      return _components_Wiki_Wiki_controller__WEBPACK_IMPORTED_MODULE_8__["WikiController"];
    });
    /* harmony import */


    var _components_Blog_Blog_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @components/Blog/Blog.controller */
    "./src/app/components/Blog/Blog.controller.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return _components_Blog_Blog_controller__WEBPACK_IMPORTED_MODULE_9__["BlogController"];
    });
    /***/

  },

  /***/
  "./src/app/container/App.controller.ts":
  /*!*********************************************!*\
    !*** ./src/app/container/App.controller.ts ***!
    \*********************************************/

  /*! exports provided: AppController */

  /***/
  function srcAppContainerAppControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppController", function () {
      return AppController;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _components_Header_Header_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/Header/Header.controller */
    "./src/app/components/Header/Header.controller.ts");
    /* harmony import */


    var _components_Features_Features_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/Features/Features.controller */
    "./src/app/components/Features/Features.controller.ts");
    /* harmony import */


    var _components_Licenses_Licenses_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/Licenses/Licenses.controller */
    "./src/app/components/Licenses/Licenses.controller.ts");
    /* harmony import */


    var _components_Technique_Technique_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/Technique/Technique.controller */
    "./src/app/components/Technique/Technique.controller.ts");
    /* harmony import */


    var _components_Workbench_Workbench_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/Workbench/Workbench.controller */
    "./src/app/components/Workbench/Workbench.controller.ts");
    /* harmony import */


    var _components_Portfolio_Portfolio_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/Portfolio/Portfolio.controller */
    "./src/app/components/Portfolio/Portfolio.controller.ts");
    /* harmony import */


    var _components_Development_Development_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/Development/Development.controller */
    "./src/app/components/Development/Development.controller.ts");
    /* harmony import */


    var _components_Wiki_Wiki_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/Wiki/Wiki.controller */
    "./src/app/components/Wiki/Wiki.controller.ts");
    /* harmony import */


    var _components_Blog_Blog_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/Blog/Blog.controller */
    "./src/app/components/Blog/Blog.controller.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _components_Footer_Footer_controller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/Footer/Footer.controller */
    "./src/app/components/Footer/Footer.controller.ts"); // import * as $ from 'jquery';


    var AppController =
    /*#__PURE__*/
    function () {
      function AppController() {
        _classCallCheck(this, AppController);

        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
      }

      _createClass(AppController, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // 가로 스크롤 제거
          // $('#wrap .home').addClass('v1');
          document.querySelector('#wrap .home').classList.add('v1');
          var hash = location.hash; // const sectionOffsetTop = [
          //     $('#features').offset().top,
          //     $('#licenses').offset().top,
          //     $('#technique').offset().top,
          //     $('#workbench').offset().top,
          //     $('#portfolio').offset().top,
          //     $('#development').offset().top,
          //     $('#wiki').offset().top,
          //     $('#blog').offset().top
          // ];

          var sectionOffsetTop = [document.querySelector('#features').offsetTop, document.querySelector('#licenses').offsetTop, document.querySelector('#technique').offsetTop, document.querySelector('#workbench').offsetTop, document.querySelector('#portfolio').offsetTop, document.querySelector('#development').offsetTop, document.querySelector('#wiki').offsetTop, document.querySelector('#blog').offsetTop]; // const $container = $('#container');

          var $container = document.querySelector('#container');

          if (hash) {
            // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
            var $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');
            $sections.forEach(function (section) {
              return section.classList.add('v1');
            });

            switch (hash) {
              case '#features':
                // $container.scrollTop(sectionOffsetTop[0]);
                $container.scrollTop = sectionOffsetTop[0];
                break;

              case '#licenses':
                // $container.scrollTop(sectionOffsetTop[1]);
                $container.scrollTop = sectionOffsetTop[1];
                break;

              case '#technique':
                // $container.scrollTop(sectionOffsetTop[2]);
                $container.scrollTop = sectionOffsetTop[2];
                break;

              case '#workbench':
                // $container.scrollTop(sectionOffsetTop[3]);
                $container.scrollTop = sectionOffsetTop[3];
                break;

              case '#portfolio':
                // $container.scrollTop(sectionOffsetTop[4]);
                $container.scrollTop = sectionOffsetTop[4];
                break;

              case '#development':
                // $container.scrollTop(sectionOffsetTop[5]);
                $container.scrollTop = sectionOffsetTop[5];
                break;

              case '#wiki':
                // $container.scrollTop(sectionOffsetTop[6]);
                $container.scrollTop = sectionOffsetTop[6];
                break;

              case '#blog':
                // $container.scrollTop(sectionOffsetTop[7]);
                $container.scrollTop = sectionOffsetTop[7];
                break;
            }
          }
        }
      }]);

      return AppController;
    }();

    AppController.ɵfac = function AppController_Factory(t) {
      return new (t || AppController)();
    };

    AppController.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppController,
      selectors: [["app-root"]],
      decls: 24,
      vars: 1,
      consts: [["id", "skip"], ["href", "#content"], ["href", "#gnb"], ["id", "wrap"], [1, "home"], [1, "swipe"], ["id", "container"], ["id", "content"], ["href", "/", "title", "\uBA54\uC778 \uBC14\uB85C\uAC00\uAE30", "id", "btnHome", 1, "btn_home"], [3, "icon"]],
      template: function AppController_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uBCF8\uBB38 \uBC14\uB85C\uAC00\uAE30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uBA54\uB274 \uBC14\uB85C\uAC00\uAE30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-licenses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-technique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-workbench");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "J Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        }
      },
      directives: [_components_Header_Header_controller__WEBPACK_IMPORTED_MODULE_2__["HeaderController"], _components_Features_Features_controller__WEBPACK_IMPORTED_MODULE_3__["FeaturesController"], _components_Licenses_Licenses_controller__WEBPACK_IMPORTED_MODULE_4__["LicensesController"], _components_Technique_Technique_controller__WEBPACK_IMPORTED_MODULE_5__["TechniqueController"], _components_Workbench_Workbench_controller__WEBPACK_IMPORTED_MODULE_6__["WorkbenchController"], _components_Portfolio_Portfolio_controller__WEBPACK_IMPORTED_MODULE_7__["PortfolioController"], _components_Development_Development_controller__WEBPACK_IMPORTED_MODULE_8__["DevelopmentController"], _components_Wiki_Wiki_controller__WEBPACK_IMPORTED_MODULE_9__["WikiController"], _components_Blog_Blog_controller__WEBPACK_IMPORTED_MODULE_10__["BlogController"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _components_Footer_Footer_controller__WEBPACK_IMPORTED_MODULE_12__["FooterController"]],
      styles: ["#content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px; }\n\n#wrap[_ngcontent-%COMP%] {\n  height: inherit; }\n\n#wrap[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n    overflow-y: hidden;\n    width: 100%;\n    height: 85%; }\n\n#wrap[_ngcontent-%COMP%]   .home.v1[_ngcontent-%COMP%] {\n      overflow: hidden; }\n\n#wrap[_ngcontent-%COMP%]   .swipe[_ngcontent-%COMP%] {\n    width: 200%;\n    height: 100%; }\n\n#wrap[_ngcontent-%COMP%]   .swipe.v1[_ngcontent-%COMP%] {\n      margin-left: -100%; }\n\n#wrap[_ngcontent-%COMP%]   a.btn_home[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 1rem;\n    right: 1.7rem;\n    padding: 1.5rem 2rem;\n    background-color: #333;\n    color: #fff; }\n\n#wrap[_ngcontent-%COMP%]   a.btn_home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      display: none; }\n\n#wrap[_ngcontent-%COMP%]   a.btn_home[_ngcontent-%COMP%]:hover {\n      -webkit-text-shadow: 1px 1px #000;\n      text-shadow: 1px 1px #000; }\n\n#wrap[_ngcontent-%COMP%]   a.btn_home[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n        display: inline-block; }\n\n#container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  float: left;\n  width: 50%;\n  height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL0Q6XFxpZGVhSVVNLTIwMTkuMy4yXFx3b3Jrc3BhY2VcXGotcG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXJcXGFwcC52aWV3LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci9EOlxcaWRlYUlVTS0yMDE5LjMuMlxcd29ya3NwYWNlXFxqLXBvcnRmb2xpby9zcmNcXHNjc3NcXF9kZXBlbmRlbmN5XFxwbGFjZWhvbGRlci5zY3NzIiwic3JjL2FwcC9jb250YWluZXIvRDpcXGlkZWFJVU0tMjAxOS4zLjJcXHdvcmtzcGFjZVxcai1wb3J0Zm9saW8vc3JjXFxzY3NzXFxfZGVwZW5kZW5jeVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRUE7RUM5REksZ0JBQWdCO0VBRWhCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FETmhCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUlRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQU5uQjtNQVNZLGdCQUFnQixFQUFBOztBQVQ1QjtJQWNRLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBZnBCO01Bc0JZLGtCQUFrQixFQUFBOztBQXRCOUI7SUErQlEsZUFBZTtJQUNmLFNFN0IyQjtJRjhCM0IsYUU5QjJCO0lGK0IzQixvQkUvQjJCO0lGZ0MzQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBOztBQXBDbkI7TUF1Q1ksYUFBYSxFQUFBOztBQXZDekI7TUVpTUksaUNGcEp5QztNRXFKekMseUJGckp5QyxFQUFBOztBQTdDN0M7UUFnRGdCLHFCQUFxQixFQUFBOztBQU1yQztFQUNJLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvYXBwLnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ19kZXBlbmRlbmN5L3ZhcmlhYmxlJztcclxuQGltcG9ydCAnX2RlcGVuZGVuY3kvbWl4aW4nO1xyXG5AaW1wb3J0ICdfZGVwZW5kZW5jeS9wbGFjZWhvbGRlcic7XHJcblxyXG4jd3JhcCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgLmhvbWUge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDg1JTtcclxuXHJcbiAgICAgICAgJi52MSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zd2lwZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgIC8vdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICAvLy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICAgICAgLy90cmFuc2l0aW9uLWR1cmF0aW9uOiA1cztcclxuXHJcbiAgICAgICAgJi52MSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vJi52MiB7XHJcbiAgICAgICAgLy8gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgIGEuYnRuX2hvbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IHVuaXRzQ29udmVydGVyKDEpO1xyXG4gICAgICAgIHJpZ2h0OiB1bml0c0NvbnZlcnRlcigxLjcpO1xyXG4gICAgICAgIHBhZGRpbmc6IHVuaXRzQ29udmVydGVyKDEuNSkgdW5pdHNDb252ZXJ0ZXIoMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTAwO1xyXG4gICAgICAgICAgICAvL2NvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdygxcHggMXB4ICMwMDApO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICA+IGgyIHtcclxuICAgICAgICBAZXh0ZW5kICVibGluZDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBAUGxhY2Vob2xkZXJcclxuLy8gdXNlOiBAZXh0ZW5kICV7e3BsYWNlaG9sZGVyIG5hbWV9fVxyXG5cclxuJWJsaW5kIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvL2NsaXA6IHJlY3QoMCAwIDAgMCk7IC8vIElFIDYsIDdcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbn1cclxuXHJcbiV1bmJsaW5kIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgY2xpcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuJWNsZWFyZml4IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4iLCIvLyBAIE1peGluc1xyXG4vLyB1c2U6IEBpbmNsdWRlIHt7bWl4aW4gbmFtZX19XHJcblxyXG5AZnVuY3Rpb24gdW5pdHNDb252ZXJ0ZXIoJG51bSkge1xyXG4gICAgQGlmICgkZm9udFVuaXQgIT0gJ3JlbScpIHsgLy8gcmVt7J20IOyVhOuLkCDrlYxcclxuICAgICAgICBAcmV0dXJuICN7JG51bSAqICRkZWZhdWx0Rm9udFNpemV9I3skZm9udFVuaXR9OyAvLyBweCwgcHQg65OxIOygiOuMgCDsiJjsuZgg7IKs7JqpXHJcbiAgICB9IEBlbHNlIHsgLy8gcmVtXHJcbiAgICAgICAgQHJldHVybiAjeyRudW19I3skZm9udFVuaXR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7ICAvLyBTdHJpbmcgUmVwbGFjZVxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gICAgQGlmICgkaW5kZXgpIHtcclxuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyB3ZWItZm9udFxyXG5AbWl4aW4gd2ViLWZvbnQoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZjIgd29mZiB0dGYgc3ZnKSB7XHJcbiAgICAkc3JjOiBudWxsO1xyXG4gICAgJGV4dG1vZHM6IChlb3Q6ICc/Jywgc3ZnOiAnIycgKyBzdHItcmVwbGFjZSgkbmFtZSwgJyAnLCAnXycpKTtcclxuICAgICRmb3JtYXRzOiAob3RmOiAnb3BlbnR5cGUnLCB0dGY6ICd0cnVldHlwZScpO1xyXG5cclxuICAgIEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG4gICAgICAgICRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkZm9ybWF0OiBpZihtYXAtaGFzLWtleSgkZm9ybWF0cywgJGV4dCksIG1hcC1nZXQoJGZvcm1hdHMsICRleHQpLCAkZXh0KTtcclxuICAgICAgICAkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKCRwYXRoICsgJy4nICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogcXVvdGUoJG5hbWUpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICAgICAgc3JjOiBsb2NhbChxdW90ZSgkbmFtZSkpLCAkc3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpYS1icmVha3BvaW50XHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRwb2ludCkge1xyXG4gICAgQGlmICgkcG9pbnQgPT0gJ3Bob25lJykgeyAvL21vYmlsZVxyXG4gICAgICAgICRwb2ludDogJHBob25lO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICdtb2JpbGUnKSB7IC8vdGFibGV0XHJcbiAgICAgICAgJHBvaW50OiAkbW9iaWxlO1xyXG4gICAgfSBAZWxzZSBpZiAoJHBvaW50ID09ICd0YWJsZXQnKSB7IC8vZGVzY2t0b3BcclxuICAgICAgICAkcG9pbnQ6ICR0YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAjeyRwb2ludH0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhZGp1c3QtbG9jYXRpb25cclxuLy9AbWl4aW4gYWRqdXN0LWxvY2F0aW9uKCR4LCAkeSkge1xyXG4vLyAgICBAaWYgdW5pdGxlc3MoJHgpIHtcclxuLy8gICAgICAgIEB3YXJuIFwiQXNzdW1pbmcgI3skeH0gdG8gYmUgaW4gcGl4ZWxzXCI7XHJcbi8vICAgICAgICAkeDogMXB4ICogJHg7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgQGlmIHVuaXRsZXNzKCR5KSB7XHJcbi8vICAgICAgICBAd2FybiBcIkFzc3VtaW5nICN7JHl9IHRvIGJlIGluIHBpeGVsc1wiO1xyXG4vLyAgICAgICAgJHk6IDFweCAqICR5O1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIHBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6JHg7dG9wOiAkeTtcclxuLy99XHJcblxyXG4vLyBkaXNwbGF5XHJcbkBtaXhpbiBkaXNwbGF5KCR2YWwpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtI3skdmFsfTtcclxuICAgIGRpc3BsYXk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIGZsZXhcclxuQG1peGluIGZsZXgoJHZhbCkge1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsO1xyXG4gICAgLW1zLWZsZXg6ICR2YWw7XHJcbiAgICBmbGV4OiAkdmFsO1xyXG59XHJcblxyXG4vLyB1c2VyLXNlbGVjdFxyXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbCkge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6ICR2YWw7XHJcbiAgICB1c2VyLXNlbGVjdDogJHZhbDtcclxufVxyXG5cclxuLy8gYm9yZGVyLXJhZGl1c1xyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR2YWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLXNpemVcclxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkdmFsO1xyXG59XHJcblxyXG4vLyBiYWNrZ3JvdW5kLWdyYWRpZW50XHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRmcm9tLCAkdG8pIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRmcm9tLCAkdG8pO1xyXG59XHJcblxyXG4vLyBvcGFjaXR5XHJcbkBtaXhpbiBvcGFjaXR5KCR2YWwpIHtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9I3skdmFsICogMTAwfSlcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0jeyR2YWwgKiAxMDB9KTtcclxuICAgIG9wYWNpdHk6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuQG1peGluIGFuaW1hdGlvbigkdmFsKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHZhbDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkdmFsO1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsO1xyXG59XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR2YWwpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdmFsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHZhbDtcclxuICAgIHRyYW5zaXRpb246ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zbGF0ZTNkXHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHgsICR0eSwgJHR6KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHR4LCAkdHksICR0eik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0eCwgJHR5LCAkdHopO1xyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm1cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbDtcclxuICAgIHRyYW5zZm9ybTogJHZhbDtcclxufVxyXG5cclxuLy8gdHJhbnNmb3JtLXN0eWxlXHJcbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHZhbCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogJHZhbDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6ICR2YWw7XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybS1vcmlnaW5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbn1cclxuXHJcbi8vIHRleHQtc2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkdmFsKSB7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiAkdmFsO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR2YWw7XHJcbn1cclxuXHJcbi8vIGVsbGlwc2lzXHJcbkBtaXhpbiBlbGxpcHNpcygkbGluZXM6IDEpIHtcclxuICAgIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiBib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyBbSV0gaGVpZ2h0IOqzteyLnVxyXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0IOuLqOychOqwgCDsl4bsnYTqsr3smrA6ICgoZm9uY3Qtc2l6ZSAqIGxpbmUtaGVpZ2h0KSAqIC13ZWJraXQtbGluZS1jbGFtcClcclxuICAgICAgICAvLyBsaW5lLWhlaWdodCDri6jsnITqsIAg7J6I7J2E6rK97JqwOiAobGluZS1oZWlnaHQgKiAtd2Via2l0LWxpbmUtY2xhbXApXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.view.html',
          styleUrls: ['./app.view.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/libs/jquery.coveringBad.js":
  /*!********************************************!*\
    !*** ./src/app/libs/jquery.coveringBad.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppLibsJqueryCoveringBadJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    *  Project     : Covering Bad
    *  Description : A simple jQuery Plugin for cover an item by another item with dragging ability.
    *  Author      : Mojtaba Seyedi
    *  License     : MIT  http://seyedi.mit-license.org
    */

    /* global window, document, define, jQuery, setInterval, clearInterval */


    ;

    (function (factory) {
      'use strict';

      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! jquery */
        "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(function ($) {
      'use strict';

      $.fn.coveringBad = function (options) {
        var settings = $.extend({
          marginY: 30,
          marginX: 30,
          setX: 30,
          setY: 30,
          direction: 'horizontal'
        }, options);
        return this.each(function () {
          // Initialization
          ////////////////////////////////
          var $this = $(this),
              $changeable = $this.find('>.changeable'),
              $handle = $this.find('>.handle'),
              width = $this.innerWidth(),
              height = $this.innerHeight(),
              pos_x = null,
              pos_y = null,
              startX = null,
              startY = null,
              min_left = settings.marginX,
              max_left = width - settings.marginX,
              min_top = settings.marginY,
              max_top = height - settings.marginY,
              setX = settings.setX,
              setY = settings.setY;
          $this.css('background-image', 'url(' + $this.data('passive') + ')');
          $changeable.css('background-image', 'url(' + $this.data('active') + ')');
          $changeable.height($this.height());

          if (setX < min_left) {
            setX = min_left;
          }

          if (setY < min_top) {
            setY = min_top;
          } // $handle.append('<i class="fa fa-chevron-up"></i><i class="fa fa-chevron-down"></i>');


          $handle.css('left', setX);
          $handle.css('top', setY); // Direction
          //////////////////////////////////

          if (settings.direction === "horizontal") {
            $changeable.width(setX);
            $changeable.css('border-right', '1px dashed #fff');
          } else if (settings.direction === "vertical") {
            $this.height($changeable.height());
            $changeable.height(setY);
            $changeable.css('border-bottom', '1px dashed #fff');
            $handle.addClass('vertical');
          } // Dragging Bad
          //////////////////////////////////


          $handle.on('mousedown', function (event) {
            event.preventDefault();
            $handle.addClass('draggable');
            pos_x = parseInt($handle.css('left'));
            startX = event.pageX;
            pos_y = parseInt($handle.css('top'));
            startY = event.pageY;
          });
          $(document).on('mouseup', function (event) {
            $handle.removeClass('draggable');
          });
          $this.bind('mousemove', dragger);

          function dragger(e) {
            var left = pos_x + (e.pageX - startX);

            if (left < min_left) {
              left = min_left;
            } else if (left > max_left) {
              left = max_left;
            }

            $('.draggable').css('left', left);
            var top = pos_y + (e.pageY - startY);

            if (top < min_top) {
              top = min_top;
            } else if (top > max_top) {
              top = max_top;
            }

            $('.draggable').css('top', top);

            if ($('.draggable').length) {
              changeWidth(left, top);
            }
          } // Changing width or height
          //////////////////////////////////////


          function changeWidth(w, h) {
            if (settings.direction === "horizontal") {
              $changeable.width(w);
            } else if (settings.direction === "vertical") {
              $changeable.height(h);
            }
          }
        });
      };
    });
    /***/

  },

  /***/
  "./src/app/libs/jquery.mixitup.js":
  /*!****************************************!*\
    !*** ./src/app/libs/jquery.mixitup.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcAppLibsJqueryMixitupJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**!
    * MixItUp v2.1.7
    *
    * @copyright Copyright 2014 KunkaLabs Limited.
    * @author    KunkaLabs Limited.
    * @link      https://mixitup.kunkalabs.com
    *
    * @license   Commercial use requires a commercial license.
    *            https://mixitup.kunkalabs.com/licenses/
    *
    *            Non-commercial use permitted under terms of CC-BY-NC license.
    *            http://creativecommons.org/licenses/by-nc/3.0/
    */

    /* global window, document, define, jQuery, setInterval, clearInterval */


    ;

    (function (factory) {
      'use strict';

      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! jquery */
        "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(function ($, undf) {
      'use strict';
      /**
       * MixItUp Constructor Function
       * @constructor
       * @extends jQuery
       */

      $.MixItUp = function () {
        var self = this;

        self._execAction('_constructor', 0);

        $.extend(self, {
          /* Public Properties
          ---------------------------------------------------------------------- */
          selectors: {
            target: '.mix',
            filter: '.filter',
            sort: '.sort'
          },
          animation: {
            enable: true,
            effects: 'fade scale',
            duration: 600,
            easing: 'ease',
            perspectiveDistance: '3000',
            perspectiveOrigin: '50% 50%',
            queue: true,
            queueLimit: 1,
            animateChangeLayout: false,
            animateResizeContainer: true,
            animateResizeTargets: false,
            staggerSequence: false,
            reverseOut: false
          },
          callbacks: {
            onMixLoad: false,
            onMixStart: false,
            onMixBusy: false,
            onMixEnd: false,
            onMixFail: false,
            _user: false
          },
          controls: {
            enable: true,
            live: false,
            toggleFilterButtons: false,
            toggleLogic: 'or',
            activeClass: 'active'
          },
          layout: {
            display: 'inline-block',
            containerClass: '',
            containerClassFail: 'fail'
          },
          load: {
            filter: 'all',
            sort: false
          },

          /* Private Properties
          ---------------------------------------------------------------------- */
          _$body: null,
          _$container: null,
          _$targets: null,
          _$parent: null,
          _$sortButtons: null,
          _$filterButtons: null,
          _suckMode: false,
          _mixing: false,
          _sorting: false,
          _clicking: false,
          _loading: true,
          _changingLayout: false,
          _changingClass: false,
          _changingDisplay: false,
          _origOrder: [],
          _startOrder: [],
          _newOrder: [],
          _activeFilter: null,
          _toggleArray: [],
          _toggleString: '',
          _activeSort: 'default:asc',
          _newSort: null,
          _startHeight: null,
          _newHeight: null,
          _incPadding: true,
          _newDisplay: null,
          _newClass: null,
          _targetsBound: 0,
          _targetsDone: 0,
          _queue: [],
          _$show: $(),
          _$hide: $()
        });

        self._execAction('_constructor', 1);
      };
      /**
       * MixItUp Prototype
       * @override
       */


      $.MixItUp.prototype = {
        constructor: $.MixItUp,

        /* Static Properties
        ---------------------------------------------------------------------- */
        _instances: {},
        _handled: {
          _filter: {},
          _sort: {}
        },
        _bound: {
          _filter: {},
          _sort: {}
        },
        _actions: {},
        _filters: {},

        /* Static Methods
        ---------------------------------------------------------------------- */

        /**
         * Extend
         * @since 2.1.0
         * @param {object} new properties/methods
         * @extends {object} prototype
         */
        extend: function extend(extension) {
          for (var key in extension) {
            $.MixItUp.prototype[key] = extension[key];
          }
        },

        /**
         * Add Action
         * @since 2.1.0
         * @param {string} hook name
         * @param {string} namespace
         * @param {function} function to execute
         * @param {number} priority
         * @extends {object} $.MixItUp.prototype._actions
         */
        addAction: function addAction(hook, name, func, priority) {
          $.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
        },

        /**
         * Add Filter
         * @since 2.1.0
         * @param {string} hook name
         * @param {string} namespace
         * @param {function} function to execute
         * @param {number} priority
         * @extends {object} $.MixItUp.prototype._filters
         */
        addFilter: function addFilter(hook, name, func, priority) {
          $.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
        },

        /**
         * Add Hook
         * @since 2.1.0
         * @param {string} type of hook
         * @param {string} hook name
         * @param {function} function to execute
         * @param {number} priority
         * @extends {object} $.MixItUp.prototype._filters
         */
        _addHook: function _addHook(type, hook, name, func, priority) {
          var collection = $.MixItUp.prototype[type],
              obj = {};
          priority = priority === 1 || priority === 'post' ? 'post' : 'pre';
          obj[hook] = {};
          obj[hook][priority] = {};
          obj[hook][priority][name] = func;
          $.extend(true, collection, obj);
        },

        /* Private Methods
        ---------------------------------------------------------------------- */

        /**
         * Initialise
         * @since 2.0.0
         * @param {object} domNode
         * @param {object} config
         */
        _init: function _init(domNode, config) {
          var self = this;

          self._execAction('_init', 0, arguments);

          config && $.extend(true, self, config);
          self._$body = $('body');
          self._domNode = domNode;
          self._$container = $(domNode);

          self._$container.addClass(self.layout.containerClass);

          self._id = domNode.id;

          self._platformDetect();

          self._brake = self._getPrefixedCSS('transition', 'none');

          self._refresh(true);

          self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;

          if (self.load.sort) {
            self._newSort = self._parseSort(self.load.sort);
            self._newSortString = self.load.sort;
            self._activeSort = self.load.sort;

            self._sort();

            self._printSort();
          }

          self._activeFilter = self.load.filter === 'all' ? self.selectors.target : self.load.filter === 'none' ? '' : self.load.filter;
          self.controls.enable && self._bindHandlers();

          if (self.controls.toggleFilterButtons) {
            self._buildToggleArray();

            for (var i = 0; i < self._toggleArray.length; i++) {
              self._updateControls({
                filter: self._toggleArray[i],
                sort: self._activeSort
              }, true);
            }

            ;
          } else if (self.controls.enable) {
            self._updateControls({
              filter: self._activeFilter,
              sort: self._activeSort
            });
          }

          self._filter();

          self._init = true;

          self._$container.data('mixItUp', self);

          self._execAction('_init', 1, arguments);

          self._buildState();

          self._$targets.css(self._brake);

          self._goMix(self.animation.enable);
        },

        /**
         * Platform Detect
         * @since 2.0.0
         */
        _platformDetect: function _platformDetect() {
          var self = this,
              vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
              vendorsRAF = ['webkit', 'moz'],
              chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
              ff = typeof InstallTrigger !== 'undefined',
              prefix = function prefix(el) {
            for (var i = 0; i < vendorsTrans.length; i++) {
              if (vendorsTrans[i] + 'Transition' in el.style) {
                return {
                  prefix: '-' + vendorsTrans[i].toLowerCase() + '-',
                  vendor: vendorsTrans[i]
                };
              }

              ;
            }

            ;
            return 'transition' in el.style ? '' : false;
          },
              transPrefix = prefix(self._domNode);

          self._execAction('_platformDetect', 0);

          self._chrome = chrome ? parseInt(chrome[1], 10) : false;
          self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
          self._prefix = transPrefix.prefix;
          self._vendor = transPrefix.vendor;
          self._suckMode = window.atob && self._prefix ? false : true;
          self._suckMode && (self.animation.enable = false);
          self._ff && self._ff <= 4 && (self.animation.enable = false);
          /* Polyfills
          ---------------------------------------------------------------------- */

          /**
           * window.requestAnimationFrame
           */

          for (var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++) {
            window.requestAnimationFrame = window[vendorsRAF[x] + 'RequestAnimationFrame'];
          }
          /**
           * Object.getPrototypeOf
           */


          if (typeof Object.getPrototypeOf !== 'function') {
            if (typeof 'test'.__proto__ === 'object') {
              Object.getPrototypeOf = function (object) {
                return object.__proto__;
              };
            } else {
              Object.getPrototypeOf = function (object) {
                return object.constructor.prototype;
              };
            }
          }
          /**
           * Element.nextElementSibling
           */


          if (self._domNode.nextElementSibling === undf) {
            Object.defineProperty(Element.prototype, 'nextElementSibling', {
              get: function get() {
                var el = this.nextSibling;

                while (el) {
                  if (el.nodeType === 1) {
                    return el;
                  }

                  el = el.nextSibling;
                }

                return null;
              }
            });
          }

          self._execAction('_platformDetect', 1);
        },

        /**
         * Refresh
         * @since 2.0.0
         * @param {boolean} init
         * @param {boolean} force
         */
        _refresh: function _refresh(init, force) {
          var self = this;

          self._execAction('_refresh', 0, arguments);

          self._$targets = self._$container.find(self.selectors.target);

          for (var i = 0; i < self._$targets.length; i++) {
            var target = self._$targets[i];

            if (target.dataset === undf || force) {
              target.dataset = {};

              for (var j = 0; j < target.attributes.length; j++) {
                var attr = target.attributes[j],
                    name = attr.name,
                    val = attr.value;

                if (name.indexOf('data-') > -1) {
                  var dataName = self._helpers._camelCase(name.substring(5, name.length));

                  target.dataset[dataName] = val;
                }
              }
            }

            if (target.mixParent === undf) {
              target.mixParent = self._id;
            }
          }

          if (self._$targets.length && init || !self._origOrder.length && self._$targets.length) {
            self._origOrder = [];

            for (var i = 0; i < self._$targets.length; i++) {
              var target = self._$targets[i];

              self._origOrder.push(target);
            }
          }

          self._execAction('_refresh', 1, arguments);
        },

        /**
         * Bind Handlers
         * @since 2.0.0
         */
        _bindHandlers: function _bindHandlers() {
          var self = this,
              filters = $.MixItUp.prototype._bound._filter,
              sorts = $.MixItUp.prototype._bound._sort;

          self._execAction('_bindHandlers', 0);

          if (self.controls.live) {
            self._$body.on('click.mixItUp.' + self._id, self.selectors.sort, function () {
              self._processClick($(this), 'sort');
            }).on('click.mixItUp.' + self._id, self.selectors.filter, function () {
              self._processClick($(this), 'filter');
            });
          } else {
            self._$sortButtons = $(self.selectors.sort);
            self._$filterButtons = $(self.selectors.filter);

            self._$sortButtons.on('click.mixItUp.' + self._id, function () {
              self._processClick($(this), 'sort');
            });

            self._$filterButtons.on('click.mixItUp.' + self._id, function () {
              self._processClick($(this), 'filter');
            });
          }

          filters[self.selectors.filter] = filters[self.selectors.filter] === undf ? 1 : filters[self.selectors.filter] + 1;
          sorts[self.selectors.sort] = sorts[self.selectors.sort] === undf ? 1 : sorts[self.selectors.sort] + 1;

          self._execAction('_bindHandlers', 1);
        },

        /**
         * Process Click
         * @since 2.0.0
         * @param {object} $button
         * @param {string} type
         */
        _processClick: function _processClick($button, type) {
          var self = this,
              trackClick = function trackClick($button, type, off) {
            var proto = $.MixItUp.prototype;
            proto._handled['_' + type][self.selectors[type]] = proto._handled['_' + type][self.selectors[type]] === undf ? 1 : proto._handled['_' + type][self.selectors[type]] + 1;

            if (proto._handled['_' + type][self.selectors[type]] === proto._bound['_' + type][self.selectors[type]]) {
              $button[(off ? 'remove' : 'add') + 'Class'](self.controls.activeClass);
              delete proto._handled['_' + type][self.selectors[type]];
            }
          };

          self._execAction('_processClick', 0, arguments);

          if (!self._mixing || self.animation.queue && self._queue.length < self.animation.queueLimit) {
            self._clicking = true;

            if (type === 'sort') {
              var sort = $button.attr('data-sort');

              if (!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1) {
                $(self.selectors.sort).removeClass(self.controls.activeClass);
                trackClick($button, type);
                self.sort(sort);
              }
            }

            if (type === 'filter') {
              var filter = $button.attr('data-filter'),
                  ndx,
                  seperator = self.controls.toggleLogic === 'or' ? ',' : '';

              if (!self.controls.toggleFilterButtons) {
                if (!$button.hasClass(self.controls.activeClass)) {
                  $(self.selectors.filter).removeClass(self.controls.activeClass);
                  trackClick($button, type);
                  self.filter(filter);
                }
              } else {
                self._buildToggleArray();

                if (!$button.hasClass(self.controls.activeClass)) {
                  trackClick($button, type);

                  self._toggleArray.push(filter);
                } else {
                  trackClick($button, type, true);
                  ndx = self._toggleArray.indexOf(filter);

                  self._toggleArray.splice(ndx, 1);
                }

                self._toggleArray = $.grep(self._toggleArray, function (n) {
                  return n;
                });
                self._toggleString = self._toggleArray.join(seperator);
                self.filter(self._toggleString);
              }
            }

            self._execAction('_processClick', 1, arguments);
          } else {
            if (typeof self.callbacks.onMixBusy === 'function') {
              self.callbacks.onMixBusy.call(self._domNode, self._state, self);
            }

            self._execAction('_processClickBusy', 1, arguments);
          }
        },

        /**
         * Build Toggle Array
         * @since 2.0.0
         */
        _buildToggleArray: function _buildToggleArray() {
          var self = this,
              activeFilter = self._activeFilter.replace(/\s/g, '');

          self._execAction('_buildToggleArray', 0, arguments);

          if (self.controls.toggleLogic === 'or') {
            self._toggleArray = activeFilter.split(',');
          } else {
            self._toggleArray = activeFilter.split('.');
            !self._toggleArray[0] && self._toggleArray.shift();

            for (var i = 0, filter; filter = self._toggleArray[i]; i++) {
              self._toggleArray[i] = '.' + filter;
            }
          }

          self._execAction('_buildToggleArray', 1, arguments);
        },

        /**
         * Update Controls
         * @since 2.0.0
         * @param {object} command
         * @param {boolean} multi
         */
        _updateControls: function _updateControls(command, multi) {
          var self = this,
              output = {
            filter: command.filter,
            sort: command.sort
          },
              update = function update($el, filter) {
            multi && type === 'filter' && !(output.filter === 'none' || output.filter === '') ? $el.filter(filter).addClass(self.controls.activeClass) : $el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
          },
              type = 'filter',
              $el = null;

          self._execAction('_updateControls', 0, arguments);

          command.filter === undf && (output.filter = self._activeFilter);
          command.sort === undf && (output.sort = self._activeSort);
          output.filter === self.selectors.target && (output.filter = 'all');

          for (var i = 0; i < 2; i++) {
            $el = self.controls.live ? $(self.selectors[type]) : self['_$' + type + 'Buttons'];
            $el && update($el, '[data-' + type + '="' + output[type] + '"]');
            type = 'sort';
          }

          self._execAction('_updateControls', 1, arguments);
        },

        /**
         * Filter (private)
         * @since 2.0.0
         */
        _filter: function _filter() {
          var self = this;

          self._execAction('_filter', 0);

          for (var i = 0; i < self._$targets.length; i++) {
            var $target = $(self._$targets[i]);

            if ($target.is(self._activeFilter)) {
              self._$show = self._$show.add($target);
            } else {
              self._$hide = self._$hide.add($target);
            }
          }

          self._execAction('_filter', 1);
        },

        /**
         * Sort (private)
         * @since 2.0.0
         */
        _sort: function _sort() {
          var self = this,
              arrayShuffle = function arrayShuffle(oldArray) {
            var newArray = oldArray.slice(),
                len = newArray.length,
                i = len;

            while (i--) {
              var p = parseInt(Math.random() * len);
              var t = newArray[i];
              newArray[i] = newArray[p];
              newArray[p] = t;
            }

            ;
            return newArray;
          };

          self._execAction('_sort', 0);

          self._startOrder = [];

          for (var i = 0; i < self._$targets.length; i++) {
            var target = self._$targets[i];

            self._startOrder.push(target);
          }

          switch (self._newSort[0].sortBy) {
            case 'default':
              self._newOrder = self._origOrder;
              break;

            case 'random':
              self._newOrder = arrayShuffle(self._startOrder);
              break;

            case 'custom':
              self._newOrder = self._newSort[0].order;
              break;

            default:
              self._newOrder = self._startOrder.concat().sort(function (a, b) {
                return self._compare(a, b);
              });
          }

          self._execAction('_sort', 1);
        },

        /**
         * Compare Algorithm
         * @since 2.0.0
         * @param {string|number} a
         * @param {string|number} b
         * @param {number} depth (recursion)
         * @return {number}
         */
        _compare: function _compare(a, b, depth) {
          depth = depth ? depth : 0;

          var self = this,
              order = self._newSort[depth].order,
              getData = function getData(el) {
            return el.dataset[self._newSort[depth].sortBy] || 0;
          },
              attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
              attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;

          if (attrA < attrB) return order === 'asc' ? -1 : 1;
          if (attrA > attrB) return order === 'asc' ? 1 : -1;
          if (attrA === attrB && self._newSort.length > depth + 1) return self._compare(a, b, depth + 1);
          return 0;
        },

        /**
         * Print Sort
         * @since 2.0.0
         * @param {boolean} reset
         */
        _printSort: function _printSort(reset) {
          var self = this,
              order = reset ? self._startOrder : self._newOrder,
              targets = self._$parent[0].querySelectorAll(self.selectors.target),
              nextSibling = targets.length ? targets[targets.length - 1].nextElementSibling : null,
              frag = document.createDocumentFragment();

          self._execAction('_printSort', 0, arguments);

          for (var i = 0; i < targets.length; i++) {
            var target = targets[i],
                whiteSpace = target.nextSibling;
            if (target.style.position === 'absolute') continue;

            if (whiteSpace && whiteSpace.nodeName === '#text') {
              self._$parent[0].removeChild(whiteSpace);
            }

            self._$parent[0].removeChild(target);
          }

          for (var i = 0; i < order.length; i++) {
            var el = order[i];

            if (self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset) {
              var firstChild = frag.firstChild;
              frag.insertBefore(el, firstChild);
              frag.insertBefore(document.createTextNode(' '), el);
            } else {
              frag.appendChild(el);
              frag.appendChild(document.createTextNode(' '));
            }
          }

          nextSibling ? self._$parent[0].insertBefore(frag, nextSibling) : self._$parent[0].appendChild(frag);

          self._execAction('_printSort', 1, arguments);
        },

        /**
         * Parse Sort
         * @since 2.0.0
         * @param {string} sortString
         * @return {array} newSort
         */
        _parseSort: function _parseSort(sortString) {
          var self = this,
              rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
              newSort = [];

          for (var i = 0; i < rules.length; i++) {
            var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
                ruleObj = {
              sortBy: self._helpers._camelCase(rule[0]),
              order: rule[1] || 'asc'
            };
            newSort.push(ruleObj);
            if (ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
          }

          return self._execFilter('_parseSort', newSort, arguments);
        },

        /**
         * Parse Effects
         * @since 2.0.0
         * @return {object} effects
         */
        _parseEffects: function _parseEffects() {
          var self = this,
              effects = {
            opacity: '',
            transformIn: '',
            transformOut: '',
            filter: ''
          },
              parse = function parse(effect, extract, reverse) {
            if (self.animation.effects.indexOf(effect) > -1) {
              if (extract) {
                var propIndex = self.animation.effects.indexOf(effect + '(');

                if (propIndex > -1) {
                  var str = self.animation.effects.substring(propIndex),
                      match = /\(([^)]+)\)/.exec(str),
                      val = match[1];
                  return {
                    val: val
                  };
                }
              }

              return true;
            } else {
              return false;
            }
          },
              negate = function negate(value, invert) {
            if (invert) {
              return value.charAt(0) === '-' ? value.substr(1, value.length) : '-' + value;
            } else {
              return value;
            }
          },
              buildTransform = function buildTransform(key, invert) {
            var transforms = [['scale', '.01'], ['translateX', '20px'], ['translateY', '20px'], ['translateZ', '20px'], ['rotateX', '90deg'], ['rotateY', '90deg'], ['rotateZ', '180deg']];

            for (var i = 0; i < transforms.length; i++) {
              var prop = transforms[i][0],
                  def = transforms[i][1],
                  inverted = invert && prop !== 'scale';
              effects[key] += parse(prop) ? prop + '(' + negate(parse(prop, true).val || def, inverted) + ') ' : '';
            }
          };

          effects.opacity = parse('fade') ? parse('fade', true).val || '0' : '1';
          buildTransform('transformIn');
          self.animation.reverseOut ? buildTransform('transformOut', true) : effects.transformOut = effects.transformIn;
          effects.transition = {};
          effects.transition = self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ', opacity ' + self.animation.duration + 'ms linear');
          self.animation.stagger = parse('stagger') ? true : false;
          self.animation.staggerDuration = parseInt(parse('stagger') ? parse('stagger', true).val ? parse('stagger', true).val : 100 : 100);
          return self._execFilter('_parseEffects', effects);
        },

        /**
         * Build State
         * @since 2.0.0
         * @param {boolean} future
         * @return {object} futureState
         */
        _buildState: function _buildState(future) {
          var self = this,
              state = {};

          self._execAction('_buildState', 0);

          state = {
            activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
            activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
            fail: !self._$show.length && self._activeFilter !== '',
            $targets: self._$targets,
            $show: self._$show,
            $hide: self._$hide,
            totalTargets: self._$targets.length,
            totalShow: self._$show.length,
            totalHide: self._$hide.length,
            display: future && self._newDisplay ? self._newDisplay : self.layout.display
          };

          if (future) {
            return self._execFilter('_buildState', state);
          } else {
            self._state = state;

            self._execAction('_buildState', 1);
          }
        },

        /**
         * Go Mix
         * @since 2.0.0
         * @param {boolean} animate
         */
        _goMix: function _goMix(animate) {
          var self = this,
              phase1 = function phase1() {
            if (self._chrome && self._chrome === 31) {
              chromeFix(self._$parent[0]);
            }

            self._setInter();

            phase2();
          },
              phase2 = function phase2() {
            var scrollTop = window.pageYOffset,
                scrollLeft = window.pageXOffset,
                docHeight = document.documentElement.scrollHeight;

            self._getInterMixData();

            self._setFinal();

            self._getFinalMixData();

            window.pageYOffset !== scrollTop && window.scrollTo(scrollLeft, scrollTop);

            self._prepTargets();

            if (window.requestAnimationFrame) {
              requestAnimationFrame(phase3);
            } else {
              setTimeout(function () {
                phase3();
              }, 20);
            }
          },
              phase3 = function phase3() {
            self._animateTargets();

            if (self._targetsBound === 0) {
              self._cleanUp();
            }
          },
              chromeFix = function chromeFix(grid) {
            var parent = grid.parentElement,
                placeholder = document.createElement('div'),
                frag = document.createDocumentFragment();
            parent.insertBefore(placeholder, grid);
            frag.appendChild(grid);
            parent.replaceChild(grid, placeholder);
          },
              futureState = self._buildState(true);

          self._execAction('_goMix', 0, arguments);

          !self.animation.duration && (animate = false);
          self._mixing = true;

          self._$container.removeClass(self.layout.containerClassFail);

          if (typeof self.callbacks.onMixStart === 'function') {
            self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
          }

          self._$container.trigger('mixStart', [self._state, futureState, self]);

          self._getOrigMixData();

          if (animate && !self._suckMode) {
            window.requestAnimationFrame ? requestAnimationFrame(phase1) : phase1();
          } else {
            self._cleanUp();
          }

          self._execAction('_goMix', 1, arguments);
        },

        /**
         * Get Target Data
         * @since 2.0.0
         */
        _getTargetData: function _getTargetData(el, stage) {
          var self = this,
              elStyle;
          el.dataset[stage + 'PosX'] = el.offsetLeft;
          el.dataset[stage + 'PosY'] = el.offsetTop;

          if (self.animation.animateResizeTargets) {
            elStyle = window.getComputedStyle(el);
            el.dataset[stage + 'MarginBottom'] = parseInt(elStyle.marginBottom);
            el.dataset[stage + 'MarginRight'] = parseInt(elStyle.marginRight);
            el.dataset[stage + 'Width'] = el.offsetWidth;
            el.dataset[stage + 'Height'] = el.offsetHeight;
          }
        },

        /**
         * Get Original Mix Data
         * @since 2.0.0
         */
        _getOrigMixData: function _getOrigMixData() {
          var self = this,
              parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : {
            boxSizing: ''
          },
              parentBS = parentStyle.boxSizing || parentStyle[self._vendor + 'BoxSizing'];
          self._incPadding = parentBS === 'border-box';

          self._execAction('_getOrigMixData', 0);

          !self._suckMode && (self.effects = self._parseEffects());
          self._$toHide = self._$hide.filter(':visible');
          self._$toShow = self._$show.filter(':hidden');
          self._$pre = self._$targets.filter(':visible');
          self._startHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();

          for (var i = 0; i < self._$pre.length; i++) {
            var el = self._$pre[i];

            self._getTargetData(el, 'orig');
          }

          self._execAction('_getOrigMixData', 1);
        },

        /**
         * Set Intermediate Positions
         * @since 2.0.0
         */
        _setInter: function _setInter() {
          var self = this;

          self._execAction('_setInter', 0);

          if (self._changingLayout && self.animation.animateChangeLayout) {
            self._$toShow.css('display', self._newDisplay);

            if (self._changingClass) {
              self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
            }
          } else {
            self._$toShow.css('display', self.layout.display);
          }

          self._execAction('_setInter', 1);
        },

        /**
         * Get Intermediate Mix Data
         * @since 2.0.0
         */
        _getInterMixData: function _getInterMixData() {
          var self = this;

          self._execAction('_getInterMixData', 0);

          for (var i = 0; i < self._$toShow.length; i++) {
            var el = self._$toShow[i];

            self._getTargetData(el, 'inter');
          }

          for (var i = 0; i < self._$pre.length; i++) {
            var el = self._$pre[i];

            self._getTargetData(el, 'inter');
          }

          self._execAction('_getInterMixData', 1);
        },

        /**
         * Set Final Positions
         * @since 2.0.0
         */
        _setFinal: function _setFinal() {
          var self = this;

          self._execAction('_setFinal', 0);

          self._sorting && self._printSort();

          self._$toHide.removeStyle('display');

          if (self._changingLayout && self.animation.animateChangeLayout) {
            self._$pre.css('display', self._newDisplay);
          }

          self._execAction('_setFinal', 1);
        },

        /**
         * Get Final Mix Data
         * @since 2.0.0
         */
        _getFinalMixData: function _getFinalMixData() {
          var self = this;

          self._execAction('_getFinalMixData', 0);

          for (var i = 0; i < self._$toShow.length; i++) {
            var el = self._$toShow[i];

            self._getTargetData(el, 'final');
          }

          for (var i = 0; i < self._$pre.length; i++) {
            var el = self._$pre[i];

            self._getTargetData(el, 'final');
          }

          self._newHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();
          self._sorting && self._printSort(true);

          self._$toShow.removeStyle('display');

          self._$pre.css('display', self.layout.display);

          if (self._changingClass && self.animation.animateChangeLayout) {
            self._$container.removeClass(self._newClass).addClass(self.layout.containerClass);
          }

          self._execAction('_getFinalMixData', 1);
        },

        /**
         * Prepare Targets
         * @since 2.0.0
         */
        _prepTargets: function _prepTargets() {
          var self = this,
              transformCSS = {
            _in: self._getPrefixedCSS('transform', self.effects.transformIn),
            _out: self._getPrefixedCSS('transform', self.effects.transformOut)
          };

          self._execAction('_prepTargets', 0);

          if (self.animation.animateResizeContainer) {
            self._$parent.css('height', self._startHeight + 'px');
          }

          for (var i = 0; i < self._$toShow.length; i++) {
            var el = self._$toShow[i],
                $el = $(el);
            el.style.opacity = self.effects.opacity;
            el.style.display = self._changingLayout && self.animation.animateChangeLayout ? self._newDisplay : self.layout.display;
            $el.css(transformCSS._in);

            if (self.animation.animateResizeTargets) {
              el.style.width = el.dataset.finalWidth + 'px';
              el.style.height = el.dataset.finalHeight + 'px';
              el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
              el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
            }
          }

          for (var i = 0; i < self._$pre.length; i++) {
            var el = self._$pre[i],
                $el = $(el),
                translate = {
              x: el.dataset.origPosX - el.dataset.interPosX,
              y: el.dataset.origPosY - el.dataset.interPosY
            },
                transformCSS = self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)');

            $el.css(transformCSS);

            if (self.animation.animateResizeTargets) {
              el.style.width = el.dataset.origWidth + 'px';
              el.style.height = el.dataset.origHeight + 'px';

              if (el.dataset.origWidth - el.dataset.finalWidth) {
                el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + el.dataset.origMarginRight * 1 + 'px';
              }

              if (el.dataset.origHeight - el.dataset.finalHeight) {
                el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + el.dataset.origMarginBottom * 1 + 'px';
              }
            }
          }

          self._execAction('_prepTargets', 1);
        },

        /**
         * Animate Targets
         * @since 2.0.0
         */
        _animateTargets: function _animateTargets() {
          var self = this;

          self._execAction('_animateTargets', 0);

          self._targetsDone = 0;
          self._targetsBound = 0;

          self._$parent.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance + 'px')).css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));

          if (self.animation.animateResizeContainer) {
            self._$parent.css(self._getPrefixedCSS('transition', 'height ' + self.animation.duration + 'ms ease')).css('height', self._newHeight + 'px');
          }

          for (var i = 0; i < self._$toShow.length; i++) {
            var el = self._$toShow[i],
                $el = $(el),
                translate = {
              x: el.dataset.finalPosX - el.dataset.interPosX,
              y: el.dataset.finalPosY - el.dataset.interPosY
            },
                delay = self._getDelay(i),
                toShowCSS = {};

            el.style.opacity = '';

            for (var j = 0; j < 2; j++) {
              var a = j === 0 ? a = self._prefix : '';

              if (self._ff && self._ff <= 20) {
                toShowCSS[a + 'transition-property'] = 'all';
                toShowCSS[a + 'transition-timing-function'] = self.animation.easing + 'ms';
                toShowCSS[a + 'transition-duration'] = self.animation.duration + 'ms';
              }

              toShowCSS[a + 'transition-delay'] = delay + 'ms';
              toShowCSS[a + 'transform'] = 'translate(' + translate.x + 'px,' + translate.y + 'px)';
            }

            if (self.effects.transform || self.effects.opacity) {
              self._bindTargetDone($el);
            }

            self._ff && self._ff <= 20 ? $el.css(toShowCSS) : $el.css(self.effects.transition).css(toShowCSS);
          }

          for (var i = 0; i < self._$pre.length; i++) {
            var el = self._$pre[i],
                $el = $(el),
                translate = {
              x: el.dataset.finalPosX - el.dataset.interPosX,
              y: el.dataset.finalPosY - el.dataset.interPosY
            },
                delay = self._getDelay(i);

            if (!(el.dataset.finalPosX === el.dataset.origPosX && el.dataset.finalPosY === el.dataset.origPosY)) {
              self._bindTargetDone($el);
            }

            $el.css(self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ' ' + delay + 'ms'));
            $el.css(self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)'));

            if (self.animation.animateResizeTargets) {
              if (el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1) {
                el.style.width = el.dataset.finalWidth + 'px';
                el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
              }

              if (el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1) {
                el.style.height = el.dataset.finalHeight + 'px';
                el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
              }
            }
          }

          if (self._changingClass) {
            self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
          }

          for (var i = 0; i < self._$toHide.length; i++) {
            var el = self._$toHide[i],
                $el = $(el),
                delay = self._getDelay(i),
                toHideCSS = {};

            for (var j = 0; j < 2; j++) {
              var a = j === 0 ? a = self._prefix : '';
              toHideCSS[a + 'transition-delay'] = delay + 'ms';
              toHideCSS[a + 'transform'] = self.effects.transformOut;
              toHideCSS.opacity = self.effects.opacity;
            }

            $el.css(self.effects.transition).css(toHideCSS);

            if (self.effects.transform || self.effects.opacity) {
              self._bindTargetDone($el);
            }

            ;
          }

          self._execAction('_animateTargets', 1);
        },

        /**
         * Bind Targets TransitionEnd
         * @since 2.0.0
         * @param {object} $el
         */
        _bindTargetDone: function _bindTargetDone($el) {
          var self = this,
              el = $el[0];

          self._execAction('_bindTargetDone', 0, arguments);

          if (!el.dataset.bound) {
            el.dataset.bound = true;
            self._targetsBound++;
            $el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp', function (e) {
              if ((e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) && $(e.originalEvent.target).is(self.selectors.target)) {
                $el.off('.mixItUp');
                delete el.dataset.bound;

                self._targetDone();
              }
            });
          }

          self._execAction('_bindTargetDone', 1, arguments);
        },

        /**
         * Target Done
         * @since 2.0.0
         */
        _targetDone: function _targetDone() {
          var self = this;

          self._execAction('_targetDone', 0);

          self._targetsDone++;
          self._targetsDone === self._targetsBound && self._cleanUp();

          self._execAction('_targetDone', 1);
        },

        /**
         * Clean Up
         * @since 2.0.0
         */
        _cleanUp: function _cleanUp() {
          var self = this,
              targetStyles = self.animation.animateResizeTargets ? 'transform opacity width height margin-bottom margin-right' : 'transform opacity';

          var unBrake = function unBrake() {
            self._$targets.removeStyle('transition', self._prefix);
          };

          self._execAction('_cleanUp', 0);

          !self._changingLayout ? self._$show.css('display', self.layout.display) : self._$show.css('display', self._newDisplay);

          self._$targets.css(self._brake);

          self._$targets.removeStyle(targetStyles, self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');

          self._$hide.removeStyle('display');

          self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);

          if (self._sorting) {
            self._printSort();

            self._activeSort = self._newSortString;
            self._sorting = false;
          }

          if (self._changingLayout) {
            if (self._changingDisplay) {
              self.layout.display = self._newDisplay;
              self._changingDisplay = false;
            }

            if (self._changingClass) {
              self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);

              self.layout.containerClass = self._newClass;
              self._changingClass = false;
            }

            self._changingLayout = false;
          }

          self._refresh();

          self._buildState();

          if (self._state.fail) {
            self._$container.addClass(self.layout.containerClassFail);
          }

          self._$show = $();
          self._$hide = $();

          if (window.requestAnimationFrame) {
            requestAnimationFrame(unBrake);
          }

          self._mixing = false;

          if (typeof self.callbacks._user === 'function') {
            self.callbacks._user.call(self._domNode, self._state, self);
          }

          if (typeof self.callbacks.onMixEnd === 'function') {
            self.callbacks.onMixEnd.call(self._domNode, self._state, self);
          }

          self._$container.trigger('mixEnd', [self._state, self]);

          if (self._state.fail) {
            typeof self.callbacks.onMixFail === 'function' && self.callbacks.onMixFail.call(self._domNode, self._state, self);

            self._$container.trigger('mixFail', [self._state, self]);
          }

          if (self._loading) {
            typeof self.callbacks.onMixLoad === 'function' && self.callbacks.onMixLoad.call(self._domNode, self._state, self);

            self._$container.trigger('mixLoad', [self._state, self]);
          }

          if (self._queue.length) {
            self._execAction('_queue', 0);

            self.multiMix(self._queue[0][0], self._queue[0][1], self._queue[0][2]);

            self._queue.splice(0, 1);
          }

          self._execAction('_cleanUp', 1);

          self._loading = false;
        },

        /**
         * Get Prefixed CSS
         * @since 2.0.0
         * @param {string} property
         * @param {string} value
         * @param {boolean} prefixValue
         * @return {object} styles
         */
        _getPrefixedCSS: function _getPrefixedCSS(property, value, prefixValue) {
          var self = this,
              styles = {};

          for (var i = 0; i < 2; i++) {
            var prefix = i === 0 ? self._prefix : '';
            prefixValue ? styles[prefix + property] = prefix + value : styles[prefix + property] = value;
          }

          return self._execFilter('_getPrefixedCSS', styles, arguments);
        },

        /**
         * Get Delay
         * @since 2.0.0
         * @param {number} i
         * @return {number} delay
         */
        _getDelay: function _getDelay(i) {
          var self = this,
              n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
              delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;
          return self._execFilter('_getDelay', delay, arguments);
        },

        /**
         * Parse MultiMix Arguments
         * @since 2.0.0
         * @param {array} args
         * @return {object} output
         */
        _parseMultiMixArgs: function _parseMultiMixArgs(args) {
          var self = this,
              output = {
            command: null,
            animate: self.animation.enable,
            callback: null
          };

          for (var i = 0; i < args.length; i++) {
            var arg = args[i];

            if (arg !== null) {
              if (typeof arg === 'object' || typeof arg === 'string') {
                output.command = arg;
              } else if (typeof arg === 'boolean') {
                output.animate = arg;
              } else if (typeof arg === 'function') {
                output.callback = arg;
              }
            }
          }

          return self._execFilter('_parseMultiMixArgs', output, arguments);
        },

        /**
         * Parse Insert Arguments
         * @since 2.0.0
         * @param {array} args
         * @return {object} output
         */
        _parseInsertArgs: function _parseInsertArgs(args) {
          var self = this,
              output = {
            index: 0,
            $object: $(),
            multiMix: {
              filter: self._state.activeFilter
            },
            callback: null
          };

          for (var i = 0; i < args.length; i++) {
            var arg = args[i];

            if (typeof arg === 'number') {
              output.index = arg;
            } else if (typeof arg === 'object' && arg instanceof $) {
              output.$object = arg;
            } else if (typeof arg === 'object' && self._helpers._isElement(arg)) {
              output.$object = $(arg);
            } else if (typeof arg === 'object' && arg !== null) {
              output.multiMix = arg;
            } else if (typeof arg === 'boolean' && !arg) {
              output.multiMix = false;
            } else if (typeof arg === 'function') {
              output.callback = arg;
            }
          }

          return self._execFilter('_parseInsertArgs', output, arguments);
        },

        /**
         * Execute Action
         * @since 2.0.0
         * @param {string} methodName
         * @param {boolean} isPost
         * @param {array} args
         */
        _execAction: function _execAction(methodName, isPost, args) {
          var self = this,
              context = isPost ? 'post' : 'pre';

          if (!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)) {
            for (var key in self._actions[methodName][context]) {
              self._actions[methodName][context][key].call(self, args);
            }
          }
        },

        /**
         * Execute Filter
         * @since 2.0.0
         * @param {string} methodName
         * @param {mixed} value
         * @return {mixed} value
         */
        _execFilter: function _execFilter(methodName, value, args) {
          var self = this;

          if (!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)) {
            for (var key in self._filters[methodName]) {
              return self._filters[methodName][key].call(self, args);
            }
          } else {
            return value;
          }
        },

        /* Helpers
        ---------------------------------------------------------------------- */
        _helpers: {
          /**
           * CamelCase
           * @since 2.0.0
           * @param {string}
           * @return {string}
           */
          _camelCase: function _camelCase(string) {
            return string.replace(/-([a-z])/g, function (g) {
              return g[1].toUpperCase();
            });
          },

          /**
           * Is Element
           * @since 2.1.3
           * @param {object} element to test
           * @return {boolean}
           */
          _isElement: function _isElement(el) {
            if (window.HTMLElement) {
              return el instanceof HTMLElement;
            } else {
              return el !== null && el.nodeType === 1 && el.nodeName === 'string';
            }
          }
        },

        /* Public Methods
        ---------------------------------------------------------------------- */

        /**
         * Is Mixing
         * @since 2.0.0
         * @return {boolean}
         */
        isMixing: function isMixing() {
          var self = this;
          return self._execFilter('isMixing', self._mixing);
        },

        /**
         * Filter (public)
         * @since 2.0.0
         * @param {array} arguments
         */
        filter: function filter() {
          var self = this,
              args = self._parseMultiMixArgs(arguments);

          self._clicking && (self._toggleString = '');
          self.multiMix({
            filter: args.command
          }, args.animate, args.callback);
        },

        /**
         * Sort (public)
         * @since 2.0.0
         * @param {array} arguments
         */
        sort: function sort() {
          var self = this,
              args = self._parseMultiMixArgs(arguments);

          self.multiMix({
            sort: args.command
          }, args.animate, args.callback);
        },

        /**
         * Change Layout (public)
         * @since 2.0.0
         * @param {array} arguments
         */
        changeLayout: function changeLayout() {
          var self = this,
              args = self._parseMultiMixArgs(arguments);

          self.multiMix({
            changeLayout: args.command
          }, args.animate, args.callback);
        },

        /**
         * MultiMix
         * @since 2.0.0
         * @param {array} arguments
         */
        multiMix: function multiMix() {
          var self = this,
              args = self._parseMultiMixArgs(arguments);

          self._execAction('multiMix', 0, arguments);

          if (!self._mixing) {
            if (self.controls.enable && !self._clicking) {
              self.controls.toggleFilterButtons && self._buildToggleArray();

              self._updateControls(args.command, self.controls.toggleFilterButtons);
            }

            self._queue.length < 2 && (self._clicking = false);
            delete self.callbacks._user;
            if (args.callback) self.callbacks._user = args.callback;
            var sort = args.command.sort,
                filter = args.command.filter,
                changeLayout = args.command.changeLayout;

            self._refresh();

            if (sort) {
              self._newSort = self._parseSort(sort);
              self._newSortString = sort;
              self._sorting = true;

              self._sort();
            }

            if (filter !== undf) {
              filter = filter === 'all' ? self.selectors.target : filter;
              self._activeFilter = filter;
            }

            self._filter();

            if (changeLayout) {
              self._newDisplay = typeof changeLayout === 'string' ? changeLayout : changeLayout.display || self.layout.display;
              self._newClass = changeLayout.containerClass || '';

              if (self._newDisplay !== self.layout.display || self._newClass !== self.layout.containerClass) {
                self._changingLayout = true;
                self._changingClass = self._newClass !== self.layout.containerClass;
                self._changingDisplay = self._newDisplay !== self.layout.display;
              }
            }

            self._$targets.css(self._brake);

            self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);

            self._execAction('multiMix', 1, arguments);
          } else {
            if (self.animation.queue && self._queue.length < self.animation.queueLimit) {
              self._queue.push(arguments);

              self.controls.enable && !self._clicking && self._updateControls(args.command);

              self._execAction('multiMixQueue', 1, arguments);
            } else {
              if (typeof self.callbacks.onMixBusy === 'function') {
                self.callbacks.onMixBusy.call(self._domNode, self._state, self);
              }

              self._$container.trigger('mixBusy', [self._state, self]);

              self._execAction('multiMixBusy', 1, arguments);
            }
          }
        },

        /**
         * Insert
         * @since 2.0.0
         * @param {array} arguments
         */
        insert: function insert() {
          var self = this,
              args = self._parseInsertArgs(arguments),
              callback = typeof args.callback === 'function' ? args.callback : null,
              frag = document.createDocumentFragment(),
              target = function () {
            self._refresh();

            if (self._$targets.length) {
              return args.index < self._$targets.length || !self._$targets.length ? self._$targets[args.index] : self._$targets[self._$targets.length - 1].nextElementSibling;
            } else {
              return self._$parent[0].children[0];
            }
          }();

          self._execAction('insert', 0, arguments);

          if (args.$object) {
            for (var i = 0; i < args.$object.length; i++) {
              var el = args.$object[i];
              frag.appendChild(el);
              frag.appendChild(document.createTextNode(' '));
            }

            self._$parent[0].insertBefore(frag, target);
          }

          self._execAction('insert', 1, arguments);

          if (typeof args.multiMix === 'object') {
            self.multiMix(args.multiMix, callback);
          }
        },

        /**
         * Prepend
         * @since 2.0.0
         * @param {array} arguments
         */
        prepend: function prepend() {
          var self = this,
              args = self._parseInsertArgs(arguments);

          self.insert(0, args.$object, args.multiMix, args.callback);
        },

        /**
         * Append
         * @since 2.0.0
         * @param {array} arguments
         */
        append: function append() {
          var self = this,
              args = self._parseInsertArgs(arguments);

          self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
        },

        /**
         * Get Option
         * @since 2.0.0
         * @param {string} string
         * @return {mixed} value
         */
        getOption: function getOption(string) {
          var self = this,
              getProperty = function getProperty(obj, prop) {
            var parts = prop.split('.'),
                last = parts.pop(),
                l = parts.length,
                i = 1,
                current = parts[0] || prop;

            while ((obj = obj[current]) && i < l) {
              current = parts[i];
              i++;
            }

            if (obj !== undf) {
              return obj[last] !== undf ? obj[last] : obj;
            }
          };

          return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
        },

        /**
         * Set Options
         * @since 2.0.0
         * @param {object} config
         */
        setOptions: function setOptions(config) {
          var self = this;

          self._execAction('setOptions', 0, arguments);

          typeof config === 'object' && $.extend(true, self, config);

          self._execAction('setOptions', 1, arguments);
        },

        /**
         * Get State
         * @since 2.0.0
         * @return {object} state
         */
        getState: function getState() {
          var self = this;
          return self._execFilter('getState', self._state, self);
        },

        /**
         * Force Refresh
         * @since 2.1.2
         */
        forceRefresh: function forceRefresh() {
          var self = this;

          self._refresh(false, true);
        },

        /**
         * Destroy
         * @since 2.0.0
         * @param {boolean} hideAll
         */
        destroy: function destroy(hideAll) {
          var self = this;

          self._execAction('destroy', 0, arguments);

          self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');

          for (var i = 0; i < self._$targets.length; i++) {
            var target = self._$targets[i];
            hideAll && (target.style.display = '');
            delete target.mixParent;
          }

          self._execAction('destroy', 1, arguments);

          delete $.MixItUp.prototype._instances[self._id];
        }
      };
      /* jQuery Methods
      ---------------------------------------------------------------------- */

      /**
       * jQuery .mixItUp() method
       * @since 2.0.0
       * @extends $.fn
       */

      $.fn.mixItUp = function () {
        var args = arguments,
            dataReturn = [],
            eachReturn,
            _instantiate = function _instantiate(domNode, settings) {
          var instance = new $.MixItUp(),
              rand = function rand() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
          };

          instance._execAction('_instantiate', 0, arguments);

          domNode.id = !domNode.id ? 'MixItUp' + rand() : domNode.id;

          if (!instance._instances[domNode.id]) {
            instance._instances[domNode.id] = instance;

            instance._init(domNode, settings);
          }

          instance._execAction('_instantiate', 1, arguments);
        };

        eachReturn = this.each(function () {
          if (args && typeof args[0] === 'string') {
            var instance = $.MixItUp.prototype._instances[this.id];

            if (args[0] === 'isLoaded') {
              dataReturn.push(instance ? true : false);
            } else {
              var data = instance[args[0]](args[1], args[2], args[3]);
              if (data !== undf) dataReturn.push(data);
            }
          } else {
            _instantiate(this, args[0]);
          }
        });

        if (dataReturn.length) {
          return dataReturn.length > 1 ? dataReturn : dataReturn[0];
        } else {
          return eachReturn;
        }
      };
      /**
       * jQuery .removeStyle() method
       * @since 2.0.0
       * @extends $.fn
       */


      $.fn.removeStyle = function (style, prefix) {
        prefix = prefix ? prefix : '';
        return this.each(function () {
          var el = this,
              styles = style.split(' ');

          for (var i = 0; i < styles.length; i++) {
            for (var j = 0; j < 4; j++) {
              switch (j) {
                case 0:
                  var prop = styles[i];
                  break;

                case 1:
                  var prop = $.MixItUp.prototype._helpers._camelCase(prop);

                  break;

                case 2:
                  var prop = prefix + styles[i];
                  break;

                case 3:
                  var prop = $.MixItUp.prototype._helpers._camelCase(prefix + styles[i]);

              }

              if (el.style[prop] !== undf && typeof el.style[prop] !== 'unknown' && el.style[prop].length > 0) {
                el.style[prop] = '';
              }

              if (!prefix && j === 1) break;
            }
          }

          if (el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === '') {
            el.attributes.removeNamedItem('style');
          }
        });
      };
    });
    /***/

  },

  /***/
  "./src/app/repositorys/Base.repository.ts":
  /*!************************************************!*\
    !*** ./src/app/repositorys/Base.repository.ts ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRepositorysBaseRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return BaseRepository;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BaseRepository =
    /*#__PURE__*/
    function () {
      function BaseRepository(httpClient) {
        _classCallCheck(this, BaseRepository);

        this.httpClient = httpClient;
        this.REST_API_URL = '/assets/api';
      } // getJSON(url: string): Promise<any> {
      //     const result = this.httpClient.get(`${this.REST_API_URL}/${url}`);
      //
      //     return new Promise((resolve) => {
      //         result.subscribe((data) => resolve(data));
      //     });
      // }


      _createClass(BaseRepository, [{
        key: "getJSON",
        value: function getJSON(url) {
          return this.httpClient.get("".concat(this.REST_API_URL, "/").concat(url));
        }
      }]);

      return BaseRepository;
    }();

    BaseRepository.ɵfac = function BaseRepository_Factory(t) {
      return new (t || BaseRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BaseRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BaseRepository,
      factory: BaseRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/development/Development.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/development/Development.service.ts ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesDevelopmentDevelopmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return DevelopmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DevelopmentService =
    /*#__PURE__*/
    function () {
      function DevelopmentService() {
        _classCallCheck(this, DevelopmentService);

        this.setDev = new Set();
        this.setUI = new Set();
        this.mapDevelopmentList = new Map();
      }

      _createClass(DevelopmentService, [{
        key: "getDevs",
        get: function get() {
          this.setDev.add({
            url: 'dev/cms/',
            name: '#CMS Theme | <HTML5, CSS3>'
          }).add({
            url: 'dev/listmap/listmap.xml',
            name: '#Markup Listmap | <HTML5, XML, XSL, CSS2.1, jQuery>'
          }).add({
            url: 'https://github.com/woonyzzang/j-generator-css3',
            name: '#J Generator CSS3 | <HTML5, CSS3, jQuery>'
          }).add({
            url: 'https://github.com/woonyzzang/j-html5-reference',
            name: '#J HTML5 Open Reference | <HTML5, CSS2.1, Ext.js, jQuery>'
          }).add({
            url: 'https://github.com/woonyzzang/j-prototype',
            name: '#J Prototype | <HTML5, CSS3, jQuery>'
          }).add({
            url: 'https://github.com/woonyzzang/j-draft-design',
            name: '#J Draft Design Gallery | <HTML5, CSS3, jQuery>'
          }).add({
            url: 'https://github.com/woonyzzang/j-responsive-design-view',
            name: '#J Responsive Design View | <HTML5, SCSS, ECMAScript6, React.js>'
          }).add({
            url: 'https://github.com/woonyzzang/j-memo',
            name: '#J Memo | <HTML5, Webpack, SCSS, ECMAScript6, React.js, Electron>'
          }).add({
            url: 'https://github.com/woonyzzang/j-hiworks-mail-notifier',
            name: '#J Hiworks Notifier | <HTML5, Webpack, Sass, ECMAScript6, Electron>'
          }).add({
            url: 'https://github.com/woonyzzang/j-core-module',
            name: '#J Core Module | <Webpack, Babel, ECMAScript6>'
          }).add({
            url: 'https://github.com/woonyzzang/j-core-editor',
            name: '#J Core Editor | <HTML5, Webpack, SCSS, ECMAScript6, React.js>'
          }).add({
            url: 'https://github.com/woonyzzang/j-cheat-sheet-api',
            name: '#J Cheat Sheet API | <HTML5, Webpack, SCSS, ECMAScript6, Vue.js, Vue-Router, Ant Design Vue>'
          });
          return this.setDev;
        }
      }, {
        key: "getUIs",
        get: function get() {
          this.setUI.add({
            url: 'http://jsfiddle.net/woonyzzang/2B6hM/',
            name: 'css3 Graph'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/JFEAe/',
            name: 'checkbox list'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/dMVj9/',
            name: 'slide rolling banner'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/A4zVF/',
            name: 'modal popup'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/cmeNj/',
            name: 'login'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/fN2VN/',
            name: 'comment box'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/Afy62/',
            name: 'calender'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/uGJVR/',
            name: 'paginate'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/f47vQ/',
            name: 'tab list'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/XttEt/',
            name: 'thumbnail list'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/8H3DX/',
            name: 'table form'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/Xead3/',
            name: 'button'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/C7QrK/',
            name: 'tab menu'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/qJsqE/',
            name: 'navigation'
          }).add({
            url: 'http://jsfiddle.net/woonyzzang/Afy62/',
            name: 'side menu'
          });
          return this.setUI;
        }
      }, {
        key: "getDevelopmentList",
        get: function get() {
          this.mapDevelopmentList.set('labs', this.getDevs).set('ui', this.getUIs);
          return this.mapDevelopmentList;
        }
      }]);

      return DevelopmentService;
    }();

    DevelopmentService.ɵfac = function DevelopmentService_Factory(t) {
      return new (t || DevelopmentService)();
    };

    DevelopmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DevelopmentService,
      factory: DevelopmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevelopmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/header/Header.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/header/Header.service.ts ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesHeaderHeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return HeaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderService =
    /*#__PURE__*/
    function () {
      function HeaderService() {
        _classCallCheck(this, HeaderService);

        this.setGnb = new Set();
        this.setUtil = new Set();
      }

      _createClass(HeaderService, [{
        key: "getGnbMenus",
        get: function get() {
          return this.setGnb.add({
            name: 'features',
            url: '#features',
            title: '기능소개'
          }).add({
            name: 'licenses',
            url: '#licenses',
            title: '자격증'
          }).add({
            name: 'technique',
            url: '#technique',
            title: '스킬'
          }).add({
            name: 'workbench',
            url: '#workbench',
            title: '작업내역'
          }).add({
            name: 'portfolio',
            url: '#portfolio',
            title: '포트폴리오'
          }).add({
            name: 'development',
            url: '#development',
            title: 'UI개발'
          }).add({
            name: 'wiki',
            url: '#wiki',
            title: '위키소개'
          }).add({
            name: 'blog',
            url: '#blog',
            title: '블로그소개'
          });
        }
      }, {
        key: "getUtilMenus",
        get: function get() {
          return this.setUtil.add({
            name: 'introduction',
            url: 'assets/resume/introduction.html',
            title: '자기소개'
          }).add({
            name: 'personality',
            url: 'assets/resume/personality_type.html',
            title: '성격유형'
          }).add({
            name: 'github',
            url: 'https://github.com/woonyzzang?tab=repositories',
            title: '깃허브 저장소'
          }).add({
            name: 'blog',
            url: 'https://woonyzzang.github.io/',
            title: '블로그소개'
          });
        }
      }, {
        key: "getResume",
        get: function get() {
          return this.setResume = {
            name: 'resume',
            url: 'assets/resume/resume.html',
            title: '이력서'
          };
        }
      }]);

      return HeaderService;
    }();

    HeaderService.ɵfac = function HeaderService_Factory(t) {
      return new (t || HeaderService)();
    };

    HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeaderService,
      factory: HeaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/licenses/Licenses.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/licenses/Licenses.service.ts ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesLicensesLicensesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return LicensesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @repositorys/Base.repository */
    "./src/app/repositorys/Base.repository.ts");

    var LicensesService =
    /*#__PURE__*/
    function () {
      function LicensesService(baseRepository) {
        _classCallCheck(this, LicensesService);

        this.baseRepository = baseRepository;
      } // get getLicensesData(): Promise<any> {
      //     return this.baseRepository.getJSON('licenses.json');
      // }


      _createClass(LicensesService, [{
        key: "getLicensesData",
        get: function get() {
          return this.baseRepository.getJSON('licenses.json');
        }
      }]);

      return LicensesService;
    }();

    LicensesService.ɵfac = function LicensesService_Factory(t) {
      return new (t || LicensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]));
    };

    LicensesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LicensesService,
      factory: LicensesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LicensesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/portfolio/Portfolio.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/portfolio/Portfolio.service.ts ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesPortfolioPortfolioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return PortfolioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @repositorys/Base.repository */
    "./src/app/repositorys/Base.repository.ts");

    var PortfolioService =
    /*#__PURE__*/
    function () {
      function PortfolioService(baseRepository) {
        _classCallCheck(this, PortfolioService);

        this.baseRepository = baseRepository;
      }

      _createClass(PortfolioService, [{
        key: "gePortfolioData",
        get: function get() {
          return this.baseRepository.getJSON('portfolio.json');
        }
      }]);

      return PortfolioService;
    }();

    PortfolioService.ɵfac = function PortfolioService_Factory(t) {
      return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]));
    };

    PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PortfolioService,
      factory: PortfolioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/technique/Technique.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/technique/Technique.service.ts ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesTechniqueTechniqueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return TechniqueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TechniqueService =
    /*#__PURE__*/
    function () {
      function TechniqueService() {
        _classCallCheck(this, TechniqueService);

        this.setFrontend = new Set();
        this.setBackend = new Set();
        this.setDatebase = new Set();
        this.mapTechniqueList = new Map();
      }

      _createClass(TechniqueService, [{
        key: "getFrontendSkils",
        get: function get() {
          return this.setFrontend.add('HTML4.01').add('XHTML1.0').add('HTML5').add('CSS2.1').add('CSS3').add('Less').add('Sass').add('Bootstrap').add('Foundation').add('Flash 2.0 ~ 3.0').add('ECMAScript').add('CoffeeScript').add('TypeScript').add('jQuery').add('jQueryMobile').add('Edge Animate').add('Ext.js').add('Require.js').add('Backbone.js').add('AngularJS').add('Angular').add('React.js').add('Vue.js').add('Electron').add('Grunt').add('Gulp').add('Webpack').add('Ionic');
        }
      }, {
        key: "getBackendSkils",
        get: function get() {
          return this.setBackend.add('Node.js').add('Express').add('jade').add('ejs').add('PHP').add('Java');
        }
      }, {
        key: "getDatebaseSkils",
        get: function get() {
          return this.setDatebase.add('MongoDB').add('MySQL').add('Oracle');
        }
      }, {
        key: "getTechniqueList",
        get: function get() {
          return this.mapTechniqueList.set('frontend', this.getFrontendSkils).set('backend', this.getBackendSkils).set('database', this.getDatebaseSkils);
        }
      }]);

      return TechniqueService;
    }();

    TechniqueService.ɵfac = function TechniqueService_Factory(t) {
      return new (t || TechniqueService)();
    };

    TechniqueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TechniqueService,
      factory: TechniqueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechniqueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/workbench/Workbench.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/workbench/Workbench.service.ts ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesWorkbenchWorkbenchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return WorkbenchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @repositorys/Base.repository */
    "./src/app/repositorys/Base.repository.ts");

    var WorkbenchService =
    /*#__PURE__*/
    function () {
      function WorkbenchService(baseRepository) {
        _classCallCheck(this, WorkbenchService);

        this.baseRepository = baseRepository;
      }

      _createClass(WorkbenchService, [{
        key: "getWorkbenchData",
        get: function get() {
          return this.baseRepository.getJSON('workbench.json');
        }
      }]);

      return WorkbenchService;
    }();

    WorkbenchService.ɵfac = function WorkbenchService_Factory(t) {
      return new (t || WorkbenchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]));
    };

    WorkbenchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorkbenchService,
      factory: WorkbenchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkbenchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _repositorys_Base_repository__WEBPACK_IMPORTED_MODULE_1__["default"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/dom.ts":
  /*!******************************!*\
    !*** ./src/app/utils/dom.ts ***!
    \******************************/

  /*! exports provided: siblings */

  /***/
  function srcAppUtilsDomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "siblings", function () {
      return siblings;
    });
    /**
     * siblings
     * @description 형제 노드 찾기
     * @param {DOMNode} elem - DOM 셀렉터
     */


    var siblings = function siblings(elem) {
      return _toConsumableArray(elem.parentElement.children).filter(function (node) {
        return node !== elem;
      });
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ideaIUM-2019.3.2\workspace\j-portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map