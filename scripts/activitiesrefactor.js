"use strict";

console.log("Loading activities.js");
//This code is pulling the elements straight from the HTML to be referenced at the following CONST.
const activityDetailRow = document.getElementById("activityDetailRow");
const paymentDetailRow = document.getElementById("paymentDetailRow");
const activitySelectionRow = document.getElementById("activitySelectionRow");

const categorySelect = document.getElementById("categorySelect");
const activitySelect = document.getElementById("activitySelect");

const activityName = document.getElementById("activityName");
const activityId = document.getElementById("activityId");
const activityDesc = document.getElementById("activityDesc");
const activityLocation = document.getElementById("activityLocation");
const activityPrice = document.getElementById("activityPrice");
//this code is loading the page hiding the activity select as well as the activity details,
//as well as showing the onchange unto both of the dropdowns.
window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();

};
// this function represents what exact category you are selecting from the drop down and once selected --
// -- it will show the following activities from the category and still keeping the details hidden.
//as well as referencing back to the onchange lines above and calling another function "populateActivitySelect"
function onCategorySelectChange() {
    let currentCategory = categorySelect.value;

    if (currentCategory == "") {
        hideActivitySelect();
    }
    else {
        console.log(`The ${currentCategory} value has been selected for Category.`)

        populateActivitySelect(activities, currentCategory);

        showActivitySelect();

    }

    hideActivityDetail();

}
//this function is the simplified version og how activities gets pushed up from the full list of activities into 
//different categories, and using the "for(let ____ of_____){}" instead of the index since it inputs the same outcome.
//this then shows how if the activities category matches that of the category selected, its gets pushed unto the result.
function getActivitiesInCategory(fullListOfActivities, category) {
    let result = [];

    for (let thisActivity of fullListOfActivities) {
        if (thisActivity.category == category) {
            result.push(thisActivity)
        }
    }

    return result;
}
//-----------------------------------------------------------------------


function getActivitiesInCategory(fullListOfActivities, category) {

    if (fullListOfActivities.category == category) {
        result.push()
    }
    else{
        return false;
    }
}

let getActivities = activities.filter(getActivitiesInCategory);

if(getActivities.length > 0) {
    console,log(getActivities);
}

//this function shows a empty array that would be filled using the new Option which is the "PLease select your activity!" --
// -- and added to the intital options to make the user choose an activity to display its information.
//it then uses the "thisActivity" referenced in the earlier function and uses the new Option to use the .name --
// -- to display on the dropdown and the id from the data.js for its id.
//
function populateActivitySelect(fullListOfActivities, selectedCategory) {

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    let activitiesIsCategory = getActivitiesInCategory(fullListOfActivities, selectedCategory);

    for (let thisActivity of activitiesIsCategory) {
        let theOption = new Option(thisActivity.name, thisActivity.id);
        activitySelect.appendChild(theOption);
        console.log("The new option has been added to the dropdown")
    }

}

//this function is showing how it gets the information from the html and it is shown as the selectedActivity.__.
// This also shows that the activityId being blank will result in hiding the Activity Details using the fucntions --
// -- that are at the bottom of the code, which are global and can be used to be called in other areas when needed.
// for the second if statement, it explins that if the selectedActivity.price (price of an activity from the category) --
// -- is grater than 0, then the checkout will display due to the function being called, else it wonn't display due to --
//-- the other function being called.
function onActivitySelectChange() {

    let selectedActivityId = activitySelect.value;

    if (selectedActivityId == "") {
        hideActivityDetail();

    }
    else {

        let selectedActivity = getActivityById(selectedActivityId);

        activityName.innerHTML = selectedActivity.name;
        activityId.innerHTML = selectedActivity.id;
        activityDesc.innerHTML = selectedActivity.description;
        activityLocation.innerHTML = selectedActivity.location;
        activityPrice.innerHTML = selectedActivity.price;

        showActivityDetail();

        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }

    }

}
//The function getActivityById is a function that gets the "id" and searches for an activity with that same ID 
//in the activities array. It returns the activity when it matches.
function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }
    }
}

//These are global functions that can be called upon and are functions that hide or show elements being displayed on the page
//it shows how it can be set on a block or none.
function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
    hideCheckout();
}

function showActivityDetail() {
    activityDetailRow.style.display = 'block';
}


function hideCheckout() {
    paymentDetailRow.style.display = 'none';
}

function showCheckout() {
    paymentDetailRow.style.display = 'block';
}

function hideActivitySelect() {
    activitySelectionRow.style.display = "none";
}

function showActivitySelect() {
    activitySelectionRow.style.display = "block";
}