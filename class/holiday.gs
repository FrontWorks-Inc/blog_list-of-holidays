/**
 * 祝日情報に関するクラス
 */
class HolidayCalendar {

  /**
   * 祝日情報に関するコンストラクタ
   * @constructor
   * @param {number} year - 対象となる年
   * @param {CalendarApp.Calendar} calendar - 祝日カレンダー 
   */
  constructor(year = DT.getFullYear(), calendar = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com')) {
    /** @type {number} */
    this.year = year;
    /** @type {CalendarApp.Calendar} */
    this.calendar = calendar;
  }

  /**
   * Class CalendarApp から委譲されたメソッド
   * NOTE: https://developers.google.com/apps-script/reference/calendar/calendar-app
   */
  getEvents(...args) { return this.calendar.getEvents(...args); }

  /**
   * 祝日名と日付を取得するメソッド
   * @param {Date} startDate - 開始日
   * @param {Date} endDate - 終了日
   * @return {Array.<Array.<string|Date>>} 祝日名と日付の値
   */
  getValues(startDate = new Date(this.year, 11, 1), endDate = new Date(this.year + 1, 11, 31)) {
    const events = this.getEvents(startDate, endDate);
    const publicHolidayValues = events.map(event => [event.getTitle(), Datetime.format(event.getStartTime())]);
    const specificHolidaysValues = this.getSpecificHolidaysValues();
    const values = [...publicHolidayValues, ...specificHolidaysValues];
    values.sort((a, b) => a[1].localeCompare(b[1], 'ja'));
    return values;
  }

  /**
   * 固有の休暇を配列で取得するメソッド
   * @param {number} year - 対象となる年
   * @return {Array.<Array.<string>>} 固有の休暇
   */
  getSpecificHolidaysValues(year = this.year + 1) {
    const specificHolidaysValues = [
      ['冬季休暇', year - 1 + '/12/29'],
      ['冬季休暇', year - 1 + '/12/30'],
      ['冬季休暇', year - 1 + '/12/31'],
      ['冬季休暇', year + '/01/02'],
      ['冬季休暇', year + '/01/03'],
      ['冬季休暇', year + '/01/04'],
      ['夏季休暇', year + '/08/13'],
      ['夏季休暇', year + '/08/14'],
      ['夏季休暇', year + '/08/15'],
      ['冬季休暇', year + '/12/29'],
      ['冬季休暇', year + '/12/30'],
      ['冬季休暇', year + '/12/31'],
    ];
    return specificHolidaysValues;
  }

}