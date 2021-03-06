/* tslint:disable:component-selector directive-selector no-input-rename */
import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alert',
  template: ``
})
export class AlertStubComponent {
  @Input() dismissible: boolean;
  @Input() type: string;
}

@Directive({ selector: '[dropdown]' })
export class DropdownStubDirective { }

@Directive({ selector: '[dropdownToggle]' })
export class DropdownToggleStubDirective { }

@Directive({ selector: '[dropdownMenu]' })
export class DropdownMenuStubDirective { }

@Directive({
  selector: '[bsModal]',
  exportAs: 'bs-modal',
})
export class ModalStubDirective {
  @Input() config: any;
  @Output() onHide = new EventEmitter();
  show() { }
  hide() { }
}

@Component({
  selector: 'pagination',
  template: ``,
})
export class PaginationStubComponent {
  @Input() boundaryLinks: boolean;
  @Input() itemsPerPage: number;
  @Input() firstText: string;
  @Input() lastText: string;
  @Input() ngModel: any;
  @Input() maxSize: number;
  @Input() nextText: string;
  @Input() previousText: string;
  @Input() rotate: boolean;
  @Input() totalItems: number;
  @Output() numPages = new EventEmitter<number>();
  @Output() pageChanged = new EventEmitter<number>();
}

@Component({
  selector: 'tabset',
  template: ``
})
export class TabsetStubComponent {
  @Input() type: string;
}

@Component({
  selector: 'tab',
  template: ``,
})
export class TabStubComponent {
  @Input() active: boolean;
  @Output() select = new EventEmitter();
}

@Directive({
  selector: '[typeahead]',
})
export class TypeaheadStubDirective {
  @Input() typeahead: any;
  @Input() typeaheadOptionField: string;
  @Input() typeaheadGroupField: string;
  @Output() typeaheadOnSelect = new EventEmitter();
}
