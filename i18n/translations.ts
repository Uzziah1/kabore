import { Language } from './config'

export const translations: Record<Language, any> = {
  fr: {
    header: {
      dateLabel: 'Présentation personnelle'
    },
    hero: {
      welcome: 'Bienvenue',
      intro: 'Je suis Azaria,',
      job1: 'UI/UX Designer',
      job2: 'Graphiste',
      and: 'et',
      job3: 'Développeur Frontend',
      cta: 'Découvrir mon travail'
    },
    footer: {
      email: 'Email',
      github: 'GitHub',
      whatsapp: 'WhatsApp'
    }
  },

  en: {
    header: {
      dateLabel: 'Personal presentation'
    },
    hero: {
      welcome: 'Welcome',
      intro: 'I am Azaria,',
      job1: 'UI/UX Designer',
      job2: 'Graphic Designer',
      and: 'and',
      job3: 'Frontend Developer',
      cta: 'Discover my work'
    },
    footer: {
      email: 'Email',
      github: 'GitHub',
      whatsapp: 'WhatsApp'
    }
  },

  zh: {
    header: {
      dateLabel: '个人介绍'
    },
    hero: {
      welcome: '欢迎',
      intro: '我是 Azaria，',
      job1: 'UI/UX 设计师',
      job2: '平面设计师',
      and: '和',
      job3: '前端开发者',
      cta: '查看我的作品'
    },
    footer: {
      email: '邮箱',
      github: 'GitHub',
      whatsapp: 'WhatsApp'
    }
  }
}
