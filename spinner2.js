let delay = 500;
let affects = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "]
for (const i of affects) {
    setTimeout(() => {
        process.stdout.write(i)
    }, delay)
    delay += 500;
};