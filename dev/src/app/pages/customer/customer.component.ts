import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  userUID = firebase.auth().currentUser.uid;
  usersCustomerDB = firebase.database().ref('customers/' + this.userUID);

  allCustomerData: any = [];
  allCustomers: any = [];
  showingCustomer: boolean = false;
  openCustomerUID: string = '';

  customerFirstName: string = '';
  customerLastName: string = '';
  customerEmail: string = '';

  selectedCustomer = {
    first: null,
    last: null,
    email: null,
    signup: null,
    points: null,
    updated: null,
    phone: null,
    link: null,
  };

  constructor() { }

  addNewCustomer() {
    const date = new Date().toString();
    this.usersCustomerDB.push({
      first: this.customerFirstName,
      last: this.customerLastName,
      email: this.customerEmail,
      signup: date,
      points: 0,
      updated: date,
      phone: null,
      link: null
    }).then(() => {
      this.customerFirstName = '';
      this.customerLastName = '';
      this.customerEmail = '';
    });
  }

  refineCustomers() {
    this.allCustomers = [];
    for (let x = 0, max = this.allCustomerData.length; x < max; x++) {
      const customer = this.allCustomerData[x];
      let valid = true;
      if (this.customerFirstName && customer.first.toLowerCase().indexOf(this.customerFirstName.toLowerCase()) === -1) {
        valid = false;
      }
      if (this.customerLastName && customer.last.toLowerCase().indexOf(this.customerLastName.toLowerCase()) === -1) {
        valid = false;
      }
      if (this.customerEmail && customer.email.toLowerCase().indexOf(this.customerEmail.toLowerCase()) === -1) {
        valid = false;
      }
      if (valid) {
        this.allCustomers.push(customer);
      }
    }
  }

  formatDate(date) {
    date = new Date(date);
    const day = date.getDate();
    let monthIndex = date.getMonth();
    monthIndex++;
    const year = date.getFullYear();
    return monthIndex + '/' + day + '/' + year;
  }

  openCustomer(uid) {
    this.showingCustomer = true;
    firebase.database().ref('customers/' + this.userUID + '/' + uid).on('value', (snapshot) => {
      this.selectedCustomer = snapshot.val();
      this.openCustomerUID = uid;
    });
  }

  updateCustomer(uid) {
    firebase.database().ref('customers/' + this.userUID + '/' + uid).set(this.selectedCustomer).then(() => {
      this.showingCustomer = false;
    });
  }

  deleteCustomer(uid) {
    firebase.database().ref('customers/' + this.userUID + '/' + uid).remove();
    this.getAllCustomers();
    this.showingCustomer = false;
  }

  getAllCustomers() {
    this.usersCustomerDB.on('value', (snapshot) => {
      const customers = snapshot.val();
      if (customers) {
        const objectToArray = Object.keys(customers).map((key) => {
          customers[key].uid = key;
          return customers[key];
        });
        this.allCustomerData = objectToArray;
        this.allCustomers = objectToArray;
      } else {
        this.allCustomerData = [];
        this.allCustomers = [];
      }
    });
  }

  ngOnInit() {
    this.getAllCustomers();
  }

}
