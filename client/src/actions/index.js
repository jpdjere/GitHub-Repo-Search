import axios from "axios";

export const SUBMIT_SEARCH = "submit_search";
export const submitSearch = search => async (dispatch) => {
  dispatch({type:SUBMIT_SEARCH, payload:search})
}

export const GET_REPOS = "get_repos";
export const getRepos = search => async (dispatch) => {
  let response = await axios.get(`/searchRepos?search=${search}`);
  dispatch({type:GET_REPOS, payload:response.data.result.data})
  dispatch({type:HIDE_LOADER, payload:{loader:false}})
}

/* ------------------- TOP CONTRIBS ---------------------- */
export const GET_TOP_CONTRIB = "get_top_contrib";
export const getTopContrib = (owner,repo,page) => async (dispatch) => {
  try {
    let response = await axios.get(
      `/getRepoContributors?owner=${owner}&repo=${repo}&page=${page}`
    );
    dispatch({type:GET_TOP_CONTRIB, payload:response.data.result.data})
  } catch (e) {
    console.log(e);
  }
}

export const REMOVE_TOP_CONTRIB = "remove_top_contrib";
export const removeTopContrib = () => async (dispatch) => {
  dispatch({type:REMOVE_TOP_CONTRIB, payload:null})
}
/* ------------------------------------------------------ */


/* --------------------------- MISC ---------------------- */
export const SHOW_LOADER = "show_loader";
export const showLoader = () => async (dispatch) => {
  dispatch({type:SHOW_LOADER, payload:{loader:true}})
}
export const HIDE_LOADER = "hide_loader";
export const hideLoader = () => async (dispatch) => {
  dispatch({type:HIDE_LOADER, payload:{loader:false}})
}
