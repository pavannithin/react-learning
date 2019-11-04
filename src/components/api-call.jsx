import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            error: null,
        }
    }


    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({posts: json,}));


    }

    render() {
        const {posts} = this.state;
        console.log("posts=", posts);
        return (
            <div>
                <h1>Posts</h1>
                {posts != null && posts.map((post) => <div>
                        <p><b>Post Id:</b> {post.id}</p>
                        <p><b>Post Title:</b> {post.title}</p>
                        <p><b>Post Body:</b> {post.body}</p>
                    </div>
                )}
            </div>
        );
    }
}

ApiCall.propTypes = {};

export default ApiCall;
