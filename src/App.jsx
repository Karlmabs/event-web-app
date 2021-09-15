import React from "react";
import "./App.css";
import { Grid, Chip } from "@material-ui/core";
import DisplayOneEvent from "./components/displayOneEvent/displayOneEvent";

function App() {
  const events = [
    {
      day: "11",
      month: "NOV",
      title: "Sunday Supper Club",
      details:
        "A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn cooking methods from top chef...",
      time: "16:00 - 19:00",
      address: "1620 Vineyard Drive,USA",
    },
    {
      day: "13",
      month: "NOV",
      title: "Evenings in the Park",
      details:
        "We invite you to listen bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tast...",
      time: "06:30 - 08:30",
      address: "Estuary Park",
    },
    {
      day: "15",
      month: "NOV",
      title: "Morning Breews & Views",
      details:
        "Enjoy free samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet cofee d...",
      time: "08:00 - 15:00",
      address: "The Teapot and Brew Club",
    },
  ];

  return (
    <div style={{ margin: 20 }}>
      <Grid container spacing={2}>
        <Grid xs={12} align="center">
          <Chip
            label="Events"
            style={{
              marginBottom: "2%",
              fontWeight: "bold",
            }}
          />
        </Grid>
      </Grid>
      {events.map((event) => (
        <DisplayOneEvent
          day={event.day}
          month={event.month}
          title={event.title}
          details={event.details}
          time={event.time}
          address={event.address}
        />
      ))}
    </div>
  );
}

export default App;
