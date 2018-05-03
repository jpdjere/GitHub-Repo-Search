const express = require('express');
const router = express.Router();
const octokit = require('@octokit/rest')()

octokit.authenticate({
  type: 'token',
  token: '1ed2c27dab8c3ae3df77028f2e76cde6843b1ff1'
})

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
