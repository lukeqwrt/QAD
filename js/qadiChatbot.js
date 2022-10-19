const formSubmit = document.querySelector("#messageForm")
const messageWrapper = document.querySelector('.chatbot_body')
const messagemessWrapper = document.querySelector('.message_wrapper')
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
var element = document.querySelector(".myspan");
formSubmit.addEventListener('submit', (e) => {
  e.stopPropagation();
  e.preventDefault();
  const userMessageForm = formSubmit['userMessage'].value
  // console.log(formSubmit['userMessage'].value)

  var messageHTML = `
        <span>${userMessageForm}</span>
                `;
  var mydiv = document.createElement('div')
  mydiv.classList.add('message')
  mydiv.innerHTML = messageHTML
  messagemessWrapper.appendChild(mydiv)



  element.scrollTop = element.scrollHeight;

  formSubmit.reset();
  console.log('submitted')

})





const snippet = document.querySelector('.snippet');
const bot_message = document.querySelectorAll('.bot_message')
const runQadBot = () => {
  setTimeout(() => { 
    var messageBotHTML = `<span>Hello! I'm QADdy</span> `;
    var messageBotspeak = `Hello! I'm kwadi`;
    var botReplyDiv = document.createElement('div')
    botReplyDiv.classList.add('bot_message')
    botReplyDiv.innerHTML = messageBotHTML;
    messagemessWrapper.appendChild(botReplyDiv)
    snippet.style.display = "none"
    speakBot(messageBotspeak);
  }, 1000);
  setTimeout(() => { 
    snippet.style.display = "block"
  }, 2000)
  setTimeout(() => { 
    var messageBotHTML = `<span>Welcome to Quality Assurance Division</span> `;
    var botReplyDiv = document.createElement('div')
    botReplyDiv.classList.add('bot_message')
    botReplyDiv.innerHTML = messageBotHTML;
    messagemessWrapper.appendChild(botReplyDiv)
    snippet.style.display = "none"
    speakBot(messageBotHTML);
  }, 3000);
  setTimeout(() => { 
    snippet.style.display = "block"
    element.scrollTop = element.scrollHeight;
  }, 4000)
  setTimeout(() => { 
    choices();
  }, 5000)

  function choices() {
    setTimeout(() => { 
        var messageBotHTML = `
        <ul class="choices p-0 m-0 w-100 d-flex flex-column align-items-start justify-content-center">
            <span class="choices_span">What is QAD</span>
            <span class="choices_span">Services offered by QAD</span>
            <span class="choices_span">Issuances</span>
            <span class="choices_span">Downloadable Forms</span>
            <span class="choices_span">Send us Feedback</span>
        </ul> 
        `;
        var messageBotspeak = `How can I help you`;
        var botReplyDiv = document.createElement('div')
        botReplyDiv.classList.add('bot_message')
        botReplyDiv.innerHTML = messageBotHTML;
        messagemessWrapper.appendChild(botReplyDiv)
        snippet.style.display = "none"
        element.scrollTop = element.scrollHeight;
        speakBot(messageBotspeak);
        const choices_span = botReplyDiv.querySelectorAll('.choices_span')
        choices_span.forEach(i => {
            i.addEventListener('click', (e) => {
                setTimeout(() => { 
                    var messageBotHTML = `<span>${e.target.textContent}</span> `;
                    var botReplyDiv = document.createElement('div')
                    botReplyDiv.classList.add('message')
                    botReplyDiv.innerHTML = messageBotHTML;
                    messagemessWrapper.appendChild(botReplyDiv)
                    snippet.style.display = "none"
                    element.scrollTop = element.scrollHeight;
                });
                if(e.target.textContent == "Issuances"){
                    setTimeout(() => { 
                        snippet.style.display = "block"
                        element.scrollTop = element.scrollHeight;
                      }, 1000)
                    setTimeout(() => { 
                        var messageBotHTML = `
                        <ul class="choices p-0 m-0 w-100 d-flex flex-column align-items-start justify-content-center">
                            <span class="choices_span">National</span>
                            <span class="choices_span">Regional</span>
                        </ul> 
                        `;
                        var messageBotspeak = `National or Regional`;
                        speakBot(messageBotspeak);
                        var botReplyDiv = document.createElement('div')
                        botReplyDiv.classList.add('bot_message')
                        botReplyDiv.innerHTML = messageBotHTML;
                        messagemessWrapper.appendChild(botReplyDiv)
                        snippet.style.display = "none"
                        element.scrollTop = element.scrollHeight;
    
                        const div = botReplyDiv.querySelectorAll('.choices_span')
                        div.forEach(i => {
                            i.addEventListener('click', (e) => {
                                if(e.target.textContent == "National"){
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span>National</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                    });
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    },1000)
                                    setTimeout(() => { 
                                        
                                        var messageBotHTML = `<span>Click this link to redirect.</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                        speakBot(messageBotHTML);
                                    },2000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 3000)
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span><a href="./issuancesPage/depedOrders.html" target="_blank">https://qad-depedncr.netlify.app/issuancespage/depedorders</a></span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                    },4000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 8000);
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span>Do you have any concern?</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                        speakBot(messageBotHTML);
                                    },10000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 11000);
                                    setTimeout(() => { 
                                        var messageBotHTML = `
                                        <ul class="choices p-0 m-0 w-100 d-flex flex-column align-items-start justify-content-center">
                                            <span class="choices_span">Yes</span>
                                            <span class="choices_span">No</span>
                                        </ul> 
                                        `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
            
                                        const div = botReplyDiv.querySelectorAll('.choices_span')
                                        div.forEach(i => {
                                            i.addEventListener('click', (e) => {
                                                if(e.target.textContent == "Yes"){
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>Yes</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                    });
                                                    setTimeout(() => { 
                                                        choices();
                                                    }, 1000);
                                         
                                                }else if(e.target.textContent == "No"){
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>No</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                    });
                                                    setTimeout(() => { 
                                                        snippet.style.display = "block"
                                                        element.scrollTop = element.scrollHeight;
                                                    }, 1000);
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>Thankyou !!! 😁</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('bot_message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                        var messageBotspeak = `THANKYOU!`;
                                                        speakBot(messageBotspeak);
                                                    },2000);
                                                }
                                            })
                                        })
                                    }, 12000)
                                }else if(e.target.textContent == "Regional"){
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span>Regional</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                    });
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    },1000)
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span>Click this link to redirect.</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                        speakBot(messageBotHTML);
                                    },2000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 3000)
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span><a href="./issuancesPage/regional.html" target="_blank">https://qad-depedncr.netlify.app/issuancespage/regional</a></span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                    },4000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 8000);
                                    setTimeout(() => { 
                                        var messageBotHTML = `<span>Do you have any concern?</span> `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
                                        speakBot(messageBotHTML);
                                    },10000);
                                    setTimeout(() => { 
                                        snippet.style.display = "block"
                                        element.scrollTop = element.scrollHeight;
                                    }, 11000);
                                    setTimeout(() => { 
                                        var messageBotHTML = `
                                        <ul class="choices p-0 m-0 w-100 d-flex flex-column align-items-start justify-content-center">
                                            <span class="choices_span">Yes</span>
                                            <span class="choices_span">No</span>
                                        </ul> 
                                        `;
                                        var botReplyDiv = document.createElement('div')
                                        botReplyDiv.classList.add('bot_message')
                                        botReplyDiv.innerHTML = messageBotHTML;
                                        messagemessWrapper.appendChild(botReplyDiv)
                                        snippet.style.display = "none"
                                        element.scrollTop = element.scrollHeight;
            
                                        const div = botReplyDiv.querySelectorAll('.choices_span')
                                        div.forEach(i => {
                                            i.addEventListener('click', (e) => {
                                                if(e.target.textContent == "Yes"){
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>Yes</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                    });
                                                    setTimeout(() => { 
                                                        choices();
                                                    }, 1000);
                                         
                                                }else if(e.target.textContent == "No"){
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>No</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                    });
                                                    setTimeout(() => { 
                                                        snippet.style.display = "block"
                                                        element.scrollTop = element.scrollHeight;
                                                    }, 1000);
                                                    setTimeout(() => { 
                                                        var messageBotHTML = `<span>Thankyou !!! 😁</span> `;
                                                        var botReplyDiv = document.createElement('div')
                                                        botReplyDiv.classList.add('bot_message')
                                                        botReplyDiv.innerHTML = messageBotHTML;
                                                        messagemessWrapper.appendChild(botReplyDiv)
                                                        snippet.style.display = "none"
                                                        element.scrollTop = element.scrollHeight;
                                                        speakBot(messageBotHTML);
                                                    },2000);
                                                }
                                            })
                                        })
                                    }, 12000)
                                }
                            })
                        })

                      }, 2000)

                }
                
            })
        })


      });
  }
}

const bot_start = document.querySelector('.chatbot_start')
  bot_start.addEventListener('click', () => {
    bot_start.classList.toggle('active')
    runQadBot()

  })
  const textInputField = document.querySelector("#text-input")
  const form = document.querySelector("#form")

  const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
      ? console.log("Web Speech API supported!")
      : console.log("Web Speech API not supported :-(")
  }
  
  checkBrowserCompatibility()

  const speakBot = (messageBotHTML) => { 
    utterThis.text = messageBotHTML
    synth.speak(utterThis)
  }
