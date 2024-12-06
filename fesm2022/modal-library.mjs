import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output } from '@angular/core';

class ModalLibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.3", ngImport: i0, type: ModalLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.3", ngImport: i0, type: ModalLibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.3", ngImport: i0, type: ModalLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ModalComponent {
    isVisible = false;
    title = 'Modal Title';
    close = new EventEmitter();
    closeModal() {
        this.close.emit();
        this.isVisible = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.3", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.3", type: ModalComponent, isStandalone: true, selector: "lib-modal", inputs: { isVisible: "isVisible", title: "title" }, outputs: { close: "close" }, ngImport: i0, template: `
    <div class="overlay" *ngIf="isVisible">
      <div class="modal">
        <div class="header">
          <h2>{{ title }}</h2>
          <button (click)="closeModal()">&times;</button>
        </div>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center}.modal{background:#fff;border-radius:8px;width:500px;padding:16px;box-shadow:0 4px 6px #0000001a}.header{display:flex;justify-content:space-between;align-items:center}.content{margin-top:16px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.3", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: `
    <div class="overlay" *ngIf="isVisible">
      <div class="modal">
        <div class="header">
          <h2>{{ title }}</h2>
          <button (click)="closeModal()">&times;</button>
        </div>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `, styles: [".overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center}.modal{background:#fff;border-radius:8px;width:500px;padding:16px;box-shadow:0 4px 6px #0000001a}.header{display:flex;justify-content:space-between;align-items:center}.content{margin-top:16px}\n"] }]
        }], propDecorators: { isVisible: [{
                type: Input
            }], title: [{
                type: Input
            }], close: [{
                type: Output
            }] } });

/*
 * Public API Surface of modal-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ModalComponent, ModalLibraryService };
//# sourceMappingURL=modal-library.mjs.map
