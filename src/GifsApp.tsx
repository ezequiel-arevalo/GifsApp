import { useState } from 'react';
import { mockGifs } from './mock-data/gifs.mock';
import { Header } from './shared/components/Header';
import { Search } from './shared/components/Search';
import { PreviousSearches } from './shared/components/PreviousSearches';
import { GifsCard } from './shared/components/GifsCard';
import './gifs.css';

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState(['goku', 'naruto']);

	const handleTermClick = (term: string) => {
		console.log({ term });
	};

	const handleSearch = (query: string) => {
		// Si está vacío que no se envie
		if (query.trim().length === 0) return;

		// Convertimos a minusculas y sacamos los espacios y los cambiamos por -
		query = query.toLocaleLowerCase().replaceAll(' ', '-');

		// Si previousTerms contiene algun query exactamente igual no lo manda
		if (previousTerms.includes(query)) return;

		// Solo 5 elementos pueden estar en previousTerms
		const currentTerms = previousTerms.slice(0, 4);
		currentTerms.unshift(query);

		setPreviousTerms(currentTerms);

		console.log({ query });
	};

	return (
		<>
			<Header title={'Buscador de Gifs'} />

			<Search placeholder={'Buscar... naruto'} onQuery={handleSearch} />

			<PreviousSearches
				searches={previousTerms}
				handleTermClick={handleTermClick}
			/>

			<section className="gifs-container">
				{mockGifs.map((gif) => (
					<GifsCard key={gif.id} gif={gif} />
				))}
			</section>
		</>
	);
};
