interface Props {
	title: string;
	description?: string;
}

export const Header = ({
	title,
	description = 'No hay descripción',
}: Props) => {
	return (
		<header className="content-center">
			<h1>{title}</h1>
			<p>{description}</p>
		</header>
	);
};
