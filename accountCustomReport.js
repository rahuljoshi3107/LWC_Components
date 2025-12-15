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

   //Without initialWidth
    /*
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
    ];*/

    //with initialWidth 

    columns = [
        { label: 'Name', fieldName: 'Name', initialWidth: 200 },
        { label: 'Industry', fieldName: 'Industry', initialWidth: 150 },
        { label: 'Phone', fieldName: 'Phone', type: 'phone', initialWidth: 150 },
        { label: 'Type', fieldName: 'Type', initialWidth: 140 },
        { label: 'Website', fieldName: 'Website', type: 'url', initialWidth: 220 },
        { label: 'Rating', fieldName: 'Rating', initialWidth: 120 },
        { label: 'Account Number', fieldName: 'AccountNumber', initialWidth: 160 },
        {
            label: 'Annual Revenue',
            fieldName: 'AnnualRevenue',
            type: 'currency',
            initialWidth: 160
        },
        { label: 'Billing City', fieldName: 'BillingCity', initialWidth: 150 },
        { label: 'Billing State', fieldName: 'BillingState', initialWidth: 140 },
        { label: 'Billing Country', fieldName: 'BillingCountry', initialWidth: 160 },
        { label: 'Name', fieldName: 'Name', initialWidth: 200 },
        { label: 'Industry', fieldName: 'Industry', initialWidth: 150 },
        { label: 'Phone', fieldName: 'Phone', type: 'phone', initialWidth: 150 },
        { label: 'Type', fieldName: 'Type', initialWidth: 140 },
        { label: 'Website', fieldName: 'Website', type: 'url', initialWidth: 220 },
        { label: 'Rating', fieldName: 'Rating', initialWidth: 120 },
        { label: 'Account Number', fieldName: 'AccountNumber', initialWidth: 160 },
        {
            label: 'Annual Revenue',
            fieldName: 'AnnualRevenue',
            type: 'currency',
            initialWidth: 160
        },
        { label: 'Billing City', fieldName: 'BillingCity', initialWidth: 150 },
        { label: 'Billing State', fieldName: 'BillingState', initialWidth: 140 },
        { label: 'Billing Country', fieldName: 'BillingCountry', initialWidth: 160 }
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
