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
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="card-container" onClick={onClick}>
			<img src={figure.image} alt={figure.name} />
			<h2>{figure.name}</h2>
			<p>Mood: {figure.mood}</p>
			<p>Description: {figure.description}</p>
		</div>
	);
}
