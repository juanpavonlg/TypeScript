export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
	const colors = hexString.match(/\w\w/g) ?? ["00", "00", "00"];
  return { r: parseInt(colors[0], 16), g: parseInt(colors[1], 16), b: parseInt(colors[2], 16) };
} // hexStringToRGB()

console.log(hexStringToRGB("#FF9933"));
