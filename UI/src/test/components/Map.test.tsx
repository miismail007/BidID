import {render} from '@testing-library/react'
import Map from '../../components/Map';

describe('Map Unit test cases', () => {
    const countryData = [
        {
            id: "123",
            name: "India",
            userCount: 300
        }
    ]
    test("test for rendering twho child divs",() => {
        const { getByTestId } = render(<Map countryData={countryData} totalCount={300}/>);
        const MapElemnt = getByTestId("userCount")
        expect(MapElemnt.textContent).toEqual("300")
    })
})