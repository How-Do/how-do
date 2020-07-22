import React from 'react'
import Contact from './Contact'

function About() {
  return (
    <div className='about'>
      <div className='about-title-block'>
        <h1>About howDo</h1>
        <p>
          Wondering about us and 'how we do' business? Browse the FAQs below. If
          you can't find your answer, submit a form. But for the love of the
          right way to do things, don't re-submit a question already listed.
          That's just not how it's done.
        </p>
      </div>
      <div className='faqs'>
        <div className='faq-block'>
          <h5>
            What is <span className='company-title'>howDo</span>?
          </h5>
          <p>
            <span className='company-title'>howDo</span> is a discussion website
            where registered members request guidance on how to accomplish tasks
            and activities. The community provides suggestions and ideas, along
            with personal experience and feedback in the form of links, text
            posts, and images, which are then voted up or down by community
            members to indicate whether or not it’s good advice.
            <span className='company-title'> howDo</span> solves the problem of
            not knowing where to begin when starting a new task/hobby by linking
            users with a community that offers a jumping-off point to the task
            at hand.
          </p>
        </div>
        <div className='faq-block'>
          <h5>
            Who is <span className='company-title'>howDo</span> for?
          </h5>
          <p>
            <span className='company-title'>howDo</span> is for anyone looking
            to learn a new skill or improve a lackluster skill from the
            community’s collective wisdom. Users should have a basic computer
            knowledge to interact with the website for optimal results.
          </p>
        </div>
        <div className='faq-block'>
          <h5>
            What are the <span className='company-title'>howDo</span> community
            guidelines?
          </h5>
          <p>
            <span className='company-title'>howDo</span> is an expansive
            community that is created, maintained, and occupied by you, the
            howDoers. This is a community where you can post, comment, vote,
            discuss, learn, support, and connect with people who share your
            interests. The community should create a sense of belonging for the
            members. Efforts should be taken to not disparage others. Privacy
            and safety matter for every member of{' '}
            <span className='company-title'>howDo</span>. Maintain best-efforts
            to uphold and respect the privacy and safety of each member.
          </p>
        </div>
        <div className='faq-block'>
          <h5>
            Why is <span className='company-title'>howDo</span> branded with a
            raccoon?
          </h5>
          <p>
            Raccoons are known for their intelligence, inquisitiveness, and
            resourcefulness. They also have a reputation for being playful, sly,
            and even a pest. The same traits that make the raccoon highly
            adaptable are also what make it appear bothersome when employed in
            the wrong setting. howDoers are encouraged to channel their
            curiosity, contributions, and feedback in positive ways to build a
            collaborative community of effective learning. All the while,
            howDoers should be mindful that questions, answers, and ratings
            shouldn't evoke frustration or promote hostility by being
            misleading, inaccurate, or ill-advised.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default About
