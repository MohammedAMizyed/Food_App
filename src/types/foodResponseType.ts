// Base properties that every meal has
interface BaseMeal {
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
}

// Dynamic ingredient and measure indices
interface Meal extends BaseMeal {
  [key: `strIngredient${number}`]: string
  [key: `strMeasure${number}`]: string
}

export interface MealsResponse {
  meals: Meal[]
}
