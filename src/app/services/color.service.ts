import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Color } from '../models/color';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44384/api/";
  
  constructor(private HttpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall"
    return this.HttpClient.get<ListResponseModel<Color>>(newPath);
  }
}
