require("dotenv").config();
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = `MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdgteLVKCgkShz
4ER8XBuSIUqmsGHFJoZ4BfT7jLrDUtKCurDxmST3aRV7jcsSijO3ZiDlZPGZtRBv
XrMprRRxBixguHbz0e5oF9eJR++YV55kuC5Eb1yj8OgakORF7IjroDUWM6zRnc8M
WhZR5moJM9z+atWEqdmXUzTnB8KB2sT8d+KW6RKro/VA5o9QVxgmRppGE0+Zfomc
fwMNT08atOdBKiUl2tGdaIkI2RKASqSehTzjTq7hE4zXhs+qeBKJG9jRqr8QNV/s
53Bob9BhSAjhjUJYPowS9ZwUYaQEtJ3uealrFpcxGdcQ/sHa58swzMK3p7GLMp2P
z/4XuRClAgMBAAECggEABdNIjtn5ZW+b1DxMIMcdVID6oRqXX6NtOt/ROwJO8Q8P
CTAWsivYXIdPcNHgSssGpCaT6+R1NBkeZwdjB9AM7xH9/ccsHapiLiueV/Zj1ypK
uJRdZyBUm90chYJU9n/LdALhEoXmYBbZ2JXP63R3SmmqQKiXl+cNmVyvUfoSw+5r
3qC9lMTYCoFHZxdwudrbb/YkyF3+RtxsmryjZqJjWPgKQmckoU9d97Jl6CMLtjip
E34PWtbZzXXleg+QN8N7dmsx5rQLXTsq2v14aYhVPsQSaIg5NMnA6if5YnBBUleq
It94UxnywCI+JV402HW5aJh8JYba95Ck5R0ccxLCOwKBgQDgTxSJZn32x82N1mSg
/S9qpR+pcbvu/qnl875qpgWm6Cr3fq3kwMyiNv6e0JPfWvRJvfA0HV+fWIcp1Nkp
w5ypL55STbPwbxKg3YDo6f5OfkXc8Ka0Nwt9FJc7PBJrEFDXWKx0rmotoRonY1BL
/oVhd8Rw2bH/cCTu8W7SyT6GJwKBgQD8zpG8CalylSQG9jpdPJC5CvsDLAKd5amR
vJ61ec/Jao2ds96ApKD4gcOdWQeBiFrXU60xoqBQ6rNP7hmqdTK3a12K/JUiqMfU
gAQQql+RUde9MVhfMOA4X7/1sKE/2NarsdvhsgNAxwgvefBg0YfwBm9d+IwWmfXG
H4ehXU0eUwKBgF5yjdgo8sMVcETX0DlFQlDqREGppRNF4a30iuoHC/wyZ90cVwYp
9EAdXerrMkhq2M+wDVM0Rw4mTYtclzARsIZAia5oD2seqb5YZi4sUKsmWi5kmhzp
zImXQPJtIeg4z4FNUhgzVHvwCL4rACVvfyQCNRG7aEqBItwFhr90g0IjAoGAcF44
9MWupZmY++cyJgMnqLgyvkQvnZNZfcfDG5LbQwGzlKdAfRmv2wWCt0u9RFwhVJiC
4Q8SByVrMln42oVhV5nHaGHAwDkZKWEFbYrtE6C3Lgbi6tzErQoSPtiVs9VkBcj2
nSkMvRw6jS+8Iqy/qXaSxcgWLG2eisO0+4qHHrUCgYALBAoymxp9TTxLFLED9iD2
5oxMz8Th77e5kkifFtWfrILh2RqKwLzJWw9YxSLUYPo8aWV3gDSh9mtDGwPPlQ6W
2Yl6xBrziQy7WxcvbjBKdLQlieIaEleWZ9xOxwOTrKGgVJua9JSkHlLtUbs9jhwK
IC+FSONc6Y5Nsl2fxXe/Tw==`;

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
  console.log(
    PRIVATE_KEY,
    payload,
    token,
    "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
  );

  return token;
}

module.exports = { generateFreshdeskJWT };
