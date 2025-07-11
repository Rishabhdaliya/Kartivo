'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shirt, Star, Truck } from 'lucide-react';

export default function HeroSectionFashion() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Collection Badge */}
          <div className="mb-6">
            <Badge
              variant="secondary"
              className="bg-rose-100 text-rose-800 px-4 py-2 text-sm font-medium"
            >
              Spring Collection 2024
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Express your
            <br />
            <span className="text-rose-600">unique style</span>
          </h1>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Shirt className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Premium</div>
                <div className="text-sm text-gray-600">Fashion</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Star className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Trending</div>
                <div className="text-sm text-gray-600">Styles</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Truck className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Fast</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="group bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-base font-semibold"
              >
                Shop Fashion
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <>
        <div className="absolute top-32 right-32 w-40 h-40 bg-rose-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl" />
      </>
    </section>
  );
}
