export function htmlspecialchars(formData: string): string {
  const chars: {[i: string]: string} = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  for (const ch in chars) {
    formData = formData.replace(new RegExp(ch, "g"), chars[ch]);
  }
  return formData;
} // htmlspecialchars()

console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
