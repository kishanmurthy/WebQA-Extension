# <img src="https://raw.githubusercontent.com/kishanmurthy/WebQA-Extension/main/images/main_128.png" alt= “Logo” width="45" height="45">  WebQA-Extension 

![Screenshot 2023-05-04 at 2 18 31 AM](https://user-images.githubusercontent.com/25534697/236163239-7b4bb04e-bc58-43f3-b342-b5b39b0ac051.png)

WebQA project allows a user to ask any question on the contents of the webpage using LangChain, OpenAI Embeddings and gpt-3.5-turbo. The project consist of
- <b>WebQA-Extension</b> - Chrome Extension
- <b>WebQA-API</b> - Flask API

WebQA-Extension is designed to seamlessly gather webpage data and user questions, then send them to the WebQA-API for processing. Upon receiving the data, the API analyzes the information and sends back the answer to the extension. With this, the extension displays the answer on the extension page, providing users with quick and accurate responses to their queries.

## Installation

1. Clone the repository
2. Open the chrome browser and go to `chrome://extensions/`
3. Enable the developer mode
4. Click on `Load unpacked` and select the cloned repository
5. The extension will be added to the chrome browser

## Usage

1. Open the web page you want to collect the data from
2. Click on the extension icon
3. Enter the question in the text box
4. Click on `Submit` button
5. The data will be sent to the server and the response (answer) will be displayed in the extension popup

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](
https://choosealicense.com/licenses/mit/)
