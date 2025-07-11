'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Headphones Wireless',
      price: 120.0,
      quantity: 1,
      image: '/headphones-wireless.png'
    }
  ]);
  const [shippingOption, setShippingOption] = useState('flat-rate');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 200;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const freeShippingProgress = (subtotal / freeShippingThreshold) * 100;

  const shippingCosts: { [key: string]: number } = {
    'flat-rate': 20.0,
    'local-pickup': 25.0,
    'free-shipping': 0.0
  };

  const selectedShippingCost =
    shippingOption === 'free-shipping' && remainingForFreeShipping <= 0
      ? 0
      : shippingCosts[shippingOption] || 0;

  const total = subtotal + selectedShippingCost;

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <nav className="text-sm text-muted-foreground">
            <span>Home</span> <span className="mx-2">›</span> <span>Shopping Cart</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Free Shipping Progress */}
            {remainingForFreeShipping > 0 ? (
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Add ${remainingForFreeShipping.toFixed(2)} more to qualify for free shipping
                </p>
                <Progress value={freeShippingProgress} className="h-2" />
              </div>
            ) : (
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <p className="text-sm text-primary font-medium">
                  Congratulations! You qualify for free shipping!
                </p>
              </div>
            )}

            {/* Cart Items Table */}
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] md:w-[150px] lg:w-[200px]">Product</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                          Your cart is empty.
                        </TableCell>
                      </TableRow>
                    ) : (
                      cartItems.map(item => (
                        <TableRow key={item.id}>
                          <TableCell className="flex items-center space-x-3 py-4">
                            <Image
                              src={item.image || '/placeholder.svg'}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="rounded-md object-cover"
                            />
                            <span className="font-medium text-foreground text-sm md:text-base">
                              {item.name}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-medium text-foreground">
                            ${item.price.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7 bg-transparent"
                                onClick={() => handleQuantityChange(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={e =>
                                  setCartItems(prevItems =>
                                    prevItems.map(cartItem =>
                                      cartItem.id === item.id
                                        ? {
                                            ...cartItem,
                                            quantity: Math.max(
                                              1,
                                              Number.parseInt(e.target.value) || 1
                                            )
                                          }
                                        : cartItem
                                    )
                                  )
                                }
                                className="w-16 text-center"
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7 bg-transparent"
                                onClick={() => handleQuantityChange(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-end p-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  disabled={cartItems.length === 0}
                >
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary Card */}
          <Card className="lg:col-span-1 bg-card border-border h-fit">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-foreground">Subtotal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Shipping</h3>
                <RadioGroup value={shippingOption} onValueChange={setShippingOption}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flat-rate" id="flat-rate" />
                    <Label htmlFor="flat-rate" className="text-muted-foreground">
                      Flat rate:{' '}
                      <span className="font-medium text-primary">
                        ${shippingCosts['flat-rate'].toFixed(2)}
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="local-pickup" id="local-pickup" />
                    <Label htmlFor="local-pickup" className="text-muted-foreground">
                      Local pickup:{' '}
                      <span className="font-medium text-primary">
                        ${shippingCosts['local-pickup'].toFixed(2)}
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="free-shipping"
                      id="free-shipping"
                      disabled={remainingForFreeShipping > 0}
                    />
                    <Label htmlFor="free-shipping" className="text-muted-foreground">
                      Free shipping
                      {remainingForFreeShipping > 0 && (
                        <span className="ml-2 text-xs text-destructive">
                          (Add ${remainingForFreeShipping.toFixed(2)} more)
                        </span>
                      )}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col p-4 border-t border-border">
              <div className="flex justify-between w-full text-xl font-bold text-foreground mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full">
                <Button className="w-full">Proceed to Checkout</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
