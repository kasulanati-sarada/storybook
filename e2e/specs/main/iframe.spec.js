
describe('IFrame', async () => {
    let stories, iFrame, addonTabs;
    beforeAll(async () => {
        ({
            stories, iFrame, addonTabs
        } = browser.pageObj);

        await iFrame.openStorybook();
        await stories.selectStoryTab('Quick Search');
        await browser.driver.sleep(500);
    });

    afterEach(async () => {
        // await iFrame.switchToDefaultContent();
        // await addonTabs.clearActionLogger();
        await browser.driver.sleep(1500);
    });

    xit('Quick Search - Result Set', async () => {
        await stories.selectStoryTab('Quick Search');
        await browser.driver.sleep(2000);
        await stories.selectStoryTab('Dataset Result');
        await iFrame.switchToIFrame();
        await iFrame.selectDataset('Quill text visualization');

    });

    it('Quick Search - Dataset Result', async () => {
        await stories.selectStoryTab('Dataset Result');
        await iFrame.switchToIFrame();
        await iFrame.selectDataset('Quill text visualization');
        await iFrame.switchToDefaultContent();
        await browser.driver.sleep(500);
        await addonTabs.selectAddon('Action');
        // since('Action log is supposed to be #{expected}, instead we have #{actual}')
        expect(await addonTabs.logger('0423520C11E85DEC45100080EFE5063F')).toBe(true);
        await addonTabs.clearActionLogger();
    });

    it('Quick Search - Document Result', async () => {
        await stories.selectStoryTab('Document Result');
        await iFrame.switchToIFrame();
        await iFrame.selectDocument('Attribute forms outline');
        await iFrame.switchToDefaultContent();
        await browser.driver.sleep(500);
        // since('Action log is supposed to be #{expected}, instead we have #{actual}')
        // expect(await addonTabs.logger('A4A6DFDA11E7F7E110B01080EF15D8C7')).toBe(true);
    });

    it('Quick Search - Dossier Result', async () => {
        await stories.selectStoryTab('Dossier Result');
        await iFrame.switchToIFrame();
        await iFrame.selectDossier('Dossier A');
        await iFrame.switchToDefaultContent();
        await browser.driver.sleep(500);
        await addonTabs.selectAddon('Action');
        // since('Action log is supposed to be #{expected}, instead we have #{actual}')
        // expect(await addonTabs.logger('CBDB1AD211E93622182B0080EFC58051')).toBe(true);
    });

    it('Quick Search - Hypercard Result', async () => {
        await stories.selectStoryTab('Cards Result');
        await iFrame.switchToIFrame();
        await iFrame.selectCard('HyperCard 1');
        await iFrame.switchToDefaultContent();
        await browser.driver.sleep(500);
        await addonTabs.selectAddon('Action');
        // since('Action log is supposed to be #{expected}, instead we have #{actual}')
        // expect(await addonTabs.logger('7C5B21A811E7F57A10B00080EF15D8C7')).toBe(true);
    });

    xit('Quick Search - Report Result', async () => {
        await stories.selectStoryTab('Report Result');
        await iFrame.switchToIFrame();
        await iFrame.selectReport('Claims Report');
        await browser.driver.sleep(500);
        await addonTabs.selectAddon('Action');
        // since('Action log is supposed to be #{expected}, instead we have #{actual}')
        expect(await addonTabs.logger('A540D54C11E7EA791BEE0080EF7556EF')).toBe(true);
    });
});