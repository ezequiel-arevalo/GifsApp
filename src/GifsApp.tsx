import './gifs.css';
import { mockGifs } from './mock-data/gifs.mock';
import { Header } from './shared/components/Header';
import { Search } from './shared/components/Search';
import { PreviousSearches } from './shared/components/PreviousSearches';
import { GifsCard } from './shared/components/GifsCard';
import { useState } from 'react';

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState(['goku', 'naruto']);

	const handleTermClick = (term: string) => {
		console.log({ term });
	};

	const handleSearch = (query: string) => {
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
