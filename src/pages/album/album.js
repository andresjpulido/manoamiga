import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./album.css";
import Comments from "../../components/comments";

export default function Album(props) {
	const creationDate = props.creationDate;
	let { idgallery, idevent } = useParams();
	const url = "/data/gallery.json";

	const [name, setName] = useState(null);
	const [eventName, setEventName] = useState(null);
	const [eventImages, setEventImages] = useState(null);
	const [comments, setComments] = useState(null);

	let history = useHistory();

	useEffect(() => {
		fetchGalleries();

		async function fetchGalleries() {
			const res = await fetch(url).catch((error) => {
				//setGallery({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
			});

			if (res) {
				const data = await res.json();

				setName(data[idgallery].name);
				setEventName(data[idgallery].events[idevent].name);
				setEventImages(data[idgallery].events[idevent].images);
				setComments(data[idgallery].events[idevent].comments);
			}
		}
	}, []);

	const goGallery = () => {
		history.push("/gallery");
	};

	return (
		<div>
			<h1>EVENTOS</h1>
			<p>
				{name} / {eventName}
			</p>
			<div>{creationDate}</div>
			<div className="albumlist">
				{eventImages &&
					eventImages.map((item, index) => (
						<div className="albumitem" key={index}>
							<img
								src={process.env.PUBLIC_URL + `/images/gallery/${item.src}`}
								className="albumimg"
								alt={`${eventName} +  " " + ${index}`}
							/>
						</div>
					))} 
			</div>

            <Comments data={comments} />

			<button
				onClick={() => {
					goGallery();
				}}
				className="btn btn-primary"
			>
				Back
			</button>
		</div>
	);
}
