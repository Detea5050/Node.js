const args = process.argv.slice(2);

args.forEach((arg) => {
    
    console.log(process.env[arg]);

});


const args = process.argv.slice(2);

args.forEach((arg) => {


    if (process.env[arg]) {
        console.log(process.env[arg]);
    } else {
    }
});