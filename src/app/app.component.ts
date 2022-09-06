import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars';
  cars: any
  brands: any
  selectedBrand = ""
  carsToShow: any;
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.getCars();
    this.appService.getBrands().then((res) => {
      this.brands = res as any
      this.brands = this.brands.filter((ele: null) => ele != null)
    })
  }
  async getCars() {
    this.appService.getCars().then((res) => {
      this.cars = res as any
      this.cars = this.cars.filter((ele: null) => ele != null)
      this.carsToShow = this.cars
    })
  }
  async filterCars() {
    this.carsToShow = this.cars.filter((ele: { brand: any; }) => ele.brand == this.selectedBrand)
  }
  resetFilter() {
    this.getCars()
  }
}
