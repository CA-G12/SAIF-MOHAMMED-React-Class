import React, { Component } from "react";

class Post extends Component {


  render() {
    const { title, body, id, img } = this.props.post;

    return (
 
      <div className="card" >
      <div className="face face1">
          <div className="content">
              <div className="icon">
              {!this.props.commentFlag && <button onClick={() => this.props.handleDeletePost(id)}>X</button> }
                <img
                   onClick={!this.props.commentFlag ? (() => this.props.handleComments(id)) : (() => {})}
                src={!img ? `https://source.unsplash.com/random/${200 + id}x${200 + id}?islamic`: img}
                alt=""
              />
              </div>
          </div>
      </div>
      <div className="face face2"  onClick={!this.props.commentFlag ? (() => this.props.handleComments(id)) : (() => {})}>
          <div className="content">
              <h3> {title}</h3>
              <p>{body}</p>
          </div>
      </div>
  </div>

    );

  }
}

export default Post;
