# VALORANT AGENT HUB

### Created by: INST377 Group 38 - Andrew Cudd, Gabriel Pasion, Kenneth Ho, Nicholas Bach

Valorant Agent Hub is an interactive site for Valorant players to explore and study the game's agents.
Users can see the stats and abilities of each agent, as well as explore our "Workshop" page to create your own agent!
By simply filling out the form, you too can make your dreams come to life with your very own Valorant agent!
Valorant Agent Hub is mainly targetted for **PC/laptop** browsers, similar to the game itself.
_For legal reasons, this website is not sponsored not affiliated by/with Riot Games. Creating your own character in the Workshop does NOT create a virtual character in the game._

Link to [Developer Manual](#developer-manual).

## DEVELOPER MANUAL

Welcome developers! Thank you for taking on this task. Here, you will find quite a lot of useful information to manage this site for users to enjoy!
The whole site uses HTMl, JavaScript, and CSS, so make sure you're studying those languages!
Prior to managing this site, you will need the following:

### APPLICATIONS AND TOOLS

- GitHub
- Supabase
- Vercel
- Insomnia
- [Valorant Agent API](https://valorant-api.com/v1/agents)
- [Valorant Agent Hub Link](https://inst377valorantproject.vercel.app/home.html)

### HOW TO USE/INSTALL

**SUPABASE (starting off)**
To access [Supabase](https://supabase.com/), create an account and head to the [Dashboard](https://supabase.com/dashboard/projects). Create a new organization, create a new project for said organization, and head to **Table Editor** on the left. Create a new table and fill it out with columns that correspond with the Valorant API.
**SUPABASE (managing)**
Managing the Supabase database is very simple. Naming columns similar to the API makes your job easier. Any ID after 25 is an agent created by a user, as the first 25 are Valorant agents already in the game. Due to the ID being a primary key, there is no need to ID every single agent, as it will linearly increase in every iteration and creation.
The Supabase database is used to store rows of data regarding the current and newly created Valorant agents dedicated to the Workshop page. All inputs are sent to the database in real-time.

**VERCEL**
Vercel was used to connect the GitHub repository with a live website. Vercel made it so that any pushes to the project were sent to the website automatically. This makes real-time updates more efficient.

### APIs USED

Valorant Agent API (in functions.html & agents.html)
Youtube Data API v3 (in agents.html)

### KNOWN BUGS

**MOBILE INCOMPATIBILITY**
Currently, the website is NOT mobile-compatible.

**WORKSHOP SUPABASE DISCONNECTION**
For some users using the Workshop section, the abilities, grenade, and ultimate names and descriptions are not sent to the Supabase database and are set to NULL. Clearing caches and using different accounts could mediate this issue, but does not fully solve it.

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

### MISC

No tests have been written for this application. Minor issues have been tackled via console.log troubleshooting
