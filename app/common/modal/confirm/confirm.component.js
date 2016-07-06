import ConfirmController from './confirm.controller';

export const ConfirmComponent = {
  controller: ConfirmController,
  template: `
    <div class="modal-header" ng-if="::$ctrl.title">
      <button type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              ng-click="$ctrl.$uibModalInstance.dismiss()">
        <span aria-hidden="true"><i class="fa fa-times"></i></span>
      </button>
      <h4 class="modal-title">
        {{ ::$ctrl.title }}
      </h4>
    </div><!-- .modal-header -->

    <div class="modal-body">
      <div marked="::$ctrl.message"></div>
    </div><!-- .modal-body -->

    <div class="modal-footer">
      <button type="button"
              class="btn btn-default"
              ng-click="$ctrl.$uibModalInstance.dismiss()">
        Cancel
      </button>
      <button type="button"
              class="btn btn-primary"
              ng-click="$ctrl.$uibModalInstance.close()">
        OK
      </button>
    </div><!-- .modal-footer -->
  `
};
