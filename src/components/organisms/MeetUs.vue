<template>
  <section id="team">
    <TitleAndSubtitle title="Meet the Team!" subtitle="We're proudly family owned and operated!"/>
    <div class="team">
      <Profile
        class="member"
        profileImage="/images/team/john.jpg"
        bgImage="/images/team/john-at-work.jpg"
        name="John Long"
        jobTitle="Owner"
        message="John, son of Peggy and JB, has worked in nearly every position at the shop. He is currently the manager, and has been for 20 years. There are three guys who make estimates at the shop (JB, John, and Karlen). John is always the first in line to make an estimate."
      />
      <Profile
        class="member"
        profileImage="/images/team/shari.jpg"
        bgImage="/images/team/shari-at-work.jpg"
        name="Shari Long"
        jobTitle="Owner"
        message="Shari, Johns wife, has worked at the shop as the secretary since 1989. She took off for a few years when she and John had children. Shari is the person who you are most likely to talk to when you give us a call."
      />
      <Profile
        class="member"
        profileImage="/images/team/karlen.jpg"
        bgImage="/images/team/karlen-at-work.jpg"
        name="Karlen Morris"
        jobTitle="Asst. Manager"
        message="Like John, Karlen has worked in nearly every position at the shop. He actually holds a number of job titles, but we decided assistant manager fits best. Responsibilities include assisting shop management, parts manager, and working with insurance adjusters."
      />
      <Profile
        class="member"
        profileImage="/images/team/cassie.jpg"
        bgImage
        name="Cassie Long"
        jobTitle="Asst. Secretary"
        message="Cassie is the newest addition to the shop. Don't hold that against her though; she's sharp and always eager to help out. Cassie does all the odds and ins with getting your car looking back to how you want it!"
      />
    </div>
  </section>
</template>

<script>
import TitleAndSubtitle from "@/components/atoms/TitleAndSubtitle";
import Profile from "@/components/molecules/Profile";

export default {
  name: "MeetUs",
  components: { TitleAndSubtitle, Profile }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/placeholders";

section {
  @extend %container;
  margin-bottom: 5rem;
  margin-top: 5rem;
  .team {
    display: flex;
    .member {
      margin: 16px;
    }
  }
}
</style>
