import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";


export default function CardSearchByName() {

	// search results 
	const [searchResults, setSearchResults] = useState([]);

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the pokemon name 
	const {pokemonName} = useParams();

	// api key 
	let apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest(){
			let queryParams = new URLSearchParams({
				q: 'name:' + pokemonName
			})
			let response = await fetch(api + 'cards?' + queryParams, {
				headers: {
					'X-Api-Key': apiKey
				}
			});
			
			console.log(response);

			let responseData = await response.json();

			setSearchResults(responseData.data);
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>Card Search</h1>
			{searchResults.length > 0 && 
			<div>
				<h1>{searchResults[0].name} - {searchResults[0].id}</h1>

				{searchResults.map(result => {
					return <PokemonCard key={result.id} 
					cardTitle={result.name} 
					imageUrl={result.images.small} 
					cardDescription={result.flavorText} 
					/>
				})}


			</div>
			}
		</div>
	)
}