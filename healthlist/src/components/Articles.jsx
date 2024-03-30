import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const mentalIllnesses = [
  {
    id: 1,
    title: 'Anxiety Disorder',
    description: 'A mental health disorder characterized by excessive worry and fear.',
    image: 'https://www.calmclinic.com/storage/images/213/qoxihx/main/w1600.png' ,
    link: '/anxietyart',
  },
  {
    id: 2,
    title: 'Depression',
    description: 'A common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
    image: 'https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg',
    link: '/depressionart',
  },
  {
    id: 3,
    title: 'Obsessive-Compulsive Disorder(OCD)',
    description: 'A common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts and/or behaviors that he or she feels the urge to repeat over and over.',
    image: 'https://superblog.supercdn.cloud/site_cuid_cl92i00jg261301kozfglx818f/images/obsessive-compulsive-disorder-ocd-1685709447808-compressed.jpg',
    link: '/ocd',
  },
  {
    id: 4,
    title: 'Panic Disorder',
    description: 'A sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.',
    image: 'https://images.prismic.io/cerebral/42857718-d8da-4e17-8a20-b8d1fdd31158_Panic%20Attacks.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=3420&h=1897',
    link: '/panicdisorder',
  },
  {
    id: 5,
    title: 'Bipolar affective disorder',
    description: 'A type of mood disorder, previously referred to as ‘manic depression’. A person with bipolar disorder experiences episodes of mania (elation) and depression.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcGLdRM1yXyiPCTN6KMDsypH7FHMnrlX1Lw&usqp=CAU',
    link: '/bipolar-article',
  },
  {
    id: 6,
    title: 'Schizophrenia',
    description: 'A serious mental illness that affects how a person thinks, feels, and behaves',
    image: 'https://www.health.com/thmb/sMXUhpkvLq2h7VEBwdjnOH1vHIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg',
    link: '/schizophrenia',
  },
  {
    id: 7,
    title: 'Post-traumatic Stress Disorder',
    description: 'A mental health condition that can develop in some people who have experienced a shocking, scary, or dangerous event.',
    image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_7061_1662009165227664.jpg',
    link: '/ptsd',
  },
];

function Articles() {
  return (
    <div className="articles">
      {mentalIllnesses.map((illness) => (
        <div className="article-item" key={illness.id}>
          <img src={illness.image} alt={illness.title} />
          <h2>{illness.title}</h2>
          <p>{illness.description}</p>
          <Link to={illness.link} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
