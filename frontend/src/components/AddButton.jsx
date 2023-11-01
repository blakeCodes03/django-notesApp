import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <Icon icon="carbon:add-filled" color="#f68657" height={72} />
    </Link>
  );
};

export default AddButton;
