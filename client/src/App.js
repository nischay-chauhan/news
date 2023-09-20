import React , {useState , useEffect} from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import './index.css';

function App() {
  const [items, setItems] = useState([])
  const [active , setActive] = useState(1)
  const [category , setCategory] = useState('general')

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=89b72515fd354cd39847f42afd0b678b`)
  .then(res => res.json())
  .then(data => setItems(data.articles))
} , [category])

  return (
    <div className='App'>
      <h1 className='title'>The Latest News</h1>
      <Menu active={active} setActive={setActive} category={category} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
