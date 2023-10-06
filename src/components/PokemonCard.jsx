

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>
			{props.cardTitle}
		</Card.Title>
        <Card.Text>
          {props.cardDescription}
        </Card.Text>
        <Button variant="primary">
			View Card
		</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;