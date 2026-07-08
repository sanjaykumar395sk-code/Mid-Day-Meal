export interface FoodItem {
  id: number;
  foodName: string;
  unit: string;
  quantityPerStudent: number;
  pricePerUnit?: number;   // optional
}
