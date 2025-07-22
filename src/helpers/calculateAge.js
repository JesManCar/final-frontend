export default function calculateAge(birthday) {
  const currentDate  = new Date();
  const birth  = new Date(birthday);

let years = currentDate.getFullYear() - birth.getFullYear();
  let months = currentDate.getMonth() - birth.getMonth();
  let days = currentDate.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += lastDayOfPreviousMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };

}