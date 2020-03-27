import React, { Component } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import NoImpact from "./DashboardComponents/DashboardNoImpactCard.jsx";

import Typography from "@material-ui/core/Typography";

const ImpactTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center"
});

export default function ImpactPage() {
  return (
    <div>
      <div>
        <ImpactTypography>Impact</ImpactTypography>
      </div>
      <NoImpact> </NoImpact>
    </div>
  );
}
