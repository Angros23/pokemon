import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {

  console.log(pokemons[0].name)

  return (
    <Layout title='Listado Pokemon'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map((poke, index) => (
            <PokemonCard pokemon={poke} key={index} />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results;

  pokemons.map((ele, index) => {
    ele.id = index + 1;
    ele.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ele.id}.svg`
  })
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
