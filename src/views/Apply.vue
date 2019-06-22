<template>
  <form
    name="job-application"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit()"
  >
    <input type="hidden" name="form-name" value="job-application">

    <h1>Applicant Information</h1>

    <label>
      First Name
      <input type="text" name="firstName" @input="ev => form.firstName = ev.target.value">
    </label>

    <label>
      Last Name
      <input type="text" name="lastName" @input="ev => form.lastName = ev.target.value">
    </label>

    <label>
      Address
      <input type="text" name="address" @input="ev => form.address = ev.target.value">
    </label>

    <label>
      Email
      <input type="email" name="email" @input="ev => form.email = ev.target.value">
    </label>

    <label>
      Phone Number
      <input
        type="text"
        name="phoneNumber"
        @input="ev => form.phoneNumber = ev.target.value"
      >
    </label>

    <h3>Citizenship</h3>
    <div class="radio">
      <input type="radio" name="citizenship" value="US Citizen" id="us-citizen">
      <label for="us-citizen">US Citizen</label>
    </div>
    <div class="radio">
      <input type="radio" name="citizenship" value="Foreign National" id="foreign-national">
      <label for="foreign-national">Foreign National</label>
    </div>

    <h3>Authorized to work in the USA?</h3>
    <div class="radio">
      <input type="radio" name="authorizedToWork" value="Yes" id="authorizedToWork">
      <label for="authorizedToWork">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="authorizedToWork" value="No" id="notAuthorizedToWork">
      <label for="notAuthorizedToWork">No</label>
    </div>

    <h3>Have you ever been convicted of a felony?</h3>
    <div class="radio">
      <input type="radio" name="convictedOfAFelony" value="Yes" id="convictedOfAFelony">
      <label for="convictedOfAFelony">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="convictedOfAFelony" value="No" id="notConvictedOfAFelony">
      <label for="notConvictedOfAFelony">No</label>
    </div>

    <h3>Have you ever worked for JB Long and Son Body Shop?</h3>
    <div class="radio">
      <input type="radio" name="workedForJBLong" value="Yes" id="workedForJBLong">
      <label for="workedForJBLong">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="workedForJBLong" value="No" id="notWorkedForJBLong">
      <label for="notWorkedForJBLong">No</label>
    </div>

    <div class="separator"></div>
    <h2>Education</h2>

    <label>
      High School
      <input
        type="text"
        name="highSchool"
        @input="ev => form.highSchool = ev.target.value"
      >
    </label>

    <h3>Did you graduate from high school?</h3>
    <div class="radio">
      <input type="radio" name="highSchool" value="Yes" id="graduated">
      <label for="graduated">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="highSchool" value="No" id="not-graduated">
      <label for="not-graduated">No</label>
    </div>

    <label>
      Other Education
      <input
        type="text"
        name="otherEducation"
        @input="ev => form.otherEducation = ev.target.value"
      >
    </label>

    <div class="separator"></div>
    <h2>References</h2>

    <h3>Reference One</h3>

    <label>
      Reference First Name
      <input
        type="text"
        name="referenceOneFirstName"
        @input="ev => form.referenceOneFirstName = ev.target.value"
      >
    </label>

    <label>
      Reference Last Name
      <input
        type="text"
        name="referenceOneLastName"
        @input="ev => form.referenceOneLastName = ev.target.value"
      >
    </label>

    <label>
      Reference Relationship
      <input
        type="text"
        name="referenceOneRelationship"
        @input="ev => form.referenceOneRelationship = ev.target.value"
      >
    </label>

    <label>
      Reference Phone Number
      <input
        type="text"
        name="referenceOnePhoneNumber"
        @input="ev => form.referenceOnePhoneNumber = ev.target.value"
      >
    </label>

    <label>
      Reference Address
      <input
        type="text"
        name="referenceOneAddress"
        @input="ev => form.referenceOneAddress = ev.target.value"
      >
    </label>

    <h3>Reference Two</h3>

    <label>
      Reference First Name
      <input
        type="text"
        name="referenceTwoFirstName"
        @input="ev => form.referenceTwoFirstName = ev.target.value"
      >
    </label>

    <label>
      Reference Last Name
      <input
        type="text"
        name="referenceTwoLastName"
        @input="ev => form.referenceTwoLastName = ev.target.value"
      >
    </label>

    <label>
      Reference Relationship
      <input
        type="text"
        name="referenceTwoRelationship"
        @input="ev => form.referenceTwoRelationship = ev.target.value"
      >
    </label>

    <label>
      Reference Phone Number
      <input
        type="text"
        name="referenceTwoPhoneNumber"
        @input="ev => form.referenceTwoPhoneNumber = ev.target.value"
      >
    </label>

    <label>
      Reference Address
      <input
        type="text"
        name="referenceTwoAddress"
        @input="ev => form.referenceTwoAddress = ev.target.value"
      >
    </label>

    <div class="separator"></div>
    <h2>Previous Employment</h2>

    <h3>Employment One</h3>

    <label>
      Company
      <input
        type="text"
        name="employmentOneCompany"
        @input="ev => form.employmentOneCompany = ev.target.value"
      >
    </label>

    <label>
      Address
      <input
        type="text"
        name="employmentOneAddress"
        @input="ev => form.employmentOneAddress = ev.target.value"
      >
    </label>

    <label>
      Phone Number
      <input
        type="text"
        name="employmentOnePhoneNumber"
        @input="ev => form.employmentOnePhoneNumber = ev.target.value"
      >
    </label>

    <label>
      Supervisor Name
      <input
        type="text"
        name="employmentOneSupervisor"
        @input="ev => form.employmentOneSupervisor = ev.target.value"
      >
    </label>

    <label>
      Job Title
      <input
        type="text"
        name="employmentOneJobTitle"
        @input="ev => form.employmentOneJobTitle = ev.target.value"
      >
    </label>

    <label>
      Responsibilities
      <input
        type="text"
        name="employmentOneResponsibilities"
        @input="ev => form.employmentOneResponsibilities = ev.target.value"
      >
    </label>

    <label>
      Reason For Leaving
      <input
        type="text"
        name="employmentOneReasonForLeaving"
        @input="ev => form.employmentOneReasonForLeaving = ev.target.value"
      >
    </label>

    <h3>May we contact your previous supervisor for a reference?</h3>

    <div class="radio">
      <input
        type="radio"
        name="employmentOneContact"
        value="Yes"
        id="contact-previous-supervisor-one"
      >
      <label for="contact-previous-supervisor-one">Yes</label>
    </div>

    <div class="radio">
      <input
        type="radio"
        name="employmentOneContact"
        value="No"
        id="not-contact-previous-supervisor-one"
      >
      <label for="not-contact-previous-supervisor-one">No</label>
    </div>

    <h3>Employment Two</h3>

    <label>
      Company
      <input
        type="text"
        name="employmentTwoCompany"
        @input="ev => form.employmentTwoCompany = ev.target.value"
      >
    </label>

    <label>
      Address
      <input
        type="text"
        name="employmentTwoAddress"
        @input="ev => form.employmentTwoAddress = ev.target.value"
      >
    </label>

    <label>
      Phone Number
      <input
        type="text"
        name="employmentTwoPhoneNumber"
        @input="ev => form.employmentTwoPhoneNumber = ev.target.value"
      >
    </label>

    <label>
      Supervisor Name
      <input
        type="text"
        name="employmentTwoSupervisor"
        @input="ev => form.employmentTwoSupervisor = ev.target.value"
      >
    </label>

    <label>
      Job Title
      <input
        type="text"
        name="employmentTwoJobTitle"
        @input="ev => form.employmentTwoJobTitle = ev.target.value"
      >
    </label>

    <label>
      Responsibilities
      <input
        type="text"
        name="employmentTwoResponsibilities"
        @input="ev => form.employmentTwoResponsibilities = ev.target.value"
      >
    </label>

    <label>
      Reason For Leaving
      <input
        type="text"
        name="employmentTwoReasonForLeaving"
        @input="ev => form.employmentTwoReasonForLeaving = ev.target.value"
      >
    </label>

    <h3>May we contact your previous supervisor for a reference?</h3>
    <div class="radio">
      <input
        type="radio"
        name="employmentTwoContact"
        value="Yes"
        id="contact-previous-supervisor-one"
      >
      <label for="contact-previous-supervisor-one">Yes</label>
    </div>
    <div class="radio">
      <input
        type="radio"
        name="employmentTwoContact"
        value="No"
        id="not-contact-previous-supervisor-one"
      >
      <label for="not-contact-previous-supervisor-one">No</label>
    </div>

    <div class="separator"></div>
    <h2>Disclaimer and Signature</h2>
    <p>I certify that my answers are true and complete to the best of my knowledge. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release.</p>

    <label>
      First Name
      <input
        type="text"
        name="signatureFirstName"
        @input="ev => form.signatureFirstName = ev.target.value"
      >
    </label>

    <label>
      Last Name
      <input
        type="text"
        name="signatureLastName"
        @input="ev => form.signatureLastName = ev.target.value"
      >
    </label>

    <label>
      Date
      <input
        type="text"
        name="signatureDate"
        @input="ev => form.signatureDate = ev.target.value"
      >
    </label>

    <Button type="submit" topText="Apply" bottomText="Now!" icon="inbox"/>
  </form>
</template>

<script>
import Button from "@/components/atoms/Button";
// import router from "../router";

export default {
  name: "Apply",
  components: {
    Button
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phoneNumber: "",
        citizenship: "",
        authorizedToWork: "",
        convictedOfAFelony: "",
        workedForJBLong: "",
        highSchool: "",
        otherEducation: "",
        referenceOneFirstName: "",
        referenceOneLastName: "",
        referenceOneRelationship: "",
        referenceOnePhoneNumber: "",
        referenceOneAddress: "",
        referenceTwoFirstName: "",
        referenceTwoLastName: "",
        referenceTwoRelationship: "",
        referenceTwoPhoneNumber: "",
        referenceTwoAddress: "",
        employmentOneCompany: "",
        employmentOneAddress: "",
        employmentOnePhoneNumber: "",
        employmentOneSupervisor: "",
        employmentOneJobTitle: "",
        employmentOneResponsibilities: "",
        employmentOneReasonForLeaving: "",
        employmentOneContact: "",
        employmentTwoCompany: "",
        employmentTwoAddress: "",
        employmentTwoPhoneNumber: "",
        employmentTwoSupervisor: "",
        employmentTwoJobTitle: "",
        employmentTwoResponsibilities: "",
        employmentTwoReasonForLeaving: "",
        employmentTwoContact: "",
        signatureFirstName: "",
        signatureLastName: "",
        signatureDate: ""
      }
    };
  },
  methods: {
    /**
     * encode.
     */
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    /**
     * handleSubmit.
     */
    handleSubmit(e) {
      console.log(this.form);
      console.log(this.form.firstName);
      console.log(this.form.lastName);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "job-application",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("oops");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

form {
  @extend %container;
  margin-bottom: 5rem;
  padding-top: 1.5rem;
  h1 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-top: 2rem;
    font-size: 0.95rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  input[type="text"],
  input[type="email"] {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 0.25rem;
    margin-bottom: 1rem;
  }
  div {
    &.radio {
      display: block;
    }
    &.separator {
      margin-top: 1.5rem;
      height: 5px;
      width: 100%;
      background: repeating-linear-gradient(
        -37deg,
        lighten($color: $black, $amount: 34),
        lighten($color: $black, $amount: 34) 51px,
        lighten($color: $black, $amount: 57) 51px,
        lighten($color: $black, $amount: 57) 97px
      );
    }
  }
}
</style>
