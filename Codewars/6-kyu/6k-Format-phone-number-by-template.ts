export function formatNumber(number: number, template: string): string {
  for (const digit of `${number}`) {
    template = template.replace(/#/, digit);
  }
  return template.includes("#") ? "Invalid phone number" : template;
} // formatNumber()

console.log(formatNumber(79052479075, "+# ### ### ## ##"));
console.log(formatNumber(79052479075, "+# (###) ### ##-##"));
console.log(formatNumber(81237068908090, "+## ### ### ## ##"));
console.log(formatNumber(8123706890, "+## ### ### ##-##"));
console.log(formatNumber(911, "###"));
console.log(formatNumber(112, "+ () -"));
