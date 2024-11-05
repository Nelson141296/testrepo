import { LightningElement, api } from 'lwc';

export default class PicklistRenderer extends LightningElement {
    @api record; // Record passed from DataTable
    @api fieldName; // Field name containing the picklist value

    get options() {
        // Assume picklistValues are defined in the record
        return this.record.fields[this.fieldName].picklistValues.map(option => ({
            label: option.label,
            value: option.value,
        }));
    }
}