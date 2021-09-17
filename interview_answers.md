# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

A: Tokens are used as security measures in the process of authorization to ensure that access to content is restricted until authorization is given. A token is one way to ensure that access is only given to the entity that entered the correct information as they are uniquely generated.

2. What steps can you take in your web apps to keep your data secure?

A: To make the app more secure, I can implement authorization for which only those with the correct credentials can access it, and additionally ensure that pages that need authorization in order to access it are protected by private routes that check for authorization and reroute if there isn't any present.

3. Describe how web servers work.

A: Web servers are just computers that are hosting information. When another computer makes an HTTP request of some sort for information, the server responds with the information of that specific request and relays it back to the requesting computer.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

A: CRUD stands for Create, Read, Update, and Delete. Those map to these HTTP methods to APIs: 
Create: Post inserts new information into the API
Read: Get retrieves information that is currently in the API
Update: Put replaces targeted information for whichever entry/entries are being edited
Delete: Delete does what it does best and deletes the entry from the database 