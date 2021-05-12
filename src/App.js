import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'

function App(){
  return (
    <>
      <Navbar />
      <Route path="/" render={()=> <BlogsContainer />} />
    </>
  )
}


export default App
