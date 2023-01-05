import React from "react";

const Avatar = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      className={className}
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44.9996" cy="44.998" r="43" fill="white" />
      <path
        d="M60.3878 32.7494C60.3878 41.2544 53.4938 51.4964 44.9978 51.4964C36.5018 51.4964 29.6078 41.2544 29.6078 32.7494C29.6078 30.7283 30.0059 28.7271 30.7793 26.8599C31.5527 24.9927 32.6863 23.2961 34.1154 21.867C35.5445 20.4379 37.2411 19.3043 39.1083 18.5309C40.9755 17.7574 42.9767 17.3594 44.9978 17.3594C47.0188 17.3594 49.0201 17.7574 50.8873 18.5309C52.7545 19.3043 54.4511 20.4379 55.8802 21.867C57.3092 23.2961 58.4429 24.9927 59.2163 26.8599C59.9897 28.7271 60.3878 30.7283 60.3878 32.7494Z"
        fill="#CFCFCF"
      />
      <path
        d="M74.2108 77.2844C74.2108 78.4274 58.9108 88.7324 44.9968 88.7324C31.3348 88.7324 15.7828 79.2014 15.7828 77.2844C15.7828 64.7384 32.4508 54.5684 44.9968 54.5684C57.5428 54.5684 74.2108 64.7384 74.2108 77.2844Z"
        fill="#CFCFCF"
      />
      <path
        d="M45.0007 89.5004H44.9994C34.7264 89.5064 24.7677 85.9579 16.8133 79.4571C8.85883 72.9562 3.39859 63.9035 1.3591 53.835C-0.680379 43.7665 0.826526 33.3024 5.62411 24.2185C10.4217 15.1346 18.2144 7.9904 27.68 3.99816L27.6802 3.99806C38.5547 -0.595345 50.8086 -0.680729 61.746 3.76069C72.6835 8.2021 81.4087 16.8065 86.0021 27.681C90.5955 38.5555 90.6809 50.8094 86.2394 61.7468C81.798 72.6843 73.1936 81.4094 62.3191 86.0028L62.3186 86.003C56.8406 88.3238 50.9501 89.5134 45.0007 89.5004ZM45.0002 3.43346H44.9997C36.7785 3.43346 28.7419 5.87132 21.9063 10.4388C15.0706 15.0062 9.74286 21.4981 6.59675 29.0935C3.45065 36.6888 2.62748 45.0466 4.23135 53.1098C5.83522 61.173 9.7941 68.5795 15.6073 74.3927C21.4206 80.206 28.8271 84.1649 36.8903 85.7687C44.9535 87.3726 53.3113 86.5494 60.9067 83.4033C68.502 80.2572 74.9939 74.9295 79.5614 68.0938C84.1288 61.2582 86.5667 53.2216 86.5667 45.0005V44.9999C86.5546 33.9795 82.1714 23.4139 74.3788 15.6213C66.5862 7.8287 56.0206 3.44552 45.0002 3.43346Z"
        fill="#121212"
        stroke="white"
      />
    </svg>
  );
};

export default Avatar;
