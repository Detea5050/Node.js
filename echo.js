const args = process.argv.slice(2);

args.forEach((arg) => {
    
    console.log(process.env[arg]);

});


// const args = process.argv.slice(2);

// args.forEach((arg) => {


//     if (process.env[arg]) {
//         console.log(process.env[arg]);
//     } 

//     else {
//     }
// });





//understanding REPL
//REPL stands for Read-Eval-Print Loop, it is a simple interactive programming environment that takes single user inputs, evaluates them, and returns the result to the user. It is commonly used for testing and debugging code snippets in real-time.

//.help --- shows all available commands
//.break --- when you are in the middle of writing a multi-line expression and want to exit without executing it, you can use .break to return to the REPL prompt.
//.clear --- clears the current REPL session's context, including all variables and functions defined so far. This is useful for starting fresh without exiting the REPL.
//.exit --- exits the REPL session and returns you to the command line.
//.load --- allows you to load and execute a JavaScript file within the REPL environment. You can use this command followed by the file name to run the code from that file in the REPL. For example, .load myscript.js will execute the contents of myscript.js in the REPL session.



