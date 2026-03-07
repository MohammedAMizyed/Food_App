import { api } from "@/Api"
import type { MealsResponse } from "@/types/foodResponseType"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async (search: string) => {
  const response = await api.get<MealsResponse>(`/search.php`, {
    params: {
      s: search,
    },
  })

  return response.data
}

export const useFood = (search: string) => {
  return useQuery({
    queryKey: ["food", search],
    queryFn: () => fetchingData(search),
  })
}
