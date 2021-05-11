import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/main-navbar-data.json";
import dataServices from "../../data/Services/services-studio-data.json";
import dataProcess from "../../data/Process/process-studio-data.json";
import dataPortfolio from "../../data/Portfolio/masonry-portfolio-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataTeam from "../../data/Team/team-sm-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgFooter from "../../assets/images/background/stars-bg.png";
import imgAbout from "../../assets/images/bg-left-img-2.jpg";
// Components
import HeaderTwo from "../../components/Header/HeaderTwo";
import FooterOne from "../../components/Footer/FooterOne";
import HeroStudio from "../../components/HeroSlider/HeroStudio";
import WhatWeOfferSix from "../../components/WhatWeOffer/WhatWeOfferSix";
import ProcessFour from "../../components/Process/ProcessFour";
import PortfolioWideMasonry from "../../components/Portfolio/PortfolioWideMasonry";
import CountersTwo from "../../components/Counters/CountersTwo";
import AboutThree from "../../components/About/AboutThree";
import TeamFour from "../../components/Team/TeamFour";
import PricingsTwo from "../../components/Pricings/PricingsTwo";
import ContactFour from "../../components/Contact/ContactFour";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import Loader from "../../components/Loader/Loader";

const HomeStudio = () => (
  <Loader>
    <HeaderTwo data={dataNavbar} />
    <HeroStudio />
    <WhatWeOfferSix
      tagline="Our Services"
      title='Work Together <br />For <span class="text-bottom-line-sm">Success</span>'
      text="Anno template provides fully flexible templates, allowing to
      customize every page and section down to the tiniest detail in a
      few clicks!"
      pathBtn={process.env.PUBLIC_URL}
      data={dataServices}
    />
    <ProcessFour
      tagline="Our Steps"
      title='Work Together <br />For <span class="text-bottom-line-sm">Success</span>'
      bg={imgFooter}
      data={dataProcess}
    />
    <PortfolioWideMasonry data={dataPortfolio} classes="pt-0" />
    <CountersTwo data={dataCounters} />
    <AboutThree
      tagline="About Us"
      title='Partners for <span class="text-bottom-line-sm">Growth</span>'
      backfont="Partners"
      image={imgAbout}
    >
      The process of improving some measure of an enterprise's success. Business
      growth can be achieved either by boosting the top line or revenue of the
      business with greater product sales or service income, or by increasing
      the bottom line or profitability of the operation by minimizing costs.
    </AboutThree>
    <TeamFour
      tagline="Meet Creatives"
      title='You Are Only Good As Your <span class="text-bottom-line-sm">Team</span>'
      data={dataTeam}
    >
      Web teams are made up of a diverse group of people who all contribute
      their skills in multiple avenues. Each person has a different role that
      combines with the others to work toward a common goal.
    </TeamFour>
    <PricingsTwo
      tagline="Our Pricing"
      title='Complete <span class="text-bottom-line-sm">Satisfaction</span>'
      text="Offers products or services. They are a challenge from both a
      design and usability standpoint. They must be simple but at the
      same time clearly differentiate between features and prices of
      different products and services."
      data={dataPricings}
    />
    <ContactFour
      tagline="Contact Us"
      title='Request a Quote <span class="text-bottom-line-sm">Now</span>'
    />
    <ClientsCarousel data={dataClients} classes="pt-120 pb-120" />
    <FooterOne bg={imgFooter} />
  </Loader>
);

export default HomeStudio;
