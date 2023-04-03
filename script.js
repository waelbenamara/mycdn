const url = 'http://127.0.0.1:5050';
const buttons = document.getElementsByTagName('li');

let buttonObj = {};
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  buttonObj[`button${i + 1}`] = {
    element: button,
    clicks: 0
  };
 
  // houni taauet lel event listener w tlogi kol ma yenzel
  button.addEventListener('click', function() {
    // Increment the click count for the corresponding button in the object
    buttonObj[`button${i + 1}`].clicks++;
    console.log(`Button ${i + 1} was clicked ${buttonObj[`button${i + 1}`].clicks} times.`);





fetch(url+"/writeBtnClick", {
  method: 'POST',
  body: JSON.stringify(buttonObj),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      console.log('Post request successful');
    } else {
      console.error('Post request failed');
    }
  })
  .catch(error => console.error(error));
 



  });
}
 
console.log(buttonObj);



// log every text input


  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', event => {
      const writtenText = event.target.value;
     


      fetch(url+"/writeText", {
        method: 'POST',
        body: JSON.stringify(writtenText),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            console.log('Post request successful');
          } else {
            console.error('Post request failed');
          }
        })
        .catch(error => console.error(error));
      // Do something with the written text
    });
  });
