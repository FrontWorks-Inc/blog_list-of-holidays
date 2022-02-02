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
  getTime() { return this.date.getTime(); }
  getFullYear() { return this.date.getFullYear(); }
  getMonth() { return this.date.getMonth(); }
  getDate() { return this.date.getDate(); }

  /**
   * x 日前の Date オブジェクトを返すメソッド
   * NOTE: 時間部分は 00:00
   * @param {number} x - 日数差
   * @return {Date} x 日前の Date オブジェクト
   */
  createDaysAgo(x) {
    const date = new Date(this.getFullYear(), this.getMonth(), this.getDate() - x);
    return new Datetime(date);
  }

  /**
   * x か月の Date オブジェクトを返すメソッド
   * NOTE: 時間部分は 00:00
   * @param {number} x - 月数差
   * @return {Datetime} x 日前の Date オブジェクト
   */
  createMonthsAgo(x) {
    const date = new Date(this.getFullYear(), this.getMonth() - x, this.getDate());
    return new Datetime(date);
  }

  /**
   * 12 月かどうかを判定するメソッド
   * @return {boolean} 12 月かどうか
   */
  shouldRun() {
    const month = this.getMonth() + 1;
    return month === 12;
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