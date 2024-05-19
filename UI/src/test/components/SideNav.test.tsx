import {render} from '@testing-library/react'
import SideNav from '../../components/SideNav';

describe('SideNav Unit test cases', () => {
    test("test for rendering twho child divs",() => {
        const { getByTestId } = render(<SideNav menu='map' setMenu={() => {}}/>);
        const sideNav = getByTestId("sideNav")
        expect(sideNav.childNodes.length).toEqual(2)
    })
})