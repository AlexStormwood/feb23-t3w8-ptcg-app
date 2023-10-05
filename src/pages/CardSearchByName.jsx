import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { useParams } from "react-router-dom";


export default function CardSearchByName() {

	// search results 
	const [searchResults, setSearchResults] = useState();

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the pokemon name 
	const {pokemonName} = useParams();

	// api key 
	let apiKey = "";

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
		}

	}, []);

	return (
		<div>
			<h1>Card Search</h1>
		</div>
	)
}