const express = require("express");
const cors = require("cors");
const { authorize, listEvents } = require("./calendar");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure CORS for localhost access
const corsOptions = {
  origin: "https://app.tana.inc",
  methods: ["GET", "POST"],
};

// activate CORS middleware
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  try {
    const client = await authorize();
    const events = await listEvents(client);
    const eventList = events.map((event) => `- ${event.summary}\n`).join("");
    res.send(eventList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching events");
  }
});

module.exports = app;
