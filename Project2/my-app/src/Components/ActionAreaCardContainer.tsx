
import ActionAreaCard from './ActionAreaCard'; // Import the ActionAreaCard component

export default function ActionAreaCardComponents() {
  return (
    <div>
      <h2>Another Component</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {/* Use ActionAreaCard component multiple times */}
        <ActionAreaCard
          imageUrl="https://www.example.com/image1.jpg"
          title="Card 1"
          description="Description for Card 1"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
        <ActionAreaCard
          imageUrl="https://www.example.com/image2.jpg"
          title="Card 2"
          description="Description for Card 2"
        />
       
        {/* Add more ActionAreaCard components as needed */}
      </div>
    </div>
  );
}
