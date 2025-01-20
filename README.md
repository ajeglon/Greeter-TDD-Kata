# Greeter Test Driven Development Kata
This is a project for application for a junior developer role at the NHSBSA.

#Pre-requisites
Node.js is installed on your machine, as it is needed for testing framework Jest. This can be checked using the following command in your command line:
```commandline
node -v
```
If Node is installed, it will return the version number. i.e.
```
v22.13.0
```

If Node.js is not installed or if the version is not 12.13 or higher, it can be downloaded from https://nodejs.org/en/download/ or use the following command to install it:
```commandline
nvm install --lts
```

#Installation

This application is found at https://github.com/ajeglon/Greeter-TDD-Kata

Open a Git Bash command line interface and clone the repository using:

```commandline
git clone https://github.com/ajeglon/Greeter-TDD-Kata.git
```

Jest is a testing framework that is used in this application. It can be installed using the following command in the command line:
```commandline
npm install --save-dev jest
```

Alternatively if this was a larger application, a requirements.txt could be installed using the following command in the command line:
```commandline
npm install
```

#Running

The application can be run using the following command in the command line:
```commandline
npx jest
```
This will run the tests in the application and return the results in the command line.

A small extension task for personal fun has been completed to make the Kata interactable for the user, this is on the branch:
```commandline
git checkout feature/extension-user-input-command-line
```

The application can be run using the following command in the command line:
```commandline
node greeter.js
```