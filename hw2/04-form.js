const http = require("http");
const port = process.env.PORT || 5001;
const querystring = require("querystring");

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const server = http.createServer((req, res) => {
  if (req.url === "/form") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
                    <form action="/submit" method="post">
                        <div>
                            <label for="username">username:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div>
                            <label for="email">email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form> `);
    res.end();
  } else if (req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = querystring.parse(body);
      const { username, email } = data;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
                <p><strong>Username:</strong> ${username || "(empty)"}</p>
                <p><strong>Email:</strong> ${email || "(empty)"}</p>`);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 - Page not found");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
