import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function NavSearchBar(){

	const [input, setInput] = useState();

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		console.log(input);
		navigate('/card/search/' + input);
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