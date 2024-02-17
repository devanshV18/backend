require('dotenv').config()
const express = require('express')

// import express from "express"
const app = express()
const port = 3000

const githubData = {
    "login": "devanshV18",
    "id": 143462246,
    "node_id": "U_kgDOCI0PZg",
    "avatar_url": "https://avatars.githubusercontent.com/u/143462246?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/devanshV18",
    "html_url": "https://github.com/devanshV18",
    "followers_url": "https://api.github.com/users/devanshV18/followers",
    "following_url": "https://api.github.com/users/devanshV18/following{/other_user}",
    "gists_url": "https://api.github.com/users/devanshV18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/devanshV18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/devanshV18/subscriptions",
    "organizations_url": "https://api.github.com/users/devanshV18/orgs",
    "repos_url": "https://api.github.com/users/devanshV18/repos",
    "events_url": "https://api.github.com/users/devanshV18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/devanshV18/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Devansh Verma",
    "company": null,
    "blog": "",
    "location": "Chennai, India",
    "email": null,
    "hireable": null,
    "bio": "Computer Science Enthusiast. learning new technologies and building responsive , scalable and collaborative front end and server side projects.",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-28T23:58:52Z",
    "updated_at": "2024-01-27T21:15:30Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('DevanshVer27561')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login on my app</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>SDE 1</h2>')
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})