import React, { useState } from "react";
import { Link } from "react-router-dom";
const EventsList = () => {
  const [events, setEvents] = useState([
    {
      title: "Event Title",
      description: "description details....",
      start_date: "",
      end_date: "",
    },
    {
      title: "Event Title",
      description: "description details....",
      start_date: "",
      end_date: "",
    },
  ]);
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            {/* Page-body start */}
            <div className="page-body">
              {/* Row start */}
              <div className="row">
                <div
                  className="col-12 p-10 f-14"
                  style={{
                    borderRadius: 10,
                    background: "#fff",
                    boxShadow: "0px 0px 1px 0px gray",
                    marginBottom: "20px",
                  }}
                >
                  <strong
                    style={{
                      borderRight: "1px solid #777",
                      paddingRight: 10,
                      marginRight: 10,
                    }}
                  >
                    Events
                  </strong>
                  <i className="ti-ruler-pencil" /> - Events List
                  <Link
                    to={`/admin/add-event`}
                    className="f-right m-r-10"
                    data-toggle="tooltip"
                    title=""
                  >
                    <button
                      className="btn btn-sm bg-gradient-red m-white m-round"
                      style={{ opacity: "0.8" }}
                    >
                      <i className="ti-plus" /> Add Event
                    </button>
                  </Link>
                </div>
                <div className="col-md-12 col-xl-12">
                  <div className="card m-round">
                    <div className="card-block">
                      <table className="table table-striped">
                        <tbody>
                          <tr className="m-dblue">
                            <td>
                              <b>Event Title</b>
                            </td>
                            <td>
                              <b>Description</b>
                            </td>
                            <td>
                              <b>Action</b>
                            </td>
                          </tr>
                          {events.map((event, index) => {
                            return (
                              <tr key={index}>
                                <td className="">{event.title}</td>
                                <td className="">{event.description}</td>
                                <td>
                                  {" "}
                                  <div className="d-flex">
                                    <Link to={`/admin/edit-event/${index}`}>
                                      <button
                                        className="btn btn-xs bg-m-orange"
                                        style={{
                                          padding: 2,
                                          margin: "none",
                                          marginRight: "10px",
                                        }}
                                      >
                                        <i className="ti-pencil m-white" />
                                      </button>
                                    </Link>
                                    <a href="#">
                                      <button
                                        className="btn btn-xs bg-m-orange"
                                        style={{ padding: 2, margin: "none" }}
                                      >
                                        <i className="ti-trash m-white" />
                                      </button>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
