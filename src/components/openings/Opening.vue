<template>
  <div class="opening">
    <div class="icon-container">
      <font-awesome-icon :icon="icon"/>
    </div>
    <div class="opening-info-container">
      <div class="title-and-date-container">
        <div class="titles">
          <h4>{{areaOfWork}}</h4>
          <h3>{{jobTitle}}</h3>
        </div>
        <div class="date-posted">
          <h4>{{datePosted}}</h4>
        </div>
      </div>
      <p>{{jobDescription}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opening",
  props: ["jobTitle", "jobDescription", "areaOfWork", "icon", "datePosted"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

.opening {
  display: flex;
  margin: 5rem 1rem;
  .icon-container {
    display: flex;
    align-items: center;
    svg {
      height: 50px;
      width: auto;
      padding: 6px 18px 6px 6px;
      color: lighten($color: $black, $amount: 5);
    }
  }
  .opening-info-container {
    width: 100%;
    border-top: 1px solid transparentize($color: $black, $amount: 0.75);
    border-bottom: 1px solid transparentize($color: $black, $amount: 0.75);
    padding: 0.75rem 0.5rem;
    .title-and-date-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .titles {
        @include userSelect(none);
        h3,
        h4 {
          margin: 0;
          color: $black;
        }
        h4 {
          color: $red;
        }
      }
      .date-posted {
        @include userSelect(none);
        h4 {
          color: $red;
        }
      }
    }
    p {
      margin: 0;
      color: $black;
    }
  }
  &:hover {
    .opening-info-container {
      background-color: transparentize($color: $black, $amount: 0.95);
    }
  }
}
</style>
