/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  description: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}
