export enum Color {
  RED,
  BLACK,
  GREEN,
  BLUE,
}
export interface Hero {
  name: string;
  fly: boolean;
  color: Color;
}
