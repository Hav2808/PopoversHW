const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.config");
const axios = require('axios');

async function checkServerStatus() {
    try {
        const response = await axios.get('http://127.0.0.1:5500/dist/index.html');
        if (response.status === 200) {
            console.log('Сервер на порту 5500 доступен');
        } else {
            console.log('Сервер ответил с ошибкой:', response.status);
        }
    } catch (error) {
        console.error('Ошибка при проверке статуса сервера:', error.message);
    }
}

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, "localhost", async (err) => {
    if (err) {
        return;
    }
    if (process.send) {
        process.send("ok");
    }

    await new Promise(resolve => setTimeout(resolve, 10000)); // Добавляем задержку перед проверкой статуса сервера
    checkServerStatus();
});