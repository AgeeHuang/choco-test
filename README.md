

## development environment
### Node v6.14.1
### Npm v5.6.0

## Get Started
### Get code
```bash
git clone .
```

### After clone
```bash
cd code-challenge
npm install
```

### Server side
- .env
	PORT: server-side Port.
	MONGO_URI: Connecting Database(I insert drama-list on mLab.)

- run dev server
```bash
npm run dev-server
```

- use Postman
--	Send GET request: http://localhost:3001/api/list `get all drama`
--	Send GET request: http://localhost:3001/api/list?name={keyword} `get all drama which name is match keyword `.

### Client
- run dev client
```bash
npm run dev-client
```

- open browers
-- visit localhost:9000




