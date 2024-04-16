import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import SideBar from "../../../Components/SideBar/SideBar";

const DashboardAdmin = () => {
  return (
    <>
      <NavBar />
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="page-body">
                <div className="row">
                  <div className="col-md-6 col-xl-3">
                    <a href="allstudents.php">
                      <div className="card bg-m-dblue order-card m-round">
                        <div className="card-block ">
                          <h6 className="m-b-20">Total Students</h6>
                          <h2 className="text-right">
                            <i className="ti-user f-left"></i>
                            <span>0</span>
                          </h2>
                          <p className="m-b-0">
                            This Month<span className="f-right">0</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <a href="allemployees.php">
                      <div className="card bg-m-gray m-round order-card">
                        <div className="card-block">
                          <h6 className="m-b-20">Total Employees</h6>
                          <h2 className="text-right">
                            <i className="ti-briefcase f-left"></i>
                            <span>0</span>
                          </h2>
                          <p className="m-b-0">
                            This Month<span className="f-right">0</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <a href="balance.php">
                      <div className="card bg-m-orange m-round order-card">
                        <div className="card-block">
                          <h6 className="m-b-20">Revenue</h6>
                          <h2 className="text-right">
                            <span
                              className="f-left"
                              style={{ fontWeight: 300, verticalAlign: "top" }}
                            >
                              $
                            </span>
                            <span>0</span>
                          </h2>
                          <p className="m-b-0">
                            This Month
                            <span className="f-right">
                              <b>$</b> 0
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <a href="balance.php">
                      <div className="card bg-m-blue1 m-round order-card">
                        <div className="card-block">
                          <h6 className="m-b-20">Total Profit</h6>
                          <h2 className="text-right">
                            <span
                              className="f-left"
                              style={{ fontWeight: 300, verticalAlign: "top" }}
                            >
                              $
                            </span>
                            <span>0</span>
                          </h2>
                          <p className="m-b-0">
                            This Month
                            <span className="f-right">
                              <b>$</b> 0
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4"></div>
                  <div className="col-md-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default DashboardAdmin;
