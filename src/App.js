import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Posts from './components/Posts';
import Paginations from './components/Paginations';
import './App.css';

function App() {
  
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(2);

   useEffect(() =>{
     const fetchPosts = async () => {
       setLoading(true);
       const res = await axios.get('https://intense-tor-76305.herokuapp.com/merchants');
       setPosts(res.data);
       setLoading(false);
     }

     fetchPosts();
   }, []);

   //Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   //change page

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
     <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
     <Posts posts={currentPosts} loading={loading}/>
     
     </Typography>
      </Container>
      <Paginations postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
