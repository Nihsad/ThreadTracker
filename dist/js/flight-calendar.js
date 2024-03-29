class Calendar {
    constructor() {
        this.months = [
            { name: "Month 1", days: 37 },
            { name: "Month 2", days: 36 },
            { name: "Month 3", days: 36 },
            { name: "Month 4", days: 36 },
            { name: "Month 5", days: 36 },
            { name: "Month 6", days: 36 },
            { name: "Month 7", days: 36 },
            { name: "Month 8", days: 36 },
            { name: "Month 9", days: 36 },
            { name: "Month 10", days: 37 }
        ];
        this.calendarData = {};
    }

    addData(monthIndex, day, data, styles = []) {
        const monthInfo = this.months[monthIndex];
        if (!monthInfo || day < 1 || day > monthInfo.days) {
            throw new Error("Invalid month index or day");
        }
        const monthName = monthInfo.name;
        this.calendarData[monthName] = this.calendarData[monthName] || {};
        this.calendarData[monthName][day] = { data, styles };
    }

    displayCalendar() {
        const calendarDiv = document.getElementById("calendar");
        this.months.forEach((monthInfo, index) => {
            const monthPreview = document.createElement("div");
            monthPreview.classList.add("month-preview");
            monthPreview.textContent = monthInfo.name;
            calendarDiv.appendChild(monthPreview);

            const monthDiv = document.createElement("div");
            monthDiv.classList.add("month");
            monthDiv.dataset.month = monthInfo.name;

            const monthGrid = document.createElement("div");
            monthGrid.classList.add("month-grid");
            for (let day = 1; day <= monthInfo.days; day++) {
                const entry = this.calendarData[monthInfo.name]?.[day];
                if (entry) {
                    const dayDiv = document.createElement("div");
                    dayDiv.classList.add("day");

                    const dayNumber = document.createElement("span");
                    dayNumber.textContent = day;
                    dayDiv.appendChild(dayNumber);

                    const { data, styles } = entry;
                    const dataPara = document.createElement("p");
                    const dataSpan = document.createElement("span");
                    dataSpan.textContent = data;
                    dataPara.appendChild(dataSpan);
                    dayDiv.appendChild(dataPara);
                    dataSpan.dataset.style = styles.join(' ');

                    monthGrid.appendChild(dayDiv);
                } else {
                    const emptyDayDiv = document.createElement("div");
                    emptyDayDiv.classList.add("day");
                    const dayNumber = document.createElement("span");
                    dayNumber.textContent = day;
                    emptyDayDiv.appendChild(dayNumber);
                    monthGrid.appendChild(emptyDayDiv);
                }
            }
            monthDiv.appendChild(monthGrid);

            calendarDiv.appendChild(monthDiv);

            monthPreview.addEventListener("click", () => {
                this.toggleMonth(monthDiv);
            });
        });
    }

    toggleMonth(monthDiv) {
        const isActive = monthDiv.classList.contains("active");
        document.querySelectorAll(".month").forEach(m => m.classList.remove("active"));
        if (!isActive) {
            monthDiv.classList.add("active");
        }
    }
}

// Example usage:
const cal = new Calendar();

// Flights/Runs
cal.addData(0,2,"Elayuth", ["elayuth"]);
cal.addData(0,17,"Nikolyth", ["nikolyth"]);
cal.addData(1,5,"Meonaith", ["meonaith"]);
cal.addData(1,13,"Dundavith", ["dundavith"]);
cal.addData(1,28,"Allyseith", ["allyseith"]);
cal.addData(2,4,"Jivikath*", ["jivikath"]);
cal.addData(2,11,"Indreth*", ["indreth"]);
cal.addData(2,12,"Oriath*",["oriath"]);
cal.addData(2,22, "Elayuth", ["elayuth"]);
cal.addData(3,9,"Ovalyneth*", ["ovalyneth"]);
cal.addData(3,27,"Fallaith*", ["fallaith"]);
cal.addData(4,3,"Indreth*", ["indreth"]);
cal.addData(4,12,"Dundavith", ["dundavith"]);
cal.addData(4,18,"Meonaith", ["meonaith"]);
cal.addData(5,1,"Allyseith", ["allyseith"]);
cal.addData(5,12,"Nikolyth", ["nikolyth"]);
cal.addData(5,22,"Elayuth", ["elayuth"]);
cal.addData(5,32,"Fallaith*", ["fallaith"]);
cal.addData(6,7,"Elayuth", ["elayuth"]);
cal.addData(6,23,"Jivikath*", ["jivikath"]);
cal.addData(7,16,"Ovalyneth*", ["ovalyneth"]);
cal.addData(8,21,"Meonaith", ["meonaith"]);
cal.addData(8,22,"Nikolyth", ["nikolyth"]);
cal.addData(9,11,"Indreth*", ["indreth"]);
cal.addData(9,26,"Ovalyneth*", ["ovalyneth"]);
cal.addData(9,11,"Orila*", ["goldd"]);
cal.addData(4,1, "Prim", ["greend"]);

// Birthdays
cal.addData(0,8, "S'vix", ["male"]);
cal.addData(0,7, "Valadrie", ["male"]);
cal.addData(0,30, "N'lyse", ["male"]);
cal.addData(1,18, "Qu'lin", ["female"]);
cal.addData(2,10, "Fearne", ["female"]);
cal.addData(3,2, "A'srian", ["male"]);
cal.addData(4,16, "Ne'lon", ["male"]);
cal.addData(4,29, "B'ryn", ["male"]);
cal.addData(4,30, "Vanelwynne", ["female"]);
cal.addData(5,21, "Xydrie", ["female"]);
cal.addData(5,27, "K'ran", ["male"]);
cal.addData(6,24, "B'gor", ["male"]);
cal.addData(6,32, "K'eir", ["male"]);
cal.addData(7,1, "Teimyn", ["male"]);
cal.addData(7,4, "Ellariel", ["female"]);
cal.addData(7,13, "Kanestikiv", ["male"]);
cal.addData(8,5, "Marlevayne", ["female"]);
cal.addData(8,26, "G'yon", ["male"]);
cal.addData(9,17, "Feytach", ["male"]);
cal.addData(9,21, "K'ver", ["male"]);
cal.addData(9,34, "Thealdrae", ["female"]);

// Displaying the calendar
cal.displayCalendar();
