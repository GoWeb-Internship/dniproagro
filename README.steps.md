## Після отримання хосту, на якому буде лежати сайт, необхідно замінити декотрі строчки коду

1. У [static/admin/config.yml](static/admin/config.yml) - рядки 14, 15 замінити
   на актуальний url:

   - site_url:
   - display_url:

2. У components/Seo.js - рядок 84:

- заміняємо href на URL актуального сайту

3. У gatsby-config.js рядок 30, замінити на актуальний url:

   - siteUrl:
   - рядок 131: замінити pixelId на актуальний ID facebook pixel замовниці
