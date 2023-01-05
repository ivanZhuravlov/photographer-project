import React from "react";
import { ParallaxProps } from "./Parallax.props";
import { InView } from "react-intersection-observer";
import styles from "./Parallax.module.scss";
import cn from "classnames";

const Parallax = ({
  children,
  divisionBy = 2,
  duration = 1000,
  startedOn = 200,
  className,
}: ParallaxProps): JSX.Element => {
  const [windowScrollY, setWindowScrollY] = React.useState(0);
  const [isTransformWork, setIsTransformWork] = React.useState(false);
  const parallaxRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && typeof window !== "undefined") {
        const { clientHeight } = parallaxRef.current;

        let result = clientHeight + window.scrollY / divisionBy;

        if (window.scrollY <= startedOn) {
          result = 0;
        }

        setWindowScrollY(result);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [duration, startedOn, divisionBy]);
  const interSectionCallback = (isView: boolean) => {
    isView ? setIsTransformWork(true) : setIsTransformWork(false);
  };
  return (
    <InView onChange={interSectionCallback}>
      <div
        ref={parallaxRef}
        className={cn(styles.parallax, className)}
        style={{
          transform: `translateY(-${
            isTransformWork ? windowScrollY / divisionBy : 0
          }px)`,
          transition: `all ${duration}ms ease-out`,
        }}
      >
        {children}
      </div>
    </InView>
  );
};

export default Parallax;
