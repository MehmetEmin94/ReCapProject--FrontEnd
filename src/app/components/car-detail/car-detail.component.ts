import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImages } from 'src/app/models/carImages';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:Car;
  images:CarImages[]=[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  
  imageBasePath="https://localhost:44384"
  slideConfig={"slidesToShow": 1, "slidesToScroll": 1,"autoplay":true,"autoplaySpeed":1500, "adaptiveHeight": true,"arrows":true};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
          this.getCarDetail(params["id"])
        
this.getImagesByCarId(params["id"])
        }})
  }
  getCarDetail(id:number){
    this.carService.getCarDetail(id).subscribe(response=>{
      this.carDetail=response.data
    })
  }
  getImagesByCarId(id:number){
    this.carService.getImagesByCarId(id).subscribe(response=>{
      this.images=response.data
    })
  }

}
