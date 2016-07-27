import angular from 'angular';

class UsersControlPanelController {
  /* @ngInject */
  constructor($rootScope, $state, User) {
    Object.assign(this, { $rootScope, $state, User });
  }

  /**
   * Component is initialised
   */
  $onInit() {
    this.$rootScope.title = `${this.title || 'Users'} | Control Panel`;
  }

  /**
   * Component bindings updated
   *
   * @param {object} changes
   */
  $onChanges(changes) {
    if (changes.users) {
      this.users = angular.copy(this.users);
    }
  }

  /**
   * Updated search query
   *
   * @param {object} $event
   */
  onSearch($event) {
    this.$state.go('.', { query: $event.query, page: 1 });
  }

  /**
   * Changed to a new pagination page
   *
   * @param {number} page
   */
  onPaginationChange(page) {
    this.$state.go('.', { page });
  }
}

export default UsersControlPanelController;
