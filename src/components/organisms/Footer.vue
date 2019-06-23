<template>
  <footer>
    <div class="main-footer-content">
      <div class="contact">
        <h2>Contact Us</h2>
        <p>Ready to get the car repaired? Then contact us now! The best way you can do that is by phone. Another popular option is to simply drop by; so don't hesitate in doing so.</p>
        <div class="methods-container">
          <p>
            <span class="method">Phone:</span>
            <span>
              <a href="tel:5026954477">&nbsp;(502) 695-4477</a>
              <br>
              <a href="tel:5026952041">&nbsp;(502) 695-2041</a>
            </span>
          </p>
          <p>
            <span class="method">Address:</span>
            <span class="address">
              107 Collision Center Dr.
              <br>Frankfort, KY 40601
            </span>
          </p>
        </div>
      </div>
      <div class="services">
        <h2>Services</h2>
        <ul>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>General Collision Repair</span>
          </li>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>Body Work</span>
          </li>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>Paint</span>
          </li>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>Free Estimates</span>
          </li>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>Quality Control</span>
          </li>
          <li>
            <font-awesome-icon icon="check-circle"/>
            <span>We accept cash, check, and credit</span>
          </li>
        </ul>
      </div>
      <div class="hours-of-operation">
        <h2>Hours of Operation</h2>
        <ul>
          <li>Sun. Closed</li>
          <li>Mon. 8:00 am - 5:00 pm</li>
          <li>Tue. 8:00 am - 5:00 pm</li>
          <li>Wed. 8:00 am - 5:00 pm</li>
          <li>Thur. 8:00 am - 5:00 pm</li>
          <li>Fri. 8:00 am - 5:00 pm</li>
          <li>Sat. Closed</li>
        </ul>
      </div>
      <div class="navigation">
        <h2>Navigation</h2>
        <ul>
          <li>
            <router-link to="/#home">Home</router-link>
          </li>
          <li>
            <router-link to="/#about">About</router-link>
          </li>
          <li>
            <router-link to="/#team">Team</router-link>
          </li>
          <li>
            <router-link to="/#jobs">Jobs</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright {{getCurrentYear()}} by
        <strong>JB Long and Son Body Shop</strong> | All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date()
    };
  },
  methods: {
    /**
     * getCurrentYear.
     */
    getCurrentYear() {
      return this.currentYear.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

footer {
  @include createBackground(
    darken($color: $blue, $amount: 20),
    darken($color: $blue, $amount: 23),
    "/images/textures/concrete-dark.jpg"
  );
  border-top: 4px solid $red;
  .main-footer-content {
    @extend %container;
    display: flex;
    justify-content: space-between;
    color: $white;
    flex-wrap: wrap;
    .contact,
    .services,
    .hours-of-operation,
    .navigation {
      font-size: 0.75rem;
      width: 100%;
      padding: 0 10px;
      flex: 1 1 240px;
      h2 {
        text-align: center;
        &:after {
          content: "";
          display: block;
          width: 48px;
          height: 1px;
          background-color: $red;
          margin: 0 auto;
          margin-top: 6px;
        }
      }
      a {
        color: $red;
        text-decoration: none;
      }
    }
    .contact {
      p {
        display: flex;
        flex-wrap: wrap;
        span {
          display: inline-block;
          &.address {
            color: $red;
          }
        }
      }
      .methods-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        p {
          min-width: 170px;
        }
        .method {
          padding-right: 6px;
        }
      }
    }
    .services {
      ul {
        padding: 0;
        li {
          list-style: none;
          color: $white;
          padding-bottom: 8px;
          text-align: center;
          svg {
            padding-right: 6px;
          }
          &:hover {
            svg {
              color: $red;
            }
          }
        }
      }
    }
    .hours-of-operation {
      ul {
        padding: 0;
        li {
          list-style: none;
          text-align: center;
          padding: 4px;
        }
      }
    }
    .navigation {
      ul {
        padding: 0;
        li {
          list-style: none;
          text-align: center;
          padding-bottom: 14px;
          a {
            font-size: 0.75rem;
            color: $white;
            text-decoration: none;
            &:hover {
              color: $red;
            }
          }
        }
      }
    }
    @media (max-width: 1200px) {
      .services {
        display: none;
      }
    }
    @media (max-width: 994px) {
      .navigation {
        display: none;
      }
    }
  }
  .copyright {
    padding: 5px;
    background-color: darken($color: $blue, $amount: 25);
    color: $white;
    p {
      @extend %container;
      font-size: 0.7rem;
      letter-spacing: 1px;
    }
  }
}
</style>
