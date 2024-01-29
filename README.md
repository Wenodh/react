# food ordering
/**
 * Header
 *  - Logo
 *  - Links
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *              - Img
 *              - Name of res, star rating, cuisine, delivery time
 *  Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact
 *  Redux ToolKit
 *      - Install @reduxjs/toolkit & react-redux
 *      - Build Store
 *      - Connect store to our app
 *      - Create Slice
 *      - Dispatch Action
 *      - Selector
  *  Testing
 *      - Manual Testing
 *      - Unit Testing -> test react component in isolation
 *      - Integration Testing ->  
 *      - E2E testing -> 
   *  Testing
 *      - Install React testing library
 *      - Installed jest
 *      - Installed Babel dependencies
 *      - Configure Babel
*      - Configure Parcel Config file to disable default babel transpilation
 *      - jest -jest-init
 *      - Install jsdom library
 *      - Install @babel/preset-react - to make JSX work in test cases
 *      - Include @babel/preset-react inside my babel config
 *      - Install @testing-library/jest-dom
 */

# Inception

● What is Emmet?

-   emmet is somthing that automates and reduces our work of typing evering.

    ● Difference between a Library and Framework?

-   Library is tool you can use in your application if required
-   framework means it has complete front and back end with guildlines and restriction which make you to stay in that ecosystem like apple.

    ● What is CDN? Why do we use it?
    cdn is content deliver network. we use that to fetch and use libraries

    ● Why is React known as React?
    React is a library for UI.

    ● What is crossorigin in script tag?

-   its allowing to download from other domains
    ● What is diference between React and ReactDOM
-   React has core functionality like state management and react dom give browser methods for rendering react componets, interacting with dom etc.
-   ● What is difference between react.development.js and react.production.js files via CDN?
    -react.development.js gives unminified code
    -react.production.js gives minified and optimized code.

● What is async and defer? - see my Youtube video

-   async means asyncronously fetch all scripts without interepting other tasks
-   defer means scrpits will be executed after html parsing.

● - What is `NPM`?
npm is a package manager used to install, share and manage packages.
● - What is `Parcel/Webpack`? Why do we need it?

-   parcel/webpack is a bundler. we need it to because it auomates so many things like hmr, minifing, bundles for dev & prod, code spliiting, compress code, diagnises code, etc. they mange dependencies
    ● - What is `.parcel-cache`
-   it caches some thing that allows hmr works faster. it is like a data base of older builds. It helps to speed up subsequent builds.
    ● - What is `npx` ?
-   ● - What is difference between `dependencies` vs `devDependencies`
-   dependencies available only on dev env are dev dependencies, which are avalable or used in prod are called dependencies
    ● - What is Tree Shaking?
-   it will removes unused code while building
    ● - What is Hot Module Replacement?
-   changes done on code will quickly shown on the screen
    ● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
    own words.
    ● - What is `.gitignore`? What should we add and not add into it?
-   basically it ignores files pussing to github. node modules, dist, .env etc
    ● - What is the difference between `package.json` and `package-lock.json`
-   package.json is configuration file for npm and has approximate verisons of depencies.
    ● - Why should I not modify `package-lock.json`?
-   it has tracked all the details of packages strickely.
    ● - What is `node_modules` ? Is it a good idea to push that on git?
-   coolection of dependencies required for our project. No.
    ● - What is the `dist` folder?
-   dist folder contains build files html,jss,css fully minified and optimised
    ● - What is `browserlists`
    Read about dif bundlers: vite, webpack, parcel
-   it is package that give power to run an application on all browsers
    ● Read about: ^ - caret and ~ - tilda
-   ^ updated major versions, ~ for minor version
    ● Read about Script types in html (MDN Docs)

-   Emmet:

Emmet is a tool that helps web developers write HTML and CSS code faster. It allows you to use shortcuts to create code snippets more efficiently.
Library vs. Framework:

Library: A collection of code for specific tasks that developers can use as needed (e.g., jQuery).
Framework: A pre-built structure that dictates how developers should write their code (e.g., React, Angular).
CDN (Content Delivery Network):

CDN is a network of servers that delivers web content (images, scripts) to users based on their location. It makes websites faster by reducing load times.
Why React is Named React:

React is named for its "reactive" approach to building user interfaces. Components react to changes in data, updating the UI efficiently.
crossorigin in the script tag:

It's used for loading external scripts from different domains. It specifies whether the browser should include credentials (like cookies) when fetching the script.
React vs. ReactDOM:

React: Core library for building user interfaces, managing state, etc.
ReactDOM: Package for interacting with the DOM, rendering and updating React components.
react.development.js vs. react.production.js via CDN:

development: Unminified version with warnings, for easier debugging during development.
production: Minified and optimized version without warnings, for faster loading in production.
async and defer in <script> tag:

async: Downloads script asynchronously and executes it as soon as it's downloaded.
defer: Downloads script asynchronously but waits to execute until the HTML document is fully parsed.

Certainly! Let's go through each question:

What is NPM?

NPM stands for Node Package Manager. It is a package manager for JavaScript and Node.js, used to install, share, and manage packages or libraries of code.
What is Parcel/Webpack? Why do we need it?

Parcel and Webpack are bundlers, tools that take your source code, including styles, scripts, and assets, and package them together for the browser. They help manage dependencies, optimize code, and enable features like code splitting.
What is .parcel-cache?

The .parcel-cache directory is created by Parcel and stores cached data to speed up subsequent builds. It can be safely deleted to clear the cache.
What is npx?

npx is a tool that comes with NPM and is used to execute packages from the NPM registry. It is particularly useful for running binaries of packages without installing them globally.
Difference between dependencies vs devDependencies:

dependencies: Packages required for the application to run in production.
devDependencies: Packages used for development and testing, not necessary for the production build.
What is Tree Shaking?

Tree Shaking: It's a technique used by bundlers to eliminate dead code (unused exports) from the final bundle, reducing its size.
What is Hot Module Replacement?

Hot Module Replacement (HMR): It's a feature that allows the replacement of modules in an application without a full page refresh. It speeds up development by preserving the application state.
List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words:

Parcel's superpowers include zero-config setup, automatic dependency resolution, blazing fast speed, hot module replacement, and support for various file types.
What is .gitignore? What should we add and not add into it?

.gitignore is a file that specifies intentionally untracked files to be ignored by Git. It should include files like logs, build artifacts, and sensitive information. It should not include essential configuration files or files required for the project.
Difference between package.json and package-lock.json:

package.json: Describes the project and its dependencies. It includes metadata and high-level information about the project.
package-lock.json: Locks down the version of each package's dependencies, ensuring consistent installations across different environments.
Why should I not modify package-lock.json?

package-lock.json is automatically generated and managed by NPM. Modifying it directly is not recommended, as it could lead to dependency conflicts and inconsistencies.
What is node_modules? Is it a good idea to push that on git?

node_modules is a directory where NPM installs project dependencies. It's generally not a good idea to push it to Git, as it can be large and is easily regenerated using npm install based on the package.json and package-lock.json.
What is the dist folder?

The dist folder (short for distribution) contains the distribution-ready files, often the minified and optimized version of the source code. It is what is deployed to a production environment.
What is browserslist?

browserslist is a configuration file used by tools like Autoprefixer and Babel to determine which browser versions to support when transpiling and prefixing CSS and JavaScript code.
Read about different bundlers: Vite, Webpack, Parcel.

These are popular JavaScript bundlers that help manage and optimize web application code. They have different features and configurations suited to different use cases.
Read about ^ (caret) and ~ (tilde).

These are versioning prefixes used in package.json. ^ allows updates for compatible versions, while ~ allows only patch updates.
Read about Script types in HTML.

Script types in HTML include text/javascript (default), module (for ECMAScript modules), and type="text/babel" (for Babel-processed scripts). They define how the browser should interpret the script content.

# 3.Laying the foundation

● What is JSX?

-   JSX is html like syntax which will converted in to react element before rendering.
    ● Superpowers of JSX
-   readability, can use javascript inside jsx,
    ● Role of type attribute in script tag? What options can I use there?
-   it tells the media type in script tag. text/javascript , text/jsx , module , import map, etc.,
    ● {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
-   all are same

Let's go through each question and statement:

1. **Is JSX mandatory for React?**
   - No, JSX is not mandatory for React, but it is a recommended and widely used syntax. JSX provides a concise and expressive syntax for defining React elements.

2. **Is ES6 mandatory for React?**
   - No, ES6 is not mandatory for React, but it is highly recommended. Many features of ES6, such as arrow functions, destructuring assignment, and classes, can make your React code more concise and readable.

3. **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
   - All three forms are valid in JSX, and they essentially render the same React component. The first form `{TitleComponent}` is typically used when you want to reference a component without rendering it. The second and third forms `{<TitleComponent/>}` and `{<TitleComponent></TitleComponent>}` are equivalent and explicitly render the `TitleComponent`.

4. **How can I write comments in JSX?**
   - In JSX, you can write comments using `{/* */}`. For example: `{/* This is a comment */}`.

5. **What is `<React.Fragment></React.Fragment>` and `<> </>`?**
   - Both `<React.Fragment></React.Fragment>` and `<> </>` are used to wrap multiple elements in JSX without introducing an extra parent element into the DOM. The shorthand `<> </>` is introduced in React 16 as a more concise way of writing fragments.

6. **What is Virtual DOM?**
   - The Virtual DOM is a concept in React where a lightweight copy of the actual DOM is created. React components update the Virtual DOM first, and then React calculates the most efficient way to update the real DOM based on the changes in the Virtual DOM. This process helps improve performance by minimizing direct manipulation of the actual DOM.

7. **What is Reconciliation in React?**
   - Reconciliation in React is the process of updating the Virtual DOM and determining the most efficient way to update the real DOM to reflect the changes in the component tree. React's reconciliation algorithm optimizes updates and ensures that only the necessary changes are made to the DOM.

8. **What is React Fiber?**
   - React Fiber is a reimplementation of React's core algorithm for rendering UI elements. It was introduced to improve the performance and responsiveness of React applications, especially in handling large and complex component trees. React Fiber enables better control over the timing and prioritization of updates.

9. **Why do we need keys in React? When do we need keys in React?**
   - Keys in React are used to uniquely identify elements in a list, and they help React efficiently update and reorder elements during the reconciliation process. Keys are needed when you have dynamic lists of elements, and they assist React in determining which items have changed, been added, or been removed.

10. **Can we use the index as keys in React?**
   - Yes, you can use the index as keys, but it should be done with caution. It is generally recommended to use a unique identifier as a key whenever possible. Using the index as a key might lead to issues when the order of the list items changes, and React might not accurately identify updates.

11. **What is props in React? Ways to pass props.**
   - Props (short for properties) in React are used to pass data from a parent component to a child component. Props are immutable, and they allow components to communicate and share data. Props can be passed in two ways:
     - Directly in the JSX as attributes, like `<MyComponent name="John" />`.
     - Through the spread operator, like `<MyComponent {...props} />`, where `props` is an object containing key-value pairs.

12. **What is a Config Driven UI?**
   - A Config Driven UI is an approach where the configuration for the user interface is defined externally (usually on the server or in a configuration file) rather than hardcoding it in the client-side code. This allows for more dynamic and customizable user interfaces, and changes can be made without modifying the codebase.
Let's go through each question:

1. **Difference between Named Export, Default Export, and `* as` Export:**
   - **Named Export:** When you use named exports, you explicitly export multiple variables, functions, or classes from a module. For example:
     ```javascript
     // module.js
     export const variable1 = 'value1';
     export function func1() { /* ... */ }
     ```

   - **Default Export:** Default export is used when a module exports only one value, and it doesn't need to be named when imported. There can be only one default export per module. For example:
     ```javascript
     // module.js
     const defaultExport = 'default value';
     export default defaultExport;
     ```

   - **`* as` Export (Namespace Import):** It allows you to import all exports from a module as properties of an object. For example:
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
   - A `config.js` file is often used to centralize configuration settings for an application. It allows you to store settings, API keys, environment-specific variables, and other configurations in one place. This makes it easier to manage and update configuration options across different parts of your application. Additionally, having a dedicated configuration file can improve the maintainability of your code and make it more modular.

3. **React Hooks:**
   - React Hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were previously only available in class components. Hooks were introduced in React 16.8 to provide a more direct and predictable way to work with stateful logic in functional components.

4. **Why do we need a `useState` Hook:**
   - The `useState` Hook is used in functional components to add state to them. Before the introduction of Hooks, state management was primarily done in class components. With `useState`, functional components can now have local state variables, and changes to these variables trigger a re-render of the component. It allows functional components to manage and respond to changes in state, making them more powerful and equivalent to class components in terms of state management.

Keep in mind that hooks, including `useState`, should always be used at the top level of your functional components and should not be used conditionally or in loops. This ensures that the order of hooks is consistent across renders, enabling React to correctly preserve the state between re-renders.

1. **What is a Microservice?**
   - Microservices is an architectural style where an application is structured as a collection of loosely coupled and independently deployable services. Each service, known as a microservice, is responsible for a specific business capability and communicates with other microservices through well-defined APIs.

2. **What is Monolith architecture?**
   - Monolithic architecture refers to an application design where all components and functionalities are tightly integrated into a single codebase and deployed as a single unit. In a monolith, the entire application, including the frontend, backend, and database, is developed and deployed as one large system.

3. **Difference between Monolith and Microservice:**
   - Monolith is a single, tightly-coupled application, while microservices involve breaking down an application into independently deployable, loosely coupled services. Microservices promote scalability, flexibility, and independent development and deployment of services, but they also introduce complexities in terms of distributed systems.

4. **Why do we need a `useEffect` Hook?**
   - The `useEffect` Hook in React is used for handling side effects in functional components. It allows you to perform operations such as data fetching, subscriptions, or manually changing the DOM in a way that integrates with React's lifecycle. `useEffect` is essential for managing side effects in a declarative and clean way.

5. **What is Optional Chaining?**
   - Optional chaining is a feature in JavaScript (introduced with ECMAScript 2020) that allows you to safely access nested properties or methods of an object without explicitly checking if each level of the property exists. It is denoted by the `?.` syntax.

6. **What is Shimmer UI?**
   - Shimmer UI is a user interface design pattern used to indicate that content is loading. It involves displaying a placeholder animation, often a subtle shimmer effect, in the area where the actual content will appear. Shimmer UI provides visual feedback to users while data is being fetched or processed.

7. **Difference between JS expression and JS statement:**
   - A JavaScript expression is a piece of code that produces a value, like a variable, a literal, or a function call. Examples include `5 + 3`, `myVariable`, or `Math.random()`.
   - A JavaScript statement is a larger piece of code that performs a specific action but doesn't necessarily produce a value. Examples include `if`, `for`, `while`, or function declarations.

8. **What is Conditional Rendering, explain with a code example:**
   - Conditional rendering is the process of displaying different content or components based on certain conditions. In React, you can use conditional rendering within JSX using constructs like `if` statements or the ternary operator.

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
   - Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. CORS headers allow or deny cross-origin requests based on the server's configuration.

10. **What is async and await?**
    - `async` and `await` are features in JavaScript used for handling asynchronous code. The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to pause the execution of the function until a promise is resolved. This allows writing asynchronous code in a more synchronous style.

11. **What is the use of `const json = await data.json();` in `getRestaurants()`?**
    - In asynchronous JavaScript, when fetching data from an API using `fetch`, the response is a promise. The `await` keyword is used to wait for the promise to resolve, and then `data.json()` is called to parse the response body as JSON. The resulting JSON data is stored in the `json` variable. This pattern is commonly used when working with asynchronous APIs in React or other JavaScript applications.


# Config driven UI -
