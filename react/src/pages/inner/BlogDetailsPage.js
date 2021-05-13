import React from "react";
// DATA Files
import {dataNavbar, dataBlog} from "data/index";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-2.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleOne from "../../components/PageTitle/PageTitleOne";
import BlogContent from "../../components/Blog/BlogContent";
import FooterTwo from "../../components/Footer/FooterTwo";

const BlogDetailsPage = () => (
  <>
    <HeaderOne data={dataNavbar} />
    <PageTitleOne title="Blog Details" image={imgTitle} />
    <BlogContent post={dataBlog[1]} data={dataBlog} />
    <FooterTwo />
  </>
);

export default BlogDetailsPage;
