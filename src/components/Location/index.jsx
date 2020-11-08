import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31521.408566101323!2d7.472880836496321!3d9.047698648748238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bab40244e97%3A0x51ba63899195d9d4!2sShoprite%20Silverbird%20Abuja!5e0!3m2!1sen!2sng!4v1604192055666!5m2!1sen!2sng"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
