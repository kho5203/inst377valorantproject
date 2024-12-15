[WILL DELETE THIS LINE PRIOR TO SUBMISSION, BUT TEAM, FEEL FREE TO ADD ANYTHING TO THIS README FILE]

# VALORANT AGENT HUB

### Created by: INST377 Group 38 - Andrew Cudd, Gabriel Pasion, Kenneth Ho, Nicholas Bach

Valorant Agent Hub is an interactive site for Valorant players to explore and study the game's agents.
Users can see the stats and abilities of each agent, as well as explore our "Workshop" page to create your own agent!
By simply filling out the form, you too can make your dreams come to life with your very own Valorant agent!
Valorant Agent Hub is mainly targetted for **PC/laptop** browsers, similar to the game itself.
_For legal reasons, this website is not sponsored not affiliated by/with Riot Games. Creating your own character in the Workshop does NOT create a virtual character in the game._

Link to Developer Manual: [Link Text](#developer-manual).

## DEVELOPER MANUAL

Welcome developers! Thank you for taking on this task. Here, you will find quite a lot of useful information to manage this site for users to enjoy!
The whole site uses HTMl, JavaScript, and CSS, so make sure you're studying those languages!
Prior to managing this site, you will need the following:

### APPLICATIONS AND TOOLS

- GitHub
- Supabase
- Vercel
- Insomnia
- [Valorant Agent API](https://valorant-api.com/v1/agents).
- [Valorant Agent Hub Link](https://inst377valorantproject.vercel.app/home.html)

### HOW TO USE/INSTALL

blah blah blah

### APIs USED

Valorant Agent API (in functions.html & agents.html)
Youtube Data API v3 (in agents.html)


### KNOWN BUGS

blah blah blah

### ROAD-MAP FOR DEVELOPMENT

Disclaimer: Previous developments were made on a separate repository. A new repository was made to connect with Vercel. Because of this,
some previous versions of our app are not seen in this repository. The previous repository can be seen here: https://github.com/gpasion/inst377finalproject

Version 1 (Front-End):
- created bare-bones structure of the home, about, and agent page
- 
Version 2 (Front-End):
- got rid of a bug that was displaying Sova twice on the functions.html page
Current issues with the agents.html page
- swiper for abilities carousel is not initializing properly 
Version 3 (Front-End):
- created separate files for CSS and JS for each page
- tried a different carousel API but still not initializing properly
- added better styling through a JS library for scrolling down each section in the home page
Version 4 (Front-End):
- scrapped the carousel API usage and used card icons for each ability
- also included YouTube Data API to show tutorials on each agent
- improved and uniformed styling
- ensured global nav bar is uniform throughout all pages
- Added agent workshop page that connects to back-end database

Future Versions:
Adding a weapons details page
- includes all weapons in the buy screen

Adding a maps details page
- includes all valorant maps
- the ones in current rotation
- images of each map

Adding a statistics page
- user-lookup stats
- regional based leaderboards
- agent pick rates/win rates/etc.


Developer Manual (bottom half of your README.md) - 15pts
The audience of this document is future developers who will take over your system.
They know technical terms and have general knowledge about web applications, but do not have knowledge about your system design.
You need to provide a technical document so that future developers can start setting up the application on their local machines, and keep working on the system development after you leave the team.

Your Developer Manual covers:
How to install your application and all dependencies

How to run your application on a server

How to run any tests you have written for your software

No tests have been written for this application. Minor issues have been tackled via console.log troubleshooting

The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do

A clear set of expectations around known bugs and a road-map for future development.

- No known bugs!
Future Development:
- have a gif for each ability that preview what they do
- adding a stat tracker with other third-party APIs 
    - user lookup stats
    - regional-based leaderboards
    - agent-pick rates

Documentation needs to be written in Markdown (MD) files, nicely formatted
Documentation should be included in each team’s final code submission.
Documentation should be saved in your main project directory under "docs"


