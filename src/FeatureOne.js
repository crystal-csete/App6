/** @format */

import React from "react";

const FeatureOne = () => {
  return (
    <div className='featSectDiv'>
      {/* FEATURE ONE */}
      <div className='featOne'>
        {/* wrapper div for all feat one content */}
        <div className='featOneWrapperDiv'>
          {/* div for text side of feat one */}
          <div className='featOneTitleDiv'>
            <h2>Use this note pad to make "Quick Notes" for later!</h2>
            <p>
              Save notes for later, view them below. Completed? Great, click on
              them to make them show completed. You can also Delete them, and
              Edit them, using the icons.
            </p>
          </div>

          {/* div for image side of feat one */}
          <div className='featOneBlankDiv'>
            <div className='featOneImgDiv'>
              <i className='fas fa-sticky-note'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
