import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/parallax-digital-navbar-data.json";
import dataServices from "../../data/Services/services-data.json";
import dataSkills from "../../data/Skills/skills-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataClients from "../../data/Clients/clients-data.json";
import dataBlog from "../../data/Blog/blog-data.json";
// Images
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderSocial from "../../components/Header/HeaderSocial";
import HomeDigitalSlider from "../../components/HeroSlider/HomeDigitalSlider";
import FooterOne from "../../components/Footer/FooterOne";
import WhatWeOfferThree from "../../components/WhatWeOffer/WhatWeOfferThree";
import PresentationOne from "../../components/Presentation/PresentationOne";
import AboutTwo from "../../components/About/AboutTwo";
import CounterRowOne from "../../components/Counters/CounterRowOne";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import PortfolioBoxedSpaceThree from "../../components/Portfolio/PortfolioBoxedSpaceThree";
import TestimonialsThree from "../../components/Testimonials/TestimonialsThree";
import ClientsGrid from "../../components/Carousel/ClientsGrid";
import BlogSection from "../../components/Blog/BlogSection";
import ContactThree from "../../components/Contact/ContactThree";
import Loader from "../../components/Loader/Loader";

const HomeDigital = () => (
  <Loader>
    <HeaderSocial data={dataNavbar} />
    <HomeDigitalSlider />
    <WhatWeOfferThree data={dataServices} />
    <PresentationOne
      title="Superb Website Template <br /> for Startups & Small Businesses."
      text="We Are provide web design services to startups and existing business in<br> New York and around the US helping them make an impact online."
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
    />
    <AboutTwo
      title="Agency Overview"
      data={dataSkills}
      text='<p class="mt-30">
            Every site we create is designed and optimised to look and function
            just as well on mobile phones and tablets as it does on a desktop,
            creating a seamless experience across any device.
          </p>
          <p>
            We use the latest development standards and web technologies to keep
            things cutting edge, ensuring your new website is built on a stable
            and future-proof foundation.
          </p>'
    >
      <CounterRowOne data={dataCounters} classes="mt-50" />
    </AboutTwo>
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn="!#"
      typeBtn="btn-lg btn-color btn-circle"
      image={imgParallax}
    />
    <PortfolioBoxedSpaceThree
      title="Our Latest Works"
      data={dataPortfolio}
      filter={true}
      categories={[
        "Branding",
        "Creative Design",
        "Web Design",
        "Stationery",
        "Photography",
      ]}
    />
    <TestimonialsThree data={dataTestimonials} title="Our Clients Say">
      <ClientsGrid data={dataClients} classes="mt-100" />
    </TestimonialsThree>
    <BlogSection title="Our Latest Blogs" data={dataBlog} />
    <ContactThree
      title="Contact Us"
      text="Anno template provides fully flexible templates, allowing to
            customize every page and section down to the tiniest detail in a few
            clicks!"
    >
      <h4 className="font-700 mt-30">Contact Info</h4>
      <p className="mt-20 font-16px font-500">
        Patton Street Caulfield East VIC 3145
      </p>
      <p className="font-16px font-500">Email Us: sayhi@yoursite.com</p>
      <p className="font-16px font-500">Call Us: +61 (03) 9414 7288</p>
    </ContactThree>
    <FooterOne />
  </Loader>
);

export default HomeDigital;
