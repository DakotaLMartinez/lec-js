import { makeStyles, Grid, Box } from '@material-ui/core'
import { useState } from 'react'
import BlogCard from '../Components/BlogCard'
import SearchBar from './SearchBar'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "3%",
    padding: "2%"
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center"
  }
}))

function BlogsList({ blogs, toggleSave }) {
  const classes = useStyles()
  const [searchText, setSearchText] = useState('')

  function createBlogCards() {
    console.log(blogs)
    const searchResults = blogs.filter(blog => (
      blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchText.toLowerCase())
    ))
    return searchResults.map(blogObject => (
      <BlogCard key={blogObject.id} blogObject={blogObject} toggleSave={toggleSave} />
    ))
  }
  console.log(blogs)
  return (
    <article className={classes.root}>
      <Box className={classes.searchContainer} my={3}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </Box>
      <Grid container spacing={3} >
        {createBlogCards()}
      </Grid >
    </article>
  )
}

export default BlogsList