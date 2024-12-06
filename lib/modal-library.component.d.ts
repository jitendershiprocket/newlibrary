import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalComponent {
    isVisible: boolean;
    title: string;
    close: EventEmitter<void>;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "lib-modal", never, { "isVisible": { "alias": "isVisible"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, { "close": "close"; }, never, ["*"], true, never>;
}
