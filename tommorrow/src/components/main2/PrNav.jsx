import React from "react";
import { PrNavDiv } from "./pg_css/pgCss";
import {
  Alignment,
  Button,
  Callout,
  Icon,
  Navbar,
  NonIdealState,
  Spinner,
} from "@blueprintjs/core";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

function PrNav({ data = 0 }) {
  if (data === 1) {
    return (
      <PrNavDiv>
        <Icon icon="cloud" size={25} />
        &nbsp; SQL Web
        <Navbar.Divider />
        <Button icon="play" text="Checking" minimal intent="white" />
      </PrNavDiv>
    );
  }

  return (
    <PrNavDiv>
      <Icon icon="cloud" size={25} />
      &nbsp; SQL Web
      <Navbar.Divider />
      <Button icon="play" text="Play" minimal intent="white" />
    </PrNavDiv>
  );
}

export default PrNav;
