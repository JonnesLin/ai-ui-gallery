export function formatDate(date: Date | undefined, format: string = 'MMM dd, yyyy'): string {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthNamesShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const replacements: Record<string, string> = {
    'yyyy': String(year),
    'yy': String(year).slice(-2),
    'MMMM': monthNames[month],
    'MMM': monthNamesShort[month],
    'MM': String(month + 1).padStart(2, '0'),
    'M': String(month + 1),
    'dd': String(day).padStart(2, '0'),
    'd': String(day),
  };

  let result = format;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(key, value);
  }

  return result;
}
