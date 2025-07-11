"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Star,
  Heart,
  MessageCircle,
  CheckCircle2,
  Truck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Dummy product data
const product = {
  id: "inika-mineral-sunkissed",
  name: "INIKA Mineral Sunkissed",
  description:
    "Unique that natural glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the...",
  fullDescription:
    "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing medium to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  price: 80.75,
  originalPrice: 99.99,
  colors: [
    { name: "Light", hex: "#F0D9B5" },
    { name: "Medium", hex: "#D4A77C" },
    { name: "Dark", hex: "#A97B5B" },
    { name: "Deep", hex: "#7A4F3A" },
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "INIKA Mineral Sunkissed main",
    },
    {
      src: "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "INIKA Mineral Sunkissed thumbnail 1",
    },
    {
      src: "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100",
      alt: "INIKA Mineral Sunkissed thumbnail 2",
    },
  ],
  rating: 4,
  reviewsCount: 1,
  sku: "SCN782NVMS",
  category: "Discover Skincare",
  tags: ["Beauty", "Makeup", "Bronzer"],
  returnPolicy: "30 days easy returns",
  deliveryTime: "Order yours before 2:30pm for same day dispatch",
  paymentMethods: ["Visa", "Mastercard", "Amex", "PayPal", "Stripe"],
};

const relatedProducts = [
  {
    id: 1,
    name: "Tea Tree Lemon Shampoo",
    price: 48.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hair Care",
  },
  {
    id: 2,
    name: "Organic Face Cleanser",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Skincare",
  },
  {
    id: 3,
    name: "Natural Lip Balm",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Makeup",
  },
];

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex);
  const [mainImage, setMainImage] = useState(product.images[0].src);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-chart-4 text-chart-4" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-2">›</span>
          <Link href="/products" className="hover:underline">
            Discover Skincare
          </Link>{" "}
          <span className="mx-2">›</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  width={80}
                  height={80}
                  className={`rounded-md object-cover cursor-pointer border-2 ${
                    mainImage === img.src
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img.src)}
                />
              ))}
            </div>
            <div className="flex-1 relative">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                  Sale!
                </Badge>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              {product.name}
            </h1>
            <div className="flex">{renderStars(3)}</div>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}{" "}
              <Link href="#" className="text-primary hover:underline">
                See more
              </Link>
            </p>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Color:{" "}
                <span className="font-normal text-muted-foreground">
                  {product.colors.find((c) => c.hex === selectedColor)?.name}
                </span>
              </h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <div
                    key={color.hex}
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                      selectedColor === color.hex
                        ? "border-primary"
                        : "border-border"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.hex)}
                    aria-label={`Select color ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-border rounded-md">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none bg-transparent"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(1, Number.parseInt(e.target.value) || 1)
                    )
                  }
                  className="w-16 text-center border-y-0 rounded-none focus-visible:ring-0"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none bg-transparent"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1 h-10">Add to Cart</Button>
              <Button variant="outline" className="h-10 bg-transparent">
                Buy Now
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Heart className="h-4 w-4" />
                <span>Compare</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Heart className="h-4 w-4" />
                <span>Add Wishlist</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ask a question</span>
              </Button>
            </div>

            <Separator />

            {/* Product Details */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                <Link href="#" className="text-primary hover:underline">
                  {product.category}
                </Link>
              </p>
              <p>
                <strong>Tag:</strong>{" "}
                {product.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-primary hover:underline mr-1"
                  >
                    {tag}
                    {index < product.tags.length - 1 ? "," : ""}
                  </Link>
                ))}
              </p>
            </div>

            <Separator />

            {/* Policy and Delivery */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-foreground">
                <RefreshCw className="h-4 w-4 text-primary" />
                <span>{product.returnPolicy}</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>{product.deliveryTime}</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Guaranteed safe & secure checkout</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              {product.paymentMethods.map((method, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-2 py-1 text-xs"
                >
                  {method}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Description, Additional Information, Reviews Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional-info">
                Additional Information
              </TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({product.reviewsCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-muted-foreground leading-relaxed">
                  <p>{product.fullDescription}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="additional-info" className="mt-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-muted-foreground">
                  <p>Additional information will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-muted-foreground">
                  <p>Reviews will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group hover:shadow-lg transition-shadow bg-card border-border"
              >
                <CardContent className="p-4">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={250}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="space-y-2">
                      <h3 className="font-medium text-card-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedProduct.category}
                      </p>
                      <span className="font-bold text-lg text-foreground">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
