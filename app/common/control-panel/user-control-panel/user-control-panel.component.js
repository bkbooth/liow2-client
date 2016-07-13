import UserControlPanelController from './user-control-panel.controller';

const UserControlPanelComponent = {
  bindings: {
    user: '<',
  },
  controller: UserControlPanelController,
  template: `
    <div class="row">
      <div class="col-sm-3 col-sm-push-9">
        <img ng-src="{{ ::$ctrl.user.picture || $ctrl.User.getDefaultUserImage($ctrl.user._id) }}"
             class="profile img-responsive img-circle">
      </div>
      <div class="col-sm-9 col-sm-pull-3">
        <table class="table table-bordered table-striped" ng-if="!$ctrl.loading">
          <tbody>
            <tr>
              <th>Email</th>
              <td>{{ ::$ctrl.user.email }}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <div ng-if="!$ctrl.editingName">
                  <a ng-click="$ctrl.toggleEditName($ctrl.user)" class="pull-right" href>
                    <i class="fa fa-fw fa-pencil"></i>
                  </a>
                  {{ $ctrl.user.name }}
                </div>
                <div ng-if="$ctrl.editingName">
                  <a ng-click="$ctrl.toggleEditName($ctrl.user)" class="pull-right" href>
                    <i class="fa fa-fw fa-times"></i>
                  </a>

                  <form name="userNameEdit"
                        class="form-inline"
                        ng-submit="$ctrl.form.$valid && $ctrl.saveName($ctrl.user)"
                        novalidate>
                    <span ng-init="$ctrl.form = userNameEdit"></span>

                    <div class="form-group"
                         ng-class="{ 'has-error': $ctrl.form.$submitted && $ctrl.form.firstName.$invalid }">
                      <label class="sr-only" for="firstName">First name</label>
                      <input type="text"
                             class="form-control"
                             id="firstName"
                             name="firstName"
                             placeholder="First..."
                             ng-model="$ctrl.user.firstName"
                             required>
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="lastName">Last name</label>
                      <input type="text"
                             class="form-control"
                             id="lastName"
                             name="lastName"
                             placeholder="Last..."
                             ng-model="$ctrl.user.lastName">
                    </div>
                    <button type="submit" class="btn btn-success">
                      <i class="fa fa-check"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <a ng-click="$ctrl.Modal.openChangePassword($ctrl.user)" href>
                  Change password
                </a>
                <a ng-click="$ctrl.Modal.openChangePassword($ctrl.user)"
                   class="pull-right" href>
                  <i class="fa fa-fw fa-pencil"></i>
                </a>
              </td>
            </tr>
            <tr>
              <th>Joined</th>
              <td>{{ ::$ctrl.user.created | moment:'LL' }}</td>
            </tr>
            <tr>
              <th>Acts of Love</th>
              <td>{{ $ctrl.Act.counters[$ctrl.user._id] | number }}</td>
            </tr>
            <tr>
              <th>Confirmed</th>
              <td>
                <icon-checked value="::$ctrl.user.confirmed"></icon-checked>
                <span ng-if="$ctrl.user && !$ctrl.user.confirmed"
                      class="m-l-xs">
                  <a ng-click="$ctrl.sendConfirmEmail($ctrl.user.email)" href>
                    Re-send confirmation email?
                    <i ng-show="$ctrl.sending" class="fa fa-cog fa-spin"></i>
                  </a>
                </span>
              </td>
            </tr>
            <tr ng-if="::$ctrl.user.superAdmin">
              <th>Super Admin</th>
              <td>
                <icon-checked value="::$ctrl.user.superAdmin"></icon-checked>
              </td>
            </tr>
          </tbody>
        </table>

        <loading-spinner size="5x" ng-if="$ctrl.loading"></loading-spinner>
      </div>
    </div>
  `
};

export default UserControlPanelComponent;
