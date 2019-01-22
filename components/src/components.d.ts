/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyAuth {
    'name': string;
  }
  interface MyAuthAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface MyDay {}
  interface MyDayAttributes extends StencilHTMLAttributes {}

  interface MyLogin {}
  interface MyLoginAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'MyAuth': Components.MyAuth;
    'MyDay': Components.MyDay;
    'MyLogin': Components.MyLogin;
  }

  interface StencilIntrinsicElements {
    'my-auth': Components.MyAuthAttributes;
    'my-day': Components.MyDayAttributes;
    'my-login': Components.MyLoginAttributes;
  }


  interface HTMLMyAuthElement extends Components.MyAuth, HTMLStencilElement {}
  var HTMLMyAuthElement: {
    prototype: HTMLMyAuthElement;
    new (): HTMLMyAuthElement;
  };

  interface HTMLMyDayElement extends Components.MyDay, HTMLStencilElement {}
  var HTMLMyDayElement: {
    prototype: HTMLMyDayElement;
    new (): HTMLMyDayElement;
  };

  interface HTMLMyLoginElement extends Components.MyLogin, HTMLStencilElement {}
  var HTMLMyLoginElement: {
    prototype: HTMLMyLoginElement;
    new (): HTMLMyLoginElement;
  };

  interface HTMLElementTagNameMap {
    'my-auth': HTMLMyAuthElement
    'my-day': HTMLMyDayElement
    'my-login': HTMLMyLoginElement
  }

  interface ElementTagNameMap {
    'my-auth': HTMLMyAuthElement;
    'my-day': HTMLMyDayElement;
    'my-login': HTMLMyLoginElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
