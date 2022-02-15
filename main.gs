/**
 * 12 月に Google スプレッドシートの祝日リストを更新する関数
 * @param {Object} e - 時間主導型のイベント オブジェクト
 */
function updateHolidays(e) {

  const tte = new TriggerTimeEvents(e);
  if (tte.month !== 12) return;

  const holiday = new HolidayCalendar(tte.year);
  const holidayValues = holiday.getValues();
  const sheet = new Sheet();
  sheet.setValuesHeaderRowsAfter(holidayValues);
  
}
