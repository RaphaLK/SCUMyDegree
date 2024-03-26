// Scraper for getting the list of majors from Santa Clara University's website

const response = await fetch("https://www.scu.edu/academics/undergraduate-programs/", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
    },
    "method": "GET"
});
const htmlText = await response.text();
const parser = new DOMParser();
const htmlDoc = parser.parseFromString(htmlText, 'text/html');

// Remove the line break section
const sections = htmlDoc.querySelectorAll('h4.related-links-header');
sections.forEach((el) => {
    if (el.innerHTML == '&nbsp;') {
        el.remove();
    }
});

const majorGroups = htmlDoc.querySelectorAll('.col-sm-6');

const schools = [];

majorGroups.forEach((majorGroup) => {
    const groupTitles = majorGroup.querySelectorAll('h4');
    let groupTitle;
    for (const titleEl of groupTitles) {
        groupTitle = titleEl.textContent;

        groupMajors = titleEl.nextElementSibling;
        groupMajorsList = groupMajors.querySelectorAll('li');

        const majors = [];
        for (const majorEl of groupMajorsList) {
            const el = majorEl.querySelector('a');
            const major = {
                name: el.textContent,
                url: el.href
            };
            majors.push(major);
        }

        const group = {
            school: groupTitle,
            majors: majors
        };

        schools.push(group);
    };
});

const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(schools));
const downloadAnchorNode = htmlDoc.createElement('a');
downloadAnchorNode.setAttribute("href", dataStr);
downloadAnchorNode.setAttribute("download", "majors_spring24.json");
downloadAnchorNode.click();