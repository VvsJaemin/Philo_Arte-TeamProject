import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollIntoView from "./helpers/ScrollIntoView";
import ScrollToTop from "./helpers/ScrollToTop";

// Demo page
import Demo from "./pages/Demo";

// Homepages
import HomeBusiness from "./pages/home/HomeBusiness";
import HomeCreativeAgency from "./pages/home/HomeCreativeAgency";
import HomeDigital from "./pages/home/HomeDigital";
import HomeImageBg from "./pages/home/HomeImageBg";
import HomeKenburn from "./pages/home/HomeKenburn";
import HomeMain from "./pages/home/HomeMain";
import HomeMarketing from "./pages/home/HomeMarketing";
import HomeMinimalAgency from "./pages/home/HomeMinimalAgency";
import HomeParallax from "./pages/home/HomeParallax";
import HomeStartup from "./pages/home/HomeStartup";
import HomeStudio from "./pages/home/HomeStudio";
import HomeVideoBg from "./pages/home/HomeVideoBg";

// Inner Pages
import BlogPage from "./pages/inner/BlogPage";
import BlogDetailsPage from "./pages/inner/BlogDetailsPage";
import ComingSoonPage from "./pages/inner/ComingSoonPage";
import CountdownPage from "./pages/inner/CountdownPage";
import CountersPage from "./pages/inner/CountersPage";
import Page404 from "./pages/inner/Page404";
import PortfolioPage from "./pages/inner/PortfolioPage";
import PricingsPage from "./pages/inner/PricingsPage";
import TestimonialsPage from "./pages/inner/TestimonialsPage";

function App() {
  return (
    <Router basename="/">
      <ScrollIntoView>
        <ScrollToTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-main`}
              component={HomeMain}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-creative-agency`}
              component={HomeCreativeAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-digital`}
              component={HomeDigital}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-minimal-agency`}
              component={HomeMinimalAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-business`}
              component={HomeBusiness}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-studio`}
              component={HomeStudio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-startup`}
              component={HomeStartup}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-marketing`}
              component={HomeMarketing}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-parallax`}
              component={HomeParallax}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-image-bg`}
              component={HomeImageBg}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-video-bg`}
              component={HomeVideoBg}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-kenburn`}
              component={HomeKenburn}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={BlogPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetailsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/counters`}
              component={CountersPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/countdown`}
              component={CountdownPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/testimonials`}
              component={TestimonialsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/pricings`}
              component={PricingsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/404-page`}
              component={Page404}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/coming-soon`}
              component={ComingSoonPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={PortfolioPage}
            />
            <Route component={Page404} />
          </Switch>
        </ScrollToTop>
      </ScrollIntoView>
    </Router>
  );
}

export default App;
