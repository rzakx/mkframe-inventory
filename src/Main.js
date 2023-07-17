import { useState, useEffect } from "react";
import Ekwipunki from "./komponenty/Ekwipunki";
import Postac from "./komponenty/Postac";

export default function Main() {
	const [status, setStatus] = useState(false);

	useEffect(() => {
		window.addEventListener('message', manageOkno);
		return( () => {
			window.removeEventListener('message', manageOkno);
		});

	}, []);

	const manageOkno = (co) => {
		console.log(co);
		if(co.data.akcja === "otworz"){
			document.getElementById("root").style.display = "flex";
		}
		if(co.data.akcja === "zamknij") {
			document.getElementById("root").style.display = "none";
		}
	};

	return(
	<>
			<Postac />
			<Ekwipunki />
	</>
	);
}
