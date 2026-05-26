const args = ProcessingInstruction.argv.slice(2);

args.forEach((arg) => {
    console.log(process.envp)
});