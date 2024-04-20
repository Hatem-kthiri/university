import React from "react";

const EditSubject = () => {
  return (
    <div className="pcoded-inner-content" style={{ marginLeft: "115px" }}>
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
                  Subject
                </strong>
                <i className="ti-ruler-pencil" /> - Edit Subject
              </div>
              <div className="col-md-6 col-xl-4" />
              <div className="col-md-6 col-xl-4 text-center">
                <form id="myform">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name Of subject"
                    id="classname"
                    name="classname"
                    required=""
                  />

                  <br />

                  <button
                    type="submit"
                    name="addclass"
                    className="btn btn-primary btn-large"
                  >
                    <i className="ti-check" /> Submit
                  </button>
                  <br />
                </form>
              </div>
              <div className="col-md-6 col-xl-4" />
            </div>
            {/* Row end */}
            {/* Row start */}
            {/* Row end */}
          </div>
          {/* Page-body end */}
        </div>
      </div>
    </div>
  );
};

export default EditSubject;