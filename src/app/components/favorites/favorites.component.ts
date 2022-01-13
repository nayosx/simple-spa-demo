import { Component, OnInit } from '@angular/core';
import { saveFav, deleteFav, getAllfav, filterFavoritesInProducts} from 'src/app/helpers/storage.helper';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public products:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.products = getAllfav();
  }

  public deleteFromFavorites(product:any):void {

    deleteFav(product.id);
    this.products = getAllfav();
    console.log(this.products);
  }

}
