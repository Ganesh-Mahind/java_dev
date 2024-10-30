// let count=0;
// const nums=[0,1,2,3];

// nums.forEach(num=>{
//     if(num) {
//         count=count+1;

//     }
// })

// console.log(count);




document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});
