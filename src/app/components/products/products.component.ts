import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/network/store.service';
import { saveFav, deleteFav, getAllfav, filterFavoritesInProducts} from 'src/app/helpers/storage.helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:Array<any> = [];

  constructor(private productosService:StoreService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts():void {

    this.productosService.retrieve().subscribe(
      response => {
        this.products = filterFavoritesInProducts(getAllfav(), response.body);

        console.log(this.products);
      },
      error => {
        console.log('a ocurrido un error');
      }
    );

  }

  public saveFavorite(product:any):void {
    saveFav(product);
    if(product.isFavorite) {
      deleteFav(product.id);
    }
    this.products = filterFavoritesInProducts(getAllfav(), this.products);
  }

}
