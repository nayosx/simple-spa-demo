const optionsForFilterProduts = ():Array<any> => {
    return [
        {
          id:1,
          value: 'De A-Z'
        },
        {
          id:2,
          value: 'De Z-A'
        },
        {
          id:3,
          value: 'Mayor Precio'
        },
        {
          id:4,
          value: 'Menor Precio'
        }
      ];
}

const filterProducts = (option:number, products:Array<any>):Array<any> => {

    let output:Array<any> = [];

    switch(option) {
      case 1:
        output = products.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case 2:
        output = products.sort((a, b) => { 
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case 3:
        output = products.sort((itemA, itemB) => { return itemB.price - itemA.price});
        break;
      case 4:
        output = products.sort((itemA, itemB) => { return itemA.price - itemB.price});
        break;
      default:
          output = [];
    }
    return output;
  }

  export { filterProducts, optionsForFilterProduts }