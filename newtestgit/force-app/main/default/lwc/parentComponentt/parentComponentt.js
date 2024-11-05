import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name = '';

    handleEvent(event) {
        this.name = event.detail;
    }
}