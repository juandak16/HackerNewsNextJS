import { NewsData } from '@/app/lib/interfaces'
import { NewsDataFormatted } from '@/app/lib/types'

export const HOME_DATA = {
  data: [
    {
      author: 'superposeur',
      created_at: '2021-09-18T18:03:54.000Z',
      story_title: 'Teletransportation Paradox',
      story_url: 'https://www.wikipedia.org/wiki/Teletransportation_paradox',
      story_id: '28559571',
    },
    {
      author: 'heavenlyblue',
      created_at: '2021-09-18T18:03:40.000Z',
      story_title: 'How to Rapidly Improve at Any Programming Language',
      story_url: 'https://www.cbui.dev/how-to-rapidly-improve-at-any-programming-language/',
      story_id: '28577371',
    },
    {
      author: 'annadane',
      created_at: '2021-09-18T18:03:20.000Z',
      story_title: 'Ireland raises privacy question over Facebook smart glasses',
      story_url:
        'https://www.reuters.com/technology/ireland-raises-privacy-question-over-facebook-smart-glasses-2021-09-17/',
      story_id: '28576406',
    },
    {
      author: 'zeroxfe',
      created_at: '2021-09-18T18:03:15.000Z',
      story_title: 'Alexa leaks private wishlists',
      story_url: 'https://shkspr.mobi/blog/2021/09/alexa-leaks-your-private-wishlists/',
      story_id: '28575855',
    },
    {
      author: 'NaturalPhallacy',
      created_at: '2021-09-18T18:03:14.000Z',
      story_title: 'Renting a car will be a pain until at least 2022',
      story_url: 'https://www.latimes.com/business/story/2021-09-13/car-rental-problems-persist-until-at-least-2022',
      story_id: '28567558',
    },
    {
      author: 'pas',
      created_at: '2021-09-18T18:02:54.000Z',
      story_title: 'Berlin buys thousands of apartments from corporate landlords',
      story_url: 'https://thinkpol.ca/2021/09/17/berlin-buys-thousands-of-apartments-from-corporate-landlords/',
      story_id: '28575429',
    },
    {
      author: 'nostrademons',
      created_at: '2021-09-18T18:02:49.000Z',
      story_title: 'Let’s talk about founder compensation',
      story_url: 'https://auren.substack.com/p/lets-talk-about-founder-compensation',
      story_id: '28577611',
    },
    {
      author: 'rgbrgb',
      created_at: '2021-09-18T18:02:33.000Z',
      story_title: 'Let’s talk about founder compensation',
      story_url: 'https://auren.substack.com/p/lets-talk-about-founder-compensation',
      story_id: '28577611',
    },
    {
      author: 'rusk',
      created_at: '2021-09-18T18:02:30.000Z',
      story_title: 'Git Commands Explained with Cats (2017)',
      story_url: 'https://girliemac.com/blog/2017/12/26/git-purr/',
      story_id: 28575524,
    },
    {
      author: 'k__',
      created_at: '2021-09-18T18:02:12.000Z',
      story_title: 'Let’s talk about founder compensation',
      story_url: 'https://auren.substack.com/p/lets-talk-about-founder-compensation',
      story_id: '28577611',
    },
    {
      author: 'worker_thread',
      created_at: '2021-09-18T18:02:02.000Z',
      story_title: 'On YouTube’s recommendation system',
      story_url: 'https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/',
      story_id: '28567678',
    },
    {
      author: 'exporectomy',
      created_at: '2021-09-18T18:01:59.000Z',
      story_title: 'Unmanned submarine earmarked for Irish Sea freight crossings',
      story_url: 'https://www.bbc.co.uk/news/uk-northern-ireland-58571143',
      story_id: '28538028',
    },
    {
      author: 'aloisdg',
      created_at: '2021-09-18T18:01:57.000Z',
      story_title: 'Please stop closing forums and moving people to Discord',
      story_url: 'https://kotaku.com/please-stop-closing-forums-and-moving-people-to-discord-1847684851',
      story_id: '28549739',
    },
  ],
} as { data: NewsDataFormatted[] }

export const FAVES_DATA = {
  data: [
    {
      author: 'rgbrgb',
      created_at: '2021-09-18T18:02:33.000Z',
      story_title: 'Let’s talk about founder compensation',
      story_url: 'https://auren.substack.com/p/lets-talk-about-founder-compensation',
      story_id: '28577611',
    },
    {
      author: 'rusk',
      created_at: '2021-09-18T18:02:30.000Z',
      story_title: 'Git Commands Explained with Cats (2017)',
      story_url: 'https://girliemac.com/blog/2017/12/26/git-purr/',
      story_id: 28575524,
    },
    {
      author: 'k__',
      created_at: '2021-09-18T18:02:12.000Z',
      story_title: 'Let’s talk about founder compensation',
      story_url: 'https://auren.substack.com/p/lets-talk-about-founder-compensation',
      story_id: '28577611',
    },
  ],
} as { data: NewsDataFormatted[] }

export const NEWS_DATA = {
  hits: [
    {
      _highlightResult: {
        author: { matchLevel: 'none', matchedWords: [], value: 'Smoosh' },
        story_title: { matchLevel: 'none', matchedWords: [], value: 'Forecasts need to have error bars' },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://testurl.com',
        },
      },
      title: 'Test Title',
      story_text: null,
      url: 'https://testurl.com',
      points: 1,
      num_comments: 0,
      _tags: ['comment', 'story_38519277'],
      author: 'TestAuthor',
      comment_text:
        'It seems unlikely that the modelling and forecasting has become worse, so I guess there is some sort of change happening to the climate making it more unstable and less predictable?',
      created_at: '2023-11-28',
      objectID: '38523391',
      story_id: '123',
      story_title: 'Test Title',
      story_url: 'https://testurl.com',
    },
  ],
  page: 0,
  nbHits: 35905657,
  nbPages: 125,
  hitsPerPage: 8,
  processingTimeMS: 1,
  query: '',
  params: 'page=0&hitsPerPage=8&advancedSyntax=true&analyticsTags=backend',
} as NewsData

export const NEWS_DATA_WITH_EMPTY_VALUES = {
  hits: [
    {
      _highlightResult: {
        author: { matchLevel: 'none', matchedWords: [], value: 'Smoosh' },
        story_title: { matchLevel: 'none', matchedWords: [], value: 'Forecasts need to have error bars' },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://testurl.com',
        },
      },
      title: 'Test Title',
      story_text: null,
      url: 'https://testurl.com',
      points: 1,
      num_comments: 0,
      _tags: ['comment', 'story_38519277'],
      comment_text:
        'It seems unlikely that the modelling and forecasting has become worse, so I guess there is some sort of change happening to the climate making it more unstable and less predictable?',
      created_at: '2023-11-28',
      objectID: '38523391',
      story_id: '123',
      story_title: 'Test Title',
      story_url: 'https://testurl.com',
    },
  ],
  page: 0,
  nbHits: 35905657,
  nbPages: 125,
  hitsPerPage: 8,
  processingTimeMS: 1,
  query: '',
  params: 'page=0&hitsPerPage=8&advancedSyntax=true&analyticsTags=backend',
} as NewsData
