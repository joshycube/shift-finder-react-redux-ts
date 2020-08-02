FROM mhart/alpine-node:12.16.3 AS builder
WORKDIR /app
COPY . .
RUN yarn
WORKDIR /app
RUN yarn build

FROM mhart/alpine-node:13
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]