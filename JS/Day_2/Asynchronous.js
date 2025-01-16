const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if (delay < 0) {
//             reject(new Error("Alarm delay must not be negative"));
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}!`);
//         }, delay);
//     });
// }

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();
