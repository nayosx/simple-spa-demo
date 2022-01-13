const FAVORITES = 'favorites';

const saveFav = (data:any) => {
    let favorites = (localStorage.getItem(FAVORITES) != null) ? JSON.parse(localStorage[FAVORITES]) :[]
    favorites.push(data);
    localStorage.setItem(FAVORITES, JSON.stringify(favorites));
}

const deleteFav = (idProduct:number) => {
    let favorites = JSON.parse(localStorage[FAVORITES]) as Array<any>;
    favorites = favorites.filter(fav => fav.id != idProduct);
    localStorage.setItem(FAVORITES, JSON.stringify(favorites));
}

const getAllfav = ():Array<any> => {
    return (localStorage.getItem(FAVORITES) != null) ? JSON.parse(localStorage[FAVORITES]) as Array<any> : [];
}

const filterFavoritesInProducts = (favs:Array<any>, items:Array<any>):Array<any> => {
    let output:Array<any> = [];
    if(items.length > 0) {
      output = items.map( item => {
        item.isFavorite = (favs.some(fav => fav.id == item.id))? true : false;
        return item;
      });
    }
    return output;
}

const filterFavoriteProduct = (id:number):any => {
    let favorites = (localStorage.getItem(FAVORITES) != null) ? JSON.parse(localStorage[FAVORITES]) as Array<any> : [];
    let tempFavorites = favorites.filter( favorite => favorite.id == id);
    let obj = (tempFavorites.length > 0) ? tempFavorites[0] : {};
    return obj;
}

export {
    FAVORITES,
    saveFav,
    deleteFav,
    getAllfav,
    filterFavoritesInProducts,
    filterFavoriteProduct
}