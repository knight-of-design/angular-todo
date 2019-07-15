export class JsonSerialization {
  static parse(s: string) {
    let result;
    try {
      result = JSON.parse(s);
    } catch (e) {
      result = null;
    }
    return result;
  }

  static format(value: any) {
    let result;
    try {
      result = JSON.stringify(value);
    } catch (e) {
      result = null;
    }
    return result;
  }
}
