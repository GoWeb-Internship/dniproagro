## Після отримання хосту, на якому буде лежати сайт, необхідно замінити наступні рядки коду:

1. У **[static/admin/config.yml](static/admin/config.yml)** замінити на
   актуальний url:

   - **рядок 14**: _site_url_
   - **рядок 15**: _display_url_

2. У **[src/components/Seo.js](src/components/Seo.js)**:

   - **рядок 84**: заміняємо href на URL актуального сайту

3. У **[gatsby-config.js](gatsby-config.js)**:

   - **рядок 30**: _siteUrl_ замінити на актуальний url
   - **рядок 131**: _pixelId_ замінити на актуальний ID facebook pixel замовниці
