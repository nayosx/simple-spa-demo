import { Component, OnInit } from '@angular/core';
import { filterProducts, optionsForFilterProduts } from 'src/app/helpers/filterProducts.helper';
import { saveFav, deleteFav, getAllfav, filterFavoritesInProducts} from 'src/app/helpers/storage.helper';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public products:Array<any> = [];
  public filters:Array<any> = [];
  private originalProducts:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.products = getAllfav();
    this.originalProducts = getAllfav();
    this.filters = optionsForFilterProduts();
  }

  public deleteFromFavorites(product:any):void {

    deleteFav(product.id);
    this.products = getAllfav();
    this.originalProducts = getAllfav();
    console.log(this.products);
  }

  public onChangeFilter(e:any):void {
    const {value} = e.target;
    this.products = filterProducts(parseInt(value), this.originalProducts);
    console.log(this.products);
    console.log(value);
  }

}
