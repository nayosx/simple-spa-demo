import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/network/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private idProduct:any = 0;
  public product:any = null;

  public isErrorOnId:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService:StoreService
  ) { }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.paramMap.get('id');

    this.getProduct();
  }

  private getProduct():void {
    if(!isNaN(this.idProduct)) {
      this.isErrorOnId = false;
      this.productService.getById(this.idProduct).subscribe(
        response => {
          this.product = response.body;
          console.log(this.product);
        }
      );
    } else {
      this.isErrorOnId = true;
    }
  }

}
