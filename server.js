const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log("server is running successfully");
});
/*
1. git init
2. git remote add origin link(repo link)
3. git add .
4. git commit -m "add_your_commit_message_here"
5. git pull origin branchname --allow-unrelated-histories
6. git commit -m "msg"
7. git push origin branchname
*/