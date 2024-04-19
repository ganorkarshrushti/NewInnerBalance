// SleepTimeStories.js
import React from 'react';
import './SleepStories.css';

const SleepStories = () => {
  // Dummy sleep time stories data
  const stories = [
    {
      id: 1,
      title: "THE BEST SHORT FILMS ABOUT MENTAL HEALTH",
      author: "Rob Newsom",
      content: "When we talk about mental health, the focus of those discussions usually orbit around the problems associated with it – something that has been given additional attention  ....",
      url:<a href='https://www.sleepfoundation.org/mental-health/depression-and-sleep'>Read more</a>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte104lrq7gBLgCar-EnnUz2CWft8j-5v_8w&s",
    },
    {
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Jane Doe",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily be interrupted by the pills I was...",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/sydney_weiser_banner.jpg",
    },
    {
      id: 3,
      title: "Ripping the Band-Aid off depression",
      author: "Kylee Sutherland",
      content: "Anxiety and depression are really cruel beasts in tandem,” Emma said. “In high school, I had trouble maintaining relationships, and my family wasn’t super supportive of my struggles, so that made it difficult, too.” ",
      url:<a href='https://news.okstate.edu/articles/communications/2020/ripping_the_bandaid_off_depression_how_students_found_hope_on_their_mental_health_journeys.html'>Read more</a>,
      image: "https://assets-global.website-files.com/5c5c18cae821df6131fd32f3/5fe05e7c43589f228a8969ec_1%20selfharm-p-800.png",
    },
    {
      id: 2,
      title: "Psychiatrist joins UHS to treat student mental health and addiction issues",
      author: "Sydney Trainor ",
      content: "“Dr.Lu has experience working with children, adolescent and adult populations,” said Dr. Sara Coffey,",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/240212_dr_kaelyn_lu_003_banner.jpg",
    },
    {
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Anjali",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily be interrupted by the pills I was...",
      url:<a href='https://www.mannmela.in/story/anjali'>Read more</a>,
      image: "https://assets-global.website-files.com/5c5c18cae821df6131fd32f3/60827fa50587cf7528835314_Untitled_Artwork-p-800.png",
    },
    {
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Krishna Gopal",
      content: "I am sure there are permanent scars on my psyche because of this incident at such a young age, but I guess at that time, I just coped.",
      url:<a href='https://www.linkedin.com/pulse/mental-health-personal-stories-krishna-gopal/'>Read more</a>,
      image: "https://media.licdn.com/dms/image/D4D12AQHv-xM6bn9dNA/article-cover_image-shrink_720_1280/0/1696148560859?e=1718841600&v=beta&t=GaozbN7WipWED5N6HTiRBkpeU5Xagn4VXv-zEKKmMr8",
    },
    
    {
      id: 2,
      title: "When I look back, I see a version of myself, a girl who was scared and wasn’t confident to raise her voice. But I found the courage",
      author: "Kehkasha",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily ...",
      url:<a href='https://www.mannmela.in/story/kehkasha'>Read more</a>,
      image: "https://assets-global.website-files.com/5c5c18cae821df6131fd32f3/6108f15b41be0d6235d2deb7_04%20Conclusion-1.gif",
    },
    {
      id: 2,
      title: "Psychiatrist joins UHS to treat student mental health and addiction issues",
      author: "Sadam",
      content: "My struggle with accepting myself and fear of not being accepted by others almost cost me my life twice. I want to share my story because it's so important to have spaces where you can be honest, express yourself and feel vulnerable.",
      url:<a href='https://www.mannmela.in/story/sadam'>Read more</a>,
      image: "https://assets-global.website-files.com/5c5c18cae821df6131fd32f3/5ffad0285c84294a903fe8b2_banner%20(1)-p-800.png",
    },
    // Add more stories as needed
  ];

  return (
    <div className="sleep-time-stories" >
      <h2>Sleep Time Stories</h2>
      <div className="stories-container">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <div className="story-details">
              <h6><b>{story.title}</b></h6>
              <p>By: {story.author}</p>
              <p>{story.content}{story.url}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepStories;