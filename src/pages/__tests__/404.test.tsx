import Error404Page from "../404";
import type { PageProps } from "gatsby";
import React from "react";
import { render } from "@testing-library/react";

const props = {};

describe("<Error404Page>", () => {
	it("should render", () => {
		expect(document.body.innerHTML).toBe("");
		render(<Error404Page {...(props as unknown as PageProps)} />);
		expect(document.body.innerHTML).not.toBe("");
	});
});
