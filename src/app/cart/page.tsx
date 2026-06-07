'use client';

import { ShoppingCart } from '@/components/features/cart/cart';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items } = useCartStore();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-muted-brown text-center text-[2rem]">Cart</h1>
      <ShoppingCart mode="cart" />

      {items.length === 0 ? (
        <button
          disabled
          className="font-label bg-primary/60 mx-auto mt-6 block w-fit cursor-not-allowed rounded-xs p-1 px-2 text-sm text-white sm:px-10"
        >
          Checkout
        </button>
      ) : (
        <Link
          href="/checkout"
          className="font-label bg-accent mx-auto mt-6 block w-fit rounded-xs p-1 px-2 text-sm text-black sm:px-10"
        >
          Checkout
        </Link>
      )}
    </main>
  );
}
