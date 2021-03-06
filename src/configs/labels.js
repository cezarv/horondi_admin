import { mapToLanguages } from '../utils/map-languages';

const labels = {
  sort: 'Сортувати за',
  search: 'Шукати',
  goToPage: 'Перейти на сторінку',
  user: {
    unknownAdmin: 'Невідомий адмін',
    guestUser: 'Гість'
  },
  news: {
    authorName: {
      ua: "Ім'я автора",
      en: 'Author name'
    },
    title: {
      ua: 'Заголовок',
      en: 'Title'
    },
    text: {
      ua: 'Текст',
      en: 'Text'
    }
  },
  contacts: {
    schedule: {
      ua: 'Розклад',
      en: 'Schedule'
    },
    adress: {
      ua: 'Адреса',
      en: 'Adress'
    }
  },
  model: {
    name: {
      ua: 'Назва',
      en: 'Name'
    },
    description: {
      ua: 'Опис',
      en: 'Description'
    },
    image: 'Фото моделі',
    availableCategory: 'Категорія',
    available: 'Доступний',
    show: 'Показати',
    defaultElement: 'За замовчуванням',
    availableForConstructor: 'Доступний для конструктора',
    constructorBasic: 'Основа',
    constructorPattern: 'Гобелен',
    constructorFrontPocket: 'Передня кишеня',
    constructorBottom: 'Низ',
    constructorPhoto: 'Фото для конструктора',
    baseConstructorElementPrice: 'Базова ціна',
    constructorMaterial: 'Матеріал',
    constructorColor: 'Колір',
    avatarText: 'Фото',
    priority: 'Пріорітет',
    showEnable: 'Так',
    showDisable: 'Ні',
    availablePatternsForConstructor: 'Доступні патерни для контсруктора',
    constructorName: {
      ua: 'Назва елементу конструктора',
      en: 'Constructor element name'
    }
  },
  categories: {
    switchCategory: "Категорія, на яку замінити пов'язані товари",
    categoryCode: 'Код категорії',
    categoryName: {
      ua: 'Назва категорії',
      en: 'Category name'
    }
  },
  header: {
    name: mapToLanguages("І'мя", 'Name'),
    link: 'Посилання',
    priority: 'Пріорітет'
  },
  pattern: {
    image: 'Фото гобелена',
    material: 'Матеріал',
    available: 'Доступний',
    handmade: 'Зроблений вручну',
    avatarText: 'Фото',
    constructorImgText: 'Фото для конструктора',
    form: {
      name: mapToLanguages("І'мя", 'Name'),
      description: mapToLanguages('Опис', 'Description')
    },
    patternName: {
      ua: 'Назва гобелену',
      en: 'Pattern name'
    },
    patternDescription: {
      ua: 'Опис гобелену',
      en: 'Pattern description'
    }
  },
  material: {
    image: mapToLanguages('Фото матеріалу', 'Material photo'),
    purpose: mapToLanguages('Застосування', 'Purpose'),
    available: mapToLanguages('Доступний', 'Available'),
    name: mapToLanguages('Назва матеріалу', 'Material name'),
    description: mapToLanguages('Опис матеріалу', 'Material description'),
    additionalPrice: mapToLanguages('Додаткова ціна', 'Additional price')
  },
  color: {
    name: 'Назва кольору',
    simpleName: 'Проста назва кольору',
    colorHex: '# Колір',
    mainLabel: 'Колір'
  },
  comment: {
    text: 'Текст коментаря',
    show: 'Видимий',
    productInfo: 'Інформація про продукт'
  },
  businessPage: [
    {
      label: mapToLanguages('Заголовок', 'Title'),
      errorLabel: mapToLanguages('Введіть заголовок', 'Pass title')
    },
    {
      label: mapToLanguages('Текст', 'Text'),
      errorLabel: mapToLanguages(
        'Введіть текст для сторінки',
        'Pass text for the page'
      )
    }
  ],
  product: {
    sortBySelectOptions: [
      { label: 'популярністю', value: 'popularity' },
      { label: 'від дорогих до дешевих', value: 'sortDesc' },
      { label: 'від дешевих до дорогих', value: 'sortAsc' },
      { label: 'рейтингом', value: 'rate' }
    ],
    stepsLabels: [
      'Введіть інформацію про продукт',
      'Оберіть категорію, підкатегорію, модель, колір, гобелен та ціну продукту',
      'Вкажіть ціну продукту',
      'Оберіть матеріали та кольори до них',
      'Завантажте фото для продукту',
      'Підтвердження створення продукту'
    ],
    infoLabels: [
      {
        label: { ua: 'Назва', en: 'Name' },
        name: 'name',
        required: true
      },
      {
        label: { ua: 'Опис', en: 'Description' },
        name: 'description',
        isEditor: true
      }
    ],
    materialLabels: [
      {
        label: 'Основний матеріал',
        name: 'mainMaterial',
        required: true,
        validation: 'string'
      },
      {
        label: 'Колір основного матеріалу',
        name: 'mainColor',
        required: true,
        validation: 'string'
      },
      {
        label: 'Нижній матеріал',
        name: 'bottomMaterial',
        required: false,
        validation: 'string'
      },
      {
        label: 'Колір нижнього матеріалу',
        name: 'bottomColor',
        required: false,
        validation: 'string'
      },
      {
        label: 'Внутрішній матеріал',
        name: 'innerMaterial',
        required: false,
        validation: 'string'
      },
      {
        label: 'Колір внутрішнього матеріалу',
        name: 'innerColor',
        required: false,
        validation: 'string'
      }
    ],
    selectsLabels: [
      {
        label: 'Категорія ',
        name: 'category',
        type: 'select',
        required: true,
        multiple: false,
        validation: 'string'
      },
      {
        label: 'Модель ',
        name: 'model',
        type: 'select',
        required: true,
        multiple: false,
        validation: 'string'
      },
      {
        label: 'Розміри ',
        name: 'sizes',
        type: 'select',
        required: true,
        multiple: true,
        validation: 'string'
      },
      {
        label: 'Гобелен ',
        name: 'pattern',
        type: 'select',
        required: true,
        multiple: false,
        validation: 'string'
      },
      {
        label: 'Замочок',
        name: 'closure',
        type: 'select',
        required: true,
        multiple: false,
        validation: 'string'
      },
      {
        label: 'Довжина лямок(см)',
        name: 'strapLengthInCm',
        type: 'number',
        required: true,
        multiple: false,
        validation: 'number'
      }
    ],
    optionsLabels: [
      { label: 'Розміри', name: 'sizes' },
      { label: 'Нижні матеріали', name: 'bottomMaterials' }
    ],
    sizeCardsLabels: [
      { label: 'Розмір', name: 'name' },
      { label: `Об'єм(л)`, name: 'volumeInLiters' },
      { label: 'Ширина(см)', name: 'widthInCm' },
      { label: 'Висота(см)', name: 'heightInCm' },
      { label: 'Глибина(см)', name: 'depthInCm' }
    ],
    materialsLabels: [{ label: `Назва`, name: 'name' }],
    optionsValues: {
      sizes: [],
      bottomMaterials: [],
      additions: false
    },
    priceLabel: {
      label: 'Ціна(USD) ',
      name: 'basePrice'
    }
  },
  orderProduct: {
    category: 'Категорія',
    subcategory: 'Підкатегорія',
    model: 'Модель',
    name: 'Назва',
    pattern: 'Гобелен',
    closure: 'Матеріал замку',
    bottomMaterial: 'Матеріал дна',
    bottomColor: 'Колір дна',
    actualPrice: 'Ціна'
  },
  orderRecipient: {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    patronymicName: 'По-батькові',
    email: 'e-mail',
    phoneNumber: 'Номер телефону',
    commentary: 'Коментар'
  },
  deliveryDetails: {
    country: 'Країна',
    region: 'Область',
    city: 'Місто',
    zipcode: 'Поштовий індекс',
    street: 'Вулиця',
    house: 'Будинок',
    flat: 'Квартира'
  },
  sizeValues: {
    heightInCm: 'Висота (см.)',
    widthInCm: 'Ширина (см.)',
    depthInCm: 'Глибина (см.)',
    volumeInLiters: "Об'єм (л.)",
    weightInKg: 'Вага (кг.)'
  },
  emailQuestionsLabels: {
    en: {
      ALL: 'ALL',
      PENDING: 'PENDING',
      SPAM: 'SPAM',
      ANSWERED: 'ANSWERED'
    },
    ua: {
      ALL: 'Всі',
      PENDING: 'Очікує відповіді',
      SPAM: 'Спам',
      ANSWERED: 'Відповідь надано'
    },
    placeholder: 'Відповідь ...'
  },
  doughnut: {
    select: [
      { label: 'Популярні категорії за весь час', value: 'categories' },
      { label: 'Останні замовлення', value: 'orders' }
    ],
    dateMenuOptions: [
      { label: 'За 7 Днів', value: 7 },
      { label: 'За 14 Днів', value: 14 },
      { label: 'За місяць', value: 30 },
      { label: 'За 3 місяці', value: 90 },
      { label: 'За рік', value: 365 }
    ]
  },
  bar: {
    select: [
      { label: 'Популярні продукти за весь час', value: 'products' },
      { label: 'Виконані замовлення', value: 'orders' },
      { label: 'Останні зареєстровані користувачі', value: 'users' }
    ],

    days: {
      7: 'byDay',
      14: 'byDay',
      30: 'byThreeDays',
      90: 'byWeek',
      365: 'byMonth'
    },
    descriptions: {
      users: {
        byDay: 'Цей день',
        byThreeDays: 'Ці дні',
        byWeek: 'Цей тиждень',
        byMonth: 'Цей місяць'
      },
      orders: {
        byDay: 'Цей день',
        byThreeDays: 'Ці дні',
        byWeek: 'Цей тиждень',
        byMonth: 'Цей місяць'
      },
      products: {
        byDay: 'Кількість покупок',
        byThreeDays: 'Кількість покупок',
        byWeek: 'Кількість покупок',
        byMonth: 'Кількість покупок'
      }
    },
    message: {
      users: 'Кількість користувачів за цей час: ',
      orders: 'Кількість замовлень за цей час: ',
      products: 'Кількість продуктів за цей час: '
    }
  },
  orderTabs: {
    general: 'Загальне',
    receiver: 'Отримувач',
    products: 'Продукти',
    delivery: 'Доставка'
  },
  deliveryLabels: {
    deliveryMethodLabel: 'Спосіб доставки',
    byCourierLabel: "Доставка кур'єром:",
    invoiceNumberLabel: 'Номер накладної',
    warehouseNumberLabel: 'Номер відділення: ',
    sentAtLabel: 'Відправлено о:',
    deliveryCostLabel: 'Вартість доставки',
    courierOfficeNameLabel: 'Номер відділення'
  },
  generalLabels: {
    deliveryStatusLabel: 'Статус замовлення:',
    paymentMethodLabel: 'Метод оплати:',
    paymentStatusLabel: 'Статус оплати:',
    isPaidLabel: 'Оплачено:',
    cancellationReasonLabel: 'Причина скасування',
    creationDateLabel: 'Дата створення:',
    updateDateLabel: 'Дата оновлення:',
    userCommentLabel: 'Коментар користувача'
  },
  productsLabels: {
    notListed: 'Не вказано',
    additionsLabel: 'Додатки',
    colorsLabel: 'Кольори',
    sizeLabel: 'Розмір'
  },
  orders: {
    select: [
      { label: 'Створені', value: 'CREATED' },
      { label: 'Виконані', value: 'CONFIRMED' },
      { label: 'Оброблені', value: 'PRODUCED' },
      { label: 'Скасовані', value: 'CANCELLED' },
      { label: 'Повернені', value: 'REFUNDED' },
      { label: 'Надіслані', value: 'SENT' },
      { label: 'Доставлені', value: 'DELIVERED' },
      { label: 'Всі', value: 'All' }
    ]
  },
  homePageSlide: {
    image: 'Фото слайду',
    title: { ua: 'Заголовок слайду', en: 'Slider title' },
    show: 'Доступний',
    description: { ua: 'Опис слайду', en: 'Slide description' },
    link: 'Посилання для переходу'
  },
  lableTitle: {
    ua: 'Заголовок ua',
    en: 'Заголовок en'
  },

  sizePageLabels: {
    sizesHeader: 'sizes-header',
    sizesTable: 'sizesTable'
  },

  sizeInputData: {
    sizeMetricData: [
      'heightInCm',
      'widthInCm',
      'depthInCm',
      'volumeInLiters',
      'weightInKg'
    ],
    sizePricesData: ['simpleNameUa', 'simpleNameEn']
  },

  sizeLabels: {
    ua: {
      heightInCm: 'Висота',
      widthInCm: 'Ширина',
      depthInCm: 'Глибина',
      volumeInLiters: "Об'єм (літри)",
      weightInKg: 'Вага',
      additionalPrice: 'Додаткова ціна',
      simpleNameUa: 'Назва(Укр)',
      simpleNameEn: 'Назва(Eng)',
      name: "Ім'я",
      available: 'Доступний'
    },
    en: {
      heightInCm: 'heightInCm',
      widthInCm: 'widthInCm',
      depthInCm: 'depthInCm',
      volumeInLiters: 'volumeInLiters',
      weightInKg: 'weightInKg',
      additionalPrice: 'additionalPrice',
      simpleNameUa: 'simpleNameUa',
      simpleNameEn: 'simpleNameUa',
      name: 'name',
      available: 'available'
    }
  }
};
export default labels;
