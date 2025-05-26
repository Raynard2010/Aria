require('dotenv').config();
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const port = 3050;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URL
});

app.get('/login',(req,res)=>{
    const scopes = ['user-read-private','user-read-email','user-read-playback-state','user-modify-playback-state']
    res.redirect(spotifyApi.createAuthorizeURL(scopes))
})

app.get('/callback',(req,res)=>{
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if(error){
        console.error('Error:',error);
        res.send(`Error: ${error}`);
        return;
    }

    spotifyAPi.authorizationCodeGrant(code).then(data=>{
        const accessToken = data.body['access_token'];
        const refreshToken = data.body['refresh_token'];
        const expiresIn = data.body['expires_in'];


        spotifyAPi.setAccessToken(accessToken);
        spotifyAPi.setRefreshToken(refreshToken);
        
        console.log(accessToken,refreshToken);
        res.send('Success!');

        setInterval(async()=>{
            const data = await spotifyAPi.refreshAccessToken();
            const accessTokenRefreshed = data.body['access_token']
            spotifyAPi.setAccessToken(accessTokenRefreshed);

        },expiresIn/2*1000);
    }).catch(error=>{
        console.error('Error:',error);
        res.send('Error getting token');
    });
});

app.get('/search',(req,res)=>{
    const {q} = req.query;
    spotifyAPi.searchTracks(q).then(searchData=>{
        const trackUri = searchData.body.tracks.item[0].uri;
        res.send({uri:trackUri});
    }).catch(err=>{
        res.send(`Error Searching ${err}`);
    });
})

app.get('/play',(req,res)=>{
    const {uri} = req.query;
    spotifyAPi.play({uris:[uri]}).then(()=>{
        res.send('playback started');
    }).catch(err=>{
        res.send(`Error playing ${err}`);
    });
});

app.listen(port,()=>{
    console.log(`Listening at https://localhost:${port}`)   
})
    
