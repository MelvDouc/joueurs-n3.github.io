import players from "../constants/players.js";
import columns from "../constants/columns.js";
import SortOrder from "../constants/sort-order.js";

export default class PlayersTable extends HTMLTableElement {
  /** @type {Column[]} */
  #columns;
  /** @type {Player[]} */
  #players;

  constructor() {
    super();

    this.#columns = columns;
    this.#players = this.#mapPlayers(players);
    this.#initHead();
    this.#initBody();
  }

  /**
   * @param {{name: string; ffeId: string; rating: number}[]} players
   */
  #mapPlayers(players) {
    return players.map((player, index) => {
      const row = document.createElement("tr");

      this.#columns.forEach(({ prop }) => {
        const cell = document.createElement("td");
        cell.innerText = player[prop];
        row.appendChild(cell);
      });

      return { ...player, index, row };
    });
  }

  #addPlayerRows() {
    this.#players.forEach(({ row }) => this.tBodies[0].appendChild(row));
  }

  /**
   * @param {HTMLTableCellElement} heading
   * @param {number} index
   */
  #setHeadingClickHandler(heading, index) {
    const sortOrderProxy = new Proxy({ value: -1, }, {
      set(target, key, newValue) {
        target[key] = newValue;
        heading.dataset.sortOrder = newValue;
        return true;
      }
    });
    sortOrderProxy.value = SortOrder.NONE;

    heading.addEventListener("click", () => {
      sortOrderProxy.value = ++sortOrderProxy.value % 3;

      switch (sortOrderProxy.value) {
        case SortOrder.ASCENDING:
          this.#players.sort((a, b) => this.#columns[index].sortFn(a, b));
          break;
        case SortOrder.DESCENDING:
          this.#players.sort((a, b) => this.#columns[index].sortFn(b, a));
          break;
        case SortOrder.NONE:
          this.#players.sort((a, b) => a.index - b.index);
      }

      this.#addPlayerRows();
    });
  }

  #initHead() {
    this.createTHead();
    const headRow = document.createElement("tr");

    this.#columns.forEach(({ name }, i) => {
      const heading = document.createElement("th");
      heading.innerText = name;
      this.#setHeadingClickHandler(heading, i);
      headRow.appendChild(heading);
    });

    this.tHead.appendChild(headRow);
    this.appendChild(this.tHead);
  }

  #initBody() {
    this.createTBody();
    this.#addPlayerRows();
  }
}

/**
 * @typedef {Object} Player
 * @property {string} name
 * @property {number} rating
 * @property {string} ffeId
 * @property {number} index
 * @property {HTMLTableRowElement} row
 */

/**
 * @typedef {Object} Column
 * @property {string} name
 * @property {string} prop
 * @property {(playerA: Player, playerB: Player) => number} sortFn
 */