'use strict'

class Datetime {

  /**
   * 日付に関するコンストラクタ
   * @constructor
   * @param {Date} date - 対象となる日付
   */
  constructor(date = new Date()) {
    /** @type {Date} */
    this.date = new Date(date);
  }

  /**
   * Class Date から委譲されたメソッド
   */
  getFullYear() { return this.date.getFullYear(); }
  getMonth() { return this.date.getMonth(); }

  /**
   * 対象月かどうかを判定するメソッド
   * @param {number} month - 対象月
   * @return {boolean} 対象月かどうか
   */
  isMonth(month) {
    return this.getMonth() + 1 === month;
  }

  /**
   * 指定のフォーマットで日付を文字列化する静的メソッド
   * @param {Date} d - Date オブジェクト 文字列型も可
   * @param {string} format - フォーマットする形式
   * @return {string} フォーマットされた文字列型の日付
   */
  static format(d = new Date(), format = 'yyyy/MM/dd') {
    const date = new Date(d);
    const strDate = Utilities.formatDate(date, 'JST', format);
    return strDate;
  }
}

const DATETIME = new Datetime();