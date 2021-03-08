import React  from 'react'; 
import './App.css';
import './css/hackerStyles.css'
import Card from '@material-ui/core/Card'; 
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography'; 
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem'; 
import Link from '@material-ui/core/Link'

function HackerNewsPosts({ stories }) {
  if (stories.length === 0) {
    return <div>Loading..</div>
  }

return (


  <div>
      <div className="firstStory"></div>
  {stories.map(hackerItem => (
      
    <Card>
    <CardActionArea>
      <CardMedia
        title="Hacker News Top Story"
      />
      <CardContent>
       <List>
       <ListItem key = {hackerItem.id}> <Link href={hackerItem.url}></Link> </ListItem>   
         </List> 
        <Typography gutterBottom variant="h5" component="h2">
         {hackerItem.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
         {hackerItem.score}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  ))
  
  }
  
  
  </div>
  
);

}

function App() {

const [stories, setStories] = React.useState([]); 


React.useEffect(() => {
  async function getTopStories() {
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    try {
      const response = await fetch(url); 
      if (response.ok === false) {
        throw new Error("response Error" + response.text)
      }
      const json = await response.json(); 
      const promises = json
      .slice(0, 30)
      .map(id => 
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(
          response => response.json()
        )
        )
        const result = await Promise.all(promises); 
        setStories(result); 
    } catch (err) {
      console.error(err); 
    }
  }
  getTopStories(); 
}, []); 









return (
<div>
  <HackerNewsPosts stories={stories} />
</div>


)
 





}


export default App;

