import { Column } from "../types.js";

const columns = [
  {
    name: "NOM Prénom",
    prop: "name",
    sortFn: (a, b) => a.name.localeCompare(b.name)
  },
  {
    name: "Elo",
    prop: "rating",
    sortFn: (a, b) => a.rating - b.rating
  },
  {
    name: "N° FFE",
    prop: "ffeId",
    sortFn: (a, b) => a.ffeId.localeCompare(b.ffeId)
  },
] as Readonly<Column[]>;

export default columns;