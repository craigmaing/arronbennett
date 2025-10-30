/**
 * Testimonials Data
 * Client reviews and feedback from completed projects
 */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  content: string;
  rating: number;
  duration?: string;
  highlights: string[];
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'shannon-penryn',
    name: 'Shannon',
    location: 'Penryn, Cornwall',
    project: '6-month renovation',
    content: 'We cannot recommend Arron highly enough for his outstanding work on our 6-month renovation project. From start to finish, Arron and his team demonstrated an unwavering commitment to excellence, completing the project on time and maintaining exceptionally high standards throughout every phase. His respectful demeanour and transparent communication made the entire process a breeze, and his highly skilled craftsmanship transformed our space beyond our expectations. What truly sets Arron apart is his unwavering honesty and reliability – we always knew we could trust him to deliver quality work and stand by his word consistently. If you\'re seeking a builder who combines exceptional skill, reliability and genuine professionalism, Arron is the one for the job. We couldn\'t be happier with the outstanding results of our renovation, thanks to him and his dedicated team.',
    rating: 5,
    duration: '6 months',
    highlights: [
      'Outstanding work quality',
      'On time delivery',
      'Skilled craftsmanship',
      'Honest and reliable',
      'Highly professional'
    ],
    featured: true
  },
  {
    id: 'roseland-barn-conversion',
    name: 'Tom & Laura',
    location: 'Roseland, Cornwall',
    project: 'Barn conversion',
    content: 'Arron took on a complex barn conversion at our home and was committed, reliable, trustworthy and transparent throughout. It was a pleasure to work with him and the team. Over a six-month period, Arron and the team transformed our former agricultural barn into a great family living space, including a state-of-the-art kitchen and remodelled family bathroom and en-suite. He supported us to install ground-source and underfloor heating and opened up the living space beautifully. Arron never failed to turn up on time, every single day. If there was a problem or delay, he was open about the challenge and worked through it with us. He sought our advice when he needed it and was committed to delivering a quality job. He was transparent about his rate and his pricing. We now have a fantastic family home thanks to Arron\'s hard work and dedication.',
    rating: 5,
    duration: '6 months',
    highlights: [
      'Complex barn conversion',
      'Reliable and trustworthy',
      'Transparent communication',
      'State-of-the-art finish',
      'Exceeded expectations'
    ],
    featured: true
  },
  {
    id: 'roseland-landscaping',
    name: 'Anonymous',
    location: 'Roseland Peninsula, Cornwall',
    project: 'Hard landscaping',
    content: 'Arron and his team carried out all of the external building work to landscape our garden. This included working with slate stone to build terraced traditional hedges, laying reclaimed granite cobbles to create pathways and working with reclaimed and new granite, lime mortar and slate flagstones. The work they carried out was completed to an exceptional standard, it is very rare to find a team that has the traditional skills required to build something that looks as though it was always there and blends in seamlessly with buildings from a bygone age. They always work with a smile and genuine enthusiasm and we genuinely enjoyed having them here immensely. I am absolutely sure it won\'t be long until they are back again.',
    rating: 5,
    highlights: [
      'Exceptional standard',
      'Traditional skills',
      'Expert with hedges and cobbles',
      'Seamless execution',
      'Beautiful results'
    ],
    featured: true
  },
  {
    id: 'tom-laura-covid',
    name: 'Tom and Laura',
    location: 'Roseland, Cornwall',
    project: 'COVID-era renovation',
    content: 'Arron arrived on time and was polite and very positive about the project from day one. Works began in February 2020 with the stripping out of the property after Arron had arranged all the necessary trades and the all important paperwork! Arron managed to keep the project ticking along smoothly throughout the COVID-19 lockdown and completed the project at the end of September 2020. As remote clients it was very important for us to have a trusted and open working relationship which Arron provided throughout. Regular updates and photos of progress via whatapp and email made the project easier to manage and worked perfectly for us.',
    rating: 5,
    highlights: [
      'Trusted completely',
      'Open communication',
      'Regular updates',
      'Remote project management',
      'Excellent quality'
    ],
    featured: true
  },
  {
    id: 'neil-bridle-feock',
    name: 'Neil Bridle',
    location: 'Feock, Cornwall',
    project: 'New build stone masonry',
    content: 'Arron\'s support and guidance for my new build has been invaluable. His skills are many, but particularly as a stone mason, His work is completed to a very high standard. Highly recommended',
    rating: 4,
    highlights: [
      'Invaluable support',
      'Stone mason expertise',
      'Very high standard',
      'Attention to detail',
      'Highly recommended'
    ],
    featured: true
  }
];

export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);

export const getTestimonialById = (id: string) =>
  testimonials.find(t => t.id === id);

export const getAverageRating = () => {
  const total = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (total / testimonials.length).toFixed(1);
};
