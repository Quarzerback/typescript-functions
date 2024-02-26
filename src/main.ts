const numbers: number[] = [1,2,3,4,51];
const words: string[] = ['apple','banana','grape','watermelon','orange','cat','dog','bird','fish','rabbit']
const doubledNumbers:number[] = numbers.map((number) => {return number * 2});
console.log(doubledNumbers);
const filteredWords:string[] = words.filter((word) => {return word.length > 5});
console.log(filteredWords)
const sumOfNumbers: number = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0);
console.log(sumOfNumbers)
const hasBiggerThan10: boolean = numbers.some((number) => {return number > 10});
console.log(hasBiggerThan10)