import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/main-navbar-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgWhatOffer from "../../assets/images/iMac-screen.png";
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
import imgAbout from "../../assets/images/bg-left-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
// Components
import FooterOne from "../../components/Footer/FooterOne";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroHomeMain from "../../components/HeroSlider/HeroHomeMain";
import WhatWeOfferOne from "../../components/WhatWeOffer/WhatWeOfferOne";
import WhatWeDoOne from "../../components/WhatWeDo/WhatWeDoOne";
import AboutOne from "../../components/About/AboutOne";
import CountersOne from "../../components/Counters/CountersOne";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import TeamOne from "../../components/Team/TeamOne";
import ParallaxOne from "../../components/ParallaxSection/ParallaxOne";
import PricingsOne from "../../components/Pricings/PricingsOne";
import ContactOne from "../../components/Contact/ContactOne";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import Loader from "../../components/Loader/Loader";

const HomeMain = () => {
  return (
    <Loader>
      <HeaderOne data={dataNavbar} />
      <HeroHomeMain />
      <WhatWeOfferOne
        tagline="Expert in Skills"
        title="Creative Solutions<br />for Your Business"
        image={imgWhatOffer}
      >
        Creative problem solving is the mental process of creating a solution to
        a problem. It is a special form of problem solving in which the solution
        is independently created rather than learned with assistance. Creative
        problem solving requires more than just knowledge and thinking.
      </WhatWeOfferOne>
      <WhatWeDoOne
        tagline="What We Do"
        title="Digital Services"
        image={imgWhatWeDo}
      >
        The term Digital Services refers to the electronic delivery of
        information including data and content across multiple platforms and
        devices like web or mobile. Information is presented in a way that is
        easy to use and understand and typically involves transactional services
        such as submitting forms for processing and receiving benefits.
      </WhatWeDoOne>
      <AboutOne tagline="About Us" title="Partners for Growth" image={imgAbout}>
        The process of improving some measure of an enterprise's success.
        Business growth can be achieved either by boosting the top line or
        revenue of the business with greater product sales or service income, or
        by increasing the bottom line or profitability of the operation by
        minimizing costs.
      </AboutOne>
      <CountersOne data={dataCounters} type="dark" />
      <PortfolioOne
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
      <TestimonialsOne data={dataTestimonials} />
      <TeamOne tagline="Meet Creatives" title="Our Team" data={dataTeam} />
      <ParallaxOne image={imgParallax}>
        Where something special happens every days
      </ParallaxOne>
      <PricingsOne
        tagline="Select Your Plan"
        title="Our Pricing"
        data={dataPricings}
      />
      <ContactOne
        title='Request a Quote <span class="text-bottom-line-sm">Now</span>'
        tagline="Contact Us"
      />
      <ClientsCarousel data={dataClients} />
      <FooterOne />
    </Loader>
  );
};

export default HomeMain;
