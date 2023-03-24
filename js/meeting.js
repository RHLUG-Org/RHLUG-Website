let url = 'https://raw.githubusercontent.com/RHLUG-Org/RHLUG-Meeting-JSON/master/rest.json';

async function showNextMeeting(){
    /*var meetingsReq = await fetch(url);
    var meetings = await meetingsReq.json();*/
    var meetings = [{
        time: "7:00pm - 9:00pm",
        date: "3/20/2023",
        location: "Olin 267"
    },{
        time: "7:00pm - 9:00pm",
        date: "3/27/2023",
        location: "Olin 267"
    },{
        time: "7:00pm - 9:00pm",
        date: "4/3/2023",
        location: "Olin 267"
    },{
        time: "7:00pm - 9:00pm",
        date: "4/10/2023",
        location: "Olin 267"
    }];
    for(i = 0; i < meetings.length; i++){
        var meetingDate = new Date(meetings[i].date);
        if(meetingDate > Date.now()){
            document.getElementById("meeting").innerText = `Next Meeting: ${meetingsDate.toLocaleDateString(undefined)} from ${meetings[i].time}`;
            document.getElementById("meeting_location").innerText = meetings[i].location;
            return;
        }
    }
    //If the function hasn't returned yet, then there are no meetings left that haven't expired.
    document.getElementById("meetingRow").style.display = 'none';
}
