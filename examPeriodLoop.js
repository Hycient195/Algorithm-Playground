import examTimeTable from './examTimeTable'
import { sleep, eat, read, takeExam } from './activities'
import { me } from './students'

let examsCount = 0;
let examsDuration = JSON.parse(examTimeTable).length;

for(let i; i<examsDuration; i++){
    me(sleep);
    me(eat);
    me(read);
    me(takeExam);
    examCount++
    console.log(` 1 down, ${examsDuration - examsCount} to go `);
};