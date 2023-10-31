import React from 'react'

interface PokemonProps {
  name: string
  image_url: string
}

const Pokemon = ({
  name,
  image_url
}: PokemonProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image_url} />
    </div>
  )
}

export default Pokemon