import React, { useState } from "react";
import '../style/BlogPost.css'
import BlogPostEdit from "./BlogPostEdit";

const BlogPost = () => {
  const [postShow , setPostShow] = useState(null);

  const blogPost = [

    {
      id : 1,
      post : './images/customImg/post-1.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',

    },

    {
      id : 2,
      post : './images/customImg/post-2.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },

    {
      id : 3,
      post : './images/customImg/post-3.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },

    {
      id : 4,
      post : './images/customImg/post-4.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },

    {
      id : 5,
      post : './images/customImg/post-5.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },

    {
      id : 6,
      post : './images/customImg/post-6.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },

    {
      id : 7,
      post : './images/customImg/post-7.jpg',
      date : 'April 12, 2019',
      minitextone : 'By Celine Dee',
      minitexttwo : 'FASHION',
      title : 'How the Red Color Can Change You',
      para : 'Electram corrumpit sed ne. Sint sadipscing te pro, his vidisse habemus salutandi id. Audire consect conclus nam ne. Etiam...',
      
    },
    
  ]
  
  return (
    <>
      <section className="comn-soc-feed-comp blog-post-comp">
        <div className="blog-post-flex-box">
        <h6>Blogs</h6>

      <button onClick={() => setPostShow(true)} className="post-btn">
        Post Now
      </button>


    
        </div>

        <div className="blog-post-grid">

          {blogPost.map(({
            id,
            post,
            minitextone,
            minitexttwo,
            title,
            para,
            date,
          }) => {

            return(
              <>

           <div className="blog-post-box">
            <div className="blog-post-img-box">
              <img src={post} alt="" />
            
            </div>
            <div className="post-det-box" key={id} id={id} >
            <div className="date-flex-box">
                <div className="left-border"></div>
                <span>{date} </span>
              </div>
              <div className="post-det-top-grid-box">
                <div className="left-p-top-box">
                  <a href="#">{minitextone} </a>
                  <a href="#">  {minitexttwo} </a>
                </div>
                <div className="right-p-border-box"></div>
              </div>
              <h6>{title} </h6>
              <p>
               {para}
              </p>

              <a className="reading-link" href="#">Continue Reading</a>
              
            </div>
          </div>
              
              </>
            )
            
          })}

         

        

        </div>
      </section>

      { postShow === true ?  <BlogPostEdit onclickPostNone={() => setPostShow(false)} /> : null}
      
    </>
  );
};

export default BlogPost;
