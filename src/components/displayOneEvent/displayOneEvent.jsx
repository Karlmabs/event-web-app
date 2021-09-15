import React from "react";
import { useMediaQuery } from "react-responsive";
import OnSmallScreen from "./onSmallScreen";
import OnBigScreen from "./onBigScreen";

export default function DisplayOneEvent({
  day,
  month,
  title,
  details,
  time,
  address,
}) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {isSmallScreen ? (
        <OnSmallScreen
          day={day}
          month={month}
          title={title}
          details={details}
          time={time}
          address={address}
        />
      ) : (
        <OnBigScreen
          day={day}
          month={month}
          title={title}
          details={details}
          time={time}
          address={address}
        />
      )}
    </>
  );
}
