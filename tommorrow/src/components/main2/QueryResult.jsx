import React, { useEffect } from "react";
import { QueryResultDiv } from "./pg_css/pgCss";

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

function QueryResult() {
  return (
    <QueryResultDiv>
      <NonIdealState
        icon="cloud"
        title="No Results"
        description="Click on the Play Button to execute your query"
        action={<Button icon="play" text="Play" />}
      />
    </QueryResultDiv>
  );
}

export default QueryResult;
