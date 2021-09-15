import React, { useState } from "react";
import { Divider, Grid, Typography, Button } from "@material-ui/core";

function OnSmallScreen({ day, month, title, details, time, address }) {
  const [showDetais, setShowDetails] = useState(false);
  return (
    <>
      <Grid container align="left" style={{ padding: 20 }}>
        <Grid container direction="column" item xs={12} spacing={2}>
          <Grid item align="left">
            <Typography
              variant="h5"
              style={{ color: "white", fontWeight: 900 }}
            >
              {day} {month}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, color: "white", fontWeight: 700 }}
            >
              {title}
            </Typography>
          </Grid>
          <Divider
            style={{
              backgroundColor: "white",
              marginBottom: 5,
            }}
          />
          <Grid item>
            <Typography
              style={{ color: "white", fontWeight: 500 }}
              variant="h6"
            >
              {time}
            </Typography>
            <Divider
              style={{
                marginRight: "58%",
                marginBottom: 10,
                backgroundColor: "white",
              }}
            />
            <Typography style={{ color: "white" }}>{address}</Typography>
          </Grid>
          <Grid item align="left">
            <Button
              style={{ color: "orange", textTransform: "none" }}
              onClick={() => setShowDetails(!showDetais)}
            >
              {showDetais ? "-" : "+"} Event Details
            </Button>
          </Grid>
          {showDetais ? (
            <Grid item align="left">
              <Typography style={{ color: "white" }}>{details}</Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Divider
        style={{
          backgroundColor: "white",
          marginBottom: "10%",
          marginTop: "10%",
        }}
      />
    </>
  );
}

export default OnSmallScreen;
