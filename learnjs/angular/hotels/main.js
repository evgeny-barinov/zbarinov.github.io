(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activities/activities.component.css":
/*!*****************************************************!*\
  !*** ./src/app/activities/activities.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity-row.selected {\n    background: #f6f6f6;\n}\n\n.activity-img img {\n    width:50px;\n    height:50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdGllcy9hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZpdGllcy9hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZpdHktcm93LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuXG4uYWN0aXZpdHktaW1nIGltZyB7XG4gICAgd2lkdGg6NTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/activities/activities.component.html":
/*!******************************************************!*\
  !*** ./src/app/activities/activities.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"selectedPlace?.img || '/assets/images/1.jpg'\" alt=\"\" style=\"width:311px;height:208px\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li *ngFor=\"let type of (places | uniqtype)\"><a (click)=\"currentType=type\">{{type | uppercase}}</a></li>\n      <li class=\"anc-bor\"><a (click)=\"currentType=''\">All</a></li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <div\n                *ngFor=\"let place of places | filterPlaces:currentType\"\n                [ngClass]=\"{'activity-row': true, 'selected': selectedPlace?.title === place.title}\"\n                (click)=\"selectPlace(place)\"\n        >\n          <div class=\"activity-desc\">\n            <h5>{{place.title}}</h5>\n            <p>{{place.address}}</p>\n            <h6>Tel: {{place.phone}}</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img [src]=\"place.img\" alt=\"\"/></li>\n              <li><img [src]=\"place.social_info.img\"  alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/activities/activities.component.ts":
/*!****************************************************!*\
  !*** ./src/app/activities/activities.component.ts ***!
  \****************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_places_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/places.action */ "./src/app/store/actions/places.action.ts");




var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent(store) {
        this.store = store;
        this.currentType = '';
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_actions_places_action__WEBPACK_IMPORTED_MODULE_3__["GetPlacesPending"]());
        this.store.select('places').subscribe(function (places) {
            _this.places = places;
        });
        this.selectPlace(this.places[0]);
    };
    ActivitiesComponent.prototype.selectPlace = function (place) {
        var _this = this;
        this.store.dispatch(new _store_actions_places_action__WEBPACK_IMPORTED_MODULE_3__["SelectPlace"](place));
        this.store.select('selectedPlace').subscribe(function (selectedPlace) {
            _this.selectedPlace = selectedPlace;
        });
    };
    ActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/activities/activities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div class=\"element\">\n  <div class=\"element-left\">\n    <app-activities></app-activities>\n  </div>\n  <div class=\"element-right\" *ngIf=\"selectedPlace\">\n    <app-weather></app-weather>\n    <app-followers></app-followers>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'Hot Weather Widget';
        this.selectedPlace = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('selectedPlace').subscribe(function (selectedPlace) {
            _this.selectedPlace = selectedPlace;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activities/activities.component */ "./src/app/activities/activities.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _socialinfo_socialinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socialinfo/socialinfo.component */ "./src/app/socialinfo/socialinfo.component.ts");
/* harmony import */ var _shared_pipes_uniqtype_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/uniqtype.pipe */ "./src/app/shared/pipes/uniqtype.pipe.ts");
/* harmony import */ var _shared_pipes_filter_places_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/pipes/filter-places.pipe */ "./src/app/shared/pipes/filter-places.pipe.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_effects_places_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/effects/places.effects */ "./src/app/store/effects/places.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _activities_activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
                _socialinfo_socialinfo_component__WEBPACK_IMPORTED_MODULE_6__["SocialinfoComponent"],
                _shared_pipes_uniqtype_pipe__WEBPACK_IMPORTED_MODULE_7__["UniqtypePipe"],
                _shared_pipes_filter_places_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPlacesPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effects_places_effects__WEBPACK_IMPORTED_MODULE_13__["PlacesEffects"]]),
                _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
                    ? []
                    : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/mock/data.ts":
/*!*************************************!*\
  !*** ./src/app/shared/mock/data.ts ***!
  \*************************************/
/*! exports provided: places */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "places", function() { return places; });
var places = [
    {
        title: 'Hotel F6',
        img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/c1/54/a6/deluxe-room.jpg',
        address: 'Fabianinkatu 6, Helsinki 00130, Finland',
        phone: 810358968999666,
        weather: {
            title: 'Good atmosphere',
            icon: '',
            water: 0,
            temperature: -12
        },
        social_info: {
            title: 'We absolutely loved our time at the Amari',
            img: 'https://media-cdn.tripadvisor.com/media/photo-o/0e/10/fa/10/hotel-f6.jpg',
            followers: 456,
            following: 876
        },
        type: 'hotel'
    },
    {
        title: 'Amari Phuket',
        img: 'https://media-cdn.tripadvisor.com/media/photo-o/14/83/13/c0/pool.jpg',
        address: '2 Meun-Ngern Road | Patong Beach, Patong, Kathu, Phuket 83150, Thailand',
        phone: 8106676340106,
        weather: {
            title: 'Excellent weather',
            icon: '',
            water: 26,
            temperature: 33
        },
        social_info: {
            title: 'We absolutely loved our time at the Amari',
            img: 'https://media-cdn.tripadvisor.com/media/photo-o/14/83/13/bc/spa.jpg',
            followers: 1899,
            following: 3434
        },
        type: 'hotel'
    },
    {
        title: 'Fishing Village',
        img: 'https://media-cdn.tripadvisor.com/media/photo-w/05/c2/98/1c/caption.jpg',
        address: 'Oktyabrskaya St, 8 | Oktyabrsky Island, Kaliningrad 236039, Russia',
        phone: 74012307207,
        weather: {
            title: 'Recreation',
            icon: '',
            water: 15,
            temperature: 10
        },
        social_info: {
            title: 'Great part of town',
            img: 'https://media-cdn.tripadvisor.com/media/photo-f/16/4d/0e/3a/caption.jpg',
            followers: 344,
            following: 4343
        },
        type: 'fishing'
    },
    {
        title: 'Kamchatka Peninsula',
        img: 'https://media-cdn.tripadvisor.com/media/photo-w/10/8a/79/06/photo0jpg.jpg',
        address: 'Russia',
        phone: 79140226851,
        weather: {
            title: 'Kamchatka as an independent traveller',
            icon: '',
            water: 10,
            temperature: 12
        },
        social_info: {
            title: 'Exploring Kamchatka and the Kuril Islands',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/40/72/06/estamos-montando-una.jpg',
            followers: 154,
            following: 687
        },
        type: 'fishing'
    },
    {
        title: 'SANDEMANs New Europe - Madrid',
        img: 'https://media-cdn.tripadvisor.com/media/photo-w/0b/37/26/95/sandemans-new-madrid.jpg',
        address: 'Plaza Mayor | Paraguas rojo frente a la oficina de Turismo, 28012 Madrid, Spain',
        phone: 493051050030,
        weather: {
            title: 'Great free walking tour around Madrid!',
            icon: '',
            water: 19,
            temperature: 25
        },
        social_info: {
            title: 'Greatest',
            img: 'https://media-cdn.tripadvisor.com/media/photo-f/16/7e/3f/5e/photo0jpg.jpg',
            followers: 38383,
            following: 39838
        },
        type: 'tours'
    },
    {
        title: 'Hotel Indigo Barcelona',
        img: 'https://media-cdn.tripadvisor.com/media/photo-w/0c/7b/8e/b2/ian-s-free-walking-tour.jpg',
        address: 'Plaza Catalunya, 08010 Barcelona, Spain',
        phone: 34622940471,
        weather: {
            title: 'Amazing Free Gothic Quarter Tour',
            icon: '',
            water: 18,
            temperature: 22
        },
        social_info: {
            title: 'Best way to see a city',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/7c/97/a3/photo8jpg.jpg',
            followers: 3434,
            following: 8484
        },
        type: 'tours'
    }
];


/***/ }),

/***/ "./src/app/shared/pipes/filter-places.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter-places.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterPlacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPlacesPipe", function() { return FilterPlacesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPlacesPipe = /** @class */ (function () {
    function FilterPlacesPipe() {
    }
    FilterPlacesPipe.prototype.transform = function (places, type) {
        if (type === '') {
            return places;
        }
        return places.filter(function (place) { return place.type === type; });
    };
    FilterPlacesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterPlaces'
        })
    ], FilterPlacesPipe);
    return FilterPlacesPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/uniqtype.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/uniqtype.pipe.ts ***!
  \***********************************************/
/*! exports provided: UniqtypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqtypePipe", function() { return UniqtypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UniqtypePipe = /** @class */ (function () {
    function UniqtypePipe() {
    }
    UniqtypePipe.prototype.transform = function (places) {
        var types = places.map(function (place) { return place.type; });
        return Array.from(new Set(types));
    };
    UniqtypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'uniqtype'
        })
    ], UniqtypePipe);
    return UniqtypePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/places-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/places-service.service.ts ***!
  \***********************************************************/
/*! exports provided: PlacesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesServiceService", function() { return PlacesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/data */ "./src/app/shared/mock/data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PlacesServiceService = /** @class */ (function () {
    function PlacesServiceService() {
        this.places = _mock_data__WEBPACK_IMPORTED_MODULE_2__["places"];
    }
    PlacesServiceService.prototype.getPlaces = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.places);
    };
    PlacesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlacesServiceService);
    return PlacesServiceService;
}());



/***/ }),

/***/ "./src/app/socialinfo/socialinfo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/socialinfo/socialinfo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teddy-bear img {\n    width:106px;\n    height:106px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsaW5mby9zb2NpYWxpbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbGluZm8vc29jaWFsaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlZGR5LWJlYXIgaW1nIHtcbiAgICB3aWR0aDoxMDZweDtcbiAgICBoZWlnaHQ6MTA2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/socialinfo/socialinfo.component.html":
/*!******************************************************!*\
  !*** ./src/app/socialinfo/socialinfo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{socialInfo.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"socialInfo.img || '/assets/images/b1.jpg'\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{socialInfo.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{socialInfo.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/socialinfo/socialinfo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/socialinfo/socialinfo.component.ts ***!
  \****************************************************/
/*! exports provided: SocialinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialinfoComponent", function() { return SocialinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var SocialinfoComponent = /** @class */ (function () {
    function SocialinfoComponent(store) {
        this.store = store;
    }
    SocialinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('selectedPlace').subscribe(function (selectedPlace) {
            _this.socialInfo = selectedPlace.social_info;
        });
    };
    SocialinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./socialinfo.component.html */ "./src/app/socialinfo/socialinfo.component.html"),
            styles: [__webpack_require__(/*! ./socialinfo.component.css */ "./src/app/socialinfo/socialinfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SocialinfoComponent);
    return SocialinfoComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/places.action.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/places.action.ts ***!
  \************************************************/
/*! exports provided: GET_PLACES_PENDING, GET_PLACES_SUCCESS, GET_PLACES_ERROR, SELECT_PLACE, GetPlacesPending, GetPlacesSuccess, GetPlacesError, SelectPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLACES_PENDING", function() { return GET_PLACES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLACES_SUCCESS", function() { return GET_PLACES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLACES_ERROR", function() { return GET_PLACES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PLACE", function() { return SELECT_PLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlacesPending", function() { return GetPlacesPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlacesSuccess", function() { return GetPlacesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlacesError", function() { return GetPlacesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlace", function() { return SelectPlace; });
var GET_PLACES_PENDING = 'GET_PLACES_PENDING';
var GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
var GET_PLACES_ERROR = 'GET_PLACES_ERROR';
var SELECT_PLACE = 'SELECT_PLACE';
var GetPlacesPending = /** @class */ (function () {
    function GetPlacesPending() {
        this.type = GET_PLACES_PENDING;
    }
    return GetPlacesPending;
}());

var GetPlacesSuccess = /** @class */ (function () {
    function GetPlacesSuccess(payload) {
        this.payload = payload;
        this.type = GET_PLACES_SUCCESS;
    }
    return GetPlacesSuccess;
}());

var GetPlacesError = /** @class */ (function () {
    function GetPlacesError(payload) {
        this.payload = payload;
        this.type = GET_PLACES_ERROR;
    }
    return GetPlacesError;
}());

var SelectPlace = /** @class */ (function () {
    function SelectPlace(payload) {
        this.payload = payload;
        this.type = SELECT_PLACE;
    }
    return SelectPlace;
}());



/***/ }),

/***/ "./src/app/store/effects/places.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/places.effects.ts ***!
  \*************************************************/
/*! exports provided: PlacesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesEffects", function() { return PlacesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_places_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/places.action */ "./src/app/store/actions/places.action.ts");
/* harmony import */ var _shared_services_places_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/places-service.service */ "./src/app/shared/services/places-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var PlacesEffects = /** @class */ (function () {
    function PlacesEffects(actions$, placesService) {
        var _this = this;
        this.actions$ = actions$;
        this.placesService = placesService;
        this.places$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_places_action__WEBPACK_IMPORTED_MODULE_3__["GET_PLACES_PENDING"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.placesService.getPlaces().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (places) { return new _actions_places_action__WEBPACK_IMPORTED_MODULE_3__["GetPlacesSuccess"](places); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_places_action__WEBPACK_IMPORTED_MODULE_3__["GetPlacesError"](err)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlacesEffects.prototype, "places$", void 0);
    PlacesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _shared_services_places_service_service__WEBPACK_IMPORTED_MODULE_4__["PlacesServiceService"]])
    ], PlacesEffects);
    return PlacesEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_places_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/places.reducer */ "./src/app/store/reducers/places.reducer.ts");

var reducers = {
    places: _reducers_places_reducer__WEBPACK_IMPORTED_MODULE_0__["placesReducer"],
    selectedPlace: _reducers_places_reducer__WEBPACK_IMPORTED_MODULE_0__["selectPlaceReducer"]
};


/***/ }),

/***/ "./src/app/store/reducers/places.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/places.reducer.ts ***!
  \**************************************************/
/*! exports provided: placesReducer, selectPlaceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placesReducer", function() { return placesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlaceReducer", function() { return selectPlaceReducer; });
/* harmony import */ var _actions_places_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/places.action */ "./src/app/store/actions/places.action.ts");

var intialState = [];
function placesReducer(state, action) {
    if (state === void 0) { state = intialState; }
    switch (action.type) {
        case _actions_places_action__WEBPACK_IMPORTED_MODULE_0__["GET_PLACES_SUCCESS"]:
            return action.payload;
        case _actions_places_action__WEBPACK_IMPORTED_MODULE_0__["GET_PLACES_ERROR"]:
            return state;
        default:
            return state;
    }
}
function selectPlaceReducer(state, action) {
    return action.payload;
}


/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{weather.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{weather.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{weather.water}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(store) {
        this.store = store;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('selectedPlace').subscribe(function (selectedPlace) {
            _this.weather = selectedPlace.weather;
        });
    };
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/barya/dev/web/angular_learnjs/untitled/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map