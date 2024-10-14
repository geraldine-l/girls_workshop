

interface CardProps {
    figure: Figure;
    onClick?: () => void;
  }

  interface Figure {
    id: number;
    name: string;
    image: string;
    description: string;
    onClick?: () => void;
  }

export default function Card({ figure, onClick }: CardProps) {
        return (
          <div className="card-container" onClick={onClick}>
            <img src={figure.image} alt={figure.name} />
          </div>
        );
      };


