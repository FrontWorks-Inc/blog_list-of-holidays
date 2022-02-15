/**
 * トリガーアカウント： 任意
 * 実行スクリプト：updateHolidays
 * トリガーイベント：例: 時間主導型 / 月ベースのタイマー / 1日 / 午前 0 時～1 時
 */
function updateHolidays(e) {

  const tte = new TriggerTimeEvents(e);

  if (tte.month !== 12) return;

  const holiday = new HolidayCalendar(tte.year);
  const holidayValues = holiday.getValues();
  
  const sheet = new Sheet();
  sheet.setValuesHeaderRowsAfter(holidayValues);
}
