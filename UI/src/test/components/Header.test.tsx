import {render} from '@testing-library/react'
import Header from '../../components/Header';

describe('Header Unit test cases', () => {
    test("test for rendering twho child divs",() => {
        const { getByTestId } = render(<Header/>);
        const header = getByTestId("header")
        expect(header.childNodes.length).toEqual(2)
    })
    test("test for rendering logo",() => {
        const { getByTestId } = render(<Header/>);
        const logoDiv = getByTestId("header").childNodes[0]
        expect(logoDiv.childNodes[0].src).toEqual("https://5214163.fs1.hubspotusercontent-na1.net/hubfs/5214163/horizontal-logo.png")
    })
})