import { GroupsControlPanelController } from './groups-control-panel.controller';

export const GroupsControlPanelComponent = {
  controller: GroupsControlPanelController,
  template: `
    <div class="row">
      <div class="col-xs-12">
        <control-panel-search on-search="$ctrl.onSearch($event)"></control-panel-search>

        <table class="table table-bordered table-striped" ng-if="!$ctrl.loading">
          <thead>
            <tr>
              <th style="width: 65px;">Logo</th>
              <th>Name</th>
              <th style="width: 90px;">Created</th>
              <th style="width: 102px;">&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            <tr ng-repeat="group in $ctrl.groups track by group._id">
              <td class="text-center">
                <img ng-src="/images/group.png"
                     class="img-circle icon">
              </td>
              <td>{{ group.name }}</td>
              <td>{{ group.created | moment:'L' }}</td>
              <td>
                <div class="btn-group" uib-dropdown>
                  <button type="button"
                          class="btn btn-default"
                          uib-dropdown-toggle>
                    Actions
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu-right" uib-dropdown-menu>
                    <li ng-if="group.welcomeMessage">
                      <a ng-click="$ctrl.Modal.openAlert(group.welcomeMessage, group.name + ' Welcome Message', 'md')" href>
                        <i class="fa fa-fw fa-commenting"></i>
                        Welcome Message
                      </a>
                    </li>
                    <li>
                      <a ng-href="/g/{{ group.urlName }}">
                        <i class="fa fa-fw fa-users"></i>
                        View Public Page
                      </a>
                    </li>
                    <li>
                      <a ui-sref="controlPanel.group({ groupId: group._id })">
                        <i class="fa fa-fw fa-cogs"></i>
                        View Admin Page
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <loading-spinner size="5x" ng-if="$ctrl.loading"></loading-spinner>
      </div>
    </div>
  `
};
