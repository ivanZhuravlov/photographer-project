import React from "react";

const OpenDetails = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3841 15.5849C16.3841 16.0284 16.0294 16.3832 15.5859 16.3832H2.41519C1.97173 16.3832 1.61696 16.0284 1.61696 15.5849V2.41421C1.61696 1.97075 1.97173 1.61598 2.41519 1.61598H7.60365V0.0195312H2.41519C1.08481 0.0195312 0.0205078 1.08383 0.0205078 2.41421V15.5849C0.0205078 16.9153 1.08481 17.9796 2.41519 17.9796H15.5859C16.9163 17.9796 17.9806 16.9153 17.9806 15.5849V10.3965H16.3841V15.5849Z"
        fill="black"
      />
      <path
        d="M10.3976 0.0195312V1.61598H15.2535L8.97852 7.89093L10.1093 9.02175L16.3843 2.7468V7.60268H17.9807V0.0195312H10.3976Z"
        fill="black"
      />
    </svg>
  );
};

export default OpenDetails;
