import React from "react";

const AddProfessor = () => {
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            {/* Page-body start */}
            <div className="page-body ">
              {/* Row start */}
              <div
                className="col-12 p-10 f-16"
                style={{ borderRadius: 10, background: "#fff" }}
              >
                <strong
                  style={{
                    borderRight: "1px solid #777",
                    paddingRight: 10,
                    marginRight: 10,
                  }}
                >
                  Professor
                </strong>
                <i className="ti-home" /> - Admission Form
              </div>
              <div className="bg-m-white m-t-20" style={{ borderRadius: 10 }}>
                <div className="row ">
                  <h3 className="text-center m-t-20 w-100">
                    Admission Form
                    <br />
                    <div
                      className="bg-gradient-blue "
                      style={{
                        width: 20,
                        height: 7,
                        borderRadius: 10,
                        display: "inline-block",
                      }}
                    />{" "}
                    <span
                      className="f-12 m-dblue"
                      style={{ display: "inline-block", fontWeight: 100 }}
                    >
                      Required*
                    </span>
                    <div
                      className="bg-gradient-gray m-l-10"
                      style={{
                        width: 20,
                        height: 7,
                        borderRadius: 10,
                        display: "inline-block",
                      }}
                    />{" "}
                    <span
                      className="f-12 gradient-gray"
                      style={{ display: "inline-block", fontWeight: 100 }}
                    >
                      Optional
                    </span>
                  </h3>
                  <form id="myform"></form>
                </div>
                <div
                  className="row"
                  style={{
                    border: "0px solid #9698d6",
                    padding: "5px 5px 5px 15px",
                  }}
                >
                  <h6
                    className="w-100"
                    style={{ borderBottom: "1px solid #999" }}
                  >
                    <div
                      className="bg-gradient-dark m-white"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        display: "inline-block",
                        paddingTop: 3,
                        paddingLeft: 7,
                      }}
                    >
                      1
                    </div>{" "}
                    Professor Information{" "}
                    <span style={{ fontSize: 12 }} className="f-right" />
                  </h6>
                  <div className="col-lg-4">
                    <div className="m-div">
                      <label className="m-label bg-gradient-blue m-white">
                        Professor Name*
                      </label>
                      <input
                        type="text"
                        className="form-control m-field"
                        placeholder="Name of Professor"
                        name="fullName"
                        required=""
                      />
                    </div>
                    <div className="m-div">
                      <label className="m-label bg-gradient-gray m-white">
                        Picture - Optional
                      </label>
                      <input
                        type="file"
                        className="form-control m-field"
                        name="fileToUpload"
                        id="fileToUpload"
                      />
                    </div>
                    <span
                      className="bg-c-yellow m-round m-t-0 m-l-10"
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      Max size 100KB
                    </span>
                  </div>

                  <div className="col-lg-4">
                    <div className="m-div">
                      <label className="m-label bg-gradient-blue m-white">
                        Phone Number*
                      </label>
                      <input
                        type="number"
                        className="form-control m-field"
                        placeholder="+(216) 23 456 789"
                        name="phoneNumber"
                        required=""
                      />
                    </div>
                    <div className="m-div">
                      <label className="m-label bg-gradient-blue m-white">
                        Select Class*
                      </label>
                      <select className="form-control m-field">
                        <option value=""> --select class-- </option>
                        <option value={64223}>1 S 1</option>
                        <option value={158093}>MSI</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="m-div">
                      <label className="m-label bg-gradient-blue m-white">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control m-field"
                        placeholder="Email"
                        id="reg"
                        name="reg"
                        required=""
                      />
                    </div>

                    <div className="m-div">
                      <label className="m-label bg-gradient-blue m-white">
                        Address*
                      </label>
                      <input
                        type="text"
                        className="form-control m-field"
                        placeholder="Address"
                        name="address"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <hr />
                <div className="row" style={{ padding: "5px 5px 5px 15px" }}>
                  <h5 className="w-100 text-center">
                    <button
                      className="btn btn-large bg-m-dblue m-white"
                      style={{ width: 170, padding: 10, borderRadius: 20 }}
                      type="submit"
                      id="submitBtn"
                      name="submit"
                    >
                      <i className="ti-check" /> Submit
                    </button>
                  </h5>
                </div>
                {/* Row end */}
                {/* Row start */}
                {/* Row end */}
                {/* Page-body end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfessor;
