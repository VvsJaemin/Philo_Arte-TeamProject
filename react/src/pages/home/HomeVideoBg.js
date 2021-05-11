import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/main-navbar-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataServices from "../../data/Services/services-minimal-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgWhatWeOffer from "../../assets/images/agency-img.jpg";
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import HeroHomeVideo from "../../components/HeroSlider/HeroHomeVideo";
import WhatWeOfferEleven from "../../components/WhatWeOffer/WhatWeOfferEleven";
import WhatWeDoOne from "../../components/WhatWeDo/WhatWeDoOne";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import TeamOne from "../../components/Team/TeamOne";
import ParallaxOne from "../../components/ParallaxSection/ParallaxOne";
import PricingsOne from "../../components/Pricings/PricingsOne";
import ContactOne from "../../components/Contact/ContactOne";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import FooterOne from "../../components/Footer/FooterOne";
import CountersOne from "../../components/Counters/CountersOne";
import Loader from "../../components/Loader/Loader";

const HomeVideoBg = () => (
  <Loader>
    <HeaderOne data={dataNavbar} />
    <HeroHomeVideo
      tagline="Welcome Anno"
      title="Advancing Business With <span class='text-bottom-line'>Smart</span> Strategy"
    />
    <WhatWeOfferEleven
      data={dataServices}
      tagline="Expert in Skills"
      title="Creative Solutions <br />for Your Business"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercitati ullamco laboris nisi ut aliquip ex ea commodo consequat."
      textImg="Digital Experiences"
      image={imgWhatWeOffer}
    />
    <CountersOne data={dataCounters} classes="pt-0" />
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
    <PortfolioOne
        tagline="Show Your Works"
        title="Our Portfolio"
        dashColor="dark"
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
    <FooterOne />
  </Loader>
);

export default HomeVideoBg;
