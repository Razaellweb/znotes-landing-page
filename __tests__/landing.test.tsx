// __tests__/landing.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "../pages/landing";

describe("Znotes Landing Page", () => {
  it("renders the hero section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /the smart way to notes/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
  });

  it("renders features section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /features/i })).toBeInTheDocument();
  });

  it("renders social proof section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /trusted by students/i })).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what users say/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /get znotes on all your devices/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ready to get organized/i })).toBeInTheDocument();
  });

  it("is accessible and responsive", () => {
    render(<Landing />);
    // Check for aria-labels
    expect(screen.getByLabelText(/hero section/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/features and benefits/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/social proof and trust/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/frequently asked questions/i)).toBeInTheDocument();
  });
});
