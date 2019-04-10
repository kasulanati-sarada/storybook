
describe('Storybook', async () => {
    let stories;
    beforeAll(async () => {
        ({
            stories
        } = browser.pageObj);

        await stories.openStorybook();
    });

    it('Test', async () => {
        await stories.selectStoryTab('Test Demo 4');
        await stories.selectStoryTab('Test result panel dataset');
        await browser.driver.sleep(4000);
    });
});  