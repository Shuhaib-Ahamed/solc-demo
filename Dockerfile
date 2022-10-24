FROM node:16-alpine
WORKDIR /app
# Copy and download dependencies
COPY package.json ./
RUN yarn --frozen-lockfile
# Copy the source files into the image
COPY . .
EXPOSE 8000
CMD yarn start