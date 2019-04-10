import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuickSearchListView } from 'mstrweb-search';
import 'mstrweb-search/es/quickSearch/styles';
import '@storybook/addon-knobs/register';
import { action } from '@storybook/addon-actions';
import cardsData from './data/cardsData';
import documentData from './data/documentData';
import dossierData from './data/dossierData';
import datasetData from './data/datasetData';
import reportData from './data/reportData';
import quickSearchData from './data/quicksearchResultData';


function onItemSelect() {
  alert('Object ID: ' + this.itemId);
}

storiesOf('Quick Search', module)
  .add('Dataset Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={datasetData} />))
  .add('Dossier Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={dossierData} />))
  .add('Cards Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={cardsData} />))
  .add('Document Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={documentData} />))
  .add('Report Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={reportData} />))
  .add('Result Set', () => (<QuickSearchListView onItemSelect={onItemSelect} searchItems={quickSearchData} />))