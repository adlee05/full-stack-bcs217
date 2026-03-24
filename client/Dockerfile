FROM oven/bun:1-alpine

# filesystem layer 1: set working directory in the container
WORKDIR /app

# filesystem layer 2: copy package jsons
COPY package.json bun.lock ./

# filesystem layer 3: 
RUN bun install --frozen-lockfile

# copy source code
COPY . .

EXPOSE 3000

CMD [ "bun", "run", "src/index.ts" ]
