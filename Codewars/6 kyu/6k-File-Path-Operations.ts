export class FileMaster {
  private filepath: string;

  constructor(filepath: string) {
    this.filepath = filepath;
    console.log(filepath.match(/(.+\/)(.+)\.(.+)/));
  } // constructor()

  extension() {
    return this.filepath.slice(this.filepath.indexOf(".") + 1);
  } // extension()

  filename() {
    return this.filepath.slice(this.filepath.lastIndexOf("/") + 1, this.filepath.indexOf("."));
  } // filename()

  dirpath() {
    return this.filepath.slice(0, this.filepath.lastIndexOf("/") + 1);
  } // dirpath()
} // FileMaster

const fm = new FileMaster("/Users/person1/Pictures/house.png");
console.log(fm.extension());
console.log(fm.filename());
console.log(fm.dirpath());
