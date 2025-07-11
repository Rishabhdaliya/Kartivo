"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Grid3X3,
  List,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const products = [
  {
    id: 1,
    name: "Headphones Wireless",
    price: 120.0,
    originalPrice: 150.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "headphones",
  },
  {
    id: 2,
    name: "Gaming Headset Kids",
    price: 135.0,
    originalPrice: 160.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "headphones",
  },
  {
    id: 3,
    name: "Tablet - Nexus Smart Tablet",
    price: 335.0,
    originalPrice: 400.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "tablets",
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    price: 1199.0,
    originalPrice: 1299.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "phones",
  },
  {
    id: 5,
    name: "Apple - iPad Air",
    price: 599.0,
    originalPrice: 699.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "tablets",
  },
  {
    id: 6,
    name: "DeepCool Air Cooler",
    price: 85.0,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "cooling",
  },
  {
    id: 7,
    name: "Apple Watch Series 8",
    price: 399.0,
    originalPrice: 449.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "smartwatch",
  },
  {
    id: 8,
    name: "Beats Studio Buds",
    price: 149.99,
    originalPrice: 179.99,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "headphones",
    badge: "FEATURED",
  },
  {
    id: 9,
    name: "Sony WH-1000XM4",
    price: 279.0,
    originalPrice: 349.0,
    image:
      "https://images.unsplash.com/photo-1739979054787-719a848cd684?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "headphones",
  },
];

const categories = [
  { name: "Headphones", count: 15, key: "headphones" },
  { name: "Smart Watch", count: 8, key: "smartwatch" },
  { name: "Gaming", count: 12, key: "gaming" },
  { name: "Laptop", count: 6, key: "laptop" },
  { name: "Clothing", count: 4, key: "clothing" },
  { name: "Shoes", count: 7, key: "shoes" },
];

export function ShopGrid() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  // const handleColorChange = (color: string, checked: boolean) => {
  //   if (checked) {
  //     setSelectedColors([...selectedColors, color])
  //   } else {
  //     setSelectedColors(selectedColors.filter((c) => c !== color))
  //   }
  // }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Shop Grid</h1>
          <nav className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">›</span>{" "}
            <span>Shop Grid</span>
          </nav>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setIsMobileFiltersOpen(true)}
            className="w-full flex items-center justify-center space-x-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>

        <div className="flex gap-6 relative">
          {/* Mobile Sidebar Overlay */}
          {isMobileFiltersOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
            fixed lg:static inset-y-0 left-0  w-80 bg-white lg:bg-transparent
            transform transition-transform duration-300 ease-in-out lg:transform-none
            ${
              isMobileFiltersOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            overflow-y-auto lg:overflow-visible h-full lg:h-auto
            p-4 lg:p-0 space-y-6
          `}
          >
            {/* Mobile Close Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Price Filter */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center justify-between">
                  Price Filter
                  <SlidersHorizontal className="w-4 h-4" />
                </h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-4">
                <Collapsible
                  open={isCategoriesOpen}
                  onOpenChange={setIsCategoriesOpen}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <h3 className="font-semibold">Categories</h3>
                    {isCategoriesOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-3">
                    {categories.map((category) => (
                      <div
                        key={category.key}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={category.key}
                            checked={selectedCategories.includes(category.key)}
                            onCheckedChange={(checked) =>
                              handleCategoryChange(
                                category.key,
                                checked as boolean
                              )
                            }
                          />
                          <Label htmlFor={category.key} className="text-sm">
                            {category.name}
                          </Label>
                        </div>
                        <span className="text-xs text-gray-500">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 bg-white p-4  shadow-sm space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-600">
                Showing 1–12 of 36 results
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Default Sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Sorting</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`
              grid gap-4 sm:gap-6
              ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }
            `}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow p-0"
                >
                  <CardContent className="px-0">
                    <div className="relative ">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="w-full h-48 rounded-t-sm object-cover  "
                      />
                      {product.badge && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {renderStars(product.rating)}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
