import React from "react";
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};


export const Secnodary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};
