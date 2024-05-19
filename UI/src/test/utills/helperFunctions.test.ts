import { describe } from "node:test"
import { getUserCount } from "../../utills/helperFunctions"


describe("Test cases for helper functions", () => {
    test("test for getUserCount() if country listed",() => {
        expect(getUserCount([
            {
                "id": "cbbe",
                "name": "India",
                "userCount": 4000
            },
            {
                "id": "d24f",
                "name": "Africa",
                "userCount": 500
            }
        ],"India")).toEqual(4000)
    })
    test("test for getUserCount() if country not listed",() => {
        expect(getUserCount([
            {
                "id": "cbbe",
                "name": "India",
                "userCount": 4000
            },
            {
                "id": "d24f",
                "name": "Africa",
                "userCount": 500
            }
        ],"Albania")).toEqual(0)
    })
})