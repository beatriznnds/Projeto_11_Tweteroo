import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let user = {username: "", avatar: ""};
let tweets = [];


app.post('/sign-up', (req, res) => {
    const infoUser = req.body;
    user = {username: infoUser.username, avatar: infoUser.avatar};
    res.send('OK');
});


app.post('/tweets', (req, res) => {
    const userTweet = req.body;
    const newTweet = {username: userTweet.username, avatar: user.avatar, tweet: userTweet.tweet};
    tweets.push(newTweet);
    res.send('OK');
});

app.get('/tweets', (req, res) => {
    const latestTweets = tweets.reverse()
    res.send(latestTweets.slice(0, 10));
});

app.listen(5000);