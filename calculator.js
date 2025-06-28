document.addEventListener('DOMContentLoaded',function()
{
    


    const firstName =
    document.getElementById('name1');
    const secondName =
    document.getElementById('name2');
    const Calculate =
    document.getElementById('calculate-btn');
    const Clear = 
    document.getElementById('clear-btn');
    const Display = 
    document.getElementById('result');


    Calculate.addEventListener('click',function()
{
    
    if(firstName.value.toLowerCase() == 'khanyiso' && secondName.value.toLowerCase() =='emihle')
    {
        const final = 100000000;
        Display.textContent = "Your score is " + final + "\nPerfect Match💕!!!";
    }
    else
    {
      const fname = firstName.value;
      const sname = secondName.value;

    if(fname && sname) {
          // Check if emihle is paired with someone other than khanyiso
          const name1Lower = fname.toLowerCase();
          const name2Lower = sname.toLowerCase();
          
          if((name1Lower === 'emihle' && name2Lower !== 'khanyiso') || 
             (name2Lower === 'emihle' && name1Lower !== 'khanyiso')) {
              Display.textContent = "Your love score is 0%\nTry Again! 💔";
          } else {
              // Calculate love score based on name characteristics
              let score = 0;
              
              // Add points based on name lengths
              score += (fname.length * 3) + (sname.length * 3);
              
              // Add points for common letters
              for(let i = 0; i < name1Lower.length; i++) {
                  if(name2Lower.includes(name1Lower[i])) {
                      score += 7;
                  }
              }
              
              // Add some randomness based on ASCII values
              let asciiSum = 0;
              for(let i = 0; i < fname.length; i++) {
                  asciiSum += fname.charCodeAt(i);
              }
              for(let i = 0; i < sname.length; i++) {
                  asciiSum += sname.charCodeAt(i);
              }
              
              score += (asciiSum % 50);
              
              // Ensure score is between 0-100
              const final = Math.min(100, Math.max(0, score % 101));
              
              // Display result with love message
              let message;
              if(final >= 80) {
                  message = "Perfect Match! 💕";
              } else if(final >= 60) {
                  message = "Great Love! ❤️";
              } else if(final >= 40) {
                  message = "Good Compatibility! 💖";
              } else if(final >= 20) {
                  message = "Friendship Zone! 💛";
              } else {
                  message = "Try Again! 💔";
              }
              
              Display.textContent = "Your love score is " + final + "%\n" + message;
          }
      } else {
          Display.textContent = "Please enter both names!";
      }
    
    }

})

Clear.addEventListener('click',function()
{
    
    Display.textContent = "";
    document.getElementById('name1').value ='';
    document.getElementById('name2').value ='';

})
    


}) 