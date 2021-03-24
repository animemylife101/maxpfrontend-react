<h1># React App</h1>

<i>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</i>

In the project directory, you can run:
 <h2>Npm start</h2>

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <h2>Npm test</h2>

 <h4>Example of test</h4>
 
  ```javascript
   describe(`react-router test`, () => {
    test('should  render the home page', () => {
        const container = mount(<MemoryRouter initialEntries={["/news"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('news_page')).not.toBe(-1);
    });
    test('should  render the not_found page', () => {
        const container = mount(<MemoryRouter initialEntries={["/some_underfined_url"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('error_page')).not.toBe(-1);
    });
});
  ```

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
 <h3>Output</h3>
 
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

 <h4>GET https://mysterious-reef-29460.herokuapp.com/api/v1/news / news request</h4>
 <h3>Output</h3>
 
  ```javascript
   {
    "status": "ok",
    "data": [
      {
        "id": 1,
        "title": "",
        "text": ""
      },
      {
        "id": 2,
        "title": ""
        "text": ""
      }
    ]
 }
 ```
 
<h2>PropTypes</h2>
 <h4>Example of propTypes using</h4>
 
 ```javascript
  ProfileContainer.propTypes = {
    profile: PropTypes.exact({
        city: PropTypes.string,
        languages: PropTypes.array,
        social: PropTypes.array,
        userId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf([undefined]),
            PropTypes.number
        ])
    }),
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string
 }
 ```
<h2>Google integration</h2>

```javascript
{
 props.userId
  ? <GoogleLogout clientId='616850661912-tfs0513h7vrh5m2ljvrtq0o952abv74k.apps.googleusercontent.com'
       buttonText='Выйти' onLogoutSuccess={responseGoogleLogout} />
   : <GoogleLogin clientId='616850661912-tfs0513h7vrh5m2ljvrtq0o952abv74k.apps.googleusercontent.com'
        buttonText='Войти' onSuccess={responseGoogleLogin} onFailure={responseGoogleLogin} cookiePolicy={'single_host_origin'} />
 }
```
