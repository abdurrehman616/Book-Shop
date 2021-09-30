module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/',
                destination: 'http://localhost:5000/' // Proxy to Backend
            }
        ]
    }
}
