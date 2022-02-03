'use strict'

class Sheet {

  /**
   * シートに関するコンストラクタ
   * @constructor
   * @param {SpreadsheetApp.sheet} sheet - 対象となるシート
   * @param {number} headerRows - ヘッダー行の数
   */
  constructor(sheet = SpreadsheetApp.getActiveSheet(), headerRows = 1) {
    /** @type {SpreadsheetApp.Sheet} */
    this.sheet = sheet;
    /** @type {number} */
    this.headerRows = headerRows;
  }

  /**
   * Class Sheet から委譲されたメソッド
   * NOTE: https://developers.google.com/apps-script/reference/spreadsheet/sheet
   */
  getDataRange() { return this.sheet.getDataRange(); }
  getRange(...args) { return this.sheet.getRange(...args); }

  /**
   * レコードをすべて削除し、値を貼り付けるメソッド
   * @param {Array.<Array.<number|string|boolean|Date>>} values - 貼り付ける値
   */
  setValuesHeaderRowsAfter(values) {
    this.clearDataValues();
    if (values.length === 0) return;
    this.getRange(this.headerRows + 1, 1, values.length, values[0].length).
      setValues(values);
    return this;
  }

  /**
   * レコードをすべて削除するメソッド
   */
  clearDataValues() {
    const values = this.getDataValues();
    if (values.length === 0) return;
    this.getRange(1 + this.headerRows, 1, values.length, values[0].length).
      clearContent();
    return this;
  }

  /**
   * ヘッダー行を除いたレコード部分を取得するメソッド
   * @return {Array.<Array.<number|string|boolean|Date>>} レコード
   */
  getDataValues() {
    if (this.dataValues_ !== undefined) return this.dataValues_;
    const values = this.getDataRangeValues();
    const dataValues = values.filter((_, i) => i >= this.headerRows);
    this.dataValues_ = dataValues;
    return dataValues;
  }

  /**
   * シートの値すべて取得するメソッド
   * @return {Array.<Array.<number|string|boolean|Date>>} シートの値
   */
  getDataRangeValues() {
    if (this.dataRangeValues_ !== undefined) return this.dataRangeValues_;
    const dataRangeValues = this.getDataRange().getValues();
    this.dataRangeValues_ = dataRangeValues;
    return dataRangeValues;
  }

}