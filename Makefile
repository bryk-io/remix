.PHONY: *
.DEFAULT_GOAL:=help

help:
	@echo "Commands available"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /' | sort

## build: Build the application
build:
	npm run build

## dev: Start the development server
dev:
	npm run dev

## lint: Check code style
lint:
	npm run lint
	npm run typecheck

## format: Format code
format:
	npm run format

## e2e: Run end-to-end tests
e2e:
	npm run e2e

## e2e-ui: Run end-to-end tests using a GUI
e2e-ui:
	npm run e2e:ui

## e2e-report: Show the latest end-to-end tests report
e2e-report:
	npx playwright show-report

## test: Run tests
test:
	npm run test

## test-ui: Run tests using a GUI
test-ui:
	npm run test:ui

## start: Build and start the (production) application
start:
	npm run start
