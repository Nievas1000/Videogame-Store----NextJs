import { render } from "@testing-library/react";
import NavBar from "../pages/NavBar"

describe("NavBar", () => {
    it("render navbar", () => {
        const {getByTestId} = render(
            <NavBar titulo={"titulo"}/>
        )

        const title = getByTestId("titulo")
        expect(title).toBeInTheDocument()
    })
})