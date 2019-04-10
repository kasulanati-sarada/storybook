import React from 'react';
import { storiesOf, addDecorator, addParameters } from '@storybook/react';
import { QuickSearchListView } from 'mstrweb-search';
import 'mstrweb-search/es/quickSearch/styles';
import mockedData from './data';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
const onItemSelect = (evt) => {
    alert('Test pop-up');
}

// const stories = storiesOf('Storybook Knobs', module);

addDecorator(withKnobs);

addDecorator(withA11y)
addParameters({
    a11y: {
        // ... axe options
        element: '#root', // optional selector which element to inspect
        config: {
            disableOtherRules: true,
            rules: [],
        }, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        options: {
            runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa"]
            }
        } // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
});

storiesOf('Test Demo 4', module)
    .add('Test result panel dataset', () => (
        <QuickSearchListView onItemSelect={onItemSelect.bind(this)} searchItems={mockedData.datasetData} />),
        { notes: 'Click on the dossier item to interact with Quick Search Component' }
    )
    .add('Accessible', () => (
        <button>
            Accessible button
    </button>
    ))
    .add('Inaccessible', () => (
        <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
            Inaccessible button
    </button>
    ))
    .add('with a button', () => (
        <button disabled={boolean('Disabled', false)} >
            {text('Label', 'Hello Storybook')}
        </button>
    ))
    .add('as dynamic variables', () => {
        const name = text('Name', 'MicroStrategy');
        const age = number('Age', 30);

        const content = `I am ${name} and I'm ${age} years old.`;
        return (<div>{content}</div>);
    });


