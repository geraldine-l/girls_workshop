import { useState } from "react";
import Card from "./Card";

interface Figure {
	id: number;
	name: string;
	mood: string;
	image: string;
	description: string;
	chosenMood: string;
	isOkay: boolean;
	onClick?: () => void;
}

const figures: Figure[] = [
	{
		id: 1,
		name: "Zombie",
		mood: "J'ai pas compris le cours de la veille",
		image: "src/images/zombie.png",
		description:
			"Le/la zombie arrive en traînant les pieds, l'air aussi vide que sa tête ! Iel a passé la nuit à essayer de comprendre le cours de la veille, mais sa tête semble aussi vide que la gamelle de Lily. Tout ce qu'iel veut, c'est une carte de révision pour sortir de cette apocalypse d'incompréhension !",
		chosenMood:
			"Rappelle-toi, un bon zombie ne panique jamais ! Prends une pause et n'oublie pas de réviser avec un bon vieux cerveau !",
		isOkay: false,
	},
	{
		id: 2,
		name: "Vampire",
		mood: "Au top",
		image: "src/images/vampire.png",
		description:
			"Le/la vampire est prêt·e à mordre la journée ! Avec un sourire éclatant (pour un·e vampire, c'est relatif), iel a fait le plein d'énergie en se nourrissant des bonnes vibes de la nuit. Rien ne peut l'arrêter, sauf peut-être une gousse d'ail ou un reflet dans un miroir !",
		chosenMood:
			"Attention quand même à ne pas mordre tes camarades ! Le café est ton meilleur allié pour garder l'énergie sans les crocs !",
		isOkay: true,
	},
	{
		id: 3,
		name: "Sorcière",
		mood: "Motivé·e",
		image: "src/images/sorciere.png",
		description:
			"La sorcière entre dans la pièce avec son balai et un éclat dans les yeux ! Elle a concocté une potion magique de motivation qui lui permet d'affronter le jour avec détermination. Attention à ses incantations, car elle pourrait transformer n'importe quel projet en un chef-d'œuvre ensorcelé !",
		chosenMood:
			"Fais attention avec tes sorts, parfois la motivation peut se transformer en surcharge de travail ! Pense à prendre des pauses magiques !",
		isOkay: true,
	},
	{
		id: 4,
		name: "Loup-garou",
		mood: "Envie de travailler en groupe",
		image: "src/images/loup.png",
		description:
			"Le loup-garou est en pleine forme, prêt à se rassembler avec ses collègues pour travailler en meute ! Ce matin, il préfère les 'grooooups' de travail aux 'grouuuuls' de la pleine lune.",
		chosenMood:
			"Super, mais n'oublie pas de partager les idées, pas seulement les miettes ! Et évite de hurler si ça ne va pas !",
		isOkay: true,
	},
	{
		id: 5,
		name: "Frankenstein",
		mood: "Malade",
		image: "src/images/frankenstein.png",
		description:
			"Frankenstein traîne les pieds, le teint vert et les électrodes encore fumantes. Ce matin, il se sent comme un assemblage de pièces de rechange — pas tout à fait à 100%. Il espère juste que la machine à café ne le lâche pas, sinon c'est la panique !",
		chosenMood:
			"Prends soin de toi, même les monstres ont besoin de repos ! Évite de te surcharger, ou tu pourrais devenir… un vrai tas de pièces !",
		isOkay: false,
	},
	{
		id: 6,
		name: "Fantôme",
		mood: "Fatigué·e",
		image: "src/images/fantome.png",
		description:
			"Le fantôme flotte dans la pièce, à moitié transparent et totalement épuisé. Il a passé la nuit à hanter des rêves qui lui ont volé toute son énergie. Sa seule ambition aujourd'hui ? Échapper à la lumière du jour et trouver un bon vieux drap pour s'enrouler et faire une sieste !",
		chosenMood:
			"Un petit conseil : même les fantômes ont besoin d'une bonne nuit de sommeil ! Ne te laisse pas hanter par le stress, relaxe-toi un peu !",
		isOkay: false,
	},
];

const Body = () => {
	const [selectedFigure, setSelectedFigure] = useState<Figure | null>(null);

	const handleFigureClick = (figure: Figure) => {
		setSelectedFigure(figure);
	};

	return (
		<div className="body-container">
			{selectedFigure ? (
				<div className="selected-card-container">
					<Card figure={selectedFigure} />
					<p>{selectedFigure.chosenMood}</p>
					<button type="button" onClick={() => setSelectedFigure(null)}>
						Merci, je m'accroche
					</button>
				</div>
			) : (
				figures.map((figure) => (
					<div key={figure.id}>
						<Card figure={figure} onClick={() => handleFigureClick(figure)} />
					</div>
				))
			)}
		</div>
	);
};

export default Body;
