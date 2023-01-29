/** @type {import('next').NextConfig} */

//const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const fs = require('fs');
const path = require('path');

console.log(env)

env.NODE_EXTRA_CA_CERTS = env.SSL_CRT_FILE;

/*
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:21936';
*/

const target = env.ASPNETCORE_URLS.split(';')[1];



console.log(target)
const rewrites = () => {
  return [
    {
      source: "/:path*",
      destination: target+"/:path*",
    },
  ];
};

const nextConfig = {
  reactStrictMode: false,


rewrites
}

module.exports = nextConfig
