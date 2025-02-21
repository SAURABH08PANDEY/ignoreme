require("dotenv").config();
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, "\n"); // Read from ENV

function generateFreshdeskJWT(user) {
  const payload = {
    name: user.name,
    email: user.email,
    iat: Math.floor(Date.now() / 1000),
  };  

  const token = jwt.sign(payload, PRIVATE_KEY, {
    algorithm: "RS256",
    expiresIn: "10m",
  });
  console.log(PRIVATE_KEY, payload, token, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');

  return token;
}

module.exports = { generateFreshdeskJWT };
