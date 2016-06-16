'use strict';

var path = require('path');
var express = require('express');
var lodash = require('lodash');
var proxy = require('json-proxy');

var pathMappings = [
  {
    path: '/',
    dir: 'dist'
  },
  {
    path: '/api/v1',
    url: 'http://localhost:8082'
    //url: 'http://localhost:9999'
  },
  {
    path:'/fc/oauth',
    url: 'http://localhost:8082'
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