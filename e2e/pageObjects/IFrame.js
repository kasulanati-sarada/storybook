import BasePage from './BasePage';
export default class IFrame extends BasePage {

    getDataset() {
        return this.$('.QuickSearchListView-dataset');
    }

    getDatasetItem(datasetName) {
        return this.getDataset().$$('.QuickSearchItem').filter(async (elem) => {
            return (datasetName === await elem.getText());
        }).first();
    }

    getDocument() {
        return this.$('.QuickSearchListView-document');
    }

    getDocumentItem(documentName) {
        return this.getDocument().$$('.QuickSearchItem').filter(async (elem) => {
            return (documentName === await elem.getText());
        }).first();
    }

    getDossier() {
        return this.$('.QuickSearchListView-dossier');
    }

    getDossierItem(dossierName) {
        return this.getDossier().$$('.QuickSearchItem').filter(async (elem) => {
            return (dossierName === await elem.getText());
        }).first();
    }

    getCard() {
        return this.$('.QuickSearchListView-card');
    }

    getCardItem(cardName) {
        return this.getCard().$$('.QuickSearchItem').filter(async (elem) => {
            return (cardName === await elem.getText());
        }).first();
    }

    getReport() {
        return this.$('.QuickSearchListView-report');
    }

    getReportItem(reportName) {
        return this.getReport().$$('.QuickSearchItem').filter(async (elem) => {
            return (reportName === await elem.getText());
        }).first();
    }

    async selectDataset(datasetName) {
        await this.getDatasetItem(datasetName).click();
        return this.sleep(500);
    }

    async selectDocument(documentName) {
        await this.getDocumentItem(documentName).click();
        return this.sleep(500);
    }

    async selectDossier(dossierName) {
        await this.getDossierItem(dossierName).click();
        return this.sleep(500);
    }

    async selectCard(cardName) {
        await this.getCardItem(cardName).click();
        return this.sleep(500);
    }

    async selectReport(reportName) {
        await this.getReportItem().click(reportName);
        return this.sleep(500);
    }

    getAlert() {
        return this.brwsr.switchTo().alert();
    }

    async alertMessage() {
        return this.getAlert().getText();
    }

    async acceptAlert() {
        return this.getAlert().accept();
    }

}