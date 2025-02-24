require("dotenv").config();
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCNFB3OFaJFKH9p
xtXR4BPOqukejnOzq2hYkC+w7meiujuDc/RmfI/RG38SSpucd3lresiWuU9QjBUE
Ud8hrqVaPZr9Cvt9B12vZFClcuAKIjDNTN+ibuNkQutNcEJ/tNCayAB5UDgfsXa+
fwg7qJOa6AM5VK47O/zJLGkQtc+upYcvaeejwQDdgS7yLYlPTc79rGEYE1DzbUAt
xpFWWOJnw3EBrC9zF2kZqncAy4OTnNGg5XYz+XnosjBmQ6hRksBBpA79GBJqv0uR
9EjBNZKObqHAzvafSIYN1sTorA4xvOcwIsgU+WKO9Q/W2JngpSi/EABYf5dEFBEF
Ds7TzKtBAgMBAAECggEAAiIevUIIfSE6o//UteK8ifB9q++dgkcCQeyUPAmu2YAV
bExxkqcpiZDv3/fu2HPaCy0FIXpV37Lukm0mgZzhdTbfRBpJaT+WRBOxQH83MhAI
SuJxs0QX/ikg47/h0YqLaPvDPhJfduM5F3JWToijCsGdYt2L8OtcTDJ2uED3jf1/
CBUf+0URX6viijwt7WdpKmYMwQuWvk5KU4vI30VFaFKiz73M1+o1wrq6/2IHeLgY
ujYY1hYGThQza4o77ajcTGalZFJun64OyOlB7lzTHFz0YINOJO4QLN9RgLyCnGqC
9PJFCO7H3Eva2JyBnTPSQO81zHtYXZV5VGco8cg9UQKBgQC19CyGZkAo5D/S3A3P
ctVJuIbIZ/sTV23n51G52B0CjfWEAzsEPhkIouR8QsIUu5/c//0yPmo2/9ZLt2dz
ej4IZAMacs43O8k7zJjTBz3BmWpn72Jg8trBnpmM7Mje2RvDeAXvkO4VUWQGypk/
+1vVcWTQ3lJkXfIetglVICKpHQKBgQDGfZa+ZMGEV/5mIU3smbxQGrnV4uVnvliP
23sxHhmZsPpSrSuHPomyoH7AlwXaoVW0OeGJZr3qy0d8YwCCXbbkfQeQUYCilNLP
Mp4mAI3H3gI59KNwJ9rA1aqmyotDxd6GR/DvdFV+j4dwxiZ+ZQt3ylHfvAMhnAjp
TJHqFo4VdQKBgD332vIrAM7sbZAywcFVKq7g2YaHY0tDC3tfnMXehILKNkOvlfnr
7Dq0v3xSgCbvf5KU3HawKxxwJVvEKsd5aocRCL2JPBIzmmVzWNkGLlIxHbwoGylJ
jJdEnKcSPZcn+fyoc90TTwKTpa1qcqcHxE79P4ijLwxfsoYjGSqUtzlBAoGAThtL
f15snCR4Mj42yLzyUl9B832Wok1P0kQe5QQgNM9kobYNI+ojC0yGtEh5gD/uVr5U
Ftp8L3GQjszyfVpdRupAWLUJtnBzyB72BqQ/JoAhRicTTWYRecJapcmcJa4uU47p
q4COx/+431LKAQDIE3pk33K/lLEu/IcqAACiJqUCgYAQoRz8Z0YkiFlsNW2sLWXj
P8uiHf6kA3ZERcncUO3KVGYWdx+HnV6Qzo0qd9Hw/haMmFYnPlFuUMYXPZalG4UN
tIyToDyXxtEIzNo4LueCbBDKDYh9mdtLG/2zXcr1JPJlWv0IlxtB+QyB2pk7xDKT
3J7i6/mE6+yKNZJEAFfcJQ==
-----END PRIVATE KEY-----`

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
