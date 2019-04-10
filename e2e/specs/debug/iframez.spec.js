
// import switchToIframe from '../../iFrameSwitch';
describe('StoryBook Demo Test', function () {
  // let driver, loc, el;
  // function switchToIframe (){
  //   driver = browser.driver;
  //   loc = by.tagName('iframe');
  //   el = driver.findElement(loc);
  //   return browser.switchTo().frame(el);
  // }
  it('First StoryBook Spec', async function () {
    // browser.get('http://localhost:9001/iframe.html?id=test-demo-4--test-result-panel-stacked');
    // since('Title is supposed to be #{expected}, instead we have #{actual}')
    //   .expect(browser.getTitle()).toEqual('Storybook');
    // let el = $('#quickSearch-result-dataset-1').$('.QuickSearchItemHeader');
    // console.log('####'+el);
    // since('Header is supposed to be #{expected}, instead we have #{actual}')
    //   .expect(await el.getText()).toEqual('DATASETS');
    // await $('#quickSearch-result-dataset-1').$('.QuickSearchItem-desc').click();
    // await browser.sleep(2000);
    // let alertBox = await browser.switchTo().alert();
    // browser.wait(protractor.ExpectedConditions.alertIsPresent(), 3000, 'The alert window was not present');
    // since('Alert Text is supposed to be #{expected}, instead we have #{actual}')
    //   .expect(alertBox.getText()).toEqual('Object ID: CBDB1AD211E93622182B0080EFC58054');
    // await alertBox.accept();
    // await browser.sleep(2000);
    // await browser.get('http://localhost:9001/?path=/story/test-demo-4--test-result-panel-stacked');
    // switchToIframe();
    let driver = browser.driver;
    let loc = by.tagName('iframe');
    let el = driver.findElement(loc);
    await browser.switchTo().frame(el);
    let dataset1 = $('#quickSearch-result-dataset-1').$('.QuickSearchItemHeader');
    since('Header is supposed to be #{expected}, instead we have #{actual}')
      .expect(await dataset1.getText()).toEqual('DATASETS');
    await $('#quickSearch-result-dataset-1').$('.QuickSearchItem-desc').click();
    await browser.sleep(2000);
    let alertBox = await browser.switchTo().alert();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 3000, 'The alert window was not present');
    since('Alert Text is supposed to be #{expected}, instead we have #{actual}')
      .expect(alertBox.getText()).toEqual('Object ID: CBDB1AD211E93622182B0080EFC58054');
    await alertBox.accept();
    browser.switchTo().defaultContent();
    await $('#test-demo-4--test-result-panel-dataset').click();
    await browser.sleep(3000);
    await browser.switchTo().frame(el);
    await $('.QuickSearchItem-img.QuickSearchItem-img-dataset').click();
    await browser.sleep(3000);
    browser.switchTo().defaultContent();
    let actionLog = await $('#storybook-panel-root').$('.css-1wl5327').getText();
    actionLog = actionLog.substring(1);
    since('Action log is supposed to be #{expected}, instead we have #{actual}')
      .expect(await actionLog).toEqual('Dossier editor launched with ID: ["CBDB1AD211E93622182B0080EFC58054"]');
  });
});