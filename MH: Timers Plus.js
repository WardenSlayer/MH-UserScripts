// ==UserScript==
// @name         MH Timers+
// @author       Warden Slayer - Warden Slayer#2302
// @namespace    https://greasyfork.org/en/users/227259-wardenslayer
// @version      1.2
// @description  Handy script to keep track of the various MH location timers
// @include      https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @include      http://www.mousehuntgame.com/*
// @include      https://www.mousehuntgame.com/*
// @grant GM_setClipboard
// ==/UserScript==
$(document).ready(function() {
    console.log("MH Timers+");
    buildTimerBox();
    buildControlPanels();
    startTimers();
});

function buildTimerBox() {
    if ($(".timerBox").length > 0) return;
    var container = $("#mousehuntContainer");
    var mainAccordion = document.getElementsByClassName("accordion");
    var i;
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerBox");
    $(timerBox).css({
        'background-image': "url('https://www.toptal.com/designers/subtlepatterns/patterns/interlaced.png')"
    });
    $(timerBox).css({
        'height': 112 + "px",
        'padding': 2 + "px"
    });
    let forbiddenGrove = buildForbiddenGrove();
    let balacksCove = buildBalacksCove();
    let seasonalGarden = buildSeasonalGarden();
    let toxicSpill = buildToxicSpill();
    timerBox.appendChild(forbiddenGrove)
    timerBox.appendChild(balacksCove)
    timerBox.appendChild(seasonalGarden)
    timerBox.appendChild(toxicSpill)
    $(forbiddenGrove).css({
        'float': 'left'
    })
    $(balacksCove).css({
        'float': 'left',
        'marginLeft': 1 + "px"
    })
    $(seasonalGarden).css({
        'float': 'left',
        'marginLeft': 1 + "px"
    })
    $(toxicSpill).css({
        'float': 'left',
        'marginLeft': 1 + "px"
    })
    //LAST
    container.prepend(timerBox)
}

function buildControlPanels() {
    var timerBox = $(".timerBox");
    //FG
    var forbiddenGroveControlPanel = document.createElement("div");
    forbiddenGroveControlPanel.classList.add("forbiddenGroveControlPanel");
    var forbiddenGroveButton = document.createElement("button");
    forbiddenGroveButton.id = "forbiddenGroveButton";
    forbiddenGroveButton.innerText = "Travel";
    forbiddenGroveButton.addEventListener("click", travelToGrove);
    forbiddenGroveControlPanel.appendChild(forbiddenGroveButton);
    $(forbiddenGroveControlPanel).css({
        'float': 'left',
        'width': '21.5%'
    })
    $(forbiddenGroveButton).css({
        'width': '75px',
        'float': 'left',
        'marginRight': 5 + "px"
    })
    var forbiddenGroveCb = document.createElement('input');
    forbiddenGroveCb.type = "checkbox";
    forbiddenGroveCb.name = "forbiddenGroveCb";
    forbiddenGroveCb.value = "value";
    forbiddenGroveCb.id = "forbiddenGroveCb";
    if (localStorage.getItem('RemindGrove') == "Y") {
        forbiddenGroveCb.checked = "Yes";
    } else {
        forbiddenGroveCb.checked = "";
    }
    var forbiddenGroveCbLabel = document.createElement('label')
    forbiddenGroveCbLabel.htmlFor = "forbiddenGroveCbLabel";
    forbiddenGroveCbLabel.appendChild(document.createTextNode('Remind '));
    forbiddenGroveControlPanel.appendChild(forbiddenGroveCbLabel);
    forbiddenGroveControlPanel.appendChild(forbiddenGroveCb)
    $(forbiddenGroveCbLabel).css({
        'float': 'left',
        'fontSize': "14px",
        'width': '45px',
    })
    $(forbiddenGroveCb).css({
        'float': 'left',
        'width': '20px'
    })
    timerBox.append(forbiddenGroveControlPanel);
    //BC
    var balacksCoveControlPanel = document.createElement("div");
    balacksCoveControlPanel.classList.add("balacksCoveControlPanel");
    var balacksCoveButton = document.createElement("button");
    balacksCoveButton.id = "balacksCoveButton";
    balacksCoveButton.innerText = "Travel";
    balacksCoveButton.addEventListener("click", travelToCove);
    balacksCoveControlPanel.appendChild(balacksCoveButton);
    $(balacksCoveControlPanel).css({
        'float': 'left',
        'width': '25%',
        'marginLeft': 5 + "px"
    })
    $(balacksCoveButton).css({
        'width': '75px',
        'float': 'left',
        'marginRight': 5 + "px"
    })
    var balacksCoveCb = document.createElement('input');
    balacksCoveCb.type = "checkbox";
    balacksCoveCb.name = "balacksCoveCb";
    balacksCoveCb.value = "value";
    balacksCoveCb.id = "balacksCoveCb";
    if (localStorage.getItem('RemindCove') == "Y") {
        balacksCoveCb.checked = "Yes";
    } else {
        balacksCoveCb.checked = "";
    }
    var balacksCoveCbLabel = document.createElement('label')
    balacksCoveCbLabel.htmlFor = "balacksCoveCbLabel";
    balacksCoveCbLabel.appendChild(document.createTextNode('Remind '));
    balacksCoveControlPanel.appendChild(balacksCoveCbLabel);
    balacksCoveControlPanel.appendChild(balacksCoveCb)
    $(balacksCoveCbLabel).css({
        'float': 'left',
        'fontSize': "14px",
        'width': '45px',
    })
    $(balacksCoveCb).css({
        'float': 'left',
        'width': '20px'
    })
    timerBox.append(balacksCoveControlPanel);
    //SG
    var seasonalGardenControlPanel = document.createElement("div");
    seasonalGardenControlPanel.classList.add("seasonalGardenControlPanel");
    var seasonalGardenButton = document.createElement("button");
    seasonalGardenButton.id = "seasonalGardenButton";
    seasonalGardenButton.innerText = "Travel";
    seasonalGardenButton.addEventListener("click", travelToGarden);
    seasonalGardenControlPanel.appendChild(seasonalGardenButton);
    $(seasonalGardenControlPanel).css({
        'float': 'left',
        'width': '24%',
        'marginLeft': 5 + "px"
    })
    $(seasonalGardenButton).css({
        'width': '75px',
        'float': 'left',
        'marginRight': 5 + "px"
    })
    var seasonalGardenCb = document.createElement('input');
    seasonalGardenCb.type = "checkbox";
    seasonalGardenCb.name = "seasonalGardenCb";
    seasonalGardenCb.value = "value";
    seasonalGardenCb.id = "seasonalGardenCb";
    if (localStorage.getItem('RemindGarden') == "Y") {
        seasonalGardenCb.checked = "Yes";
    } else {
        seasonalGardenCb.checked = "";
    }
    var seasonalGardenCbLabel = document.createElement('label')
    seasonalGardenCbLabel.htmlFor = "seasonalGardenCbLabel";
    seasonalGardenCbLabel.appendChild(document.createTextNode('Remind '));
    seasonalGardenControlPanel.appendChild(seasonalGardenCbLabel);
    seasonalGardenControlPanel.appendChild(seasonalGardenCb)
    $(seasonalGardenCbLabel).css({
        'float': 'left',
        'fontSize': "14px",
        'width': '45px',
    })
    $(seasonalGardenCb).css({
        'float': 'left',
        'width': '20px'
    })
    timerBox.append(seasonalGardenControlPanel);
    //TS
    var toxicSpillControlPanel = document.createElement("div");
    toxicSpillControlPanel.classList.add("toxicSpillControlPanel");
    var toxicSpillButton = document.createElement("button");
    toxicSpillButton.id = "toxicSpillButton";
    toxicSpillButton.innerText = "Travel";
    toxicSpillButton.addEventListener("click", travelToSpill);
    toxicSpillControlPanel.appendChild(toxicSpillButton);
    $(toxicSpillControlPanel).css({
        'float': 'left',
        'width': '24%',
        'marginLeft': 10 + "px"
    })
    $(toxicSpillButton).css({
        'width': '75px',
        'float': 'left',
        'marginRight': 5 + "px"
    })
    var toxicSpillCb = document.createElement('input');
    toxicSpillCb.type = "checkbox";
    toxicSpillCb.name = "toxicSpillCb";
    toxicSpillCb.value = "value";
    toxicSpillCb.id = "toxicSpillCb";
    if (localStorage.getItem('RemindSpill') == "Y") {
        toxicSpillCb.checked = "Yes";
    } else {
        toxicSpillCb.checked = "";
    }
    var toxicSpillCbLabel = document.createElement('label')
    toxicSpillCbLabel.htmlFor = "toxicSpillCbLabel";
    toxicSpillCbLabel.appendChild(document.createTextNode('Remind '));
    toxicSpillControlPanel.appendChild(toxicSpillCbLabel);
    toxicSpillControlPanel.appendChild(toxicSpillCb)
    $(toxicSpillCbLabel).css({
        'float': 'left',
        'fontSize': "14px",
        'width': '45px',
    })
    $(toxicSpillCb).css({
        'float': 'left',
        'width': '20px'
    })
    timerBox.append(toxicSpillControlPanel);
}

function startTimers() {
    localStorage.setItem("mainTimer", 0);
    runTimers();
}

function runTimers() {
    updateText();
    var myTimer = setInterval(updateText, 5000);
}

function updateText() {
    if ($(".forbiddenGrove").length > 0) updateForbiddenGroveTimer();
    if ($(".balacksCove").length > 0) updateBalacksCoveTimer();
    if ($(".seasonalGarden").length > 0) updateSeasonalGardenTimer();
    if ($(".toxicSpill").length > 0) updateToxicSpillTimer();
}
//===================================== Forbidden Grove ======================================
function buildForbiddenGrove() {
    if ($(".forbiddenGrove").length > 0) return;
    var timerBox = $(".timerBox");
    var forbiddenGrove = document.createElement("div");
    forbiddenGrove.classList.add("forbiddenGrove");
    $(forbiddenGrove).css({
        'border': '1px solid black',
        'width': '21%',
        'height': '75%',
        'padding': 2 + "px"
    });
    //Header
    var forbiddenGroveHeader = document.createElement("div");
    forbiddenGroveHeader.classList.add("forbiddenGroveHeader");
    var forbiddenGroveHeaderLabel = document.createElement("div");
    forbiddenGroveHeaderLabel.classList.add("forbiddenGroveHeaderLabel");
    var forbiddenGroveHeaderLabelText = document.createTextNode("Forbidden Grove is:");
    forbiddenGroveHeaderLabel.appendChild(forbiddenGroveHeaderLabelText);
    var forbiddenGroveHeaderValue = document.createElement("div");
    forbiddenGroveHeaderValue.classList.add("forbiddenGroveHeaderValue");
    var forbiddenGroveHeaderValueText = document.createTextNode("Open");
    forbiddenGroveHeaderValue.appendChild(forbiddenGroveHeaderValueText);
    $(forbiddenGroveHeaderLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(forbiddenGroveHeaderValue).css({
        "marginLeft": "100px"
    });
    forbiddenGroveHeader.appendChild(forbiddenGroveHeaderLabel);
    forbiddenGroveHeader.appendChild(forbiddenGroveHeaderValue);
    //Close
    var forbiddenGroveCloses = document.createElement("div");
    forbiddenGroveCloses.classList.add("forbiddenGroveCloses");
    var forbiddenGroveClosesLabel = document.createElement("div");
    forbiddenGroveClosesLabel.classList.add("forbiddenGroveClosesLabel");
    var forbiddenGroveClosesLabelText = document.createTextNode("Closes in:");
    forbiddenGroveClosesLabel.appendChild(forbiddenGroveClosesLabelText);
    var forbiddenGroveClosesValue = document.createElement("div");
    forbiddenGroveClosesValue.classList.add("forbiddenGroveClosesValue");
    var forbiddenGroveClosesValueText = document.createTextNode("?");
    forbiddenGroveClosesValue.appendChild(forbiddenGroveClosesValueText);
    $(forbiddenGroveClosesLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(forbiddenGroveClosesValue).css("marginLeft", "50px");
    forbiddenGroveCloses.appendChild(forbiddenGroveClosesLabel);
    forbiddenGroveCloses.appendChild(forbiddenGroveClosesValue);
    //Open
    var forbiddenGroveOpens = document.createElement("div");
    forbiddenGroveOpens.classList.add("forbiddenGroveOpens");
    var forbiddenGroveOpensLabel = document.createElement("div");
    forbiddenGroveOpensLabel.classList.add("forbiddenGroveOpensLabel");
    var forbiddenGroveOpensLabelText = document.createTextNode("Opens in:");
    forbiddenGroveOpensLabel.appendChild(forbiddenGroveOpensLabelText);
    var forbiddenGroveOpensValue = document.createElement("div");
    forbiddenGroveOpensValue.classList.add("forbiddenGroveOpensValue");
    var forbiddenGroveOpensValueText = document.createTextNode("??");
    forbiddenGroveOpensValue.appendChild(forbiddenGroveOpensValueText);
    $(forbiddenGroveOpensLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(forbiddenGroveOpensValue).css("marginLeft", "50px");
    forbiddenGroveOpens.appendChild(forbiddenGroveOpensLabel);
    forbiddenGroveOpens.appendChild(forbiddenGroveOpensValue);

    //Append
    forbiddenGrove.appendChild(forbiddenGroveHeader);
    forbiddenGrove.appendChild(forbiddenGroveCloses);
    forbiddenGrove.appendChild(forbiddenGroveOpens);
    return forbiddenGrove;
}

function updateForbiddenGroveTimer() {
    if ($(".forbiddenGrove").length < 1) return;
    var forbiddenGrove = $(".forbiddenGrove");
    var firstGroveOpen = 1285704000;
    var now = todayNow();
    let timePassedHours = (now - firstGroveOpen) / 3600;
    var rotaionLenght = 20;
    var rotationsExact = timePassedHours / rotaionLenght;
    var rotationsInteger = Math.trunc(rotationsExact);
    var partialrotation = (rotationsExact - rotationsInteger) * rotaionLenght;
    if (partialrotation < 16) {
        //Open
        $(".forbiddenGroveHeaderValue").text(" OPEN");
        var timeCloses = (16 - partialrotation).toPrecision(4);
        var closesHours = Math.trunc(timeCloses);
        var closesMinutes = Math.ceil((timeCloses - closesHours) * 60);
        $(".forbiddenGroveClosesValue").text(closesHours + "h " + closesMinutes + "m");
        $(".forbiddenGroveOpensLabel").text("Opens Again in:");
        $(".forbiddenGroveOpensValue").text((closesHours + 4) + "h " + closesMinutes + "m");
        forbiddenGrove.append($(".forbiddenGroveOpens"))
        if ((closesHours == 0) && (closesMinutes <= 15) && (localStorage.getItem('RemindGrove') == "Y")) {
            if (confirm('The forbidden grove is closing soon, travel there now?') == true) {
                travelToGrove();
            }
        }
    } else {
        //Closed
        $(".forbiddenGroveHeaderValue").text("CLOSED")
        var timeOpens = (rotaionLenght - partialrotation).toPrecision(4);
        var opensHours = Math.trunc(timeOpens);
        var opensMinutes = Math.ceil((timeOpens - opensHours) * 60);
        $(".forbiddenGroveOpensValue").text(opensHours + "h " + opensMinutes + "m");
        $(".forbiddenGroveClosesLabel").text("Next Close in:");
        $(".forbiddenGroveClosesValue").text((opensHours + 16) + "h " + opensMinutes + "m");
        forbiddenGrove.append($(".forbiddenGroveCloses"))
        if ((opensHours == 0) && (opensMinutes <= 15) && (localStorage.getItem('RemindGrove') == "Y")) {
            if (confirm('The forbidden grove is opening soon, travel there now?') == true) {
                travelToGrove();
            }
        }
    }
}
$(document).on('change', '#forbiddenGroveCb', function() {
    if (this.checked) {
        localStorage.setItem('RemindGrove', "Y")
        this.checked = "Yes";
    } else {
        localStorage.setItem('RemindGrove', "N")
        this.checked = "";
    }
})

//====================================== Balacks's Cove ======================================
function buildBalacksCove() {
    if ($(".balacksCove").length > 0) return;
    var timerBox = $(".timerBox");
    var balacksCove = document.createElement("div");
    balacksCove.classList.add("balacksCove");
    $(balacksCove).css({
        'border': '1px solid black',
        'width': '25%',
        'height': '75%',
        'padding': 2 + "px"
    });
    //Header
    var balacksCoveHeader = document.createElement("div");
    balacksCoveHeader.classList.add("balacksCoveHeader");
    var balacksCoveHeaderLabel = document.createElement("div");
    balacksCoveHeaderLabel.classList.add("balacksCoveHeaderLabel");
    var balacksCoveHeaderLabelText = document.createTextNode("Balack's Cove Tide is:");
    balacksCoveHeaderLabel.appendChild(balacksCoveHeaderLabelText);
    var balacksCoveHeaderValue = document.createElement("div");
    balacksCoveHeaderValue.classList.add("balacksCoveHeaderValue");
    var balacksCoveHeaderValueText = document.createTextNode("Low");
    balacksCoveHeaderValue.appendChild(balacksCoveHeaderValueText);
    $(balacksCoveHeaderLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(balacksCoveHeaderValue).css({
        "marginLeft": "100px"
    });
    balacksCoveHeader.appendChild(balacksCoveHeaderLabel);
    balacksCoveHeader.appendChild(balacksCoveHeaderValue);
    //Low
    var balacksCoveLow = document.createElement("div");
    balacksCoveLow.classList.add("balacksCoveLow");
    var balacksCoveLowLabel = document.createElement("div");
    balacksCoveLowLabel.classList.add("balacksCoveLowLabel");
    var balacksCoveLowLabelText = document.createTextNode("Low Tide in:");
    balacksCoveLowLabel.appendChild(balacksCoveLowLabelText);
    var balacksCoveLowValue = document.createElement("div");
    balacksCoveLowValue.classList.add("balacksCoveLowValue");
    var balacksCoveLowValueText = document.createTextNode("?");
    balacksCoveLowValue.appendChild(balacksCoveLowValueText);
    $(balacksCoveLowLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(balacksCoveLowValue).css("marginLeft", "50px");
    balacksCoveLow.appendChild(balacksCoveLowLabel);
    balacksCoveLow.appendChild(balacksCoveLowValue);
    //Medium
    var balacksCoveMid = document.createElement("div");
    balacksCoveMid.classList.add("balacksCoveMid");
    var balacksCoveMidLabel = document.createElement("div");
    balacksCoveMidLabel.classList.add("balacksCoveMidLabel");
    var balacksCoveMidLabelText = document.createTextNode("Mid Tide in:");
    balacksCoveMidLabel.appendChild(balacksCoveMidLabelText);
    var balacksCoveMidValue = document.createElement("div");
    balacksCoveMidValue.classList.add("balacksCoveMidValue");
    var balacksCoveMidValueText = document.createTextNode("??");
    balacksCoveMidValue.appendChild(balacksCoveMidValueText);
    $(balacksCoveMidLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(balacksCoveMidValue).css("marginLeft", "50px");
    balacksCoveMid.appendChild(balacksCoveMidLabel);
    balacksCoveMid.appendChild(balacksCoveMidValue);
    //High
    var balacksCoveHigh = document.createElement("div");
    balacksCoveHigh.classList.add("balacksCoveHigh");
    var balacksCoveHighLabel = document.createElement("div");
    balacksCoveHighLabel.classList.add("balacksCoveHighLabel");
    var balacksCoveHighLabelText = document.createTextNode("High Tide in:");
    balacksCoveHighLabel.appendChild(balacksCoveHighLabelText);
    var balacksCoveHighValue = document.createElement("div");
    balacksCoveHighValue.classList.add("balacksCoveHighValue");
    var balacksCoveHighValueText = document.createTextNode("??");
    balacksCoveHighValue.appendChild(balacksCoveHighValueText);
    $(balacksCoveHighLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(balacksCoveHighValue).css("marginLeft", "50px");
    balacksCoveHigh.appendChild(balacksCoveHighLabel);
    balacksCoveHigh.appendChild(balacksCoveHighValue);
    //Append
    balacksCove.appendChild(balacksCoveHeader);
    balacksCove.appendChild(balacksCoveLow);
    balacksCove.appendChild(balacksCoveMid);
    balacksCove.appendChild(balacksCoveHigh);
    return balacksCove;
}

function updateBalacksCoveTimer() {
    if ($(".balacksCove").length < 1) return;
    var balacksCove = $(".balacksCove");
    var firstCoveLow = 1294680060;
    var now = todayNow();
    let timePassedHours = (now - firstCoveLow) / 3600;
    var rotaionLenght = 18.6666666666666666666666666666666666666667;
    var rotationsExact = timePassedHours / rotaionLenght;
    var rotationsInteger = Math.trunc(rotationsExact);
    var partialrotation = (rotationsExact - rotationsInteger) * rotaionLenght;
    if (partialrotation < 16) {
        //Low
        $(".balacksCoveHeaderValue").text("LOW");
        var timeMid = (16 - partialrotation).toPrecision(4);
        var midHours = Math.trunc(timeMid);
        var midMinutes = Math.ceil((timeMid - midHours) * 60);
        $(".balacksCoveMidValue").text(midHours + "h " + midMinutes + "m");
        $(".balacksCoveMidLabel").text("Mid-Filling in:")
        $(".balacksCoveHighValue").text((midHours + 1) + "h " + midMinutes + "m");
        $(".balacksCoveLowLabel").text("Low Again in:");
        var lowHours = midHours + 2;
        var lowMinutes = midMinutes + 40;
        if (lowMinutes >= 60) {
            lowMinutes = lowMinutes - 60;
            lowHours++;
        }
        $(".balacksCoveLowValue").text((lowHours) + "h " + (lowMinutes) + "m");
        balacksCove.append($(".balacksCoveLow"))
        if ((midHours == 0) && (midMinutes <= 15) && (localStorage.getItem('RemindCove') == "Y")) {
            if (confirm('It will be mid tide soon, travel there now?') == true) {
                travelToCove();
            }
        }
    } else if ((partialrotation >= 16) && (partialrotation < 17)) {
        //Mid (flooding)
        $(".balacksCoveHeaderValue").text("MID-Flooding");
        var timeHigh = (17 - partialrotation).toPrecision(4);
        var highHours = Math.trunc(timeHigh);
        var highMinutes = Math.ceil((timeHigh - highHours) * 60);
        $(".balacksCoveHighValue").text((highHours) + "h " + highMinutes + "m");
        $(".balacksCoveMidLabel").text("Mid-Ebbing in:")
        var midHours = highHours;
        var midMinutes = highMinutes + 40;
        if (midMinutes >= 60) {
            midMinutes = midMinutes - 60;
            midHours++;
        }
        $(".balacksCoveMidValue").text(midHours + "h " + midMinutes + "m");
        $(".balacksCoveLowLabel").text("Low Tide in:");
        $(".balacksCoveLowValue").text((midHours + 1) + "h " + (midMinutes) + "m");
        balacksCove.append($(".balacksCoveMid"))
        balacksCove.append($(".balacksCoveLow"))
        if ((highHours == 0) && (highMinutes <= 15) && (localStorage.getItem('RemindCove') == "Y")) {
            if (confirm('It will be high tide soon, travel there now?') == true) {
                travelToCove();
            }
        }
    } else if ((partialrotation >= 17) && (partialrotation < 17.6666666667)) {
        //High
        $(".balacksCoveHeaderValue").text("HIGH");
        var timeMid = (17.6666666667 - partialrotation).toPrecision(4);
        var midHours = Math.trunc(timeMid);
        var midMinutes = Math.ceil((timeMid - midHours) * 60);
        $(".balacksCoveMidValue").text((midHours) + "h " + midMinutes + "m");
        $(".balacksCoveMidLabel").text("Mid-Ebbing in:")
        $(".balacksCoveLowLabel").text("Low Tide in:")
        $(".balacksCoveLowValue").text((midHours + 1) + "h " + midMinutes + "m");
        $(".balacksCoveHigh").hide();
        balacksCove.append($(".balacksCoveLow"))
        if ((midHours == 0) && (midMinutes <= 15) && (localStorage.getItem('RemindCove') == "Y")) {
            if (confirm('It will be mid tide soon, travel there now?') == true) {
                travelToCove();
            }
        }
    } else if (partialrotation >= 17.6666666667) {
        //Mid (ebbing)
        $(".balacksCoveHeaderValue").text("MID-Ebbing");
        var timeLow = (rotaionLenght - partialrotation).toPrecision(4);
        var lowHours = Math.trunc(timeLow);
        var lowMinutes = Math.ceil((timeLow - lowHours) * 60);
        $(".balacksCoveLowLabel").text("Low Tide in:")
        $(".balacksCoveLowValue").text((lowHours) + "h " + lowMinutes + "m");
        $(".balacksCoveMidLabel").text("Mid-Filling in:")
        $(".balacksCoveMidValue").text(lowHours + 16 + "h " + lowMinutes + "m");
        $(".balacksCoveHighLabel").text("High Tide in:");
        $(".balacksCoveHighValue").text(lowHours + 17 + "h " + (lowMinutes) + "m");
        balacksCove.append($(".balacksCoveHigh").show())
        if ((lowHours == 0) && (lowMinutes <= 15) && (localStorage.getItem('RemindCove') == "Y")) {
            if (confirm('It will be low tide soon, travel there now?') == true) {
                travelToCove();
            }
        }
    }
}

$(document).on('change', '#balacksCoveCb', function() {
    if (this.checked) {
        localStorage.setItem('RemindCove', "Y")
        this.checked = "Yes";
    } else {
        localStorage.setItem('RemindCove', "N")
        this.checked = "";
    }
})
//====================================== Seasonal Garden ======================================
function buildSeasonalGarden() {
    if ($(".seasonalGarden").length > 0) return;
    var timerBox = $(".timerBox");
    var seasonalGarden = document.createElement("div");
    seasonalGarden.classList.add("seasonalGarden");
    $(seasonalGarden).css({
        'border': '1px solid black',
        'width': '24%',
        'height': '75%',
        'padding': 2 + "px"
    });
    //Header
    var seasonalGardenHeader = document.createElement("div");
    seasonalGardenHeader.classList.add("seasonalGardenHeader");
    var seasonalGardenHeaderLabel = document.createElement("div");
    seasonalGardenHeaderLabel.classList.add("seasonalGardenHeaderLabel");
    var seasonalGardenHeaderLabelText = document.createTextNode("Current Garden Season:");
    seasonalGardenHeaderLabel.appendChild(seasonalGardenHeaderLabelText);
    var seasonalGardenHeaderValue = document.createElement("div");
    seasonalGardenHeaderValue.classList.add("seasonalGardenHeaderValue");
    var seasonalGardenHeaderValueText = document.createTextNode("FALL");
    seasonalGardenHeaderValue.appendChild(seasonalGardenHeaderValueText);
    $(seasonalGardenHeaderLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(seasonalGardenHeaderValue).css({
        "marginLeft": "100px"
    });
    seasonalGardenHeader.appendChild(seasonalGardenHeaderLabel);
    seasonalGardenHeader.appendChild(seasonalGardenHeaderValue);
    //Fall
    var seasonalGardenFall = document.createElement("div");
    seasonalGardenFall.classList.add("seasonalGardenFall");
    var seasonalGardenFallLabel = document.createElement("div");
    seasonalGardenFallLabel.classList.add("seasonalGardenFallLabel");
    var seasonalGardenFallLabelText = document.createTextNode("Fall in:");
    seasonalGardenFallLabel.appendChild(seasonalGardenFallLabelText);
    var seasonalGardenFallValue = document.createElement("div");
    seasonalGardenFallValue.classList.add("seasonalGardenFallValue");
    var seasonalGardenFallValueText = document.createTextNode("?");
    seasonalGardenFallValue.appendChild(seasonalGardenFallValueText);
    $(seasonalGardenFallLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(seasonalGardenFallValue).css("marginLeft", "50px");
    seasonalGardenFall.appendChild(seasonalGardenFallLabel);
    seasonalGardenFall.appendChild(seasonalGardenFallValue);
    //Winter
    var seasonalGardenWinter = document.createElement("div");
    seasonalGardenWinter.classList.add("seasonalGardenWinter");
    var seasonalGardenWinterLabel = document.createElement("div");
    seasonalGardenWinterLabel.classList.add("seasonalGardenWinterLabel");
    var seasonalGardenWinterLabelText = document.createTextNode("Winter in:");
    seasonalGardenWinterLabel.appendChild(seasonalGardenWinterLabelText);
    var seasonalGardenWinterValue = document.createElement("div");
    seasonalGardenWinterValue.classList.add("seasonalGardenWinterValue");
    var seasonalGardenWinterValueText = document.createTextNode("?");
    seasonalGardenWinterValue.appendChild(seasonalGardenWinterValueText);
    $(seasonalGardenWinterLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(seasonalGardenWinterValue).css("marginLeft", "50px");
    seasonalGardenWinter.appendChild(seasonalGardenWinterLabel);
    seasonalGardenWinter.appendChild(seasonalGardenWinterValue);
    //Spring
    var seasonalGardenSpring = document.createElement("div");
    seasonalGardenSpring.classList.add("seasonalGardenSpring");
    var seasonalGardenSpringLabel = document.createElement("div");
    seasonalGardenSpringLabel.classList.add("seasonalGardenSpringLabel");
    var seasonalGardenSpringLabelText = document.createTextNode("Spring in:");
    seasonalGardenSpringLabel.appendChild(seasonalGardenSpringLabelText);
    var seasonalGardenSpringValue = document.createElement("div");
    seasonalGardenSpringValue.classList.add("seasonalGardenSpringValue");
    var seasonalGardenSpringValueText = document.createTextNode("?");
    seasonalGardenSpringValue.appendChild(seasonalGardenSpringValueText);
    $(seasonalGardenSpringLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(seasonalGardenSpringValue).css("marginLeft", "50px");
    seasonalGardenSpring.appendChild(seasonalGardenSpringLabel);
    seasonalGardenSpring.appendChild(seasonalGardenSpringValue);
    //Summer
    var seasonalGardenSummer = document.createElement("div");
    seasonalGardenSummer.classList.add("seasonalGardenSummer");
    var seasonalGardenSummerLabel = document.createElement("div");
    seasonalGardenSummerLabel.classList.add("seasonalGardenSummerLabel");
    var seasonalGardenSummerLabelText = document.createTextNode("Summer in:");
    seasonalGardenSummerLabel.appendChild(seasonalGardenSummerLabelText);
    var seasonalGardenSummerValue = document.createElement("div");
    seasonalGardenSummerValue.classList.add("seasonalGardenSummerValue");
    var seasonalGardenSummerValueText = document.createTextNode("?");
    seasonalGardenSummerValue.appendChild(seasonalGardenSummerValueText);
    $(seasonalGardenSummerLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(seasonalGardenSummerValue).css("marginLeft", "50px");
    seasonalGardenSummer.appendChild(seasonalGardenSummerLabel);
    seasonalGardenSummer.appendChild(seasonalGardenSummerValue);
    //Append
    seasonalGarden.appendChild(seasonalGardenHeader);
    seasonalGarden.appendChild(seasonalGardenFall);
    seasonalGarden.appendChild(seasonalGardenWinter);
    seasonalGarden.appendChild(seasonalGardenSpring);
    seasonalGarden.appendChild(seasonalGardenSummer);
    return seasonalGarden;
}

function updateSeasonalGardenTimer() {
    if ($(".seasonalGarden").length < 1) return;
    var seasonalGarden = $(".seasonalGarden");
    var firstFall = 288000;
    var now = todayNow();
    let timePassedHours = (now - firstFall) / 3600;
    var rotaionLenght = 320;
    var rotationsExact = timePassedHours / rotaionLenght;
    var rotationsInteger = Math.trunc(rotationsExact);
    var partialrotation = (rotationsExact - rotationsInteger) * rotaionLenght;
    var fallObj = new season(0, 0, 0);
    var winterObj = new season(0, 0, 0);
    var springObj = new season(0, 0, 0);
    var summerObj = new season(0, 0, 0);
    if (partialrotation < 80) {
        //Summer
        $(".seasonalGardenHeaderValue").text("SUMMER");
        var timeFall = (80 - partialrotation).toPrecision(4);
        fallObj.hours = Math.floor(timeFall);
        fallObj.minutes = Math.ceil((timeFall - fallObj.hours) * 60);
        fallObj = convertToDyHrMn(0, fallObj.hours, fallObj.minutes);
        winterObj = convertToDyHrMn(fallObj.days + 3, fallObj.hours + 8, fallObj.minutes);
        springObj = convertToDyHrMn(winterObj.days + 3, winterObj.hours + 8, winterObj.minutes)
        summerObj = convertToDyHrMn(springObj.days + 3, springObj.hours + 8, springObj.minutes);
        $(".seasonalGardenFallLabel").text("Next Summer in:")
        $(".seasonalGardenWinterLabel").text("Winter in:")
        $(".seasonalGardenSpringLabel").text("Spring in:")
        $(".seasonalGardenSummerLabel").text("Summer in:")
        seasonalGarden.append($(".seasonalGardenFall"));
        seasonalGarden.append($(".seasonalGardenWinter"));
        seasonalGarden.append($(".seasonalGardenSpring"));
        seasonalGarden.append($(".seasonalGardenSummer"));
        if ((fallObj.hours == 0) && (fallObj.minutes <= 15) && (localStorage.getItem('RemindGarden') == "Y")) {
            if (confirm('It will be fall in the garden soon, travel there now?') == true) {
                travelToGarden();
            }
        }
    } else if ((partialrotation >= 80) && (partialrotation < 160)) {
        //Fall
        $(".seasonalGardenHeaderValue").text("FALL");
        var timeWinter = (160 - partialrotation).toPrecision(4);
        winterObj.hours = Math.floor(timeWinter);
        winterObj.minutes = Math.ceil((timeWinter - winterObj.hours) * 60);
        winterObj = convertToDyHrMn(0, winterObj.hours, winterObj.minutes);
        springObj = convertToDyHrMn(winterObj.days + 3, winterObj.hours + 8, winterObj.minutes)
        summerObj = convertToDyHrMn(springObj.days + 3, springObj.hours + 8, springObj.minutes)
        fallObj = convertToDyHrMn(summerObj.days + 3, summerObj.hours + 8, summerObj.minutes);
        $(".seasonalGardenFallLabel").text("Next Fall in:")
        $(".seasonalGardenWinterLabel").text("Winter in:")
        $(".seasonalGardenSpringLabel").text("Spring in:")
        $(".seasonalGardenSummerLabel").text("Summer in:")
        seasonalGarden.append($(".seasonalGardenWinter"));
        seasonalGarden.append($(".seasonalGardenSpring"));
        seasonalGarden.append($(".seasonalGardenSummer"));
        seasonalGarden.append($(".seasonalGardenFall"));
        if ((winterObj.hours == 0) && (winterObj.minutes <= 15) && (localStorage.getItem('RemindGarden') == "Y")) {
            if (confirm('It will be winter in the garden soon, travel there now?') == true) {
                travelToGarden();
            }
        }
    } else if ((partialrotation >= 160) && (partialrotation < 240)) {
        //Winter
        $(".seasonalGardenHeaderValue").text("WINTER");
        var timeSpring = (240 - partialrotation).toPrecision(4);
        springObj.hours = Math.floor(timeSpring);
        springObj.minutes = Math.ceil((timeSpring - springObj.hours) * 60);
        springObj = convertToDyHrMn(0, springObj.hours, springObj.minutes)
        summerObj = convertToDyHrMn(springObj.days + 3, springObj.hours + 8, springObj.minutes);
        fallObj = convertToDyHrMn(summerObj.days + 3, summerObj.hours + 8, summerObj.minutes);
        winterObj = convertToDyHrMn(fallObj.days + 3, fallObj.hours + 8, fallObj.minutes);
        $(".seasonalGardenFallLabel").text("Fall in:")
        $(".seasonalGardenWinterLabel").text("Next Winter in:")
        $(".seasonalGardenSpringLabel").text("Spring in:")
        $(".seasonalGardenSummerLabel").text("Summer in:")
        seasonalGarden.append($(".seasonalGardenSpring"));
        seasonalGarden.append($(".seasonalGardenSummer"));
        seasonalGarden.append($(".seasonalGardenFall"));
        seasonalGarden.append($(".seasonalGardenWinter"));
        if ((springObj.hours == 0) && (springObj.minutes <= 15) && (localStorage.getItem('RemindGarden') == "Y")) {
            if (confirm('It will be spring in the garden soon, travel there now?') == true) {
                travelToGarden();
            }
        }
    } else {
        //Spring
        $(".seasonalGardenHeaderValue").text("SPRING");
        var timeSummer = (320 - partialrotation).toPrecision(4);
        summerObj.hours = Math.floor(timeSummer);
        summerObj.minutes = Math.ceil((timeSummer - summerObj.hours) * 60);
        summerObj = convertToDyHrMn(0, summerObj.hours, summerObj.minutes)
        fallObj = convertToDyHrMn(summerObj.days + 3, summerObj.hours + 8, summerObj.minutes);
        winterObj = convertToDyHrMn(fallObj.days + 3, fallObj.hours + 8, fallObj.minutes);
        springObj = convertToDyHrMn(winterObj.days + 3, winterObj.hours + 8, winterObj.minutes);
        $(".seasonalGardenFallLabel").text("Fall in:")
        $(".seasonalGardenWinterLabel").text("Winter in:")
        $(".seasonalGardenSpringLabel").text("Next Spring in:")
        $(".seasonalGardenSummerLabel").text("Summer in:")
        seasonalGarden.append($(".seasonalGardenSummer"));
        seasonalGarden.append($(".seasonalGardenFall"));
        seasonalGarden.append($(".seasonalGardenWinter"));
        seasonalGarden.append($(".seasonalGardenSpring"));
        if ((summerObj.hours == 0) && (summerObj.minutes <= 15) && (localStorage.getItem('RemindGarden') == "Y")) {
            if (confirm('It will be summer in the garden soon, travel there now?') == true) {
                travelToGarden();
            }
        }
    }
    $(".seasonalGardenFallValue").text(fallObj.days + "d " + fallObj.hours + "h " + fallObj.minutes + "m");
    $(".seasonalGardenWinterValue").text(winterObj.days + "d " + winterObj.hours + "h " + winterObj.minutes + "m");
    $(".seasonalGardenSpringValue").text(springObj.days + "d " + springObj.hours + "h " + springObj.minutes + "m");
    $(".seasonalGardenSummerValue").text(summerObj.days + "d " + summerObj.hours + "h " + summerObj.minutes + "m");
}

function season(days, hours, minutes) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
}
$(document).on('change', '#seasonalGardenCb', function() {
    if (this.checked) {
        localStorage.setItem('RemindGarden', "Y")
        this.checked = "Yes";
    } else {
        localStorage.setItem('RemindGarden', "N")
        this.checked = "";
    }
})
//====================================== Toxic Spill ======================================
function buildToxicSpill() {
    if ($(".toxicSpill").length > 0) return;
    var timerBox = $(".timerBox");
    var toxicSpill = document.createElement("div");
    toxicSpill.classList.add("toxicSpill");
    $(toxicSpill).css({
        'border': '1px solid black',
        'width': '26%',
        'height': '75%',
        'padding': 2 + "px"
    });
    //Header
    var toxicSpillHeader = document.createElement("div");
    toxicSpillHeader.classList.add("toxicSpillHeader");
    var toxicSpillHeaderLabel = document.createElement("div");
    toxicSpillHeaderLabel.classList.add("toxicSpillHeaderLabel");
    var toxicSpillHeaderLabelText = document.createTextNode("Current Spill Level:");
    toxicSpillHeaderLabel.appendChild(toxicSpillHeaderLabelText);
    var toxicSpillHeaderValue = document.createElement("div");
    toxicSpillHeaderValue.classList.add("toxicSpillHeaderValue");
    var toxicSpillHeaderValueText = document.createTextNode("Archduke");
    toxicSpillHeaderValue.appendChild(toxicSpillHeaderValueText);
    $(toxicSpillHeaderLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillHeaderValue).css({
        "marginLeft": "100px"
    });
    toxicSpillHeader.appendChild(toxicSpillHeaderLabel);
    toxicSpillHeader.appendChild(toxicSpillHeaderValue);
    //Hero
    var toxicSpillHero = document.createElement("div");
    toxicSpillHero.classList.add("toxicSpillHero");
    var toxicSpillHeroLabel = document.createElement("div");
    toxicSpillHeroLabel.classList.add("toxicSpillHeroLabel");
    var toxicSpillHeroLabelText = document.createTextNode("Hero in:");
    toxicSpillHeroLabel.appendChild(toxicSpillHeroLabelText);
    var toxicSpillHeroValue = document.createElement("div");
    toxicSpillHeroValue.classList.add("toxicSpillHeroValue");
    var toxicSpillHeroValueText = document.createTextNode("?");
    toxicSpillHeroValue.appendChild(toxicSpillHeroValueText);
    $(toxicSpillHeroLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillHeroValue).css("marginLeft", "50px");
    toxicSpillHero.appendChild(toxicSpillHeroLabel);
    toxicSpillHero.appendChild(toxicSpillHeroValue);
    //Knight
    var toxicSpillKnight = document.createElement("div");
    toxicSpillKnight.classList.add("toxicSpillKnight");
    var toxicSpillKnightLabel = document.createElement("div");
    toxicSpillKnightLabel.classList.add("toxicSpillKnightLabel");
    var toxicSpillKnightLabelText = document.createTextNode("Knight in:");
    toxicSpillKnightLabel.appendChild(toxicSpillKnightLabelText);
    var toxicSpillKnightValue = document.createElement("div");
    toxicSpillKnightValue.classList.add("toxicSpillKnightValue");
    var toxicSpillKnightValueText = document.createTextNode("?");
    toxicSpillKnightValue.appendChild(toxicSpillKnightValueText);
    $(toxicSpillKnightLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillKnightValue).css("marginLeft", "50px");
    toxicSpillKnight.appendChild(toxicSpillKnightLabel);
    toxicSpillKnight.appendChild(toxicSpillKnightValue);
    //Lord
    var toxicSpillLord = document.createElement("div");
    toxicSpillLord.classList.add("toxicSpillLord");
    var toxicSpillLordLabel = document.createElement("div");
    toxicSpillLordLabel.classList.add("toxicSpillLordLabel");
    var toxicSpillLordLabelText = document.createTextNode("Lord in:");
    toxicSpillLordLabel.appendChild(toxicSpillLordLabelText);
    var toxicSpillLordValue = document.createElement("div");
    toxicSpillLordValue.classList.add("toxicSpillLordValue");
    var toxicSpillLordValueText = document.createTextNode("?");
    toxicSpillLordValue.appendChild(toxicSpillLordValueText);
    $(toxicSpillLordLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillLordValue).css("marginLeft", "50px");
    toxicSpillLord.appendChild(toxicSpillLordLabel);
    toxicSpillLord.appendChild(toxicSpillLordValue);
    //Baron
    var toxicSpillBaron = document.createElement("div");
    toxicSpillBaron.classList.add("toxicSpillBaron");
    var toxicSpillBaronLabel = document.createElement("div");
    toxicSpillBaronLabel.classList.add("toxicSpillBaronLabel");
    var toxicSpillBaronLabelText = document.createTextNode("Baron in:");
    toxicSpillBaronLabel.appendChild(toxicSpillBaronLabelText);
    var toxicSpillBaronValue = document.createElement("div");
    toxicSpillBaronValue.classList.add("toxicSpillBaronValue");
    var toxicSpillBaronValueText = document.createTextNode("?");
    toxicSpillBaronValue.appendChild(toxicSpillBaronValueText);
    $(toxicSpillBaronLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillBaronValue).css("marginLeft", "50px");
    toxicSpillBaron.appendChild(toxicSpillBaronLabel);
    toxicSpillBaron.appendChild(toxicSpillBaronValue);
    //Count
    var toxicSpillCount = document.createElement("div");
    toxicSpillCount.classList.add("toxicSpillCount");
    var toxicSpillCountLabel = document.createElement("div");
    toxicSpillCountLabel.classList.add("toxicSpillCountLabel");
    var toxicSpillCountLabelText = document.createTextNode("Count in:");
    toxicSpillCountLabel.appendChild(toxicSpillCountLabelText);
    var toxicSpillCountValue = document.createElement("div");
    toxicSpillCountValue.classList.add("toxicSpillCountValue");
    var toxicSpillCountValueText = document.createTextNode("?");
    toxicSpillCountValue.appendChild(toxicSpillCountValueText);
    $(toxicSpillCountLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillCountValue).css("marginLeft", "50px");
    toxicSpillCount.appendChild(toxicSpillCountLabel);
    toxicSpillCount.appendChild(toxicSpillCountValue);
    //Duke
    var toxicSpillDuke = document.createElement("div");
    toxicSpillDuke.classList.add("toxicSpillDuke");
    var toxicSpillDukeLabel = document.createElement("div");
    toxicSpillDukeLabel.classList.add("toxicSpillDukeLabel");
    var toxicSpillDukeLabelText = document.createTextNode("Duke in:");
    toxicSpillDukeLabel.appendChild(toxicSpillDukeLabelText);
    var toxicSpillDukeValue = document.createElement("div");
    toxicSpillDukeValue.classList.add("toxicSpillDukeValue");
    var toxicSpillDukeValueText = document.createTextNode("?");
    toxicSpillDukeValue.appendChild(toxicSpillDukeValueText);
    $(toxicSpillDukeLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillDukeValue).css("marginLeft", "50px");
    toxicSpillDuke.appendChild(toxicSpillDukeLabel);
    toxicSpillDuke.appendChild(toxicSpillDukeValue);
    //Grand Duke
    var toxicSpillGrandDuke = document.createElement("div");
    toxicSpillGrandDuke.classList.add("toxicSpillGrandDuke");
    var toxicSpillGrandDukeLabel = document.createElement("div");
    toxicSpillGrandDukeLabel.classList.add("toxicSpillGrandDukeLabel");
    var toxicSpillGrandDukeLabelText = document.createTextNode("Grand Duke in:");
    toxicSpillGrandDukeLabel.appendChild(toxicSpillGrandDukeLabelText);
    var toxicSpillGrandDukeValue = document.createElement("div");
    toxicSpillGrandDukeValue.classList.add("toxicSpillGrandDukeValue");
    var toxicSpillGrandDukeValueText = document.createTextNode("?");
    toxicSpillGrandDukeValue.appendChild(toxicSpillGrandDukeValueText);
    $(toxicSpillGrandDukeLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillGrandDukeValue).css("marginLeft", "50px");
    toxicSpillGrandDuke.appendChild(toxicSpillGrandDukeLabel);
    toxicSpillGrandDuke.appendChild(toxicSpillGrandDukeValue);
    //Archduke
    var toxicSpillArchduke = document.createElement("div");
    toxicSpillArchduke.classList.add("toxicSpillArchduke");
    var toxicSpillArchdukeLabel = document.createElement("div");
    toxicSpillArchdukeLabel.classList.add("toxicSpillArchdukeLabel");
    var toxicSpillArchdukeLabelText = document.createTextNode("Archduke in:");
    toxicSpillArchdukeLabel.appendChild(toxicSpillArchdukeLabelText);
    var toxicSpillArchdukeValue = document.createElement("div");
    toxicSpillArchdukeValue.classList.add("toxicSpillArchdukeValue");
    var toxicSpillArchdukeValueText = document.createTextNode("?");
    toxicSpillArchdukeValue.appendChild(toxicSpillArchdukeValueText);
    $(toxicSpillArchdukeLabel).css({
        'float': 'left',
        'font-weight': 700,
        "marginRight": "5px"
    })
    $(toxicSpillArchdukeValue).css("marginLeft", "50px");
    toxicSpillArchduke.appendChild(toxicSpillArchdukeLabel);
    toxicSpillArchduke.appendChild(toxicSpillArchdukeValue);
    //Append
    toxicSpill.appendChild(toxicSpillHeader);
    toxicSpill.appendChild(toxicSpillHero);
    toxicSpill.appendChild(toxicSpillKnight);
    toxicSpill.appendChild(toxicSpillLord);
    toxicSpill.appendChild(toxicSpillBaron);
    toxicSpill.appendChild(toxicSpillCount);
    toxicSpill.appendChild(toxicSpillDuke);
    toxicSpill.appendChild(toxicSpillGrandDuke);
    toxicSpill.appendChild(toxicSpillArchduke);
    return toxicSpill;
}

function updateToxicSpillTimer() {
    if ($(".toxicSpill").length < 1) return;
    var toxicSpill = $(".toxicSpill");
    $(".toxicSpill").children().show();
    var firstHero = 1503597600;
    var now = todayNow();
    let timePassedHours = (now - firstHero) / 3600;
    var rotaionLenght = 302;
    var rotationsExact = timePassedHours / rotaionLenght;
    var rotationsInteger = Math.floor(rotationsExact);
    var partialrotation = (rotationsExact - rotationsInteger) * rotaionLenght;
    var heroObj = new season(0, 0, 0);
    var knightObj = new season(0, 0, 0);
    var lordObj = new season(0, 0, 0);
    var baronObj = new season(0, 0, 0);
    var countObj = new season(0, 0, 0);
    var dukeObj = new season(0, 0, 0);
    var granddukeObj = new season(0, 0, 0);
    var archdukeObj = new season(0, 0, 0);
    if (partialrotation < 15) {
        //Hero Rising
        $(".toxicSpillHeaderValue").text("HERO-RISING");
        var timeKnight = (15 - partialrotation).toPrecision(4);
        knightObj.hours = Math.floor(timeKnight);
        knightObj.minutes = Math.ceil((timeKnight - knightObj.hours) * 60);
        knightObj = convertToDyHrMn(0, knightObj.hours, knightObj.minutes);
        lordObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        baronObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        dukeObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillDuke"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((knightObj.hours == 0) && (knightObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Knight level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 15 && partialrotation < 31) {
        //Knight Rising
        $(".toxicSpillHeaderValue").text("KNIGHT-RISING");
        var timeLord = (31 - partialrotation).toPrecision(4);
        lordObj.hours = Math.floor(timeLord);
        lordObj.minutes = Math.ceil((timeLord - lordObj.hours) * 60);
        lordObj = convertToDyHrMn(0, lordObj.hours, lordObj.minutes);
        baronObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        dukeObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        granddukeObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours, dukeObj.minutes);
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillArchduke").hide();
        if ((lordObj.hours == 0) && (lordObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Lord level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 31 && partialrotation < 49) {
        //Lord Rising
        $(".toxicSpillHeaderValue").text("LORD-RISING");
        var timeBaron = (49 - partialrotation).toPrecision(4);
        baronObj.hours = Math.floor(timeBaron);
        baronObj.minutes = Math.ceil((timeBaron - baronObj.hours) * 60);
        baronObj = convertToDyHrMn(0, baronObj.hours, baronObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        dukeObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        granddukeObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours, dukeObj.minutes);
        archdukeObj = convertToDyHrMn(granddukeObj.days + 1, granddukeObj.hours, granddukeObj.minutes);
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillArchdukeLabel").text("Archduke in:");
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillArchduke"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
        if ((baronObj.hours == 0) && (baronObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Baron level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 49 && partialrotation < 67) {
        //Baron Rising
        $(".toxicSpillHeaderValue").text("BARON-RISING");
        var timeCount = (67 - partialrotation).toPrecision(4);
        countObj.hours = Math.floor(timeCount);
        countObj.minutes = Math.ceil((timeCount - countObj.hours) * 60);
        countObj = convertToDyHrMn(0, countObj.hours, countObj.minutes);
        dukeObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        granddukeObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours, dukeObj.minutes);
        archdukeObj = convertToDyHrMn(granddukeObj.days + 1, granddukeObj.hours, granddukeObj.minutes);
        countObj = convertToDyHrMn(archdukeObj.days + 3, archdukeObj.hours, archdukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillArchdukeLabel").text("Archduke in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron Falling in:");
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillArchduke"));
        toxicSpill.append($(".toxicSpillBaron"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
        if ((countObj.hours == 0) && (countObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Count level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 67 && partialrotation < 91) {
        //Count Rising
        $(".toxicSpillHeaderValue").text("COUNT-RISING");
        var timeDuke = (91 - partialrotation).toPrecision(4);
        dukeObj.hours = Math.floor(timeDuke);
        dukeObj.minutes = Math.ceil((timeDuke - dukeObj.hours) * 60);
        dukeObj = convertToDyHrMn(0, dukeObj.hours, dukeObj.minutes);
        granddukeObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours, dukeObj.minutes);
        archdukeObj = convertToDyHrMn(granddukeObj.days + 1, granddukeObj.hours, granddukeObj.minutes);
        countObj = convertToDyHrMn(archdukeObj.days + 3, archdukeObj.hours, archdukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillArchdukeLabel").text("Archduke in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count Falling in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillArchduke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
        if ((dukeObj.hours == 0) && (dukeObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Duke level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 91 && partialrotation < 115) {
        //Duke Rising
        $(".toxicSpillHeaderValue").text("DUKE-RISING");
        var timeGrandDuke = (115 - partialrotation).toPrecision(4);
        granddukeObj.hours = Math.floor(timeGrandDuke);
        granddukeObj.minutes = Math.ceil((timeGrandDuke - granddukeObj.hours) * 60);
        granddukeObj = convertToDyHrMn(0, granddukeObj.hours, granddukeObj.minutes);
        archdukeObj = convertToDyHrMn(granddukeObj.days + 1, granddukeObj.hours, granddukeObj.minutes);
        dukeObj = convertToDyHrMn(archdukeObj.days + 2, archdukeObj.hours, archdukeObj.minutes);
        countObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours + 10, dukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillArchdukeLabel").text("Archduke in:");
        $(".toxicSpillDukeLabel").text("Duke Falling in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillArchduke"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
        if ((granddukeObj.hours == 0) && (granddukeObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Grand Duke level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 115 && partialrotation < 139) {
        //Grand Duke Rising
        $(".toxicSpillHeaderValue").text("GD-RISING");
        var timeArchduke = (139 - partialrotation).toPrecision(4);
        archdukeObj.hours = Math.floor(timeArchduke);
        archdukeObj.minutes = Math.ceil((timeArchduke - archdukeObj.hours) * 60);
        archdukeObj = convertToDyHrMn(0, archdukeObj.hours, archdukeObj.minutes);
        granddukeObj = convertToDyHrMn(archdukeObj.days, archdukeObj.hours + 24, archdukeObj.minutes);
        dukeObj = convertToDyHrMn(0, granddukeObj.hours + 24, granddukeObj.minutes);
        countObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours + 10, dukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillArchdukeLabel").text("Archduke in:");
        $(".toxicSpillGrandDukeLabel").text("GD Falling in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        toxicSpill.append($(".toxicSpillArchduke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
        if ((granddukeObj.hours == 0) && (granddukeObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Grand Duke level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 139 && partialrotation < 151) {
        //Archduke Rising
        $(".toxicSpillHeaderValue").text("AD-RISING");
        var timeArchduke = (151 - partialrotation).toPrecision(4);
        archdukeObj.hours = Math.floor(timeArchduke);
        archdukeObj.minutes = Math.ceil((timeArchduke - archdukeObj.hours) * 60);
        archdukeObj = convertToDyHrMn(0, archdukeObj.hours, archdukeObj.minutes);
        granddukeObj = convertToDyHrMn(archdukeObj.days, archdukeObj.hours + 12, archdukeObj.minutes);
        dukeObj = convertToDyHrMn(0, granddukeObj.hours + 24, granddukeObj.minutes);
        countObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours + 10, dukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        $(".toxicSpillArchdukeLabel").text("AD Falling in:");
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        toxicSpill.append($(".toxicSpillArchduke"));
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillLord").hide();
    } else if (partialrotation >= 151 && partialrotation < 163) {
        //Archduke Falling
        $(".toxicSpillHeaderValue").text("AD-FALLING");
        var timeGDuke = (163 - partialrotation).toPrecision(4);
        granddukeObj.hours = Math.floor(timeGDuke);
        granddukeObj.minutes = Math.ceil((timeGDuke - granddukeObj.hours) * 60);
        granddukeObj = convertToDyHrMn(0, granddukeObj.hours, granddukeObj.minutes);
        dukeObj = convertToDyHrMn(0, granddukeObj.hours + 24, granddukeObj.minutes);
        countObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours + 10, dukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        lordObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        $(".toxicSpillGrandDukeLabel").text("Grand Duke in:");
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        toxicSpill.append($(".toxicSpillGrandDuke"));
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillLord"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillKnight").hide();
        $(".toxicSpillArchduke").hide();
        if ((granddukeObj.hours == 0) && (granddukeObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Grand Duke level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 163 && partialrotation < 187) {
        //Grand Duke Falling
        $(".toxicSpillHeaderValue").text("GD-FALLING");
        var timeDuke = (187 - partialrotation).toPrecision(4);
        dukeObj.hours = Math.floor(timeDuke);
        dukeObj.minutes = Math.ceil((timeDuke - dukeObj.hours) * 60);
        dukeObj = convertToDyHrMn(0, dukeObj.hours, dukeObj.minutes);
        countObj = convertToDyHrMn(dukeObj.days + 1, dukeObj.hours + 10, dukeObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        lordObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        knightObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        $(".toxicSpillDukeLabel").text("Duke in:");
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        toxicSpill.append($(".toxicSpillDuke"));
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillKnight"));
        $(".toxicSpillHero").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((dukeObj.hours == 0) && (dukeObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Duke level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 187 && partialrotation < 211) {
        //Duke Falling
        $(".toxicSpillHeaderValue").text("DUKE-FALLING");
        var timeCount = (211 - partialrotation).toPrecision(4);
        countObj.hours = Math.floor(timeCount);
        countObj.minutes = Math.ceil((timeCount - countObj.hours) * 60);
        countObj = convertToDyHrMn(0, countObj.hours, countObj.minutes);
        baronObj = convertToDyHrMn(countObj.days + 1, countObj.hours, countObj.minutes);
        lordObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        knightObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        heroObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillHeroLabel").text("Hero in:");
        toxicSpill.append($(".toxicSpillCount"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillHero"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((countObj.hours == 0) && (countObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Count level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 211 && partialrotation < 235) {
        //Count Falling
        $(".toxicSpillHeaderValue").text("COUNT-FALLING");
        var timeBaron = (235 - partialrotation).toPrecision(4);
        baronObj.hours = Math.floor(timeBaron);
        baronObj.minutes = Math.ceil((timeBaron - baronObj.hours) * 60);
        baronObj = convertToDyHrMn(0, baronObj.hours, baronObj.minutes);
        lordObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        knightObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        heroObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        countObj = convertToDyHrMn(heroObj.days + 3, heroObj.hours + 10, heroObj.minutes);
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillHeroLabel").text("Hero in:");
        $(".toxicSpillCountLabel").text("Count Rising in:");
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillHero"));
        toxicSpill.append($(".toxicSpillCount"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((baronObj.hours == 0) && (baronObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Baron level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 235 && partialrotation < 253) {
        //Baron Falling
        $(".toxicSpillHeaderValue").text("BARON-FALLING");
        var timeLord = (253 - partialrotation).toPrecision(4);
        lordObj.hours = Math.floor(timeLord);
        lordObj.minutes = Math.ceil((timeLord - lordObj.hours) * 60);
        lordObj = convertToDyHrMn(0, lordObj.hours, lordObj.minutes);
        knightObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        heroObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        baronObj = convertToDyHrMn(heroObj.days + 2, heroObj.hours + 16, heroObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron Rising in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillHeroLabel").text("Hero in:");
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillHero"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((lordObj.hours == 0) && (lordObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Lord level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 253 && partialrotation < 271) {
        //Lord Falling
        $(".toxicSpillHeaderValue").text("LORD-FALLING");
        var timeKnight = (271 - partialrotation).toPrecision(4);
        knightObj.hours = Math.floor(timeKnight);
        knightObj.minutes = Math.ceil((timeKnight - knightObj.hours) * 60);
        knightObj = convertToDyHrMn(0, knightObj.hours, knightObj.minutes);
        heroObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        lordObj = convertToDyHrMn(heroObj.days + 1, heroObj.hours + 22, heroObj.minutes);
        baronObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord Rising in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillHeroLabel").text("Hero in:");
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillHero"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((knightObj.hours == 0) && (knightObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Knight level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 271 && partialrotation < 287) {
        //Knight Falling
        $(".toxicSpillHeaderValue").text("KNIGHT-FALLING");
        var timeHero = (287 - partialrotation).toPrecision(4);
        heroObj.hours = Math.floor(timeHero);
        heroObj.minutes = Math.ceil((timeHero - heroObj.hours) * 60);
        heroObj = convertToDyHrMn(0, heroObj.hours, heroObj.minutes);
        knightObj = convertToDyHrMn(heroObj.days + 1, heroObj.hours + 6, heroObj.minutes);
        lordObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        baronObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight Rising in:");
        $(".toxicSpillHeroLabel").text("Hero in:");
        toxicSpill.append($(".toxicSpillHero"));
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
        if ((heroObj.hours == 0) && (heroObj.minutes <= 15) && (localStorage.getItem('RemindSpill') == "Y")) {
            if (confirm('It will be Hero level soon at the toxic spill, travel there now?') == true) {
                travelToSpill();
            }
        }
    } else if (partialrotation >= 287 && partialrotation < 302) {
        //Hero Falling
        $(".toxicSpillHeaderValue").text("HERO-FALLING");
        var timeHero = (302 - partialrotation).toPrecision(4);
        heroObj.hours = Math.floor(timeHero);
        heroObj.minutes = Math.ceil((timeHero - heroObj.hours) * 60);
        heroObj = convertToDyHrMn(0, heroObj.hours, heroObj.minutes);
        knightObj = convertToDyHrMn(heroObj.days, heroObj.hours + 15, heroObj.minutes);
        lordObj = convertToDyHrMn(knightObj.days, knightObj.hours + 16, knightObj.minutes);
        baronObj = convertToDyHrMn(lordObj.days, lordObj.hours + 18, lordObj.minutes);
        countObj = convertToDyHrMn(baronObj.days, baronObj.hours + 18, baronObj.minutes);
        $(".toxicSpillCountLabel").text("Count in:");
        $(".toxicSpillBaronLabel").text("Baron in:");
        $(".toxicSpillLordLabel").text("Lord in:");
        $(".toxicSpillKnightLabel").text("Knight in:");
        $(".toxicSpillHeroLabel").text("Hero Rising in:");
        toxicSpill.append($(".toxicSpillHero"));
        toxicSpill.append($(".toxicSpillKnight"));
        toxicSpill.append($(".toxicSpillLord"));
        toxicSpill.append($(".toxicSpillBaron"));
        toxicSpill.append($(".toxicSpillCount"));
        $(".toxicSpillDuke").hide();
        $(".toxicSpillGrandDuke").hide();
        $(".toxicSpillArchduke").hide();
    } else {
        //WTF are we?
    }
    $(".toxicSpillArchdukeValue").text(archdukeObj.days + "d " + archdukeObj.hours + "h " + archdukeObj.minutes + "m");
    $(".toxicSpillGrandDukeValue").text(granddukeObj.days + "d " + granddukeObj.hours + "h " + granddukeObj.minutes + "m");
    $(".toxicSpillDukeValue").text(dukeObj.days + "d " + dukeObj.hours + "h " + dukeObj.minutes + "m");
    $(".toxicSpillCountValue").text(countObj.days + "d " + countObj.hours + "h " + countObj.minutes + "m");
    $(".toxicSpillBaronValue").text(baronObj.days + "d " + baronObj.hours + "h " + baronObj.minutes + "m");
    $(".toxicSpillLordValue").text(lordObj.days + "d " + lordObj.hours + "h " + lordObj.minutes + "m");
    $(".toxicSpillKnightValue").text(knightObj.days + "d " + knightObj.hours + "h " + knightObj.minutes + "m");
    $(".toxicSpillHeroValue").text(heroObj.days + "d " + heroObj.hours + "h " + heroObj.minutes + "m");
    //https://mhwiki.hitgrab.com/wiki/index.php/Toxic_Spill#Pollution_Levels
}

function spillLevel(days, hours, minutes) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
}

$(document).on('change', '#toxicSpillCb', function() {
    if (this.checked) {
        localStorage.setItem('RemindSpill', "Y")
        this.checked = "Yes";
    } else {
        localStorage.setItem('RemindSpill', "N")
        this.checked = "";
    }
})
//============================================================================================
function todayNow() {
    var today = new Date();
    var todayEpoch = today.getTime() / 1000.0;
    return todayEpoch;
}

function convertToDyHrMn(days, hours, minutes) {
    if (hours >= 24) {
        var daysExact = hours / 24;
        var daysTrunc = Math.floor(daysExact);
        var partialDays = daysExact - daysTrunc;
        hours = Math.floor(partialDays * 24);
        days = daysTrunc + days;
    }
    return {
        days,
        hours,
        minutes
    }
}

function travelToGrove() {
    app.pages.TravelPage.travel("forbidden_grove");
}

function travelToCove() {
    app.pages.TravelPage.travel("balacks_cove");
}

function travelToGarden() {
    app.pages.TravelPage.travel("seasonal_garden");
}

function travelToSpill(destination) {
    app.pages.TravelPage.travel("pollution_outbreak");
}
