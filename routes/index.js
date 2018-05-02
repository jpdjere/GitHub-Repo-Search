const express = require('express');
const router = express.Router();
const octokit = require('@octokit/rest')()

router.get('/searchRepos', async (req,res,next) => {
  let {search} = req.query;
  const result = await octokit.search.repos({q:search,sorts:"stars",order:"desc"})
  res.send({result})
})

router.post('/searchRepos', async (req,res,next) => {
  let {search} = req.body;
  const result = await octokit.search.repos({q:search,sorts:"stars",order:"desc"})
  res.send({result})
})

router.post('/getRepoContributors', async (req,res,next) => {
  let {owner, repo} = req.body;
  const result = await octokit.repos.getContributors({owner,repo})
  res.send({result})
})

module.exports = router;
