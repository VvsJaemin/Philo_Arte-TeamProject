import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/parallax-digital-navbar-data.json";
import dataTabs from "../../data/Tabs/tabs-data.json";
import dataRings from "../../data/Skills/skills-ring-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataSkills from "../../data/Skills/skills-data.json";
import dataCounter from "../../data/Counters/counters-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataClients from "../../data/Clients/clients-data.json";
import dataBlog from "../../data/Blog/blog-data.json";
// Images
import imgParallax from "../../assets/images/background/parallax-bg-2.jpg";
// Components
import HeaderSocial from "../../components/Header/HeaderSocial";
import HeroParallax from "../../components/HeroSlider/HeroParallax";
import WhatWeOfferNine from "../../components/WhatWeOffer/WhatWeOfferNine";
import TabsOne from "../../components/Tabs/TabsOne";
import PresentationTwo from "../../components/Presentation/PresentationTwo";
import SkillBarRingSection from "../../components/Skillbar/SkillBarRingSection";
import PortfolioBoxedSpaceFour from "../../components/Portfolio/PortfolioBoxedSpaceFour";
import AboutFive from "../../components/About/AboutFive";
import CounterRowOne from "../../components/Counters/CounterRowOne";
import ParallaxTwo from "../../components/ParallaxSection/ParallaxTwo";
import TestimonialsThree from "../../components/Testimonials/TestimonialsThree";
import ClientsGrid from "../../components/Carousel/ClientsGrid";
import BlogSection from "../../components/Blog/BlogSection";
import ContactSeven from "../../components/Contact/ContactSeven";
import MapSection from "../../components/Map/MapSection";
import FooterThree from "../../components/Footer/FooterThree";
import Loader from "../../components/Loader/Loader";

const HomeParallax = () => (
  <Loader>
    <HeaderSocial data={dataNavbar} />
    <HeroParallax />
    <WhatWeOfferNine>
      <TabsOne data={dataTabs} />
    </WhatWeOfferNine>
    <PresentationTwo
      title="Superb Website Template <br /> for Startups & Small Businesses."
      text="We Are provide web design services to startups and existing business in<br> New York and around the US helping them make an impact online."
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
    />
    <SkillBarRingSection data={dataRings} />
    <PortfolioBoxedSpaceFour
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
    <AboutFive
      data={dataSkills}
      title="Agency Overview"
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
      <CounterRowOne data={dataCounter} classes="mt-50" />
    </AboutFive>
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
      image={imgParallax}
    />
    <TestimonialsThree data={dataTestimonials} title="Our Clients Say">
      <ClientsGrid data={dataClients} classes="mt-100" />
    </TestimonialsThree>
    <BlogSection title="Our Latest Blogs" data={dataBlog} />
    <ContactSeven title="Request a Quote Now" />
    <MapSection />
    <FooterThree />
  </Loader>
);

export default HomeParallax;
