const express = require("express")
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
const app = express()

// SETTING VIEW ENGINE
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/client"))

// LOGIN HOME PAGE
app.get("/", (req, res) => {
    res.render(__dirname + "/client/views/login")
})

// LOGIN INITIATION
// PULLED FROM SPOTIFY API AUTH CODE 
var _generateRandomString = function(length) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

var stateKey = 'spotify_auth_state';

var clientId = "c6748a0efd4241779b7ad1694d752079"
var clientSecret = "42bc6d13d4d742b2ae5729832356725f"
var redirectUri = "http://localhost:3000/logged"


app.get('/login', function(req, res) {

  var state = _generateRandomString(16)
  res.cookie(stateKey, state)

  // your application requests authorization
  var scope = 'user-read-private user-read-email'
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    }))
})

// SPOTIFY SEARCH PAGE
app.get("/logged", (req, res) => {
    res.render(__dirname + "/client/views/spotifysearch")
})

app.listen(3000)