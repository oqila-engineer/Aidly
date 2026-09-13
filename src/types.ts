export type Language = 'uz' | 'en' | 'ru';

export type UrgencyLevel = 'critical' | 'high' | 'moderate' | 'mild';

export type Category = 'trauma' | 'respiratory' | 'environmental' | 'medical' | 'all';

export interface GuideStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
}

export interface TopicTranslation {
  title: string;
  shortDescription: string;
  keywords: string[];
  steps: GuideStep[];
  doNot: string[];
  warnings: string[];
  whenToSeekHelp: string[];
  illustrationCaption: string;
}

export interface FirstAidTopic {
  id: string;
  category: 'trauma' | 'respiratory' | 'environmental' | 'medical';
  urgencyLevel: UrgencyLevel;
  iconName: string;
  illustrationType: string;
  isQuickHelp?: boolean;
  relatedTopicIds: string[];
  translations: Record<Language, TopicTranslation>;
}

export interface EmergencyContact {
  number: string;
  titleKey: string;
  descKey: string;
  isPrimary?: boolean;
}
