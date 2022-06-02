//  DD-MM-YYYY ====>  DD/MM/YYYY
export const dateTooMDY = (day: string) => {
  let datearray = day.split("-");
  return datearray[0] + '/' + datearray[1] + '/' + datearray[2];
}

//  DD-MM-YYYY ====> MM-DD-YYYY
export const dateTooDMY = (day: string) => {
  let datearray = day.split("-");
  return `${datearray[1] + '-' + datearray[0] + '-' + datearray[2]}`;
}

// DD/MM/YYYY  ====>  DD-MM-YYYY 
export const dateToM_D_Y = (day: string) => {
  let datearray = day.split("/");
  return datearray[0] + '-' + datearray[1] + '-' + datearray[2];
}

// Date DD/MM/YYYY  ====>  seconds
export const dateM_D_YtoSeconds = (date: any) => {
  let dateArgs = date.match(/\d{2,4}/g),
    year = dateArgs[2],
    month = parseInt(dateArgs[1]) - 1,
    day = dateArgs[0];
  return (new Date(year, month, day).getTime()) / 1000;
}

//  DD/MM/YYYY  ====>  Date
export const MDYtoDate = (date: any) => {
  return new Date(date);
}

// Date DD/MM/YYYY hh:mm ====>  seconds
export const dateM_D_Y_HtoSeconds = (date: any) => {
  let dateArgs = date.match(/\d{2,4}/g),
    year = dateArgs[2],
    month = parseInt(dateArgs[1]) - 1,
    day = dateArgs[0],
    hour = dateArgs[3],
    minutes = dateArgs[4];
  return (new Date(year, month, day, hour, minutes).getTime()) / 1000;
}


// seconds  ====>  DD/MM/YYYY
export const SecondsToM_D_Y = (dateNow: number) => {
  const date = new Date(dateNow * 1000)

  const date1 =
    ((date.getDate() > 9)
      ? date.getDate()
      : ('0' + date.getDate()))
    + '/' +
    ((date.getMonth() > 8)
      ? (date.getMonth() + 1)
      : ('0' + (date.getMonth() + 1)))
    + '/' +
    date.getFullYear();

  return date1
}

export const SecondsToD_M_Y = (dateNow: number) => {
  const date = new Date(dateNow * 1000)

  const date1 =
    ((date.getMonth() > 8)
      ? (date.getMonth() + 1)
      : ('0' + (date.getMonth() + 1)))
    + '/' +
    ((date.getDate() > 9)
      ? date.getDate()
      : ('0' + date.getDate()))
    + '/' +
    date.getFullYear();

  return date1
}

export const SecondsToh_m_s = (dateNow: number) => {
  const date = new Date(dateNow * 1000)

  const date1 =
    ((date.getHours() > 9)
      ? date.getHours()
      : ('0' + date.getHours()))
    + ':' +
    ((date.getMinutes() > 9)
      ? date.getMinutes()
      : ('0' + date.getMinutes()))
    + ':' +
    ((date.getSeconds() > 9)
      ? date.getSeconds()
      : ('0' + date.getSeconds()))
    ;

  return date1
}

export const SecondsToM_D_Y_h_m_s = (dateNow: number) => {
  const date = new Date(dateNow * 1000)

  const date1 =
    ((date.getDate() > 9)
      ? date.getDate()
      : ('0' + date.getDate()))
    + '/' +
    ((date.getMonth() > 8)
      ? (date.getMonth() + 1)
      : ('0' + (date.getMonth() + 1)))
    + '/' +
    date.getFullYear()
    + ' ' +
    ((date.getHours() > 9)
      ? date.getHours()
      : ('0' + date.getHours()))
    + ':' +
    ((date.getMinutes() > 9)
      ? date.getMinutes()
      : ('0' + date.getMinutes()))
    + ':' +
    ((date.getSeconds() > 9)
      ? date.getSeconds()
      : ('0' + date.getSeconds()))
    ;

  return date1
}

export function formatNumber(n: number) {
  return n.toFixed(0).replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
  });
}