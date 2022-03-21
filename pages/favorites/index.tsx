import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts'
import { FavoritesPokemos } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';


const Favorites = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritesPokemon( localFavorites.pokemons )
  }, [])
  

  return (
    <Layout>

      {

        favoritesPokemon.length === 0
        ? (<NoFavorites/>)
        : (<FavoritesPokemos favoritesPokemon={favoritesPokemon}/>)

      }
    </Layout>
  )
}


export default Favorites