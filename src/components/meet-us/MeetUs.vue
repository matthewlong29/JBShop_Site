<template>
  <section>
    <TitleAndSubtitle title="Meet Us!" subtitle="Family owned and operated!"></TitleAndSubtitle>
    <div class="team">
      <Profile
        class="member"
        image="/images/team/jblong.jpg"
        name="JB Long"
        jobTitle="Owner"
        message="The shop exists because of this guy. JB has been at the shop since before it was called JB Long and Son Body Shop. He is very experienced with all things cars; he was even a pit crew mechanic for Tony Schiller (ARCA Racing Series Veteran) in the 1970's."
      ></Profile>
      <Profile
        class="member"
        image="/images/team/peggy.jpg"
        name="Peggy Long"
        jobTitle="Owner"
        message="Peggy has also been at the shop from the start. She keeps the office in working order. On a typical day Peggy spends her time interacting with customers and checking over cars before they're finalized. If they pass her inspection the car is ready."
      ></Profile>
      <Profile
        class="member"
        image="/images/team/john.jpg"
        name="John Long"
        jobTitle="Manager"
        message="John, son of Peggy and JB, has worked in nearly every position at the shop. He is currently the manager, and has been for 20 years. There are three guys who make estimates at the shop (JB, John, and Karlen). John is always the first in line to make an estimate."
      ></Profile>
      <Profile
        class="member"
        image="/images/team/shari.jpg"
        name="Shari Long"
        jobTitle="Secretary"
        message="Shari, Johns wife, has worked at the shop as the secretary since 1989. She took off for a few years when she and John had children. Shari is the person who you are most likely to talk to when you give us a call."
      ></Profile>
      <Profile
        class="member"
        image="/images/team/karlen.jpg"
        name="Karlen Morris"
        jobTitle="Asst. Manager"
        message="Like John, Karlen has worked in nearly every position at the shop. He actually holds a number of job titles, but we decided assistant manager fits best. Responsibilities include assisting shop management, parts manager, and working with insurance adjusters."
      ></Profile>
      <Profile
        class="member"
        image="/images/team/cassie.jpg"
        name="Cassie Long"
        jobTitle="Asst. Secretary"
        message="Cassie is the newest addition to the shop. Don't hold that against her though; she's sharp and always eager to help out. Cassie does all the odds and ins with getting your car looking back to how you want it!"
      ></Profile>
    </div>
  </section>
</template>

<script>
import TitleAndSubtitle from "@/components/partials/TitleAndSubtitle";
import Profile from "@/components/meet-us/Profile";

export default {
  name: "MeetUs",
  components: { TitleAndSubtitle, Profile }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

section {
  @extend %container;
  margin-bottom: 5rem;
  div.team {
    display: flex;
    flex-wrap: wrap;
    .member {
      margin: 0 0.25rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
