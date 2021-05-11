import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/home-business-navbar.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-1.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterTwo from "../../components/Footer/FooterTwo";

const TestimonialsPage = () => (
  <>
    <HeaderOne data={dataNavbar} />
    <PageTitleTwo title="Our Testimonials" image={imgTitle} />
    <TestimonialsTwo
      title='Our<br /> Happy <span class="text-bottom-line-sm">Customers</span>'
      data={dataTestimonials}
      type="dark"
    />
    <TestimonialsOne data={dataTestimonials} />
    <FooterTwo />
  </>
);

export default TestimonialsPage;
