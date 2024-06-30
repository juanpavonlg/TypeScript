export class PaginationHelper {
  #collection;
  #itemsPerPage;
  
  constructor(collection: any[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.#collection = collection;
    this.#itemsPerPage = itemsPerPage;
  } // constructor()

  itemCount() {
    // returns the number of items within the entire collection
    return this.#collection.length;
  } // itemCount()

  pageCount() {
    // returns the number of pages
    return Math.ceil(this.#collection.length / this.#itemsPerPage);
  } // pageCount()

  pageItemCount(pageIndex: number) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    const start = pageIndex * this.#itemsPerPage;
    return pageIndex >= 0 && pageIndex < this.pageCount() ? this.#collection.slice(start, start + this.#itemsPerPage).length : -1;
  } // pageItemCount()

  pageIndex(itemIndex: number) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    return itemIndex >= 0 && itemIndex < this.itemCount() ? Math.floor(itemIndex / this.#itemsPerPage) : -1;
  } // pageIndex()
} // PaginationHelper

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
