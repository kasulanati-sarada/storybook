import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuickSearchListView } from 'mstrweb-search';
import 'mstrweb-search/es/quickSearch/styles';
import '@storybook/addon-knobs/register';
import { decorate, action } from '@storybook/addon-actions';
import mockedData from './data/mockedData';

function onItemSelect() {
  const firstArg = decorate([args => args.slice(0, 1)]);

  //console.log('inside of function', this.itemId)
  // action.call(this, 'Test12345')
  // firstArg.action('Test12')
  // return action('Dossier launched successfully');
  alert('Object ID: ' + this.itemId);
  // return 'Test12345'

}

storiesOf('Test Demo 4', module)
  // .add('Test result panel dataset2', () => (<QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems = {mockedData.datasetData}/>))
  .add('Test result panel dataset', () => (<QuickSearchListView onItemSelect={action('Dossier editor launched with ID')} searchItems={mockedData.datasetData} />))
  // .add('Test result panel dossier', () => (<QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems = {mockedData.dossierData}/>))
  // .add('Test result panel cards', () => (<QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems = {mockedData.cardsData}/>))
  // .add('Test result panel document', () => (<QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems = {mockedData.documentData}/>))
  // .add('Test result panel report', () => (<QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems = {mockedData.reportData}/>))
  // .add('Test result panel complete', () => (<QuickSearchListView onItemSelect={onItemSelect()} searchItems = {mockedData.completeData}/>))
  .add('Test result panel stacked', () => (
    <React.Fragment>
      <h1>Combined Result Sets</h1>
      <h5>Dropdown dataset-result 1</h5>
      <div id="quickSearch-result-dataset-1">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.datasetData} />
      </div>

      <h5>Dropdown dataset-result 2</h5>
      <div id="quickSearch-result-dataset-2">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.datasetData} />
      </div>

      <h5>Dropdown dossier-result 1</h5>
      <div id="quickSearch-result-dossier-1">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.dossierData} />
      </div>

      <h5>Dropdown complete-result 1</h5>
      <div id="quickSearch-result-completeSet-1">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.completeData} />
      </div>

      <h5>Dropdown cards-result 1</h5>
      <div id="quickSearch-result-cards-1">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.cardsData} />
      </div>

      <h5>Dropdown doucments-result 1</h5>
      <div id="quickSearch-result-documents-1">
        <QuickSearchListView onItemSelect={onItemSelect} searchItems={mockedData.documentData} />
      </div>
    </React.Fragment>
  ))
