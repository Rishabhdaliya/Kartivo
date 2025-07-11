'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SN</span>
              </div>
              <span className="text-xl font-bold">ShopNext</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted e-commerce destination for quality products at unbeatable prices. We are
              committed to providing exceptional shopping experiences.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/products?category=electronics"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Electronics
              </Link>
              <Link
                href="/products?category=clothing"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Clothing
              </Link>
              <Link
                href="/products?category=accessories"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Accessories
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Returns & Exchanges
              </Link>
              <Link
                href="/size-guide"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Size Guide
              </Link>
              <Link
                href="/support"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Support Center
              </Link>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@shopnext.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-SHOPNEXT</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} ShopNext. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex space-x-2">
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold">VISA</span>
              </div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold">MC</span>
              </div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold">AMEX</span>
              </div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold">PP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
