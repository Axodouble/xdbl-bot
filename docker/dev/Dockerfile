FROM oven/bun:alpine

WORKDIR /workspace/discord

RUN apk add --no-cache git curl

COPY package.json ./package.json

RUN bun install

RUN rm ./package.json

HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl --fail http://localhost:8080/health || exit 1

CMD ["bun", "--watch", "./src/index.js"]