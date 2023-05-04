
const BASE_URL = 'http://127.0.0.1:5000'

const send_button = document.getElementById('send-button');
const question = document.getElementById('question');


document.getElementById('status-text-thinking').hidden = true
document.getElementById('status-text-complete').hidden = true
document.getElementById('result-text').hidden = true

function read_website() {
    return document.body.innerText
  }
  
send_button.onclick = ()=> {
    console.log("You clicked the button!");
    
    url =  BASE_URL + '/question-answer'

    document.getElementById('status-text-thinking').hidden = false
    document.getElementById('status-text-complete').hidden = true
    document.getElementById('result-text').hidden = true

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs[0].id)
        chrome.scripting.executeScript({
            target : {tabId : tabs[0].id},
            func:  read_website
        })
        .then((data) => {
            
            payload_data = {webpage: data[0].result, question: question.value}
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload_data),
                headers: {
                'Content-Type': 'application/json'
                }
            
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                result_text = document.getElementById('result-text')
                result_text.innerText = data['output_text']
                
                document.getElementById('status-text-thinking').hidden = true
                document.getElementById('status-text-complete').hidden = false    
                document.getElementById('result-text').hidden = false
            })
            .catch(error => console.error(error));        
            
        }
    
    );

    });
};

