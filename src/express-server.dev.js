'use strict';

var path = require('path');
var express = require('express');
var lodash = require('lodash');
var proxy = require('json-proxy');

var pathMappings = [
  {
    path: '/',
    dir: 'app'
  },
  {
    path: '/bower_components',
    dir: 'bower_components'
  },
  {
    path: '/dev',
    url: 'http://localhost:9001'
  }
];

var proxyConfig = {
  forward: {}
};

var app = express();

lodash.each(pathMappings, function(mapping){
  if(mapping.dir){
    app.use(mapping.path, express.static(path.resolve(__dirname, mapping.dir)));
  }else if(mapping.url){
    proxyConfig.forward[mapping.path] = mapping.url;
  }
});

app.use(proxy.initialize({
  proxy: proxyConfig
}));

module.exports = app;