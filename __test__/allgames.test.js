import { render } from "@testing-library/react";
import Games, {getStaticProps} from "../pages/allgames"
import {useGame} from "../pages/context/CartContext"

jest.mock("../pages/context/CartContext")

describe("All games", () =>{

    it("render games", () => {
        const {games} = render(<Games games={[]}/>)
        expect(games).toMatchSnapshot()
    })

    describe("getStaticProps", () => {
        it("return allgames", async () =>{
            global.fetch = jest.fn()
            .mockImplementation(url => {
                return new Promise(resolve => {
                    resolve({
                        json: () => Promise.resolve({
                            slice: () => "allgames"
                        })
                    })
                })
            })
            const {props} = await getStaticProps()
            expect(props.games).toBe("allgames")
        })
    })

    beforeEach(() => {
        const datos = []
        useGame.mockImplementation(() => datos)
      })
})