(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith: function initWith() {
      return {
        date: '',
        plugin: 'datesync',
        title: 'Datesync - by Philipp Lupulescu | Lupo',
        description: 'Lets you set the date within your component and sets it for the story to allow sorting when using the api'
      };
    }
  },
  data: function data() {
    return {
      time: '',
      option: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        color: {
          checked: '#09b3af ',
          header: '#09b3af '
        }
      }
    };
  },

  events: {
    // Triggered after the plugin has been inserted and the data has been passed
    'plugin:created': function pluginCreated() {
      if (this.$store && this.$store.model.story) {
        if (this.$store.model.story.sort_by_date) {
          this.model.date = this.$store.model.story.sort_by_date;
        }
      }
    },
    // Triggered after the plugin has been removed from DOM
    'plugin:destroyed': function pluginDestroyed() {
      console.log('plugin:destroyed');
    }
  },
  watch: {
    'model': {
      handler: function handler(value) {
        this.$emit('changed-model', value);
        if (this.$store && this.$store.model.story) {
          this.$store.model.story.sort_by_date = value.date;
        }
      },
      deep: true
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<datepicker :time.sync=model.date :option=option></datepicker>"

},{}],2:[function(require,module,exports){
'use strict';

var _Plugin = require('../Plugin.vue');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = _Plugin2.default.methods.initWith();

window.storyblok.field_types[init.plugin] = _Plugin2.default;

},{"../Plugin.vue":1}]},{},[2]);
