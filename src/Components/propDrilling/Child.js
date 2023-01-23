import React from "react";

function Child({ value, setValue }) {
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <React.Fragment>
      <button className="btn btn-danger" onClick={handleClick}>
        Increase
      </button>
    </React.Fragment>
  );
}

export default Child;
