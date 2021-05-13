import React from "react";
// DATA Files
import {dataNavbar, dataBlog} from "data/index";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-2.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleOne from "../../components/PageTitle/PageTitleOne";
import BlogPosts from "../../components/Blog/BlogPosts";
import FooterTwo from "../../components/Footer/FooterTwo";


const BlogPage = () => (
  <>
    <HeaderOne data={dataNavbar} />
    <PageTitleOne title="Blog Posts" image={imgTitle} />
    <BlogPosts data={dataBlog} />
    <FooterTwo />
  </>
);

export default BlogPage;
