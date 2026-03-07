import { api } from "@/Api"
import type { CategorySearchType } from "@/types/CategorySearchResponse"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async (c: string) => {
  const response = await api.get<CategorySearchType>(`/filter.php`, {
    params: {
      c,
    },
  })
  return response.data
}

export const useCategorySearch = (search: string) => {
  return useQuery({
    queryKey: ["categorySearch", search],
    queryFn: () => fetchingData(search),
  })
}
