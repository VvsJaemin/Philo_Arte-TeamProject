import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/main-navbar-data.json";
import dataProcess from "../../data/Process/process-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgOffer from "../../assets/images/mockup.png";
import imgAbout from "../../assets/images/bg-left-img-2.jpg";
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroStartup from "../../components/HeroSlider/HeroStartup";
import FooterOne from "../../components/Footer/FooterOne";
import WhatWeOfferSeven from "../../components/WhatWeOffer/WhatWeOfferSeven";
import AboutThree from "../../components/About/AboutThree";
import ProcessFive from "../../components/Process/ProcessFive";
import PortfolioCarousel from "../../components/Portfolio/PortfolioCarousel";
import TeamFive from "../../components/Team/TeamFive";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import PricingsOne from "../../components/Pricings/PricingsOne";
import ContactFive from "../../components/Contact/ContactFive";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import Loader from "../../components/Loader/Loader";

const HomeStartup = () => (
  <Loader>
    <HeaderTwo data={dataNavbar} type="wide" />
    <HeroStartup />
    <WhatWeOfferSeven
      title='Think Like a Brand, <br />
              Act Like a <span class="text-bottom-line-sm">Retailer</span>'
      text="Anno template provides fully flexible templates, allowing to
      customize every page and section down to the tiniest detail in a
      few clicks!"
      image={imgOffer}
    />
    <AboutThree
      classes="white-bg"
      tagline="About Us"
      title='Partners for <span class="text-bottom-line-sm">Growth</span>'
      backfont="Partners"
      image={imgAbout}
      pathBtn={process.env.PUBLIC_URL}
      video="https://www.youtube.com/watch?v=sU3FkzUKHXU"
    >
      The process of improving some measure of an enterprise's success. Business
      growth can be achieved either by boosting the top line or revenue of the
      business with greater product sales or service income, or by increasing
      the bottom line or profitability of the operation by minimizing costs.
    </AboutThree>
    <ProcessFive data={dataProcess} />
    <PortfolioCarousel data={dataPortfolio} />
    <TeamFive
      data={dataTeam}
      tagline="Meet Creatives"
      title='Executive <span class="text-bottom-line-sm">Team</span>'
    />
    <TestimonialsOne data={dataTestimonials} items="3" />
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
      image={imgParallax}
    />
    <PricingsOne
      tagline="Select Your Plan"
      title='Our <span class="text-bottom-line-sm">Pricing</span>'
      data={dataPricings}
      classes="no-bottom-line"
    />
    <ContactFive
      tagline="Tell us your target. We'll grow your business."
      title='Request a Quote <span class="text-bottom-line-sm">Now</span>'
    />
    <ClientsCarousel data={dataClients} />
    <FooterOne />
  </Loader>
);

export default HomeStartup;
