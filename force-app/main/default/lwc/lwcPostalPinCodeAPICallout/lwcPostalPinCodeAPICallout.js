import { LightningElement, wire, api } from 'lwc';
import postOfficeByPincode from '@salesforce/apex/PostalPinCodeAPICallout.postOfficeByPincode';

export default class LwcPostalPinCodeAPICallout extends LightningElement {
    pincode;
    Name;
    PincodeValue;
    parsedData;
    handleonchange(event){
        this.pincode = event.target.value;
        console.log(event.target.value);
    }
    buttonClick(){
       // alert('Response ');
        postOfficeByPincode({pincode: this.pincode}).then((response) => {
          this.parsedData = response;
        })
        
    }
}