 // Get references to the HTML elements
 const vector = document.querySelectorAll('.vector');
 const img = document.querySelectorAll('.img');
 const textWrapper2 = document.querySelectorAll('.text-wrapper-2');

 // Function to handle the increment and decrement
 function handleCount(index, increment) {
   let count = parseInt(textWrapper2[index].textContent, 10);
   
   if (increment) {
     count++;
   } else {
     if (count > 0) {
       count--;
     }
   }

   textWrapper2[index].textContent = count;
 }

 // Add click event listeners to the .vector elements
 vector.forEach((element, index) => {
   element.addEventListener('click', () => {
     handleCount(index, true);
   });
 });

 // Add click event listeners to the .img elements
 img.forEach((element, index) => {
   element.addEventListener('click', () => {
     handleCount(index, false);
   });
 });