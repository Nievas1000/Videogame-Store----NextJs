import { render } from "@testing-library/react";
import SignIn from "../pages/signin";

describe("SignIn", () =>{

    it("render SignIn", () => {
        const {sigin} = render(<SignIn />)
        expect(sigin).toMatchSnapshot()
    })
})
