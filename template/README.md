This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

Runs the app in the development mode.

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment as Container

Build a container image with a tool such as a docker. \
Web app build processes such as `yarn build` are included in the image build process.

```
docker build -t <image-name> .
```

Deploy the container using the built image.

```
docker run -d -p 8080:80 <image-name>
```

Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
