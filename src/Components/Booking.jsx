// import { Helmet } from "react-helmet";

const Booking = ({ bookingOpen, setBookingOpen }) => {
  return (
    <div className={bookingOpen ? "booking-container container" : "container"}>
      <button
        onClick={() => {
          setBookingOpen(!bookingOpen);
        }}
        className="booking-close-btn"
      >
        <h4>close x</h4>
      </button>
      {bookingOpen ? (
        <iframe
          title="booking"
          src="https://booking.resdiary.com/widget/Standard/HakkaPo/48590"
          allowtransparency="true"
          style={{
            width: "100%",
            margin: "auto",
            border: "none",
            paddingTop: "32px",
            maxWidth: "540px",
            height: "640px",
          }}
        ></iframe>
      ) : null}
      {console.log(bookingOpen)}
    </div>
  );
};

export default Booking;
