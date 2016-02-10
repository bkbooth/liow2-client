import angular from 'angular';

// Component dependencies
import JumbotronCtrl from './JumbotronCtrl';
import jumbotronTpl from './jumbotron.html';

export default angular.module('app.components.jumbotron', [])
  .component('jumbotron', {
    controller: JumbotronCtrl,
    template: jumbotronTpl,
    bindings: {
      image: '@',
      background: '@',
      title: '@',
      text: '@'
    }
  })
  .name;
