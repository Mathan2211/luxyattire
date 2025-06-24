import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingCart, Star, Zap, Sparkles, ArrowRight } from 'lucide-react';

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
      colors: ['#1E1E1E', '#FFFFFF', '#1E3A8A', '#0D9488'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f4576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const colorNames: { [key: string]: string } = {
    '#1E1E1E': 'Charcoal',
    '#FFFFFF': 'White',
    '#1E3A8A': 'Navy',
    '#0D9488': 'Teal',
    '#F3F4F6': 'Light Gray',
    '#E5E7EB': 'Silver',
    '#1F2937': 'Graphite',
    '#374151': 'Slate',
    '#6B7280': 'Steel',
    '#065F46': 'Deep Forest',
    '#047857': 'Emerald',
    '#059669': 'Forest'
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 space-y-2">
            {product.isNew && (
              <Badge className="bg-gradient-to-r from-luxury-pink to-purple-600 text-white border-0 font-semibold">
                <Sparkles className="w-3 h-3 mr-1" />
                NEW
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-gradient-to-r from-luxury-teal to-luxury-navy text-white border-0 font-semibold">
                <Star className="w-3 h-3 mr-1" />
                Best Seller
              </Badge>
            )}
            {product.badge && !product.isNew && !product.isBestseller && (
              <Badge className="bg-white/90 text-luxury-charcoal border-0 font-semibold">{product.badge}</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 bg-white/95 hover:bg-white shadow-lg">
              <Heart className="w-4 h-4 text-luxury-pink" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="rounded-full w-10 h-10 p-0 bg-white/95 hover:bg-white shadow-lg"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedColor(product.colors[0]);
                    setSelectedSize(product.sizes[0]);
                  }}
                >
                  <Eye className="w-4 h-4 text-luxury-teal" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
          
          {/* Quick Add to Cart */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button className="w-full bg-gradient-to-r from-luxury-pink to-purple-600 hover:from-purple-600 hover:to-luxury-pink text-white border-0 rounded-xl font-semibold shadow-lg">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-bold text-luxury-charcoal text-lg group-hover:text-luxury-pink transition-colors duration-300">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-luxury-stone">{product.rating}</span>
              </div>
              <span className="text-sm text-luxury-stone">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-luxury-charcoal">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-luxury-stone line-through">${product.originalPrice}</span>
              )}
            </div>
            
            {/* Color options */}
            <div className="flex gap-2">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-7 h-7 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform duration-200 shadow-sm"
                  style={{ backgroundColor: color }}
                  title={colorNames[color]}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-7 h-7 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-xs text-luxury-stone font-semibold">
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
    <section className="py-24 bg-gradient-to-b from-white to-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-7 h-7 text-luxury-pink animate-glow" />
            <p className="text-luxury-pink font-bold tracking-wider uppercase text-lg">Featured Collection</p>
            <Zap className="w-7 h-7 text-luxury-pink animate-glow" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal text-shadow-luxury">
            Professional Excellence
          </h2>
          <p className="text-xl text-luxury-stone max-w-4xl mx-auto leading-relaxed">
            Meticulously crafted t-shirts that seamlessly blend unparalleled comfort with professional sophistication. 
            Each piece is thoughtfully designed for the modern professional who refuses to compromise on quality and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedProduct && (
          <Dialog>
            <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-3xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Product Details */}
                <div className="p-8 space-y-6 bg-gradient-to-br from-white to-luxury-cream/50">
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

        {/* Enhanced View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-luxury-teal to-luxury-navy hover:from-luxury-navy hover:to-luxury-teal text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Full Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
