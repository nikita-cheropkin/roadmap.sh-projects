function formatName(firstName, lastName) {
    return firstName + " " +lastName;
}

function getGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good morning,";
    } else if (timeOfDay === "evening") {
        return "Good evening,";
    } else {
        return "Good afternoon,";
    }
}

function createGreeting(fName, lName, dTime) {
    console.log(getGreeting(dTime), formatName(fName, lName));
}

createGreeting("John", "James", "morning")
