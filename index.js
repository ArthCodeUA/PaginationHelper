/* Pagination Helper Object for JS */
/* Author: ArthCode (arthcode.com) */

function PaginationHelper(collection, itemsPerPage){
    this.itemList = collection;
    this.pageSize = itemsPerPage;
}

/* Returns number of items */
PaginationHelper.prototype.getItemsAmount = function() {
    return this.itemList.length;
};

/* Returns number of pages */
PaginationHelper.prototype.getPagesAmount = function() {
    return Math.ceil(this.itemList.length / this.pageSize);
};

/* Returns the pagination */
PaginationHelper.prototype.getPagination = function() {
    let arr = [];
    let items = this.itemList;
    for(let k = 0; k < this.getPagesAmount(); k++) {
        let currentPage = [];
        for(let i = 0; i < this.pageSize; i++) {
            currentPage.push(items[i]);
        }
        arr[k] = currentPage.filter(el => el !== undefined);
        items = items.slice(this.pageSize);
    }
    return arr;
};

/* Returns numbers of pages, that includes element itemIndex */
PaginationHelper.prototype.getPagesByItem = function(itemIndex) {
    let result = [];
    this.getPagination().forEach((el, index) => {
        if(el.includes(itemIndex)) {
            result.push(index);
        }
    });
    return result.length > 0 ? result : -1;
};
