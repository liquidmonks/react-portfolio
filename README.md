## React Portfolio

## Description

As a company, we have developed a single-page application portfolio using React, React icons, HTML, and Tailwind CSS. The portfolio serves as a platform for showcasing six of our best projects and collaborating with other developers. By developing this portfolio, we aim to demonstrate our expertise in building single-page applications and showcase our skills to potential clients and partners. The portfolio is a valuable asset that can be used to attract new business opportunities and assess whether our skills align with the requirements of potential clients and partners.


## Table of Contents

- [React Portfolio](#react-portfolio)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Application Demo Snippet](#application-demo-snippet)
- [🔗 Deployed Site Link](#-deployed-site-link)
- [Tech Stack](#tech-stack)
- [Authors](#authors)
- [License](#license)

## Installation

For the portfolio application:

- Go to https://www.node.js and download the Node.js installation package.
- Install Node.js on your computer.
- Open the command prompt or terminal.
- Install the Node package manager (npm) by running the following command: npm install -g npm.
- Navigate to the directory where you have saved the portfolio application.
- Run the command npm init to initialize the application and generate a package.json file that contains all the details of the application that you inputted during initialization.
- Follow the prompts to input the required information.
- Once the package.json file is generated, you can run the application using the npm start command.

For the React application:

- Open the command prompt or terminal.
- Run the command npx create-react-app <app-name> to create a new React application.
- Navigate to the directory where you have saved the React application.
- Run the command npm install to install the required dependencies.
- Run the command npm start to run the application in development mode.
- Run the command npm install react-icons --save to include popular icons easily with React.
- Run the command npm install @emailjs/browser.
- Run the command npm run build to build the application for production.
- Run the command npm install validator to validate email addresses.

By following these steps, you can install and run both the portfolio application and the React application.

For the EmailJS SDK:

    1. Install the EmailJS SDK using npm by running the following command in your project directory:
```
npm install @emailjs/browser
```
    2. Create a new .env file in your project directory.

    3. Add the following lines to your .env file:
```
REACT_APP_EMAILJS_USER_ID=<your-emailjs-user-id>
REACT_APP_EMAILJS_SERVICE_ID=<your-emailjs-service-id>
REACT_APP_EMAILJS_TEMPLATE_ID=<your-emailjs-template-id>
```
Replace <your-emailjs-user-id>, <your-emailjs-service-id>, and <your-emailjs-template-id> with your actual EmailJS user ID, service ID, and template ID, respectively.

    4. In your Contact page, add the following code to your submit handler:

```
import emailjs from 'emailjs-com';

function handleSubmit(e) {
  e.preventDefault();

  // Perform EmailJS validation here

  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    e.target,
    process.env.REACT_APP_EMAILJS_USER_ID
  )
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });
}
```

This code sends the contents of the Contact form to EmailJS for processing.

    5. Use the EmailJS validation API to validate the contents of the Contact form. You can find more information about EmailJS validation in their documentation.

By following these steps, you can add EmailJS validation to your Contact page and create a .env file to store your EmailJS credentials.


## Deployment

To deploy a React application to a GitHub Page, follow these steps:

    1. Ensure that you have a GitHub account and have created a repository for your project.

    2. In your React project directory, add a homepage property to the package.json file:
```
"homepage": "https://<username>.github.io/<repository-name>"
```
Replace <username> with your GitHub username and <repository-name> with the name of your repository.

    3. Install the gh-pages package by running the following command:
```
npm install gh-pages --save-dev
```

    4. In the package.json file, add the following scripts:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

    5. In the command prompt or terminal, run the following command to deploy the application:
```
npm run deploy
```

    6. Navigate to the "Settings" tab of your repository.

    7. Scroll down to the "GitHub Pages" section.

    8. Select "gh-pages" as the source.

    9. Click on "Save".

    10. Wait for the website to be deployed.

    11. Navigate to your website by visiting the URL displayed in the "GitHub Pages" section.



## Usage

The React portfolio page showcases your skills and projects in a visually appealing way. The portfolio will feature information about yourself, including a brief bio and your contact information. It will also display the projects you have created and the skills you used to build them.
The portfolio uses various tools, including React, React Router, and Bootstrap. It will also include a contact form allowing potential clients or employers to contact you.

To use the portfolio page, you must have basic React, HTML, CSS, and JavaScript knowledge. You can customize the portfolio's content to showcase your unique skills and experiences.

Overall, the React portfolio page is a powerful tool for showcasing your work and skills to potential employers or clients in an organized and visually appealing way.


## Application Demo Snippet
![reactLM](https://user-images.githubusercontent.com/114820394/226148764-2ceb260c-a658-4778-9b0a-f4255f04a1c0.gif)



## 🔗 Deployed Site Link
[![Click for Website](https://img.shields.io/badge/website-Click-yellow)](https://liquidmonks.github.io/react-portfolio/)


## Tech Stack


- JavaScript
- Node.js 
    - NPM (Emailjs)
    - NPM (React)
    - NPM (Web-Vitals)
    - NPM (Validator)
    - NPM (Swiper)
- ES6+ Syntax


**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/RXZyAtU.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

