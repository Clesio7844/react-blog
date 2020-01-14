
import React from 'react';
import './style.css';
import Card from '../UI/Card';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    
        <div className="blogPostContainer">
          <Card>
            <div className="blogHeather">
            <span className="blogCategory">Featured</span>
              <h1 className="postTitle">Beautiful is always Beautiful</h1>
              <span className="postedBY">post on January 12.2020 by dlcc Blogging Tips</span>

            </div>

            <div className="postImageContainer">
            <img src ={require('../../blogPostImages/memories-from.jpg')} />

            </div>
              
          </Card>

        </div>
    
   )

 }

export default BlogPost