import { render } from "@testing-library/react";
import Home, {getStaticProps} from "../pages/index"

describe("Home", () => {

    it("render Home", () => {
        const {home} = render(<Home gamesByDate={[]} gamesRelevance={[]}/>)
        expect(home).toMatchSnapshot()
    })

    describe("getStaticProps", () => {
        it("return games relevant", async () =>{
            global.fetch = jest.fn()
            .mockImplementation(url => {
                return new Promise(resolve => {
                    resolve({
                        json: () => Promise.resolve({
                            slice: () => "games relevant"
                        })
                    })
                })
            })
            const {props} = await getStaticProps()
            expect(props.gamesRelevance).toBe("games relevant")
        })
        it("return games by date", async () =>{
            global.fetch = jest.fn()
            .mockImplementation(url => {
                return new Promise(resolve => {
                    resolve({
                        json: () => Promise.resolve({
                            slice: () => "games by date"
                        })
                    })
                })
            })
            const {props} = await getStaticProps()
            expect(props.gamesByDate).toBe("games by date")
        })
    })
})