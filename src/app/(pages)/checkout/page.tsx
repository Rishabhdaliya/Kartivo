"use client";

import { CardFooter } from "@/components/ui/card";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [shippingOption, setShippingOption] = useState("delivery-today");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const cartItems = [
    {
      id: 1,
      name: "Headphones Wireless",
      price: 120.0,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCosts: { [key: string]: number } = {
    "delivery-today": 60.0,
    "delivery-7-days": 20.0,
  };

  const selectedShippingCost = shippingCosts[shippingOption] || 0;
  const discount = 0.0; // Example discount
  const total = subtotal + selectedShippingCost - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed!");
    // Implement actual order placement logic here
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
          <nav className="text-sm text-muted-foreground">
            <span>Home</span> <span className="mx-2">›</span>{" "}
            <span>Checkout</span>
          </nav>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border text-sm text-muted-foreground">
            Returning customer?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Click here to login
            </Link>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border text-sm text-muted-foreground">
            Have a coupon?{" "}
            <Link href="/coupon" className="text-primary hover:underline">
              Click here to enter your code
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Billing Details */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Billing Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name *</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name *</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select defaultValue="US">
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States (US)</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                    <SelectItem value="GB">United Kingdom</SelectItem>
                    <SelectItem value="AU">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="street-address">Street address *</Label>
                <Input
                  id="street-address"
                  placeholder="House number and street name"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Town / City *</Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Postcode ZIP *</Label>
                  <Input id="zip" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-notes">Order notes (optional)</Label>
                <Textarea
                  id="order-notes"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </CardContent>
          </Card>

          {/* Your Order Summary */}
          <Card className="lg:col-span-1 bg-card border-border h-fit">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-foreground">
                Your Order
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div className="flex justify-between text-foreground font-semibold border-b border-border pb-2">
                <span>Product</span>
                <span>Total</span>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-muted-foreground"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="space-y-2 border-t border-border pt-4">
                <h3 className="font-semibold text-foreground">Shipping</h3>
                <RadioGroup
                  value={shippingOption}
                  onValueChange={setShippingOption}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="delivery-today"
                        id="delivery-today"
                      />
                      <Label
                        htmlFor="delivery-today"
                        className="text-muted-foreground"
                      >
                        Delivery: Today
                      </Label>
                    </div>
                    <span className="font-medium text-primary">
                      ${shippingCosts["delivery-today"].toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="delivery-7-days"
                        id="delivery-7-days"
                      />
                      <Label
                        htmlFor="delivery-7-days"
                        className="text-muted-foreground"
                      >
                        Delivery: 7 Days
                      </Label>
                    </div>
                    <span className="font-medium text-primary">
                      ${shippingCosts["delivery-7-days"].toFixed(2)}
                    </span>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Shipping Cost</span>
                <span className="font-medium">
                  ${selectedShippingCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Discount</span>
                <span className="font-medium">${discount.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col p-4 border-t border-border">
              <div className="flex justify-between w-full text-xl font-bold text-foreground mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-4 w-full mb-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label
                      htmlFor="credit-card"
                      className="text-muted-foreground"
                    >
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="cash-on-delivery"
                      id="cash-on-delivery"
                    />
                    <Label
                      htmlFor="cash-on-delivery"
                      className="text-muted-foreground"
                    >
                      Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
