install:
	npm install
	npm install -D

lint:
	npx htmlhint ./src/*.html

lint+fix:
	npx htmlhint ./src/*.html

deploy:
	npx surge ./src/ botirklayout2.surge.sh

chmod:
	sudo chmod -R 775 .

serve:
	npx gulp

build:
	npx sass ./src/scss/index.scss ./src/css/index.css
	npx sass ./src/scss/artist/index.scss ./src/css/artist.css

