import { style } from 'openlayers';

export interface Styleable {

  /**
   * Set the style for the styleable object.
   *
   * @param {ol.style.Style} style
   */
  addStyle(style: style.Style): void;

  /**
   * Unset the style for the styleable object.
   *
   * @param {ol.style.Style} style
   * @returns {boolean} if the method was successful true, else false
   */
  removeStyle(style: style.Style): boolean;
}
