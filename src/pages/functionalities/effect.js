document.querySelector(".uppercase").onmouseover = event => {  
    setInterval(() => {
        
          const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".symb").onmouseover = event => {
    
    setInterval(() => {
        
          const letters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '\"', '\\', '\;', '\:', '\{', '\}', '\<', '\?', '.', ','];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".nums").onmouseover = event => {
    
    setInterval(() => {
        
          const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7'];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".lowercase").onmouseover = event => {
    
    setInterval(() => {
        
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".uppercase1").onmouseover = event => {  
    setInterval(() => {
        
          const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".symb1").onmouseover = event => {
    
    setInterval(() => {
        
          const letters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '\"', '\\', '\;', '\:', '\{', '\}', '\<', '\?', '.', ','];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".nums1").onmouseover = event => {
    
    setInterval(() => {
        
          const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7'];
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  document.querySelector(".lowercase1").onmouseover = event => {
    
    setInterval(() => {
        
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
          event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
      }, 80);
  }
  
  
  