import { browser } from "protractor";

export default class BasePage {
    constructor() {
        this.brwsr = browser;
        this.$ = this.brwsr.$;
        this.$$ = this.brwsr.$$;
        this.element = this.brwsr.element;
        this.EC = this.brwsr.ExpectedConditions;
    }

    async openStorybook() {
        await this.brwsr.get(this.brwsr.baseUrl);
        return browser.driver.sleep(2000);
    }

    async switchToIFrame() {
        return this.brwsr.switchTo().frame(await this.element(by.tagName('iframe')).getWebElement());
    }

    async switchToDefaultContent() {
        return this.brwsr.switchTo().defaultContent();
    }

    // Browser Utils

    async executeScript(...args) {
        return this.brwsr.executeScript(...args);
    }

    async sleep(duration) {
        return this.brwsr.sleep(duration);
    }

    async wait(...condition) {
        return this.brwsr.wait(...condition);
    }
    async resizeWindow(width, height) {
        await this.brwsr.manage().window().setSize(width, height);
        return this.sleep(2000);
    }

    async getBrowserTabs() {
        return this.brwsr.getAllWindowHandles();
    }

    async switchToWindow(tabInstance) {
        return this.brwsr.switchTo().window(tabInstance);
    }

    async currentURL() {
        return this.brwsr.getCurrentUrl();
    }

    async closeCurrentTab() {
        return this.brwsr.close();
    }

    async scrollDown({ elem, offset }) {
        await this.executeScript('arguments[0].scrollTop = arguments[1];', elem.getWebElement(), offset);
        return this.sleep(1000);
    }

    async reload() {
        await this.brwsr.refresh();
        return this.sleep(5000);
    }

    async switchToTab(tabIndex) {
        const handles = await this.getBrowserTabs();
        return this.switchToWindow(handles[tabIndex]);
    }

    async tabCount() {
        const handles = await this.getBrowserTabs();
        return handles.length;
    }
}