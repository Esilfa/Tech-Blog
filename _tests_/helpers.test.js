const {format_date} = require("../utils/helpers")
test ('format_date() returns a date string', ()=> {
    const date = new Date("2022-02-01 15:15:00");
    expect (format_date(date).toBe ("2/1/2022"))


})