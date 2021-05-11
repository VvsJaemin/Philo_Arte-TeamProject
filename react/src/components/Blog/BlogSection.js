import React from "react";
import parse from "html-react-parser";

const BlogSection = ({ title, data }) => (
  <section id="blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mt-0 font-700">{title && parse(title)}</h2>
        </div>
      </div>
      <div className="row mt-80 blog-style-01">
        {data.filter((v,i) => i < 3).map((post) => (
          <div className="col-md-4 col-sm-4 col-xs-12" key={post.id}>
            <div className="post">
              <div className="post-img">
                <img
                  className="img-responsive"
                  src={require("../../assets/images/" + post.image)}
                  alt={post.description}
                />
                <div className="post-metas">
                  <div className="post-metas-center">
                    <p className="post-date">{post.published}</p>
                  </div>
                </div>
              </div>
              <div className="post-info all-padding-20">
                <h3>
                  <a href={`${process.env.PUBLIC_URL}/blog-details`}>
                    {post.title}
                  </a>
                </h3>
                <p>{post.text && parse(post.text)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
