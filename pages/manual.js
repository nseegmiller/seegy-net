import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import profilePic from '../assets/profile.jpg'

export default function Manual() {
  return (
    <div className="container">
      <Head>
        <title>Manual of Nick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="header-container">
          <Image src={profilePic} alt="Picture of Nick" width={200} height={200} className="profile-pic"></Image>
          <div className="left-spacing">
            <h1>Nick Seegmiller (he/him)</h1>
            My last name is pronounced "segg-mill-er" (first syllabal rhymes with egg), and my nickname is pronounced "seggy."
          </div>
        </div>
        <h2>Intro</h2>
        <p className="description">
          I'm Nick, a senior software engineering leader based in Seattle. I love helping people grow (especially engineers moving into management), delivering things
          that customers love, and working closely with product and design. All of my favorite roles have had me working on something where
          I considered myself a passionate user. I love games, mobile apps, and frontend web development.
          My <a target="_blank" href="https://www.linkedin.com/in/nickseegmiller/">LinkedIn profile</a> is always
          kept up to date if you want to know more about my background. I have a large breadth of experience which means that I'm quick to learn, but I lack
          deep knowledge in any one area.
        </p>

        <h2>Communication preferences</h2>
        <p className="description">
          A perfect work day for me is to start around 8:30am Pacific Time, eat lunch for 30 minutes at noon,
          then stop working at 5:00pm. I will absolutely work outside those times when needed, but would prefer not to. In regards to "how much" to communicate,
          I believe that knowledge is power and I've never thought somebody was too communicative. If in doubt, please send me a message/email letting
          me know what's going on.
          <ul>
            <li><b>Instant message (Workplace/Slack/etc.):</b> This is always the best way to contact me and will result in the quickest response,
              especially outside of normal working hours. Don't send me a message that just says <a href="https://www.nohello.com">hello</a>, and
              please provide context if you want to have a call. For example, say: "are you free for 5 minutes to talk about X?" rather than "are you free to chat?".
            </li>
            <li><b>Calls/meetings:</b> Please don't call me without a calendar invite or messaging me. I prefer everyone to have video
            turned on so I can read body language (and so you can read mine). I'm a voracious note taker, so don't be surprised if I take notes during our call/meeting.</li>
            <li><b>Email:</b> I try to always reply to email, but I am more likely to forget to reply to an email
            if you send it late in the day or outside my normal work hours. The best time to get a response is usually in the morning.</li>
          </ul>
        </p>

        <h2>Relationships</h2>
        <p>I want to work with people I like, I think are smart, and that I get along with. When all of our interactions are transactional, it's harder to have
            empathy and find common ground. Having conversations outside normal work meetings helps, and I'll use 1:1 time to help this too. If we don't work in
            the same city, I'll want to get together in person no less than once a quarter.
        </p>

        <h2>Decision making</h2>
          <p>I have strong opinions about most things and will nearly always share them, but I don't expect to always get my way.
            If I'm working with a product manager, I'll share my product opinions, but will commit to another direction 
            if I'm told: "Thanks for the input Nick, but we are going to do this other thing instead." Similarly, I expect others
            to share their opinions/ideas with me, but respect the direction I choose when they are my decisions to own.
          </p>

        <h2>Feedback &amp; recognition</h2>
        <p>I am always hungry for feedback and never get as much as I want. I ask everyone around me (peers, direct reports, skip levels, my manager) for
          feedback. I consider it a gift and strive to never be defensive. Similarly, I will provide you with feedback if you report
          to me. If you don't, I will provide you with feedback as long as you stay receptive. I believe that 1:1 meetings are the best place to provide
          and receive feedback, but I also think that occasionally providing it in a group setting can help others learn.
        </p>
        <p>I usually prefer to be recognized in private, and I don't always do a good job of figuring out how others like to be recognized and doing it that way. Please
          let me know what you prefer.
        </p>

        <h2>Management style</h2>
        <p>I describe my style as "dangerous transparency." I will always share with you everything I'm allowed to and
          will always do my best to explain the "why" behind decisions that are being made. If I can't tell you why, I will tell
          you that. All changes I propose will include a mechanism for evaluating whether or not the change is successful as
          I view every process/org change as an experiment to make incremental improvement. Even this doc is an experiment and will
          be updated when needed.
        </p>
        <p>Secondly, I expect everyone to do their best, do what they say, and to not fail silently. I don't expect people
          to pull off miracles, but if you say you can do a thing I'm going to either expect you to do it or ask for help the second
          you know you can't. I'm not going to hold your hand (you were hired because you are good at what you do), but I'm always ready
          to jump in and help anyway I can if you ask.
        </p>

        <h2>Regular meetings</h2>
        <p className="description">
          <h3>1:1 meetings</h3>
          <ul>
            <li><b>With ICs on my team:</b> I will go out of my way to never cancel this meeting.
            I want to use this time to know how you are doing, how the team is doing, what you are frustrated by, how your manager
            is doing, how the org is doing, how your promotion is going, etc. I also want to be able to help you anyway I can and provide
            timely feedback. Lastly, I just want to get to know you better. I will share sample questions so you know what to expect.
            </li>
            <li><b>With managers on my team:</b> All the above applies. I will also ask you to write down your notes ahead of time
            in a shared document so we make sure we cover everything. I'll also want to know more about your team specifically.</li>
            <li><b>With my manager:</b> I will update our shared doc before every meeting. I will expect to talk to you at least once
            a week, and 30 minutes may not be enough. I like to follow a
            light <a target="_blank" href="https://www.15five.com">15five</a> format. Normally I answer the following questions:
              <ol>
                <li>What went well this week?</li>
                <li>What didn't go well this week?</li>
                <li>What should you be aware of?</li>
                <li>What do I need from you?</li>
                <li>What's something about me that you don't know?</li>
              </ol>
            </li>
            <li><b>With peers:</b> I want to use this time to get to know you better (see above), hear any feedback you have about me or
            my team, and learn ways I can help you. Either of us should feel safe asking for this to be canceled if higher priority
            things are going on.</li>
          </ul>
          <h3>Staff meetings</h3>
          <p>I will have regular staff meetings with everyone in my org. This may be as frequently as once per week. The primary purpose
            of this meeting is for me to communicate down, i.e. share things I've heard, changes coming, or ideas I have. We'll also use
            this time to get to know each other better. I'll also have a weekly meeting with the managers who report to me. This meeting
            will have an open agenda where everyone can add items to the list that we need to discuss.
          </p>
          <h3>Status meetings</h3>
          <p>I have found that regular operations, program, and roadmap review meetings are critical to keep everyone informed and moving forward.
            The specific shape of these meetings is org and project dependent, but I'll want something like this if the information isn't coming in another way.
          </p>
        </p>
      </main>
    </div>
  )
}
