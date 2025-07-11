'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/public/assets/hero.jpg"
          alt="Winter Collection 2023 - Be your kind of beauty"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Collection Badge */}
          <div className="mb-6">
            <Badge
              variant="secondary"
              className="bg-white/90 text-foreground backdrop-blur-sm px-4 py-2 text-sm font-medium"
            >
              Winter Collection 2023
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Be your kind
            <br />
            <span className="text-white/90">of beauty</span>
          </h1>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">High-end</div>
                <div className="text-sm text-white/80">Cosmetics</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Vegan</div>
                <div className="text-sm text-white/80">Product</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Express</div>
                <div className="text-sm text-white/80">Make-up</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="group bg-white/90 text-foreground hover:bg-white backdrop-blur-sm px-8 py-3 text-base font-semibold"
              >
                Discover Now
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </section>
  );
}
