/* tslint:disable:component-selector directive-selector no-input-rename */
import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alert',
  template: ``
})
export class AlertStubComponent {
  @Input() type: string;
}

@Directive({ selector: '[collapse]' })
export class CollapseStubDirective {
  @Input('collapse') isCollapsed: boolean;
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
export class TabStubComponent { }
