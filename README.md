# Building a Secure Transaction History Module

## *** Important Note
1) This application is only built and tested on ANDROID.  
2) This application uses biometric authentication, if authentication failed or biometric not available, you can skip the authentication by pressing the login button. 
3) This application uses axios for http network request to receive JSON object data from "https://my-json-server.typicode.com/ngjunya/demo/transactions".

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone this project 

```bash
git clone https://github.com/ngjunya/YTLAssessment.git
```

## Step 2: Run this project 
```bash
react-native run-android
```
Before you run the above command, MAKE SURE you have emulator ready or device connected.

Once you run the above command, Metro Bundler will run in its own terminal. Metro Bundler is responsible for packaging all the JavaScript code, assets, and resources required by a React Native application into a single bundle that can be loaded and executed by a mobile device or emulator.. 

In this new terminal, it detects that react native is built for multiple platforms and you have to select android. Type "a" and "Enter".

In case the project is not built, you can diagnose it with the following command. 

```bash
npx react-native doctor
```

## Environment Config
nodeJS - v20.12.2

java - 17.0.11 2024-04-16 LTS

The above are my working development environment configurations. If this project didn't manage to build on your device, it's completely normal as version conflict is one of the challenges in software engineering. 

## Folder Structure
```bash
project-root/
│
├── components/
│ │ └── sizedBox.tsx
│ │
├── connectivity/
│ │ └── api.tsx
│ │
├── main/
│ │ └── App.tsx
│ │
├── modules/
│ ├── Authentication/
│ │ └── Login.tsx
│ │
│ ├── Transaction/
│ │ │ ├── Components/
│ │ │ │ └── transactionListTile.tsx
│ │ │ ├── Models/
│ │ │ │ └── transaction.tsx
│ │ │ ├── Services/
│ │ │ │ └── transaction_repository.tsx
│ │ ├── transaction.tsx
│ │ └── transaction_details.tsx
│ │
├── routes/
│ └── routeprop.tsx
│
├── index.js
├── package.json
└── README.md
```

Thanks for reading to here. Happy Coding !
