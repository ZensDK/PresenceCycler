const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`ZenithCycler is Hosting`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("ZenithRPC - " + Date.now()) });
}
 
module.exports = keepAlive;
