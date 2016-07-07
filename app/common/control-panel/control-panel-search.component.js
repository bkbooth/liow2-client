export const ControlPanelSearchComponent = {
  bindings: {
    onSearch: '&',
  },
  template: `
    <div class="input-group m-b-md">
      <span class="input-group-addon">
        <i class="fa fa-search"></i>
      </span>
      <input type="text"
             class="form-control"
             placeholder="Search..."
             ng-model="$ctrl.query"
             ng-model-options="{ debounce: 500 }"
             ng-change="$ctrl.onSearch({ $event: { query: $ctrl.query } })"
             autofocus>
    </div>
  `
};
