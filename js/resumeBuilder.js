// CREATION OF ALL THE VARIABLES WITH RELEVANT INFORMATION

var bio = {
    "name": "Cesar L. Jaitman Labaton",
    "role": "Web Developer",
    "contacts": {
        "mobile": "212-XXX-XXXX",
        "email": "cesarjaitmanlabaton@gmail.com",
        "twitter": "N/A",
        "github": "SwayZak89",
        "location": "New York City"
    },
    "biopic": "images/dogPictures03.jpg",
    "welcomeMessage": "Hello World!",
    "skills": ["HTML", "CSS", "JavaScript", "Java"]
};

var work = {
    "jobs": [{
        "employer": "Your Dog's Best Friend",
        "title": "Manager",
        "dates": "2016 - Present",
        "location": "New York City",
        "description": "A small dog walking company."
    }, {
        "employer": "Priceless Pet Services",
        "title": "Manager",
        "dates": "2011 - 2015",
        "location": "New York City",
        "description": "Daycare"
    }]
};

var education = {
    "schools": [{
        "name": "Marymount Manhattan College",
        "location": "New York City",
        "degree": "Bachelor of Science",
        "majors": ["Accounting"],
        "dates": "2011 - 2014",
        "url": "www.example.com"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "www.udacity.com",
    }, {
        "title": "Linux Command Basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "www.udacity.com",
    }]
};

var projects = {
    "projects": [{
        "title": "JavaScript",
        "dates": "2015",
        "location": "www.udacity.com",
        "description": "Learning the basics of JS.",
        "images": [
            "images/javascriptLogo.png",
            "images/javascriptLogo02.png"
        ]
    }, {
        "title": "Linux Command Basics",
        "dates": "2015",
        "location": "www.udacity.com",
        "description": "Learning the basics of Linux.",
        "images": [
            "images/linux01.jpg",
            "images/linux02.png"
        ]
    }]
};



// APPENDING OF CONTACT INFORMATION TO HEADER.

var data = "%data%";

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

bio.display();



// APPENDING OF WORK EXPERIENCE INFORMATION TO WORK SECTION.

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();



// APPENDING OF PROJECT INFORMATION TO PROJECTS SECTION.

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        for (var i = 0; i < project.images.length; i++) {
            var formattedImages = HTMLprojectImage.replace(data, project.images[i]);
            $(".project-entry:last").append(formattedImages);
        }
    });
};

projects.display();



// APPENDING OF EDUCATION INFORMATION TO EDUCATION SECTION.

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, school.name);
        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        var formatterSchoolDates = HTMLschoolDates.replace(data, school.dates);
        var formatterSchoolLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree + formatterSchoolDates + formatterSchoolLocation);

        for (var i = 0; i < school.majors.length; i++) {
            var formatterSchoolMajor = HTMLschoolMajor.replace(data, school.majors[i]);
            $(".education-entry:last").append(formatterSchoolMajor);
        }
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(online) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace(data, online.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, online.school);
        var formattedOnlineDate = HTMLonlineDates.replace(data, online.dates);
        var formattedOnlineURL = HTMLonlineURL.replace(data, online.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDate + formattedOnlineURL);
    });
};

education.display();



// GOOGLE MAP API

$("#mapDiv").append(googleMap);



// EXTRA SECTIONS FROM THE COURSE

// function inName(name) {
// 	name = bio.name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
// 	return name[0] + " " + name[1];
// }



// INTERNATIONALIZE BUTTON
// PART OF THE CLASS BUT NOT REQUIRED FOR SUBMISSION

// $("#main").append(internationalizeButton);



// TRACKING OF CLICKS ON THE PAGE
// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;
//
// 	logClicks(x,y);
// });
