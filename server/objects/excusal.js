;(function(){
  'use strict';

  const { basicDataTransform } = require('../lib/utils');
  const { axiosClient } = require('./axios-instance');

  module.exports.object = {
    get: function(jwtToken) {
      return axiosClient(
        'get',
        'bureau/juror/excuse',
        jwtToken,
      );
    }
  };
})();
