// types/mealTypes.ts
export interface Meal {
  idMeal: string
  strMeal: string
  strMealAlternate: string | null
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string | null
  strYoutube: string
  strSource: string
  strImageSource: string | null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null

  // المكونات والمقادير (1-20)
  [key: `strIngredient${number}`]: string
  [key: `strMeasure${number}`]: string
}

export interface MealsResponse {
  meals: Meal[]
}
