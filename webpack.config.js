module.exports = {
    mode: 'development',
    entry: "./src/index.js", //the starting point for our program
    output: {
        path: __dirname + "/public", // the absolute path for the directory where we want our output to be placed
        filename: "bundle.js" // the name of the file that will contain our output
    }
}

// typically, it is in your root/main directory