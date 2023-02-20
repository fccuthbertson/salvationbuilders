.PHONY: build
build:
	@cd rust-server && cargo build

.PHONY: build-r
build-r:
	@cd rust-server && cargo build -r

.PHONY: run
run:
	@cd rust-server && cargo run