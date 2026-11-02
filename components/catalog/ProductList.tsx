"use client";

import { useState } from "react";
import { Package, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types/product";

export default function ProductList({ products }: { products: Product[] }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center gap-2 text-sm font-medium">
        <ShoppingCart className="size-4" />
        <span>В корзине: {cartCount}</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="mx-6 flex h-32 items-center justify-center rounded-lg bg-muted">
              <Package className="size-10 text-muted-foreground" />
            </div>

            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>

            <CardContent className="mt-auto">
              <p className="text-xl font-bold">{product.price} ₽</p>
              <p className="text-sm text-muted-foreground">
                {product.inStock ? "В наличии" : "Нет в наличии"}
              </p>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full"
                disabled={!product.inStock}
                onClick={() => setCartCount(cartCount + 1)}
              >
                <ShoppingCart />
                В корзину
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}