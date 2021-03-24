<h1># React App</h1>

<i>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</i>

In the project directory, you can run:
 <h2>npm start</h2>

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <h2>npm test</h2>

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
 <h2>Testing tools</h2>
 <ul>
   <li>
    Jest
   </li>
   <li>
    Enzyme
   </li>
 </ul>
 
<hr />
<h2>Endpoints</h2>
 
  <h4>POST https://mysterious-reef-29460.herokuapp.com/api/v1/validate / login request</h4>
  <h3>Output</h3>
  
   ```javascript
   {
    "status": "ok",
    "data": {
     "id": 1
     }
  } 
  ```
  <h3>If the data is incorrect</h3>
  
   ```javascript
   {
    "status": "err",
    "message": "wrong_email_or_password"
   }
  ```
 
 <h4>GET https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/2 / profile request </h4>
   ```javascript
   {
  "status": "ok",
  "data": {
    "userId": 1,
    "city": "Москва",
    "languages": [
      "English",
      "Русский"
    ],
    "social": [
      {
        "label": "vk",
        "link": "vk.com/maxpfrontend"
      },
      {
        "label": "telegram",
        "link": "t.me/maxpfrontend"
      },
      {
        "label": "web",
        "link": "https://maxpfrontend.ru"
      },
      {
        "label": "youtube",
        "link": "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q"
      },
      {
        "label": "twitter",
        "link": "https://twitter.com/MaxPatsiansky"
      },
      {
        "label": "twitch",
        "link": "http://twich.tv/maxpfrontend"
      }
    ]
  }
}
  ```
