import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
  const [rows, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCards(res.data);
        } else {
          console.error('Unexpected response format:', res.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{marginTop:10,backgroundColor:'whitesmoke',borderRadius:10}} sx={{ minWidth: 275, marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={row.image}
                  alt={row.title}
                />
                <CardContent>
                  <Typography >
                    {/* <a href={row.imdb_url} target="_blank" rel="noopener noreferrer">{row.imdb_url}</a> */}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {row.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Category: {row.category}
                  </Typography>
                  {/* Uncomment if you want to display additional information */}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price: {row.price}
                  </Typography>
                  {/* <Typography variant="body2">
                    Actor: {row.actor}
                    <br />
                    Year: {row.year}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button style={{backgroundColor:"steelblue"}} variant='contained'>Buy Now</Button>
                  <Button style={{backgroundColor:"steelblue"}} variant='contained'>Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No products available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default View;