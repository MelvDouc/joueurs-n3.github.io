import players from "../constants/players.js";
import columns from "../constants/columns.js";
import SortOrder from "../constants/sort-order.js";
import { Column, Player, SortablePlayer } from "../types.js";

export default class PlayersTable extends HTMLTableElement {
  readonly #columns: readonly Column[];
  readonly #players: SortablePlayer[];

  constructor() {
    super();

    this.#columns = columns;
    this.#players = this.#mapPlayers(players);
    this.#initHead();
    this.#initBody();
  }

  #mapPlayers(players: Player[]) {
    return players.map((player, index) => {
      const row = document.createElement("tr");

      this.#columns.forEach(({ prop }) => {
        const cell = document.createElement("td");
        cell.innerText = player[prop] as string;
        row.appendChild(cell);
      });

      return { ...player, index, row };
    });
  }

  #sortPlayers(sortOrder: SortOrder, index: number): void {
    switch (sortOrder) {
      case SortOrder.ASCENDING:
        this.#players.sort((a, b) => this.#columns[index].sortFn(a, b));
        return;
      case SortOrder.DESCENDING:
        this.#players.sort((a, b) => this.#columns[index].sortFn(b, a));
        return;
      case SortOrder.NONE:
        this.#players.sort((a, b) => a.index - b.index);
    }
  }

  #addPlayerRows() {
    this.#players.forEach(({ row }) => this.tBodies[0].appendChild(row));
  }

  #setHeadingClickHandler(heading: HTMLTableCellElement, index: number) {
    const sortOrderProxy = new Proxy({ value: SortOrder.NONE }, {
      set(target, key, newValue: SortOrder) {
        target[key as keyof typeof target] = newValue;
        heading.dataset.sortOrder = String(newValue);
        return true;
      }
    });
    sortOrderProxy.value = sortOrderProxy.value;

    heading.addEventListener("click", () => {
      sortOrderProxy.value = ++sortOrderProxy.value % 3;
      this.#sortPlayers(sortOrderProxy.value, index);
      this.#addPlayerRows();
    });
  }

  #initHead() {
    const tHead = this.createTHead();
    const headRow = document.createElement("tr");

    this.#columns.forEach(({ name }, i) => {
      const heading = document.createElement("th");
      heading.innerText = name;
      this.#setHeadingClickHandler(heading, i);
      headRow.appendChild(heading);
    });

    tHead.appendChild(headRow);
  }

  #initBody() {
    this.createTBody();
    this.#addPlayerRows();
  }
}

