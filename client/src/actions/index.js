import axios from "axios";

export const SUBMIT_SEARCH = "submit_search";
export const submitSearch = search => async (dispatch) => {
  let response = await axios.post('/searchRepos',{
    search
  });
  dispatch({type:SUBMIT_SEARCH, payload:response.data.result.data})
}

export const GET_TOP_CONTRIB = "get_top_contrib";
export const getTopContrib = (owner,repo) => async (dispatch) => {
  console.log("getTopContrib FIRED");
  console.log(owner,repo);
  let response = await axios.post('/getRepoContributors',{
    owner,
    repo
  });
  dispatch({type:GET_TOP_CONTRIB, payload:response.data.result.data})
}
