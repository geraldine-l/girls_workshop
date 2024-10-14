import { useState } from 'react';
import Card from './Card';

interface Figure {
  id: number;
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}

const figures: Figure[] = [
  { id: 1,
    name: 'Figure 1',
    image: 'https://picsum.photos/200/300/?random=1',
    description: 'This is figure 1',
  },
  { id: 2
    , name: 'Figure 2',
    image: 'https://picsum.photos/200/300/?cat=2',
    description: 'This is figure 2',
  },
  { id: 3
    , name: 'Figure 3',
    image: 'https://picsum.photos/200/300',
    description: 'This is figure 3',
  },
  { id: 4
    , name: 'Figure 4',
    image: 'https://picsum.photos/200/300',
    description: 'This is figure 4',
  },
  { id: 5
    , name: 'Figure 5',
    image: 'https://picsum.photos/200/300',
    description: 'This is figure 5',
  },
  { id: 6
    , name: 'Figure 6',
    image: 'https://picsum.photos/200/300',
    description: 'This is figure 6',
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
        <div className="card-container">
          <Card figure={selectedFigure} />
          <button onClick={() => setSelectedFigure(null)}>Close</button>
        </div>
      ) : (
figures.map((figure) => (
  <Card key={figure.id} figure={figure} onClick={() => handleFigureClick(figure)} />
))
      )}
    </div>
  );
};

export default Body;