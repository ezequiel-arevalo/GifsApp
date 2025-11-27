interface PreviousSearchesProps {
	searches: string[];
	handleTermClick: (term: string) => void;
}

export const PreviousSearches = ({
	searches,
	handleTermClick,
}: PreviousSearchesProps) => {
	return (
		<div className="previous-searches">
			<h2>Búsquedas previas</h2>
			<ul className="previous-searches-list">
				{searches.map((term) => (
					<li key={term} onClick={() => handleTermClick(term)}>
						{term}
					</li>
				))}
			</ul>
		</div>
	);
};
