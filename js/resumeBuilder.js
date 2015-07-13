var bio = {
	"name" : "Stein-Terje Dale",
	"role" : "Web student",
	"welcomeMessage" : "Welcome to my resume site. Here is some information about me, and what i have done.",
	"contacts" : {
		"mobile" : "+12 12345678",
		"email" : "steintdale@gmail.com",
		"github" : "Lofthur",
		"twitter" : "@steintdale",
		"location" : "Kristiansand"
	},
	"skills" : ["Good organiser", "Like to learn", "Good people skills", "Web student"],
	"bioPicture" : "images/fry_small.jpg",

	display : function() {
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedRole);

		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		$('#header').prepend(formattedName);

		var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPicture);
		$('#header').append(formattedPicture);

		var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').append(formattedMessage);

		$('#header').append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkill);
			}
		
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$('#topContacts, #footerContacts').append(formattedMobile);
		
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$('#topContacts, #footerContacts').append(formattedEmail);

		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$('#topContacts, #footerContacts').append(formattedTwitter);

		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		$('#topContacts, #footerContacts').append(formattedGithub);

		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts, #footerContacts').append(formattedLocation);
	}
};

var education = {
	"schools" : [
		{
			"name" : "HiBu",
			"location" : "Kongsberg",
			"degree" : "Almost BcH",
			"majors" :["Computer science"],
			"dates" : 1998,
			"url" : "http://www.hbv.no"
		},

		{
			"name" : "AKHS",
			"location" : "Oslo",
			"degree" : "BcH",
			"majors" : ["Acupunture"],
			"dates" : 2011,
			"url" : "http://www.campuschristiania.no"
		},

		{
			"name" : "HBV",
			"location" : "Kongsberg",
			"degree" : "Finish BcH",
			"majors" : ["Computer science"],
			"dates" : 2016,
			"url" : "http://www.hbv.no"
		}
		
	],

	"onlineCourses" : [
		{
			"title" : "Front End Development Nano Degree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		}
	],

	display : function() {
		for(var i = 0; i < education.schools.length; i++) {
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
			$('.education-entry:last').append(formattedSchoolName);

			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			$('.education-entry:last').append(formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
			$('.education-entry:last').append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
			$('.education-entry:last').append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
			$('.education-entry:last').append(formattedSchoolMajor);
		}

		$('.education-entry:last').append(HTMLonlineClasses);

		for(var i = 0; i < education.onlineCourses.length; i++) {
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
			$('.education-entry:last').append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
			$('.education-entry:last').append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
			$('.education-entry:last').append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
			$('.education-entry:last').append(formattedOnlineURL);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "June 2015",
			"descriptions" : "Make a portfolio, that will contain all of my future projects.",
			"images" : "images/portfolio_small.jpg"
		},

		{
			"title" : "Project 2",
			"dates" : "July 2015",
			"descriptions" : "Make a resyme",
			"images" : "images/resume_small.jpg"
		}
	],

	display : function() {
		for(var i = 0; i < projects.projects.length; i++) {
			$('#projects').append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
			$('.project-entry:last').append(formattedProjectTitle);

			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
			$('.project-entry:last').append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].descriptions);
			$('.project-entry:last').append(formattedDescription);

			var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
			$('.project-entry:last').append(formattedImage);
		}
	}
};

var work = {

	jobs : [
		{
			"employer" : "Cafe pi",
			"title" : "Waiter",
			"location" : "Kongsberg",
			"dates" : "1999 - 2002",
			"description" : "Worked part time as a waiter beside school"
		},

		{
			"employer" : "Snæksen",
			"title" : "Manager",
			"location" : "Kongsberg",
			"dates" : "2002 - 2003",
			"description" : "Was head manager of a kiosk in Kongsberg"	
		},

		{
			"employer" : "Velvet",
			"title" : "Waiter",
			"location" : "Kongsberg",
			"dates" : "2003 - 2004",
			"description" : "Worked as a waiter in a large club/resturant"
		},

		{
			"employer" : "Color Line",
			"title" : "Waiter",
			"location" : "Oslo",
			"dates" : "2004 - present",
			"description" : "Work as a waiter on a ship"
		}
	],

	display : function() {
		var formatEmployee;
		var formatTitle;
		var formatEmployerTitle;
		var formatLocation;
		var formatDate;
		var formatDescription;

		for(var i = 0; i < work.jobs.length; i++) {
			$('#workExperience').append(HTMLworkStart);
			formatEmployee = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
			formatTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
			formatEmployerTitle = formatEmployee + formatTitle;
			formatLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
			formatDate = HTMLworkDates.replace('%data%', work.jobs[i].dates);
			formatDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
			$('.work-entry:last').append(formatEmployerTitle, formatLocation, formatDate, formatDescription);
		}
	}
};

function inName() {
	var names = bio.name.split(' ');
	names[1] = names[1].toUpperCase();
	return names[0] + ' ' + names[1];
}

bio.display();
work.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);

$(document).click(function(loc) {
	var xClick = loc.pageX;
	var yClick = loc.pageY;

	console.log(xClick, yClick);
});

$('#mapDiv').append(googleMap);