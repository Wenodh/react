
---

# Food Ordering Application

## Description

This project is a food ordering application built using React.js. It allows users to search for restaurants, view restaurant details, and place orders.

## Features

- **Header**
  - Logo
  - Links
- **Body**
  - Search
  - Restaurant Container
    - Restaurant Card
      - Image
      - Name of the restaurant, star rating, cuisine, delivery time
- **Footer**
  - Copyright
  - Links
  - Address
  - Contact

## Technologies Used

- React.js
- Redux Toolkit
- React Router DOM

## Development Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Run the development server:

   ```
   npm start
   ```

## Redux Toolkit

- Install `@reduxjs/toolkit` and `react-redux`
- Build Store
- Connect store to our app
- Create Slice
- Dispatch Action
- Selector

## Testing

- Manual Testing
- Unit Testing
- Integration Testing
- E2E testing

## Testing Setup

1. Install React Testing Library:

   ```
   npm install @testing-library/react
   ```

2. Initialize Jest:

   ```
   jest --init
   ```

3. Configure Babel and Jest
4. Install JSDOM and other dependencies:

   ```
   npm install --save-dev @babel/preset-react jest-dom
   ```

## Inception

### Emmet

- Emmet is a tool for faster HTML and CSS coding.

### Library vs. Framework

- Library: Collection of code for specific tasks (e.g., jQuery)
- Framework: Pre-built structure for writing code (e.g., React, Angular)

### CDN (Content Delivery Network)

- CDN delivers web content to users based on their location.

### Why React is Named React

- Named for its "reactive" approach to building UIs.

### `crossorigin` in Script Tag

- Specifies whether to include credentials when fetching scripts.

### React vs. ReactDOM

- React: Core library for UI components
- ReactDOM: Interacts with the DOM

### `react.development.js` vs. `react.production.js`

- Development: Unminified version with warnings
- Production: Minified and optimized version

### `async` and `defer` in Script Tag

- `async`: Downloads script asynchronously
- `defer`: Downloads script and defers execution until HTML is parsed.

### What is NPM?

- Node Package Manager: Installs, shares, and manages JavaScript packages.

### What is Parcel/Webpack?

- Bundlers for managing and optimizing code.

### What is `.parcel-cache`?

- Directory storing cached data for faster builds.

### What is `npx`?

- Executes packages from the NPM registry.

### Difference between `dependencies` vs. `devDependencies`

- `dependencies`: Required for production.
- `devDependencies`: Used for development and testing.

### What is Tree Shaking?

- Eliminates dead code from the final bundle.

### What is Hot Module Replacement?

- Replaces modules without full page refresh.

### Parcel's Superpowers

- Zero-config setup
- Automatic dependency resolution
- Blazing fast speed

## Further Reading

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)

## Config Driven UI

### Library vs Framework

- **Library:** A library is a collection of code that provides specific functionalities which developers can use as needed in their projects. Examples include jQuery and Lodash.
- **Framework:** A framework is a pre-built structure that dictates how developers should write their code. It provides a complete solution and enforces certain architectural patterns. Examples include React, Angular, and Vue.js.

### CDN (Content Delivery Network)

A CDN is a network of servers distributed geographically to deliver web content more efficiently to users. It helps in reducing latency and improving website performance by serving content from the server closest to the user's location.

### NPM (Node Package Manager)

NPM is a package manager for JavaScript that allows developers to install, share, and manage packages or libraries of code. It is the default package manager for Node.js and comes bundled with it.

### NPX

NPX is a package runner tool that comes with NPM versions 5.2.0 and above. It is used to execute packages from the NPM registry without the need to install them globally. NPX is particularly useful for running binaries of packages.

### Tilde (~) and Caret (^)

- **Tilde (~):** It specifies approximately equivalent versions of a package and allows updates to all future patch versions while keeping the major and minor versions fixed.
- **Caret (^):** It specifies compatible versions of a package and allows updates to all future minor and patch versions while keeping the major version fixed.

### Dependency vs devDependency

- **Dependency:** Dependencies are packages that are required for the application to run in both production and development environments. They include libraries and modules necessary for the application's functionality.
- **devDependency:** devDependencies are packages that are only required for development and testing purposes. They include tools, libraries, and modules needed for tasks like testing, linting, and building the application.

### Node_modules

Node_modules is a directory that contains all the packages and dependencies installed for a Node.js project. It is created and managed by NPM and stores the code of all the packages fetched from the NPM registry.

### Parcel

Parcel is a zero-configuration bundler for web applications. It automatically analyzes the project structure and bundles assets like JavaScript, CSS, and images with minimal configuration required. Parcel is known for its fast performance and ease of use.

### browserslist

Browserslist is a configuration file used by tools like Autoprefixer and Babel to determine which browser versions to support when transpiling and prefixing CSS and JavaScript code. It allows developers to define a list of target browsers based on usage statistics and project requirements.

### JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. It is commonly used in React to define the structure of UI components in a more readable and intuitive way.

### Babel

Babel is a JavaScript compiler that transforms ECMAScript 2015+ code into a backward-compatible version of JavaScript that can run in older browsers. It is commonly used in modern web development workflows, especially with tools like React and Vue.js.

### React Components

React components are the building blocks of React applications. They are reusable pieces of UI that encapsulate a specific set of functionality and can be composed together to build complex user interfaces. Components can be class-based or functional components, and they follow a uni-directional data flow architecture.

### Optional Chaining

Optional chaining is a feature in JavaScript that allows developers to safely access nested properties or methods of an object without worrying about whether intermediate properties exist or not. It is denoted by the `?.` syntax and helps prevent errors caused by accessing undefined or null values.

### Shimmer UI

Shimmer UI is a user interface design pattern used to indicate that content is loading. It involves displaying a subtle animation, often a shimmer effect, in the area where the actual content will appear. Shimmer UI provides visual feedback to users while data is being fetched or processed, improving the user experience.

### Async and Await

Async and await are keywords in JavaScript used for handling asynchronous code. The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to pause the execution of the function until a promise is resolved. Async/await allows developers to write asynchronous code in a more synchronous and readable manner.

### CORS (Cross-Origin Resource Sharing)

CORS is a security feature implemented by web browsers to restrict cross-origin requests initiated from web pages. It prevents malicious scripts from accessing resources on a different domain. CORS headers allow or deny cross-origin requests based on the server's configuration, protecting sensitive data and resources.

Certainly! Here are the explanations along with small code snippets:

### Various Ways to Add Images into Our App

1. **Using Relative Paths:**
   - Put your images inside the `public` folder of your React project.
   - Refer to the image using its relative path, starting with `/`.

   ```jsx
   <img src="/images/example.jpg" alt="Example" />
   ```

2. **Importing Images in JavaScript Files:**
   - Import the image directly into your JavaScript files using `import`.
   - Assign the imported image to a variable and use it in your component.

   ```jsx
   import exampleImage from './images/example.jpg';

   const MyComponent = () => {
     return <img src={exampleImage} alt="Example" />;
   }
   ```

3. **Using URLs:**
   - Simply use the URL of an image hosted online.

   ```jsx
   <img src="https://example.com/images/example.jpg" alt="Example" />
   ```

### Console.log(useState())

- When you call `console.log(useState())`, it logs an array.
- The array contains two elements: the current state value and the updater function.
- This is useful for understanding how `useState()` works behind the scenes.

```jsx
const [value, setValue] = useState(initialValue);
console.log(useState()); // Logs: [value, setValue]
```

### useEffect Without Dependency Array

- If you don't add a dependency array to `useEffect`, it runs after every render.
- This means the effect will execute each time your component re-renders, even for small changes.
- It can lead to performance issues if the effect involves heavy tasks.

```jsx
useEffect(() => {
  // This effect will run after every render
  console.log('Effect ran');
});
```

### Client-Side Routing vs Server-Side Routing

**Client-Side Routing:**

- All the routing (navigating between different sections of the website) is handled by JavaScript in the user's browser.
- When you click on a link, JavaScript changes what you see on the screen without going back to the server.
- It's fast and provides a smoother experience because it doesn't reload the whole page.

```jsx
// React Router example
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
```

**Server-Side Routing:**

- In this approach, the server decides what to show based on the URL you visit.
- When you click on a link, the browser sends a request to the server for a new page.
- The server sends back a completely new page each time you navigate, which can be slower.

```jsx
// Express.js example
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### How to Create Nested Routes with react-router-dom Configuration

- Nested routes are routes within routes, typically used to handle hierarchical URL structures.
- You can achieve nested routes in React using the `react-router-dom` library by nesting `<Route>` components within other `<Route>` components.
- Here's an example of creating nested routes:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products}>
          <Route path="/products/:id" component={ProductDetails} />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
```

### createHashRouter and createMemoryRouter from React Router Docs

- `createHashRouter`: This router uses the hash portion of the URL to keep your UI in sync with the URL.
- `createMemoryRouter`: This router does not read from the URL but keeps its own memory-based history stack.

### Order of Lifecycle Method Calls in Class-Based Components

1. **constructor(props):** Initializes the component and sets initial state and bindings.
2. **componentDidMount():** Invoked immediately after the component is mounted. It's a good place to perform initial data fetching.
3. **render():** Renders the component UI.
4. **componentDidUpdate(prevProps, prevState):** Invoked immediately after updating occurs. It's useful for reacting to props or state changes.
5. **componentWillUnmount():** Invoked immediately before a component is unmounted and destroyed. It's used for cleanup tasks like removing event listeners or canceling network requests.

### Why do we use componentDidMount?

- `componentDidMount()` is used for actions that need to be performed once the component is mounted and ready to interact with the DOM.
- Common use cases include data fetching, initializing third-party libraries, or setting up subscriptions.
- Example:

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Update component state with fetched data
        this.setState({ data });
      });
  }

  render() {
    return <div>Loading...</div>;
  }
}
```

### Why do we use componentWillUnmount? Show with example

- `componentWillUnmount()` is used for cleanup tasks before a component is unmounted and destroyed.
- Common use cases include removing event listeners, clearing intervals or timeouts, or canceling network requests.
- Example:

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.count} seconds elapsed</div>;
  }
}
```

### Why do we use super(props) in constructor? (Research)

- `super(props)` is used in a class constructor to call the constructor of the parent class (the component's superclass).
- In React components, it's necessary to call `super(props)` in the constructor if you define a constructor in a class component.
- It's required to ensure that the component's state and props are properly initialized and accessible within the constructor.

### Why can't we have the callback function of useEffect async? (Research)

- The callback function of `useEffect` cannot be `async` because `useEffect` itself cannot return a `Promise`.
- As per the React documentation, `useEffect` should either return nothing or a cleanup function.
- If you need to perform asynchronous operations inside `useEffect`, you can create an inner `async` function and call it within `useEffect`.

```jsx
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    setData(data);
  };

  fetchData();
}, []);
```

### When and Why Do We Need `lazy()`?

- **When:** Use `lazy()` when you want to split your React application into separate chunks to improve initial loading times.
- **Why:** It helps optimize performance by loading components only when they're needed, reducing the initial bundle size.
  
```javascript
import { lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));
```

### What is Suspense?

- **Definition:** Suspense is a React feature that allows components to suspend rendering while they wait for something, like data or components to load.
- **Purpose:** It simplifies handling loading states and errors in asynchronous operations.

```javascript
import { Suspense } from 'react';

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### Why Do We Get the Error: "A Component Suspended While Responding to Synchronous Input"?

- **Error:** This error occurs when a component suspends during synchronous user interactions, causing the UI to become unresponsive.
- **Fix:** Use `startTransition()` to prioritize rendering interactive updates over suspended ones, preventing UI freezes.

```javascript
import { startTransition } from 'react';

startTransition(() => {
  // Code that may suspend
});
```

### Advantages and Disadvantages of Using Code Splitting Pattern

- **Advantages:** Improved initial load time, better performance, and enhanced user experience.
- **Disadvantages:** Increased complexity, potential for bugs, and more network requests.

### When Do We Need Suspense and Why?

- **When:** Use Suspense when dealing with asynchronous operations like data fetching or lazy loading components.
- **Why:** It simplifies handling loading states and errors in asynchronous code management, improving user experience.

### Explore All the Ways of Writing CSS

- **1. Inline CSS:** Writing CSS directly within HTML elements using the `style` attribute.
- **2. Internal CSS:** Writing CSS within the `<style>` tag in the `<head>` section of an HTML document.
- **3. External CSS:** Writing CSS in a separate file and linking it to an HTML document using the `<link>` tag.
- **4. CSS Preprocessors:** Using CSS preprocessors like Sass or Less to write CSS with additional features like variables, nesting, and mixins.
- **5. CSS-in-JS:** Writing CSS directly within JavaScript files using libraries like styled-components or Emotion.

### How Do We Configure Tailwind?

- To configure Tailwind CSS, you typically create a `tailwind.config.js` file in the root of your project.
- This file allows you to customize various aspects of Tailwind, such as colors, fonts, spacing, and more.
- You can extend the default configuration, define custom themes, add new variants, and enable or disable features according to your project's needs.

### In `tailwind.config.js`, What Does Each Key Mean?

- **1. `content`:** Defines the content-related configuration, including customizing or extending the default content utilities.
- **2. `theme`:** Allows you to customize the default theme of Tailwind CSS, such as colors, typography, spacing, breakpoints, and more.
- **3. `extend`:** Lets you extend or override existing utilities or add custom utilities to Tailwind's default set.
- **4. `plugins`:** Enables you to add or configure Tailwind plugins, extending its functionality beyond the built-in utilities.

### Why Do We Have `.postcssrc` File?

- The `.postcssrc` (or `postcss.config.js`) file is used to configure PostCSS, a tool that processes CSS with plugins.
- It allows you to define plugins, presets, and other options for transforming CSS, such as autoprefixing, minification, and syntax enhancements.
- This configuration file is necessary for setting up PostCSS to work with tools like Tailwind CSS, as Tailwind relies on PostCSS for processing its utility classes.


### Prop Drilling

- **What it is:** Passing data from a parent component down to its child components through props.
- **Why it's used:** It helps share data across different levels of components in a hierarchy.
- **Example:** If a parent component fetches user data and needs to pass it to several nested child components, it can do so by passing it down as props.

### Lifting the State Up

- **What it is:** Moving shared state from child components to a common parent component.
- **Why it's used:** It centralizes state management, making it easier to synchronize state changes across components.
- **Example:** In a form with multiple input fields, instead of managing the state separately in each input field, you can lift the state up to a parent component that manages the form state and passes it down to the input fields.

### Context Provider and Context Consumer

- **What they are:** Components in React used for sharing data across the component tree without passing props manually.
- **Why they're used:** They provide a way to share data globally in your app, like user authentication or theme preferences.
- **Example:** You can create a context for the current theme and provide it at the top level of your app. Then, any component in the app can access and use the theme without having to pass it through props.

### Default Value in Context Provider

- **What it does:** If no value is provided to a Context Provider, it uses a default value defined when creating the context.
- **Why it's useful:** It ensures that components consuming the context always have access to some initial data, even if a specific value isn't provided.
- **Example:** If you have a context for user authentication and the user isn't logged in, you might provide a default value indicating that the user is anonymous.


### useContext vs Redux

- **useContext:**
  - **Purpose:** useContext is a React hook used for accessing context values in functional components.
  - **Usage:** It's suitable for managing local state or accessing simple global data within a component tree.
- **Redux:**
  - **Purpose:** Redux is a state management library for managing complex global state in React applications.
  - **Usage:** It's ideal for managing large-scale applications with complex data flow and state interactions.

### Advantage of using Redux Toolkit over Redux

- **Redux Toolkit:**
  - **Purpose:** Redux Toolkit is a package that simplifies the usage of Redux by providing predefined tools and best practices.
  - **Advantages:** It reduces boilerplate code, enhances developer productivity, and encourages good Redux practices such as immutable updates and structured code organization.

### Dispatcher

- **Definition:** In Redux, a dispatcher is a function responsible for dispatching actions to the Redux store.
- **Purpose:** It triggers state changes by sending actions, which are plain JavaScript objects containing information about what happened in the application.
- **Example:** `dispatch({ type: 'INCREMENT' })` dispatches an action of type 'INCREMENT' to the Redux store.

### Reducer

- **Definition:** A reducer is a pure function that specifies how the application's state changes in response to dispatched actions.
- **Purpose:** It calculates the next state based on the current state and the action received.
- **Example:**

  ```javascript
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  ```

### Slice

- **Definition:** In Redux Toolkit, a slice is a portion of the Redux state and the related reducer logic that manages that part of the state.
- **Purpose:** It encapsulates the logic for managing a specific piece of state, making it easier to organize and maintain Redux code.
- **Example:** A counter slice might contain the state for a counter and the reducer logic to update it.

### Selector

- **Definition:** A selector is a function that computes derived data from the Redux state.
- **Purpose:** It extracts specific pieces of state or computes derived data without directly accessing the Redux store.
- **Example:**

  ```javascript
  const selectCounter = (state) => state.counter;
  ```

### createSlice and its configuration

- **Definition:** createSlice is a function provided by Redux Toolkit for defining Redux slices.
- **Configuration:**
  - **name:** The name of the slice.
  - **initialState:** The initial state of the slice.
  - **reducers:** An object containing reducer functions, each defining how to update the slice's state in response to actions.
- **Example:**

  ```javascript
  import { createSlice } from '@reduxjs/toolkit';

  const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
    },
  });
  ```

### Different Types of Testing

- **Unit Testing:**
  - Tests individual units or functions in isolation.
  - Focuses on testing small pieces of code.
- **Integration Testing:**
  - Tests how different units or modules work together.
  - Ensures that integrated components function correctly as a whole.
- **End-to-End (E2E) Testing:**
  - Tests the entire application from start to finish.
  - Simulates real user scenarios and interactions.

### Enzyme

- **Definition:** Enzyme is a JavaScript testing utility for React developed by Airbnb.
- **Purpose:** It provides tools for testing React components' output and behavior in isolation.
- **Features:** Supports shallow rendering, full DOM rendering, and static rendering of React components.

### Enzyme vs React Testing Library

- **Enzyme:**
  - Focuses on component behavior and implementation details.
  - Allows accessing and manipulating component internals directly.
- **React Testing Library:**
  - Focuses on component behavior from the user's perspective.
  - Emphasizes testing components as users interact with them, promoting more realistic and maintainable tests.

### Jest

- **Definition:** Jest is a JavaScript testing framework maintained by Facebook.
- **Purpose:** It's used for testing JavaScript code, including React applications.
- **Features:** Provides utilities for writing unit tests, mocking dependencies, and running test suites.
- **Why Use It:** Jest offers a comprehensive solution for testing React components and JavaScript code, including built-in support for snapshot testing, mocking, and coverage reporting.

---


# Inception

`1. Emmet:`

* Emmet is a tool that helps web developers write HTML and CSS code faster. It allows you to use shortcuts to create code snippets more efficiently.

`2. Library vs. Framework:`

* Library: A collection of code for specific tasks that developers can use as needed (e.g., jQuery).
* Framework: A pre-built structure that dictates how developers should write their code (e.g., React, Angular).

`3. CDN (Content Delivery Network):`

* CDN is a network of servers that delivers web content (images, scripts) to users based on their location. It makes websites faster by reducing load times.

`4. Why React is Named React:`

* React is named for its "reactive" approach to building user interfaces. Components react to changes in data, updating the UI efficiently.

`5. crossorigin in the script tag:`

* It's used for loading external scripts from different domains. It specifies whether the browser should include credentials (like cookies) when fetching the script.

`6. React vs. ReactDOM:`

* React: Core library for building user interfaces, managing state, etc.
* ReactDOM: Package for interacting with the DOM, rendering and updating React components.

`7. react.development.js vs. react.production.js via CDN:`

* development: Unminified version with warnings, for easier debugging during development.
* production: Minified and optimized version without warnings, for faster loading in production.

`8. async and defer in script tag:`

* async: Downloads script asynchronously and executes it as soon as it's downloaded.
* defer: Downloads script asynchronously but waits to execute until the HTML document is fully parsed.

`9. What is NPM?`

* NPM stands for Node Package Manager. It is a package manager for JavaScript and Node.js, used to install, share, and manage packages or libraries of code.

`10. What is Parcel/Webpack? Why do we need it?`

* Parcel and Webpack are bundlers, tools that take your source code, including styles, scripts, and assets, and package them together for the browser. They help manage dependencies, optimize code, and enable features like code splitting.

`11. What is .parcel-cache?`

* The .parcel-cache directory is created by Parcel and stores cached data to speed up subsequent builds. It can be safely deleted to clear the cache.

`12. What is npx?`

* npx is a tool that comes with NPM and is used to execute packages from the NPM registry. It is particularly useful for running binaries of packages without installing them globally.

`13. Difference between dependencies vs devDependencies:`

* dependencies: Packages required for the application to run in production.
* devDependencies: Packages used for development and testing, not necessary for the production build.

`14.What is Tree Shaking?`

* Tree Shaking: It's a technique used by bundlers to eliminate dead code (unused exports) from the final bundle, reducing its size.

`15. What is Hot Module Replacement?`

* Hot Module Replacement (HMR): It's a feature that allows the replacement of modules in an application without a full page refresh. It speeds up development by preserving the application state.

`16. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words:`

* Parcel's superpowers include zero-config setup, automatic dependency resolution, blazing fast speed, hot module replacement, and support for various file types.

`17. What is .gitignore? What should we add and not add into i`t?

* .gitignore is a file that specifies intentionally untracked files to be ignored by Git. It should include files like logs, build artifacts, and sensitive information. It should not include essential configuration files or files required for the project.

`18. Difference between package.json and package-lock.json:`

* package.json: Describes the project and its dependencies. It includes metadata and high-level information about the project.
* package-lock.json: Locks down the version of each package's dependencies, ensuring consistent installations across different environments.

`19.Why should I not modify package-lock.json?`

* package-lock.json is automatically generated and managed by NPM. Modifying it directly is not recommended, as it could lead to dependency conflicts and inconsistencies.

`20. What is node_modules? Is it a good idea to push that on git?`

* node_modules is a directory where NPM installs project dependencies. It's generally not a good idea to push it to Git, as it can be large and is easily regenerated using npm install based on the package.json and package-lock.json.

`21.What is the dist folder?`

* The dist folder (short for distribution) contains the distribution-ready files, often the minified and optimized version of the source code. It is what is deployed to a production environment.

`22.What is browserslist?`

* browserslist is a configuration file used by tools like Autoprefixer and Babel to determine which browser versions to support when transpiling and prefixing CSS and JavaScript code.

`23.Read about different bundlers: Vite, Webpack, Parcel.`

* These are popular JavaScript bundlers that help manage and optimize web application code. They have different features and configurations suited to different use cases.

`24.Read about ^ (caret) and ~ (tilde).
`

* These are versioning prefixes used in package.json. ^ allows updates for compatible versions, while ~ allows only patch updates.

`25.Read about Script types in HTML.`

* Script types in HTML include text/javascript (default), module (for ECMAScript modules), and type="text/babel" (for Babel-processed scripts). They define how the browser should interpret the script content.

# 3.Laying the foundation

1. **Is JSX mandatory for React?**
   * No, JSX is not mandatory for React, but it is a recommended and widely used syntax. JSX provides a concise and expressive syntax for defining React elements.

2. **Is ES6 mandatory for React?**
   * No, ES6 is not mandatory for React, but it is highly recommended. Many features of ES6, such as arrow functions, destructuring assignment, and classes, can make your React code more concise and readable.

3. **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
   * All three forms are valid in JSX, and they essentially render the same React component. The first form `{TitleComponent}` is typically used when you want to reference a component without rendering it. The second and third forms `{<TitleComponent/>}` and `{<TitleComponent></TitleComponent>}` are equivalent and explicitly render the `TitleComponent`.

4. **How can I write comments in JSX?**
   * In JSX, you can write comments using `{/* */}`. For example: `{/* This is a comment */}`.

5. **What is `<React.Fragment></React.Fragment>` and `<> </>`?**
   * Both `<React.Fragment></React.Fragment>` and `<> </>` are used to wrap multiple elements in JSX without introducing an extra parent element into the DOM. The shorthand `<> </>` is introduced in React 16 as a more concise way of writing fragments.

6. **What is Virtual DOM?**
   * The Virtual DOM is a concept in React where a lightweight copy of the actual DOM is created. React components update the Virtual DOM first, and then React calculates the most efficient way to update the real DOM based on the changes in the Virtual DOM. This process helps improve performance by minimizing direct manipulation of the actual DOM.

7. **What is Reconciliation in React?**
   * Reconciliation in React is the process of updating the Virtual DOM and determining the most efficient way to update the real DOM to reflect the changes in the component tree. React's reconciliation algorithm optimizes updates and ensures that only the necessary changes are made to the DOM.

8. **What is React Fiber?**
   * React Fiber is a reimplementation of React's core algorithm for rendering UI elements. It was introduced to improve the performance and responsiveness of React applications, especially in handling large and complex component trees. React Fiber enables better control over the timing and prioritization of updates.

9. **Why do we need keys in React? When do we need keys in React?**
   * Keys in React are used to uniquely identify elements in a list, and they help React efficiently update and reorder elements during the reconciliation process. Keys are needed when you have dynamic lists of elements, and they assist React in determining which items have changed, been added, or been removed.

10. **Can we use the index as keys in React?**

* Yes, you can use the index as keys, but it should be done with caution. It is generally recommended to use a unique identifier as a key whenever possible. Using the index as a key might lead to issues when the order of the list items changes, and React might not accurately identify updates.

11. **What is props in React? Ways to pass props.**

* Props (short for properties) in React are used to pass data from a parent component to a child component. Props are immutable, and they allow components to communicate and share data. Props can be passed in two ways:
  * Directly in the JSX as attributes, like `<MyComponent name="John" />`.
  * Through the spread operator, like `<MyComponent {...props} />`, where `props` is an object containing key-value pairs.

12. **What is a Config Driven UI?**

* A Config Driven UI is an approach where the configuration for the user interface is defined externally (usually on the server or in a configuration file) rather than hardcoding it in the client-side code. This allows for more dynamic and customizable user interfaces, and changes can be made without modifying the codebase.

1. **Difference between Named Export, Default Export, and `* as` Export:**
   * **Named Export:** When you use named exports, you explicitly export multiple variables, functions, or classes from a module. For example:

     ```javascript
     // module.js
     export const variable1 = 'value1';
     export function func1() { /* ... */ }
     ```

   * **Default Export:** Default export is used when a module exports only one value, and it doesn't need to be named when imported. There can be only one default export per module. For example:

     ```javascript
     // module.js
     const defaultExport = 'default value';
     export default defaultExport;
     ```

   * **`* as` Export (Namespace Import):** It allows you to import all exports from a module as properties of an object. For example:

     ```javascript
     // module.js
     export const variable2 = 'value2';
     export function func2() { /* ... */ }
     ```

     ```javascript
     // anotherModule.js
     import * as moduleExports from './module';
     console.log(moduleExports.variable2); // Accessing the exported variable
     ```

2. **Importance of config.js file:**
   * A `config.js` file is often used to centralize configuration settings for an application. It allows you to store settings, API keys, environment-specific variables, and other configurations in one place. This makes it easier to manage and update configuration options across different parts of your application. Additionally, having a dedicated configuration file can improve the maintainability of your code and make it more modular.

3. **React Hooks:**
   * React Hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were previously only available in class components. Hooks were introduced in React 16.8 to provide a more direct and predictable way to work with stateful logic in functional components.

4. **Why do we need a `useState` Hook:**
   * The `useState` Hook is used in functional components to add state to them. Before the introduction of Hooks, state management was primarily done in class components. With `useState`, functional components can now have local state variables, and changes to these variables trigger a re-render of the component. It allows functional components to manage and respond to changes in state, making them more powerful and equivalent to class components in terms of state management.

   * Keep in mind that hooks, including `useState`, should always be used at the top level of your functional components and should not be used conditionally or in loops. This ensures that the order of hooks is consistent across renders, enabling React to correctly preserve the state between re-renders.

1. **What is a Microservice?**
   * Microservices is an architectural style where an application is structured as a collection of loosely coupled and independently deployable services. Each service, known as a microservice, is responsible for a specific business capability and communicates with other microservices through well-defined APIs.

2. **What is Monolith architecture?**
   * Monolithic architecture refers to an application design where all components and functionalities are tightly integrated into a single codebase and deployed as a single unit. In a monolith, the entire application, including the frontend, backend, and database, is developed and deployed as one large system.

3. **Difference between Monolith and Microservice:**
   * Monolith is a single, tightly-coupled application, while microservices involve breaking down an application into independently deployable, loosely coupled services. Microservices promote scalability, flexibility, and independent development and deployment of services, but they also introduce complexities in terms of distributed systems.

4. **Why do we need a `useEffect` Hook?**
   * The `useEffect` Hook in React is used for handling side effects in functional components. It allows you to perform operations such as data fetching, subscriptions, or manually changing the DOM in a way that integrates with React's lifecycle. `useEffect` is essential for managing side effects in a declarative and clean way.

5. **What is Optional Chaining?**
   * Optional chaining is a feature in JavaScript (introduced with ECMAScript 2020) that allows you to safely access nested properties or methods of an object without explicitly checking if each level of the property exists. It is denoted by the `?.` syntax.

6. **What is Shimmer UI?**
   * Shimmer UI is a user interface design pattern used to indicate that content is loading. It involves displaying a placeholder animation, often a subtle shimmer effect, in the area where the actual content will appear. Shimmer UI provides visual feedback to users while data is being fetched or processed.

7. **Difference between JS expression and JS statement:**
   * A JavaScript expression is a piece of code that produces a value, like a variable, a literal, or a function call. Examples include `5 + 3`, `myVariable`, or `Math.random()`.
   * A JavaScript statement is a larger piece of code that performs a specific action but doesn't necessarily produce a value. Examples include `if`, `for`, `while`, or function declarations.

8. **What is Conditional Rendering, explain with a code example:**
   * Conditional rendering is the process of displaying different content or components based on certain conditions. In React, you can use conditional rendering within JSX using constructs like `if` statements or the ternary operator.

   ```jsx
   function ExampleComponent({ isLoggedIn }) {
     return (
       <div>
         {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
       </div>
     );
   }
   ```

9. **What is CORS?**
   * Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. CORS headers allow or deny cross-origin requests based on the server's configuration.

10. **What is async and await?**
    * `async` and `await` are features in JavaScript used for handling asynchronous code. The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to pause the execution of the function until a promise is resolved. This allows writing asynchronous code in a more synchronous style.

11. **What is the use of `const json = await data.json();` in `getRestaurants()`?**
    * In asynchronous JavaScript, when fetching data from an API using `fetch`, the response is a promise. The `await` keyword is used to wait for the promise to resolve, and then `data.json()` is called to parse the response body as JSON. The resulting JSON data is stored in the `json` variable. This pattern is commonly used when working with asynchronous APIs in React or other JavaScript applications.

# Config driven UI -

🚀 Library vs framework: Both the framework & library is precoded support programs to develop complex software applications. However, libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application.

🚀 CDN(Content Delivery Network): A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.

🚀 NPM: NPM is an package manager. It is an standard repositary for all the packages.

🚀 NPX: NPX is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed.

🚀 tilde(~) and caret(^):
~ : Approximately equivalent to version, will update you to all future patch versions, without incrementing the minor version.
^ : Compatible with version, will update you to all future minor/patch versions, without incrementing the major version.

🚀 dependency v/s devDependency: Dependency is a package that gives extra features and tools to our application and it will work in both production as well as development. devDependency is for the developer that help developer to build the app smoothly and provide many useful tools for developer.

🚀 Node_modules: Node_modules contains all the code that we fetch from npm. It basically fetches all the code of all the dependency into our system and then we can use that code. We don't need to push this folder to github or production if we have package.json we can recreate this folder.

🚀 Parcel: Parcel is an bundler that help us to build optimize app. It is use to power our application with different types of functionalities and features.

🚀 browserslist: Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

🚀 React Element: Just like DOM element in react we have react element which are kind of equallent to DOM elements

🚀 JSX: JSX stands for JavaScript XML. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

🚀 Babel: Babel is javascript compiler some people also called it transpiler. One of the job of babel is to convert jsx into javascript.

🚀 React Components: It is a piece of reusable code which you can be reused at any point and its an individual piece of code which has its own functionlity.
