import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const renderField = ({ input, placeholder, type }) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={placeholder} />
    </div>
  </div>
);

const renderPhones = ({ fields })  => (
  <ul>
    <li>
      <a href="" onClick={(e) => { 
          e.preventDefault()
          fields.push({})
      }}>
        <span className="fa fa-plus"></span>
        Add number
      </a>
    </li>
    {fields.map((phone, index) => (
      <li key={index}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault()
            fields.remove(index)
          }}
        >
          <span className="fa fa-times"></span>
        </a>
        <Field
          className="form--input"
          name={`${phone}.name`}
          type="text"
          component={renderField}
          placeholder="number"
        />
        <Field
          className="form--input"
          name={`${phone}.number`}
          type="text"
          component={renderField}
          placeholder="cell"
        />
      </li>
    ))}
  </ul>
);

const ContactForm = props => {

  const { handleSubmit, onContactRemove, isEdit, contact } = props;
  console.log('form', props);

  return (
    <form className="form--main" onSubmit={ handleSubmit }>
      <div className="form--main-left">
        <img className="form--main-left_photo" src={require(`assets/images/profile.png`)} />
      </div>
      <div className="form--main-right">
        <Link to="/"><i className="fa fa-level-up fa-rotate-270"></i></Link>
        <div className="form--main--field">
          <label htmlFor="firstName"><i className="fa fa-user-o"></i> first name</label>
          <Field name="firstName" component="input" type="text" placeholder="Addie" />
          <label htmlFor="lastName"><i className="fa fa-user-o"></i> last name</label>
          <Field name="lastName" component="input" type="text" placeholder="Her" />
        </div>
        <div className="form--main--field">
          <label htmlFor="email"><i className="fa fa-envelope-o"></i> email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div className="form--main--field">
          <label><i className="fa fa-phone"></i> numbers</label>
          <FieldArray name="numbers" component={renderPhones} />
        </div>
        <Link to="/" className="button button--secondary">Cancel</Link>
        <button className="button button--primary" type="submit">Save</button>
      </div>
    </form>
  );
}

function mapStateToProps(state, ownProps) {

  if(ownProps.isEdit) {
    return {
      initialValues: {
        ...ownProps.contact[0]
      }
    };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'contactForm',
  enableReinitialize: true
})(ContactForm));
