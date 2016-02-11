import _ from 'lodash';
import angular from 'angular';
import config from '../../config';

class Act {
  constructor($http) {
    Object.assign(this, { $http });

    this.baseUrl = `${config.serverUrl}/acts`;
  }

  /**
   * Register a deed as done
   *
   * @param {object} deed
   * @param {object} [group=null]
   *
   * @returns {HttpPromise}
   */
  done(deed, group = null) {
    return this.$http.post(this.baseUrl, {
      deed: deed._id,
      group: _.has(group, '_id') ? group._id : null
    });
  }
}

Act.$inject = ['$http'];

export default angular.module('app.services.Act', [])
  .service('Act', Act)
  .name;