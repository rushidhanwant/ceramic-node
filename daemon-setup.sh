rm -rf ~/.ceramic 
kill -9 $(lsof -ti:7007,5001,5011)
CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' npx @ceramicnetwork/cli daemon --config ./daemon.config.json 