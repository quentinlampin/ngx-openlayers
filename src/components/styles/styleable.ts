import { style } from 'openlayers';

export interface Styleable {

  /**
   *
   * @param {ol.style.Style} style
   */
  setStyle(style: style.Style): void;

  /**
   *
   * @param {ol.style.Style} style
   * @returns {boolean}
   */
  unsetStyle(style: style.Style): boolean;
}
