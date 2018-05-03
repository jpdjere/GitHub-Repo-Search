const express = require('express');
const router = express.Router();
const octokit = require('@octokit/rest')()

router.get('/searchRepos', async (req,res,next) => {
  let {search} = req.query;
  const result = await octokit.search.repos({q:search,sorts:"stars",order:"desc"})
  res.send({result})
})

router.get('/getRepoContributors', async (req,res,next) => {
  let {owner, repo, page} = req.query;
  const result = await octokit.repos.getContributors({owner,repo, page})
  res.send({result})
})

module.exports = router;
