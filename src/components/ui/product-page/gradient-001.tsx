import { ProductPage } from './ProductPage';
import { demoProductData } from './demo-data';

export default function GradientProductPage() {
  return (
    <ProductPage
      theme="gradient"
      layout="standard"
      data={demoProductData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
