const express = require("express");

const app = express();

app.get("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    response.send("hello world");
});

app.get("/json-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send(JSON.stringify({ name: "jokerxin" }));
});

app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中 ...");
});
