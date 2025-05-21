import {
  __commonJS
} from "./chunk-L6OFPWCY.js";

// node_modules/.pnpm/artplayer@5.2.3/node_modules/artplayer/dist/artplayer.js
var require_artplayer = __commonJS({
  "node_modules/.pnpm/artplayer@5.2.3/node_modules/artplayer/dist/artplayer.js"(exports, module) {
    !function(e, t, r, a, o, i, n, s) {
      var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, c = "function" == typeof l[a] && l[a], p = c.i || {}, u = c.cache || {}, d = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
      function f(t2, r2) {
        if (!u[t2]) {
          if (!e[t2]) {
            if (o[t2]) return o[t2];
            var i2 = "function" == typeof l[a] && l[a];
            if (!r2 && i2) return i2(t2, true);
            if (c) return c(t2, true);
            if (d && "string" == typeof t2) return d(t2);
            var n2 = Error("Cannot find module '" + t2 + "'");
            throw n2.code = "MODULE_NOT_FOUND", n2;
          }
          p2.resolve = function(r3) {
            var a2 = e[t2][1][r3];
            return null != a2 ? a2 : r3;
          }, p2.cache = {};
          var s2 = u[t2] = new f.Module(t2);
          e[t2][0].call(s2.exports, p2, s2, s2.exports, l);
        }
        return u[t2].exports;
        function p2(e2) {
          var t3 = p2.resolve(e2);
          return false === t3 ? {} : f(t3);
        }
      }
      f.isParcelRequire = true, f.Module = function(e2) {
        this.id = e2, this.bundle = f, this.require = d, this.exports = {};
      }, f.modules = e, f.cache = u, f.parent = c, f.distDir = void 0, f.publicUrl = void 0, f.devServer = void 0, f.i = p, f.register = function(t2, r2) {
        e[t2] = [function(e2, t3) {
          t3.exports = r2;
        }, {}];
      }, Object.defineProperty(f, "root", { get: function() {
        return l[a];
      } }), l[a] = f;
      for (var h = 0; h < t.length; h++) f(t[h]);
      if (r) {
        var m = f(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = m : "function" == typeof define && define.amd && define(function() {
          return m;
        });
      }
    }({ "5lTcX": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("bundle-text:./style/index.less"), n = o.interopDefault(i), s = e("option-validator"), l = o.interopDefault(s), c = e("./utils/emitter"), p = o.interopDefault(c), u = e("./utils"), d = e("./scheme"), f = o.interopDefault(d), h = e("./config"), m = o.interopDefault(h), g = e("./template"), v = o.interopDefault(g), y = e("./i18n"), b = o.interopDefault(y), x = e("./player"), w = o.interopDefault(x), j = e("./control"), k = o.interopDefault(j), C = e("./contextmenu"), S = o.interopDefault(C), I = e("./info"), T = o.interopDefault(I), $ = e("./subtitle"), E = o.interopDefault($), M = e("./events"), F = o.interopDefault(M), D = e("./hotkey"), H = o.interopDefault(D), A = e("./layer"), z = o.interopDefault(A), R = e("./loading"), O = o.interopDefault(R), Y = e("./notice"), L = o.interopDefault(Y), P = e("./mask"), V = o.interopDefault(P), q = e("./icons"), _ = o.interopDefault(q), N = e("./setting"), B = o.interopDefault(N), W = e("./storage"), U = o.interopDefault(W), K = e("./plugins"), X = o.interopDefault(K);
      let G = 0, Q = [];
      class Z extends p.default {
        constructor(e2, t2) {
          super(), this.id = ++G;
          let r2 = u.mergeDeep(Z.option, e2);
          if (r2.container = e2.container, this.option = (0, l.default)(r2, f.default), this.isLock = false, this.isReady = false, this.isFocus = false, this.isInput = false, this.isRotate = false, this.isDestroy = false, this.template = new (0, v.default)(this), this.events = new (0, F.default)(this), this.storage = new (0, U.default)(this), this.icons = new (0, _.default)(this), this.i18n = new (0, b.default)(this), this.notice = new (0, L.default)(this), this.player = new (0, w.default)(this), this.layers = new (0, z.default)(this), this.controls = new (0, k.default)(this), this.contextmenu = new (0, S.default)(this), this.subtitle = new (0, E.default)(this), this.info = new (0, T.default)(this), this.loading = new (0, O.default)(this), this.hotkey = new (0, H.default)(this), this.mask = new (0, V.default)(this), this.setting = new (0, B.default)(this), this.plugins = new (0, X.default)(this), "function" == typeof t2 && this.on("ready", () => t2.call(this, this)), Z.DEBUG) {
            let e3 = (e4) => console.log(`[ART.${this.id}] -> ${e4}`);
            e3("Version@" + Z.version), e3("Env@" + Z.env), e3("Build@" + Z.build);
            for (let t3 = 0; t3 < m.default.events.length; t3++) this.on("video:" + m.default.events[t3], (t4) => e3("Event@" + t4.type));
          }
          Q.push(this);
        }
        static get instances() {
          return Q;
        }
        static get version() {
          return "5.2.3";
        }
        static get env() {
          return "production";
        }
        static get build() {
          return "2025-04-20 10:10:54";
        }
        static get config() {
          return m.default;
        }
        static get utils() {
          return u;
        }
        static get scheme() {
          return f.default;
        }
        static get Emitter() {
          return p.default;
        }
        static get validator() {
          return l.default;
        }
        static get kindOf() {
          return l.default.kindOf;
        }
        static get html() {
          return v.default.html;
        }
        static get option() {
          return { id: "", container: "#artplayer", url: "", poster: "", type: "", theme: "#f00", volume: 0.7, isLive: false, muted: false, autoplay: false, autoSize: false, autoMini: false, loop: false, flip: false, playbackRate: false, aspectRatio: false, screenshot: false, setting: false, hotkey: true, pip: false, mutex: true, backdrop: true, fullscreen: false, fullscreenWeb: false, subtitleOffset: false, miniProgressBar: false, useSSR: false, playsInline: true, lock: false, gesture: true, fastForward: false, autoPlayback: false, autoOrientation: false, airplay: false, proxy: void 0, layers: [], contextmenu: [], controls: [], settings: [], quality: [], highlight: [], plugins: [], thumbnails: { url: "", number: 60, column: 10, width: 0, height: 0, scale: 1 }, subtitle: { url: "", type: "", style: {}, name: "", escape: true, encoding: "utf-8", onVttLoad: (e2) => e2 }, moreVideoAttr: { controls: false, preload: u.isSafari ? "auto" : "metadata" }, i18n: {}, icons: {}, cssVar: {}, customType: {}, lang: navigator == null ? void 0 : navigator.language.toLowerCase() };
        }
        get proxy() {
          return this.events.proxy;
        }
        get query() {
          return this.template.query;
        }
        get video() {
          return this.template.$video;
        }
        destroy(e2 = true) {
          this.events.destroy(), this.template.destroy(e2), Q.splice(Q.indexOf(this), 1), this.isDestroy = true, this.emit("destroy");
        }
      }
      r.default = Z, Z.STYLE = n.default, Z.DEBUG = false, Z.CONTEXTMENU = true, Z.NOTICE_TIME = 2e3, Z.SETTING_WIDTH = 250, Z.SETTING_ITEM_WIDTH = 200, Z.SETTING_ITEM_HEIGHT = 35, Z.RESIZE_TIME = 200, Z.SCROLL_TIME = 200, Z.SCROLL_GAP = 50, Z.AUTO_PLAYBACK_MAX = 10, Z.AUTO_PLAYBACK_MIN = 5, Z.AUTO_PLAYBACK_TIMEOUT = 3e3, Z.RECONNECT_TIME_MAX = 5, Z.RECONNECT_SLEEP_TIME = 1e3, Z.CONTROL_HIDE_TIME = 3e3, Z.DBCLICK_TIME = 300, Z.DBCLICK_FULLSCREEN = true, Z.MOBILE_DBCLICK_PLAY = true, Z.MOBILE_CLICK_PLAY = false, Z.AUTO_ORIENTATION_TIME = 200, Z.INFO_LOOP_TIME = 1e3, Z.FAST_FORWARD_VALUE = 3, Z.FAST_FORWARD_TIME = 1e3, Z.TOUCH_MOVE_RATIO = 0.5, Z.VOLUME_STEP = 0.1, Z.SEEK_STEP = 5, Z.PLAYBACK_RATE = [0.5, 0.75, 1, 1.25, 1.5, 2], Z.ASPECT_RATIO = ["default", "4:3", "16:9"], Z.FLIP = ["normal", "horizontal", "vertical"], Z.FULLSCREEN_WEB_IN_BODY = false, Z.LOG_VERSION = true, Z.USE_RAF = false, u.isBrowser && (window.Artplayer = Z, u.setStyleText("artplayer-style", n.default), setTimeout(() => {
        Z.LOG_VERSION && console.log(`%c ArtPlayer %c ${Z.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "");
      }, 100));
    }, { "bundle-text:./style/index.less": "0016T", "option-validator": "bAWi2", "./utils/emitter": "66mFZ", "./utils": "71aH7", "./scheme": "AKEiO", "./config": "lyjeQ", "./template": "X13Zf", "./i18n": "3jKkj", "./player": "a90nx", "./control": "8Z0Uf", "./contextmenu": "2KYsr", "./info": "02ajl", "./subtitle": "eSWto", "./events": "jo4S1", "./hotkey": "6NoFy", "./layer": "6G6hZ", "./loading": "3dsEe", "./notice": "dWGTw", "./mask": "5POkG", "./icons": "6OeNg", "./setting": "3eYNH", "./storage": "2aaJe", "./plugins": "8MTUM", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "0016T": [function(e, t, r, a) {
      t.exports = '.art-video-player{--art-theme:red;--art-font-color:#fff;--art-background-color:#000;--art-text-shadow-color:#00000080;--art-transition-duration:.2s;--art-padding:10px;--art-border-radius:3px;--art-progress-height:6px;--art-progress-color:#ffffff40;--art-hover-color:#ffffff40;--art-loaded-color:#ffffff40;--art-state-size:80px;--art-state-opacity:.8;--art-bottom-height:100px;--art-bottom-offset:20px;--art-bottom-gap:5px;--art-highlight-width:8px;--art-highlight-color:#ffffff80;--art-control-height:46px;--art-control-opacity:.75;--art-control-icon-size:36px;--art-control-icon-scale:1.1;--art-volume-height:120px;--art-volume-handle-size:14px;--art-lock-size:36px;--art-indicator-scale:0;--art-indicator-size:16px;--art-fullscreen-web-index:9999;--art-settings-icon-size:24px;--art-settings-max-height:300px;--art-selector-max-height:300px;--art-contextmenus-min-width:250px;--art-subtitle-font-size:20px;--art-subtitle-gap:5px;--art-subtitle-bottom:15px;--art-subtitle-border:#000;--art-widget-background:#000000d9;--art-tip-background:#000000b3;--art-scrollbar-size:4px;--art-scrollbar-background:#ffffff40;--art-scrollbar-background-hover:#ffffff80;--art-mini-progress-height:2px}.art-bg-cover{background-position:50%;background-repeat:no-repeat;background-size:cover}.art-bottom-gradient{background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x}.art-backdrop-filter{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.art-video-player{zoom:1;text-align:left;user-select:none;box-sizing:border-box;width:100%;height:100%;color:var(--art-font-color);background-color:var(--art-background-color);text-shadow:0 0 2px var(--art-text-shadow-color);-webkit-tap-highlight-color:#0000;-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none;direction:ltr;outline:0;margin:0 auto;padding:0;font-family:PingFang SC,Helvetica Neue,Microsoft YaHei,Roboto,Arial,sans-serif;font-size:14px;line-height:1.3;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:var(--art-scrollbar-size);height:var(--art-scrollbar-size)}.art-video-player ::-webkit-scrollbar-thumb{background-color:var(--art-scrollbar-background)}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:var(--art-scrollbar-background-hover)}.art-video-player img{vertical-align:top;max-width:100%}.art-video-player svg{fill:var(--art-font-color)}.art-video-player a{color:var(--art-font-color);text-decoration:none}.art-icon{justify-content:center;align-items:center;line-height:1;display:flex}.art-video-player.art-backdrop .art-contextmenus,.art-video-player.art-backdrop .art-info,.art-video-player.art-backdrop .art-settings,.art-video-player.art-backdrop .art-layer-auto-playback,.art-video-player.art-backdrop .art-selector-list,.art-video-player.art-backdrop .art-volume-inner{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-video{z-index:10;cursor:pointer;width:100%;height:100%;position:absolute;inset:0}.art-poster{z-index:11;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;text-align:center;pointer-events:none;justify-content:center;align-items:center;gap:var(--art-subtitle-gap);width:100%;bottom:var(--art-subtitle-bottom);font-size:var(--art-subtitle-font-size);transition:bottom var(--art-transition-duration)ease;text-shadow:var(--art-subtitle-border)1px 0 1px,var(--art-subtitle-border)0 1px 1px,var(--art-subtitle-border)-1px 0 1px,var(--art-subtitle-border)0 -1px 1px,var(--art-subtitle-border)1px 1px 1px,var(--art-subtitle-border)-1px -1px 1px,var(--art-subtitle-border)1px -1px 1px,var(--art-subtitle-border)-1px 1px 1px;flex-direction:column;padding:0 5%;display:none;position:absolute}.art-video-player.art-subtitle-show .art-subtitle{display:flex}.art-video-player.art-control-show .art-subtitle{bottom:calc(var(--art-control-height) + var(--art-subtitle-bottom))}.art-danmuku{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;pointer-events:none;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:flex}.art-video-player .art-mask{z-index:50;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}.art-video-player .art-mask .art-state{opacity:0;width:var(--art-state-size);height:var(--art-state-size);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;display:flex;transform:scale(2)}.art-video-player.art-mask-show .art-state{cursor:pointer;pointer-events:auto;opacity:var(--art-state-opacity);transform:scale(1)}.art-video-player.art-loading-show .art-state{display:none}.art-video-player .art-loading{z-index:70;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;opacity:0;pointer-events:none;width:100%;height:100%;padding:0 var(--art-padding);transition:all var(--art-transition-duration)ease;background-size:100% var(--art-bottom-height);background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:flex-end;display:flex;position:absolute;inset:0;overflow:hidden}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-progress{transform:translateY(var(--art-bottom-offset));transition:transform var(--art-transition-duration)ease}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1}.art-video-player.art-control-show .art-bottom .art-controls,.art-video-player.art-hover .art-bottom .art-controls,.art-video-player.art-control-show .art-bottom .art-progress,.art-video-player.art-hover .art-bottom .art-progress{transform:translateY(0)}.art-bottom .art-progress{z-index:0;pointer-events:auto;padding-bottom:var(--art-bottom-gap);position:relative}.art-bottom .art-progress .art-control-progress{cursor:pointer;height:var(--art-progress-height);justify-content:center;align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner{width:100%;height:50%;transition:height var(--art-transition-duration)ease;background-color:var(--art-progress-color);align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover{z-index:0;background-color:var(--art-hover-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;background-color:var(--art-loaded-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;background-color:var(--art-theme);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{z-index:0;pointer-events:auto;width:100%;height:100%;transform:translateX(calc(var(--art-highlight-width)/-2));background-color:var(--art-highlight-color);position:absolute;inset:0 auto 0 0;width:var(--art-highlight-width)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{z-index:40;width:var(--art-indicator-size);height:var(--art-indicator-size);transform:scale(var(--art-indicator-scale));margin-left:calc(var(--art-indicator-size)/-2);transition:transform var(--art-transition-duration)ease;border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;left:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{pointer-events:none;width:100%;height:100%}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active{transform:scale(1)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;border-radius:var(--art-border-radius);white-space:nowrap;background-color:var(--art-tip-background);padding:3px 5px;font-size:12px;line-height:1;display:none;position:absolute;top:-25px;left:0}.art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-bottom .art-progress .art-control-thumbnails{bottom:calc(var(--art-bottom-gap) + 10px);border-radius:var(--art-border-radius);pointer-events:none;background-color:var(--art-widget-background);display:none;position:absolute;left:0;box-shadow:0 1px 3px #0003,0 1px 2px -1px #0003}.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1)}.art-controls{z-index:10;pointer-events:auto;height:var(--art-control-height);justify-content:space-between;align-items:center;display:flex;position:relative}.art-controls .art-controls-left,.art-controls .art-controls-right{height:100%;display:flex}.art-controls .art-controls-center{flex:1;justify-content:center;align-items:center;height:100%;padding:0 10px;display:none}.art-controls .art-controls-right{justify-content:flex-end}.art-controls .art-control{cursor:pointer;white-space:nowrap;opacity:var(--art-control-opacity);min-height:var(--art-control-height);min-width:var(--art-control-height);transition:opacity var(--art-transition-duration)ease;flex-shrink:0;justify-content:center;align-items:center;display:flex}.art-controls .art-control .art-icon{height:var(--art-control-icon-size);width:var(--art-control-icon-size);transform:scale(var(--art-control-icon-scale));transition:transform var(--art-transition-duration)ease}.art-controls .art-control .art-icon:active{transform:scale(calc(var(--art-control-icon-scale)*.8))}.art-controls .art-control:hover{opacity:1}.art-control-volume{position:relative}.art-control-volume .art-volume-panel{text-align:center;cursor:default;opacity:0;pointer-events:none;left:0;right:0;bottom:var(--art-control-height);width:var(--art-control-height);height:var(--art-volume-height);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;padding:0 5px;font-size:12px;display:flex;position:absolute;transform:translateY(10px)}.art-control-volume .art-volume-panel .art-volume-inner{border-radius:var(--art-border-radius);background-color:var(--art-widget-background);flex-direction:column;align-items:center;gap:10px;width:100%;height:100%;padding:10px 0 12px;display:flex}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider{cursor:pointer;flex:1;justify-content:center;width:100%;display:flex;position:relative}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle{border-radius:var(--art-border-radius);background-color:#ffffff40;justify-content:center;width:2px;display:flex;position:relative;overflow:hidden}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded{z-index:0;background-color:var(--art-theme);width:100%;height:100%;position:absolute;inset:0}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator{width:var(--art-volume-handle-size);height:var(--art-volume-handle-size);margin-top:calc(var(--art-volume-handle-size)/-2);background-color:var(--art-theme);transition:transform var(--art-transition-duration)ease;border-radius:100%;flex-shrink:0;position:absolute;transform:scale(1)}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator{transform:scale(.9)}.art-control-volume:hover .art-volume-panel{opacity:1;pointer-events:auto;transform:translateY(0)}.art-video-player .art-notice{z-index:80;width:100%;height:auto;padding:var(--art-padding);pointer-events:none;display:none;position:absolute;inset:0 0 auto}.art-video-player .art-notice .art-notice-inner{border-radius:var(--art-border-radius);background-color:var(--art-tip-background);padding:5px;line-height:1;display:inline-flex}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);min-width:var(--art-contextmenus-min-width);flex-direction:column;padding:5px 0;font-size:12px;display:none;position:absolute}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;border-bottom:1px solid #ffffff1a;padding:10px 15px;display:flex}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 8px}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--art-theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;border-radius:var(--art-border-radius);max-height:var(--art-settings-max-height);left:auto;right:var(--art-padding);bottom:var(--art-control-height);transition:all var(--art-transition-duration)ease;background-color:var(--art-widget-background);flex-direction:column;display:none;position:absolute;overflow:hidden auto}.art-video-player .art-settings .art-setting-panel{flex-direction:column;display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item{cursor:pointer;transition:background-color var(--art-transition-duration)ease;justify-content:space-between;align-items:center;padding:0 5px;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--art-theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{flex-shrink:0;justify-content:center;align-items:center;gap:5px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:var(--art-settings-icon-size);width:var(--art-settings-icon-size);justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{justify-content:center;align-items:center;gap:5px;font-size:12px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{justify-content:center;align-items:center;min-width:32px;height:24px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{appearance:none;background-color:#fff3;outline:none;width:80px;height:3px}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:flex}.art-video-player .art-info{left:var(--art-padding);top:var(--art-padding);z-index:100;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);padding:10px;font-size:12px;display:none;position:absolute}.art-video-player .art-info .art-info-panel{flex-direction:column;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item{align-items:center;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item .art-info-title{text-align:right;width:100px}.art-video-player .art-info .art-info-panel .art-info-item .art-info-content{text-overflow:ellipsis;white-space:nowrap;user-select:all;width:250px;overflow:hidden}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio]{overflow:hidden}.art-video-player[data-aspect-ratio] .art-video{object-fit:fill;box-sizing:content-box}.art-fullscreen{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3}.art-fullscreen-web{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3;z-index:var(--art-fullscreen-web-index);width:100%;height:100%;position:fixed;inset:0}.art-mini-popup{z-index:9999;border-radius:var(--art-border-radius);cursor:move;user-select:none;background:#000;width:320px;height:180px;transition:opacity .2s;position:fixed;overflow:hidden;box-shadow:0 0 5px #00000080}.art-mini-popup svg{fill:#fff}.art-mini-popup .art-video{pointer-events:none}.art-mini-popup .art-mini-close{z-index:20;cursor:pointer;opacity:0;transition:opacity .2s;position:absolute;top:10px;right:10px}.art-mini-popup .art-mini-state{z-index:30;pointer-events:none;opacity:0;background-color:#00000040;justify-content:center;align-items:center;width:100%;height:100%;transition:opacity .2s;display:flex;position:absolute;inset:0}.art-mini-popup .art-mini-state .art-icon{opacity:.75;cursor:pointer;pointer-events:auto;transition:transform .2s;transform:scale(3)}.art-mini-popup .art-mini-state .art-icon:active{transform:scale(2.5)}.art-mini-popup.art-mini-droging{opacity:.9}.art-mini-popup:hover .art-mini-close,.art-mini-popup:hover .art-mini-state{opacity:1}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-lock{height:var(--art-lock-size);width:var(--art-lock-size);top:50%;left:var(--art-padding);background-color:var(--art-tip-background);border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;transform:translateY(-50%)}.art-video-player .art-layer-auto-playback{border-radius:var(--art-border-radius);left:var(--art-padding);bottom:calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);background-color:var(--art-widget-background);align-items:center;gap:10px;padding:10px;line-height:1;display:none;position:absolute}.art-video-player .art-layer-auto-playback .art-auto-playback-close{cursor:pointer;justify-content:center;align-items:center;display:flex}.art-video-player .art-layer-auto-playback .art-auto-playback-close svg{width:15px;height:15px;fill:var(--art-theme)}.art-video-player .art-layer-auto-playback .art-auto-playback-jump{color:var(--art-theme);cursor:pointer}.art-video-player.art-lock .art-subtitle{bottom:var(--art-subtitle-bottom)!important}.art-video-player.art-mini-progress-bar .art-bottom,.art-video-player.art-lock .art-bottom{opacity:1;background-image:none;padding:0}.art-video-player.art-mini-progress-bar .art-bottom .art-controls,.art-video-player.art-lock .art-bottom .art-controls,.art-video-player.art-mini-progress-bar .art-bottom .art-progress,.art-video-player.art-lock .art-bottom .art-progress{transform:translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height)/4))}.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,.art-video-player.art-lock .art-bottom .art-progress-indicator{display:none!important}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-control-selector{justify-content:center;display:flex;position:relative}.art-control-selector .art-selector-list{text-align:center;border-radius:var(--art-border-radius);opacity:0;pointer-events:none;bottom:var(--art-control-height);max-height:var(--art-selector-max-height);background-color:var(--art-widget-background);transition:all var(--art-transition-duration)ease;flex-direction:column;align-items:center;display:flex;position:absolute;overflow:hidden auto;transform:translateY(10px)}.art-control-selector .art-selector-list .art-selector-item{flex-shrink:0;justify-content:center;align-items:center;width:100%;padding:10px 15px;line-height:1;display:flex}.art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-control-selector .art-selector-list .art-selector-item:hover,.art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--art-theme)}.art-control-selector:hover .art-selector-list{opacity:1;pointer-events:auto;transform:translateY(0)}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}.art-video-player.art-mobile{--art-bottom-gap:10px;--art-control-height:38px;--art-control-icon-scale:1;--art-state-size:60px;--art-settings-max-height:180px;--art-selector-max-height:180px;--art-indicator-scale:1;--art-control-opacity:1}.art-video-player.art-mobile .art-controls-left{margin-left:calc(var(--art-padding)/-1)}.art-video-player.art-mobile .art-controls-right{margin-right:calc(var(--art-padding)/-1)}';
    }, {}], bAWi2: [function(e, t, r, a) {
      t.exports = function() {
        "use strict";
        function e2(t3) {
          return (e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(t3);
        }
        var t2 = Object.prototype.toString, r2 = function(r3) {
          if (void 0 === r3) return "undefined";
          if (null === r3) return "null";
          var o2 = e2(r3);
          if ("boolean" === o2) return "boolean";
          if ("string" === o2) return "string";
          if ("number" === o2) return "number";
          if ("symbol" === o2) return "symbol";
          if ("function" === o2) return "GeneratorFunction" === a2(r3) ? "generatorfunction" : "function";
          if (Array.isArray ? Array.isArray(r3) : r3 instanceof Array) return "array";
          if (r3.constructor && "function" == typeof r3.constructor.isBuffer && r3.constructor.isBuffer(r3)) return "buffer";
          if (function(e3) {
            try {
              if ("number" == typeof e3.length && "function" == typeof e3.callee) return true;
            } catch (e4) {
              if (-1 !== e4.message.indexOf("callee")) return true;
            }
            return false;
          }(r3)) return "arguments";
          if (r3 instanceof Date || "function" == typeof r3.toDateString && "function" == typeof r3.getDate && "function" == typeof r3.setDate) return "date";
          if (r3 instanceof Error || "string" == typeof r3.message && r3.constructor && "number" == typeof r3.constructor.stackTraceLimit) return "error";
          if (r3 instanceof RegExp || "string" == typeof r3.flags && "boolean" == typeof r3.ignoreCase && "boolean" == typeof r3.multiline && "boolean" == typeof r3.global) return "regexp";
          switch (a2(r3)) {
            case "Symbol":
              return "symbol";
            case "Promise":
              return "promise";
            case "WeakMap":
              return "weakmap";
            case "WeakSet":
              return "weakset";
            case "Map":
              return "map";
            case "Set":
              return "set";
            case "Int8Array":
              return "int8array";
            case "Uint8Array":
              return "uint8array";
            case "Uint8ClampedArray":
              return "uint8clampedarray";
            case "Int16Array":
              return "int16array";
            case "Uint16Array":
              return "uint16array";
            case "Int32Array":
              return "int32array";
            case "Uint32Array":
              return "uint32array";
            case "Float32Array":
              return "float32array";
            case "Float64Array":
              return "float64array";
          }
          if ("function" == typeof r3.throw && "function" == typeof r3.return && "function" == typeof r3.next) return "generator";
          switch (o2 = t2.call(r3)) {
            case "[object Object]":
              return "object";
            case "[object Map Iterator]":
              return "mapiterator";
            case "[object Set Iterator]":
              return "setiterator";
            case "[object String Iterator]":
              return "stringiterator";
            case "[object Array Iterator]":
              return "arrayiterator";
          }
          return o2.slice(8, -1).toLowerCase().replace(/\s/g, "");
        };
        function a2(e3) {
          return e3.constructor ? e3.constructor.name : null;
        }
        function o(e3, t3) {
          var a3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
          return i(e3, t3, a3), n(e3, t3, a3), function(e4, t4, a4) {
            var s = r2(t4), l = r2(e4);
            if ("object" === s) {
              if ("object" !== l) throw Error("[Type Error]: '".concat(a4.join("."), "' require 'object' type, but got '").concat(l, "'"));
              Object.keys(t4).forEach(function(r3) {
                var s2 = e4[r3], l2 = t4[r3], c = a4.slice();
                c.push(r3), i(s2, l2, c), n(s2, l2, c), o(s2, l2, c);
              });
            }
            if ("array" === s) {
              if ("array" !== l) throw Error("[Type Error]: '".concat(a4.join("."), "' require 'array' type, but got '").concat(l, "'"));
              e4.forEach(function(r3, s2) {
                var l2 = e4[s2], c = t4[s2] || t4[0], p = a4.slice();
                p.push(s2), i(l2, c, p), n(l2, c, p), o(l2, c, p);
              });
            }
          }(e3, t3, a3), e3;
        }
        function i(e3, t3, a3) {
          if ("string" === r2(t3)) {
            var o2 = r2(e3);
            if ("?" === t3[0] && (t3 = t3.slice(1) + "|undefined"), !(-1 < t3.indexOf("|") ? t3.split("|").map(function(e4) {
              return e4.toLowerCase().trim();
            }).filter(Boolean).some(function(e4) {
              return o2 === e4;
            }) : t3.toLowerCase().trim() === o2)) throw Error("[Type Error]: '".concat(a3.join("."), "' require '").concat(t3, "' type, but got '").concat(o2, "'"));
          }
        }
        function n(e3, t3, a3) {
          if ("function" === r2(t3)) {
            var o2 = t3(e3, r2(e3), a3);
            if (true !== o2) {
              var i2 = r2(o2);
              throw "string" === i2 ? Error(o2) : "error" === i2 ? o2 : Error("[Validator Error]: The scheme for '".concat(a3.join("."), "' validator require return true, but got '").concat(o2, "'"));
            }
          }
        }
        return o.kindOf = r2, o;
      }();
    }, {}], "66mFZ": [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
        on(e2, t2, r2) {
          let a2 = this.e || (this.e = {});
          return (a2[e2] || (a2[e2] = [])).push({ fn: t2, ctx: r2 }), this;
        }
        once(e2, t2, r2) {
          let a2 = this;
          function o(...i) {
            a2.off(e2, o), t2.apply(r2, i);
          }
          return o._ = t2, this.on(e2, o, r2);
        }
        emit(e2, ...t2) {
          let r2 = ((this.e || (this.e = {}))[e2] || []).slice();
          for (let e3 = 0; e3 < r2.length; e3 += 1) r2[e3].fn.apply(r2[e3].ctx, t2);
          return this;
        }
        off(e2, t2) {
          let r2 = this.e || (this.e = {}), a2 = r2[e2], o = [];
          if (a2 && t2) for (let e3 = 0, r3 = a2.length; e3 < r3; e3 += 1) a2[e3].fn !== t2 && a2[e3].fn._ !== t2 && o.push(a2[e3]);
          return o.length ? r2[e2] = o : delete r2[e2], this;
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "9pCYc": [function(e, t, r, a) {
      r.interopDefault = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }, r.defineInteropFlag = function(e2) {
        Object.defineProperty(e2, "__esModule", { value: true });
      }, r.exportAll = function(e2, t2) {
        return Object.keys(e2).forEach(function(r2) {
          "default" === r2 || "__esModule" === r2 || Object.prototype.hasOwnProperty.call(t2, r2) || Object.defineProperty(t2, r2, { enumerable: true, get: function() {
            return e2[r2];
          } });
        }), t2;
      }, r.export = function(e2, t2, r2) {
        Object.defineProperty(e2, t2, { enumerable: true, get: r2 });
      };
    }, {}], "71aH7": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./dom");
      o.exportAll(i, r);
      var n = e("./error");
      o.exportAll(n, r);
      var s = e("./subtitle");
      o.exportAll(s, r);
      var l = e("./file");
      o.exportAll(l, r);
      var c = e("./property");
      o.exportAll(c, r);
      var p = e("./time");
      o.exportAll(p, r);
      var u = e("./format");
      o.exportAll(u, r);
      var d = e("./compatibility");
      o.exportAll(d, r);
    }, { "./dom": "bSNiV", "./error": "hwmZz", "./subtitle": "inzwq", "./file": "6b7Ip", "./property": "5NSdr", "./time": "epmNy", "./format": "gapRl", "./compatibility": "6ZTr6", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], bSNiV: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "query", () => n), o.export(r, "queryAll", () => s), o.export(r, "addClass", () => l), o.export(r, "removeClass", () => c), o.export(r, "hasClass", () => p), o.export(r, "append", () => u), o.export(r, "remove", () => d), o.export(r, "setStyle", () => f), o.export(r, "setStyles", () => h), o.export(r, "getStyle", () => m), o.export(r, "sublings", () => g), o.export(r, "inverseClass", () => v), o.export(r, "tooltip", () => y), o.export(r, "isInViewport", () => b), o.export(r, "includeFromEvent", () => x), o.export(r, "replaceElement", () => w), o.export(r, "createElement", () => j), o.export(r, "getIcon", () => k), o.export(r, "setStyleText", () => C), o.export(r, "supportsFlex", () => S), o.export(r, "getRect", () => I), o.export(r, "loadImg", () => T);
      var i = e("./compatibility");
      function n(e2, t2 = document) {
        return t2.querySelector(e2);
      }
      function s(e2, t2 = document) {
        return Array.from(t2.querySelectorAll(e2));
      }
      function l(e2, t2) {
        return e2.classList.add(t2);
      }
      function c(e2, t2) {
        return e2.classList.remove(t2);
      }
      function p(e2, t2) {
        return e2.classList.contains(t2);
      }
      function u(e2, t2) {
        return t2 instanceof Element ? e2.appendChild(t2) : e2.insertAdjacentHTML("beforeend", String(t2)), e2.lastElementChild || e2.lastChild;
      }
      function d(e2) {
        return e2.parentNode.removeChild(e2);
      }
      function f(e2, t2, r2) {
        return e2.style[t2] = r2, e2;
      }
      function h(e2, t2) {
        for (let r2 in t2) f(e2, r2, t2[r2]);
        return e2;
      }
      function m(e2, t2, r2 = true) {
        let a2 = window.getComputedStyle(e2, null).getPropertyValue(t2);
        return r2 ? parseFloat(a2) : a2;
      }
      function g(e2) {
        return Array.from(e2.parentElement.children).filter((t2) => t2 !== e2);
      }
      function v(e2, t2) {
        g(e2).forEach((e3) => c(e3, t2)), l(e2, t2);
      }
      function y(e2, t2, r2 = "top") {
        i.isMobile || (e2.setAttribute("aria-label", t2), l(e2, "hint--rounded"), l(e2, `hint--${r2}`));
      }
      function b(e2, t2 = 0) {
        let r2 = e2.getBoundingClientRect(), a2 = window.innerHeight || document.documentElement.clientHeight, o2 = window.innerWidth || document.documentElement.clientWidth, i2 = r2.top - t2 <= a2 && r2.top + r2.height + t2 >= 0, n2 = r2.left - t2 <= o2 + t2 && r2.left + r2.width + t2 >= 0;
        return i2 && n2;
      }
      function x(e2, t2) {
        return e2.composedPath && e2.composedPath().indexOf(t2) > -1;
      }
      function w(e2, t2) {
        return t2.parentNode.replaceChild(e2, t2), e2;
      }
      function j(e2) {
        return document.createElement(e2);
      }
      function k(e2 = "", t2 = "") {
        let r2 = j("i");
        return l(r2, "art-icon"), l(r2, `art-icon-${e2}`), u(r2, t2), r2;
      }
      function C(e2, t2) {
        let r2 = document.getElementById(e2);
        r2 || ((r2 = document.createElement("style")).id = e2, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => {
          document.head.appendChild(r2);
        }) : (document.head || document.documentElement).appendChild(r2)), r2.textContent = t2;
      }
      function S() {
        let e2 = document.createElement("div");
        return e2.style.display = "flex", "flex" === e2.style.display;
      }
      function I(e2) {
        return e2.getBoundingClientRect();
      }
      function T(e2, t2) {
        return new Promise((r2, a2) => {
          let o2 = new Image();
          o2.onload = function() {
            if (t2 && 1 !== t2) {
              let i2 = document.createElement("canvas"), n2 = i2.getContext("2d");
              i2.width = o2.width * t2, i2.height = o2.height * t2, n2.drawImage(o2, 0, 0, i2.width, i2.height), i2.toBlob((t3) => {
                let o3 = URL.createObjectURL(t3), i3 = new Image();
                i3.onload = function() {
                  r2(i3);
                }, i3.onerror = function() {
                  URL.revokeObjectURL(o3), a2(Error(`Image load failed: ${e2}`));
                }, i3.src = o3;
              });
            } else r2(o2);
          }, o2.onerror = function() {
            a2(Error(`Image load failed: ${e2}`));
          }, o2.src = e2;
        });
      }
    }, { "./compatibility": "6ZTr6", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6ZTr6": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "userAgent", () => i), o.export(r, "isSafari", () => n), o.export(r, "isWechat", () => s), o.export(r, "isIE", () => l), o.export(r, "isAndroid", () => c), o.export(r, "isIOS", () => p), o.export(r, "isIOS13", () => u), o.export(r, "isMobile", () => d), o.export(r, "isBrowser", () => f);
      let i = "undefined" != typeof navigator ? navigator.userAgent : "", n = /^((?!chrome|android).)*safari/i.test(i), s = /MicroMessenger/i.test(i), l = /MSIE|Trident/i.test(i), c = /android/i.test(i), p = /iPad|iPhone|iPod/i.test(i) && !window.MSStream, u = p || i.includes("Macintosh") && navigator.maxTouchPoints >= 1, d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i) || u, f = "undefined" != typeof window;
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], hwmZz: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "ArtPlayerError", () => i), o.export(r, "errorHandle", () => n);
      class i extends Error {
        constructor(e2, t2) {
          super(e2), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t2 || this.constructor), this.name = "ArtPlayerError";
        }
      }
      function n(e2, t2) {
        if (!e2) throw new i(t2);
        return e2;
      }
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], inzwq: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        return "WEBVTT \r\n\r\n".concat(e2.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (e3, t2, r2) => {
          let a2 = r2.slice(0, 3);
          return 1 === r2.length && (a2 = r2 + "00"), 2 === r2.length && (a2 = r2 + "0"), `${t2},${a2}`;
        }).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
      }
      function n(e2) {
        return URL.createObjectURL(new Blob([e2], { type: "text/vtt" }));
      }
      function s(e2) {
        let t2 = RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");
        function r2(e3 = "") {
          return e3.split(/[:.]/).map((e4, t3, r3) => {
            if (t3 === r3.length - 1) {
              if (1 === e4.length) return `.${e4}00`;
              if (2 === e4.length) return `.${e4}0`;
            } else if (1 === e4.length) return (0 === t3 ? "0" : ":0") + e4;
            return 0 === t3 ? e4 : t3 === r3.length - 1 ? `.${e4}` : `:${e4}`;
          }).join("");
        }
        return "WEBVTT\n\n" + e2.split(/\r?\n/).map((e3) => {
          let a2 = e3.match(t2);
          return a2 ? { start: r2(a2[1].trim()), end: r2(a2[2].trim()), text: a2[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map((e4) => e4.trim()).join("\n") } : null;
        }).filter((e3) => e3).map((e3, t3) => e3 ? t3 + 1 + `
${e3.start} --> ${e3.end}
${e3.text}` : "").filter((e3) => e3.trim()).join("\n\n");
      }
      o.defineInteropFlag(r), o.export(r, "srtToVtt", () => i), o.export(r, "vttToBlob", () => n), o.export(r, "assToVtt", () => s);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6b7Ip": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2, t2) {
        let r2 = document.createElement("a");
        r2.style.display = "none", r2.href = e2, r2.download = t2, document.body.appendChild(r2), r2.click(), document.body.removeChild(r2);
      }
      o.defineInteropFlag(r), o.export(r, "getExt", () => function e2(t2) {
        return t2.includes("?") ? e2(t2.split("?")[0]) : t2.includes("#") ? e2(t2.split("#")[0]) : t2.trim().toLowerCase().split(".").pop();
      }), o.export(r, "download", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5NSdr": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "def", () => i), o.export(r, "has", () => s), o.export(r, "get", () => l), o.export(r, "mergeDeep", () => function e2(...t2) {
        let r2 = (e3) => e3 && "object" == typeof e3 && !Array.isArray(e3);
        return t2.reduce((t3, a2) => (Object.keys(a2).forEach((o2) => {
          let i2 = t3[o2], n2 = a2[o2];
          Array.isArray(i2) && Array.isArray(n2) ? t3[o2] = i2.concat(...n2) : r2(i2) && r2(n2) ? t3[o2] = e2(i2, n2) : t3[o2] = n2;
        }), t3), {});
      });
      let i = Object.defineProperty, { hasOwnProperty: n } = Object.prototype;
      function s(e2, t2) {
        return n.call(e2, t2);
      }
      function l(e2, t2) {
        return Object.getOwnPropertyDescriptor(e2, t2);
      }
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], epmNy: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2 = 0) {
        return new Promise((t2) => setTimeout(t2, e2));
      }
      function n(e2, t2) {
        let r2;
        return function(...a2) {
          clearTimeout(r2), r2 = setTimeout(() => (r2 = null, e2.apply(this, a2)), t2);
        };
      }
      function s(e2, t2) {
        let r2 = false;
        return function(...a2) {
          r2 || (e2.apply(this, a2), r2 = true, setTimeout(function() {
            r2 = false;
          }, t2));
        };
      }
      o.defineInteropFlag(r), o.export(r, "sleep", () => i), o.export(r, "debounce", () => n), o.export(r, "throttle", () => s);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], gapRl: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2, t2, r2) {
        return Math.max(Math.min(e2, Math.max(t2, r2)), Math.min(t2, r2));
      }
      function n(e2) {
        return e2.charAt(0).toUpperCase() + e2.slice(1);
      }
      function s(e2) {
        if (!e2) return "00:00";
        let t2 = Math.floor(e2 / 3600), r2 = Math.floor((e2 - 3600 * t2) / 60), a2 = Math.floor(e2 - 3600 * t2 - 60 * r2);
        return (t2 > 0 ? [t2, r2, a2] : [r2, a2]).map((e3) => e3 < 10 ? `0${e3}` : String(e3)).join(":");
      }
      function l(e2) {
        return e2.replace(/[&<>'"]/g, (e3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[e3] || e3);
      }
      function c(e2) {
        let t2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#39;": "'", "&quot;": '"' }, r2 = RegExp(`(${Object.keys(t2).join("|")})`, "g");
        return e2.replace(r2, (e3) => t2[e3] || e3);
      }
      o.defineInteropFlag(r), o.export(r, "clamp", () => i), o.export(r, "capitalize", () => n), o.export(r, "secondToTime", () => s), o.export(r, "escape", () => l), o.export(r, "unescape", () => c);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], AKEiO: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "ComponentOption", () => f);
      var i = e("../utils");
      let n = "array", s = "boolean", l = "string", c = "number", p = "object", u = "function";
      function d(e2, t2, r2) {
        return (0, i.errorHandle)(t2 === l || t2 === c || e2 instanceof Element, `${r2.join(".")} require '${l}' or 'Element' type`);
      }
      let f = { html: d, disable: `?${s}`, name: `?${l}`, index: `?${c}`, style: `?${p}`, click: `?${u}`, mounted: `?${u}`, tooltip: `?${l}|${c}`, width: `?${c}`, selector: `?${n}`, onSelect: `?${u}`, switch: `?${s}`, onSwitch: `?${u}`, range: `?${n}`, onRange: `?${u}`, onChange: `?${u}` };
      r.default = { id: l, container: d, url: l, poster: l, type: l, theme: l, lang: l, volume: c, isLive: s, muted: s, autoplay: s, autoSize: s, autoMini: s, loop: s, flip: s, playbackRate: s, aspectRatio: s, screenshot: s, setting: s, hotkey: s, pip: s, mutex: s, backdrop: s, fullscreen: s, fullscreenWeb: s, subtitleOffset: s, miniProgressBar: s, useSSR: s, playsInline: s, lock: s, gesture: s, fastForward: s, autoPlayback: s, autoOrientation: s, airplay: s, proxy: `?${u}`, plugins: [u], layers: [f], contextmenu: [f], settings: [f], controls: [{ ...f, position: (e2, t2, r2) => {
        let a2 = ["top", "left", "right"];
        return (0, i.errorHandle)(a2.includes(e2), `${r2.join(".")} only accept ${a2.toString()} as parameters`);
      } }], quality: [{ default: `?${s}`, html: l, url: l }], highlight: [{ time: c, text: l }], thumbnails: { url: l, number: c, column: c, width: c, height: c, scale: c }, subtitle: { url: l, name: l, type: l, style: p, escape: s, encoding: l, onVttLoad: u }, moreVideoAttr: p, i18n: p, icons: p, cssVar: p, customType: p };
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], lyjeQ: [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = { propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"], methods: ["addTextTrack", "canPlayType", "load", "play", "pause"], events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"] };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], X13Zf: [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var o = e("./utils");
      class i {
        constructor(e2) {
          this.art = e2;
          let { option: t2, constructor: r2 } = e2;
          t2.container instanceof Element ? this.$container = t2.container : (this.$container = (0, o.query)(t2.container), (0, o.errorHandle)(this.$container, `No container element found by ${t2.container}`)), (0, o.errorHandle)((0, o.supportsFlex)(), "The current browser does not support flex layout");
          let a2 = this.$container.tagName.toLowerCase();
          (0, o.errorHandle)("div" === a2, `Unsupported container element type, only support 'div' but got '${a2}'`), (0, o.errorHandle)(r2.instances.every((e3) => e3.template.$container !== this.$container), "Cannot mount multiple instances on the same dom element"), this.query = this.query.bind(this), this.$container.dataset.artId = e2.id, this.init();
        }
        static get html() {
          return `<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">5.2.3</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span>x<span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-contextmenus"></div></div>`;
        }
        query(e2) {
          return (0, o.query)(e2, this.$container);
        }
        init() {
          let { option: e2 } = this.art;
          if (e2.useSSR || (this.$container.innerHTML = i.html), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$track = this.query("track"), this.$poster = this.query(".art-poster"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsCenter = this.query(".art-controls-center"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$contextmenu = this.query(".art-contextmenus"), e2.proxy) {
            let t2 = e2.proxy.call(this.art, this.art);
            (0, o.errorHandle)(t2 instanceof HTMLVideoElement || t2 instanceof HTMLCanvasElement, "Function 'option.proxy' needs to return 'HTMLVideoElement' or 'HTMLCanvasElement'"), (0, o.replaceElement)(t2, this.$video), t2.className = "art-video", this.$video = t2;
          }
          e2.backdrop && (0, o.addClass)(this.$player, "art-backdrop"), o.isMobile && (0, o.addClass)(this.$player, "art-mobile");
        }
        destroy(e2) {
          this.$video.src = "", e2 ? this.$container.innerHTML = "" : (0, o.addClass)(this.$player, "art-destroy");
        }
      }
      r.default = i;
    }, { "./utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "3jKkj": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("../utils"), n = e("./zh-cn"), s = o.interopDefault(n);
      r.default = class {
        constructor(e2) {
          this.art = e2, this.languages = { "zh-cn": s.default }, this.language = {}, this.update(e2.option.i18n);
        }
        init() {
          let e2 = this.art.option.lang.toLowerCase();
          this.language = this.languages[e2] || {};
        }
        get(e2) {
          return this.language[e2] || e2;
        }
        update(e2) {
          this.languages = (0, i.mergeDeep)(this.languages, e2), this.init();
        }
      };
    }, { "../utils": "71aH7", "./zh-cn": "5Y91w", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5Y91w": [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      let o = { "Video Info": "统计信息", Close: "关闭", "Video Load Failed": "加载失败", Volume: "音量", Play: "播放", Pause: "暂停", Rate: "速度", Mute: "静音", "Video Flip": "画面翻转", Horizontal: "水平", Vertical: "垂直", Reconnect: "重新连接", "Show Setting": "显示设置", "Hide Setting": "隐藏设置", Screenshot: "截图", "Play Speed": "播放速度", "Aspect Ratio": "画面比例", Default: "默认", Normal: "正常", Open: "打开", "Switch Video": "切换", "Switch Subtitle": "切换字幕", Fullscreen: "全屏", "Exit Fullscreen": "退出全屏", "Web Fullscreen": "网页全屏", "Exit Web Fullscreen": "退出网页全屏", "Mini Player": "迷你播放器", "PIP Mode": "开启画中画", "Exit PIP Mode": "退出画中画", "PIP Not Supported": "不支持画中画", "Fullscreen Not Supported": "不支持全屏", "Subtitle Offset": "字幕偏移", "Last Seen": "上次看到", "Jump Play": "跳转播放", AirPlay: "隔空播放", "AirPlay Not Available": "隔空播放不可用" };
      r.default = o, "undefined" != typeof window && (window["artplayer-i18n-zh-cn"] = o);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], a90nx: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./urlMix"), n = o.interopDefault(i), s = e("./attrMix"), l = o.interopDefault(s), c = e("./playMix"), p = o.interopDefault(c), u = e("./pauseMix"), d = o.interopDefault(u), f = e("./toggleMix"), h = o.interopDefault(f), m = e("./seekMix"), g = o.interopDefault(m), v = e("./volumeMix"), y = o.interopDefault(v), b = e("./currentTimeMix"), x = o.interopDefault(b), w = e("./durationMix"), j = o.interopDefault(w), k = e("./switchMix"), C = o.interopDefault(k), S = e("./playbackRateMix"), I = o.interopDefault(S), T = e("./aspectRatioMix"), $ = o.interopDefault(T), E = e("./screenshotMix"), M = o.interopDefault(E), F = e("./fullscreenMix"), D = o.interopDefault(F), H = e("./fullscreenWebMix"), A = o.interopDefault(H), z = e("./pipMix"), R = o.interopDefault(z), O = e("./loadedMix"), Y = o.interopDefault(O), L = e("./playedMix"), P = o.interopDefault(L), V = e("./playingMix"), q = o.interopDefault(V), _ = e("./autoSizeMix"), N = o.interopDefault(_), B = e("./rectMix"), W = o.interopDefault(B), U = e("./flipMix"), K = o.interopDefault(U), X = e("./miniMix"), G = o.interopDefault(X), Q = e("./posterMix"), Z = o.interopDefault(Q), J = e("./autoHeightMix"), ee = o.interopDefault(J), et = e("./cssVarMix"), er = o.interopDefault(et), ea = e("./themeMix"), eo = o.interopDefault(ea), ei = e("./typeMix"), en = o.interopDefault(ei), es = e("./stateMix"), el = o.interopDefault(es), ec = e("./subtitleOffsetMix"), ep = o.interopDefault(ec), eu = e("./airplayMix"), ed = o.interopDefault(eu), ef = e("./qualityMix"), eh = o.interopDefault(ef), em = e("./thumbnailsMix"), eg = o.interopDefault(em), ev = e("./optionInit"), ey = o.interopDefault(ev), eb = e("./eventInit"), ex = o.interopDefault(eb);
      r.default = class {
        constructor(e2) {
          (0, n.default)(e2), (0, l.default)(e2), (0, p.default)(e2), (0, d.default)(e2), (0, h.default)(e2), (0, g.default)(e2), (0, y.default)(e2), (0, x.default)(e2), (0, j.default)(e2), (0, C.default)(e2), (0, I.default)(e2), (0, $.default)(e2), (0, M.default)(e2), (0, D.default)(e2), (0, A.default)(e2), (0, R.default)(e2), (0, Y.default)(e2), (0, P.default)(e2), (0, q.default)(e2), (0, N.default)(e2), (0, W.default)(e2), (0, K.default)(e2), (0, G.default)(e2), (0, Z.default)(e2), (0, ee.default)(e2), (0, er.default)(e2), (0, eo.default)(e2), (0, en.default)(e2), (0, el.default)(e2), (0, ep.default)(e2), (0, ed.default)(e2), (0, eh.default)(e2), (0, eg.default)(e2), (0, ex.default)(e2), (0, ey.default)(e2);
        }
      };
    }, { "./urlMix": "kQoac", "./attrMix": "deCma", "./playMix": "fOJuP", "./pauseMix": "fzHAy", "./toggleMix": "cBHxQ", "./seekMix": "koAPr", "./volumeMix": "6eyuR", "./currentTimeMix": "faaWv", "./durationMix": "5y91K", "./switchMix": "iceD8", "./playbackRateMix": "keKwh", "./aspectRatioMix": "jihET", "./screenshotMix": "36kPY", "./fullscreenMix": "2GYOJ", "./fullscreenWebMix": "5aYAP", "./pipMix": "7EnIB", "./loadedMix": "3N9mP", "./playedMix": "et96R", "./playingMix": "9DzzM", "./autoSizeMix": "i1LDY", "./rectMix": "IqARI", "./flipMix": "7E7Vs", "./miniMix": "gpugx", "./posterMix": "1SuFS", "./autoHeightMix": "8x4te", "./cssVarMix": "1CaTA", "./themeMix": "2FqhO", "./typeMix": "1fQQs", "./stateMix": "iBOQW", "./subtitleOffsetMix": "6vlBV", "./airplayMix": "eftqT", "./qualityMix": "5SdyX", "./thumbnailsMix": "4HcqV", "./optionInit": "fCWZK", "./eventInit": "f8Lv3", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], kQoac: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { option: t2, template: { $video: r2 } } = e2;
        (0, i.def)(e2, "url", { get: () => r2.src, async set(a2) {
          if (a2) {
            let o2 = e2.url, n2 = t2.type || (0, i.getExt)(a2), s = t2.customType[n2];
            n2 && s ? (await (0, i.sleep)(), e2.loading.show = true, s.call(e2, r2, a2, e2)) : (URL.revokeObjectURL(o2), r2.src = a2), o2 !== e2.url && (e2.option.url = a2, e2.isReady && o2 && e2.once("video:canplay", () => {
              e2.emit("restart", a2);
            }));
          } else await (0, i.sleep)(), e2.loading.show = true;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], deCma: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $video: t2 } } = e2;
        (0, i.def)(e2, "attr", { value(e3, r2) {
          if (void 0 === r2) return t2[e3];
          t2[e3] = r2;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], fOJuP: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, notice: r2, option: a2, constructor: { instances: o2 }, template: { $video: n2 } } = e2;
        (0, i.def)(e2, "play", { value: async function() {
          let i2 = await n2.play();
          if (r2.show = t2.get("Play"), e2.emit("play"), a2.mutex) for (let t3 = 0; t3 < o2.length; t3++) {
            let r3 = o2[t3];
            r3 !== e2 && r3.pause();
          }
          return i2;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], fzHAy: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $video: t2 }, i18n: r2, notice: a2 } = e2;
        (0, i.def)(e2, "pause", { value() {
          let o2 = t2.pause();
          return a2.show = r2.get("Pause"), e2.emit("pause"), o2;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], cBHxQ: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "toggle", { value: () => e2.playing ? e2.pause() : e2.play() });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], koAPr: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { notice: t2 } = e2;
        (0, i.def)(e2, "seek", { set(r2) {
          e2.currentTime = r2, e2.duration && (t2.show = `${(0, i.secondToTime)(e2.currentTime)} / ${(0, i.secondToTime)(e2.duration)}`), e2.emit("seek", e2.currentTime);
        } }), (0, i.def)(e2, "forward", { set(t3) {
          e2.seek = e2.currentTime + t3;
        } }), (0, i.def)(e2, "backward", { set(t3) {
          e2.seek = e2.currentTime - t3;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6eyuR": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $video: t2 }, i18n: r2, notice: a2, storage: o2 } = e2;
        (0, i.def)(e2, "volume", { get: () => t2.volume || 0, set: (e3) => {
          t2.volume = (0, i.clamp)(e3, 0, 1), a2.show = `${r2.get("Volume")}: ${parseInt(100 * t2.volume, 10)}`, 0 !== t2.volume && o2.set("volume", t2.volume);
        } }), (0, i.def)(e2, "muted", { get: () => t2.muted, set: (r3) => {
          t2.muted = r3, e2.emit("muted", r3);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], faaWv: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { $video: t2 } = e2.template;
        (0, i.def)(e2, "currentTime", { get: () => t2.currentTime || 0, set: (r2) => {
          Number.isNaN(r2 = parseFloat(r2)) || (t2.currentTime = (0, i.clamp)(r2, 0, e2.duration));
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5y91K": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "duration", { get: () => {
          let { duration: t2 } = e2.template.$video;
          return t2 === 1 / 0 ? 0 : t2 || 0;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], iceD8: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        function t2(t3, r2) {
          return new Promise((a2, o2) => {
            if (t3 === e2.url) return;
            let { playing: i2, aspectRatio: n2, playbackRate: s } = e2;
            e2.pause(), e2.url = t3, e2.notice.show = "", e2.once("video:error", o2), e2.once("video:loadedmetadata", () => {
              e2.currentTime = r2;
            }), e2.once("video:canplay", async () => {
              e2.playbackRate = s, e2.aspectRatio = n2, i2 && await e2.play(), e2.notice.show = "", a2();
            });
          });
        }
        (0, i.def)(e2, "switchQuality", { value: (r2) => t2(r2, e2.currentTime) }), (0, i.def)(e2, "switchUrl", { value: (e3) => t2(e3, 0) }), (0, i.def)(e2, "switch", { set: e2.switchUrl });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], keKwh: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $video: t2 }, i18n: r2, notice: a2 } = e2;
        (0, i.def)(e2, "playbackRate", { get: () => t2.playbackRate, set(o2) {
          o2 ? o2 !== t2.playbackRate && (t2.playbackRate = o2, a2.show = `${r2.get("Rate")}: ${1 === o2 ? r2.get("Normal") : `${o2}x`}`) : e2.playbackRate = 1;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], jihET: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, notice: r2, template: { $video: a2, $player: o2 } } = e2;
        (0, i.def)(e2, "aspectRatio", { get: () => o2.dataset.aspectRatio || "default", set(n2) {
          if (n2 || (n2 = "default"), "default" === n2) (0, i.setStyle)(a2, "width", null), (0, i.setStyle)(a2, "height", null), (0, i.setStyle)(a2, "margin", null), delete o2.dataset.aspectRatio;
          else {
            let e3 = n2.split(":").map(Number), { clientWidth: t3, clientHeight: r3 } = o2, s = e3[0] / e3[1];
            t3 / r3 > s ? ((0, i.setStyle)(a2, "width", `${s * r3}px`), (0, i.setStyle)(a2, "height", "100%"), (0, i.setStyle)(a2, "margin", "0 auto")) : ((0, i.setStyle)(a2, "width", "100%"), (0, i.setStyle)(a2, "height", `${t3 / s}px`), (0, i.setStyle)(a2, "margin", "auto 0")), o2.dataset.aspectRatio = n2;
          }
          r2.show = `${t2.get("Aspect Ratio")}: ${"default" === n2 ? t2.get("Default") : n2}`, e2.emit("aspectRatio", n2);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "36kPY": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { notice: t2, template: { $video: r2 } } = e2, a2 = (0, i.createElement)("canvas");
        (0, i.def)(e2, "getDataURL", { value: () => new Promise((e3, o2) => {
          try {
            a2.width = r2.videoWidth, a2.height = r2.videoHeight, a2.getContext("2d").drawImage(r2, 0, 0), e3(a2.toDataURL("image/png"));
          } catch (e4) {
            t2.show = e4, o2(e4);
          }
        }) }), (0, i.def)(e2, "getBlobUrl", { value: () => new Promise((e3, o2) => {
          try {
            a2.width = r2.videoWidth, a2.height = r2.videoHeight, a2.getContext("2d").drawImage(r2, 0, 0), a2.toBlob((t3) => {
              e3(URL.createObjectURL(t3));
            });
          } catch (e4) {
            t2.show = e4, o2(e4);
          }
        }) }), (0, i.def)(e2, "screenshot", { value: async (t3) => {
          let a3 = await e2.getDataURL(), o2 = t3 || `artplayer_${(0, i.secondToTime)(r2.currentTime)}`;
          return (0, i.download)(a3, `${o2}.png`), e2.emit("screenshot", a3), a3;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "2GYOJ": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => l);
      var i = e("../libs/screenfull"), n = o.interopDefault(i), s = e("../utils");
      function l(e2) {
        let { i18n: t2, notice: r2, template: { $video: a2, $player: o2 } } = e2, i2 = (e3) => {
          n.default.on("change", () => {
            e3.emit("fullscreen", n.default.isFullscreen), n.default.isFullscreen ? (e3.state = "fullscreen", (0, s.addClass)(o2, "art-fullscreen")) : (0, s.removeClass)(o2, "art-fullscreen"), e3.emit("resize");
          }), n.default.on("error", (t3) => {
            e3.emit("fullscreenError", t3);
          }), (0, s.def)(e3, "fullscreen", { get: () => n.default.isFullscreen, async set(e4) {
            e4 ? await n.default.request(o2) : await n.default.exit();
          } });
        }, l2 = (e3) => {
          e3.proxy(document, "webkitfullscreenchange", () => {
            e3.emit("fullscreen", e3.fullscreen), e3.emit("resize");
          }), (0, s.def)(e3, "fullscreen", { get: () => document.fullscreenElement === a2, set(t3) {
            t3 ? (e3.state = "fullscreen", a2.webkitEnterFullscreen()) : a2.webkitExitFullscreen();
          } });
        };
        e2.once("video:loadedmetadata", () => {
          n.default.isEnabled ? i2(e2) : a2.webkitSupportsFullscreen ? l2(e2) : (0, s.def)(e2, "fullscreen", { get: () => false, set() {
            r2.show = t2.get("Fullscreen Not Supported");
          } }), (0, s.def)(e2, "fullscreen", (0, s.get)(e2, "fullscreen"));
        });
      }
    }, { "../libs/screenfull": "8v40z", "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "8v40z": [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      let o = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = (() => {
        if ("undefined" == typeof document) return false;
        let e2 = o[0], t2 = {};
        for (let r2 of o) if (r2[1] in document) {
          for (let [a2, o2] of r2.entries()) t2[e2[a2]] = o2;
          return t2;
        }
        return false;
      })(), n = { change: i.fullscreenchange, error: i.fullscreenerror }, s = { request: (e2 = document.documentElement, t2) => new Promise((r2, a2) => {
        let o2 = () => {
          s.off("change", o2), r2();
        };
        s.on("change", o2);
        let n2 = e2[i.requestFullscreen](t2);
        n2 instanceof Promise && n2.then(o2).catch(a2);
      }), exit: () => new Promise((e2, t2) => {
        if (!s.isFullscreen) return void e2();
        let r2 = () => {
          s.off("change", r2), e2();
        };
        s.on("change", r2);
        let a2 = document[i.exitFullscreen]();
        a2 instanceof Promise && a2.then(r2).catch(t2);
      }), toggle: (e2, t2) => s.isFullscreen ? s.exit() : s.request(e2, t2), onchange(e2) {
        s.on("change", e2);
      }, onerror(e2) {
        s.on("error", e2);
      }, on(e2, t2) {
        let r2 = n[e2];
        r2 && document.addEventListener(r2, t2, false);
      }, off(e2, t2) {
        let r2 = n[e2];
        r2 && document.removeEventListener(r2, t2, false);
      }, raw: i };
      Object.defineProperties(s, { isFullscreen: { get: () => !!document[i.fullscreenElement] }, element: { enumerable: true, get: () => document[i.fullscreenElement] }, isEnabled: { enumerable: true, get: () => !!document[i.fullscreenEnabled] } }), i || (s = { isEnabled: false }), r.default = s;
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5aYAP": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { constructor: t2, template: { $container: r2, $player: a2 } } = e2, o2 = "";
        (0, i.def)(e2, "fullscreenWeb", { get: () => (0, i.hasClass)(a2, "art-fullscreen-web"), set(n2) {
          n2 ? (o2 = a2.style.cssText, t2.FULLSCREEN_WEB_IN_BODY && (0, i.append)(document.body, a2), e2.state = "fullscreenWeb", (0, i.setStyle)(a2, "width", "100%"), (0, i.setStyle)(a2, "height", "100%"), (0, i.addClass)(a2, "art-fullscreen-web"), e2.emit("fullscreenWeb", true)) : (t2.FULLSCREEN_WEB_IN_BODY && (0, i.append)(r2, a2), o2 && (a2.style.cssText = o2, o2 = ""), (0, i.removeClass)(a2, "art-fullscreen-web"), e2.emit("fullscreenWeb", false)), e2.emit("resize");
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "7EnIB": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, notice: r2, template: { $video: a2 } } = e2;
        if (document.pictureInPictureEnabled) {
          let { template: { $video: t3 }, proxy: r3, notice: a3 } = e2;
          t3.disablePictureInPicture = false, (0, i.def)(e2, "pip", { get: () => document.pictureInPictureElement, set(r4) {
            r4 ? (e2.state = "pip", t3.requestPictureInPicture().catch((e3) => {
              throw a3.show = e3, e3;
            })) : document.exitPictureInPicture().catch((e3) => {
              throw a3.show = e3, e3;
            });
          } }), r3(t3, "enterpictureinpicture", () => {
            e2.emit("pip", true);
          }), r3(t3, "leavepictureinpicture", () => {
            e2.emit("pip", false);
          });
        } else if (a2.webkitSupportsPresentationMode) {
          let { $video: t3 } = e2.template;
          t3.webkitSetPresentationMode("inline"), (0, i.def)(e2, "pip", { get: () => "picture-in-picture" === t3.webkitPresentationMode, set(r3) {
            r3 ? (e2.state = "pip", t3.webkitSetPresentationMode("picture-in-picture"), e2.emit("pip", true)) : (t3.webkitSetPresentationMode("inline"), e2.emit("pip", false));
          } });
        } else (0, i.def)(e2, "pip", { get: () => false, set() {
          r2.show = t2.get("PIP Not Supported");
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "3N9mP": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { $video: t2 } = e2.template;
        (0, i.def)(e2, "loaded", { get: () => e2.loadedTime / t2.duration }), (0, i.def)(e2, "loadedTime", { get: () => t2.buffered.length ? t2.buffered.end(t2.buffered.length - 1) : 0 });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], et96R: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "played", { get: () => e2.currentTime / e2.duration });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "9DzzM": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { $video: t2 } = e2.template;
        (0, i.def)(e2, "playing", { get: () => "boolean" == typeof t2.playing ? t2.playing : !!(t2.currentTime > 0 && !t2.paused && !t2.ended && t2.readyState > 2) });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], i1LDY: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { $container: t2, $player: r2, $video: a2 } = e2.template;
        (0, i.def)(e2, "autoSize", { value() {
          let { videoWidth: o2, videoHeight: n2 } = a2, { width: s, height: l } = (0, i.getRect)(t2), c = o2 / n2;
          s / l > c ? ((0, i.setStyle)(r2, "width", `${l * c / s * 100}%`), (0, i.setStyle)(r2, "height", "100%")) : ((0, i.setStyle)(r2, "width", "100%"), (0, i.setStyle)(r2, "height", `${s / c / l * 100}%`)), e2.emit("autoSize", { width: e2.width, height: e2.height });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], IqARI: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "rect", { get: () => (0, i.getRect)(e2.template.$player) });
        let t2 = ["bottom", "height", "left", "right", "top", "width"];
        for (let r2 = 0; r2 < t2.length; r2++) {
          let a2 = t2[r2];
          (0, i.def)(e2, a2, { get: () => e2.rect[a2] });
        }
        (0, i.def)(e2, "x", { get: () => e2.left + window.pageXOffset }), (0, i.def)(e2, "y", { get: () => e2.top + window.pageYOffset });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "7E7Vs": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $player: t2 }, i18n: r2, notice: a2 } = e2;
        (0, i.def)(e2, "flip", { get: () => t2.dataset.flip || "normal", set(o2) {
          o2 || (o2 = "normal"), "normal" === o2 ? delete t2.dataset.flip : t2.dataset.flip = o2, a2.show = `${r2.get("Video Flip")}: ${r2.get((0, i.capitalize)(o2))}`, e2.emit("flip", o2);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], gpugx: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { icons: t2, proxy: r2, storage: a2, template: { $player: o2, $video: n2 } } = e2, s = false, l = 0, c = 0;
        function p() {
          let { $mini: t3 } = e2.template;
          t3 && ((0, i.removeClass)(o2, "art-mini"), (0, i.setStyle)(t3, "display", "none"), o2.prepend(n2), e2.emit("mini", false));
        }
        function u(t3, r3) {
          e2.playing ? ((0, i.setStyle)(t3, "display", "none"), (0, i.setStyle)(r3, "display", "flex")) : ((0, i.setStyle)(t3, "display", "flex"), (0, i.setStyle)(r3, "display", "none"));
        }
        function d() {
          let { $mini: t3 } = e2.template, r3 = (0, i.getRect)(t3), o3 = window.innerHeight - r3.height - 50, n3 = window.innerWidth - r3.width - 50;
          a2.set("top", o3), a2.set("left", n3), (0, i.setStyle)(t3, "top", `${o3}px`), (0, i.setStyle)(t3, "left", `${n3}px`);
        }
        (0, i.def)(e2, "mini", { get: () => (0, i.hasClass)(o2, "art-mini"), set(f) {
          if (f) {
            e2.state = "mini", (0, i.addClass)(o2, "art-mini");
            let f2 = function() {
              let { $mini: o3 } = e2.template;
              if (o3) return (0, i.append)(o3, n2), (0, i.setStyle)(o3, "display", "flex");
              {
                let o4 = (0, i.createElement)("div");
                (0, i.addClass)(o4, "art-mini-popup"), (0, i.append)(document.body, o4), e2.template.$mini = o4, (0, i.append)(o4, n2);
                let d2 = (0, i.append)(o4, '<div class="art-mini-close"></div>');
                (0, i.append)(d2, t2.close), r2(d2, "click", p);
                let f3 = (0, i.append)(o4, '<div class="art-mini-state"></div>'), h2 = (0, i.append)(f3, t2.play), m2 = (0, i.append)(f3, t2.pause);
                return r2(h2, "click", () => e2.play()), r2(m2, "click", () => e2.pause()), u(h2, m2), e2.on("video:playing", () => u(h2, m2)), e2.on("video:pause", () => u(h2, m2)), e2.on("video:timeupdate", () => u(h2, m2)), r2(o4, "mousedown", (e3) => {
                  s = 0 === e3.button, l = e3.pageX, c = e3.pageY;
                }), e2.on("document:mousemove", (e3) => {
                  if (s) {
                    (0, i.addClass)(o4, "art-mini-droging");
                    let t3 = e3.pageX - l, r3 = e3.pageY - c;
                    (0, i.setStyle)(o4, "transform", `translate(${t3}px, ${r3}px)`);
                  }
                }), e2.on("document:mouseup", () => {
                  if (s) {
                    s = false, (0, i.removeClass)(o4, "art-mini-droging");
                    let e3 = (0, i.getRect)(o4);
                    a2.set("left", e3.left), a2.set("top", e3.top), (0, i.setStyle)(o4, "left", `${e3.left}px`), (0, i.setStyle)(o4, "top", `${e3.top}px`), (0, i.setStyle)(o4, "transform", null);
                  }
                }), o4;
              }
            }(), h = a2.get("top"), m = a2.get("left");
            h && m ? ((0, i.setStyle)(f2, "top", `${h}px`), (0, i.setStyle)(f2, "left", `${m}px`), (0, i.isInViewport)(f2) || d()) : d(), e2.emit("mini", true);
          } else p();
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "1SuFS": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $poster: t2 } } = e2;
        (0, i.def)(e2, "poster", { get: () => {
          try {
            return t2.style.backgroundImage.match(/"(.*)"/)[1];
          } catch (e3) {
            return "";
          }
        }, set(e3) {
          (0, i.setStyle)(t2, "backgroundImage", `url(${e3})`);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "8x4te": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { template: { $container: t2, $video: r2 } } = e2;
        (0, i.def)(e2, "autoHeight", { value() {
          let { clientWidth: a2 } = t2, { videoHeight: o2, videoWidth: n2 } = r2, s = a2 / n2 * o2;
          (0, i.setStyle)(t2, "height", s + "px"), e2.emit("autoHeight", s);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "1CaTA": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { $player: t2 } = e2.template;
        (0, i.def)(e2, "cssVar", { value: (e3, r2) => r2 ? t2.style.setProperty(e3, r2) : getComputedStyle(t2).getPropertyValue(e3) });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "2FqhO": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "theme", { get: () => e2.cssVar("--art-theme"), set(t2) {
          e2.cssVar("--art-theme", t2);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "1fQQs": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "type", { get: () => e2.option.type, set(t2) {
          e2.option.type = t2;
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], iBOQW: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let t2 = ["mini", "pip", "fullscreen", "fullscreenWeb"];
        (0, i.def)(e2, "state", { get: () => t2.find((t3) => e2[t3]) || "standard", set(r2) {
          for (let a2 = 0; a2 < t2.length; a2++) {
            let o2 = t2[a2];
            o2 !== r2 && e2[o2] && (e2[o2] = false);
          }
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6vlBV": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { notice: t2, i18n: r2, template: a2 } = e2;
        (0, i.def)(e2, "subtitleOffset", { get: () => {
          var _a;
          return ((_a = a2.$track) == null ? void 0 : _a.offset) || 0;
        }, set(o2) {
          let { cues: n2 } = e2.subtitle;
          if (!a2.$track || 0 === n2.length) return;
          let s = (0, i.clamp)(o2, -10, 10);
          a2.$track.offset = s;
          for (let t3 = 0; t3 < n2.length; t3++) {
            let r3 = n2[t3];
            r3.originalStartTime = r3.originalStartTime ?? r3.startTime, r3.originalEndTime = r3.originalEndTime ?? r3.endTime, r3.startTime = (0, i.clamp)(r3.originalStartTime + s, 0, e2.duration), r3.endTime = (0, i.clamp)(r3.originalEndTime + s, 0, e2.duration);
          }
          e2.subtitle.update(), t2.show = `${r2.get("Subtitle Offset")}: ${o2}s`, e2.emit("subtitleOffset", o2);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], eftqT: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, notice: r2, proxy: a2, template: { $video: o2 } } = e2, n2 = true;
        window.WebKitPlaybackTargetAvailabilityEvent && o2.webkitShowPlaybackTargetPicker ? a2(o2, "webkitplaybacktargetavailabilitychanged", (e3) => {
          switch (e3.availability) {
            case "available":
              n2 = true;
              break;
            case "not-available":
              n2 = false;
          }
        }) : n2 = false, (0, i.def)(e2, "airplay", { value() {
          n2 ? (o2.webkitShowPlaybackTargetPicker(), e2.emit("airplay")) : r2.show = t2.get("AirPlay Not Available");
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5SdyX": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        (0, i.def)(e2, "quality", { set(t2) {
          let { controls: r2, notice: a2, i18n: o2 } = e2, i2 = t2.find((e3) => e3.default) || t2[0];
          r2.update({ name: "quality", position: "right", index: 10, style: { marginRight: "10px" }, html: (i2 == null ? void 0 : i2.html) || "", selector: t2, onSelect: async (t3) => (await e2.switchQuality(t3.url), a2.show = `${o2.get("Switch Video")}: ${t3.html}`, t3.html) });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "4HcqV": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { events: t2, option: r2, template: { $progress: a2, $video: o2 } } = e2, n2 = null, s = null, l = false, c = false, p = false;
        t2.hover(a2, () => {
          p = true;
        }, () => {
          p = false;
        }), e2.on("setBar", async (t3, u, d) => {
          var _a;
          let f = (_a = e2.controls) == null ? void 0 : _a.thumbnails, { url: h, scale: m } = r2.thumbnails;
          if (!f || !h) return;
          let g = "played" === t3 && d && i.isMobile;
          if ("hover" === t3 || g) {
            if (l || (l = true, s = await (0, i.loadImg)(h, m), c = true), !c || !p) return;
            let t4 = a2.clientWidth * u;
            (0, i.setStyle)(f, "display", "flex"), t4 > 0 && t4 < a2.clientWidth ? function(t5) {
              var _a2;
              let n3 = (_a2 = e2.controls) == null ? void 0 : _a2.thumbnails;
              if (!n3) return;
              let { number: l2, column: c2, width: p2, height: u2, scale: d2 } = r2.thumbnails, f2 = p2 * d2 || s.naturalWidth / c2, h2 = u2 * d2 || f2 / (o2.videoWidth / o2.videoHeight), m2 = Math.floor(t5 / (a2.clientWidth / l2)), g2 = Math.ceil(m2 / c2) - 1;
              (0, i.setStyle)(n3, "backgroundImage", `url(${s.src})`), (0, i.setStyle)(n3, "height", `${h2}px`), (0, i.setStyle)(n3, "width", `${f2}px`), (0, i.setStyle)(n3, "backgroundPosition", `-${(m2 % c2 || c2 - 1) * f2}px -${g2 * h2}px`), t5 <= f2 / 2 ? (0, i.setStyle)(n3, "left", 0) : t5 > a2.clientWidth - f2 / 2 ? (0, i.setStyle)(n3, "left", `${a2.clientWidth - f2}px`) : (0, i.setStyle)(n3, "left", `${t5 - f2 / 2}px`);
            }(t4) : i.isMobile || (0, i.setStyle)(f, "display", "none"), g && (clearTimeout(n2), n2 = setTimeout(() => {
              (0, i.setStyle)(f, "display", "none");
            }, 500));
          }
        }), (0, i.def)(e2, "thumbnails", { get: () => e2.option.thumbnails, set(t3) {
          t3.url && !e2.option.isLive && (e2.option.thumbnails = t3, clearTimeout(n2), n2 = null, s = null, l = false, c = false);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], fCWZK: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { option: t2, storage: r2, template: { $video: a2, $poster: o2 } } = e2;
        for (let r3 in t2.moreVideoAttr) e2.attr(r3, t2.moreVideoAttr[r3]);
        t2.muted && (e2.muted = t2.muted), t2.volume && (a2.volume = (0, i.clamp)(t2.volume, 0, 1));
        let n2 = r2.get("volume");
        for (let r3 in "number" == typeof n2 && (a2.volume = (0, i.clamp)(n2, 0, 1)), t2.poster && (0, i.setStyle)(o2, "backgroundImage", `url(${t2.poster})`), t2.autoplay && (a2.autoplay = t2.autoplay), t2.playsInline && (a2.playsInline = true, a2["webkit-playsinline"] = true), t2.theme && (t2.cssVar["--art-theme"] = t2.theme), t2.cssVar) e2.cssVar(r3, t2.cssVar[r3]);
        e2.url = t2.url;
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], f8Lv3: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => l);
      var i = e("../config"), n = o.interopDefault(i), s = e("../utils");
      function l(e2) {
        let { i18n: t2, notice: r2, option: a2, constructor: o2, proxy: i2, template: { $player: l2, $video: c, $poster: p } } = e2, u = 0;
        for (let t3 = 0; t3 < n.default.events.length; t3++) i2(c, n.default.events[t3], (t4) => {
          e2.emit(`video:${t4.type}`, t4);
        });
        e2.on("video:canplay", () => {
          u = 0, e2.loading.show = false;
        }), e2.once("video:canplay", () => {
          e2.loading.show = false, e2.controls.show = true, e2.mask.show = true, e2.isReady = true, e2.emit("ready");
        }), e2.on("video:ended", () => {
          a2.loop ? (e2.seek = 0, e2.play(), e2.controls.show = false, e2.mask.show = false) : (e2.controls.show = true, e2.mask.show = true);
        }), e2.on("video:error", async (i3) => {
          u < o2.RECONNECT_TIME_MAX ? (await (0, s.sleep)(o2.RECONNECT_SLEEP_TIME), u += 1, e2.url = a2.url, r2.show = `${t2.get("Reconnect")}: ${u}`, e2.emit("error", i3, u)) : (e2.mask.show = true, e2.loading.show = false, e2.controls.show = true, (0, s.addClass)(l2, "art-error"), await (0, s.sleep)(o2.RECONNECT_SLEEP_TIME), r2.show = t2.get("Video Load Failed"));
        }), e2.on("video:loadedmetadata", () => {
          e2.emit("resize"), s.isMobile && (e2.loading.show = false, e2.controls.show = true, e2.mask.show = true);
        }), e2.on("video:loadstart", () => {
          e2.loading.show = true, e2.mask.show = false, e2.controls.show = true;
        }), e2.on("video:pause", () => {
          e2.controls.show = true, e2.mask.show = true;
        }), e2.on("video:play", () => {
          e2.mask.show = false, (0, s.setStyle)(p, "display", "none");
        }), e2.on("video:playing", () => {
          e2.mask.show = false;
        }), e2.on("video:progress", () => {
          e2.playing && (e2.loading.show = false);
        }), e2.on("video:seeked", () => {
          e2.loading.show = false, e2.mask.show = true;
        }), e2.on("video:seeking", () => {
          e2.loading.show = true, e2.mask.show = false;
        }), e2.on("video:timeupdate", () => {
          e2.mask.show = false;
        }), e2.on("video:waiting", () => {
          e2.loading.show = true, e2.mask.show = false;
        });
      }
    }, { "../config": "lyjeQ", "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "8Z0Uf": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("../utils/component"), n = o.interopDefault(i), s = e("./fullscreen"), l = o.interopDefault(s), c = e("./fullscreenWeb"), p = o.interopDefault(c), u = e("./pip"), d = o.interopDefault(u), f = e("./playAndPause"), h = o.interopDefault(f), m = e("./progress"), g = o.interopDefault(m), v = e("./time"), y = o.interopDefault(v), b = e("./volume"), x = o.interopDefault(b), w = e("./setting"), j = o.interopDefault(w), k = e("./screenshot"), C = o.interopDefault(k), S = e("./airplay"), I = o.interopDefault(S), T = e("../utils");
      class $ extends n.default {
        constructor(e2) {
          super(e2), this.isHover = false, this.name = "control", this.timer = Date.now();
          let { constructor: t2 } = e2, { $player: r2, $bottom: a2 } = this.art.template;
          e2.on("mousemove", () => {
            T.isMobile || (this.show = true);
          }), e2.on("click", () => {
            T.isMobile ? this.toggle() : this.show = true;
          }), e2.on("document:mousemove", (e3) => {
            this.isHover = (0, T.includeFromEvent)(e3, a2);
          }), e2.on("video:timeupdate", () => {
            !e2.setting.show && !this.isHover && !e2.isInput && e2.playing && this.show && Date.now() - this.timer >= t2.CONTROL_HIDE_TIME && (this.show = false);
          }), e2.on("control", (e3) => {
            e3 ? ((0, T.removeClass)(r2, "art-hide-cursor"), (0, T.addClass)(r2, "art-hover"), this.timer = Date.now()) : ((0, T.addClass)(r2, "art-hide-cursor"), (0, T.removeClass)(r2, "art-hover"));
          }), this.init();
        }
        init() {
          let { option: e2 } = this.art;
          e2.isLive || this.add((0, g.default)({ name: "progress", position: "top", index: 10 })), this.add({ name: "thumbnails", position: "top", index: 20 }), this.add((0, h.default)({ name: "playAndPause", position: "left", index: 10 })), this.add((0, x.default)({ name: "volume", position: "left", index: 20 })), e2.isLive || this.add((0, y.default)({ name: "time", position: "left", index: 30 })), e2.quality.length && (0, T.sleep)().then(() => {
            this.art.quality = e2.quality;
          }), e2.screenshot && !T.isMobile && this.add((0, C.default)({ name: "screenshot", position: "right", index: 20 })), e2.setting && this.add((0, j.default)({ name: "setting", position: "right", index: 30 })), e2.pip && this.add((0, d.default)({ name: "pip", position: "right", index: 40 })), e2.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0, I.default)({ name: "airplay", position: "right", index: 50 })), e2.fullscreenWeb && this.add((0, p.default)({ name: "fullscreenWeb", position: "right", index: 60 })), e2.fullscreen && this.add((0, l.default)({ name: "fullscreen", position: "right", index: 70 }));
          for (let t2 = 0; t2 < e2.controls.length; t2++) this.add(e2.controls[t2]);
        }
        add(e2) {
          let t2 = "function" == typeof e2 ? e2(this.art) : e2, { $progress: r2, $controlsLeft: a2, $controlsRight: o2 } = this.art.template;
          switch (t2.position) {
            case "top":
              this.$parent = r2;
              break;
            case "left":
              this.$parent = a2;
              break;
            case "right":
              this.$parent = o2;
              break;
            default:
              (0, T.errorHandle)(false, "Control option.position must one of 'top', 'left', 'right'");
          }
          super.add(t2);
        }
        check(e2) {
          e2.$control_value.innerHTML = e2.html;
          for (let t2 = 0; t2 < e2.$control_option.length; t2++) {
            let r2 = e2.$control_option[t2];
            r2.default = r2 === e2, r2.default && (0, T.inverseClass)(r2.$control_item, "art-current");
          }
        }
        selector(e2, t2, r2) {
          let { proxy: a2 } = this.art.events;
          (0, T.addClass)(t2, "art-control-selector");
          let o2 = (0, T.createElement)("div");
          (0, T.addClass)(o2, "art-selector-value"), (0, T.append)(o2, e2.html), t2.innerText = "", (0, T.append)(t2, o2);
          let i2 = (0, T.createElement)("div");
          (0, T.addClass)(i2, "art-selector-list"), (0, T.append)(t2, i2);
          for (let t3 = 0; t3 < e2.selector.length; t3++) {
            let r3 = e2.selector[t3], a3 = (0, T.createElement)("div");
            (0, T.addClass)(a3, "art-selector-item"), r3.default && (0, T.addClass)(a3, "art-current"), a3.dataset.index = t3, a3.dataset.value = r3.value, a3.innerHTML = r3.html, (0, T.append)(i2, a3), (0, T.def)(r3, "$control_option", { get: () => e2.selector }), (0, T.def)(r3, "$control_item", { get: () => a3 }), (0, T.def)(r3, "$control_value", { get: () => o2 });
          }
          let n2 = a2(i2, "click", async (t3) => {
            let r3 = t3.composedPath() || [], a3 = e2.selector.find((e3) => e3.$control_item === r3.find((t4) => e3.$control_item === t4));
            this.check(a3), e2.onSelect && (o2.innerHTML = await e2.onSelect.call(this.art, a3, a3.$control_item, t3));
          });
          r2.push(n2);
        }
      }
      r.default = $;
    }, { "../utils/component": "18nVI", "./fullscreen": "c61Lj", "./fullscreenWeb": "03jeB", "./pip": "u8l8e", "./playAndPause": "ebXtb", "./progress": "bgoVP", "./time": "ikc2j", "./volume": "b8NFx", "./setting": "03o9l", "./screenshot": "4KCF5", "./airplay": "4IS2d", "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "18nVI": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./dom"), n = e("./error"), s = e("option-validator"), l = o.interopDefault(s), c = e("../scheme");
      r.default = class {
        constructor(e2) {
          this.id = 0, this.art = e2, this.cache = /* @__PURE__ */ new Map(), this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.update = this.update.bind(this);
        }
        get show() {
          return (0, i.hasClass)(this.art.template.$player, `art-${this.name}-show`);
        }
        set show(e2) {
          let { $player: t2 } = this.art.template, r2 = `art-${this.name}-show`;
          e2 ? (0, i.addClass)(t2, r2) : (0, i.removeClass)(t2, r2), this.art.emit(this.name, e2);
        }
        toggle() {
          this.show = !this.show;
        }
        add(e2) {
          let t2 = "function" == typeof e2 ? e2(this.art) : e2;
          if (t2.html = t2.html || "", (0, l.default)(t2, c.ComponentOption), !this.$parent || !this.name || t2.disable) return;
          let r2 = t2.name || `${this.name}${this.id}`, a2 = this.cache.get(r2);
          (0, n.errorHandle)(!a2, `Can't add an existing [${r2}] to the [${this.name}]`), this.id += 1;
          let o2 = (0, i.createElement)("div");
          (0, i.addClass)(o2, `art-${this.name}`), (0, i.addClass)(o2, `art-${this.name}-${r2}`);
          let s2 = Array.from(this.$parent.children);
          o2.dataset.index = t2.index || this.id;
          let p = s2.find((e3) => Number(e3.dataset.index) >= Number(o2.dataset.index));
          p ? p.insertAdjacentElement("beforebegin", o2) : (0, i.append)(this.$parent, o2), t2.html && (0, i.append)(o2, t2.html), t2.style && (0, i.setStyles)(o2, t2.style), t2.tooltip && (0, i.tooltip)(o2, t2.tooltip);
          let u = [];
          if (t2.click) {
            let e3 = this.art.events.proxy(o2, "click", (e4) => {
              e4.preventDefault(), t2.click.call(this.art, this, e4);
            });
            u.push(e3);
          }
          return t2.selector && ["left", "right"].includes(t2.position) && this.selector(t2, o2, u), this[r2] = o2, this.cache.set(r2, { $ref: o2, events: u, option: t2 }), t2.mounted && t2.mounted.call(this.art, o2), o2;
        }
        remove(e2) {
          let t2 = this.cache.get(e2);
          (0, n.errorHandle)(t2, `Can't find [${e2}] from the [${this.name}]`), t2.option.beforeUnmount && t2.option.beforeUnmount.call(this.art, t2.$ref);
          for (let e3 = 0; e3 < t2.events.length; e3++) this.art.events.remove(t2.events[e3]);
          this.cache.delete(e2), delete this[e2], (0, i.remove)(t2.$ref);
        }
        update(e2) {
          let t2 = this.cache.get(e2.name);
          return t2 && (e2 = Object.assign(t2.option, e2), this.remove(e2.name)), this.add(e2);
        }
      };
    }, { "./dom": "bSNiV", "./error": "hwmZz", "option-validator": "bAWi2", "../scheme": "AKEiO", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], c61Lj: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("Fullscreen"), mounted: (e3) => {
          let { proxy: r2, icons: a2, i18n: o2 } = t2, n2 = (0, i.append)(e3, a2.fullscreenOn), s = (0, i.append)(e3, a2.fullscreenOff);
          (0, i.setStyle)(s, "display", "none"), r2(e3, "click", () => {
            t2.fullscreen = !t2.fullscreen;
          }), t2.on("fullscreen", (t3) => {
            t3 ? ((0, i.tooltip)(e3, o2.get("Exit Fullscreen")), (0, i.setStyle)(n2, "display", "none"), (0, i.setStyle)(s, "display", "inline-flex")) : ((0, i.tooltip)(e3, o2.get("Fullscreen")), (0, i.setStyle)(n2, "display", "inline-flex"), (0, i.setStyle)(s, "display", "none"));
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "03jeB": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("Web Fullscreen"), mounted: (e3) => {
          let { proxy: r2, icons: a2, i18n: o2 } = t2, n2 = (0, i.append)(e3, a2.fullscreenWebOn), s = (0, i.append)(e3, a2.fullscreenWebOff);
          (0, i.setStyle)(s, "display", "none"), r2(e3, "click", () => {
            t2.fullscreenWeb = !t2.fullscreenWeb;
          }), t2.on("fullscreenWeb", (t3) => {
            t3 ? ((0, i.tooltip)(e3, o2.get("Exit Web Fullscreen")), (0, i.setStyle)(n2, "display", "none"), (0, i.setStyle)(s, "display", "inline-flex")) : ((0, i.tooltip)(e3, o2.get("Web Fullscreen")), (0, i.setStyle)(n2, "display", "inline-flex"), (0, i.setStyle)(s, "display", "none"));
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], u8l8e: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("PIP Mode"), mounted: (e3) => {
          let { proxy: r2, icons: a2, i18n: o2 } = t2;
          (0, i.append)(e3, a2.pip), r2(e3, "click", () => {
            t2.pip = !t2.pip;
          }), t2.on("pip", (t3) => {
            (0, i.tooltip)(e3, o2.get(t3 ? "Exit PIP Mode" : "PIP Mode"));
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], ebXtb: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, mounted: (e3) => {
          let { proxy: r2, icons: a2, i18n: o2 } = t2, n2 = (0, i.append)(e3, a2.play), s = (0, i.append)(e3, a2.pause);
          function l() {
            (0, i.setStyle)(n2, "display", "flex"), (0, i.setStyle)(s, "display", "none");
          }
          function c() {
            (0, i.setStyle)(n2, "display", "none"), (0, i.setStyle)(s, "display", "flex");
          }
          (0, i.tooltip)(n2, o2.get("Play")), (0, i.tooltip)(s, o2.get("Pause")), r2(n2, "click", () => {
            t2.play();
          }), r2(s, "click", () => {
            t2.pause();
          }), t2.playing ? c() : l(), t2.on("video:playing", () => {
            c();
          }), t2.on("video:pause", () => {
            l();
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], bgoVP: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "getPosFromEvent", () => n), o.export(r, "setCurrentTime", () => s), o.export(r, "default", () => l);
      var i = e("../utils");
      function n(e2, t2) {
        let { $progress: r2 } = e2.template, { left: a2 } = (0, i.getRect)(r2), o2 = i.isMobile ? t2.touches[0].clientX : t2.clientX, n2 = (0, i.clamp)(o2 - a2, 0, r2.clientWidth), s2 = n2 / r2.clientWidth * e2.duration, l2 = (0, i.secondToTime)(s2), c = (0, i.clamp)(n2 / r2.clientWidth, 0, 1);
        return { second: s2, time: l2, width: n2, percentage: c };
      }
      function s(e2, t2) {
        if (e2.isRotate) {
          let r2 = t2.touches[0].clientY / e2.height, a2 = r2 * e2.duration;
          e2.emit("setBar", "played", r2, t2), e2.seek = a2;
        } else {
          let { second: r2, percentage: a2 } = n(e2, t2);
          e2.emit("setBar", "played", a2, t2), e2.seek = r2;
        }
      }
      function l(e2) {
        return (t2) => {
          let { icons: r2, option: a2, proxy: o2 } = t2;
          return { ...e2, html: `<div class="art-control-progress-inner"><div class="art-progress-hover"></div><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>`, mounted: (e3) => {
            let l2 = null, c = false, p = (0, i.query)(".art-progress-hover", e3), u = (0, i.query)(".art-progress-loaded", e3), d = (0, i.query)(".art-progress-played", e3), f = (0, i.query)(".art-progress-highlight", e3), h = (0, i.query)(".art-progress-indicator", e3), m = (0, i.query)(".art-progress-tip", e3);
            function g(r3, a3) {
              let { width: o3, time: s2 } = a3 || n(t2, r3);
              m.innerText = s2;
              let l3 = m.clientWidth;
              o3 <= l3 / 2 ? (0, i.setStyle)(m, "left", 0) : o3 > e3.clientWidth - l3 / 2 ? (0, i.setStyle)(m, "left", `${e3.clientWidth - l3}px`) : (0, i.setStyle)(m, "left", `${o3 - l3 / 2}px`);
            }
            r2.indicator ? (0, i.append)(h, r2.indicator) : (0, i.setStyle)(h, "backgroundColor", "var(--art-theme)"), t2.on("setBar", function(r3, a3, o3) {
              let n2 = "played" === r3 && o3 && i.isMobile;
              "loaded" === r3 && (0, i.setStyle)(u, "width", `${100 * a3}%`), "hover" === r3 && (0, i.setStyle)(p, "width", `${100 * a3}%`), "played" === r3 && ((0, i.setStyle)(d, "width", `${100 * a3}%`), (0, i.setStyle)(h, "left", `${100 * a3}%`)), n2 && ((0, i.setStyle)(m, "display", "flex"), g(o3, { width: e3.clientWidth * a3, time: (0, i.secondToTime)(a3 * t2.duration) }), clearTimeout(l2), l2 = setTimeout(() => {
                (0, i.setStyle)(m, "display", "none");
              }, 500));
            }), t2.on("video:loadedmetadata", function() {
              f.innerText = "";
              for (let e4 = 0; e4 < a2.highlight.length; e4++) {
                let r3 = a2.highlight[e4], o3 = (0, i.clamp)(r3.time, 0, t2.duration) / t2.duration * 100, n2 = `<span data-text="${r3.text}" data-time="${r3.time}" style="left: ${o3}%"></span>`;
                (0, i.append)(f, n2);
              }
            }), t2.on("video:progress", () => {
              t2.emit("setBar", "loaded", t2.loaded);
            }), t2.constructor.USE_RAF ? t2.on("raf", () => {
              t2.emit("setBar", "played", t2.played);
            }) : t2.on("video:timeupdate", () => {
              t2.emit("setBar", "played", t2.played);
            }), t2.on("video:ended", () => {
              t2.emit("setBar", "played", 1);
            }), t2.emit("setBar", "loaded", t2.loaded || 0), i.isMobile || (o2(e3, "click", (e4) => {
              e4.target !== h && s(t2, e4);
            }), o2(e3, "mousemove", (r3) => {
              let { percentage: a3 } = n(t2, r3);
              if (t2.emit("setBar", "hover", a3, r3), (0, i.setStyle)(m, "display", "flex"), (0, i.includeFromEvent)(r3, f)) {
                let { width: a4 } = n(t2, r3), { text: o3 } = r3.target.dataset;
                m.innerText = o3;
                let s2 = m.clientWidth;
                a4 <= s2 / 2 ? (0, i.setStyle)(m, "left", 0) : a4 > e3.clientWidth - s2 / 2 ? (0, i.setStyle)(m, "left", `${e3.clientWidth - s2}px`) : (0, i.setStyle)(m, "left", `${a4 - s2 / 2}px`);
              } else g(r3);
            }), o2(e3, "mouseleave", (e4) => {
              (0, i.setStyle)(m, "display", "none"), t2.emit("setBar", "hover", 0, e4);
            }), o2(e3, "mousedown", (e4) => {
              c = 0 === e4.button;
            }), t2.on("document:mousemove", (e4) => {
              if (c) {
                let { second: r3, percentage: a3 } = n(t2, e4);
                t2.emit("setBar", "played", a3, e4), t2.seek = r3;
              }
            }), t2.on("document:mouseup", () => {
              c && (c = false);
            }));
          } };
        };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], ikc2j: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, style: i.isMobile ? { fontSize: "12px", padding: "0 5px" } : { cursor: "auto", padding: "0 10px" }, mounted: (e3) => {
          function r2() {
            let r3 = `${(0, i.secondToTime)(t2.currentTime)} / ${(0, i.secondToTime)(t2.duration)}`;
            r3 !== e3.innerText && (e3.innerText = r3);
          }
          r2();
          let a2 = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
          for (let e4 = 0; e4 < a2.length; e4++) t2.on(a2[e4], r2);
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], b8NFx: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, mounted: (e3) => {
          let { proxy: r2, icons: a2 } = t2, o2 = (0, i.append)(e3, a2.volume), n2 = (0, i.append)(e3, a2.volumeClose), s = (0, i.append)(e3, '<div class="art-volume-panel"></div>'), l = (0, i.append)(s, '<div class="art-volume-inner"></div>'), c = (0, i.append)(l, '<div class="art-volume-val"></div>'), p = (0, i.append)(l, '<div class="art-volume-slider"></div>'), u = (0, i.append)(p, '<div class="art-volume-handle"></div>'), d = (0, i.append)(u, '<div class="art-volume-loaded"></div>'), f = (0, i.append)(p, '<div class="art-volume-indicator"></div>');
          function h(e4) {
            let { top: t3, height: r3 } = (0, i.getRect)(p);
            return 1 - (e4.clientY - t3) / r3;
          }
          function m() {
            if (t2.muted || 0 === t2.volume) (0, i.setStyle)(o2, "display", "none"), (0, i.setStyle)(n2, "display", "flex"), (0, i.setStyle)(f, "top", "100%"), (0, i.setStyle)(d, "top", "100%"), c.innerText = 0;
            else {
              let e4 = 100 * t2.volume;
              (0, i.setStyle)(o2, "display", "flex"), (0, i.setStyle)(n2, "display", "none"), (0, i.setStyle)(f, "top", `${100 - e4}%`), (0, i.setStyle)(d, "top", `${100 - e4}%`), c.innerText = Math.floor(e4);
            }
          }
          if (m(), t2.on("video:volumechange", m), r2(o2, "click", () => {
            t2.muted = true;
          }), r2(n2, "click", () => {
            t2.muted = false;
          }), i.isMobile) (0, i.setStyle)(s, "display", "none");
          else {
            let e4 = false;
            r2(p, "mousedown", (r3) => {
              e4 = 0 === r3.button, t2.volume = h(r3);
            }), t2.on("document:mousemove", (r3) => {
              e4 && (t2.muted = false, t2.volume = h(r3));
            }), t2.on("document:mouseup", () => {
              e4 && (e4 = false);
            });
          }
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "03o9l": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("Show Setting"), mounted: (e3) => {
          let { proxy: r2, icons: a2, i18n: o2 } = t2;
          (0, i.append)(e3, a2.setting), r2(e3, "click", () => {
            t2.setting.toggle(), t2.setting.resize();
          }), t2.on("setting", (t3) => {
            (0, i.tooltip)(e3, o2.get(t3 ? "Hide Setting" : "Show Setting"));
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "4KCF5": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("Screenshot"), mounted: (e3) => {
          let { proxy: r2, icons: a2 } = t2;
          (0, i.append)(e3, a2.screenshot), r2(e3, "click", () => {
            t2.screenshot();
          });
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "4IS2d": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => ({ ...e2, tooltip: t2.i18n.get("AirPlay"), mounted: (e3) => {
          let { proxy: r2, icons: a2 } = t2;
          (0, i.append)(e3, a2.airplay), r2(e3, "click", () => t2.airplay());
        } });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "2KYsr": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("../utils"), n = e("../utils/component"), s = o.interopDefault(n), l = e("./playbackRate"), c = o.interopDefault(l), p = e("./aspectRatio"), u = o.interopDefault(p), d = e("./flip"), f = o.interopDefault(d), h = e("./info"), m = o.interopDefault(h), g = e("./version"), v = o.interopDefault(g), y = e("./close"), b = o.interopDefault(y);
      class x extends s.default {
        constructor(e2) {
          super(e2), this.name = "contextmenu", this.$parent = e2.template.$contextmenu, i.isMobile || this.init();
        }
        init() {
          let { option: e2, proxy: t2, template: { $player: r2, $contextmenu: a2 } } = this.art;
          e2.playbackRate && this.add((0, c.default)({ name: "playbackRate", index: 10 })), e2.aspectRatio && this.add((0, u.default)({ name: "aspectRatio", index: 20 })), e2.flip && this.add((0, f.default)({ name: "flip", index: 30 })), this.add((0, m.default)({ name: "info", index: 40 })), this.add((0, v.default)({ name: "version", index: 50 })), this.add((0, b.default)({ name: "close", index: 60 }));
          for (let t3 = 0; t3 < e2.contextmenu.length; t3++) this.add(e2.contextmenu[t3]);
          t2(r2, "contextmenu", (e3) => {
            if (!this.art.constructor.CONTEXTMENU) return;
            e3.preventDefault(), this.show = true;
            let t3 = e3.clientX, o2 = e3.clientY, { height: n2, width: s2, left: l2, top: c2 } = (0, i.getRect)(r2), { height: p2, width: u2 } = (0, i.getRect)(a2), d2 = t3 - l2, f2 = o2 - c2;
            t3 + u2 > l2 + s2 && (d2 = s2 - u2), o2 + p2 > c2 + n2 && (f2 = n2 - p2), (0, i.setStyles)(a2, { top: `${f2}px`, left: `${d2}px` });
          }), t2(r2, "click", (e3) => {
            (0, i.includeFromEvent)(e3, a2) || (this.show = false);
          }), this.art.on("blur", () => {
            this.show = false;
          });
        }
      }
      r.default = x;
    }, { "../utils": "71aH7", "../utils/component": "18nVI", "./playbackRate": "69eLi", "./aspectRatio": "lUefg", "./flip": "kysiM", "./info": "gqIgJ", "./version": "kRU7C", "./close": "jQ8Pm", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "69eLi": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => {
          let { i18n: r2, constructor: { PLAYBACK_RATE: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${1 === e3 ? r2.get("Normal") : e3.toFixed(1)}</span>`).join("");
          return { ...e2, html: `${r2.get("Play Speed")}: ${o2}`, click: (e3, r3) => {
            let { value: a3 } = r3.target.dataset;
            a3 && (t2.playbackRate = Number(a3), e3.show = false);
          }, mounted: (e3) => {
            let r3 = (0, i.query)('[data-value="1"]', e3);
            r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("video:ratechange", () => {
              let r4 = (0, i.queryAll)("span", e3).find((e4) => Number(e4.dataset.value) === t2.playbackRate);
              r4 && (0, i.inverseClass)(r4, "art-current");
            });
          } };
        };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], lUefg: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => {
          let { i18n: r2, constructor: { ASPECT_RATIO: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${"default" === e3 ? r2.get("Default") : e3}</span>`).join("");
          return { ...e2, html: `${r2.get("Aspect Ratio")}: ${o2}`, click: (e3, r3) => {
            let { value: a3 } = r3.target.dataset;
            a3 && (t2.aspectRatio = a3, e3.show = false);
          }, mounted: (e3) => {
            let r3 = (0, i.query)('[data-value="default"]', e3);
            r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("aspectRatio", (t3) => {
              let r4 = (0, i.queryAll)("span", e3).find((e4) => e4.dataset.value === t3);
              r4 && (0, i.inverseClass)(r4, "art-current");
            });
          } };
        };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], kysiM: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return (t2) => {
          let { i18n: r2, constructor: { FLIP: a2 } } = t2, o2 = a2.map((e3) => `<span data-value="${e3}">${r2.get((0, i.capitalize)(e3))}</span>`).join("");
          return { ...e2, html: `${r2.get("Video Flip")}: ${o2}`, click: (e3, r3) => {
            let { value: a3 } = r3.target.dataset;
            a3 && (t2.flip = a3.toLowerCase(), e3.show = false);
          }, mounted: (e3) => {
            let r3 = (0, i.query)('[data-value="normal"]', e3);
            r3 && (0, i.inverseClass)(r3, "art-current"), t2.on("flip", (t3) => {
              let r4 = (0, i.queryAll)("span", e3).find((e4) => e4.dataset.value === t3);
              r4 && (0, i.inverseClass)(r4, "art-current");
            });
          } };
        };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], gqIgJ: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        return (t2) => ({ ...e2, html: t2.i18n.get("Video Info"), click: (e3) => {
          t2.info.show = true, e3.show = false;
        } });
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], kRU7C: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        return { ...e2, html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 5.2.3</a>' };
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], jQ8Pm: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        return (t2) => ({ ...e2, html: t2.i18n.get("Close"), click: (e3) => {
          e3.show = false;
        } });
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "02ajl": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./utils"), n = e("./utils/component"), s = o.interopDefault(n);
      class l extends s.default {
        constructor(e2) {
          super(e2), this.name = "info", i.isMobile || this.init();
        }
        init() {
          let { proxy: e2, constructor: t2, template: { $infoPanel: r2, $infoClose: a2, $video: o2 } } = this.art;
          e2(a2, "click", () => {
            this.show = false;
          });
          let n2 = null, s2 = (0, i.queryAll)("[data-video]", r2) || [];
          this.art.on("destroy", () => clearTimeout(n2)), !function e3() {
            for (let e4 = 0; e4 < s2.length; e4++) {
              let t3 = s2[e4], r3 = o2[t3.dataset.video], a3 = "number" == typeof r3 ? r3.toFixed(2) : r3;
              t3.innerText !== a3 && (t3.innerText = a3);
            }
            n2 = setTimeout(e3, t2.INFO_LOOP_TIME);
          }();
        }
      }
      r.default = l;
    }, { "./utils": "71aH7", "./utils/component": "18nVI", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], eSWto: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./utils"), n = e("./utils/component"), s = o.interopDefault(n), l = e("option-validator"), c = o.interopDefault(l), p = e("./scheme"), u = o.interopDefault(p);
      class d extends s.default {
        constructor(e2) {
          super(e2), this.name = "subtitle", this.option = null, this.destroyEvent = () => null, this.init(e2.option.subtitle);
          let t2 = false;
          e2.on("video:timeupdate", () => {
            if (!this.url) return;
            let e3 = this.art.template.$video.webkitDisplayingFullscreen;
            "boolean" == typeof e3 && e3 !== t2 && (t2 = e3, this.createTrack(e3 ? "subtitles" : "metadata", this.url));
          });
        }
        get url() {
          return this.art.template.$track.src;
        }
        set url(e2) {
          this.switch(e2);
        }
        get textTrack() {
          var _a, _b;
          return (_b = (_a = this.art.template.$video) == null ? void 0 : _a.textTracks) == null ? void 0 : _b[0];
        }
        get activeCues() {
          return this.textTrack ? Array.from(this.textTrack.activeCues) : [];
        }
        get cues() {
          return this.textTrack ? Array.from(this.textTrack.cues) : [];
        }
        style(e2, t2) {
          let { $subtitle: r2 } = this.art.template;
          return "object" == typeof e2 ? (0, i.setStyles)(r2, e2) : (0, i.setStyle)(r2, e2, t2);
        }
        update() {
          let { option: { subtitle: e2 }, template: { $subtitle: t2 } } = this.art;
          t2.innerHTML = "", this.activeCues.length && (this.art.emit("subtitleBeforeUpdate", this.activeCues), t2.innerHTML = this.activeCues.map((t3, r2) => t3.text.split(/\r?\n/).filter((e3) => e3.trim()).map((t4) => `<div class="art-subtitle-line" data-group="${r2}">${e2.escape ? (0, i.escape)(t4) : t4}</div>`).join("")).join(""), this.art.emit("subtitleAfterUpdate", this.activeCues));
        }
        async switch(e2, t2 = {}) {
          let { i18n: r2, notice: a2, option: o2 } = this.art, i2 = { ...o2.subtitle, ...t2, url: e2 }, n2 = await this.init(i2);
          return t2.name && (a2.show = `${r2.get("Switch Subtitle")}: ${t2.name}`), n2;
        }
        createTrack(e2, t2) {
          let { template: r2, proxy: a2, option: o2 } = this.art, { $video: n2, $track: s2 } = r2, l2 = (0, i.createElement)("track");
          l2.default = true, l2.kind = e2, l2.src = t2, l2.label = o2.subtitle.name || "Artplayer", l2.track.mode = "hidden", l2.onload = () => {
            this.art.emit("subtitleLoad", this.cues, this.option);
          }, this.art.events.remove(this.destroyEvent), s2.onload = null, (0, i.remove)(s2), (0, i.append)(n2, l2), r2.$track = l2, this.destroyEvent = a2(this.textTrack, "cuechange", () => this.update());
        }
        async init(e2) {
          let { notice: t2, template: { $subtitle: r2 } } = this.art;
          return this.textTrack ? ((0, c.default)(e2, u.default.subtitle), e2.url) ? (this.option = e2, this.style(e2.style), fetch(e2.url).then((e3) => e3.arrayBuffer()).then((t3) => {
            let r3 = new TextDecoder(e2.encoding).decode(t3);
            switch (e2.type || (0, i.getExt)(e2.url)) {
              case "srt": {
                let t4 = (0, i.srtToVtt)(r3), a2 = e2.onVttLoad(t4);
                return (0, i.vttToBlob)(a2);
              }
              case "ass": {
                let t4 = (0, i.assToVtt)(r3), a2 = e2.onVttLoad(t4);
                return (0, i.vttToBlob)(a2);
              }
              case "vtt": {
                let t4 = e2.onVttLoad(r3);
                return (0, i.vttToBlob)(t4);
              }
              default:
                return e2.url;
            }
          }).then((e3) => (r2.innerHTML = "", this.url === e3 || (URL.revokeObjectURL(this.url), this.createTrack("metadata", e3)), e3)).catch((e3) => {
            throw r2.innerHTML = "", t2.show = e3, e3;
          })) : void 0 : null;
        }
      }
      r.default = d;
    }, { "./utils": "71aH7", "./utils/component": "18nVI", "option-validator": "bAWi2", "./scheme": "AKEiO", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], jo4S1: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./clickInit"), n = o.interopDefault(i), s = e("./hoverInit"), l = o.interopDefault(s), c = e("./moveInit"), p = o.interopDefault(c), u = e("./resizeInit"), d = o.interopDefault(u), f = e("./gestureInit"), h = o.interopDefault(f), m = e("./viewInit"), g = o.interopDefault(m), v = e("./documentInit"), y = o.interopDefault(v), b = e("./updateInit"), x = o.interopDefault(b), w = e("./restoreInit"), j = o.interopDefault(w);
      r.default = class {
        constructor(e2) {
          this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), (0, n.default)(e2, this), (0, l.default)(e2, this), (0, p.default)(e2, this), (0, d.default)(e2, this), (0, h.default)(e2, this), (0, g.default)(e2, this), (0, y.default)(e2, this), (0, x.default)(e2, this), (0, j.default)(e2, this);
        }
        proxy(e2, t2, r2, a2 = {}) {
          if (Array.isArray(t2)) return t2.map((t3) => this.proxy(e2, t3, r2, a2));
          e2.addEventListener(t2, r2, a2);
          let o2 = () => e2.removeEventListener(t2, r2, a2);
          return this.destroyEvents.push(o2), o2;
        }
        hover(e2, t2, r2) {
          t2 && this.proxy(e2, "mouseenter", t2), r2 && this.proxy(e2, "mouseleave", r2);
        }
        remove(e2) {
          let t2 = this.destroyEvents.indexOf(e2);
          t2 > -1 && (e2(), this.destroyEvents.splice(t2, 1));
        }
        destroy() {
          for (let e2 = 0; e2 < this.destroyEvents.length; e2++) this.destroyEvents[e2]();
        }
      };
    }, { "./clickInit": "6UrCm", "./hoverInit": "4jWHi", "./moveInit": "eqaUm", "./resizeInit": "eDXPO", "./gestureInit": "95GtS", "./viewInit": "InUBx", "./documentInit": "hoLfM", "./updateInit": "cl8m3", "./restoreInit": "bK8As", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6UrCm": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2, t2) {
        let { constructor: r2, template: { $player: a2, $video: o2 } } = e2;
        t2.proxy(document, ["click", "contextmenu"], (t3) => {
          (0, i.includeFromEvent)(t3, a2) ? (e2.isInput = "INPUT" === t3.target.tagName, e2.isFocus = true, e2.emit("focus", t3)) : (e2.isInput = false, e2.isFocus = false, e2.emit("blur", t3));
        });
        let n2 = [];
        t2.proxy(o2, "click", (t3) => {
          let a3 = Date.now();
          n2.push(a3);
          let { MOBILE_CLICK_PLAY: o3, DBCLICK_TIME: s, MOBILE_DBCLICK_PLAY: l, DBCLICK_FULLSCREEN: c } = r2, p = n2.filter((e3) => a3 - e3 <= s);
          switch (p.length) {
            case 1:
              e2.emit("click", t3), i.isMobile ? !e2.isLock && o3 && e2.toggle() : e2.toggle(), n2 = p;
              break;
            case 2:
              e2.emit("dblclick", t3), i.isMobile ? !e2.isLock && l && e2.toggle() : c && (e2.fullscreen = !e2.fullscreen), n2 = [];
              break;
            default:
              n2 = [];
          }
        });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "4jWHi": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2, t2) {
        let { $player: r2 } = e2.template;
        t2.hover(r2, (t3) => {
          (0, i.addClass)(r2, "art-hover"), e2.emit("hover", true, t3);
        }, (t3) => {
          (0, i.removeClass)(r2, "art-hover"), e2.emit("hover", false, t3);
        });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], eqaUm: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2, t2) {
        let { $player: r2 } = e2.template;
        t2.proxy(r2, "mousemove", (t3) => {
          e2.emit("mousemove", t3);
        });
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], eDXPO: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2, t2) {
        let { option: r2, constructor: a2 } = e2;
        e2.on("resize", () => {
          let { aspectRatio: t3, notice: a3 } = e2;
          "standard" === e2.state && r2.autoSize && e2.autoSize(), e2.aspectRatio = t3, a3.show = "";
        });
        let o2 = (0, i.debounce)(() => e2.emit("resize"), a2.RESIZE_TIME);
        t2.proxy(window, ["orientationchange", "resize"], () => o2()), screen && screen.orientation && screen.orientation.onchange && t2.proxy(screen.orientation, "change", () => o2());
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "95GtS": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => s);
      var i = e("../utils"), n = e("../control/progress");
      function s(e2, t2) {
        if (i.isMobile && !e2.option.isLive) {
          let { $video: r2, $progress: a2 } = e2.template, o2 = null, s2 = false, l = 0, c = 0, p = 0, u = (t3) => {
            if (1 === t3.touches.length && !e2.isLock) {
              o2 === a2 && (0, n.setCurrentTime)(e2, t3), s2 = true;
              let { pageX: r3, pageY: i2 } = t3.touches[0];
              l = r3, c = i2, p = e2.currentTime;
            }
          }, d = (t3) => {
            if (1 === t3.touches.length && s2 && e2.duration) {
              let { pageX: a3, pageY: n2 } = t3.touches[0], s3 = function(e3, t4, r3, a4) {
                var o3 = t4 - a4, i2 = r3 - e3, n3 = 0;
                if (2 > Math.abs(i2) && 2 > Math.abs(o3)) return n3;
                var s4 = 180 * Math.atan2(o3, i2) / Math.PI;
                return s4 >= -45 && s4 < 45 ? n3 = 4 : s4 >= 45 && s4 < 135 ? n3 = 1 : s4 >= -135 && s4 < -45 ? n3 = 2 : (s4 >= 135 && s4 <= 180 || s4 >= -180 && s4 < -135) && (n3 = 3), n3;
              }(l, c, a3, n2), u2 = [3, 4].includes(s3), d2 = [1, 2].includes(s3);
              if (u2 && !e2.isRotate || d2 && e2.isRotate) {
                let s4 = (0, i.clamp)((a3 - l) / e2.width, -1, 1), u3 = (0, i.clamp)((n2 - c) / e2.height, -1, 1), d3 = e2.isRotate ? u3 : s4, f = o2 === r2 ? e2.constructor.TOUCH_MOVE_RATIO : 1, h = (0, i.clamp)(p + e2.duration * d3 * f, 0, e2.duration);
                e2.seek = h, e2.emit("setBar", "played", (0, i.clamp)(h / e2.duration, 0, 1), t3), e2.notice.show = `${(0, i.secondToTime)(h)} / ${(0, i.secondToTime)(e2.duration)}`;
              }
            }
          };
          e2.option.gesture && (t2.proxy(r2, "touchstart", (e3) => {
            o2 = r2, u(e3);
          }), t2.proxy(r2, "touchmove", d)), t2.proxy(a2, "touchstart", (e3) => {
            o2 = a2, u(e3);
          }), t2.proxy(a2, "touchmove", d), t2.proxy(document, "touchend", () => {
            s2 && (l = 0, c = 0, p = 0, s2 = false, o2 = null);
          });
        }
      }
    }, { "../utils": "71aH7", "../control/progress": "bgoVP", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], InUBx: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2, t2) {
        let { option: r2, constructor: a2, template: { $container: o2 } } = e2, n2 = (0, i.throttle)(() => {
          e2.emit("view", (0, i.isInViewport)(o2, a2.SCROLL_GAP));
        }, a2.SCROLL_TIME);
        t2.proxy(window, "scroll", () => n2()), e2.on("view", (t3) => {
          r2.autoMini && (e2.mini = !t3);
        });
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], hoLfM: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2, t2) {
        t2.proxy(document, "mousemove", (t3) => {
          e2.emit("document:mousemove", t3);
        }), t2.proxy(document, "mouseup", (t3) => {
          e2.emit("document:mouseup", t3);
        });
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], cl8m3: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        if (e2.constructor.USE_RAF) {
          let t2 = null;
          !function r2() {
            e2.playing && e2.emit("raf"), e2.isDestroy || (t2 = requestAnimationFrame(r2));
          }(), e2.on("destroy", () => {
            cancelAnimationFrame(t2);
          });
        }
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], bK8As: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2, t2) {
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6NoFy": [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var o = e("./utils");
      r.default = class {
        constructor(e2) {
          this.art = e2, this.keys = {}, e2.option.hotkey && !o.isMobile && this.init();
        }
        init() {
          let { proxy: e2, constructor: t2 } = this.art;
          this.add("Escape", () => {
            this.art.fullscreenWeb && (this.art.fullscreenWeb = false);
          }), this.add("Space", () => {
            this.art.toggle();
          }), this.add("ArrowLeft", () => {
            this.art.backward = t2.SEEK_STEP;
          }), this.add("ArrowUp", () => {
            this.art.volume += t2.VOLUME_STEP;
          }), this.add("ArrowRight", () => {
            this.art.forward = t2.SEEK_STEP;
          }), this.add("ArrowDown", () => {
            this.art.volume -= t2.VOLUME_STEP;
          }), e2(document, "keydown", (e3) => {
            if (this.art.isFocus) {
              let t3 = document.activeElement.tagName.toUpperCase(), r2 = document.activeElement.getAttribute("contenteditable");
              if ("INPUT" !== t3 && "TEXTAREA" !== t3 && "" !== r2 && "true" !== r2 && !e3.altKey && !e3.ctrlKey && !e3.metaKey && !e3.shiftKey) {
                let t4 = this.keys[e3.code];
                if (t4) {
                  e3.preventDefault();
                  for (let r3 = 0; r3 < t4.length; r3++) t4[r3].call(this.art, e3);
                  this.art.emit("hotkey", e3);
                }
              }
            }
            this.art.emit("keydown", e3);
          });
        }
        add(e2, t2) {
          return this.keys[e2] ? this.keys[e2].push(t2) : this.keys[e2] = [t2], this;
        }
        remove(e2, t2) {
          if (this.keys[e2]) {
            let r2 = this.keys[e2].indexOf(t2);
            -1 !== r2 && this.keys[e2].splice(r2, 1);
          }
          return this;
        }
      };
    }, { "./utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6G6hZ": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./utils/component"), n = o.interopDefault(i);
      class s extends n.default {
        constructor(e2) {
          super(e2);
          let { option: t2, template: { $layer: r2 } } = e2;
          this.name = "layer", this.$parent = r2;
          for (let e3 = 0; e3 < t2.layers.length; e3++) this.add(t2.layers[e3]);
        }
      }
      r.default = s;
    }, { "./utils/component": "18nVI", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "3dsEe": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./utils"), n = e("./utils/component"), s = o.interopDefault(n);
      class l extends s.default {
        constructor(e2) {
          super(e2), this.name = "loading", (0, i.append)(e2.template.$loading, e2.icons.loading);
        }
      }
      r.default = l;
    }, { "./utils": "71aH7", "./utils/component": "18nVI", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], dWGTw: [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var o = e("./utils");
      r.default = class {
        constructor(e2) {
          this.art = e2, this.timer = null;
        }
        set show(e2) {
          let { constructor: t2, template: { $player: r2, $noticeInner: a2 } } = this.art;
          e2 ? (a2.innerText = e2 instanceof Error ? e2.message.trim() : e2, (0, o.addClass)(r2, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout(() => {
            a2.innerText = "", (0, o.removeClass)(r2, "art-notice-show");
          }, t2.NOTICE_TIME)) : (0, o.removeClass)(r2, "art-notice-show");
        }
      };
    }, { "./utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5POkG": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./utils"), n = e("./utils/component"), s = o.interopDefault(n);
      class l extends s.default {
        constructor(e2) {
          super(e2), this.name = "mask";
          let { template: t2, icons: r2, events: a2 } = e2, o2 = (0, i.append)(t2.$state, r2.state), n2 = (0, i.append)(t2.$state, r2.error);
          (0, i.setStyle)(n2, "display", "none"), e2.on("destroy", () => {
            (0, i.setStyle)(o2, "display", "none"), (0, i.setStyle)(n2, "display", null);
          }), a2.proxy(t2.$state, "click", () => e2.play());
        }
      }
      r.default = l;
    }, { "./utils": "71aH7", "./utils/component": "18nVI", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "6OeNg": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("../utils"), n = e("bundle-text:./loading.svg"), s = o.interopDefault(n), l = e("bundle-text:./state.svg"), c = o.interopDefault(l), p = e("bundle-text:./check.svg"), u = o.interopDefault(p), d = e("bundle-text:./play.svg"), f = o.interopDefault(d), h = e("bundle-text:./pause.svg"), m = o.interopDefault(h), g = e("bundle-text:./volume.svg"), v = o.interopDefault(g), y = e("bundle-text:./volume-close.svg"), b = o.interopDefault(y), x = e("bundle-text:./screenshot.svg"), w = o.interopDefault(x), j = e("bundle-text:./setting.svg"), k = o.interopDefault(j), C = e("bundle-text:./arrow-left.svg"), S = o.interopDefault(C), I = e("bundle-text:./arrow-right.svg"), T = o.interopDefault(I), $ = e("bundle-text:./playback-rate.svg"), E = o.interopDefault($), M = e("bundle-text:./aspect-ratio.svg"), F = o.interopDefault(M), D = e("bundle-text:./config.svg"), H = o.interopDefault(D), A = e("bundle-text:./pip.svg"), z = o.interopDefault(A), R = e("bundle-text:./lock.svg"), O = o.interopDefault(R), Y = e("bundle-text:./unlock.svg"), L = o.interopDefault(Y), P = e("bundle-text:./fullscreen-off.svg"), V = o.interopDefault(P), q = e("bundle-text:./fullscreen-on.svg"), _ = o.interopDefault(q), N = e("bundle-text:./fullscreen-web-off.svg"), B = o.interopDefault(N), W = e("bundle-text:./fullscreen-web-on.svg"), U = o.interopDefault(W), K = e("bundle-text:./switch-on.svg"), X = o.interopDefault(K), G = e("bundle-text:./switch-off.svg"), Q = o.interopDefault(G), Z = e("bundle-text:./flip.svg"), J = o.interopDefault(Z), ee = e("bundle-text:./error.svg"), et = o.interopDefault(ee), er = e("bundle-text:./close.svg"), ea = o.interopDefault(er), eo = e("bundle-text:./airplay.svg"), ei = o.interopDefault(eo);
      r.default = class {
        constructor(e2) {
          let t2 = { loading: s.default, state: c.default, play: f.default, pause: m.default, check: u.default, volume: v.default, volumeClose: b.default, screenshot: w.default, setting: k.default, pip: z.default, arrowLeft: S.default, arrowRight: T.default, playbackRate: E.default, aspectRatio: F.default, config: H.default, lock: O.default, flip: J.default, unlock: L.default, fullscreenOff: V.default, fullscreenOn: _.default, fullscreenWebOff: B.default, fullscreenWebOn: U.default, switchOn: X.default, switchOff: Q.default, error: et.default, close: ea.default, airplay: ei.default, ...e2.option.icons };
          for (let e3 in t2) (0, i.def)(this, e3, { get: () => (0, i.getIcon)(e3, t2[e3]) });
        }
      };
    }, { "../utils": "71aH7", "bundle-text:./loading.svg": "7tDub", "bundle-text:./state.svg": "1ElZc", "bundle-text:./check.svg": "lmgoP", "bundle-text:./play.svg": "lVWoQ", "bundle-text:./pause.svg": "5Mnax", "bundle-text:./volume.svg": "w3eIa", "bundle-text:./volume-close.svg": "rHjo1", "bundle-text:./screenshot.svg": "2KcqM", "bundle-text:./setting.svg": "8rQMV", "bundle-text:./arrow-left.svg": "kqGBE", "bundle-text:./arrow-right.svg": "aFjpC", "bundle-text:./playback-rate.svg": "lx7ZM", "bundle-text:./aspect-ratio.svg": "2sEjf", "bundle-text:./config.svg": "fQTgE", "bundle-text:./pip.svg": "2CaxO", "bundle-text:./lock.svg": "aCGnW", "bundle-text:./unlock.svg": "bTrAV", "bundle-text:./fullscreen-off.svg": "bA3p0", "bundle-text:./fullscreen-on.svg": "fTuY8", "bundle-text:./fullscreen-web-off.svg": "tvKf4", "bundle-text:./fullscreen-web-on.svg": "1F1oB", "bundle-text:./switch-on.svg": "7qNHs", "bundle-text:./switch-off.svg": "28aV8", "bundle-text:./flip.svg": "1uXI6", "bundle-text:./error.svg": "9f4dh", "bundle-text:./close.svg": "4nTtS", "bundle-text:./airplay.svg": "cDPXC", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "7tDub": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="uil-default" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100"><path fill="none" d="M0 0h100v100H0z" class="bk"/><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="translate(0 -30)"><animate attributeName="opacity" begin="-1s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(30 105.98 65)"><animate attributeName="opacity" begin="-0.9166666666666666s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(60 75.98 65)"><animate attributeName="opacity" begin="-0.8333333333333334s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(90 65 65)"><animate attributeName="opacity" begin="-0.75s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(120 58.66 65)"><animate attributeName="opacity" begin="-0.6666666666666666s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(150 54.02 65)"><animate attributeName="opacity" begin="-0.5833333333333334s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(180 50 65)"><animate attributeName="opacity" begin="-0.5s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" begin="-0.4166666666666667s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" begin="-0.3333333333333333s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(-90 35 65)"><animate attributeName="opacity" begin="-0.25s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" begin="-0.16666666666666666s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect><rect width="6" height="20" x="47" y="40" fill="#fff" rx="5" ry="5" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" begin="-0.08333333333333333s" dur="1s" from="1" repeatCount="indefinite" to="0"/></rect></svg>';
    }, {}], "1ElZc": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#fff" d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12t.788-3.9 2.137-3.175q1.35-1.35 3.175-2.137T12 2t3.9.788 3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>';
    }, {}], lmgoP: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 24 24"><path fill="#fff" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>';
    }, {}], lVWoQ: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45"/></svg>';
    }, {}], "5Mnax": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2"/></svg>';
    }, {}], w3eIa: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39m4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8 8 0 0 0 19 11a8 8 0 0 0-4.554-7.222"/><path d="M15 11a4 4 0 0 0-2-3.465v6.93A4 4 0 0 0 15 11"/></svg>';
    }, {}], rHjo1: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M15 11a4 4 0 0 0-2-3.465v2.636l1.865 1.865A4 4 0 0 0 15 11"/><path d="M13.583 5.583A6 6 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8 8 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805m5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806q.322-.154.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416M11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172z"/></svg>';
    }, {}], "2KcqM": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10m0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8"/></svg>';
    }, {}], "8rQMV": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a7 7 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1 1 0 0 0-1.272.23l-1.008 1.225a7 7 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A7 7 0 0 0 4.4 8.6l-1.564.261A1 1 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.1 7.1 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a1 1 0 0 0 .835-.986V9.847a1 1 0 0 0-.836-.986M11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/></svg>';
    }, {}], kqGBE: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z"/></svg>';
    }, {}], aFjpC: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z"/></svg>';
    }, {}], lx7ZM: [function(e, t, r, a) {
      t.exports = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M10 8v8l6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2M5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8m0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
    }, {}], "2sEjf": [function(e, t, r, a) {
      t.exports = `<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;transform:translate(0,0)" viewBox="0 0 88 88"><defs><clipPath id="a"><path d="M0 0h88v88H0z"/></clipPath></defs><g clip-path="url('#a')" style="display:block"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0m-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>`;
    }, {}], fQTgE: [function(e, t, r, a) {
      t.exports = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M15 17h6v1h-6zm-4 0H3v1h8v2h1v-5h-1zm3-9h1V3h-1v2H3v1h11zm4-3v1h3V5zM6 14h1V9H6v2H3v1h3zm4-2h11v-1H10z" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
    }, {}], "2CaxO": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path d="M25 17h-8v6h8zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H9V10.97h18z"/></svg>';
    }, {}], aCGnW: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128"/></svg>';
    }, {}], bTrAV: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="icon" viewBox="0 0 1024 1024"><path fill="#fff" d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816"/></svg>';
    }, {}], bA3p0: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768zM341.333 384h-256v-85.333H256V128h85.333zM768 725.333V896h-85.333V640h256v85.333zM341.333 640v256H256V725.333H85.333V640z"/></svg>';
    }, {}], fTuY8: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256zM256 398.222V256h142.222V142.222h-256v256zm512 227.556V768H625.778v113.778h256v-256zM398.222 768H256V625.778H142.222v256h256z"/></svg>';
    }, {}], tvKf4: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="icon" viewBox="0 0 1152 1024"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0M1024 128v768H128V128zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448z"/></svg>';
    }, {}], "1F1oB": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="icon" viewBox="0 0 1152 1024"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0M1024 128v768H128V128zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384z"/></svg>';
    }, {}], "7qNHs": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" class="icon" viewBox="0 0 1664 1024"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448"/></svg>';
    }, {}], "28aV8": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" class="icon" viewBox="0 0 1740 1024"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898m-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.87 463.87 0 0 1 511.334 48.435z"/></svg>';
    }, {}], "1uXI6": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M554.667 810.667V896h-85.334v-85.333zm-384-632.662a42.67 42.67 0 0 1 34.986 18.219l203.904 291.328a42.67 42.67 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667m682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.67 42.67 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.67 42.67 0 0 1 34.944-18.219M554.667 640v85.333h-85.334V640zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334zm0-170.667V384h-85.334v-85.333zm0-170.667v85.333h-85.334V128z"/></svg>';
    }, {}], "9f4dh": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.1 93.1 0 0 1 34.448 33.341M512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88m0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2"/></svg>';
    }, {}], "4nTtS": [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="icon" viewBox="0 0 1024 1024"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733z"/></svg>';
    }, {}], cDPXC: [function(e, t, r, a) {
      t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/><path d="M4 17h10l-5-6z"/></g></svg>';
    }, {}], "3eYNH": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("./flip"), n = o.interopDefault(i), s = e("./aspectRatio"), l = o.interopDefault(s), c = e("./playbackRate"), p = o.interopDefault(c), u = e("./subtitleOffset"), d = o.interopDefault(u), f = e("../utils/component"), h = o.interopDefault(f), m = e("../utils");
      class g extends h.default {
        constructor(e2) {
          super(e2);
          let { option: t2, controls: r2, template: { $setting: a2 } } = e2;
          this.name = "setting", this.$parent = a2, this.id = 0, this.active = null, this.cache = /* @__PURE__ */ new Map(), this.option = [...this.builtin, ...t2.settings], t2.setting && (this.format(), this.render(), e2.on("blur", () => {
            this.show && (this.show = false, this.render());
          }), e2.on("focus", (e3) => {
            let t3 = (0, m.includeFromEvent)(e3, r2.setting), a3 = (0, m.includeFromEvent)(e3, this.$parent);
            !this.show || t3 || a3 || (this.show = false, this.render());
          }), e2.on("resize", () => this.resize()));
        }
        get builtin() {
          let e2 = [], { option: t2 } = this.art;
          return t2.playbackRate && e2.push((0, p.default)(this.art)), t2.aspectRatio && e2.push((0, l.default)(this.art)), t2.flip && e2.push((0, n.default)(this.art)), t2.subtitleOffset && e2.push((0, d.default)(this.art)), e2;
        }
        traverse(e2, t2 = this.option) {
          var _a;
          for (let r2 = 0; r2 < t2.length; r2++) {
            let a2 = t2[r2];
            e2(a2), ((_a = a2.selector) == null ? void 0 : _a.length) && this.traverse.call(this, e2, a2.selector);
          }
        }
        check(e2) {
          e2.$parent.tooltip = e2.html, this.traverse((t2) => {
            t2.default = t2 === e2, t2.default && t2.$item && (0, m.inverseClass)(t2.$item, "art-current");
          }, e2.$option), this.render(e2.$parents);
        }
        format(e2 = this.option, t2, r2, a2 = []) {
          for (let o2 = 0; o2 < e2.length; o2++) {
            let i2 = e2[o2];
            if ((i2 == null ? void 0 : i2.name) ? ((0, m.errorHandle)(!a2.includes(i2.name), `The [${i2.name}] is already exist in [setting]`), a2.push(i2.name)) : i2.name = `setting-${this.id++}`, !i2.$formatted) {
              (0, m.def)(i2, "$parent", { get: () => t2 }), (0, m.def)(i2, "$parents", { get: () => r2 }), (0, m.def)(i2, "$option", { get: () => e2 });
              let a3 = [];
              (0, m.def)(i2, "$events", { get: () => a3 }), (0, m.def)(i2, "$formatted", { get: () => true });
            }
            this.format(i2.selector || [], i2, e2, a2);
          }
          this.option = e2;
        }
        find(e2 = "") {
          let t2 = null;
          return this.traverse((r2) => {
            r2.name === e2 && (t2 = r2);
          }), t2;
        }
        resize() {
          var _a, _b;
          let { controls: e2, constructor: { SETTING_WIDTH: t2, SETTING_ITEM_HEIGHT: r2 }, template: { $player: a2, $setting: o2 } } = this.art;
          if (e2.setting && this.show) {
            let i2 = ((_b = (_a = this.active[0]) == null ? void 0 : _a.$parent) == null ? void 0 : _b.width) || t2, { left: n2, width: s2 } = (0, m.getRect)(e2.setting), { left: l2, width: c2 } = (0, m.getRect)(a2), p2 = n2 - l2 + s2 / 2 - i2 / 2, u2 = this.active === this.option ? this.active.length * r2 : (this.active.length + 1) * r2;
            if ((0, m.setStyle)(o2, "height", `${u2}px`), (0, m.setStyle)(o2, "width", `${i2}px`), this.art.isRotate || m.isMobile) return;
            p2 + i2 > c2 ? ((0, m.setStyle)(o2, "left", null), (0, m.setStyle)(o2, "right", null)) : ((0, m.setStyle)(o2, "left", `${p2}px`), (0, m.setStyle)(o2, "right", "auto"));
          }
        }
        inactivate(e2) {
          for (let t2 = 0; t2 < e2.$events.length; t2++) this.art.events.remove(e2.$events[t2]);
          e2.$events.length = 0;
        }
        remove(e2) {
          let t2 = this.find(e2);
          (0, m.errorHandle)(t2, `Can't find [${e2}] in the [setting]`);
          let r2 = t2.$option.indexOf(t2);
          t2.$option.splice(r2, 1), this.inactivate(t2), t2.$item && (0, m.remove)(t2.$item), this.render();
        }
        update(e2) {
          let t2 = this.find(e2.name);
          return t2 ? (this.inactivate(t2), Object.assign(t2, e2), this.format(), this.creatItem(t2, true), this.render(), t2) : this.add(e2);
        }
        add(e2, t2 = this.option) {
          return t2.push(e2), this.format(), this.creatItem(e2), this.render(), e2;
        }
        creatHeader(e2) {
          if (!this.cache.has(e2.$option)) return;
          let t2 = this.cache.get(e2.$option), { proxy: r2, icons: { arrowLeft: a2 }, constructor: { SETTING_ITEM_HEIGHT: o2 } } = this.art, i2 = (0, m.createElement)("div");
          (0, m.setStyle)(i2, "height", `${o2}px`), (0, m.addClass)(i2, "art-setting-item"), (0, m.addClass)(i2, "art-setting-item-back");
          let n2 = (0, m.append)(i2, '<div class="art-setting-item-left"></div>'), s2 = (0, m.createElement)("div");
          (0, m.addClass)(s2, "art-setting-item-left-icon"), (0, m.append)(s2, a2), (0, m.append)(n2, s2), (0, m.append)(n2, e2.$parent.html);
          let l2 = r2(i2, "click", () => this.render(e2.$parents));
          e2.$parent.$events.push(l2), (0, m.append)(t2, i2);
        }
        creatItem(e2, t2 = false) {
          var _a, _b;
          if (!this.cache.has(e2.$option)) return;
          let r2 = this.cache.get(e2.$option), a2 = e2.$item, o2 = "selector";
          (0, m.has)(e2, "switch") && (o2 = "switch"), (0, m.has)(e2, "range") && (o2 = "range"), (0, m.has)(e2, "onClick") && (o2 = "button");
          let { icons: i2, proxy: n2, constructor: s2 } = this.art, l2 = (0, m.createElement)("div");
          (0, m.addClass)(l2, "art-setting-item"), (0, m.setStyle)(l2, "height", `${s2.SETTING_ITEM_HEIGHT}px`), l2.dataset.name = e2.name || "", l2.dataset.value = e2.value || "";
          let c2 = (0, m.append)(l2, '<div class="art-setting-item-left"></div>'), p2 = (0, m.append)(l2, '<div class="art-setting-item-right"></div>'), u2 = (0, m.createElement)("div");
          switch ((0, m.addClass)(u2, "art-setting-item-left-icon"), o2) {
            case "button":
            case "switch":
            case "range":
              (0, m.append)(u2, e2.icon || i2.config);
              break;
            case "selector":
              ((_a = e2.selector) == null ? void 0 : _a.length) ? (0, m.append)(u2, e2.icon || i2.config) : (0, m.append)(u2, i2.check);
          }
          (0, m.append)(c2, u2), (0, m.def)(e2, "$icon", { configurable: true, get: () => u2 }), (0, m.def)(e2, "icon", { configurable: true, get: () => u2.innerHTML, set(e3) {
            u2.innerHTML = "", (0, m.append)(u2, e3);
          } });
          let d2 = (0, m.createElement)("div");
          (0, m.addClass)(d2, "art-setting-item-left-text"), (0, m.append)(d2, e2.html || ""), (0, m.append)(c2, d2), (0, m.def)(e2, "$html", { configurable: true, get: () => d2 }), (0, m.def)(e2, "html", { configurable: true, get: () => d2.innerHTML, set(e3) {
            d2.innerHTML = "", (0, m.append)(d2, e3);
          } });
          let f2 = (0, m.createElement)("div");
          switch ((0, m.addClass)(f2, "art-setting-item-right-tooltip"), (0, m.append)(f2, e2.tooltip || ""), (0, m.append)(p2, f2), (0, m.def)(e2, "$tooltip", { configurable: true, get: () => f2 }), (0, m.def)(e2, "tooltip", { configurable: true, get: () => f2.innerHTML, set(e3) {
            f2.innerHTML = "", (0, m.append)(f2, e3);
          } }), o2) {
            case "switch": {
              let t3 = (0, m.createElement)("div");
              (0, m.addClass)(t3, "art-setting-item-right-icon");
              let r3 = (0, m.append)(t3, i2.switchOn), a3 = (0, m.append)(t3, i2.switchOff);
              (0, m.setStyle)(e2.switch ? a3 : r3, "display", "none"), (0, m.append)(p2, t3), (0, m.def)(e2, "$switch", { configurable: true, get: () => t3 });
              let o3 = e2.switch;
              (0, m.def)(e2, "switch", { configurable: true, get: () => o3, set(e3) {
                o3 = e3, e3 ? ((0, m.setStyle)(a3, "display", "none"), (0, m.setStyle)(r3, "display", null)) : ((0, m.setStyle)(a3, "display", null), (0, m.setStyle)(r3, "display", "none"));
              } });
              break;
            }
            case "range":
              {
                let t3 = (0, m.createElement)("div");
                (0, m.addClass)(t3, "art-setting-item-right-icon");
                let r3 = (0, m.append)(t3, '<input type="range">');
                r3.value = e2.range[0], r3.min = e2.range[1], r3.max = e2.range[2], r3.step = e2.range[3], (0, m.addClass)(r3, "art-setting-range"), (0, m.append)(p2, t3), (0, m.def)(e2, "$range", { configurable: true, get: () => r3 });
                let a3 = [...e2.range];
                (0, m.def)(e2, "range", { configurable: true, get: () => a3, set(e3) {
                  a3 = [...e3], r3.value = e3[0], r3.min = e3[1], r3.max = e3[2], r3.step = e3[3];
                } });
              }
              break;
            case "selector":
              if ((_b = e2.selector) == null ? void 0 : _b.length) {
                let e3 = (0, m.createElement)("div");
                (0, m.addClass)(e3, "art-setting-item-right-icon"), (0, m.append)(e3, i2.arrowRight), (0, m.append)(p2, e3);
              }
          }
          switch (o2) {
            case "switch":
              if (e2.onSwitch) {
                let t3 = n2(l2, "click", async (t4) => {
                  e2.switch = await e2.onSwitch.call(this.art, e2, l2, t4);
                });
                e2.$events.push(t3);
              }
              break;
            case "range":
              if (e2.$range) {
                if (e2.onRange) {
                  let t3 = n2(e2.$range, "change", async (t4) => {
                    e2.range[0] = e2.$range.valueAsNumber, e2.tooltip = await e2.onRange.call(this.art, e2, l2, t4);
                  });
                  e2.$events.push(t3);
                }
                if (e2.onChange) {
                  let t3 = n2(e2.$range, "input", async (t4) => {
                    e2.range[0] = e2.$range.valueAsNumber, e2.tooltip = await e2.onChange.call(this.art, e2, l2, t4);
                  });
                  e2.$events.push(t3);
                }
              }
              break;
            case "selector":
              {
                let t3 = n2(l2, "click", async (t4) => {
                  var _a2;
                  ((_a2 = e2.selector) == null ? void 0 : _a2.length) ? this.render(e2.selector) : (this.check(e2), e2.$parent.onSelect && (e2.$parent.tooltip = await e2.$parent.onSelect.call(this.art, e2, l2, t4)));
                });
                e2.$events.push(t3), e2.default && (0, m.addClass)(l2, "art-current");
              }
              break;
            case "button":
              if (e2.onClick) {
                let t3 = n2(l2, "click", async (t4) => {
                  e2.tooltip = await e2.onClick.call(this.art, e2, l2, t4);
                });
                e2.$events.push(t3);
              }
          }
          (0, m.def)(e2, "$item", { configurable: true, get: () => l2 }), t2 ? (0, m.replaceElement)(l2, a2) : (0, m.append)(r2, l2), e2.mounted && setTimeout(() => e2.mounted.call(this.art, e2.$item, e2), 0);
        }
        render(e2 = this.option) {
          var _a;
          if (this.active = e2, this.cache.has(e2)) {
            let t2 = this.cache.get(e2);
            (0, m.inverseClass)(t2, "art-current");
          } else {
            let t2 = (0, m.createElement)("div");
            this.cache.set(e2, t2), (0, m.addClass)(t2, "art-setting-panel"), (0, m.append)(this.$parent, t2), (0, m.inverseClass)(t2, "art-current"), ((_a = e2[0]) == null ? void 0 : _a.$parent) && this.creatHeader(e2[0]);
            for (let t3 = 0; t3 < e2.length; t3++) this.creatItem(e2[t3]);
          }
          this.resize();
        }
      }
      r.default = g;
    }, { "./flip": "kONUB", "./aspectRatio": "84NBV", "./playbackRate": "aetWt", "./subtitleOffset": "fIBkO", "../utils/component": "18nVI", "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], kONUB: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, FLIP: o2 } } = e2;
        function n2(e3) {
          return t2.get((0, i.capitalize)(e3));
        }
        function s() {
          let t3 = e2.setting.find(`flip-${e2.flip}`);
          e2.setting.check(t3);
        }
        return { width: a2, name: "flip", html: t2.get("Video Flip"), tooltip: n2(e2.flip), icon: r2.flip, selector: o2.map((t3) => ({ value: t3, name: `flip-${t3}`, default: t3 === e2.flip, html: n2(t3) })), onSelect: (t3) => (e2.flip = t3.value, t3.html), mounted: () => {
          s(), e2.on("flip", () => s());
        } };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "84NBV": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, ASPECT_RATIO: o2 } } = e2;
        function i2(e3) {
          return "default" === e3 ? t2.get("Default") : e3;
        }
        function n() {
          let t3 = e2.setting.find(`aspect-ratio-${e2.aspectRatio}`);
          e2.setting.check(t3);
        }
        return { width: a2, name: "aspect-ratio", html: t2.get("Aspect Ratio"), icon: r2.aspectRatio, tooltip: i2(e2.aspectRatio), selector: o2.map((t3) => ({ value: t3, name: `aspect-ratio-${t3}`, default: t3 === e2.aspectRatio, html: i2(t3) })), onSelect: (t3) => (e2.aspectRatio = t3.value, t3.html), mounted: () => {
          n(), e2.on("aspectRatio", () => n());
        } };
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], aetWt: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        let { i18n: t2, icons: r2, constructor: { SETTING_ITEM_WIDTH: a2, PLAYBACK_RATE: o2 } } = e2;
        function i2(e3) {
          return 1 === e3 ? t2.get("Normal") : e3.toFixed(1);
        }
        function n() {
          let t3 = e2.setting.find(`playback-rate-${e2.playbackRate}`);
          e2.setting.check(t3);
        }
        return { width: a2, name: "playback-rate", html: t2.get("Play Speed"), tooltip: i2(e2.playbackRate), icon: r2.playbackRate, selector: o2.map((t3) => ({ value: t3, name: `playback-rate-${t3}`, default: t3 === e2.playbackRate, html: i2(t3) })), onSelect: (t3) => (e2.playbackRate = t3.value, t3.html), mounted: () => {
          n(), e2.on("video:ratechange", () => n());
        } };
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], fIBkO: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      function i(e2) {
        let { i18n: t2, icons: r2, constructor: a2 } = e2;
        return { width: a2.SETTING_ITEM_WIDTH, name: "subtitle-offset", html: t2.get("Subtitle Offset"), icon: r2.subtitle, tooltip: "0s", range: [0, -10, 10, 0.1], onChange: (t3) => (e2.subtitleOffset = t3.range[0], t3.range[0] + "s"), mounted: (t3, r3) => {
          e2.on("subtitleOffset", (e3) => {
            r3.$range.value = e3, r3.tooltip = e3 + "s";
          });
        } };
      }
      o.defineInteropFlag(r), o.export(r, "default", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "2aaJe": [function(e, t, r, a) {
      e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
        constructor() {
          this.name = "artplayer_settings", this.settings = {};
        }
        get(e2) {
          try {
            let t2 = JSON.parse(window.localStorage.getItem(this.name)) || {};
            return e2 ? t2[e2] : t2;
          } catch (t2) {
            return e2 ? this.settings[e2] : this.settings;
          }
        }
        set(e2, t2) {
          try {
            let r2 = Object.assign({}, this.get(), { [e2]: t2 });
            window.localStorage.setItem(this.name, JSON.stringify(r2));
          } catch (r2) {
            this.settings[e2] = t2;
          }
        }
        del(e2) {
          try {
            let t2 = this.get();
            delete t2[e2], window.localStorage.setItem(this.name, JSON.stringify(t2));
          } catch (t2) {
            delete this.settings[e2];
          }
        }
        clear() {
          try {
            window.localStorage.removeItem(this.name);
          } catch (e2) {
            this.settings = {};
          }
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "8MTUM": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r);
      var i = e("../utils"), n = e("./miniProgressBar"), s = o.interopDefault(n), l = e("./autoOrientation"), c = o.interopDefault(l), p = e("./autoPlayback"), u = o.interopDefault(p), d = e("./fastForward"), f = o.interopDefault(d), h = e("./lock"), m = o.interopDefault(h);
      r.default = class {
        constructor(e2) {
          this.art = e2, this.id = 0;
          let { option: t2 } = e2;
          t2.miniProgressBar && !t2.isLive && this.add(s.default), t2.lock && i.isMobile && this.add(m.default), t2.autoPlayback && !t2.isLive && this.add(u.default), t2.autoOrientation && i.isMobile && this.add(c.default), t2.fastForward && i.isMobile && !t2.isLive && this.add(f.default);
          for (let e3 = 0; e3 < t2.plugins.length; e3++) this.add(t2.plugins[e3]);
        }
        add(e2) {
          this.id += 1;
          let t2 = e2.call(this.art, this.art);
          return t2 instanceof Promise ? t2.then((t3) => this.next(e2, t3)) : this.next(e2, t2);
        }
        next(e2, t2) {
          let r2 = t2 && t2.name || e2.name || `plugin${this.id}`;
          return (0, i.errorHandle)(!(0, i.has)(this, r2), `Cannot add a plugin that already has the same name: ${r2}`), (0, i.def)(this, r2, { value: t2 }), this;
        }
      };
    }, { "../utils": "71aH7", "./miniProgressBar": "87pSL", "./autoOrientation": "ePEg5", "./autoPlayback": "cVO99", "./fastForward": "hFDwt", "./lock": "1hsTH", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "87pSL": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        return e2.on("control", (t2) => {
          t2 ? (0, i.removeClass)(e2.template.$player, "art-mini-progress-bar") : (0, i.addClass)(e2.template.$player, "art-mini-progress-bar");
        }), { name: "mini-progress-bar" };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], ePEg5: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { constructor: t2, template: { $player: r2, $video: a2 } } = e2;
        return e2.on("fullscreenWeb", (o2) => {
          if (o2) {
            let { videoWidth: o3, videoHeight: n2 } = a2, { clientWidth: s, clientHeight: l } = document.documentElement;
            (o3 > n2 && s < l || o3 < n2 && s > l) && setTimeout(() => {
              (0, i.setStyle)(r2, "width", `${l}px`), (0, i.setStyle)(r2, "height", `${s}px`), (0, i.setStyle)(r2, "transform-origin", "0 0"), (0, i.setStyle)(r2, "transform", `rotate(90deg) translate(0, -${s}px)`), (0, i.addClass)(r2, "art-auto-orientation"), e2.isRotate = true, e2.emit("resize");
            }, t2.AUTO_ORIENTATION_TIME);
          } else (0, i.hasClass)(r2, "art-auto-orientation") && ((0, i.removeClass)(r2, "art-auto-orientation"), e2.isRotate = false, e2.emit("resize"));
        }), e2.on("fullscreen", async (e3) => {
          var _a;
          if (!((_a = screen == null ? void 0 : screen.orientation) == null ? void 0 : _a.lock)) return;
          let t3 = screen.orientation.type;
          if (e3) {
            let { videoWidth: e4, videoHeight: o2 } = a2, { clientWidth: n2, clientHeight: s } = document.documentElement;
            if (e4 > o2 && n2 < s || e4 < o2 && n2 > s) {
              let e5 = t3.startsWith("portrait") ? "landscape" : "portrait";
              await screen.orientation.lock(e5), (0, i.addClass)(r2, "art-auto-orientation-fullscreen");
            }
          } else (0, i.hasClass)(r2, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(t3), (0, i.removeClass)(r2, "art-auto-orientation-fullscreen"));
        }), { name: "autoOrientation", get state() {
          return (0, i.hasClass)(r2, "art-auto-orientation");
        } };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], cVO99: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { i18n: t2, icons: r2, storage: a2, constructor: o2, proxy: n2, template: { $poster: s } } = e2, l = e2.layers.add({ name: "auto-playback", html: `<div class="art-auto-playback-close"></div><div class="art-auto-playback-last"></div><div class="art-auto-playback-jump"></div>` }), c = (0, i.query)(".art-auto-playback-last", l), p = (0, i.query)(".art-auto-playback-jump", l), u = (0, i.query)(".art-auto-playback-close", l);
        (0, i.append)(u, r2.close);
        let d = null;
        function f() {
          let r3 = (a2.get("times") || {})[e2.option.id || e2.option.url];
          clearTimeout(d), (0, i.setStyle)(l, "display", "none"), r3 && r3 >= o2.AUTO_PLAYBACK_MIN && ((0, i.setStyle)(l, "display", "flex"), c.innerText = `${t2.get("Last Seen")} ${(0, i.secondToTime)(r3)}`, p.innerText = t2.get("Jump Play"), n2(u, "click", () => {
            (0, i.setStyle)(l, "display", "none");
          }), n2(p, "click", () => {
            e2.seek = r3, e2.play(), (0, i.setStyle)(s, "display", "none"), (0, i.setStyle)(l, "display", "none");
          }), e2.once("video:timeupdate", () => {
            d = setTimeout(() => {
              (0, i.setStyle)(l, "display", "none");
            }, o2.AUTO_PLAYBACK_TIMEOUT);
          }));
        }
        return e2.on("video:timeupdate", () => {
          if (e2.playing) {
            let t3 = a2.get("times") || {}, r3 = Object.keys(t3);
            r3.length > o2.AUTO_PLAYBACK_MAX && delete t3[r3[0]], t3[e2.option.id || e2.option.url] = e2.currentTime, a2.set("times", t3);
          }
        }), e2.on("ready", f), e2.on("restart", f), { name: "auto-playback", get times() {
          return a2.get("times") || {};
        }, clear: () => a2.del("times"), delete(e3) {
          let t3 = a2.get("times") || {};
          return delete t3[e3], a2.set("times", t3), t3;
        } };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], hFDwt: [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { constructor: t2, proxy: r2, template: { $player: a2, $video: o2 } } = e2, n2 = null, s = false, l = 1, c = () => {
          clearTimeout(n2), s && (s = false, e2.playbackRate = l, (0, i.removeClass)(a2, "art-fast-forward"));
        };
        return r2(o2, "touchstart", (r3) => {
          1 === r3.touches.length && e2.playing && !e2.isLock && (n2 = setTimeout(() => {
            s = true, l = e2.playbackRate, e2.playbackRate = t2.FAST_FORWARD_VALUE, (0, i.addClass)(a2, "art-fast-forward");
          }, t2.FAST_FORWARD_TIME));
        }), r2(document, "touchmove", c), r2(document, "touchend", c), { name: "fastForward", get state() {
          return (0, i.hasClass)(a2, "art-fast-forward");
        } };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "1hsTH": [function(e, t, r, a) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(r), o.export(r, "default", () => n);
      var i = e("../utils");
      function n(e2) {
        let { layers: t2, icons: r2, template: { $player: a2 } } = e2;
        function o2() {
          return (0, i.hasClass)(a2, "art-lock");
        }
        function n2() {
          (0, i.addClass)(a2, "art-lock"), e2.isLock = true, e2.emit("lock", true);
        }
        function s() {
          (0, i.removeClass)(a2, "art-lock"), e2.isLock = false, e2.emit("lock", false);
        }
        return t2.add({ name: "lock", mounted(t3) {
          let a3 = (0, i.append)(t3, r2.lock), o3 = (0, i.append)(t3, r2.unlock);
          (0, i.setStyle)(a3, "display", "none"), e2.on("lock", (e3) => {
            e3 ? ((0, i.setStyle)(a3, "display", "inline-flex"), (0, i.setStyle)(o3, "display", "none")) : ((0, i.setStyle)(a3, "display", "none"), (0, i.setStyle)(o3, "display", "inline-flex"));
          });
        }, click() {
          o2() ? s() : n2();
        } }), { name: "lock", get state() {
          return o2();
        }, set state(value) {
          value ? n2() : s();
        } };
      }
    }, { "../utils": "71aH7", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }] }, ["5lTcX"], "5lTcX", "parcelRequire4dc0", {});
  }
});
export default require_artplayer();
/*! Bundled license information:

artplayer/dist/artplayer.js:
  (*!
   * artplayer.js v5.2.3
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2025 Harvey Zack
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=artplayer.js.map
