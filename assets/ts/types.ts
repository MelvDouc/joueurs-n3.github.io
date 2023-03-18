export interface Player {
  name: string;
  rating: number;
  readonly ffeId: string;
}

export interface SortablePlayer extends Player {
  readonly index: number;
  readonly row: HTMLTableRowElement;
}

export interface Column {
  name: string;
  prop: keyof Player;
  sortFn: (a: SortablePlayer, b: SortablePlayer) => number;
}