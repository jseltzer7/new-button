/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NewButton {
        "text": string;
    }
}
declare global {
    interface HTMLNewButtonElement extends Components.NewButton, HTMLStencilElement {
    }
    var HTMLNewButtonElement: {
        prototype: HTMLNewButtonElement;
        new (): HTMLNewButtonElement;
    };
    interface HTMLElementTagNameMap {
        "new-button": HTMLNewButtonElement;
    }
}
declare namespace LocalJSX {
    interface NewButton {
        "text"?: string;
    }
    interface IntrinsicElements {
        "new-button": NewButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "new-button": LocalJSX.NewButton & JSXBase.HTMLAttributes<HTMLNewButtonElement>;
        }
    }
}
