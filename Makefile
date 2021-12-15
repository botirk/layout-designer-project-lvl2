install:
	npm install

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
	npx sass --no-source-map ./src/scss/index.scss ./src/css/index.css &
	npx sass --no-source-map ./src/scss/artist/index.scss ./src/css/artist.css

