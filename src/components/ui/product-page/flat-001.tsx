import { ProductPage } from './ProductPage';
import { backpackProductData } from './demo-data';

export default function FlatProductPage() {
  return (
    <ProductPage
      theme="flat"
      layout="standard"
      data={backpackProductData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
