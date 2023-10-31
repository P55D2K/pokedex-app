import Pokemon from "@/components/Pokemon"
import Image from 'next/image'

interface HomeProps {
  all_results : any
  specific_pokemon_results : any[]
}

const Home = ({
  all_results,
  specific_pokemon_results
}: HomeProps) => {
  console.log(all_results)
  console.log(specific_pokemon_results)

  return (
    <div className="relative h-screen bg-black lg:h-[140vh]">
      <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl">Pokedex App</h1>
      <div className="self-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-2">
        {specific_pokemon_results.map((item: any) => (
          <Pokemon name={item.name} image_url={item.sprites.front_default} />
        ))}
      </div>
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
  let specific_pokemon_results : any[] = [];

  const result : any = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=200")
  const results : any = await result.json()

  for (let i = 0; i < results.results.length; i++) {
    let poke_result : any = await fetch(results.results[i].url)
    let poke_results : any = await poke_result.json()
    specific_pokemon_results.push(poke_results);
  }

  return {
    props: {
      all_results: results,
      specific_pokemon_results: specific_pokemon_results
    }
  }
}
