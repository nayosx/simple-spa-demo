import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/network/store.service';
import { saveFav, deleteFav, getAllfav, filterFavoritesInProducts} from 'src/app/helpers/storage.helper';
import { filterProducts, optionsForFilterProduts } from 'src/app/helpers/filterProducts.helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:Array<any> = [];
  private originalProducts:Array<any> = [];

  public filters:Array<any> = [];

  constructor(private productosService:StoreService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts():void {

    this.productosService.retrieve().subscribe(
      response => {
        this.products = filterFavoritesInProducts(getAllfav(), response.body);
        this.originalProducts = this.products.map(product => product);
        this.filters = optionsForFilterProduts();
      },
      error => {
        console.log('a ocurrido un error');
      }
    );

  }

  public saveFavorite(product:any):void {
    if(product.isFavorite) {
      deleteFav(product.id);
    } else {
      product.isFavorite = true;
      saveFav(product);
    }
    this.products = filterFavoritesInProducts(getAllfav(), this.products);
  }

  public onChangeFilter(e:any):void {
    const {value} = e.target;
    this.products = filterProducts(parseInt(value), this.originalProducts);
    console.log(this.products);
    console.log(value);
  }

}
