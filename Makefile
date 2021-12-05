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
