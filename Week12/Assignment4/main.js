function checkStatus(a, b, c) {
  let first = typeof a;
  let second = typeof b;
  let third = typeof c;
  let arrange = [];
  first == "string"? arrange.push(a): second == "string"? arrange.push(b): arrange.push(c);
first == "number"? arrange.push(a): second == "number"? arrange.push(b): arrange.push(c);
first == "boolean"? arrange.push(a): second == "boolean"? arrange.push(b): arrange.push(c);
arrange[2] == true? (arrange[2] = "Available"): (arrange[2] = "Not Available");console.log(`Hello ${arrange[0]}, Your Age Is ${arrange[1]}, You are ${arrange[2]} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
