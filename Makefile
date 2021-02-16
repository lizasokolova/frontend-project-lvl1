install:
	npm install

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

.PHONY: test
