export function anchorize(text: string) {
  const strs = text.split(" ");
  console.log(text.match(/https?|ftps?|file|smb.+\b/ig));
  
  let ans: string[] = [];
  for (const str of strs) {
    if (/https?|ftps?|file|smb/i.test(str)) {
      ans.push(`<a href="${str}">${str}</a>`);
    } else {
      ans.push(str);
    }
  }
  return ans.join(" ");
} // anchorize()

console.log(anchorize("hello http://world.com !"));
console.log(anchorize("HTTPS://XpDo smb://tsO https://fbauSa FTP://LbuXlT SMB://SKDvW http://TLfsPL ftp://MlJ https://CEva SMB://mnCCN FILE://NmRmP smb://nTPB FTP://Vnc SMB://cpKc FILE://Bdn http://UVTBfI HTTP://YIiniZm FTP://bRuu http://IoFnhPP ftp://pBji FTP://EdoEjG"));

