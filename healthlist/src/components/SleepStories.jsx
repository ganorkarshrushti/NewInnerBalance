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
      title: "Student shares story of mental health struggle and survival",
      author: "Jane Doe",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily be interrupted by the pills I was...",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/sydney_weiser_banner.jpg",
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
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Jane Doe",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily be interrupted by the pills I was...",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/sydney_weiser_banner.jpg",
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
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Jane Doe",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily be interrupted by the pills I was...",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/sydney_weiser_banner.jpg",
    },
    {
      id: 2,
      title: "Student shares story of mental health struggle and survival",
      author: "Jane Doe",
      content: "As I was driving home down the back roads of the-middle-of-nowhere, Oklahoma, my tears and screams could only momentarily ...",
      url:<a href='https://news.okstate.edu/articles/communications/2020/student_shares_story_of_mental_health_struggle_and_survival.html'>Read more</a>,
      image: "https://news.okstate.edu/articles/communications/images/sydney_weiser_banner.jpg",
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