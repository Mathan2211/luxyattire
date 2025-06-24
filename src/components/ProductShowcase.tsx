
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingCart, Star, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  badge?: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      name: "Executive Essential Tee",
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 127,
      colors: ['#2C2C2C', '#FFFFFF', '#1E3A8A', '#059669'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      badge: "Best Seller",
      image: "premium-charcoal",
      isBestseller: true
    },
    {
      id: 2,
      name: "Minimalist Pro",
      price: 79,
      rating: 4.8,
      reviews: 89,
      colors: ['#FFFFFF', '#F3F4F6', '#E5E7EB'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: "minimalist-white",
      isNew: true
    },
    {
      id: 3,
      name: "Urban Professional",
      price: 95,
      rating: 4.9,
      reviews: 156,
      colors: ['#1F2937', '#374151', '#6B7280'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      badge: "Limited Edition",
      image: "urban-gray"
    },
    {
      id: 4,
      name: "Sustainable Classic",
      price: 85,
      rating: 4.7,
      reviews: 203,
      colors: ['#065F46', '#047857', '#059669'],
      sizes: ['S', 'M', 'L', 'XL'],
      badge: "Eco-Friendly",
      image: "sustainable-green"
    }
  ];

  const colorNames: { [key: string]: string } = {
    '#2C2C2C': 'Charcoal',
    '#FFFFFF': 'White',
    '#1E3A8A': 'Navy',
    '#059669': 'Forest',
    '#F3F4F6': 'Light Gray',
    '#E5E7EB': 'Silver',
    '#1F2937': 'Graphite',
    '#374151': 'Slate',
    '#6B7280': 'Steel',
    '#065F46': 'Deep Forest',
    '#047857': 'Emerald',
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover-lift"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-luxury-cream to-white flex items-center justify-center">
            <div className="text-center text-luxury-stone">
              <div className="text-4xl mb-2">👕</div>
              <p className="text-sm font-medium">{product.name}</p>
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.isNew && (
              <Badge className="bg-luxury-gold text-white">NEW</Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-luxury-charcoal text-white">
                <Star className="w-3 h-3 mr-1" />
                Best Seller
              </Badge>
            )}
            {product.badge && !product.isNew && !product.isBestseller && (
              <Badge variant="secondary">{product.badge}</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white">
              <Heart className="w-4 h-4" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedColor(product.colors[0]);
                    setSelectedSize(product.sizes[0]);
                  }}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Quick Add to Cart */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button className="w-full bg-white text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-luxury-charcoal text-lg group-hover:text-luxury-gold transition-colors duration-200">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-luxury-stone">{product.rating}</span>
              </div>
              <span className="text-sm text-luxury-stone">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-luxury-charcoal">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-luxury-stone line-through">${product.originalPrice}</span>
              )}
            </div>
            
            {/* Color options */}
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: color }}
                  title={colorNames[color]}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-xs text-luxury-stone">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-luxury-gold" />
            <p className="text-luxury-gold font-medium tracking-wider uppercase">Featured Collection</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-charcoal">
            Professional Excellence
          </h2>
          <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
            Carefully crafted t-shirts that seamlessly blend comfort with professional sophistication. 
            Each piece is designed for the modern professional who values quality and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedProduct && (
          <Dialog>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-luxury-cream to-white flex items-center justify-center">
                  <div className="text-center text-luxury-stone">
                    <div className="text-6xl mb-4">👕</div>
                    <p className="text-lg font-medium">{selectedProduct.name}</p>
                    <p className="text-sm">Color: {colorNames[selectedColor]}</p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-luxury-charcoal">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-luxury-stone">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-sm text-luxury-stone">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-luxury-charcoal">${selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-luxury-stone line-through">${selectedProduct.originalPrice}</span>
                    )}
                  </div>

                  {/* Color Selection */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-luxury-charcoal">Color</h4>
                    <div className="flex gap-3">
                      {selectedProduct.colors.map((color, index) => (
                        <button
                          key={index}
                          className={`w-10 h-10 rounded-full border-2 ${
                            selectedColor === color ? 'border-luxury-gold' : 'border-gray-200'
                          } hover:scale-110 transition-transform duration-200`}
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                          title={colorNames[color]}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-luxury-stone">Selected: {colorNames[selectedColor]}</p>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-luxury-charcoal">Size</h4>
                    <div className="flex gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-4 py-2 border rounded-md font-medium transition-colors duration-200 ${
                            selectedSize === size
                              ? 'border-luxury-gold bg-luxury-gold text-white'
                              : 'border-gray-200 text-luxury-charcoal hover:border-luxury-gold'
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="space-y-3">
                    <Button className="w-full bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white py-3">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart - ${selectedProduct.price}
                    </Button>
                    <Button variant="outline" className="w-full border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white">
                      <Heart className="w-5 h-5 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white font-medium px-8 py-4">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
