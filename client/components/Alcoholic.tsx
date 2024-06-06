import { fetchAlcoholicCocktails } from '../apis/cocktails'
import { useQuery } from '@tanstack/react-query'

export function Alcoholic() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['alcoholic'],
    queryFn: () => fetchAlcoholicCocktails(),
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
        <div className="mainContainer">
          {data.drinks.map((drink) => (
            <div key={drink.idDrink}>
              <p> {drink.strDrink}</p>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
          ))}
        </div>
      </>
    )
  }
}
