import { create } from "zustand"
import { persist } from "zustand/middleware"
type Meal = {
  id: string
  title: string
  img?: string
  category?: string
  from?: string
  quantity: number
}
type CounterStore = {
  cart: Meal[]
  addToCart: (item: Omit<Meal, "quantity">) => void
  removeFromCart: (id: string) => void
}

export const useCart = create<CounterStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const exist = state.cart.find((meal) => meal.id === item.id)
          if (exist) {
            return {
              cart: state.cart.map((meal) =>
                meal.id === item.id
                  ? { ...meal, quantity: meal.quantity + 1 }
                  : meal,
              ),
            }
          }
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
          }
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "counter-storage", // اسم المفتاح في localStorage
    },
  ),
)
