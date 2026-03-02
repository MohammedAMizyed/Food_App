import { api } from "@/Api"
import type { MealsResponse } from "@/types/foodResponseType"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async () => {
  const response = await api.get<MealsResponse>("/search.php?s=chicken")

  return response.data
}

export const useFood = () => {
  return useQuery({
    queryKey: ["food"],
    queryFn: fetchingData,
  })
}
