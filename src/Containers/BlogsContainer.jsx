import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

class BlogsContainer extends React.Component{

    constructor(props) {
        super(props)
        this.state = { blogs: [] }
        this.toggleSaveBlog = this.toggleSaveBlog.bind(this);
    }

    state = {blogs: []}

    async componentDidMount(){
        const resp = await fetch('http://localhost:5000/blogs')
        const payload = await resp.json()
        this.setState({blogs: payload})
    }

    async toggleSaveBlog(blog) {
        const res = await fetch(`http://localhost:5000/blogs/${blog.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...blog,
                favorite: !blog.favorite
            })
        })
        const updatedBlog = await res.json()
        this.setState(state => ({
            blogs: state.blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog)
        }))
        return updatedBlog
    }

    render(){
        return (
                <Switch>
                    <Route
                        path="/blogs/saved"
                        render={() => (
                            <BlogsList
                                blogs={this.state.blogs.filter(blog => blog.favorite)}
                                toggleSave={this.toggleSaveBlog}
                            />
                        )}
                    />
                    <Route
                        path="/"
                        render={() => (
                            <BlogsList
                                blogs={this.state.blogs}
                                toggleSave={this.toggleSaveBlog}
                            />
                        )}
                    />
                </Switch>

            )
    }
    
}


export default BlogsContainer
