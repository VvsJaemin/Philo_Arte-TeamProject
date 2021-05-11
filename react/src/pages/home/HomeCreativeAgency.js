import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/creative-agency-navbar.json";
import dataTabs from "../../data/Tabs/tabs-data.json";
import dataPortfolio from "../../data/Portfolio/masonry-portfolio-data.json";
import dataProcess from "../../data/Process/process-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgOffer from "../../assets/images/video-mockup.png";
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderTwo from "../../components/Header/HeaderTwo";
import FooterOne from "../../components/Footer/FooterOne";
import HeroCreativeAgency from "../../components/HeroSlider/HeroCreativeAgency";
import WhatWeOfferTwo from "../../components/WhatWeOffer/WhatWeOfferTwo";
import TabsOne from "../../components/Tabs/TabsOne";
import PortfolioTwo from "../../components/Portfolio/PortfolioTwo";
import ProcessOne from "../../components/Process/ProcessOne";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import PricingsOne from "../../components/Pricings/PricingsOne";
import ContactTwo from "../../components/Contact/ContactTwo";
import ClientsGrid from "../../components/Carousel/ClientsGrid";
import Loader from "../../components/Loader/Loader";

const HomeCreativeAgency = () => (
  <Loader>
    <HeaderTwo type="wide" data={dataNavbar} />
    <HeroCreativeAgency />
    <WhatWeOfferTwo
      title='We Design Visual Experience <br /> for The <span class="text-bottom-line-sm">Web</span>'
      text="Anno template provides fully flexible templates, allowing to
              customize every page and section down to the tiniest detail in a
              few clicks!"
      image={imgOffer}
      video="https://www.youtube.com/watch?v=sU3FkzUKHXU"
    >
      <TabsOne data={dataTabs} classes="mt-50" />
    </WhatWeOfferTwo>
    <PortfolioTwo
      title='Take a Look at Our Featured <span class="text-bottom-line-sm">Work</span>'
      data={dataPortfolio}
    />
    <ProcessOne data={dataProcess} />
    <TestimonialsTwo
      title='Our<br /> Happy <span class="text-bottom-line-sm">Customers</span>'
      data={dataTestimonials}
    />
    <TeamTwo
      data={dataTeam}
      title={
        'Our Warm Up <br /> Is Your <span class="text-bottom-line-sm">Work Out</span>'
      }
    />
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn="!#"
      image={imgParallax}
    />
    <PricingsOne
      data={dataPricings}
      title='Panoramic Solutions<br /> Top <span class="text-bottom-line-sm">To Bottom</span>'
      titleAlign="left"
    />
    <ContactTwo title='Request a Quote <span class="text-bottom-line-sm">Now</span>'>
      <ClientsGrid data={dataClients} />
    </ContactTwo>
    <FooterOne />
  </Loader>
);

export default HomeCreativeAgency;
