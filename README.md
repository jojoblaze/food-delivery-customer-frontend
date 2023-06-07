# Customer Front-end

Front-end for customer application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Deployment

In order to test and deploy the application on Kubernetes follow these steps:
- create application Docker image;
- publish Docker image on registry - for development push the image on your local Kind cluster;
- run Kubernetes Deployment in the manifest.yml

## Docker cheats

Build Docker image
```
docker build -t customer-frontend .
```

## Kind cheats

Push Docker application image into Kind cluster
```
kind load docker-image customer-frontend:latest
```

## Kubernetes cheats

Deploy on Kubernetes
```
kubectl create -f manifest.yml
```

## Stripe cheats

Use the followings fake credit cards to test payment gateway transactions.

**Credit Cards**

|Number             |Description                                                    |
|-------------------|---------------------------------------------------------------|
|4242 4242 4242 4242|Succeeds and immediately processes the payment.                |
|4000 0000 0000 3220|Complete 3D Secure 2 authentication for a successful payment.  |
|4000 0000 0000 9995|Always fails with a decline code of insufficient_funds.        |


