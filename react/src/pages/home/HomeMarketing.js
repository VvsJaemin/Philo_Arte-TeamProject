import React from "react";
// CSS
import "./../../../node_modules/react-rev-slider/src/rs-plugin/css/settings.css";
import "./../../assets/css/revolution/settings.css";
import "./../../assets/css/revolution/layers.css";
import "./../../assets/css/revolution/navigation.css";
// DATA Files
import dataNavbar from "../../data/Navbar/home-marketing-navbar.json";
import dataTabs from "../../data/Tabs/tabs-data.json";
import dataPortfolio from "../../data/Portfolio/masonry-portfolio-data.json";
import dataProcess from "../../data/Process/process-marketing-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataClients from "../../data/Clients/clients-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataBlog from "../../data/Blog/blog-data.json";
// Images
import imageVideo from "../../assets/images/video-mockup.png";
import imageAbout from "../../assets/images/bg-left-img-2.jpg";
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import HeroMarketing from "../../components/HeroSlider/HeroMarketing";
import TabsTwo from "../../components/Tabs/TabsTwo";
import WhatWeOfferEight from "../../components/WhatWeOffer/WhatWeOfferEight";
import ProcessSix from "../../components/Process/ProcessSix";
import AboutFour from "../../components/About/AboutFour";
import TestimonialsFive from "../../components/Testimonials/TestimonialsFive";
import ClientsGrid from "../../components/Carousel/ClientsGrid";
import TeamSix from "../../components/Team/TeamSix";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import BlogSectionTwo from "../../components/Blog/BlogSectionTwo";
import ContactSix from "../../components/Contact/ContactSix";
import FooterOne from "../../components/Footer/FooterOne";
import PortfolioWideMasonry from "../../components/Portfolio/PortfolioWideMasonry";
import Loader from "../../components/Loader/Loader";

const HomeMarketing = () => (
  <Loader>
    <HeaderOne data={dataNavbar} />
    <HeroMarketing />
    <WhatWeOfferEight
      title="We Design Visual Experience for The Web"
      text="Anno template provides fully flexible templates, allowing to
    customize every page and section down to the tiniest detail in a
    few clicks!"
      image={imageVideo}
      video="https://www.youtube.com/watch?v=sU3FkzUKHXU"
    >
      <TabsTwo data={dataTabs} />
    </WhatWeOfferEight>
    <PortfolioWideMasonry data={dataPortfolio} classes="pt-0" />
    <ProcessSix data={dataProcess} />
    <AboutFour
      title="Partners for Growth"
      text="The process of improving some measure of an enterprise's success.
        Business growth can be achieved either by boosting the top line or
        revenue of the business with greater product sales or service income,
        or by increasing the bottom line or profitability of the operation by
        minimizing costs."
      image={imageAbout}
    />
    <TestimonialsFive title="Our Happy Customers" data={dataTestimonials}>
      <ClientsGrid data={dataClients} classes="mt-100" />
    </TestimonialsFive>
    <TeamSix data={dataTeam} title="You Are Only Good <br /> As Your Team" />
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
      image={imgParallax}
    />
    <BlogSectionTwo title="Our Latest Blogs" data={dataBlog} />
    <ContactSix />
    <FooterOne />
  </Loader>
);

export default HomeMarketing;
