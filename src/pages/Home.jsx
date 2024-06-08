import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {
	let [contacts, setContacts] = useState([])
	useEffect(() => {
	function async getContacts() {
		   let response = await fetch(api url)
		   let data = response.json()
		   setContacts(data)
	}
	}, [])
	return (
		<div>
			{contacts?.map((contact, index) => (
	return (
		<div>
		<div>
			<img>Image here</img>
		</div>
		<div>
			<i class="fa-solid fa-location-dot"></i>
			<p>Mike Anamendolla</p>
		</div>
		<div>
			<i class="fa-solid fa-phone"></i>
			<p>(870)288-4149</p>
		</div>
		<div>
			<i class="fa-solid fa-envelope">/</i>
			<p>mike.ana@eample.com</p>
		</div>
		<div>
			<i class="fa-solid fa-pen"></i>
			<i class="fa-solid fa-trash"></i>
		</div>
		
	</div>
	);
}; 