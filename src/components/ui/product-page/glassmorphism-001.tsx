import { ProductPage } from './ProductPage';
import { demoProductData } from './demo-data';

export default function GlassmorphismProductPage() {
  return (
    <ProductPage
      theme="glassmorphism"
      layout="standard"
      data={demoProductData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
