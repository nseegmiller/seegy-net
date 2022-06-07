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
            <h1>Hello, I'm Nick Seegmiller</h1>
            My last name is pronounced "segg-mill-er" (first syllabal rhymes with egg), and my nickname is pronounced "seggy."
          </div>
        </div>
        <h2>Intro</h2>
        <p className="description">
          I'm Nick, a senior software engineering leader. I love helping people grow, delivering things
          that customers love, and working closely with product and design.
          My <a target="_blank" href="https://www.linkedin.com/in/nickseegmiller/">LinkedIn profile</a> is always
          kept up to date if you want to know more about my background.
        </p>

        <h2>Communication preferences</h2>
        <p className="description">
          A perfect work day for me is to start around 8:30am Pacific Time, eat lunch for 30 minutes at noon,
          then stop working at 5:00pm. I will absolutely work outside those times when needed, but would prefer not to.
          <ul>
            <li><b>Instant message (Slack/etc.):</b> This is always the best way to contact me and will result in the quickest response,
              especially outside of normal working hours.
            </li>
            <li><b>Calls:</b> Please don't call me without a calendar invite or messaging me. I will ALWAYS prefer everyone has video
            turned on so I can read body language (and so you can read mine).</li>
            <li><b>Email:</b> I try to always reply to email, but I am much more likely to forget to reply an email
            if you send it late in the day or outside my normal work hours. The best time to get a response is usually in the morning.</li>
          </ul>
        </p>

        <h2>Relationships</h2>
        <p>I want to work with people I like, I think are smart, and that I get along with. When all of our interactions are transactional, it's harder to have
            empathy and find common ground. Having conversations outside normal work meetings helps, and I'll use 1:1 time to help this too.
        </p>

        <h2>Decision making</h2>
          <p>I have strong opinions about most things and will nearly always share them, but I don't expect to always get my way.
            If I'm working with a product manager, I'll share my product opinions, but will commit to another direction 
            if I'm told: "Thanks for the input Nick, but we are going to do this other thing instead." Similarly, I expect others
            to share their opinions/ideas with me, but respect the direction I choose when they are my decisions to own.
          </p>

        <h2>Management style</h2>
        <p>I tend to describe my style as "dangerous transparency." I will always share with you everything I'm allowed to and
          will always do my best to explain the "why" behind decisions that are being made. If I can't tell you why, I will tell
          you that. All changes I propose will also include a mechanism for evaluating whether or not the change is successful as
          I view every process/org change as an experiment to make incremental improvement. Even this doc is an experiment and will
          be updated when needed.
        </p>
        <p>Secondly, I expect everyone to do their best, do what they say, and to not fail silently. I don't expect people
          to pull off miracles, but if you say you can do a thing I'm going to either expect you to do it or ask for help the second
          you know you can't. I'm not going to hold your hand (you were hired because you are good at what you do), but I'm always ready
          to jump in an help anyway I can if you ask.
        </p>

        <h2>Regular meetings</h2>
        <p className="description">
          <h3>1:1 meetings</h3>
          <ul>
            <li><b>With ICs on my team:</b> I will go out of my way to never cancel this meeting and it will initially
            be every week for 30 minutes (we will adjust as needed later).
            I want to use this time to know how you are doing, how the team is doing, what you are frustrated by, how your manager
            is doing, how the org is doing, how your promotion is going, etc. I also want to be able to help you anyway I can and provide
            timely feedback. Lastly, I just want to get to know you better. I will share sample questions so you know what to expect.
            </li>
            <li><b>With managers on my team:</b> All the above applies. I will also ask you to write down your notes ahead of time
            in a shared document so we make sure we cover everything. I'll also want to know more about your team specifically.</li>
            <li><b>With my manager:</b> I will update our shared doc before every meeting. I will expect to talk to you at least once
            a week, and 30 minutes may not be enough. I like to follow a
            light <a target="_blank" href="https://www.15five.com">15five</a> format. I will normally answer the following questions:
              <ol>
                <li>What went well this week?</li>
                <li>What didn't go well this week?</li>
                <li>What should you be aware of?</li>
                <li>What do I need from you?</li>
                <li>What's something about me that you don't know?</li>
              </ol>
            </li>
            <li><b>With peers:</b> I want to use this time to get to know you better (see above), hear any feedback you have about me or
            my team, and learn anyways I can help you. Either of us should feel safe asking for this to be canceled if higher priority
            things are going on.</li>
          </ul>
          <h3>Staff meetings</h3>
          <p>I will have regular staff meetings with everyone in my org. This may be as frequently as once per week. The primary purpose
            of this meeting is for me to communicate down, i.e. share things I've heard, changes coming, or ideas I have. We'll also use
            this time to get to know each other better. I'll also have a weekly meeting with the managers who report to me. This will meeting
            will have an open agenda where everyone can add items to the list that we need to discuss.
          </p>

        </p>
      </main>
    </div>
  )
}
