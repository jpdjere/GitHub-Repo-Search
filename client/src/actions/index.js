import axios from "axios";

export const SUBMIT_SEARCH = "submit_search";
export const submitSearch = search => async (dispatch) => {
  console.log("FIRED");
  console.log(search);
  let response = await axios.post('/searchRepos',{
    search
  });
  dispatch({type:SUBMIT_SEARCH, payload:response.data})
}
