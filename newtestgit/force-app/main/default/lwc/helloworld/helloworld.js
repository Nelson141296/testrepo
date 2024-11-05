import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api textColor = 'Red'; 
    @api backgroundColor = 'Yellow'; 
    get divStyle() {
        return `color: ${this.textColor}; background-color: ${this.backgroundColor}; padding: 10px; border-radius: 5px;`;
    }
}