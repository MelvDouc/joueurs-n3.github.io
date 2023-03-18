var columns = [{
  name: "NOM Prénom",
  prop: "name",
  sortFn: function sortFn(a, b) {
    return a.name.localeCompare(b.name);
  }
}, {
  name: "Elo",
  prop: "rating",
  sortFn: function sortFn(a, b) {
    return a.rating - b.rating;
  }
}, {
  name: "N° FFE",
  prop: "ffeId",
  sortFn: function sortFn(a, b) {
    return a.ffeId.localeCompare(b.ffeId);
  }
}];
export default columns;