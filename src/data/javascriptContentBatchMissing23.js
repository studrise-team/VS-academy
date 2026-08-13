const commonReferences = [
  { label: 'MDN Web Docs - HTTP Methods', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods' },
  { label: 'MDN Web Docs - Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' }
];

export const javascriptContentBatchMissing23 = {
  'js_put': {
    isStructured: true,
    title: '209. PUT',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The PUT method is used to update an existing resource on the server by **completely replacing it** with the new data provided in the request body.',
    whyUseIt: 'If you want to update a user\'s profile and you send a PUT request, the server takes your payload and entirely overwrites the old user data with it.',
    syntax: 'fetch(url, { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });',
    codeExample: 'async function updateProfile() {\n  // 1. The FULL user object we want to replace the old one with\n  const updatedUser = {\n    id: 42,\n    name: "John Doe",\n    email: "john@example.com",\n    age: 30\n  };\n\n  // 2. Make the PUT request to the specific user\'s endpoint\n  const response = await fetch("https://api.example.com/users/42", {\n    method: "PUT",\n    headers: {\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify(updatedUser)\n  });\n\n  if (response.ok) {\n    console.log("Profile completely updated!");\n  }\n}',
    expectedOutput: 'The server completely overwrites User 42 with the new data object.',
    explanation: [
      { code: 'method: "PUT"', desc: 'You must explicitly tell `fetch` to use PUT, otherwise it defaults to GET.' },
      { code: 'Complete Replacement', desc: 'If the old user object had a `phoneNumber` field, and you did not include it in your `updatedUser` object above, the server will delete the `phoneNumber` field entirely during the replacement!' }
    ],
    realWorldExample: 'Editing a blog post. When you click "Save", the editor sends the entire title, body, and tags back to the server in a PUT request, completely replacing the previous version of the post.',
    commonMistakes: [
      { error: 'Using PUT for partial updates', code: 'fetch(url, { method: "PUT", body: JSON.stringify({ age: 31 }) })', suffix: 'If you send a PUT request with just the `age` field, a strict REST API will replace the ENTIRE user object with just `{ age: 31 }`, deleting their name and email. For partial updates, you MUST use PATCH.' }
    ],
    bestPractices: ['Always ensure your PUT payload represents the entire resource in its new state. If you only want to change one small field and don\'t have the rest of the data, use PATCH instead.'],
    practiceExercise: {
      task: 'No coding required: If you send a PUT request containing `{ title: "New" }` to a post that currently looks like `{ title: "Old", author: "Bob" }`, what will the post look like afterwards?',
      expectedOutput: '{ title: "New" }',
      solution: '{ title: "New" } (The author field is destroyed because PUT completely replaces the resource).'
    },
    quiz: [
      { question: 'What is the primary purpose of the PUT method?', options: ['To partially update a single field in a database', 'To completely replace an existing resource with new data', 'To create a new resource only if it doesn\'t exist', 'To delete a resource'], answer: 'To completely replace an existing resource with new data' },
      { question: 'If a resource currently has 5 fields, and you send a PUT request containing only 2 fields, what happens (in a strict REST API)?', options: ['The 2 fields are updated, the other 3 are left alone', 'The entire resource is replaced, meaning the other 3 fields are deleted', 'The request throws an error', 'The server merges them intelligently'], answer: 'The entire resource is replaced, meaning the other 3 fields are deleted' },
      { question: 'How do you specify the PUT method using the `fetch` API?', options: ['fetch("PUT", url)', 'fetch.put(url)', 'fetch(url, { method: "PUT" })', 'put(url)'], answer: 'fetch(url, { method: "PUT" })' },
      { question: 'What HTTP Header is almost always required when sending a PUT request with JSON data?', options: ['Authorization', 'Accept', 'Content-Type: application/json', 'Connection: keep-alive'], answer: 'Content-Type: application/json' },
      { question: 'Is the PUT method Idempotent (meaning sending the exact same request 5 times has the same effect as sending it once)?', options: ['Yes', 'No', 'Only in Node.js', 'Only if the body is empty'], answer: 'Yes' }
    ],
    interviewQuestions: [
      { q: 'Can PUT be used to create a resource?', a: 'Yes! While POST is normally used for creation, if the client is allowed to specify the ID of the new resource (e.g., `PUT /users/new_id_99`), a PUT request can create that resource if it doesn\'t already exist.' }
    ],
    summary: ['Used to UPDATE data.', 'Completely REPLACES the existing resource.', 'Send the full object in the request body.'],
    references: commonReferences
  },
  'js_patch': {
    isStructured: true,
    title: '210. PATCH',
    difficulty: 'Intermediate',
    readingTime: '3 min',
    definition: 'The PATCH method is used to apply **partial modifications** to a resource. Unlike PUT, which completely overwrites the data, PATCH only changes the specific fields you send, leaving the rest of the resource untouched.',
    whyUseIt: 'It is highly efficient. If a user object has 50 fields, and they only want to change their "username", sending a PATCH request with just the new username saves a massive amount of network bandwidth compared to sending all 50 fields via PUT.',
    syntax: 'fetch(url, { method: "PATCH", body: JSON.stringify({ fieldToUpdate: "value" }) });',
    codeExample: 'async function updateAgeOnly() {\n  // 1. We ONLY send the data we want to change\n  const partialData = {\n    age: 31\n  };\n\n  // 2. Make the PATCH request to the specific user\'s endpoint\n  const response = await fetch("https://api.example.com/users/42", {\n    method: "PATCH",\n    headers: {\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify(partialData)\n  });\n\n  // 3. Result:\n  // If user 42 was { name: "Bob", age: 30, city: "NY" }\n  // They are now { name: "Bob", age: 31, city: "NY" }\n}',
    expectedOutput: 'Only the age field is updated. Name and city are preserved perfectly.',
    explanation: [
      { code: 'method: "PATCH"', desc: 'Tells the server to merge the provided JSON body into the existing database record, rather than replacing it.' }
    ],
    realWorldExample: 'Liking a photo on Instagram. Your phone sends a tiny PATCH request containing something like `{ likes: 105 }`. It doesn\'t need to send the entire image file and caption back to the server just to update the like count!',
    commonMistakes: [
      { error: 'Assuming all APIs support PATCH', code: '', suffix: 'While PATCH is heavily used in modern APIs, some older APIs only support PUT for updates. Always check the API documentation to see if they support partial updates via PATCH.' }
    ],
    bestPractices: ['Default to using PATCH for updates whenever the API allows it. It is safer (you won\'t accidentally delete fields you forgot to include) and much faster for the network.'],
    practiceExercise: {
      task: 'No coding required: If you send a PATCH request containing `{ title: "New" }` to a post that currently looks like `{ title: "Old", author: "Bob" }`, what will the post look like afterwards?',
      expectedOutput: '{ title: "New", author: "Bob" }',
      solution: '{ title: "New", author: "Bob" } (The author is preserved, unlike PUT!).'
    },
    quiz: [
      { question: 'What is the primary difference between PATCH and PUT?', options: ['PATCH creates data, PUT reads data', 'PATCH partially updates a resource, PUT completely replaces it', 'PATCH is for images, PUT is for text', 'There is no difference'], answer: 'PATCH partially updates a resource, PUT completely replaces it' },
      { question: 'If a database record has 100 fields, and you only want to update 1 field, which method is the most network-efficient?', options: ['GET', 'POST', 'PUT', 'PATCH'], answer: 'PATCH' },
      { question: 'If you send a PATCH request with `{ name: "Alice" }` to a user that currently is `{ name: "Bob", age: 25 }`, what is the result?', options: ['{ name: "Alice" }', '{ name: "Alice", age: 25 }', 'Error', '{ name: "Bob", age: 25 }'], answer: '{ name: "Alice", age: 25 }' },
      { question: 'What does the request body of a PATCH request typically contain?', options: ['The entire old resource', 'An empty string', 'A JSON object containing ONLY the fields that need to be changed', 'A SQL command'], answer: 'A JSON object containing ONLY the fields that need to be changed' },
      { question: 'Do all REST APIs support the PATCH method?', options: ['Yes, it is strictly required', 'No, some older APIs only implement PUT for updates', 'Yes, but only in Node.js', 'Only for paid users'], answer: 'No, some older APIs only implement PUT for updates' }
    ],
    interviewQuestions: [
      { q: 'Is the PATCH method Idempotent?', a: 'Not necessarily. While PUT is strictly idempotent (replacing an object 5 times has the same result), a PATCH request could theoretically contain instructions like "increment age by 1". If you send that 5 times, the age goes up by 5, meaning it is not idempotent.' }
    ],
    summary: ['Used to UPDATE data.', 'Only modifies the specific fields you send.', 'Highly efficient compared to PUT.'],
    references: commonReferences
  },
  'js_delete': {
    isStructured: true,
    title: '211. DELETE',
    difficulty: 'Beginner',
    readingTime: '2 min',
    definition: 'The DELETE method is used to remove a specified resource from the server.',
    whyUseIt: 'Whenever a user clicks a "Trash" icon to remove a comment, post, or their entire account, your JavaScript needs to send a DELETE request to the API to permanently erase that data from the database.',
    syntax: 'fetch(url, { method: "DELETE" });',
    codeExample: 'async function deleteAccount(userId) {\n  const confirmDelete = confirm("Are you sure you want to delete your account forever?");\n  \n  if (confirmDelete) {\n    // We specify the EXACT resource to delete in the URL (/users/8)\n    const response = await fetch(`https://api.example.com/users/${userId}`, {\n      method: "DELETE"\n    });\n\n    if (response.ok) {\n      console.log("Account successfully deleted.");\n      // Redirect to home page...\n    }\n  }\n}',
    expectedOutput: 'The server locates User #8 and removes them from the database.',
    explanation: [
      { code: 'method: "DELETE"', desc: 'Explicitly tells the server to trigger its destruction logic.' },
      { code: 'No Body Required', desc: 'Notice we didn\'t include a `body: JSON.stringify(...)`! To delete something, the server usually only needs to know its ID, which is already provided right there in the URL.' }
    ],
    realWorldExample: 'Removing an item from your Amazon Shopping Cart. Clicking "Remove" sends a DELETE request to `/cart/items/456`.',
    commonMistakes: [
      { error: 'Forgetting authentication', code: 'fetch("/users/1", { method: "DELETE" })', suffix: 'You should never be able to delete data just by guessing the URL! DELETE requests usually require you to send an Authorization header (like a JWT token) to prove you actually own the data you are trying to delete.' }
    ],
    bestPractices: ['Because DELETE is destructive, many modern APIs don\'t actually delete the data from the hard drive (Hard Delete). Instead, they just mark a field like `isDeleted: true` in the database (Soft Delete) so the data can be recovered later.'],
    practiceExercise: {
      task: 'Write a `fetch()` call to delete a post with ID 99 at `https://api.com/posts/99`.',
      expectedOutput: 'A fetch call with the DELETE method.',
      solution: 'fetch("https://api.com/posts/99", { method: "DELETE" });'
    },
    quiz: [
      { question: 'What is the purpose of the DELETE method?', options: ['To remove a variable in JavaScript', 'To permanently remove a resource from a server database', 'To clear the browser cache', 'To format a hard drive'], answer: 'To permanently remove a resource from a server database' },
      { question: 'Does a DELETE request typically require a JSON `body` payload?', options: ['Yes, a massive one', 'No, the ID of the item to delete is usually specified directly in the URL endpoint', 'Only in strict mode', 'Only if you are deleting images'], answer: 'No, the ID of the item to delete is usually specified directly in the URL endpoint' },
      { question: 'If you want to delete User #42, what should the URL endpoint look like in a REST API?', options: ['/users?delete=42', '/users/42/delete', '/deleteUser/42', '/users/42'], answer: '/users/42' },
      { question: 'Is the DELETE method Idempotent?', options: ['No', 'Yes (deleting the same user 5 times still results in the user being deleted, even if requests 2-5 return a 404 error)', 'Only in Node.js', 'Only for admins'], answer: 'Yes (deleting the same user 5 times still results in the user being deleted, even if requests 2-5 return a 404 error)' },
      { question: 'What is a "Soft Delete"?', options: ['When the browser deletes a cookie', 'When data is permanently erased', 'When the API simply marks the data as `isDeleted: true` in the database instead of actually destroying it, allowing for recovery', 'When you delete data using GET'], answer: 'When the API simply marks the data as `isDeleted: true` in the database instead of actually destroying it, allowing for recovery' }
    ],
    interviewQuestions: [
      { q: 'What HTTP Status Code should a server return after a successful DELETE request?', a: 'Typically a `204 No Content`. This indicates that the action was successful, but there is no data to send back in the response body (because the resource is gone!).' }
    ],
    summary: ['Used to REMOVE data.', 'Target ID goes in the URL.', 'Usually does not require a request body.'],
    references: commonReferences
  },
  'js_http_status_codes': {
    isStructured: true,
    title: '212. HTTP Status Codes',
    difficulty: 'Intermediate',
    readingTime: '4 min',
    definition: 'HTTP Status Codes are 3-digit numbers returned by a server in response to a client\'s request. They indicate whether the specific request was successfully completed, or if an error occurred.',
    whyUseIt: 'When you use `fetch()`, you rely on these codes to know what to do next. If you get a 200, you display the data. If you get a 404, you show a "Not Found" error to the user. If you get a 401, you redirect them to the Login page.',
    syntax: '// Grouped into 5 classes:\n// 1xx: Informational\n// 2xx: Success\n// 3xx: Redirection\n// 4xx: Client Error\n// 5xx: Server Error',
    codeExample: 'fetch("https://api.github.com/users/thisuserdoesnotexist12345")\n  .then(response => {\n    console.log("Status Code:", response.status);\n    \n    if (response.status === 200) {\n      return response.json();\n    } else if (response.status === 404) {\n      throw new Error("User was not found! (404)");\n    } else if (response.status === 403) {\n      throw new Error("You are rate limited! (403)");\n    } else if (response.status >= 500) {\n      throw new Error("GitHub servers are down! (5xx)");\n    }\n  })\n  .catch(err => console.error(err.message));',
    expectedOutput: 'Status Code: 404\nUser was not found! (404)',
    explanation: [
      { code: 'response.status', desc: 'A property on the fetch response object containing the 3-digit integer.' },
      { code: '4xx vs 5xx', desc: '400-level errors mean YOU (the client/developer) messed up (bad URL, wrong password). 500-level errors mean the SERVER messed up (crashed database, bugs in backend code).' }
    ],
    realWorldExample: 'The famous "404 Page Not Found" screen. That screen only appears because the server returned a 404 HTTP Status Code, and the frontend developer wrote code to display a funny image of a lost dog when that specific code is received.',
    commonMistakes: [
      { error: 'Assuming fetch() rejects on 4xx/5xx', code: '', suffix: 'This is the #1 mistake with `fetch()`. `fetch` ONLY rejects its Promise on a pure network failure (no wifi). It will happily RESOLVE a 404 or a 500 error! You MUST check `response.ok` (which checks if the status is 200-299) before parsing data.' }
    ],
    bestPractices: ['Memorize the big 5: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Server Error).'],
    practiceExercise: {
      task: 'No coding required: If your JavaScript sends data in the wrong format (like sending a string instead of a number), should you expect a 4xx error or a 5xx error?',
      expectedOutput: '4xx',
      solution: '4xx (Specifically a 400 Bad Request, because it is the Client\'s fault).'
    },
    quiz: [
      { question: 'What do 2xx status codes represent?', options: ['Client Errors', 'Server Errors', 'Redirection', 'Success'], answer: 'Success' },
      { question: 'Which status code is universally known as "Not Found"?', options: ['200', '500', '404', '401'], answer: '404' },
      { question: 'If the server itself crashes or has a bug in its backend code, what class of status code will it return?', options: ['1xx', '2xx', '4xx', '5xx (Server Error)'], answer: '5xx (Server Error)' },
      { question: 'Which property on a `fetch()` response object contains the 3-digit status code?', options: ['response.code', 'response.status', 'response.number', 'response.http'], answer: 'response.status' },
      { question: 'Does `fetch()` reject its Promise if the server returns a 500 Internal Server Error?', options: ['Yes', 'No, it resolves successfully and you must manually check `response.status` or `response.ok`', 'Sometimes', 'Only in strict mode'], answer: 'No, it resolves successfully and you must manually check `response.status` or `response.ok`' }
    ],
    interviewQuestions: [
      { q: 'What is the difference between a 401 and a 403 status code?', a: '401 (Unauthorized) means you are not logged in. 403 (Forbidden) means you ARE logged in, but you don\'t have admin permissions to view that specific page or perform that action.' }
    ],
    summary: ['2xx = Success.', '4xx = Client Error (Your fault).', '5xx = Server Error (Their fault).'],
    references: commonReferences
  },
  'js_fetch': {
    isStructured: true,
    title: '214. fetch()',
    difficulty: 'Intermediate',
    readingTime: '5 min',
    definition: 'The `fetch()` API is a modern, built-in browser interface used to make HTTP requests (network calls) to servers. It replaces the older, clunky `XMLHttpRequest` (AJAX).',
    whyUseIt: 'It is the absolute standard way to interact with APIs in modern JavaScript. It is Promise-based, making it incredibly clean to use with `async/await`.',
    syntax: 'const response = await fetch("url", { options });\nconst data = await response.json();',
    codeExample: 'async function createNewUser() {\n  const userData = { name: "Sarah", role: "Admin" };\n\n  try {\n    // fetch takes 2 arguments: the URL, and an Options object\n    const response = await fetch("https://api.example.com/users", {\n      method: "POST", // The HTTP Method\n      headers: {\n        "Content-Type": "application/json" // Tells the server we are sending JSON\n      },\n      body: JSON.stringify(userData) // The actual data, converted to a string\n    });\n\n    // CRITICAL: Check if the request was actually successful (200-299)\n    if (!response.ok) {\n      throw new Error(`HTTP Error! Status: ${response.status}`);\n    }\n\n    // Parse the JSON response back into a JS object\n    const data = await response.json();\n    console.log("Success! Created user:", data.id);\n    \n  } catch (error) {\n    // This catches network failures AND the custom error we threw above\n    console.error("Fetch failed:", error.message);\n  }\n}',
    expectedOutput: 'If successful: "Success! Created user: 99"\nIf fails: "Fetch failed: HTTP Error! Status: 400"',
    explanation: [
      { code: 'headers', desc: 'Extra metadata sent with the request. `Content-Type` is almost always required for POST/PUT/PATCH to tell the server how to read the body.' },
      { code: 'JSON.stringify(body)', desc: 'You cannot send raw JavaScript objects over the internet. You MUST convert them into a flat JSON text string first.' }
    ],
    realWorldExample: 'Almost every modern website uses `fetch()`. When you scroll to the bottom of Twitter, a `fetch()` request silently goes to their API to grab 20 more tweets, and seamlessly adds them to the page without reloading the browser.',
    commonMistakes: [
      { error: 'Forgetting await on response.json()', code: 'const response = await fetch(url); const data = response.json(); console.log(data);', suffix: '`response.json()` is asynchronous! It returns a Promise. If you forget to `await` it, `data` will just be a pending Promise object, not the actual information.' }
    ],
    bestPractices: ['Always wrap `fetch()` calls in a `try...catch` block. Network requests are the most likely thing to fail in any application (wifi drops, server crashes), and you must handle those failures gracefully.'],
    practiceExercise: {
      task: 'Write a `fetch()` call to `https://api.com/status` using the GET method. (Hint: GET is the default, so you don\'t need the options object!). Use `await` and assign the result to a `res` variable.',
      expectedOutput: 'A simple fetch call.',
      solution: 'const res = await fetch("https://api.com/status");'
    },
    quiz: [
      { question: 'What does the `fetch()` API return?', options: ['A string', 'An array of data', 'A Promise', 'An HTML document'], answer: 'A Promise' },
      { question: 'How do you send a JavaScript object as the `body` of a fetch POST request?', options: ['You pass it exactly as is', 'You must convert it to a string using `JSON.stringify(obj)`', 'You convert it using `obj.toString()`', 'You encrypt it'], answer: 'You must convert it to a string using `JSON.stringify(obj)`' },
      { question: 'What HTTP Header is required to tell the server that your body payload is JSON data?', options: ['Accept: text/html', 'Authorization: Bearer', 'Content-Type: application/json', 'Connection: close'], answer: 'Content-Type: application/json' },
      { question: 'What does `response.ok` do?', options: ['It clicks an OK button on the screen', 'It returns a boolean indicating if the HTTP status code was in the successful 200-299 range', 'It parses the JSON', 'It is true if the wifi is connected'], answer: 'It returns a boolean indicating if the HTTP status code was in the successful 200-299 range' },
      { question: 'Is `response.json()` synchronous or asynchronous?', options: ['Synchronous (runs instantly)', 'Asynchronous (returns a Promise, so you must `await` it)', 'Neither', 'It depends on the browser'], answer: 'Asynchronous (returns a Promise, so you must `await` it)' }
    ],
    interviewQuestions: [
      { q: 'Why did the industry move away from XMLHttpRequest (AJAX) to the Fetch API?', a: 'XMLHttpRequest relies entirely on complex, deeply nested callback functions (Callback Hell). Fetch was built from the ground up to use Promises, resulting in vastly cleaner, more readable code, especially when paired with `async/await`.' }
    ],
    summary: ['Modern way to make HTTP requests.', 'Always returns a Promise.', 'Use `try/catch` and check `response.ok`.'],
    references: commonReferences
  }
};
