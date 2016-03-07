import angular from 'angular';

// Module dependencies
import User from '../../services/User';
import Act from '../../services/Act';
import Feed from '../../services/Feed';
import Modal from '../../services/Modal';
import jumbotron from '../jumbotron';

// Component dependencies
import UserCtrl from './UserCtrl';
import template from './user.html';
export let userTpl = template;

export let user = angular.module('app.components.user', [
  User,
  Act,
  Feed,
  Modal,
  jumbotron
])
  .controller('UserCtrl', UserCtrl)
  .name;
