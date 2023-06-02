import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ShowDetails = () => {
  const singleShow = useLoaderData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { image, name, summary, webChannel, status, type, genres, network } =
    singleShow;

  const url = webChannel?.officialSite;
  const officialSite = url?.substring(
    url.indexOf("www"),
    url.indexOf("/", url.indexOf("www"))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const data = {
      name,
      email,
    };
    console.log(data);
    localStorage.setItem(email, JSON.stringify(data));
    Swal.fire("Great! Your booking is confirmed.");
    form.reset();
    handleClose();
  };

  const renderSummary = () => {
    return { __html: summary };
  };
  return (
    <div className="container vh-100 mt-5">
      <div className="d-flex">
        <div className="card mb-3 w-75">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image?.original}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div dangerouslySetInnerHTML={renderSummary()} />
                <div>
                  <Button variant="success" onClick={handleShow}>
                    Book Tickets
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="ms-2 px-2 mt-2"
                          required
                        />
                        <br />
                        <label htmlFor="email">Email: </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Name"
                          className="ms-2 px-2 mt-3"
                          required
                        />

                        <div className="mt-5">
                          <Button
                            variant="secondary"
                            onClick={handleClose}
                            className="me-3"
                          >
                            Close
                          </Button>
                          <input
                            type="submit"
                            value="Confirm"
                            className="btn btn-success"
                          ></input>
                        </div>
                      </form>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}

        {/* 2nd card */}

        <div className="card text-bg-light mb-3">
          <div className="card-body">
            <h5 className="card-title">Show Info</h5>
            <p className="card-text">
              <b>{webChannel === null ? "Network: " : "Web Channel"}</b>{" "}
              {webChannel === null ? network?.name : webChannel?.name}
            </p>
            <p className="card-text">
              <b>Status:</b> {status}
            </p>
            <p className="card-text">
              <b>Show Type:</b> {type}
            </p>
            <p className="card-text">
              <b>Genres:</b> {genres}
            </p>
            <p className="card-text">
              <b>Official site:</b>{" "}
              {webChannel === null ? (
                "Website not available"
              ) : (
                <a
                  className="text-decoration-none"
                  href={webChannel.officialSite}
                >
                  {officialSite}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
