start:
	docker-compose up

test:
	@echo "Running test for angular app"
	@echo "TODO"
	@echo "Running tests for html parser"
	@echo "TODO"

clean:
	rm -rf angular-app/dist/
	rm -rf angular-app/node_modules/
	rm -rf angular-app/app/bower_components/
	rm -rf html_parser/env/
