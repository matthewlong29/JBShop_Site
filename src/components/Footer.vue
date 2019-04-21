<template>
  <footer>
    <div class="main-footer-content">
      <div class="contact">
        <h2>Contact Us</h2>
        <p>Ready to get the car repaired? Then contact us now! The best way you can do that is by phone. Another popular option is to simply drop by; so don't hesitate in doing so.</p>
        <p>
          <span>Phone:</span>
          <span>
            <a href="tel:5026954477">(502) 695-4477</a>
            <br>
            <a href="tel:5026952041">(502) 695-2041</a>
          </span>
        </p>
        <p>
          <span>Address:</span>
          <span class="address">
            107 Collision Center Dr.
            <br>Frankfort, KY 40601
          </span>
        </p>
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
// TODO link services to services section
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date()
    };
  },
  methods: {
    getCurrentYear() {
      console.log(`current date: ${this.currentYear}`);
      return this.currentYear.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

footer {
  background-color: darken($color: $blue, $amount: 20);
  border-top: 4px solid darken($color: $red, $amount: 10);
  .main-footer-content {
    @extend %container;
    display: flex;
    justify-content: space-between;
    color: $white;
    .contact,
    .services,
    .hours-of-operation,
    .navigation {
      font-size: 0.75rem;
      width: 100%;
      padding: 0 10px;
      h2 {
        text-align: center;
      }
      a {
        color: $red;
        text-decoration: none;
      }
    }
    .contact {
      p {
        display: flex;
        span {
          display: inline-block;
          &.address {
            color: $red;
          }
        }
      }
    }
    .services {
      ul {
        padding: 0;
        li {
          list-style: none;
          color: $white;
          padding-bottom: 15px;
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
          padding: 4;
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
  }
  .copyright {
    padding: 5px;
    background-color: darken($color: $blue, $amount: 25);
    color: $white;
    p {
      @extend %container;
      font-size: 0.7rem;
    }
  }
}
</style>
