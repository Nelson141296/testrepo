import { LightningElement, api } from 'lwc';

export default class ImageRenderer extends LightningElement {
    @api record; // Record passed from DataTable
    @api fieldName; // Field name containing the image URL

    get imageUrl() {
        return this.record.fields[this.fieldName].value; // Get the image URL
    }
}