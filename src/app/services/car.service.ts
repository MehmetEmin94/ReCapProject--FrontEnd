import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl="https://localhost:44384/api/";
  constructor(private HttpClient:HttpClient) { }
  
 getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
     }
}
