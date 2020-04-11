
import React ,{ Component }from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as ACTIONS from './store/actions/actions'


// const axiosInstance = axios.create({
//   baseURL:'https://jsonplaceholder.typicode.com'
// })

// class About extends Component {

//     state = {
//       hello: null
//     }

//     componentDidMount(){
//       axiosInstance.get('/posts')
//       .then(res => this.setState({hello: res.data[0].userId}))
//       .catch(err => console.log(err))
//     }

//     render() {
//       return (
//       <div >
//         <p>123</p>
//         <div>
//           {this.state.hello
//           ? <div> {this.state.hello}</div>
//           : <p>err</p>
//           }
//         </div>
//       </div>
//       )
      
//     };
//   }



const RenderPost = post => (
  <div>
    <p>{post.post.title}</p>
    <p>{post.post.body}</p>
  </div>
)

class Posts extends Component {

  componentDidMount(){
    axios.get('/api/get/allposts')
    .then(res => this.props.set_posts(res.data))
    .catch((err) => console.log(err))

  }

  render() {
    return (
    <div >
      {this.props.posts
      ? this.props.posts.map(post =>
        <RenderPost key={post.pid} post={post}/>
      ) :null}
    </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts_render.posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    set_posts: (posts) => dispatch(ACTIONS.fetch_db_posts(posts))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Posts)