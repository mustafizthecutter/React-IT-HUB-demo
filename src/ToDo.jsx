// export default function ToDo({ task, isDone }) {
//     // console.log(props);
//     return (
//         <li>{task}</li>
//     )
// }


// conditional rendering- option-1-------------



// export default function ToDo({ task, isDone }) {
//     // console.log(props);
//     if (isDone) {
//         return <li>Finish : {task}</li>
//     }
//     else {
//         return <li>Work On : {task}</li>
//     }
// }



// conditional rendering- option-2-------------



// export default function ToDo({ task, isDone }) {
//     // console.log(props);
//     if (isDone === true) {
//         return <li>Finished:{task}</li>
//     }
//     else {
//         return <li>Work On:{task}</li>
//     }
// }


// conditional rendering- option-3 ternary operator-------------


// export default function ToDo({ task, isDone }) {
//     return (
//         <li> {isDone ? 'Finished' : 'Work On'} {task}</li>
//     )
// }


// conditional rendering- option-3 conditional OR-------------


// export default function ToDo({ task, isDone }) {
//     // console.log(props);
//     return (
//         <li>{task} {isDone || ':Not Finished'}</li>
//     )
// }


// conditional rendering- option-3 conditional AND-------------


// export default function ToDo({ task, isDone }) {
//     // console.log(props);
//     return (
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }



// conditional rendering- option-3 Setting a Variable-------------



export default function ToDo({ task, isDone }) {
    let listItem;
    // console.log(props);
    if (isDone) {
        listItem = <li>Finish : {task}</li>
    }
    else {
        listItem = <li>Work On : {task}</li>
    }
    return listItem;
}