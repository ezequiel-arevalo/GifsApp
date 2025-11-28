import { useEffect, useState, type KeyboardEvent } from 'react';

interface SearchProps {
	placeholder?: string;
	onQuery: (query: string) => void;
}
export const Search = ({ placeholder, onQuery }: SearchProps) => {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		onQuery(query);
		setQuery('');
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	useEffect(() => {
		const intervalId = setTimeout(() => {
			onQuery(query);
			setQuery('');
		}, 1500);

		return () => {
			clearTimeout(intervalId);
		};
	}, [query, onQuery]);

	return (
		<div className="search-container">
			<input
				type="text"
				name="gifs"
				id="gifs"
				value={query}
				placeholder={placeholder}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={(e) => handleKeyDown(e)}
			/>
			<button onClick={handleSearch} type="button">
				Buscar
			</button>
		</div>
	);
};
