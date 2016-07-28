import each from 'lodash/each';

export default class DeedListController {
  /* @ngInject */
  constructor(Deed, Act) {
    Object.assign(this, { Deed, Act });
  }

  /**
   * Component is initialised
   */
  $onInit() {
    this.loading = true;
    this.Deed.find({ fields: '_id,logo,title,urlTitle' })
      .then(deeds => {
        this.deeds = deeds;
        each(this.deeds, deed => this.Act.count({ deed: deed._id }));
      })
      .catch(() => null)
      .then(() => this.loading = false);
  }
}