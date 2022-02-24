// Return string of current quarter
export const getCurrQtr = () => {
    let currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth();
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

    let currSeason;
    if (currMonth >= 0 && currMonth <= 2)
      currSeason = 0;
    else if (currMonth <= 5)
      currSeason = 1;
    else if (currMonth <= 8)
      currSeason = 2;
    else
      currSeason = 3;
    if (currSeason === 3)
      currYear++;

    let currQtr = seasons[currSeason] + " " + currYear;
    return currQtr;
}