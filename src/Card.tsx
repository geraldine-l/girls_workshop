interface CardProps {
	figure: Figure;
	onClick?: () => void;
}

interface Figure {
	id: number;
	name: string;
	mood: string;
	image: string;
	description: string;
	onClick?: () => void;
}

export default function Card({ figure, onClick }: CardProps) {
	function handleKeyDown(): void {
		throw new Error("Function not implemented.");
	}

	return (
		<div className="card-container" onClick={onClick} onKeyDown={handleKeyDown}>
			<img src={figure.image} alt={figure.name} />
			<h2>{figure.name}</h2>
			<p>Mood: {figure.mood}</p>
			<p>Description: {figure.description}</p>
		</div>
	);
}
