FROM rnoaliev/nginx-nodejs-expressjs-pm2
MAINTAINER Ruslan Aliev <r.n.o.aliev@gmail.com>

COPY recaptcha-verify.js  /usr/nodejs/scripts
ENTRYPOINT ["pm2-runtime", "/usr/nodejs/scripts/recaptcha-verify.js"]
