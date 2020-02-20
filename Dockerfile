FROM node:12.2.0-alpine as builder


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

#################################
FROM node:12.2.0-alpine


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 5000

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/static ./static
COPY --from=builder /usr/src/app/client ./client
COPY --from=builder /usr/src/app/server ./server
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
CMD  ["node", "server/index.js"]
