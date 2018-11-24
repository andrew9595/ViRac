# ViRAC (Virtual Riding and Cycling)
![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/logo.png)

VIRAC is a Virtual Reality (VR) system that guides Cyclists, Personal Mobility Device (PMD) and Road Users on the latest rules that have been implemented by Singapore Cycling Task Force (SCTF). This system will allow users to experience what it is like being a bicycle/PMD user in Singapore. It will also show the cyclists how to prepare before and during a ride on the PMD/bicycle, at the Park Connector Network (PCN), Pedestrian Walkways and even on Roads. It will also show the users how to properly park their bicycle/PMDs when the user comes to a stop. This system will also allow SCTF members to adjust the number of vehicles, pedestrians and even the environment of the system. After adjusting the settings of the system, SCTF members are also allowed to play on the ViRAC system and test out the environments of the system. Normal users, that is to say non-SCTF members, will not have the ability to
adjust the environment and settings of the system as this is only available for the SCTF members.

## Glossary
  - ViRAC - Virtual Riding and Cycling
  - VR - Virtual Reality
  - SCTF - Singapore Cycling Task Force
  - PMD - Personal Mobility Device


## Getting Started 
Download the repository as zip file at -
```sh
https://github.com/andrew9595/ViRac/ 
```
or clone the repository -   
```sh
git clone https://github.com/andrew9595/ViRac.git
```

## Demo
https://www.youtube.com/watch?v=fhNdONhzVBY

### Prerequisites
ViRac is very simple VR experience to use. To begin, ensure you have a local web server solution to run on such as MAMP or XAMPP together with a web browser, preferably Chrome or Firefox. You will also need a mobile phone running android 7.0 or later for testing the environment.
Download MAMP or XAMPP:
```sh
https://www.apachefriends.org/download.html
```

### Installing
##### XAMPP
In order to run the XAMPP web server on your client
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
The features revolves around the user travelling through a neighborhood in Singapore within the traffic regulations stipulated by Singapore's Land Transport Authority. Users will also have the opportunity to learn about the dos and don'ts while travelling on different routes. 

### SCTF Menu
Users will be greeted with the ViRac's main menu upon launching the game.

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/main.png)

### Designer Interface
SCTF members will have the ability to change the environment and add in more objects to increase the difficulty.

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/designer.png)

### Tutorial
Users will be able to learn on different aspects of the game such as movements, camera controls and object interactions.

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/tutorial.png)

### Achievements
The user can hover the cursor over the "Show Achievement" button and a list of Achievements will appear. If an achievement is shaded out, it has not been achieved, and if it is in full colour, it has been attained. Hovering the cursor over an unlocked achievement will show the prerequisites required to unlock it. (e.g. Hovering over an achievement may show information such as "You have finished a tutorial.")

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/achievements.png)

### Pause Game
  - User can pause the game while in progress.
  - User can resume the game when the game is in paused state.
  - User can quit the game when the game is in paused state.

### Riding on Different Routes
Users will be able to ride a pre-selected bicycle or PMD by selecting different routes such as road, PCN and walkway. Each route will present the user with different scenarios.

| Route   | Scenarios                                                                                 |
|---------|-------------------------------------------------------------------------------------------|
| Road    | - Pedestrian Crossing, Vehicle Breakdown, Traffic light rules, Checking blind spots |
| PCN     | - Pedestrian Crossing, Road Crossing, Checking blind spots                            |
| Walkway |  - Pedestrian Crossing, Avoiding pedestrians, Checking blind spots                   |

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/levels.png)

### Additional Knowledge
User will also have an opportunity to learn about the rules to follow while proceeding on the road via pop quizzes.

![alt text](https://github.com/andrew9595/ViRac/blob/master/Screenshots/quiz.png)


## Built With
* [A-frame](https://github.com/aframevr/aframe) - web framework for VR
* Javascript and HTML

## Authors
* **Htet Myet Myo Thaw (1702196)**
* **Azman Salleh (1700955)**
* **Samuel Toh Yao Rong (1700604)**
* **Koh Zhi Yao (1700984)**
* **Cheryl Ng (1702422)**
* **Lee Yao En (1700178)**

## Versioning
Please refer to our [Release](https://github.com/andrew9595/ViRac/releases) page to find out more.


## FAQ

#### Is this a single player experience?
Yes

#### What's the recommmended browser to run ViRac?
Preferably Google Chrome or Mozilla Firefox

#### Do I exclusively need a VR headset to play ViRac
Nope! We do encourage users to immerse themselves in the VR experience through the use of VR peripherals such as Google Cardboard

License
----

SIT ICT2X01 Team 13 
