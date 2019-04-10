module.exports = {
    cacheDirectory: '.cache/jest',
    clearMocks: true,
    // moduleNameMapper: {
    //     './test_storyshot/style.css': './styleMock.js',
    // },
    roots: [
        // './test_storyshot',
        './stories',
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json'],
};
