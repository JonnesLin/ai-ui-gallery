import { ProductPage } from './ProductPage';
import { phoneProductData } from './demo-data';

export default function MaterialProductPage() {
  return (
    <ProductPage
      theme="material"
      layout="standard"
      data={phoneProductData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
