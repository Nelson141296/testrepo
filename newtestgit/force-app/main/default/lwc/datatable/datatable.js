import { LightningElement, wire, track } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/AccountContactController.getAccountsWithContacts';

export default class AccountContactTable extends LightningElement {
    @track accounts = [];
    @track isLoading = true;

    columns = [
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        {
            label: 'Contacts',
            fieldName: 'Contacts',
            type: 'text',
            cellAttributes: {
                class: 'slds-truncate',
                title: { fieldName: 'Contacts' }
            }
        }
    ];

    @wire(getAccountsWithContacts)
    wiredAccounts({ error, data }) {
        this.isLoading = false;
        if (data) {
            this.accounts = data.map(account => {
                const contacts = account.Contacts.map(contact => contact.Name).join(', ');
                return { ...account, Contacts: contacts };
            });
        } else if (error) {
            console.error('Error fetching accounts with contacts:', error);
        }
    }
}