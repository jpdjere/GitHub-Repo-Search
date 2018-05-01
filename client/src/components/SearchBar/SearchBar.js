import React from "react";
import { withStyles } from 'material-ui/styles';
import './SearchBar.css';
import { connect } from "react-redux";
import { submitSearch } from "../../actions"
import { Field, reduxForm } from 'redux-form';
import FA from "react-fontawesome";

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
            className="searchbar__searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchbar__searchButton">
            SEARCH
            <FA className="searchbar__FA" name="search" />
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
