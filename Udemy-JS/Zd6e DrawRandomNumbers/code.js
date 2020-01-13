Math.random() * (6-4) + 4; // bez 6

const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return number
}

Math.floor(Math.random() * (6-4 + 1) + 4); // z 6

const numberRandomInt = (min, max) => Math.floor(Math.random()*(min-max+1)+min);
