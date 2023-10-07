import { useState } from "react"


export default function NavSearchBar(){

	const [input, setInput] = useState();

	const handleSubmit = (event) => {
		console.log(input);
	}

	return (
		<nav>
			<input 
				type="text" 
				name="navSearchField" 
				id="navSearchField" 
				onChange={(event) => setInput(event.target.value)} 
			/>
			<button onClick={handleSubmit}>Search</button>
		</nav>
	)

}