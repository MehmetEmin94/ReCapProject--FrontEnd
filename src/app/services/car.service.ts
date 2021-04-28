import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { OneResponseModel } from '../models/oneResponseModel';
import { CarImages } from '../models/carImages';

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
     getCarDetail(id:number):Observable<OneResponseModel<Car>>{
       let newPath=this.apiUrl+"cars/getdetailsbyid?id="+id
       return this.HttpClient.get<OneResponseModel<Car>>(newPath);
     }
     getImagesByCarId(id:number):Observable<ListResponseModel<CarImages>>{
      let newPath=this.apiUrl+"carimages/getbycarid?carId="+id
      return this.HttpClient.get<ListResponseModel<CarImages>>(newPath);
    }
    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId
      return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
      return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    }
}
