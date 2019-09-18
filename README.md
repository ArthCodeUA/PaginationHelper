# Pagination Helper
Pagination Helper is an object for simplifying working with paginations in JavaScript

# Creating an object instance

### let helper = new PaginationHelper(collection, itemsPerPage);

Varialbe collection here is an array, that includes all the elements, that you need to paginate.
Variable itemsPerPage - integer, that defines amount of items per one page.

# Methods

### let a = new PaginationHelper(['a','b','c','a'], 1);

a.getItemsAmount(); -> 4 // Returns number of items in collections.

a.getPagesAmount(); -> 4 // Return the amount of pages.

a.getPagination(); -> [['a'],['b'],['c']] // Main method, returns two-dimensional array, that includes already diveded elements of collection to pages.

a.getPagesByItem('a'); -> [0, 3] // Return the array of pages, that includes this element 'a'.
