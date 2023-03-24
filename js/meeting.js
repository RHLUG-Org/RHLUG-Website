let url = 'https://raw.githubusercontent.com/RHLUG-Org/RHLUG-Meeting-JSON/master/rest.json';

async function showNextMeeting(){
    var meetingsReq = await fetch(url);
    var meetings = await meetingsReq.json();
    for(i = 0; i < meetings.length; i++){
        var meetingDate = new Date(meetings[i].date);
        if(meetingDate > Date.now()){
            document.getElementById("meeting").innerText = `Next Meeting: ${meetingDate.toLocaleDateString(undefined)} from ${meetings[i].time}`;
            document.getElementById("meeting_location").innerText = meetings[i].location;
            return;
        }
    }
    //If the function hasn't returned yet, then there are no meetings left that haven't expired.
    document.getElementById("meetingRow").style.display = 'none';
}

showNextMeeting();
