const express = require("express");

const app = express();

app.get("/server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    response.send("hello world");
});

app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中 ...");
});
