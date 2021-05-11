import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Icofont from "react-icofont";

const TabsOne = ({ data, classes }) => (
  <div className={"row tabs-style-01 " + classes}>
    <div className="col-md-12">
      {data ? (
        <Tabs
          className="icon-tabs"
          selectedTabPanelClassName="react-tabs__tab-panel--selected active in"
        >
          <TabList className="nav nav-tabs text-center" role="tablist">
            {data.map((item, i) => (
              <Tab
                key={item.id}
                role="presentation"
                className={i === 0 ? "active" : ""}
              >
                <span>
                  <h1>{`0${i + 1}`}</h1> {item.title}
                </span>
              </Tab>
            ))}
          </TabList>
          <div className="tab-content text-center">
            {data.map((item, i) => (
              <TabPanel
                key={item.id}
                role="tabpanel"
                className="tab-pane fade"
                id={item.path}
              >
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="text-left">
                      <h3 className="font-700">{item.title}</h3>
                      <p>{item.text}</p>
                      <p className="mt-50">
                        <a
                          href={process.env.PUBLIC_URL}
                          className="btn btn-md btn-color btn-animate btn-circle"
                        >
                          <span>
                            {item.textBtn}
                            <Icofont icon="arrow-right" className="tr-icon" />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <img
                      className="img-responsive"
                      src={require("../../assets/images/" + item.image)}
                      alt="tab-1"
                    />
                  </div>
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      ) : (
        <div className="text-center pt-50 pb-50">
          <h1 className="font-800 default-color">Something is missing</h1>
          <p className="mt-30 red-color text-decoration-underline">
            <b>TabsOne </b>component require a [data] parameter and needs to be
            an array of objects
          </p>
        </div>
      )}
    </div>
  </div>
);

export default TabsOne;
