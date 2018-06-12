install:
	npm install

start:
	npm run gulp dev

build:
	NODE_ENV=production npm run gulp prod

webpack_bundle:
	NODE_ENV=production npm run webpack

lint:
	npm run eslint --silent src
