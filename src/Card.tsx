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
			<h2>{figure.name}</h2>
      <img src={figure.image} alt={figure.name} />
			<h3>{figure.mood}</h3>
			<p>{figure.description}</p>
		</div>
	);
}
