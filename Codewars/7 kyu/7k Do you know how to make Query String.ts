export const toQueryString = (obj: object): string => {
  const query: string[] = [];
  for (const [prop, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      for (const val of value) {
        query.push(`${prop}=${val}`);
      }
    } else {
      query.push(`${prop}=${value}`);
    }
  }
  return query.join("&");
}; // toQueryString()

console.log(
  toQueryString({
    username: "warrior",
    kyu: 1,
    age: 28,
  })
);
console.log(
  toQueryString({
    name: "shirt",
    colors: ["white", "black"],
  })
);
console.log(toQueryString({ bar: [2, 3], foo: 1 }));
