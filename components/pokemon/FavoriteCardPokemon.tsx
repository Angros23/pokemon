import { Card, Grid, Image } from "@nextui-org/react"
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    id: number
}


export const FavoriteCardPokemon: FC<Props> = ( {id} ) => {

    const router = useRouter();

    const onFavoriteCliked = () => {
        router.push(`/pokemon/${id}`);
    }

  return (
    <Grid xs={6} sm={3} xl={1 } key={id} onClick={onFavoriteCliked}>
        <Card hoverable clickable css={{padding: 10}}>
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={'100%'}
            height={ 140 }
        />
        </Card>
    </Grid>
  )
}
