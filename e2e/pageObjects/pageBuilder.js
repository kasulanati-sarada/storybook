import Stories from './Stories';
import AddonTabs from './AddonTabs';
import IFrame from './IFrame';

function pageBuilder() {
    const stories = new Stories();
    const addonTabs = new AddonTabs();
    const iFrame = new IFrame();

    return { stories, addonTabs, iFrame };
}

module.exports = pageBuilder;
