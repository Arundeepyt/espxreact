# espxreact
Created with CodeSandbox


H


---



# React + ES6 Modules 

This project demonstrates the use of ES6 `import` and `export` statements in a simple React app.

## Features

- Built using React (in CodeSandbox)
- Modular JavaScript with named exports
- Displays math operations using imported functions

## File Structure

/src ├── App.js         # Main React component ├── math.js        # Module with add and subtract functions └── index.js       # Entry point for React app styles.css index.html

## How It Works

- `math.js` exports two functions: `add` and `subtract`
- `App.js` imports these functions and uses them to display results
- `index.js` renders the app using React 18's `createRoot`

## Output Screenshot

![App Output](./file-JvisFExuHH35q3xXvz2ET1)

## Example Output

Math Functions 5 + 3 = 8 5 - 3 = 2

## Run It Yourself

### In CodeSandbox

1. Visit [https://codesandbox.io](https://codesandbox.io)
2. Create a new **React** sandbox
3. Add files: `App.js`, `math.js`, and update `index.js`
4. Add basic HTML in `index.html` if needed
5. Paste the code and run

### Locally

```bash
npx create-react-app react-es6-modules
cd react-es6-modules
# Replace /src files with this project’s files
npm start


---

Let me know if you want the .md file download or help setting up a GitHub repo!


