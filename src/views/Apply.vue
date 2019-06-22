<template>
  <form
    name="application"
    action="/"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="application">

    <h1>Applicant Information</h1>
    <!-- first name -->
    <label for="first-name">First Name</label>
    <input type="text" name="first-name" id="first-name">

    <!-- last name -->
    <label for="last-name">Last Name</label>
    <input type="text" name="last-name" id="last-name">

    <!-- address -->
    <label for="address">Address</label>
    <input type="text" name="address" id="address">

    <!-- email -->
    <label for="email">Email</label>
    <input type="email" name="email" id="email">

    <!-- phone number -->
    <label for="phone-number">Phone Number</label>
    <input type="text" name="phone-number" id="phone-number">

    <!-- citizenship -->
    <h3>Citizenship</h3>
    <div class="radio">
      <input type="radio" name="citizenship" value="US Citizen" id="us-citizen">
      <label for="us-citizen">US Citizen</label>
    </div>
    <div class="radio">
      <input type="radio" name="citizenship" value="Foreign National" id="foreign-national">
      <label for="foreign-national">Foreign National</label>
    </div>
    <!-- authorized to work -->
    <h3>Authorized to work in the USA?</h3>

    <div class="radio">
      <input type="radio" name="authorized-to-work" value="Yes" id="authorized-to-work">
      <label for="authorized-to-work">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="authorized-to-work" value="No" id="not-authorized-to-work">
      <label for="not-authorized-to-work">No</label>
    </div>
    <!-- convicted of a felony -->
    <h3>Have you ever been convicted of a felony?</h3>
    <div class="radio">
      <input type="radio" name="convicted-of-a-felony" value="Yes" id="convicted-of-a-felony">
      <label for="convicted-of-a-felony">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="convicted-of-a-felony" value="No" id="not-convicted-of-a-felony">
      <label for="not-convicted-of-a-felony">No</label>
    </div>
    <!-- convicted of a felony -->
    <h3>Have you ever worked for JB Long and Son Body Shop?</h3>
    <div class="radio">
      <input
        type="radio"
        name="worked-for-jb-long"
        value="Yes"
        id="worked-for-jb-long-and-son-body-shop"
      >
      <label for="worked-for-jb-long-and-son-body-shop">Yes</label>
    </div>
    <div class="radio">
      <input
        type="radio"
        name="worked-for-jb-long"
        value="No"
        id="not-worked-for-jb-long-and-son-body-shop"
      >
      <label for="not-worked-for-jb-long-and-son-body-shop">No</label>
    </div>
    <div class="separator"></div>
    <h2>Education</h2>

    <!-- highschool -->
    <label for="high-school">High School</label>
    <input type="text" name="high-school" id="high-school">

    <!-- did you graduate -->
    <h3>Did you graduate from high school?</h3>

    <div class="radio">
      <input type="radio" name="high-school" value="Yes" id="graduated">
      <label for="graduated">Yes</label>
    </div>
    <div class="radio">
      <input type="radio" name="high-school" value="No" id="not-graduated">
      <label for="not-graduated">No</label>
    </div>
    <h3>Other Education</h3>
    <!-- highschool -->
    <label for="other-education">Other Education</label>
    <input type="text" name="other-education" id="other-education">

    <div class="separator"></div>
    <h2>References</h2>

    <h3>Reference One</h3>
    <!-- reference one first name -->
    <label for="reference-one-first-name">Reference First Name</label>
    <input type="text" name="reference-one-first-name" id="reference-one-first-name">

    <!-- reference one last name -->
    <label for="reference-one-last-name">Reference Last Name</label>
    <input type="text" name="reference-one-last-name" id="reference-one-last-name">

    <!-- reference one relationship -->
    <label for="reference-one-relationship">Reference Relationship</label>
    <input type="text" name="reference-one-relationship" id="reference-one-relationship">

    <!-- reference one phone number -->
    <label for="reference-one-phone-number">Reference Phone Number</label>
    <input type="text" name="reference-one-phone-number" id="reference-one-phone-number">

    <!-- reference one address -->
    <label for="reference-one-address">Reference Address</label>
    <input type="text" name="reference-one-address" id="reference-one-address">

    <h3>Reference Two</h3>

    <!-- reference two first name -->
    <label for="reference-two-first-name">Reference First Name</label>
    <input type="text" name="reference-two-first-name" id="reference-two-first-name">

    <!-- reference two last name -->
    <label for="reference-two-last-name">Reference Last Name</label>
    <input type="text" name="reference-two-last-name" id="reference-two-last-name">

    <!-- reference two relationship -->
    <label for="reference-two-relationship">Reference Relationship</label>
    <input type="text" name="reference-two-relationship" id="reference-two-relationship">

    <!-- reference two phone number -->
    <label for="reference-two-phone-number">Reference Phone Number</label>
    <input type="text" name="reference-two-phone-number" id="reference-two-phone-number">

    <!-- reference two address -->
    <label for="reference-two-address">Reference Address</label>
    <input type="text" name="reference-two-address" id="reference-two-address">

    <h3>Reference Three</h3>

    <!-- reference three first name -->
    <label for="reference-three-first-name">Reference First Name</label>
    <input type="text" name="reference-three-first-name" id="reference-three-first-name">

    <!-- reference three last name -->
    <label for="reference-three-last-name">Reference Last Name</label>
    <input type="text" name="reference-three-last-name" id="reference-three-last-name">

    <!-- reference three relationship -->
    <label for="reference-three-relationship">Reference Relationship</label>
    <input type="text" name="reference-three-relationship" id="reference-three-relationship">

    <!-- reference three phone number -->
    <label for="reference-three-phone-number">Reference Phone Number</label>
    <input type="text" name="reference-three-phone-number" id="reference-three-phone-number">

    <!-- reference three address -->
    <label for="reference-three-address">Reference Address</label>
    <input type="text" name="reference-three-address" id="reference-three-address">

    <div class="separator"></div>
    <h2>Previous Employment</h2>

    <h3>Employment One</h3>
    <!-- employment one company -->
    <label for="employment-one-company">Company</label>
    <input type="text" name="employment-one-company" id="employment-one-company">

    <!-- employment one address -->
    <label for="employment-one-address">Address</label>
    <input type="text" name="employment-one-address" id="employment-one-address">

    <!-- employment one phone number -->
    <label for="employment-one-phone-number">Phone Number</label>
    <input type="text" name="employment-one-phone-number" id="employment-one-phone-number">

    <!-- employment one supervisor -->
    <label for="employment-one-supervisor">Supervisor Name</label>
    <input type="text" name="employment-one-supervisor" id="employment-one-supervisor">

    <!-- employment one job title -->
    <label for="employment-one-job-title">Job Title</label>
    <input type="text" name="employment-one-job-title" id="employment-one-job-title">

    <!-- employment one responsibilities -->
    <label for="employment-one-responsibilities">Responsibilities</label>
    <input type="text" name="employment-one-responsibilities" id="employment-one-responsibilities">

    <!-- employment one reason for leaving -->
    <label for="employment-one-reason-for-leaving">Reason For Leaving</label>
    <input
      type="text"
      name="employment-one-reason-for-leaving"
      id="employment-one-reason-for-leaving"
    >

    <h3>May we contact your previous supervisor for a reference?</h3>

    <div class="radio">
      <input
        type="radio"
        name="employment-one-contact"
        value="Yes"
        id="contact-previous-supervisor-one"
      >
      <label for="contact-previous-supervisor-one">Yes</label>
    </div>

    <div class="radio">
      <input
        type="radio"
        name="employment-one-contact"
        value="No"
        id="not-contact-previous-supervisor-one"
      >
      <label for="not-contact-previous-supervisor-one">No</label>
    </div>

    <h3>Employment Two</h3>
    <!-- employment two company -->
    <label for="employment-two-company">Company</label>
    <input type="text" name="employment-two-company" id="employment-two-company">

    <!-- employment two address -->
    <label for="employment-two-address">Address</label>
    <input type="text" name="employment-two-address" id="employment-two-address">

    <!-- employment two phone number -->
    <label for="employment-two-phone-number">Phone Number</label>
    <input type="text" name="employment-two-phone-number" id="employment-two-phone-number">

    <!-- employment two supervisor -->
    <label for="employment-two-supervisor">Supervisor Name</label>
    <input type="text" name="employment-two-supervisor" id="employment-two-supervisor">

    <!-- employment two job title -->
    <label for="employment-two-job-title">Job Title</label>
    <input type="text" name="employment-two-job-title" id="employment-two-job-title">

    <!-- employment two responsibilities -->
    <label for="employment-two-responsibilities">Responsibilities</label>
    <input type="text" name="employment-two-responsibilities" id="employment-two-responsibilities">

    <!-- employment two reason for leaving -->
    <label for="employment-two-reason-for-leaving">Reason For Leaving</label>
    <input
      type="text"
      name="employment-two-reason-for-leaving"
      id="employment-two-reason-for-leaving"
    >

    <h3>May we contact your previous supervisor for a reference?</h3>
    <div class="radio">
      <input
        type="radio"
        name="employment-two-contact"
        value="Yes"
        id="contact-previous-supervisor-one"
      >
      <label for="contact-previous-supervisor-one">Yes</label>
    </div>
    <div class="radio">
      <input
        type="radio"
        name="employment-two-contact"
        value="No"
        id="not-contact-previous-supervisor-one"
      >
      <label for="not-contact-previous-supervisor-one">No</label>
    </div>

    <h3>Employment Three</h3>
    <!-- employment three company -->
    <label for="employment-three-company">Company</label>
    <input type="text" name="employment-three-company" id="employment-three-company">

    <!-- employment three address -->
    <label for="employment-three-address">Address</label>
    <input type="text" name="employment-three-address" id="employment-three-address">

    <!-- employment three phone number -->
    <label for="employment-three-phone-number">Phone Number</label>
    <input type="text" name="employment-three-phone-number" id="employment-three-phone-number">

    <!-- employment three supervisor -->
    <label for="employment-three-supervisor">Supervisor Name</label>
    <input type="text" name="employment-three-supervisor" id="employment-three-supervisor">

    <!-- employment three job title -->
    <label for="employment-three-job-title">Job Title</label>
    <input type="text" name="employment-three-job-title" id="employment-three-job-title">

    <!-- employment three responsibilities -->
    <label for="employment-three-responsibilities">Responsibilities</label>
    <input
      type="text"
      name="employment-three-responsibilities"
      id="employment-three-responsibilities"
    >

    <!-- employment three reason for leaving -->
    <label for="employment-three-reason-for-leaving">Reason For Leaving</label>
    <input
      type="text"
      name="employment-three-reason-for-leaving"
      id="employment-three-reason-for-leaving"
    >

    <h3>May we contact your previous supervisor for a reference?</h3>
    <div class="radio">
      <input
        type="radio"
        name="employment-three-contact"
        value="Yes"
        id="contact-previous-supervisor-one"
      >
      <label for="contact-previous-supervisor-one">Yes</label>
    </div>
    <div class="radio">
      <input
        type="radio"
        name="employment-three-contact"
        value="No"
        id="not-contact-previous-supervisor-one"
      >
      <label for="not-contact-previous-supervisor-one">No</label>
    </div>
    <div class="separator"></div>
    <h2>Disclaimer and Signature</h2>
    <p>I certify that my answers are true and complete to the best of my knowledge. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release.</p>

    <!-- signature first name -->
    <label for="signature-first-name">First Name</label>
    <input type="text" name="signature-first-name" id="signature-first-name">

    <!-- signature last name -->
    <label for="signature-last-name">Last Name</label>
    <input type="text" name="signature-last-name" id="signature-last-name">

    <!-- signature date -->
    <label for="signature-date">Date</label>
    <input type="text" name="signature-date" id="signature-date">

    <Button type="submit" topText="Apply" bottomText="Now!" icon="inbox"/>
  </form>
</template>

<script>
import Button from "@/components/atoms/Button";

export default {
  name: "Apply",
  components: {
    Button
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
