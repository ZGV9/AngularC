export class Clothes {
    public id: number;
    public name: string;
    public size: string;
    public price: number;
    public available: boolean;
    public image: string;
  
    constructor(id: number, name: string, brand: string, size: string,price: number,available: boolean, image: string) {
      this.id = id;
      this.name = name;
      this.size = size;
      this.price = price;
      this.available = available;
      this.image = image;
    }
  }
  