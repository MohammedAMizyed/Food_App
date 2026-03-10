import { api } from "@/Api"
import type { Meal } from "@/types/mealTypes"
import { useQuery } from "@tanstack/react-query"
const fetchingData = async (i: string | number) => {
  const response = await api.get<Meal>("/lookup.php", {
    params: {
      i,
    },
  })
  return response.data.meals[0] // API يرجع مصفوفة meals
}
export const useMeal = (i: number | string) => {
  return useQuery({
    queryKey: ["meal", i],
    queryFn: () => fetchingData(i),
  })
}
