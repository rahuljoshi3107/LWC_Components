import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountLWCController.getAccountList';
import { loadStyle } from 'lightning/platformResourceLoader';
import styles from '@salesforce/resourceUrl/cssdatatable';

export default class AccountCustomReport  extends LightningElement {
    accounts;
    error;
    isLibLoaded = false;
    
    renderedCallback() {
        if (this.isLibLoaded) return;
        this.isLibLoaded = true;
        loadStyle(this, styles)
        .then(() => {
            console.log('Files loaded.');
        })
        .catch(error => {
            console.error('Error loading ', error);
        });
    }

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Type', fieldName: 'Type' },
        { label: 'Website', fieldName: 'Website', type: 'url' },
        { label: 'Rating', fieldName: 'Rating' },
        { label: 'Account Number', fieldName: 'AccountNumber' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
        { label: 'Billing City', fieldName: 'BillingCity' },
        { label: 'Billing State', fieldName: 'BillingState' },
        { label: 'Billing Country', fieldName: 'BillingCountry' }
    ];

    

    @wire(getAccountList)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
}
