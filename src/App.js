import React, { Component } from 'react'; 
import './App.css';
import './css/hackerStyles.css'
import Card from '@material-ui/core/Card'; 
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardActions from '@material-ui/core/CardActions'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardMedia from '@material-ui/core/CardMedia'; 
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography'; 





class App extends Component {
constructor() {
  super(); 
  this.state = { data: []}; 
}

async componentDidMount() {
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
  .then(res => res.json())
  .then(json => this.setState({ data: json}))
  .catch('Failed to Connect')
}




render(){
return (

  <div>
  {this.state.data.map((hackerItem) => {
  
  return (
    <Card>
    <CardActionArea>
      <CardMedia
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
         {hackerItem}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
         {hackerItem.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
         {hackerItem.score}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
      {hackerItem.url}
      </Button>
    </CardActions>
  </Card>
  
  
  
  )
  
  
  })
  
  }
  
  
  
  </div>
  
  
  
  )}


}






export default App;

