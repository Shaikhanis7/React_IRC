import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface FreelancerCardProps {
  name: string;
  description: string;
  image: string; // URL of the freelancer image
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ name, description, image }) => {

  return (
    <Card sx={{
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FreelancerCard;
