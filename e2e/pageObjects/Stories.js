import BasePage from './BasePage';
export default class Stories extends BasePage {

    getStoryTabs(tabName) {
        return this.$(`a[title='${tabName}']`);
    }

    async selectStoryTab(tabName) {
        //console.log(this.getStoryTabs(tabName));
        await this.getStoryTabs(tabName).click();
        // return this.brwsr.driver.sleep(500);
        return true;
    }
}