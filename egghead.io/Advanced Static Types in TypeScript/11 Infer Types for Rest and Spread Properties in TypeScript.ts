const todo = {
  text: "Mow the lawn",
  completed: false,
  tags: ["garden"],
};

const shallowCopy = { ...todo };
shallowCopy.text = "Buy milk";
shallowCopy.tags.push("kitchen")
console.log(shallowCopy);
console.log(todo);
