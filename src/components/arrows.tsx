import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      className="header-content"
      disabled={disabled}
      onClick={onClick}
      style={{
        color: "white",
        cursor: "pointer",
        display: "flex",
        backgroundColor: "transparent",
        border: "none",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <FontAwesomeIcon icon={faArrowLeft} size="4x" />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <FontAwesomeIcon icon={faArrowRight} size="4x" />
    </Arrow>
  );
}

const Arrows = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  const { items } = React.useContext(VisibilityContext);

  // Items have separators in between so only even indices contain real item
  const totalpages = Math.ceil(items.size / 2);

  const { visibleElements } = React.useContext(VisibilityContext);

  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setCurrentPage(Number(visibleElements[0].slice(1)));
    }
  }, [visibleElements]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{ marginRight: "1em", display: "flex", alignItems: "center" }}
      >
        <LeftArrow />
        <Typography className="header-content" fontSize="1.5em">
          {currentPage + 1} / {totalpages}{" "}
        </Typography>
        <RightArrow />
      </div>
    </div>
  );
};

export default Arrows;
