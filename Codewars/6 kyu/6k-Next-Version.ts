export function nextVersion(version: string): string {
  const ver = version.split(".").map(Number);
  for (let i = ver.length - 1; i >= 0; i--) {
    if (ver[i] === 9 && i !== 0) {
      ver[i] = 0;
    } else {
      ver[i]++;
      break;
    }
  }
  return ver.join(".");
} // nextVersion()

console.log(nextVersion("1.2.3"));
console.log(nextVersion("0.9.9"));
console.log(nextVersion("1"));
console.log(nextVersion("1.2.3.4.5.6.7.8"));
console.log(nextVersion("9.9"));
