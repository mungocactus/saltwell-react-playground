// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("App", () => {
	it("Saltwell should be in document", () => {
		render(<Header />);
		expect(screen.getByText("Saltwell")).toBeInTheDocument();
	});

	it("Playground should be in document", () => {
		render(<Header />);
		expect(screen.getByText("Playground")).toBeInTheDocument();
	});
});
