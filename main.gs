/**
* トリガーアカウント： 任意
* 実行スクリプト：updateHolidays
* トリガーイベント：例: 時間主導型 / 月ベースのタイマー / 1日 / 午前 0 時～1 時
*/
function updateHolidays() {

  if (!DT.shouldRun()) return;

  const holiday = new HolidayCalendar();
  const holidayValues = holiday.getValues();
  
  const sheet = new Sheet();
  sheet.setValuesHeaderRowsAfter(holidayValues);
}
