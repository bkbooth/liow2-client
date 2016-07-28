import forOwn from 'lodash/forOwn';
import uuid from 'uuid';

const FEED_UPDATE_DELAY = 80;
let listeners = {};

class FeedService {
  /* @ngInject */
  constructor($http, $timeout, config) {
    Object.assign(this, { $http, $timeout });

    this.baseUrl = `${config.serverUrl}/feeds`;
  }

  /**
   * Find a feed by params
   *
   * @param {object} [params={}]
   *
   * @returns {Promise}
   */
  find(params = {}) {
    return this.$http.get(this.baseUrl, { params }).then(response => response.data);
  }

  /**
   * Subscribe to a Feed update
   *
   * @param {function} callback
   *
   * @returns {function}
   */
  onUpdate(callback) {
    let id = uuid.v4();
    listeners[id] = { callback };

    return () => delete listeners[id];
  }

  /**
   * Publish an async Feed update
   *
   * @param {object} [options={}]
   */
  update(options = {}) {
    this.$timeout(() => {
      forOwn(listeners, listener => listener.callback(options));
    }, FEED_UPDATE_DELAY);
  }
}

export default FeedService;