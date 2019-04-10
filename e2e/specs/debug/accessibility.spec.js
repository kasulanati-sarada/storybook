
describe('Accessibility', async () => {
    let addonTabs, stories;
    beforeAll(async () => {
        ({
            addonTabs, stories
        } = browser.pageObj);

        await addonTabs.openStorybook();

    });

    it('Test', async () => {
        await stories.selectStoryTab('Test Demo 4');
        await stories.selectStoryTab('Test result panel dataset');
        await browser.driver.sleep(4000);
        await addonTabs.selectAddon('Accessibility');
        await browser.driver.sleep(2000);
        // since('Accessability violations should be 0, instead we have #{actual}')
        expect(await addonTabs.violations('3 Violations')).toBe(true);
        await addonTabs.selectAddon('Actions');
        await browser.driver.sleep(2000);

    });
});  