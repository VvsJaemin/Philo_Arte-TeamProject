import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/home-business-navbar.json";
import dataSlider from "../../data/Slider/home-business-data.json";
import dataServices from "../../data/Services/services-business.json";
import dataProcess from "../../data/Process/process-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataBlog from "../../data/Blog/blog-data.json";
import dataTeam from "../../data/Team/team-sm-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
import imgAbout from "../../assets/images/bg-left-img-2.jpg";
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import FooterTwo from "../../components/Footer/FooterTwo";
import HeroBusinessSlider from "../../components/HeroSlider/HeroBusinessSlider";
import WhatWeOfferFive from "../../components/WhatWeOffer/WhatWeOfferFive";
import WhatWeDoOne from "../../components/WhatWeDo/WhatWeDoOne";
import AboutThree from "../../components/About/AboutThree";
import ProcessThree from "../../components/Process/ProcessThree";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import BlogCarousel from "../../components/Blog/BlogCarousel";
import TeamThree from "../../components/Team/TeamThree";
import ContactOne from "../../components/Contact/ContactOne";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import Loader from "../../components/Loader/Loader";

const HomeBusiness = () => (
  <Loader>
    <HeaderOne data={dataNavbar} border={true} />
    <HeroBusinessSlider data={dataSlider} />
    <WhatWeOfferFive
      tagline="Who We Are"
      title="We Craft Digital <br />Experience"
      data={dataServices}
    />
    <WhatWeDoOne
      tagline="What We Do"
      title="Digital Services"
      image={imgWhatWeDo}
      classes="no-bottom-line"
    >
      The term Digital Services refers to the electronic delivery of information
      including data and content across multiple platforms and devices like web
      or mobile. Information is presented in a way that is easy to use and
      understand and typically involves transactional services such as
      submitting forms for processing and receiving benefits.
    </WhatWeDoOne>
    <AboutThree
      tagline="About Us"
      title="Partners for Growth"
      image={imgAbout}
      pathBtn={process.env.PUBLIC_URL}
      video="https://www.youtube.com/watch?v=sU3FkzUKHXU"
    >
      The process of improving some measure of an enterprise's success. Business
      growth can be achieved either by boosting the top line or revenue of the
      business with greater product sales or service income, or by increasing
      the bottom line or profitability of the operation by minimizing costs.
    </AboutThree>
    <ProcessThree
      tagline="Our Steps"
      title="Work Together <br>For Success"
      backfont="Steps"
      data={dataProcess}
    />
    <TestimonialsOne
      tagline="What Client Says"
      title="Our Happy Customers"
      backfont="Client"
      data={dataTestimonials}
    />
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
      image={imgParallax}
    />
    <PortfolioOne
      tagline="Show Your Works"
      title="Our Portfolio"
      backfont="Works"
      classes="no-bottom-line"
      data={dataPortfolio}
    />
    <BlogCarousel
      tagline="Most Recent Articles"
      title="Our Latest Blogs"
      data={dataBlog}
    />
    <TeamThree tagline="Meet Creatives" title="Our Team" data={dataTeam} />
    <ContactOne
      tagline="Contact Us"
      title="Request a Quote Now"
      classes="no-bottom-line"
    />
    <ClientsCarousel data={dataClients} />
    <FooterTwo />
  </Loader>
);

export default HomeBusiness;
