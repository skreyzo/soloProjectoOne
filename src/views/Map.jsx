const React = require("react");
const Layout = require("./Layout");

function Map({ user }) {
  return (
    <Layout user={user}>
      Здесь для пользователя {user} демонстрируется карта.
      <div id="map" className="map"></div>
      <script
        src="https://api-maps.yandex.ru/2.1/?apikey=74bbc6c2-d01f-49df-8b7d-6ca9f66735cd
          &lang=ru_RU"
      ></script>
    </Layout>
  );
}

module.exports = Map;
