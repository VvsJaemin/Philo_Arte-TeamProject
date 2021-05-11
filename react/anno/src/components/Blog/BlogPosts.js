import React from "react";
import Slider from "react-slick";
import imgBg from "../../assets/images/background/stars-bg-3.png";
import Icofont from "react-icofont";

const BlogPosts = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "blog-grid-slider slick",
  };

  return (
    <>
      <section className="white-bg">
        <div className="container">
          <div className="row blog-style-01">
            {data.map((post) =>
              post.type === "slide" ? (
                <div className="col-md-4 col-sm-4 col-xs-12" key={post.id}>
                  <div className="post">
                    <Slider {...settings}>
                      {post.slides.map((image, i) => (
                        <div className="item" key={i}>
                          <img
                            className="img-responsive"
                            src={require("../../assets/images/" + image)}
                            alt=""
                          />
                        </div>
                      ))}
                    </Slider>
                    <div className="post-metas">
                      <div className="post-metas-center">
                        <p className="post-date">{post.published}</p>
                      </div>
                    </div>
                    <div className="post-info all-padding-20">
                      <h3>
                        <a href={process.env.PUBLIC_URL + " blog "}>
                          {post.title}
                        </a>
                      </h3>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-4 col-sm-4 col-xs-12" key={post.id}>
                  <div className="post">
                    <div className="post-img">
                      {post.type === "video" ? (
                        <div className="fit-videos">
                          <video autoPlay loop controls muted>
                            <source
                              src={require("../../assets/videos/" + post.video)}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      ) : (
                        <img
                          className="img-responsive"
                          src={require("../../assets/images/" + post.image)}
                          alt=""
                        />
                      )}
                      <div className="post-metas">
                        <div className="post-metas-center">
                          <p className="post-date">{post.published}</p>
                        </div>
                      </div>
                    </div>
                    <div className="post-info all-padding-20">
                      <h3>
                        <a href={process.env.PUBLIC_URL}>{post.title}</a>
                      </h3>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="row mt-100">
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
          </div>
        </div>
      </section>
      <section
        style={{ background: `url(${imgBg}) center bottom no-repeat #24182e` }}
      >
        <div className="container">
          <div className="row blog-style-01">
            {data.map((post) =>
              post.type === "slide" ? (
                <div className="col-md-4 col-sm-4 col-xs-12" key={post.id}>
                  <div className="post">
                    <Slider {...settings}>
                      {post.slides.map((image, i) => (
                        <div className="item" key={i}>
                          <img
                            className="img-responsive"
                            src={require("../../assets/images/" + image)}
                            alt=""
                          />
                        </div>
                      ))}
                    </Slider>
                    <div className="post-metas">
                      <div className="post-metas-center">
                        <p className="post-date">{post.published}</p>
                      </div>
                    </div>
                    <div className="post-info all-padding-20 white-color">
                      <h3>
                        <a href={process.env.PUBLIC_URL + " blog "}>
                          {post.title}
                        </a>
                      </h3>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-4 col-sm-4 col-xs-12" key={post.id}>
                  <div className="post">
                    <div className="post-img">
                      {post.type === "video" ? (
                        <div className="fit-videos">
                          <video autoPlay loop controls muted>
                            <source
                              src={require("../../assets/videos/" + post.video)}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      ) : (
                        <img
                          className="img-responsive"
                          src={require("../../assets/images/" + post.image)}
                          alt=""
                        />
                      )}
                      <div className="post-metas">
                        <div className="post-metas-center">
                          <p className="post-date">{post.published}</p>
                        </div>
                      </div>
                    </div>
                    <div className="post-info all-padding-20 white-color">
                      <h3>
                        <a href={process.env.PUBLIC_URL}>{post.title}</a>
                      </h3>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="row mt-100">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
