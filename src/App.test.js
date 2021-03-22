import Error from './components/Error/Error';
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "./components/App/App";
import React from 'react';
import ReactDOM from 'react-dom'

describe(`rendering components`, () => {
    test(`renders App without Nav`, () => {
        const container = mount(<MemoryRouter initialEntries={["/"]}> <App /> </MemoryRouter>);
        expect(container.debug().search('header_page'))
    });

    test(`renders App without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter initialEntries={["/"]}> <App /> </MemoryRouter>, div);
    });

    test(`renders error`, () => {
        const wrapper = mount(<Error error={'some_error'} />);
        expect(wrapper.text()).toEqual('some_error');
    });
});

describe(`react-router test`, () => {
    test('should  render the home page', () => {
        const container = mount(<MemoryRouter initialEntries={["/news"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('news_page')).not.toBe(-1);
    });
    test('should  render the not_found page', () => {
        const container = mount(<MemoryRouter initialEntries={["/some_underfined_url"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('error_page')).not.toBe(-1);
    });
});
