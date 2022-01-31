import { render } from "@testing-library/react";
import NavBar from "../pages/components/NavBar"
import {useGame} from "../pages/context/CartContext"

jest.mock("../pages/context/CartContext")

describe("NavBar", () => {
    beforeEach(() => {
        const datos = []
        useGame.mockImplementation(() => datos)
      })

    it("render navbar", () => {
        const {getByTestId} = render(
            <NavBar titulo={"titulo"}/>
        )
        
        const title = getByTestId("titulo")
        expect(title).toBeInTheDocument()
    })
})