# SpaceX-Launches
SpaceX-Launches is an online platform for getting information on recent and upcoming launches of SpaceX.
> Project Link: [flamboyant-shaw-682e77.netlify.app](https://flamboyant-shaw-682e77.netlify.app/)

------------------

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Requirements
- Package manager to install packages [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)
- Installed local [Node.js](https://nodejs.org/) environment

Clone the repo in your environment

```bash
https://github.com/aaabdyrahmanov/SpaceX-Launches
```

## Setup environment variables
Create a `.env` file in the root of the project and insert your key/value pairs in the following format of `KEY=VALUE`:

#### `nano .env`
```bash
SERVER_ADDRESS=https://api.spacexdata.com/v4/launches
HOST=0.0.0.0
PORT=8080
```

## Project Setup
To run this project, install it locally using npm:
```bash
# move into the project folder
cd SpaceX-Launches

# install dependencies
yarn install

# start developing the project
yarn run dev

# build the project
yarn run build
```
------------------
## Technologies
Project created with:
* Nuxt.js version: 2.0.0
* Moment.js version: 2.24.0
* Vuetify version: 2.2.1
------------------
## License
Distributed under the MIT License. See [`LICENSE`](https://github.com/aaabdyrahmanov/SpaceX-Launches/blob/master/LICENSE.md) for more information.
