const banglaMonths = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const banglaDayNames = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'];

export const toBanglaNumber = (num) => String(num).split('').map(d => banglaNumbers[parseInt(d)] || d).join('');

export const gregorianToBangla = (gDate) => {
  const gYear = gDate.getFullYear();
  let bYear, bMonth, bDay;

  const bNewYearGreg = new Date(gYear, 3, 14); 
  if (gDate >= bNewYearGreg) {
    bYear = gYear - 593;
  } else {
    bYear = gYear - 594;
  }

  const banglaMonthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
  const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  if (isLeapYear(gYear)) banglaMonthDays[10] = 31;

  let refDate = new Date(bNewYearGreg);
  if (gDate < bNewYearGreg) {
    refDate = new Date(gYear - 1, 3, 14);
  }
  let diffDays = Math.floor((gDate - refDate) / (1000 * 60 * 60 * 24));

  bMonth = 0;
  while (diffDays >= banglaMonthDays[bMonth]) {
    diffDays -= banglaMonthDays[bMonth];
    bMonth++;
  }
  bDay = diffDays + 1;

  return { bYear, bMonth, bDay, monthName: banglaMonths[bMonth] };
};

export const getBanglaMonthDates = (bYear, bMonthIndex) => {
  const banglaMonthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
  const gregNewYear = new Date(bYear + 593, 3, 14);

  let startDate = new Date(gregNewYear);
  for (let i = 0; i < bMonthIndex; i++) {
    startDate.setDate(startDate.getDate() + banglaMonthDays[i]);
  }

  const daysInMonth = banglaMonthDays[bMonthIndex];
  const dates = [];
  for (let d = 0; d < daysInMonth; d++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + d);
    dates.push({ banglaDay: d + 1, gregDate: date });
  }
  return { dates, startDayOfWeek: startDate.getDay(), daysInMonth };
};

export { banglaMonths, banglaDayNames };
