const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(
      "<html><head><title>Form Input</title></head><body><form action='/message' method='POST'><input placeholder=`Hello from the other side` name='message'/><button type='submit'>Confirm</button></form></body></html>"
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log({ chunk });
      body.push(chunk);
    });
    req.on("end", () => {
      const reqBody = Buffer.concat(body).toString();
      console.log(reqBody);
      const message = reqBody.split("=")[0];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write(
    "<html><head><title>Nodejs</title></head><body><h1>Hello from here</h1></body></html>"
  );
  res.end();
};

module.exports = requestHandler;
