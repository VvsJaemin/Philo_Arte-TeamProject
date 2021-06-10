import React from "react";
import Slider from "react-slick";

import { ArtSidebar, RecentPosts } from "webapp/art"

const ArtContent = ({ post }) => {

  console.log("Art Contents", post)
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "blog-grid-slider slick",
  };

  return (
    <>
      {
      post ?
        <section className="white-bg">
          <div className="container" >
            <div className="row">
              <div className="col-md-9 col-sm-9 col-xs-12 xs-mb-50">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12 mb-20 xs-mb-50">
                    <div className="post">
                      <Slider {...settings}>
                        {post.files.map((image, i) => (
                          <div className="item" key={i}>
                            <img
                              className="img-responsive"
                              src={`http://localhost:8080/art_files/display?fileName=${image.savedFileName}`}
                              alt=""
                            />
                          </div>
                        ))}
                      </Slider>
                      <div className="post-metas">
                        <div className="post-metas-center">
                          <p className="post-date">{post.regDate}</p>
                        </div>
                      </div>
                      <div className="post-info all-padding-20">
                        <h3>{post.title}</h3>
                      </div>
                      <div className="blog-standard mb-50">
                        <blockquote>
                          <p>
                            {post.description}
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 mb-20">
                    
                    {/* <div id="respond" className="comment-respond">
                      <h2 id="reply-title" className="comment-reply-title">
                        Leave a Comment
                      </h2>
                      <form
                        method="post"
                        id="form-comments"
                        className="comment-form contact-form-style-01"
                      >
                        <div className="row-form row">
                          <div className="col-form col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="md-input"
                                id="name"
                                required=""
                                placeholder="Name *"
                                data-error="Your Name is Required"
                              />
                            </div>
                          </div>
                          <div className="col-form col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="md-input"
                                id="email"
                                placeholder="Email*"
                                required=""
                                data-error="Please Enter Valid Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="md-textarea"
                            id="message"
                            rows="7"
                            placeholder="Your Comments"
                            required=""
                            data-error="Please, Leave us a message"
                          ></textarea>
                        </div>

                        <p className="form-submit">
                          <button className="btn btn-color btn-md btn-default remove-margin">
                            Post Comments
                          </button>
                          <input type="hidden" name="comment_post_ID" />
                          <input
                            type="hidden"
                            name="comment_parent"
                            id="comment_parent"
                            value="0"
                          />
                        </p>
                      </form>
                    </div> */}


                    <h2 className="recent-post-title">Recent Posts</h2>
                    <RecentPosts artistId={post.artist.artistId} />
                  </div>
                </div>
                {/* <div className="row mt-100">
                  <div className="col-md-12">
                    <div className="text-center">
                      <div className="pagination dark-color">
                        <ul>
                          <li>
                            <a href={process.env.PUBLIC_URL}>
                              <Icofont
                                icon="long-arrow-left"
                                className="mr-5 xs-display-none"
                              />
                              Prev
                            </a>
                          </li>
                          <li className="active">
                            <a href={process.env.PUBLIC_URL}>1</a>
                          </li>
                          <li>
                            <a href={process.env.PUBLIC_URL}>2</a>
                          </li>
                          <li>
                            <a href={process.env.PUBLIC_URL}>3</a>
                          </li>
                          <li>
                            <a href={process.env.PUBLIC_URL}>
                              Next
                              <Icofont
                                icon="long-arrow-right"
                                className="ml-5 xs-display-none"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
                <ArtSidebar post={post} />
            </div>
          </div>
        </section >
        :
        <></>
      }
    </>
  )
};

export default ArtContent;
