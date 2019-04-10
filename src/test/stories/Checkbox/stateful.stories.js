import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '.';

class CheckboxStateful extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onCheckboxChange(value) {
        this.setState({ value });

        this.props.onCheckboxChange(value);
    };

    render() {
        return (
            <Checkbox
                value={this.state.value}
                onCheckboxChange={this.onCheckboxChange}
            >
                {this.props.children}
            </Checkbox>
        );
    }
}

storiesOf('Stateful Checkbox', module)
    .add('Stateful with checked', () => {
        const value = true;
        const children = 'My Checkbox Label';
        const onCheckboxChange = () => { };

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    })
    .add('Stateful with unchecked', () => {
        const value = false;
        const children = 'My Checkbox Label';
        const onCheckboxChange = () => { };

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    });