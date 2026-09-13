import { FirstAidTopic, Language } from '../types';
import { topicsBatch1 } from './topicsData1';
import { topicsBatch2 } from './topicsData2';

export const ALL_TOPICS: FirstAidTopic[] = [...topicsBatch1, ...topicsBatch2];

export const getTopicById = (id: string): FirstAidTopic | undefined => {
  return ALL_TOPICS.find((topic) => topic.id === id);
};

export const getQuickHelpTopics = (): FirstAidTopic[] => {
  return ALL_TOPICS.filter((topic) => topic.isQuickHelp);
};

export const getRelatedTopics = (topic: FirstAidTopic): FirstAidTopic[] => {
  return ALL_TOPICS.filter((t) => topic.relatedTopicIds.includes(t.id));
};

export const searchTopics = (query: string, language: Language): FirstAidTopic[] => {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return ALL_TOPICS;

  return ALL_TOPICS.filter((topic) => {
    // Check in the selected language first
    const currentTrans = topic.translations[language];
    if (currentTrans) {
      if (currentTrans.title.toLowerCase().includes(trimmed)) return true;
      if (currentTrans.shortDescription.toLowerCase().includes(trimmed)) return true;
      if (currentTrans.keywords.some((k) => k.toLowerCase().includes(trimmed))) return true;
    }

    // Also support cross-lingual search (e.g., user enters "burn" or "kuyish" or "ожог" regardless of current UI language)
    const languages: Language[] = ['uz', 'en', 'ru'];
    for (const lang of languages) {
      const trans = topic.translations[lang];
      if (trans) {
        if (trans.title.toLowerCase().includes(trimmed)) return true;
        if (trans.keywords.some((k) => k.toLowerCase().includes(trimmed))) return true;
      }
    }

    return false;
  });
};
