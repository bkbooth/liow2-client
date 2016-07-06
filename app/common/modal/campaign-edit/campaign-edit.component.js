import CampaignEditController from './campaign-edit.controller';

export const CampaignEditComponent = {
  controller: CampaignEditController,
  template: `
    <div class="modal-header">
      <button type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              ng-click="$ctrl.$uibModalInstance.dismiss()">
        <span aria-hidden="true"><i class="fa fa-times"></i></span>
      </button>
      <h4 class="modal-title">
        {{ ::$ctrl.action | capitalize }} Campaign for {{ ::$ctrl.group.name }}
      </h4>
    </div><!-- .modal-header -->

    <div class="modal-body">
      <uib-alert type="danger" ng-if="$ctrl.error && !$ctrl.error.errors">
        <i class="fa fa-fw fa-exclamation-triangle"></i>
        Failed sending request. Please try again or
        <a href="mailto:support@loveisourweapon.com">contact us</a> about it.
      </uib-alert>

      <p>
        Create a campaign by dragging deeds from the 'Available Deeds' list into
        the 'Your Campaign' list. You can also re-order deeds within your campaign.
      </p>
      <p>
        We recommend choosing 1 deed for each week of the campaign, so choosing
        6 deeds would work best for a 6 week campaign. In our experience with
        youth groups, a 4-6 week campaign works best to keep up interest and
        engagement with the campaign.
      </p>

      <form name="campaignEdit"
            class="form-horizontal"
            ng-submit="$ctrl.save($ctrl.campaign)">
        <span ng-init="$ctrl.form = campaignEdit"></span>

        <div class="form-group">
          <div class="col-xs-6">
            <h5>Available Deeds</h5>
            <ul class="list-group"
                dragula="'bag-deeds'"
                dragula-model="$ctrl.deeds">
              <li class="list-group-item"
                  ng-repeat="item in $ctrl.deeds track by item.deed._id">
                <button type="button"
                        class="btn btn-link p-none pull-right"
                        ng-click="$ctrl.Modal.openDeedPreview(item.deed._id)">
                  <i class="fa fa-lg fa-info-circle text-info m-l-xs"></i>
                </button>
                {{ item.deed.title }}
              </li>
            </ul>
          </div>

          <div class="col-xs-6">
            <h5>Your Campaign</h5>
            <ul class="list-group"
                dragula="'bag-deeds'"
                dragula-model="$ctrl.campaign.deeds">
              <li class="list-group-item"
                  ng-repeat="item in $ctrl.campaign.deeds track by item.deed._id">
                <button type="button"
                        class="btn btn-link p-none pull-right"
                        ng-click="$ctrl.Modal.openDeedPreview(item.deed._id)">
                  <i class="fa fa-lg fa-info-circle text-info m-l-xs"></i>
                </button>
                {{ item.deed.title }}
              </li>
            </ul>
          </div>
        </div>

        <button type="submit" hidden></button>
      </form>
    </div><!-- .modal-body -->

    <div class="modal-footer">
      <button type="button"
              class="btn btn-default"
              ng-click="$ctrl.$uibModalInstance.dismiss()">
        Cancel
      </button>
      <button type="button"
              class="btn btn-primary"
              ng-click="$ctrl.save($ctrl.campaign)"
              ng-disabled="$ctrl.loading || $ctrl.saving || $ctrl.form.$invalid">
        <i class="fa fa-cog fa-spin" ng-show="$ctrl.saving"></i>
        {{ ::$ctrl.action | capitalize }}
      </button>
    </div><!-- .modal-footer -->
  `
};
