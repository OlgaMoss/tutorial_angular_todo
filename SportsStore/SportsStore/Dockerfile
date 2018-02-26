FROM node:6.11.4

RUN mkdir -p /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore

COPY dist /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore/src/app

COPY authMiddleware.js /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore
COPY data.js /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore
COPY deploy-server.js /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore
COPY package.json /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore

WORKDIR /Users/chanta/myGitHub/tutorial_angular_todo/SportsStore/SportsStore

RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD [ "npm", "start" ]