import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/main-navbar-data.json";
import dataServices from "../../data/Services/services-imagebg-data.json";
import dataPortfolio from "../../data/Portfolio/masonry-portfolio-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgHero from "../../assets/images/slides/home-bg-18.jpg";
import imgAbout from "../../assets/images/bg-left-img.jpg";
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import HeroHomeImageBg from "../../components/HeroSlider/HeroHomeImageBg";
import WhatWeOfferTen from "../../components/WhatWeOffer/WhatWeOfferTen";
import CountersOne from "../../components/Counters/CountersOne";
import AboutSix from "../../components/About/AboutSix";
import WhatWeDoOne from "../../components/WhatWeDo/WhatWeDoOne";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import TeamOne from "../../components/Team/TeamOne";
import ParallaxOne from "../../components/ParallaxSection/ParallaxOne";
import PricingsOne from "../../components/Pricings/PricingsOne";
import ContactOne from "../../components/Contact/ContactOne";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioWideMasonry from "../../components/Portfolio/PortfolioWideMasonry";
import Loader from "../../components/Loader/Loader";

const HomeImageBg = () => (
  <Loader>
    <HeaderOne data={dataNavbar} />
    <HeroHomeImageBg
      title='Custom Solutions for<br />
    <span class="text-bottom-line">Digital</span> Marketing'
      image={imgHero}
    />
    <WhatWeOfferTen
      data={dataServices}
      tagline="Our Core Services"
      title="We Craft Digital <br />Experience"
    />
    <PortfolioWideMasonry
        tagline="Show Your Works"
        title="Our Portfolio"
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
    <CountersOne data={dataCounters} type="dark" />
    <AboutSix
      tagline="About Us"
      title="Partners for Growth"
      backfont="Partners"
      image={imgAbout}
      pathBtn={process.env.PUBLIC_URL}
      video="https://www.youtube.com/watch?v=sU3FkzUKHXU"
    >
      The process of improving some measure of an enterprise's success. Business
      growth can be achieved either by boosting the top line or revenue of the
      business with greater product sales or service income, or by increasing
      the bottom line or profitability of the operation by minimizing costs.
    </AboutSix>
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
    <TestimonialsOne data={dataTestimonials} />
    <TeamOne tagline="Meet Creatives" title="Our Team" data={dataTeam} />
    <ParallaxOne image={imgParallax}>
      Where something special happens every days
    </ParallaxOne>
    <PricingsOne
      tagline="Select Your Plan"
      title="Our Pricing"
      data={dataPricings}
      dashColor="dark"
    />
    <ContactOne
      title='Request a Quote <span class="text-bottom-line-sm">Now</span>'
      tagline="Contact Us"
    />
    <ClientsCarousel data={dataClients} />
    <FooterTwo />
  </Loader>
);

export default HomeImageBg;
