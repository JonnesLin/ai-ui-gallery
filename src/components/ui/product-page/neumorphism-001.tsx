import { ProductPage } from './ProductPage';
import { demoProductData } from './demo-data';

export default function NeumorphismProductPage() {
  return (
    <ProductPage
      theme="neumorphism"
      layout="standard"
      data={demoProductData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
