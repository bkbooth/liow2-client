import NavbarController from './navbar.controller';

const NavbarComponent = {
  controller: NavbarController,
  template: `
    <nav class="navbar navbar-default navbar-fixed-top" id="liow-navbar" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle"
                  ng-click="$ctrl.isCollapsed = !$ctrl.isCollapsed"
                  aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a href="/"
             class="navbar-brand"
             ng-click="$ctrl.collapseMenu()"
             title="Love is our Weapon">
            <img src="/images/logo-navbar.png"
                 alt="Love is our Weapon">
            <div class="navbar-brand-label">
              <span class="text-primary">
                {{ $ctrl.Act.counters.global | number }}
              </span>
              <br><small>acts of love</small>
            </div>
          </a>
        </div>

        <div class="collapse navbar-collapse"
             uib-collapse="$ctrl.isCollapsed">
          <div class="navbar-divider navbar-left"></div>

          <form class="navbar-form navbar-left" id="group-search" role="search">
            <div class="form-group">
              <label class="input-group">
                <div class="input-group-addon"><i class="fa fa-search"></i></div>
                <ui-select ng-model="$ctrl.selected"
                           on-select="$ctrl.select($item)"
                           append-to-body="false">
                  <ui-select-match placeholder="Find a group or deed...">
                    {{ $select.selected.name || $select.selected.title }}
                  </ui-select-match>
                  <ui-select-choices repeat="choice in $ctrl.choices"
                                     group-by="$ctrl.groupChoices"
                                     refresh="$ctrl.refreshChoices($select.search)"
                                     refresh-delay="200"
                                     position="down">
                    <div ng-bind-html="(choice.name || choice.title) | highlight:$select.search"></div>
                  </ui-select-choices>
                </ui-select>
              </label>
            </div>
          </form>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <a ng-href="/global"
                 ng-click="$ctrl.collapseMenu()"
                 title="Global Activity Feed">
                Global
              </a>
            </li>
            <li ng-if="$ctrl.User.isAuthenticated() && $ctrl.User.group">
              <a ng-href="/g/{{ $ctrl.User.group.urlName }}"
                 ng-click="$ctrl.collapseMenu()"
                 title="{{ $ctrl.User.group.name }}">
                Campaign
              </a>
            </li>
            <li uib-dropdown>
              <a class="user-dropdown"
                 uib-dropdown-toggle
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false"
                 href>
                <img ng-src="{{ $ctrl.User.current.picture || $ctrl.User.getDefaultUserImage($ctrl.User.current._id) }}"
                     class="img-circle">
                <span class="caret"></span>
              </a>
              <ul uib-dropdown-menu>
                <li class="dropdown-header"
                    ng-if="$ctrl.User.isAuthenticated()">
                  {{ $ctrl.User.current.name }}
                </li>
                <li ng-if="$ctrl.User.isAuthenticated()">
                  <a ng-href="/u/{{ $ctrl.User.current._id }}"
                     ng-click="$ctrl.collapseMenu()">
                    <i class="fa fa-fw fa-user"></i>
                    Your Profile
                  </a>
                </li>
                <li ng-if="$ctrl.User.isAuthenticated()">
                  <a ng-href="/control-panel"
                     ng-click="$ctrl.collapseMenu()">
                    <i class="fa fa-fw fa-cogs"></i>
                    Control Panel
                  </a>
                </li>
                <li ng-if="$ctrl.User.isAuthenticated()">
                  <a ng-click="$ctrl.User.logout() && $ctrl.collapseMenu()" href>
                    <i class="fa fa-fw fa-sign-out"></i>
                    Logout
                  </a>
                </li>
                <li ng-if="!$ctrl.User.isAuthenticated()">
                  <a ng-click="$ctrl.Modal.openLogin() && $ctrl.collapseMenu()" href>
                    <i class="fa fa-fw fa-sign-in"></i>
                    Login
                  </a>
                </li>
                <li ng-if="!$ctrl.User.isAuthenticated()">
                  <a ng-click="$ctrl.Modal.openSignup() && $ctrl.collapseMenu()" href>
                    <i class="fa fa-fw fa-user-plus"></i>
                    Sign up
                  </a>
                </li>
                <li class="divider" ng-if="$ctrl.User.isAuthenticated()" role="separator"></li>
                <li class="dropdown-header"
                    ng-if="$ctrl.User.isAuthenticated()">
                  <i class="fa fa-fw fa-users"></i>
                  Groups
                </li>
                <li ng-repeat="group in $ctrl.User.current.groups track by group._id"
                    ng-if="$ctrl.User.isAuthenticated()"
                    ng-class="{ 'active': $ctrl.User.group._id === group._id }">
                  <a ng-click="$ctrl.setUserGroup(group)" href>
                    {{ group.name }}
                  </a>
                </li>
                <li>
                  <a ng-click="$ctrl.Modal.openGroupEdit() && $ctrl.collapseMenu()" href>
                    <i class="fa fa-fw fa-pencil-square-o"></i>
                    Group sign up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
};

export default NavbarComponent;
