const io = require("socket.io-client");
const getLocation = require("./getLocation");

/**
 * Connects to the Xornet Backend and sends system statistics every second.
 */
module.exports = async function connectToXornet(location) {
  return new Promise(async (resolve, reject) => {
    let socket = io.connect(process.env.BACKEND_WS_URL, {
      reconnect: true,
      auth: {
        location: await getLocation(),
        type: "johanna",
      },
    });
    console.log("🌊 Connected to Xornet \n".cyan);
    resolve(socket);
  });
};
