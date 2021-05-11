import React from "react";

const ClientsGrid = ({ data, classes }) => (
  <div className={"row " + classes}>
    {data ? (
      data
        .filter((v, i) => i < 4)
        .map((client) => (
          <div className="col-md-3 col-sm-6" key={client.id}>
            <div className="client-logo">
              <img
                className="img-responsive"
                src={require("../../assets/images/" + client.image)}
                alt=""
              />
            </div>
          </div>
        ))
    ) : (
      <div className="text-center pt-50 pb-50">
        <h1 className="font-800 default-color">Something is missing</h1>
        <p className="mt-30 red-color text-decoration-underline">
          <b>ClientsGrid </b>component require a [data] parameter and needs to
          be an array of objects
        </p>
      </div>
    )}
  </div>
);

export default ClientsGrid;
