function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}
        // function toggle1(){
        //     const buttonElem = document.querySelector('.toggle-button-1');
        //     if(!buttonElem.classList.contains('istoggled')){
        //         buttonElem.classList.add('istoggled');
                
        //     } else{
        //         buttonElem.classList.remove('istoggled');
        //     }
        // }
        // function toggle2(){
        //     const buttonElem = document.querySelector('.toggle-button-2');
        //     if(!buttonElem.classList.contains('istoggled')){
        //         buttonElem.classList.add('istoggled');
                
        //     } else{
        //         buttonElem.classList.remove('istoggled');
        //     }
        // }
    