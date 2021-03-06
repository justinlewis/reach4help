/* eslint max-len: 0 */
import { PartialLanguage } from '../iface';

const LANG: PartialLanguage = {
  meta: {
    name: 'Русский',
  },
  strings: {
    title: 'COVID-19 Карта Взаимопомощи',
    info:
      'Чтобы помочь людям найти и присоединиться к организациям по оказанию взаимопомощи там, где они живут, вдохновить открыть собственную и/или просто поднять дух, ниже представлен растущий список проектов по оказанию взаимопомощи при пандемических катастрофах. Примечание: каждый проект автономен и самоорганизован; многие используют публичные таблицы для обмена информацией, поэтому будьте осторожны при вводе персональной информации, если вы не хотите чтобы она оказалась в публичном доступе.',
    about:
      'Эта карта часть {reach4Help} проекта осуществляемого добровольцами. Код находится в общем доступе {githubSource}. Если у вас есть вопросы или предложения, пишите на',
    githubSourceLabel: 'на GitHub',
    mdAdd1: 'Добавить информацию',
    mdAdd2: 'на карту',
    buttons: {
      fullScreen: 'Полноэкранный режим',
      exitFullScreen: 'Выйти из полноэкранного режима',
    },
    filter: 'Выбрать:',
    services: {
      any: 'Все',
      financial: 'Финансорование',
      food: 'Продовольствие',
      information: 'Информация',
      manufacturing: 'Производство',
      medicine: 'Медицина',
      mobility: 'Мобильность',
      supplies: 'Предметы снабжения',
    },
    lang: 'Язык:',
    langSelect: 'Выберите язык',
  },
};

export default LANG;
