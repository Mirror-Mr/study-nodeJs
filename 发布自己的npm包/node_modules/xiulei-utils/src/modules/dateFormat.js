/**
 * 时间格式化工具方法
 * @param {*} date 日期
 * @param {*} format 格式
 * @returns 格式化后的日期
 */
 function dateFormat(date,format="yyyy-MM-dd"){
  date = new Date(date);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  format = format.toLowerCase();
  let newDate = ``;
  switch(format){
    case 'yyyy-mm-dd':
      month = (month + '').padStart(2,'0');
      day = (day + '').padStart(2,'0');
      newDate = `${year}-${month}-${day}`
      break;

    case 'yyyy-mm-dd hh:mm:ss':
      month = (month + '').padStart(2,'0');
      day = (day + '').padStart(2,'0');
      hour = (hour + '').padStart(2,'0');
      minute = (minute + '').padStart(2,'0');
      second = (second + '').padStart(2,'0');
      newDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`
      break;
    default:
      newDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
  return newDate;
}

module.exports = {
  dateFormat
}