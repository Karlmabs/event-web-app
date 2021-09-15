import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

function OnBigScreen({ day, month, title, details, time, address }) {
  return (
    <>
      <Grid container align="left">
        <Grid item xs style={{ padding: 30 }}>
          <Typography
            variant="h5"
            align="center"
            style={{ color: "white", fontWeight: 900 }}
          >
            {day}TH
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ color: "white", fontWeight: 900 }}
          >
            {month}
          </Typography>
        </Grid>
        <Grid container direction="column" item xs={6} spacing={2}>
          <Grid item align="left">
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
            <Typography style={{ color: "white" }}>{details}</Typography>
          </Grid>
        </Grid>
        <Grid item xs align="center">
          <Typography
            style={{ margin: 10, color: "white", fontWeight: 700 }}
            align="center"
            variant="h6"
          >
            {time}
          </Typography>
          <Divider
            style={{
              marginLeft: "33%",
              marginRight: "33%",
              marginBottom: 10,
              backgroundColor: "white",
            }}
          />
          <Typography style={{ color: "white" }} align="center">
            {address}
          </Typography>
        </Grid>
      </Grid>
      <Divider
        style={{ margin: 30, marginLeft: 100, backgroundColor: "white" }}
      />
    </>
  );
}

export default OnBigScreen;
