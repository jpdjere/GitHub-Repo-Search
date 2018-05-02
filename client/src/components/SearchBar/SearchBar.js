import React from "react";
import './SearchBar.css';
import { connect } from "react-redux";
import { submitSearch, showLoader} from "../../actions"
import { Field, reduxForm } from 'redux-form';
import FA from "react-fontawesome";


const validate = values => {
  const errors = {}
  if (!values.searchTerm) {
    errors.searchTerm = 'Required'
  } else if (values.searchTerm.length < 3) {
    errors.searchTerm = 'Must be 15 characters or less'
  }
  return errors
}

const SearchBar = props => {

  const { handleSubmit} = props
  return (
    <div>
      <form onSubmit={handleSubmit(values => props.showLoader() && props.submitSearch(values.searchTerm))}>
        <div className="searchbar__container">

          <Field
            component="input"
            type="text"
            name="searchTerm"
            className="searchbar__searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchbar__searchButton">
            SEARCH
            <FA className="searchbar__FA" name="search" />

          </button>

        </div>
      </form>
    </div>
  );
}



let form = reduxForm({
  form: 'search',
  validate
})(SearchBar);

export default connect(null, {submitSearch, showLoader})(form);
