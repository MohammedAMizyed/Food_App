import { api } from "@/Api"
import type { CategoriesResponse } from "@/types/categoriesTypeResponse"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async () => {
  const response = await api.get<CategoriesResponse>("/categories.php")
  return response.data
}

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchingData,
  })
}
