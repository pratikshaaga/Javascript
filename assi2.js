function getRemark(note) {
    let remark = "failed";

    if (note >= 70 && note <= 100) {
        remark = "passed";
    } else if (note >= 60 && note < 70) {
        remark = "Conditional";
    } else if (note >= 0 && note < 60) {
        remark = "Failed";
    } else {
        // Error handling.
    }

    return remark;
}

function getLetterGrade(note) {
    let letterGrade = "";

    if (note >= 70 && note <= 100) {
        letterGrade = "A";
    } else if (note >= 80 && note < 90) {
        letterGrade = "B";
    } else if (note >= 70 && note < 80) {
        letterGrade = "C";
    } else if (note >= 60 && note < 70) {
        letterGrade = "D";
    } else if (note >= 0 && note < 60) {
        letterGrade = "F";
    } else {
        // Error handling.
    }

    return letterGrade;
}

listOfNotes = [88, 75, 40, 65, 95.6];

listOfNotes.forEach(function(element) {
    alert("You have a note of " + element + ". Remark is: " + getRemark(element) + ". Letter is: " + getLetterGrade(element));
});