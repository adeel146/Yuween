import React from "react";

function TrashIcon(props) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_995_39655)">
        <path
          d="M2.66602 14.363C2.66602 15.3452 3.46156 16.1407 4.44381 16.1407H11.5549C12.5371 16.1407 13.3327 15.3452 13.3327 14.363V3.69629H2.66602V14.363Z"
          fill="#98A2B3"
        />
        <path
          d="M11.1107 1.0295L10.2218 0.140625H5.77734L4.88843 1.0295H1.77734V2.80729H14.2218V1.0295H11.1107Z"
          fill="#98A2B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_995_39655">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TrashIcon;
