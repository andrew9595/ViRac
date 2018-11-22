# ViRAC (Virtual Riding and Cycling)
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/menu.jpg)
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

VIRAC is a Virtual Reality (VR) system that guides Cyclists, Personal Mobility Device (PMD) and Road. Users on the latest rules that have been implemented by Singapore Cycling Task Force (SCTF). This system will allow users to experience what it is like being a bicycle/PMD user in Singapore. It will also show the cyclists how to prepare before and during a ride on the PMD/bicycle, at the Park Connector Network (PCN), Pedestrian Walkways and even on Roads. It will also show the users how to properly park their bicycle/PMDs when the user comes to a stop. This system will also allow SCTF members to adjust the number of vehicles, pedestrians and even the environment of the system . After adjusting the settings of the system, SCTF members are also allowed to play on the ViRAC system and test out the environment of the system. Normal users, that is to say non-SCTF members, will not have the ability to
adjust the environment and settings of the system as this is only available for the SCTF members.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

## Getting Started 
Download the repository as zip file at -
```sh
https://github.com/andrew9595/ViRac/ 
```
or clone the repository -   
```sh
git clone https://github.com/azmansalleh/team13.git
```

### Prerequisites
ViRac is very simple VR experience to use. Ensure you have a local web server solution to run on such as MAMP or XAMPP together with a web browser, preferably Chrome or Firefox. You will also need a mobile phone running android 7.0 and later for testing the environment.
Download MAMP or XAMPP:
```sh
https://www.apachefriends.org/download.html
```

### Installing
##### XAMPP
In order to run on the XAMPP web server on your client
1. Run your XAMPP control panel
2. Start the Apache module on your panel and ensure the port is running
3. Unzip the repo and copy it over to the htdocs folder found in your **xampp** folder
3. Open up your browser and enter the following URL: 
```sh
localhost/virac
```

##### MAMP
In order to run on the MAMP web server on your client
1. Run your MAMP control panel
2. Start the servers on your panel and ensure the servers are green and running.
3. Unzip the repo and copy it over to the htdocs folder found in your **mamp** folder
3. Open up your browser and enter the following URL: 
```sh
localhost:8888/virac
```

## Features
The features revolve around the user travelling around a Singapore neighborhood within the rules of traffic regulations by Singapore Land Transport Authority. Users will also have the opportunity to learn about the dos and don'ts while travelling on different routes. 

### SCTF Menu
SCTF members will have the ability to change the environment and add in more objects to increase the difficulty.
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/designer.jpg)

### Tutorial
Users will be able to learn on different aspects of the game such as movements, camera controls and object interactions.
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/tutorial.jpg)

### Achievements
The user can hover the cursor over the "Show Achievement" button and list of Achievements will appear. If an achievement is shaded out, it has not been achieved, and if it is in full colour, it has been achieved. Hovering the cursor over an unlocked achievement will show the prerequisites required to unlock it. (e.g. Hovering over an achievement may show information such as "You have finished a tutorial.")
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/tutorial.jpg)

### Pause Game
  - User can pause the game while in progress.
  - User can resume the game when the game is in paused state.

### Riding on Different Routes
Users will be able to ride a pre-selected bicycle or pmd by selecting different routes such as road, PCN and walkway. Each route will present the user with different scenarios.

	Route - Road
	Scenario - Pedestrain Crossing, Vehicle Breakdown, Traffic light rules, Checking blind spots
	
	Route - PCN
	Scenario - Pedestrain Crossing, Road Crossing, Checking blind spots
	
	Route - Walkway
	Scenario - Avoiding Pedestrain, Checking blind spots, Pedestrain Crossing
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/level.png)

### Additional Knowledge
User will also have an opportunity to learn about the rules to follow on the road via pop quizzes.
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/quiz.png)

## Deployment
ViRac is very simple to use. Kindly place the root folder onto any server eg. localhost and start your server.

## Built With
* [A-frame](https://github.com/aframevr/aframe) - web framework for VR
* Javascript and HTML

## Authors
* **Htet Myet Myo Thaw(1702196)**
*
*
*
*
*

## Todos

 - Write MORE Tests
 - Add Night Mode

License
----

SIT Team 13 
