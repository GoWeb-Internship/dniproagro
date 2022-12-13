## Google Maps API

1. Щоб отримати Google Maps API Key, необхідно мати обліковий запис Google.
   Переходимо на платформу за
   [посиланням](https://cloud.google.com/maps-platform) і натискаємо кнопку «Get
   Started».

2. На цій платформі уже створений акаунт для dnipro.agro01@gmail.com . Створений
   проект DniproAgro, з готовим API KEY за
   [посиланням](https://console.cloud.google.com/apis/credentials?authuser=3&project=centered-carver-370905)
   у розділі Credentials. Лишилося лише заповнити всі дані, які стосуються
   банківської карти.
   [Заповнити тут](https://console.cloud.google.com/billing/linkedaccount?authuser=3&project=centered-carver-370905)

3. У розділі Credentials є API key для вашого проекту під назвою DniproAgroReal.
   Клікнувши по ньому, можна побачити дані апіключа, його необхідно скопіювати
   та зберегти для подальшого використання на сайті.

4. Також необхідно налаштувати обмеження для вашого ключа, аби ключ був
   недійсним, якщо потрапить до третіх осіб. У розділі Credentials клікаємо на
   DniproAgroReal, шукаємо поле Application restrictions, у ньому вибираємо HTTP
   referrers (web sites)(уже обрано). Спускаємося нижче, бачимо поле ADD,
   клікаємо на нього і вставляємо URL вашого актуального сайту, обовязково в
   кінці з `/*`. Приклад: `https://lucent-semolina-877c33.netlify.app/*` або
   `https://vashdomain.com/*` . Тільки на тих сайтах, які вказали у Website
   Restrictions буде відображатися гугл карта.

5. Якщо Google Maps API буде отримано з іншого облікового запису, то необхідно
   дотримуватися інструкцій з [сайту](https://art-lemon.com/google-maps-api-key)
   і
   [сайту](https://q-seo.com.ua/blog/kak-poluchit-klyuch-api-dlya-google-maps/)
