/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Children, ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Props {
  children?: ReactNode;
  customSlider?: {
    state: number;
    setState: (value: number) => void;
  };
  showDots?: boolean;
  swipeable?: boolean;
  className?: string;
  onChange?: (currentPage: number) => void;
  autoPlay?: boolean;
}
const Carousel = ({
  children,
  customSlider,
  showDots = true,
  swipeable = true,
  className,
  onChange,
  autoPlay = false,
}: Props) => {
  const childrenArray = Children.toArray(children);
  const [currentSlide, setCurrentSlide] = useState<number>(
    customSlider?.state || 0
  );

  useEffect(() => {
    if (onChange) {
      onChange(currentSlide);
    }
  }, [currentSlide, onChange]);

  const next = () => {
    if (customSlider) {
      if (customSlider.state < childrenArray.length - 1) {
        customSlider.setState(customSlider.state + 1);
      } else {
        customSlider.setState(0);
      }
    } else {
      if (currentSlide < childrenArray.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }
  };
  const prev = () => {
    if (customSlider) {
      if (customSlider.state > 0) {
        customSlider.setState(customSlider.state - 1);
      } else {
        customSlider.setState(childrenArray.length - 1);
      }
    } else {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(childrenArray.length - 1);
      }
    }
  };

  const [autoPlayState, setAutoPlayState] = useState(autoPlay);
  let timeOut: NodeJS.Timeout | null = null;
  useEffect(() => {
    if (autoPlayState) {
      timeOut = setTimeout(() => {
        next();
      }, 3500);
    }
  });

  const config = {
    delta: 35, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const handlers = useSwipeable({
    onSwipedLeft: prev,
    onSwipedRight: next,
    ...config,
  });

  if (swipeable) {
    return (
      <div
        {...handlers}
        className={`flex flex-col gap-5 ${className}`}
        onMouseEnter={() => {
          setAutoPlayState(false);
          if (timeOut) {
            clearTimeout(timeOut);
          }
        }}
        onMouseLeave={() => {
          if (autoPlay) {
            setAutoPlayState(true);
          }
        }}
      >
        <div className="w-full">
          {/* Slide Content */}
          <div
            className={`flex w-full h-full transition-all duration-500`}
            style={{
              width: childrenArray.length * 100 + "%",
              transform: `translateX(${
                customSlider
                  ? (100 / childrenArray.length) * customSlider.state
                  : (100 / childrenArray.length) * currentSlide
              }%)`,
            }}
          >
            {childrenArray.map((child, index) => (
              <div
                key={index}
                className="w-full h-full transition-all ease-out duration-500"
                style={{
                  opacity: customSlider
                    ? customSlider.state === index
                      ? "100%"
                      : "0%"
                    : currentSlide === index
                    ? "100%"
                    : "0%",
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Navigation */}
        {showDots && (
          <div className="w-full flex justify-center gap-2">
            {childrenArray.map((child, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-500
                  ${
                    customSlider
                      ? customSlider.state === index
                        ? "bg-primary dark:bg-white w-7"
                        : "bg-gray_001 dark:bg-gray_004 w-2.5"
                      : currentSlide === index
                      ? "bg-primary dark:bg-white w-7"
                      : "bg-gray_001 dark:bg-gray_004 w-2.5"
                  }
                  `}
                onClick={() =>
                  customSlider
                    ? customSlider.setState(index)
                    : setCurrentSlide(index)
                }
              />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-col gap-[5dvw] ${className}`}
        onMouseEnter={() => {
          setAutoPlayState(false);
        }}
        onMouseLeave={() => {
          if (autoPlay) {
            setAutoPlayState(true);
          }
        }}
      >
        <div className="w-full overflow-hidden">
          {/* Slide Content */}
          <div
            className={`flex w-full transition-all duration-500`}
            style={{
              width: childrenArray.length * 100 + "%",
              transform: `translateX(${
                customSlider
                  ? (100 / childrenArray.length) * customSlider.state
                  : (100 / childrenArray.length) * currentSlide
              }%)`,
            }}
          >
            {childrenArray.map((child, index) => (
              <div
                key={index}
                className="w-full transition-all ease-out duration-500"
                style={{
                  opacity: customSlider
                    ? customSlider.state === index
                      ? "100%"
                      : "0%"
                    : currentSlide === index
                    ? "100%"
                    : "0%",
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Navigation */}
        {showDots && (
          <div className="w-full flex justify-center gap-[2dvw]">
            {childrenArray.map((child, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-500
                  ${
                    customSlider
                      ? customSlider.state === index
                        ? "bg-primary dark:bg-white w-7"
                        : "bg-gray_001 dark:bg-gray_004 w-2.5"
                      : currentSlide === index
                      ? "bg-primary dark:bg-white w-7"
                      : "bg-gray_001 dark:bg-gray_004 w-2.5"
                  }
                  `}
                onClick={() =>
                  customSlider
                    ? customSlider.setState(index)
                    : setCurrentSlide(index)
                }
              />
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default Carousel;
