import type { Gif } from '../../mock-data/gifs.mock';

interface GifProps {
	gif: Gif;
}

export const GifsCard = ({ gif }: GifProps) => {
	return (
		<div key={gif.id} className="gif-card">
			<img src={gif.url} alt={gif.title} />
			<h3>{gif.title}</h3>
			<p>
				{gif.width}x{gif.height} (1.5mb)
			</p>
		</div>
	);
};
