// Function to format a date (yyyy-mm-dd hh:mm:ss)
const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
};

// Create a new Date object for the current date and time
const now = new Date();
console.log('Current Date and Time:', formatDate(now));

// Create a specific date
const specificDate = new Date('2025-01-01T12:00:00');
console.log('Specific Date and Time:', formatDate(specificDate));

// Add days to a date
const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};

// Subtract days from a date
const subtractDays = (date, days) => {
    return addDays(date, -days);
};

// Calculate the difference between two dates in days
const dateDifference = (date1, date2) => {
    const timeDiff = Math.abs(date1 - date2); // Difference in milliseconds
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
};

// Example manipulations
const addedDate = addDays(now, 10);
console.log('Date 10 Days from Now:', formatDate(addedDate));

const subtractedDate = subtractDays(now, 10);
console.log('Date 10 Days Ago:', formatDate(subtractedDate));

// Difference between two dates
const diff = dateDifference(specificDate, now);
console.log('Days Between Now and Specific Date:', diff);

// Extract individual date components
console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1); // Months are zero-based
console.log('Date:', now.getDate());
console.log('Day of the Week:', now.getDay()); // 0 = Sunday, 6 = Saturday
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());
