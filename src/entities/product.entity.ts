import {uuid} from 'uuidv4';
export class Product {

  private id = uuid();
  private description: string;
  private name: string;
  private price: number;

  constructor(
   desc: string,
   prodName: string,
   prodPrice: number
  ) {
    this.description = desc;
    this.name = prodName;
    this.price = prodPrice;
  }

  get productId(): string {
      return this.id;
  }

  get productDescription(): string {
    return this.description;
  }

  get productName(): string {
      return this.name;
  }

  get productPrice(): number {
      return this.price;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}
