.PHONY: build-dev
build-development: ## Build the development docker image.
	docker compose -f docker/development/compose.yaml build

.PHONY: start-dev
start-development: ## Start the development docker container.
	docker compose -f docker/development/compose.yaml up -d

.PHONY: stop-dev
stop-development: ## Stop the development docker container.
	docker compose -f docker/development/compose.yaml down

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	docker compose -f docker/staging/compose.yaml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/compose.yaml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/compose.yaml down
  
.PHONY: build-prod
build-production: ## Build the production docker image.
	docker compose -f docker/production/compose.yaml build

.PHONY: start-prod
start-production: ## Start the production docker container.
	docker compose -f docker/production/compose.yaml up -d

.PHONY: stop-prod
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/compose.yaml down