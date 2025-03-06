import React from 'react';
import { Link } from 'react-router-dom';
import MoreArticles from '../pages/MoreArticles';
import './Articles.css';

const mentalIllnesses = [
  {
    id: 1,
    title: 'Anxiety Disorder',
    description: 'A mental health disorder characterized by excessive worry and fear.',
    image: 'https://www.calmclinic.com/storage/images/213/qoxihx/main/w1600.png',
    link: 'https://newsinhealth.nih.gov/2016/03/understanding-anxiety-disorders',
  },
  {
    id: 2,
    title: 'Depression',
    description: 'A common and serious medical illness that negatively affects how you feel, the way you think, and how you act.',
    image: 'https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg',
    link: 'https://psychcentral.com/depression/top-signs-symptoms-of-depression#10-everyday-signs-of-depression',
  },
  {
    id: 3,
    title: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'A chronic disorder where a person has uncontrollable, reoccurring thoughts and behaviors.',
    image: 'https://superblog.supercdn.cloud/site_cuid_cl92i00jg261301kozfglx818f/images/obsessive-compulsive-disorder-ocd-1685709447808-compressed.jpg',
    link: 'https://psychcentral.com/ocd/ocd-overview#symptoms',
  },
  {
    id: 4,
    title: 'Panic Disorder',
    description: 'Sudden episodes of intense fear that trigger severe physical reactions.',
    image: 'https://images.prismic.io/cerebral/42857718-d8da-4e17-8a20-b8d1fdd31158_Panic%20Attacks.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=3420&h=1897',
    link: 'https://psychcentral.com/anxiety/panic-disorder-overview#whats-panic-disorder',
  },
  {
    id: 5,
    title: 'Bipolar Affective Disorder',
    description: 'A mood disorder with episodes of mania and depression.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcGLdRM1yXyiPCTN6KMDsypH7FHMnrlX1Lw&usqp=CAU',
    link: 'https://psychcentral.com/bipolar/bipolar-disorder-symptoms#bipolar-disorder-vs-depression',
  },
  {
    id: 6,
    title: 'Schizophrenia',
    description: 'A serious mental illness affecting thoughts, feelings, and behavior.',
    image: 'https://www.health.com/thmb/sMXUhpkvLq2h7VEBwdjnOH1vHIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg',
    link: 'https://psychcentral.com/schizophrenia/schizophrenia-symptoms#symptoms',
  },
  {
    id: 7,
    title: 'Post-Traumatic Stress Disorder (PTSD)',
    description: 'A mental health condition triggered by traumatic events.',
    image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_7061_1662009165227664.jpg',
    link: 'https://psychcentral.com/ptsd/ptsd-overview#symptoms',
  },
  {
    id: 8,
    title: 'Adjustment Disorder',
    description: 'An emotional response to significant life events or changes.',
    image: 'https://cdn.pixabay.com/photo/2021/08/21/12/41/fear-6562668_1280.png',
    link: 'https://psychcentral.com/disorders/adjustment-disorder-symptoms#symptoms',
  },
  { id: 9, title: 'Agoraphobia', description: 'An intense fear of being in public or crowded places.', image: 'https://cdn.pixabay.com/photo/2016/01/22/17/10/anxiety-1156225_640.jpg', link: 'https://psychcentral.com/anxiety/agoraphobia-symptoms' },
  { id: 10, title: 'Teenage Depression', description: 'A group of mental health disorders associated with sad, empty, or irritable moods that can affect your ability to function.', image: 'https://cdn.pixabay.com/photo/2022/09/12/09/15/depression-7448936_640.jpg', link: 'https://psychcentral.com/lib/teenage-depression' },
  { id: 11, title: 'Addictions', description: 'Addiction chnages your brain in a way that makes stopping more difficult.', image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/4/2021/11/addiction-mental-health-732x549-thumbnail-732x549.jpg', link: 'https://psychcentral.com/substance-use-disorders' },
  { id: 12, title: 'Specific Phobias', description: 'An intense fear about an object or situation.', image: 'https://cdn.pixabay.com/photo/2021/08/21/12/41/fear-6562668_1280.png' },
  { id: 13, title: 'Trauma', description: 'Trauma is a response to an intensely stressful event(s) or situations', image: 'https://cdn.pixabay.com/photo/2019/07/26/09/33/mental-illness-4364348_640.png', link: 'https://psychcentral.com/health/what-is-trauma' },
  { id: 14, title: 'A Guide to Anxiety', description: ' A fuzzy low thrum under your thoughts and movements. ', image: 'https://hbr.org/resources/images/article_assets/2024/11/Nov25_04_2151115109.jpg', link: 'https://hbr.org/2024/11/an-anxious-persons-guide-to-managing-anxiety' },
  { id: 15, title: '9 Questions to Help You Figure Out Why You’re Burned Out', description: 'Sustained feelings of exhaustion', image: 'https://hbr.org/resources/images/article_assets/2024/06/June24_06_200172215-002.jpg', link: 'https://hbr.org/2024/06/9-questions-to-help-you-figure-out-why-youre-burned-out' },
  { id: 16, title: '10 tips to improve mental well-being', description: 'To encounter and improve your mental-well being', image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MASLTJR2UBCW5NFGVSMFQZGI5Q.jpg&w=916', link: 'https://www.washingtonpost.com/wellness/2024/12/29/anxiety-depression-stress-coping-strategies/' },
  { id: 17, title: 'Oppositional Defiant Disorder', description: 'Overly rebellious behavior can be a symptom of a mental health condition.', image: 'https://cdn.pixabay.com/photo/2019/03/22/16/10/disorder-4073570_1280.png', link: 'https://psychcentral.com/disorders/oppositional-defiant-disorder-symptoms#symptoms' },
  { id: 18 , title:'Guide for kids ADHD', description:'strategies you can practice to help make discipline easier for both you and your children.', image:'https://cdn.pixabay.com/photo/2024/03/13/12/45/woman-8630961_640.jpg', link:'https://psychcentral.com/adhd/parents-guide-for-disciplining-kids-with-adhd?utm_source=ReadNext' },
    { id: 19 , title:'Narcolepsy', description:'Suddenly fall asleep with no warning. This can happen at any time during the day and last from several seconds to a few minutes.', image:'https://media.post.rvohealth.io/wp-content/uploads/sites/4/2021/09/160273-What-Are-the-Symptoms-of-Narcolepsy_header_1296x728-1024x575.jpg', link:'https://psychcentral.com/disorders/narcolepsy-symptoms' },
    { id: 20 , title:'Dissociative Identity Disorder (DID)', description:'Means you may experience shifts between at least two separate identity states, or personalities.', image:'https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529903_640.png', link:'https://psychcentral.com/disorders/dissociative-identity-disorder#signs-and-symptoms' },
];

function Articles() {
  return (
    <div className="articles-container">
      <h1 className="section-title">Mental Health Articles</h1>
      <div className="articles-grid">
        {mentalIllnesses.map((illness) => (
          <div className="article-card" key={illness.id}>
            <img src={illness.image} alt={illness.title} className="article-image" />
            <div className="article-content">
              <h2>{illness.title}</h2>
              <p>{illness.description}</p>
              <Link to={illness.link} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <MoreArticles />
    </div>
  );
}

export default Articles;
