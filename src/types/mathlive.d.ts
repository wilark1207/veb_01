declare module "mathlive" {
  export class MathfieldElement extends HTMLElement {
    mathVirtualKeyboardPolicy: string;
      value: string;
    insert(value: string): void;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "math-field": React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
    }
  }
}
