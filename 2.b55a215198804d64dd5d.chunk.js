webpackJsonp([2,8],{"6h35":function(l,n,u){"use strict";function t(l){return a._21(0,[(l()(),a._22(0,null,null,6,null,null,null,null,null,null,null)),(l()(),a._23(null,["\n            "])),(l()(),a._22(0,null,null,3,"pre",[],null,null,null,null,null)),(l()(),a._22(0,null,null,2,"code",[],null,null,null,null,null)),a._26(532480,[[1,4]],0,o.a,[a.L,a.K],{highlight:[0,"highlight"]},null),(l()(),a._23(null,["",""])),(l()(),a._23(null,["\n        "]))],function(l,n){l(n,4,0,"language-"+n.component.language)},function(l,n){l(n,5,0,n.component.code.trim())})}function e(l){return a._21(0,[(l()(),a._22(0,null,null,5,null,null,null,null,null,null,null)),(l()(),a._23(null,["\n            "])),(l()(),a._22(0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),a._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a._23(null,["",""])),(l()(),a._23(null,["\n        "]))],null,function(l,n){l(n,4,0,n.component.code.trim())})}function i(l){return a._21(0,[a._28(335544320,1,{codeHighlight:0}),(l()(),a._23(null,["\n        "])),(l()(),a._25(8388608,null,null,1,null,t)),a._26(8192,null,0,s.n,[a.T,a._6],{ngIf:[0,"ngIf"]},null),(l()(),a._23(null,["\n        "])),(l()(),a._25(8388608,null,null,1,null,e)),a._26(8192,null,0,s.n,[a.T,a._6],{ngIf:[0,"ngIf"]},null),(l()(),a._23(null,["\n    "]))],function(l,n){var u=n.component;l(n,3,0,!u.disablePrism),l(n,6,0,u.disablePrism)},null)}function r(l){return a._21(0,[(l()(),a._22(0,null,null,1,"clr-code-snippet",[],null,null,null,i,p)),a._26(2121728,null,0,c.a,[],null,null)],null,null)}var a=u("3j3K"),o=u("SFkK"),s=u("2Je8"),c=u("X6UX");u.d(n,"b",function(){return p}),n.a=i;var _=["pre[_ngcontent-%COMP%] {\n            background: transparent;\n            padding: 12px;\n        }"],p=a._20({encapsulation:0,styles:_,data:{}});a._30("clr-code-snippet",c.a,r,{code:"clrCode",language:"clrLanguage",disablePrism:"clrDisablePrism"},{},[])},AaU6:function(l,n,u){"use strict";var t=u("3j3K");u.d(n,"a",function(){return e});var e=function(){function l(l){this.renderer=l,this.anchors=[],this.throttle=!1}return Object.defineProperty(l.prototype,"links",{set:function(l){var n=this;this.anchors=l.map(function(l){return"#"+l.fragment}),this.sub=l.changes.subscribe(function(){n.anchors=l.map(function(l){return"#"+l.fragment})})},enumerable:!0,configurable:!0}),l.prototype.handleEvent=function(){var l=this;this.scrollPosition=this.scrollable.scrollTop,this.throttle||window.requestAnimationFrame(function(){var n=l.findCurrentAnchor()||0;l.linkElements.forEach(function(u,t){l.renderer.setElementClass(u.nativeElement,"active",t===n)}),l.throttle=!1}),this.throttle=!0},l.prototype.findCurrentAnchor=function(){for(var l=this.anchors.length-1;l>=0;l--){var n=this.anchors[l];if(this.scrollable.querySelector(n)&&this.scrollable.querySelector(n).offsetTop<=this.scrollPosition)return l}},l.prototype.ngOnInit=function(){this.scrollable.addEventListener("scroll",this)},l.prototype.ngOnDestroy=function(){this.scrollable.removeEventListener("scroll",this),this.sub&&this.sub.unsubscribe()},l.ctorParameters=function(){return[{type:t.K}]},l}()},"B+b5":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),e=u("NtMF"),i=u("2Je8"),r=u("NVOs"),a=u("kX0r"),o=u("9PuP"),s=u("5oXY"),c=u("N/CD"),_=u("nQIc");u.d(n,"GetStartedModuleNgFactory",function(){return h});var p=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}(),d=function(l){function n(n){return l.call(this,n,[c.a],[])||this}return p(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new i.a(this.parent.get(t.c))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new r.a),this.__ɵi_8},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ɵba_1=new r.b,this._FormsModule_2=new r.c,this._ClarityModule_3=new a.a,this._UtilsModule_4=new o.a,this._RouterModule_5=new s.q(this.parent.get(s.r,null),this.parent.get(s.j,null)),this._GetStartedModule_6=new e.a,this._ROUTES_9=[[{path:"",component:_.a,data:{bodyClass:"layout-get-started",browserTitle:"Get Started"}}]],this._GetStartedModule_6},n.prototype.getInternal=function(l,n){return l===i.b?this._CommonModule_0:l===r.b?this._ɵba_1:l===r.c?this._FormsModule_2:l===a.a?this._ClarityModule_3:l===o.a?this._UtilsModule_4:l===s.q?this._RouterModule_5:l===e.a?this._GetStartedModule_6:l===i.g?this._NgLocalization_7:l===r.a?this._ɵi_8:l===s.u?this._ROUTES_9:n},n.prototype.destroyInternal=function(){},n}(t.B),h=new t.C(d,e.a)},"J/K6":function(l,n,u){"use strict";var t=u("5oXY");u.d(n,"a",function(){return e});var e=function(){function l(l){var n=this;this.route=l,this.sub=this.route.fragment.subscribe(function(l){n.scrollToAnchor(l,!1)})}return l.prototype.ngOnInit=function(){this.scrollToAnchor(this.route.snapshot.fragment,!1)},l.prototype.scrollToAnchor=function(l,n){if(void 0===n&&(n=!0),l){var u=document.querySelector("#"+l);u&&u.scrollIntoView({behavior:n?"smooth":"instant",block:"start"})}},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l.ctorParameters=function(){return[{type:t.v}]},l}()},"N/CD":function(l,n,u){"use strict";function t(l){return i._21(0,[(l()(),i._22(0,[["scrollable",1]],null,321,"main",[["class","content-area"],["hash-listener",""],["id","content-area"]],[[4,"position",null]],null,null,null,null)),i._26(106496,null,0,r.a,[a.v],null,null),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h1",[["id","introduction"]],null,null,null,null,null)),(l()(),i._23(null,["Clarity Design System"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and\n        Angular components. Clarity is for both designers and developers.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["Clarity’s designs stem from continuous exploration and research. These designs are built into our HTML/CSS\n        components, which can be used any web UI, regardless of the underlying JavaScript framework. Clarity also offers\n        a set of well-designed and implemented\n        data-bound components built on top of Angular, one of the most popular JavaScript frameworks in the\n        industry.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h2",[["id","howToUse"]],null,null,null,null,null)),(l()(),i._23(null,["How to Use Clarity"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["We offer three approaches for utilizing Clarity: UX, UX and UI, and Angular."])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h3",[["id","sketchTemplate"]],null,null,null,null,null)),(l()(),i._23(null,["Using the Clarity Sketch UI Template"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),i._23(null,["Jumpstart your project with the "])),(l()(),i._22(0,null,null,1,"a",[["href","assets/images/sketchTemplates/Clarity-Template-0.9.0.sketch"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["Clarity Sketch UI template"])),(l()(),i._23(null,[", a library of components\n        versioned alongside other products in Clarity’s ecosystem. To use with the template,\n        install the "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/chrismsimpson/Metropolis"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["open-source Metropolis\n            font"])),(l()(),i._23(null,[" by Chris M. Simpson. Clarity uses these font weights: light, regular, semibold, and medium.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h3",[["id","seedProjectClarity"]],null,null,null,null,null)),(l()(),i._23(null,["Starting With a Clarity Seed Project (Recommended)"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["For a new project, the best approach is to clone the Clarity seed project and modify it to fit your needs. The\n        seed project is integrated with clarity-ui and clarity-angular, so you don’t need to install Clarity\n        separately.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,0,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,19,"ol",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Clone the seed app:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install the dependencies:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Run the seed app:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h3",[["id","seedProjectAngular"]],null,null,null,null,null)),(l()(),i._23(null,["Using an Angular Seed Project"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["You can build an Angular app, then install Clarity onto your project."])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h4",[["id","step-1-build-an-angular-2-app"]],null,null,null,null,null)),(l()(),i._23(null,["Step 1: Build an Angular App"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,0,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,31,"ol",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Look at the Angular documentation, starting with "])),(l()(),i._22(0,null,null,1,"a",[["href","https://angular.io/docs/ts/latest/quickstart.html"]],null,null,null,null,null)),(l()(),i._23(null,["the 5 Min Quickstart"])),(l()(),i._23(null,[".\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,22,"li",[],null,null,null,null,null)),(l()(),i._23(null,["\n            Save and modify the example structure and build, or use one of the Angular seeds:\n            "])),(l()(),i._22(0,null,null,19,"ul",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/angular/angular-cli"]],null,null,null,null,null)),(l()(),i._23(null,["https://github.com/angular/angular-cli"])),(l()(),i._23(null,[" (in\n                    Beta)\n                "])),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/mgechev/angular2-seed"]],null,null,null,null,null)),(l()(),i._23(null,["https://github.com/mgechev/angular2-seed"])),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/angular/angular2-seed"]],null,null,null,null,null)),(l()(),i._23(null,["https://github.com/angular/angular2-seed"])),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/AngularClass/angular2-webpack-starter"]],null,null,null,null,null)),(l()(),i._23(null,["https://github.com/AngularClass/angular2-webpack-starter"])),(l()(),i._23(null,["\n                "])),(l()(),i._23(null,["\n            "])),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h4",[["id","installing"]],null,null,null,null,null)),(l()(),i._23(null,["Step 2: Install Clarity"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["Clarity is published as three separate packages on NPM:"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,0,"a",[["id","clarity_icons"]],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,16,"ul",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._23(null,["clarity-icons."])),(l()(),i._23(null,[" Contains the custom element icons."])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._23(null,["clarity-ui."])),(l()(),i._23(null,[" Contains the static styles for building HTML components."])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._23(null,["clarity-angular."])),(l()(),i._23(null,[" Contains the Angular components. This package depends on clarity-ui for styles.\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h5",[["id","step-2a-install-clarity-icons"]],null,null,null,null,null)),(l()(),i._23(null,["Step 2a: Install Clarity Icons"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,0,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,55,"ol",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install the Clarity Icons package through npm:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install the polyfill for Custom Elements:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["(Optional) If your application supports IE10, the polyfill requires the MutationObserver shim to work. If\n            your application does not support IE10, you can skip the following installation:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,13,"li",[],null,null,null,null,null)),(l()(),i._23(null,["\n            Include clarity-icons.min.css and clarity-icons.min.js in your HTML. Because custom-elements.min.js is\n            dependent on the Custom Elements polyfill, you must include it before clarity-icons.min.js. If your app\n            supports IE10, include mutationobserver.min.js\n            before the polyfill:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"]},null),(l()(),i._23(null,["\n            If your site is built with "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/angular/angular-cli"]],null,null,null,null,null)),(l()(),i._23(null,["angular-cli"])),(l()(),i._23(null,[" you can achieve\n            the above by adding the files to the styles array and scripts array in "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["angular-cli.json"])),(l()(),i._23(null,[":\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,19,"li",[],null,null,null,null,null)),(l()(),i._23(null,["\n            (Optional) If you load Clarity Icons by importing it in Typescript, you can load the shape sets modularly:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),i._23(null,["\n            Unlike loading "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["clarity-icons.min.js"])),(l()(),i._23(null,[" in a "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["script"])),(l()(),i._23(null,["\n            tag, the pattern above won't load all shape sets, but only Core Shapes. Thus, you can load additional sets\n            on demand when you need shapes from those sets. For example, if I need to use\n            "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["play"])),(l()(),i._23(null,[" icon, which happens to be in the set of Essential Shapes, I would want to\n            import "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["essential-shapes"])),(l()(),i._23(null,[" as well:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h5",[["id","step-2b-install-clarity-ui"]],null,null,null,null,null)),(l()(),i._23(null,["Step 2b: Install Clarity UI"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,0,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,25,"ol",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install Clarity UI package through npm:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,13,"li",[],null,null,null,null,null)),(l()(),i._23(null,["\n            Include clarity-ui.min.css in your HTML file:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"]},null),(l()(),i._23(null,["\n            If your site is built with "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/angular/angular-cli"]],null,null,null,null,null)),(l()(),i._23(null,["angular-cli"])),(l()(),i._23(null,[" you can achieve\n            the above by adding the file to the styles array in "])),(l()(),i._22(0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),i._23(null,["angular-cli.json"])),(l()(),i._23(null,[":\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Write your HTML with the Clarity CSS class names and markup."])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h5",[["id","step-2c-install-clarity-angular"]],null,null,null,null,null)),(l()(),i._23(null,["Step 2c: Install Clarity Angular"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,0,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,16,"ol",[["class","list"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i._23(null,["If you haven't already, complete steps 1 and 2 for installing Clarity UI in the preceding section.\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install the clarity-angular package through npm:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Install the clarity-angular package through npm:\n            "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h4",[["id","step-3-run-your-app"]],null,null,null,null,null)),(l()(),i._23(null,["Step 3: Run Your App"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"clr-code-snippet",[],null,null,null,o.a,o.b)),i._26(2121728,null,0,s.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h2",[["id","browserSupport"]],null,null,null,null,null)),(l()(),i._23(null,["Device and Browser Support"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,null,null,0,"img",[["alt","Device and Browser Support"],["class","hidden-sm-down"],["src","assets/images/get-started/device_support.png"]],null,null,null,null,null)),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,10,"ul",[["class","hidden-md-up"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Internet Explorer 10 & 11"])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i._23(null,["MS Edge"])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i._23(null,["Latest versions of Chrome, Safari, and Firefox"])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,1,"em",[],null,null,null,null,null)),(l()(),i._23(null,["* - Note that Clarity only supports the latest two versions of the listed browsers, with the exception of\n            Internet Explorer."])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h2",[["id","contribute_guidelines"]],null,null,null,null,null)),(l()(),i._23(null,["Contributing to Clarity"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._23(null,["The Clarity team welcomes contributions from the community. See our "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/vmware/clarity//blob/master/CONTRIBUTING.md"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["contribution\n        guidelines"])),(l()(),i._23(null,[" on GitHub.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h2",[["id","reportingBugs"]],null,null,null,null,null)),(l()(),i._23(null,["Reporting an Issue"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._23(null,["Ongoing work and feature requests are tracked using "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/vmware/clarity/issues"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["GitHub Issues"])),(l()(),i._23(null,[". Please feel free to\n        file an issue.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._23(null,["When submitting issues please provide a minimal app that demonstrates the issue by forking one of Clarity\n        Plunkr's:\n    "])),(l()(),i._22(0,null,null,9,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://plnkr.co/edit/uNwwZe"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["Latest Clarity [v0.9.x] Template"])),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._22(0,null,null,1,"a",[["href","https://plnkr.co/edit/8TwwdL"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["Legacy Clarity [v0.8.15] Template"])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"h2",[["id","attributions"]],null,null,null,null,null)),(l()(),i._23(null,["Attributions"])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._23(null,["See the "])),(l()(),i._22(0,null,null,1,"a",[["href","https://github.com/vmware/clarity/blob/master/ATTRIBUTION.md"],["target","_blank"]],null,null,null,null,null)),(l()(),i._23(null,["legal\n        attributions"])),(l()(),i._23(null,[" for third party software included in Clarity.\n    "])),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,1,"div",[["style","visibility: hidden; height: 80vh;"]],null,null,null,null,null)),(l()(),i._23(null,["This is a spacer to force sidenav highlighting on scroll"])),(l()(),i._23(null,["\n"])),(l()(),i._23(null,["\n"])),(l()(),i._22(0,null,null,59,"nav",[["class","sidenav"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,324).onMouseClick(u.target)!==!1&&t}return t},null,null)),i._26(598016,null,0,c.a,[_.a,i.L],{_level:[0,"_level"]},null),(l()(),i._23(null,["\n    "])),(l()(),i._22(0,null,null,55,"section",[["class","sidenav-content"]],null,null,null,null,null)),(l()(),i._23(null,["\n        "])),(l()(),i._22(0,null,null,52,"section",[["class","nav-group"]],null,null,null,null,null)),i._26(106496,null,2,p.a,[i.K],{scrollable:[0,"scrollable"]},null),i._28(301989888,1,{links:1}),i._28(301989888,2,{linkElements:1}),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link active"],["fragment","introduction"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,335).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Clarity Design System"])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","howToUse"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,340).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["How to Use\n                Clarity"])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,16,"ul",[["class","nav-list"]],null,null,null,null,null)),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","sketchTemplate"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,347).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Using the Sketch Template"])),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","seedProjectClarity"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,352).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Using a Clarity Seed"])),(l()(),i._23(null,["\n                "])),(l()(),i._22(0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","seedProjectAngular"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,357).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Using an Angular Seed"])),(l()(),i._23(null,["\n            "])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","browserSupport"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,363).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Device & Browser\n                Support"])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","contribute_guidelines"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,368).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Contributing to\n                Clarity"])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","reportingBugs"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,373).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Reporting an Issue"])),(l()(),i._23(null,["\n            "])),(l()(),i._22(0,null,null,3,"label",[["class","bump-down"]],null,null,null,null,null)),(l()(),i._22(0,[[2,0]],null,2,"a",[["class","nav-link"],["fragment","attributions"],["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=i._27(l,378).onClick(u.button,u.ctrlKey,u.metaKey)!==!1&&t}return t},null,null)),i._26(335872,[[1,4]],0,a.z,[a.j,a.v,d.f],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),i._23(null,["Attributions"])),(l()(),i._23(null,["\n        "])),(l()(),i._23(null,["\n    "])),(l()(),i._23(null,["\n"]))],function(l,n){var u=n.component;l(n,1,0),l(n,43,0,"git clone https://github.com/vmware/clarity-seed.git",!0),l(n,49,0,"npm install",!0),l(n,55,0,"npm start",!0),l(n,142,0,"npm install clarity-icons --save",!0),l(n,148,0,"npm install @webcomponents/custom-elements@1.0.0-alpha.3 --save",!0),l(n,154,0,"npm install mutationobserver-shim@0.3.2 --save",!0),l(n,160,0,u.iconsImportsExample),l(n,169,0,u.iconsNodeImports,!0),l(n,175,0,"import 'clarity-icons';","typescript"),l(n,190,0,u.iconsTSImports,"typescript"),l(n,204,0,"npm install clarity-ui --save",!0),l(n,210,0,u.uiHTMLImport),l(n,219,0,u.uiNodeImports,!0),l(n,239,0,"npm install clarity-angular --save",!0),l(n,245,0,u.ngModuleExample,"typescript"),l(n,253,0,"npm start",!0),l(n,324,0,2),l(n,329,0,i._27(n,0)),l(n,335,0,"introduction","."),l(n,340,0,"howToUse","."),l(n,347,0,"sketchTemplate","."),l(n,352,0,"seedProjectClarity","."),l(n,357,0,"seedProjectAngular","."),l(n,363,0,"browserSupport","."),l(n,368,0,"contribute_guidelines","."),l(n,373,0,"reportingBugs","."),l(n,378,0,"attributions",".")},function(l,n){l(n,0,0,"relative"),l(n,334,0,i._27(n,335).target,i._27(n,335).href),l(n,339,0,i._27(n,340).target,i._27(n,340).href),l(n,346,0,i._27(n,347).target,i._27(n,347).href),l(n,351,0,i._27(n,352).target,i._27(n,352).href),l(n,356,0,i._27(n,357).target,i._27(n,357).href),l(n,362,0,i._27(n,363).target,i._27(n,363).href),l(n,367,0,i._27(n,368).target,i._27(n,368).href),l(n,372,0,i._27(n,373).target,i._27(n,373).href),l(n,377,0,i._27(n,378).target,i._27(n,378).href)})}function e(l){return i._21(0,[(l()(),i._22(0,null,null,1,"get-started",[["id","main-container"]],[[2,"content-container",null]],null,null,t,g)),i._26(24576,null,0,h.a,[],null,null)],null,function(l,n){l(n,0,0,!0)})}var i=u("3j3K"),r=u("J/K6"),a=u("5oXY"),o=u("6h35"),s=u("X6UX"),c=u("kZcC"),_=u("dHDq"),p=u("AaU6"),d=u("2Je8"),h=u("nQIc");u.d(n,"a",function(){return f});var m=[],g=i._20({encapsulation:2,styles:m,data:{}}),f=i._30("get-started",h.a,e,{},{},[])},NtMF:function(l,n,u){"use strict";var t=u("nQIc");u.d(n,"a",function(){return e});var e=(t.a,function(){function l(){}return l}())},X6UX:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.language="html",this.disablePrism=!1}return l.prototype.ngAfterViewInit=function(){this.codeHighlight&&this.codeHighlight.redraw()},l}()},nQIc:function(l,n,u){"use strict";u.d(n,"a",function(){return s});var t='\nimport { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\nimport { ClarityModule } from "clarity-angular";\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n    imports: [\n        BrowserModule,\n        ClarityModule.forRoot(),\n        ...\n     ],\n     declarations: [ AppComponent ],\n     bootstrap: [ AppComponent ]\n})\nexport class AppModule {    }\n',e='\n<link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">\n<script src="path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js"></script>\n<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>\n<script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>\n',i='\n"styles": [\n      ...\n      "../node_modules/clarity-icons/clarity-icons.min.css",\n      ...\n],\n"scripts": [\n  ...\n  "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",\n  "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",\n  "../node_modules/clarity-icons/clarity-icons.min.js"\n  ...\n]\n',r="\nimport 'clarity-icons';\nimport 'clarity-icons/shapes/essential-shapes';\n",a='\n<link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css">\n',o='\n"styles": [\n      ...\n      "../node_modules/clarity-ui/clarity-ui.min.css",\n      ...\n  ]\n',s=function(){function l(){this.ngModuleExample=t,this.iconsImportsExample=e,this.iconsNodeImports=i,this.iconsTSImports=r,this.uiHTMLImport=a,this.uiNodeImports=o}return l.ctorParameters=function(){return[]},l}()}});