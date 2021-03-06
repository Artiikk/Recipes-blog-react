import React from "react";
import "./_spinner.scss";

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-magnify">
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
