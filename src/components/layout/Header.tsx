"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Type definitions for navigation
interface DropdownItem {
  name: string;
  href: string;
  description: string;
  featured?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  type: "link" | "dropdown";
  items?: DropdownItem[];
}

interface UserMenuItem {
  name: string;
  href: string;
}

// Navigation configuration
const navigationConfig: {
  mainNav: NavItem[];
  userMenu: UserMenuItem[];
} = {
  mainNav: [
    {
      name: "Home",
      href: "/",
      type: "link",
    },
    {
      name: "Products",
      href: "/products",
      type: "dropdown",
      items: [
        {
          name: "All Products",
          href: "/products",
          description: "Browse our complete collection of amazing products",
          featured: true,
        },
        {
          name: "Electronics",
          href: "/products?category=electronics",
          description: "Latest gadgets and tech accessories",
        },
        {
          name: "Clothing",
          href: "/products?category=clothing",
          description: "Fashion and apparel for everyone",
        },
        {
          name: "Accessories",
          href: "/products?category=accessories",
          description: "Complete your look with our accessories",
        },
        {
          name: "Home & Garden",
          href: "/products?category=home",
          description: "Beautiful items for your living space",
        },
        {
          name: "Sports & Fitness",
          href: "/products?category=sports",
          description: "Gear up for your active lifestyle",
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      type: "link",
    },
  ],
  userMenu: [
    {
      name: "Order History",
      href: "/orders",
    },
    {
      name: "Profile Settings",
      href: "/profile",
    },
    {
      name: "Wishlist",
      href: "/wishlist",
    },
    {
      name: "Account Settings",
      href: "/account",
    },
  ],
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const itemCount = 1; // Example item count for cart
  const user = { name: "John Doe", email: "john@example.com" }; // Example user data
  const pathname = usePathname();

  // Check if current path is home
  const isHome = pathname === "/";

  const logout = () => {
    console.log("User logged out");
    // Implement actual logout logic here (e.g., clear session, redirect)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavigationItem = (item: NavItem) => {
    if (item.type === "dropdown") {
      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger
            className={cn(
              "transition-colors bg-transparent z-40 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
              isScrolled || !isHome
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            )}
          >
            {item.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Featured item */}
              {item.items?.find((subItem) => subItem.featured) && (
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={
                        item.items.find((subItem) => subItem.featured)?.href ||
                        "#"
                      }
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {item.items.find((subItem) => subItem.featured)?.name}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {
                          item.items.find((subItem) => subItem.featured)
                            ?.description
                        }
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              )}
              {/* Regular items */}
              {item.items
                ?.filter((subItem) => !subItem.featured)
                .map((subItem) => (
                  <li key={subItem.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {subItem.name}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    return (
      <NavigationMenuItem key={item.name}>
        <Link href={item.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
              isScrolled || !isHome
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            )}
          >
            {item.name}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all border-b border-sidebar-border duration-300 ease-in-out",
        isScrolled || !isHome
          ? "bg-background/95 backdrop-blur-md  shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationConfig.mainNav.map(renderNavigationItem)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Center Logo */}
          <div className="flex-1 flex items-center justify-center md:justify-start lg:justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className={cn(
                  "h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
                  isScrolled || !isHome
                    ? "bg-primary"
                    : "bg-white/20 backdrop-blur-sm"
                )}
              >
                <span
                  className={cn(
                    "font-bold text-sm transition-colors",
                    isScrolled || !isHome
                      ? "text-primary-foreground"
                      : "text-white"
                  )}
                >
                  SN
                </span>
              </div>
              <span
                className={cn(
                  "text-xl font-bold transition-colors",
                  isScrolled || !isHome ? "text-foreground" : "text-white"
                )}
              >
                ShopNext
              </span>
            </Link>
          </div>
          {/* Right Actions */}
          <div className="flex items-center space-x-2 ml-auto md:ml-0">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "hidden sm:flex transition-colors bg-transparent hover:bg-transparent",
                isScrolled || !isHome
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              )}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            {/* Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "relative transition-colors bg-transparent hover:bg-transparent",
                  isScrolled || !isHome
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                )}
              >
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {itemCount}
                  </Badge>
                )}
                <span className="sr-only">
                  Shopping cart ({itemCount} items)
                </span>
              </Button>
            </Link>
            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "relative h-8 w-8 rounded-full transition-colors bg-transparent hover:bg-transparent",
                      isScrolled || !isHome
                        ? "hover:bg-accent"
                        : "hover:bg-white/10"
                    )}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={user.name} />
                      <AvatarFallback
                        className={cn(
                          "transition-colors",
                          isScrolled || !isHome
                            ? "bg-muted text-foreground"
                            : "bg-white/20 text-white"
                        )}
                      >
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {/* Dynamically render user menu items */}
                  {navigationConfig.userMenu.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "transition-colors bg-transparent hover:bg-transparent",
                    isScrolled || !isHome
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  )}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "md:hidden transition-colors bg-transparent hover:bg-transparent",
                    isScrolled || !isHome
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  )}
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our store
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {/* Main navigation items */}
                  {navigationConfig.mainNav.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-lg hover:text-primary transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                      {/* Show dropdown items in mobile menu */}
                      {item.type === "dropdown" && item.items && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.items.map((subItem: DropdownItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {/* User menu items for mobile */}
                  {user && (
                    <>
                      <div className="border-t pt-4 mt-4">
                        <p className="px-2 py-1 text-sm font-medium text-muted-foreground">
                          Account
                        </p>
                        {navigationConfig.userMenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-2 py-1 text-base hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <button
                          onClick={logout}
                          className="block w-full text-left px-2 py-1 text-base hover:text-primary transition-colors"
                        >
                          Log out
                        </button>
                      </div>
                    </>
                  )}
                  {!user && (
                    <Link
                      href="/auth"
                      className="block px-2 py-1 text-lg hover:text-primary transition-colors"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
