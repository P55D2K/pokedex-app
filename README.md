# pokedex app

1. fetch from https://pokeapi.co/api/v2/pokemon/?limit=1292 to get all pokemons
2. loop through results and fetch each pokemon
3. get image and display it

at the end i realised it was much faster to instead just get the id of each pokemon and use that to get the image, and it was not necessary to fetch data for one specific pokemon. this increases the performance by a lot

eg https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png -> 2 is the id, and this is the image of the pokemon with id 2