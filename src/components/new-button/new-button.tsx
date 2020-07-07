import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'new-button',
  styleUrl: 'new-button.scss',
  shadow: true,
})
export class NewButton implements ComponentInterface {

  @Prop({mutable: true}) text: string;

  render() {
    return (
      <button>{this.text}</button>
    );
  }

}
