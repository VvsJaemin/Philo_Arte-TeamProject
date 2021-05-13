import React from "react";
// DATA Files
import {dataNavbar, dataCounters, dataPortfolio,dataServices,dataTestimonials,dataTeam, dataPricings, dataClients}  from "data/index"
// Components
import {HeaderOne, HeroHomeVideo, WhatWeOfferEleven, WhatWeDoOne, PortfolioOne, TestimonialsOne, TeamOne, ParallaxOne, PricingsOne, ContactOne, ClientsCarousel, FooterOne, CountersOne, Loader}  from "components/index";
// Images
import imgWhatWeOffer from "../../assets/images/agency-img.jpg";
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";


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
