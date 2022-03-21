import { Card, Grid, Image } from "@nextui-org/react"
import { FC } from 'react';
import { FavoriteCardPokemon } from "./";

interface Props {
    favoritesPokemon: number[]
}


export const FavoritesPokemos: FC<Props> = ({favoritesPokemon}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
              favoritesPokemon.map( id => (
                <FavoriteCardPokemon id={id} key={id}/>
              ))
            }
    </Grid.Container>
  )
}
