declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
    };
  }
  export interface Base extends Selectors {
    event: { x: number; y: number };
  }
}

declare var d3: D3.Base;
