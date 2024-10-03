import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    kg: {
      translation: {
        key0: "- курулуш дүйнөсүндөгү сиздин гид, ишенимдүү жана жайлуу үйлөрдү түзүүгө умтулгандардын баарын бириктирет, ошондой эле окурмандарга горизонтторду кеңейтүүгө жана жаңы нерсени үйрөнүүгө жардам берет",
        key1: "Категориялар",
        key2: "Кыймылсыз мүлк",
        key3: "Люкс майрамы",
        key4: "Интервью",
        key5: "Дизайн",
        key6: "Продукциялар",
        key7: "Компания",
        key8: "Биз жөнүндө",
        key9: "Байланыш",
        key10: "Иш убактысы: 9:00дөн 20:00гө чейин",
        key11: "Окшош маалымат:",
        key12: "Сын-пикирлер",
        key13: "Кошуу",
        key14: "Азырынча комментарийлер жок. Сиз биринчи боло аласыз!",
        key15:
          "Пикириңиз үчүн рахмат. Сиздин пикириңиз модератордун кароосунан кийин чыгат. Бул бир аз убакытты алышы мүмкүн.",
      },
    },
    ru: {
      translation: {
        key0: "- ваш гид в мире строительства, объединяющий всех, кто стремится создавать надежные и удобные дома, а также поможет читателям расширить свой кругозор и узнать что-то новое",
        key1: "Категории",
        key2: "Недвижимость",
        key3: "Роскошный отдых",
        key4: " Интервью",
        key5: "Дизайн",
        key6: "Продукты",
        key7: "Компания:",
        key8: "О нас",
        key9: "Контакты",
        key10: "График работы: с 9:00 до 20:00",
        key11: "ЧИТАЙТЕ ТАКЖЕ:",
        key12: "Отзывы",
        key13: "Добавить",
        key14: "Нет комментариев. Вы можете быть первым!",
        key15:
          "Спасибо за ваш отзыв. Ваш комментарий появится после проверки модератором. Это может занять некоторое время.",
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
