import Image from "next/image";
import Link from "next/link";
import useFetch from "./hooks/useFetch";
import { useState, useRef } from "react";



const Page =  () => {


	return (
		<main className='container mx-auto p-4 '>
			Mains
			<Link href={"./wishlist"}>WishList</Link>
			
		</main>
	);
};



export default Page;

// const fetchData = async () => {

//     const res = await fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=oRAb6wAFUhUAl0O5A5ICifaLuE8MfLeI&locale=*')

//     const json = await res.json();

//     const { events } = json._embedded

//     events.map(item => console.log(item.id))

// }
