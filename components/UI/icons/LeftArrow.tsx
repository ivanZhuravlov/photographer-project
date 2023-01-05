const LeftArrow = ({ className, onClick }: { className?: string, onClick?: React.MouseEventHandler<SVGSVGElement> }): JSX.Element => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="53"
      height="26"
      viewBox="0 0 53 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52 12.1387H3"
        stroke="#121212"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.5 1L2 12.3855L14 24.2661"
        stroke="#121212"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LeftArrow;
