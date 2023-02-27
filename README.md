# ceramic-node

yarn global add @ceramicnetwork/cli

yarn install

# add private key and did key

cp commands.txt commands 
cp daemon.config.txt daemon.config.json
cp DID.txt DID.key
cp private.txt private.key

rm -rf commands.txt daemon.config.txt DID.txt private.txt

./deamon-setup.sh

./client-setup.sh

