const start = performance.now();


for(let i =1;i<=50;i++){

    console.log(i);
}

const end = performance.now();

console.log(`performance loop who time consume:  ${end-start}`)