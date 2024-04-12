import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';

interface ActionAreaCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card sx={{ minWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
          <Button variant="contained"  sx={{ 
              borderRadius: '20px',
              backgroundColor: "black",
              '&:hover': {
                backgroundColor: "black" // Change color on hover
              }
            }}>
            Hire Me Now
          </Button>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
