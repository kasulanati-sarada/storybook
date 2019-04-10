import BasePage from './BasePage';
export default class AddonTabs extends BasePage {
    getAddonRoot() {
        return this.$('#storybook-panel-root');
    }

    getAddonTabs(name) {
        return this.$(`div[role='tablist']`).$$('button').filter(async (elem) => {
            return (name === await elem.getText());
        });
    }

    getActionLogger() {
        return this.$('.css-41cu7w').$$('div').get(0);
    }

    getClearActionLogger() {
        return this.$$('button').filter(async (elem) => {
            let buttonName = await elem.getText();
            return buttonName === "Clear";
        }).first();
    }

    async clearActionLogger() {
        await this.getClearActionLogger().click();
        return this.sleep(500);
    }

    async selectAddon(name) {
        await this.getAddonTabs(name).click();
        return this.sleep(500);
    }

    async violations(text) {
        if (text === await this.$('.css-qacwg0').getText()) {
            return true;
        }
        else {
            console.log('Accessibility Violations:\n');
            await this.getAddonRoot().$$('.css-0').filter(async (elem) => {
                console.log(await elem.getText());
            });
            return false;
        }
    }

    async logger(text) {
        let fulltext = await this.getActionLogger().getText();
        fulltext = fulltext.split('"');
        let id = fulltext[1];
        console.log('Full text ID: ' + id);
        if (text === id) {
            return true;
        } else
            return false;
    }
}