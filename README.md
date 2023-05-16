# Overview
This is a simple proof of concept helper to connect Tana with Google Calendar via an Express API. There is a single get route ("/") that retrieves events from the current day from your primary calendar and formats them in Tana Paste. Currently, it just returns the summaries of those events, so nothing fancy, but it's easily extesnible. 

# Set up
Clone the repository and install the dependencies. You'll need to set up credentials to get this to work. Follow the instructions in the [Google Calendar API Node quickstart tutorial](https://developers.google.com/calendar/api/quickstart/nodejs). Use `npm run dev` to run the server with nodemon for hot reloading. On first run you'll be asked to login and authenticate.

# Getting events into Tana
Once the server is up and running, the following Make API Request has worked for me in Tana:

<img width="1084" alt="Screenshot 2023-05-16 at 10 19 53 AM" src="https://github.com/nbbaier/tana-gcal/assets/12950157/d228dcaa-8ea5-4e8f-b79d-7c10b0c0ef64">
