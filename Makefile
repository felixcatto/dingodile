install:
	npm install

start:
	npm run gulp dev

webpack_bundle:
	npm run gulp bundleClientJs

lint:
	npm run eslint --silent src
