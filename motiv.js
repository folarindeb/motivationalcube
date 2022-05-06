/*document.querySelectorAll('.button-79').
('click', quotes)

function quotes(){
document.querySelectorAll('.button-79').style.display ='none';
document.querySelectorAll('h2').style.display ='none';
document.querySelectorAll('p').style.display ='none';

fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // we are adding what we would like it to do, click on learn more than open up document
   document.querySelectorAll('h2').innerText = data[0].q
   document.querySelectorAll('h3').innerText = data[0].a
 })
    .catch(err => {
        console.log(`error ${err}`)
    });
}*/

const button = document.querySelector('.button-79');
button.addEventListener('click',quotes)

function quotes(){
   document.querySelector('.button-79').style.display ='none';
   document.querySelector('h2').style.display ='none';
   document.querySelector('p').style.display ='none';
    
    fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          // we are adding what we would like it to do, click on learn more than open up document
       document.querySelector('.moreText6').innerText = data[0].q
       document.querySelector('.moreText61').innerText = data[0].a
     })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    const button1 = document.querySelector('.button-79-1');
    button1.addEventListener('click',quotes1)
    
    function quotes1(){
       document.querySelector('.button-79-1').style.display ='none';
        document.querySelector('h2').style.display ='none';
        document.querySelector('p').style.display ='none';
        
        fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              // we are adding what we would like it to do, click on learn more than open up document
           document.querySelector('.moreText1').innerText = data[1].q
           document.querySelector('.moreText11').innerText = data[1].a
         })
            .catch(err => {
                console.log(`error ${err}`)
            });
        }
    
        const button2 = document.querySelector('.button-79-2');
        button2.addEventListener('click',quotes2)
        
        function quotes2(){
           document.querySelector('.button-79-2').style.display ='none';
            document.querySelector('h2').style.display ='none';
            document.querySelector('p').style.display ='none';
            
            fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                  console.log(data)
                  // we are adding what we would like it to do, click on learn more than open up document
               document.querySelector('.moreText2').innerText = data[2].q
               document.querySelector('.moreText21').innerText = data[2].a
               
             })
                .catch(err => {
                    console.log(`error ${err}`)
                });
            }       
            
            const button3 = document.querySelector('.button-79-3');
            button3.addEventListener('click',quotes3)
            
            function quotes3(){
               document.querySelector('.button-79-3').style.display ='none';
                document.querySelector('h2').style.display ='none';
                document.querySelector('p').style.display ='none';
                
                fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
                    .then(res => res.json()) // parse response as JSON
                    .then(data => {
                      console.log(data)
                      // we are adding what we would like it to do, click on learn more than open up document
                   document.querySelector('.moreText3').innerText = data[3].q
                   document.querySelector('.moreText31').innerText = data[3].a
                 })
                    .catch(err => {
                        console.log(`error ${err}`)
                    });
                }

const button4 = document.querySelector('.button-79-4');
                button4.addEventListener('click',quotes4)
                
                function quotes4(){
                   document.querySelector('.button-79-4').style.display ='none';
                    document.querySelector('h2').style.display ='none';
                    document.querySelector('p').style.display ='none';
                    
                    fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
                        .then(res => res.json()) // parse response as JSON
                        .then(data => {
                          console.log(data)
                          // we are adding what we would like it to do, click on learn more than open up document
                       document.querySelector('.moreText4').innerText = data[4].q
                       document.querySelector('.moreText41').innerText = data[4].a
                       
                     })
                        .catch(err => {
                            console.log(`error ${err}`)
                        });
                    }

 const button5 = document.querySelector('.button-79-5');
                    button5.addEventListener('click',quotes5)
                    
                    function quotes5(){
                       document.querySelector('.button-79-5').style.display ='none';
                        document.querySelector('h2').style.display ='none';
                        document.querySelector('p').style.display ='none';
                        
                        fetch("https://zenquotes.io/api/quotes/aa5c3bd0b1728af9a1df6ee123944cfdfb669034&keyword=inspiration")
                            .then(res => res.json()) // parse response as JSON
                            .then(data => {
                              console.log(data)
                              // we are adding what we would like it to do, click on learn more than open up document  
                           document.querySelector('.moreText5').innerText = data[5].q
                           document.querySelector('.moreText51').innerText = data[5].a
                          
                         })
                            .catch(err => {
                                console.log(`error ${err}`)
                            });
                        }