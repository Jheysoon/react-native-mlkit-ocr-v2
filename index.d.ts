export declare type Point = {
  x: number;
  y: number;
};
/**
 * The four corner points of the text block / line / element in
 * clockwise order starting with the top left
 * point relative to the image in the default
 * coordinate space.
 **/
export declare type CornerPoints = Array<Point | null>;
/**
 * The rectangle that contains the text block / line / element
 * relative to the image in the default coordinate space.
 */
export declare type Bounding = {
  left: number;
  top: number;
  height: number;
  width: number;
};
/**
 * A text element recognized in an image.
 * A text element is roughly equivalent to
 * a space-separated word in most Latin-script languages.
 */
export declare type MLKTextElement = {
  text: string;
  cornerPoints: CornerPoints;
  bounding: Bounding;
};
/**
 *  A text line recognized in an image that consists of an array of elements.
 * */
export declare type MLKTextLine = {
  text: string;
  elements: Array<MLKTextElement>;
  cornerPoints: CornerPoints;
  bounding: Bounding;
};
/**
 * A text block recognized in an image that consists of an array of text lines.
 */
export declare type MKLBlock = {
  text: string;
  lines: MLKTextLine[];
  cornerPoints: CornerPoints;
  bounding: Bounding;
};
export declare type MlkitOcrResult = MKLBlock[];
declare type MlkitOcrModule = {
  detectFromUri(uri: string): Promise<MlkitOcrResult>;
  detectFromFile(path: string): Promise<MlkitOcrResult>;
};
declare const MLKit: MlkitOcrModule;
export default MLKit;
