import { create } from "zustand"
import { persist } from "zustand/middleware"

type Meal = {
  id: string
  title: string
  img?: string
  category?: string
  from?: string
}

type CounterStore = {
  favoriteList: Meal[]
  removeFromFavorite: (id: string) => void
  addToFavorite: (meal: Meal) => void
}

export const useFavorite = create<CounterStore>()(
  persist(
    (set) => ({
      favoriteList: [],

      removeFromFavorite: (id) =>
        set((state) => ({
          favoriteList: state.favoriteList.filter((meal) => meal.id !== id),
        })),

      addToFavorite: (meal) =>
        set((state) => {
          const exist = state.favoriteList.find((item) => item.id === meal.id)

          if (exist) {
            return {
              favoriteList: state.favoriteList.filter(
                (item) => item.id !== meal.id,
              ),
            }
          }

          return {
            favoriteList: [...state.favoriteList, meal],
          }
        }),
    }),
    {
      name: "favorite-storage",
    },
  ),
)
