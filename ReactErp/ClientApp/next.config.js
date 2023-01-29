/** @type {import('next').NextConfig} */

//const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const fs = require('fs');
const path = require('path');

const baseFolder =
    process.env.APPDATA !== undefined && process.env.APPDATA !== ''
        ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];
const certificateName = certificateArg ? certificateArg.groups.value : process.env.npm_package_name;

if (!certificateName) {
    console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.')
    process.exit(-1);
}

const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);


console.log(certFilePath)

console.log(keyFilePath)

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:21936';
const rewrites = () => {
  return [
    {
      source: "/:path*",
      destination: target+"/:path*",
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,


rewrites
}

module.exports = nextConfig
