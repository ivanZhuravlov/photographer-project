import React from 'react';

const PopupClose = ({ className, onClick }: { className?: string, onClick?: React.MouseEventHandler<SVGSVGElement> }): JSX.Element => {
    return (
        <svg className={className} onClick={onClick} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#121212" />
            <path d="M7 19L19 7" stroke="white" strokeWidth="1.71429" strokeLinecap="round" />
            <path d="M19 19L7 7" stroke="white" strokeWidth="1.71429" strokeLinecap="round" />
        </svg>

    );
};

export default PopupClose;
