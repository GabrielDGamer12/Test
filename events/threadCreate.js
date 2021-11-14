const client = global.client;

client.on('threadCreate', (thread) => {
    try {
        thread.join()
    } catch (e) {
        console.log(e.message);
    }
})