import { fetchCocktailById } from '../apis/cocktails'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export function DrinkDetail() {
  const { id } = useParams()
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['drink'],
    queryFn: () => fetchCocktailById(id as string),
  })

  if (isLoading) {
    return <p>LOADING...</p>
  }
  if (isError) {
    return <p>ERROR: {error.message}</p>
  }
  if (data) {
    return (
      <>
        <h1>{data.drinks.strDrink}</h1>
        <p>Category: {data.drinks.strCategory}</p>
        <p>Glass: {data.drinks.strGlass}</p>
        <p>How To Make: {data.drinks.strInstructions}</p>
        <img src={data.drinks.strDrinkThumb} alt="" />
      </>
    )
  }
}