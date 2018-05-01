import React from "react";
import { withStyles } from 'material-ui/styles';
import './SearchBar.css';
import { connect } from "react-redux";
import { submitSearch } from "../../actions"
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.searchTerm) {
    errors.searchTerm = 'Required'
  } else if (values.searchTerm.length < 3) {
    errors.searchTerm = 'Must be 15 characters or less'
  }
  console.log(errors);
  return errors
}

const SearchBar = props => {

  const { handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit(values => props.submitSearch(values.searchTerm))}>
      <div className="searchbar__container">

          <Field
            component="input"
            type="text"
            name="searchTerm"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            SEARCH
          </button>

      </div>
    </form>
  );
}


let form = reduxForm({
  form: 'search',
  validate
})(SearchBar);

export default connect(null,{submitSearch})(form);
