const RightArrow = ({ className, onClick }: { className?: string, onClick?: React.MouseEventHandler<SVGSVGElement> }): JSX.Element => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="52"
      height="25"
      viewBox="0 0 52 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12.1387H50"
        stroke="#121212"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M39.501 1L51.001 12.3855L39.001 24.2661"
        stroke="#121212"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RightArrow;
