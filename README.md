# React Params

The 'useSearchParams' hook is a highly efficient tool that allows you to manage the URL search parameters in your React app. It returns an object with two properties: 'searchParams' and 'setSearchParams.' This hook simplifies the manipulation of URL search parameters in your React app, for instance, updating the URL when the user selects a filter or sorting option. 'useSearchParams' can be used to seamlessly integrate the state of a component with the browser's URL, ensuring that changes in your component's state are both reflected in and not influenced by the URL.

Syncronize the URL params with the React state.

The value of the state will be also updated when the URL params change. So,
you can copy the URL and share it with someone else and the state will be
updated automatically.

Install React Router DOM to manage the routes.

Open the terminal and run the following command:

```bash
npm install react-router-dom`
```

Go to the 'main.jsx' file and import the BrowserRouter and Route components.
Also, wrap the `<App />` component with the `<Router>` component.

```jsx
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```
