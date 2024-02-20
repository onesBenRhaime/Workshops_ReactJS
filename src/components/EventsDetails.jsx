import { useParams } from "react-router-dom";

export function EventsDetails() {
	const { id, title } = useParams();
	return (
		<>
			<h1>
				Details Events : {id} : {title}
			</h1>
		</>
	);
}
