import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rentalAll:Rental;
  rental:Rental;
  carAll:Car;
  car:Car;
  customerAll:Customer;
  customer:Customer;
  constructor() { }

  ngOnInit(): void {
  }
  setCurrentCustomer(customerAll:Customer){
    this.customer=customerAll;
  }
  setCurrentCar(carAll:Car){
    this.car=carAll;
  }
  setCurrentRental(rentalAll:Rental){
    this.rental=rentalAll;
  }

}
