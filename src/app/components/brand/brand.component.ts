import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
  }
getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })
}
}
