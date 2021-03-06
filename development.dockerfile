FROM node:14.15.4-alpine As development

RUN  apk add --non-cache bash git

RUN  npm i -g @nestjs/cli@7.5.6

WORKDIR /usr/src/app

CMD ["node", "dist/main"]