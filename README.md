

## development environment
#### Node v6.14.1
#### Npm v5.6.0

## Get Started
### Get code
```bash
git clone https://github.com/AgeeHuang/choco-test.git
```

### After clone
```bash
cd choco-test
npm install
```

## Server side
- .env
    -	PORT: server-side Port.
    -	MONGO_URI: Connecting Database(I insert drama-list on mLab.)

- run dev server
```bash
npm run dev-server
```

- use Postman
    -	Send GET request: http://localhost:3001/api/list `get all drama`
    -	Send GET request: http://localhost:3001/api/list?name={keyword} `get all drama which name is match keyword `.

## Client side
- run dev client
```bash
npm run dev-client
```
- visit
    -	http://localhost:9000




