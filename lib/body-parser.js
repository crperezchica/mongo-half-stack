module.exports = req => {
    return new Promise((res) => {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            if(!body) return res({});

            const parsed = JSON.parse(body);
            res(parsed);
        });
    });
};